import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
apiClient.interceptors.request.use(config => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('authToken='))
    ?.split('=')[1];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
apiClient.interceptors.request.use(config => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (csrfToken) config.headers['X-CSRF-Token'] = csrfToken;
  return config;
});

export default apiClient;
