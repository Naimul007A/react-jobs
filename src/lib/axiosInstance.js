// src/api/axiosInstance.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
// REQUEST Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global handling: if 401, redirect to login
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export default apiClient;
