import { useEffect, useState } from 'react';
import { SubmissionDto } from '../datas/dtos/submissions';

// Global variable to store the database connection
let dbInstance: IDBDatabase | null = null;

const useIndexedDB = () => {
  const [db, setDb] = useState<IDBDatabase | null>(null);
  const [submissions,setSubmissions] = useState<SubmissionDto[] | any[]>([])

  useEffect(() => {
    // If the database is already open, use it
    if (dbInstance) {
      setDb(dbInstance);
      return;
    }

    // Open the database only once
    const request = indexedDB.open('submissions-db', 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('submissions')) {
        db.createObjectStore('submissions', { keyPath: '_id' });
      }
    };

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      dbInstance = db; // Store the opened instance in the global variable
      setDb(db);

      const transaction = db.transaction('submissions', 'readwrite');
      const store = transaction.objectStore('submissions');
      const request = store.getAll();

      request.onsuccess = () => {
        const submissions = request.result satisfies SubmissionDto[];
        console.log("Indexed db=> ",submissions) ;
        setSubmissions(submissions);
      };
    };

    request.onerror = () => {
      console.error('Failed to open IndexedDB');
    };

    
  }, []);

  // Function to save a submission
  const save = (submission: SubmissionDto): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!db) {
        reject('Database not initialized');
        return;
      }

      const transaction = db.transaction('submissions', 'readwrite');
      const store = transaction.objectStore('submissions');
      const request = store.put(submission);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject('Failed to save submission');
      };
    });
  };

  return { save, submissions };
};

export default useIndexedDB;
