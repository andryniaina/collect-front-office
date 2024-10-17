import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  maxBodyLength: Infinity,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
    }
    return config;
  },
  (error) => {

    return Promise.reject(error)
  }
);