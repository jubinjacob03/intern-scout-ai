export interface User {
    _id: string;
    fullName: string;
    email: string;
    role: 'super-admin' | 'admin';
    isActive: boolean;
    lastLogin?: Date;
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