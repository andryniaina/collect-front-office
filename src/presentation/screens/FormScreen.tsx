import { useState } from "react";
import "./FormScreen.css";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { IField } from "../../datas/interfaces/forms";
import Field from "../components/field/Field";
import useIndexedDB from "../../hooks/useIndexedDB";
import { v4 as uuidv4 } from "uuid";
import { SubmissionDto } from "../../datas/dtos/submissions";
import LoginPopup from "../components/LoginPopup/LoginPopup";
import { createSubmission } from "../../services/submissions";

const FormScreen = () => {
  const { save, submissions } = useIndexedDB();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const [formValues, setFormValues] = useState({});
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const { id } = useParams() as { id: string };
  const { data: form, isLoading, error } = useForm(id as string);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const onSubmit = async() => {
    const _id = uuidv4();
    const submission: SubmissionDto = {
      _id,
      formId: id,
      data: formValues,
    };
    await createSubmission(submission);
    setFormValues({});
  };

  const onSave = async () => {
    const _id = uuidv4();
    const submission: SubmissionDto = {
      _id,
      formId: id,
      data: formValues,
    };
    await save(submission);
    setFormValues({});
  };

  const loadDraft = (draftId: string) => {
    const draft: SubmissionDto = submissions.find(
      (submission: SubmissionDto) => submission._id == draftId
    );
    if (!draft) return;

    setFormValues(draft.data);
  };

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  if (!form) return <div>Not Found</div>;
  return (
    <div className="page-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h3 className="sidebar-title">Drafts</h3>
        <div className="draft-list">
          {submissions.map((submission: SubmissionDto) => {
            return (
              <div
                className="draft-item"
                key={submission._id}
                onClick={() => {
                  loadDraft(submission._id);
                }}
              >
                Draft {submission._id}
              </div>
            );
          })}
        </div>
      </div>

      {/* Half-circle toggle button */}
      <div
        className={`toggle-button ${isSidebarOpen ? "open" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "<" : ">"}
      </div>

      <div className={`form-container ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="title">
          <p>{form.name}</p>
        </div>

        <div className="fields-container">
          {form.fields.map((field: IField) => {
            return (
              <Field
                field={field}
                key={field._id}
                setFormValues={setFormValues}
                formValues={formValues}
              />
            );
          })}

          <div className="submit-box">
            <div className="submit-button">
              <button className="submit-button-text" onClick={onSubmit}>
                Submit
              </button>
            </div>
            <div className="submit-button">
              <button className="save-button-text" onClick={onSave}>
                Save as draft
              </button>
            </div>
          </div>
        </div>
      </div>
      <LoginPopup isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} onClose={toggleLoginPopup} />
    </div>
  );
};

export default FormScreen;
