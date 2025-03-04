import axios from 'axios';
import { API_BASE_URL } from './api-client';
import { User } from '@/types/user';
import type { AxiosResponse, AxiosError } from 'axios';

interface LoginResponse {
    data: {
        user: User;
        token: string;
    };
}

export const authApi = {
    login: async (credentials: { email: string; password: string }) => {
        return axios.post<LoginResponse>(
            `${API_BASE_URL}/api/v1/auth/login`,
            credentials,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    },

    logout: async () => {
        return axios.post<void>(
            `${API_BASE_URL}/api/v1/auth/logout`,
            null,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    },
};

// Response interceptor
axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<{ message?: string }>) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
