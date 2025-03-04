import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

import { userApi } from "@/api/user-api";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const [isValidating, setIsValidating] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('authToken='))
        ?.split('=')[1];

      console.log(token);

      if (!token) {
        handleLogout();
        return;
      }

      try {
        const response = await userApi.verifyToken();
        const user = response.data.data;
        console.log(user);

        if (allowedRoles && !allowedRoles.includes(user.role)) {
          navigate('/dashboard');
          return;
        }

      } catch (error) {
        console.error(error);
        handleLogout();
      } finally {
        setIsValidating(false);
      }
    };

    verifyAuth();
  }, [navigate, allowedRoles]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    document.cookie = 'authToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    navigate('/login');
  };

  if (isValidating) return <LoadingScreen />;

  return <AppLayout>{children}</AppLayout>;
}

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);
