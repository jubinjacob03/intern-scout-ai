import axios from 'axios';
import { API_BASE_URL } from './api-client';
import { CreateUserData, UpdateUserData, User } from '@/types/user';

export const userApi = {
  createUser: (userData: CreateUserData) => {
    return axios.post<User>(
      `${API_BASE_URL}/api/v1/users`,
      userData,
      {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  },

  getAllUsers: () => {
    return axios.get<{ data: User[] }>(
      `${API_BASE_URL}/api/v1/users`,
      { withCredentials: true }
    );
  },

  updateUser: (id: string, userData: UpdateUserData) => {
    return axios.patch<User>(
      `${API_BASE_URL}/api/v1/users/${id}`,
      userData,
      { withCredentials: true }
    );
  },

  deleteUser: (id: string) => {
    return axios.delete<void>(
      `${API_BASE_URL}/api/v1/users/${id}`,
      { withCredentials: true }
    );
  },
  verifyToken: () =>
    axios.get(`${API_BASE_URL}/api/v1/users/verify-token`,
      { withCredentials: true }),
};
