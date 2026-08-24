import axios from "axios";
import { API_CONFIG } from "../config";

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: 30000,
});

apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response.data.message,
    });
  },
);
