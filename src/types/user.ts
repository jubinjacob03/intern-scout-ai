export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface CreateUserData {
  fullName: string;
  email: string;
  password: string;
  role: 'admin';
}

export interface UpdateUserData {
  fullName?: string;
  email?: string;
  role?: 'admin';
  isActive?: boolean;
}