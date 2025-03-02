// src/components/auth/protected-route.tsx
import { Navigate } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

  // Check token validity
  if (!token || isTokenExpired(token)) {
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }

  // Check role authorization
  if (allowedRoles && allowedRoles.length > 0) {
    const decodedToken = jwtDecode<{ role: string }>(token);
    if (!allowedRoles.includes(decodedToken.role)) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <AppLayout>{children}</AppLayout>;
}

function isTokenExpired(token: string) {
  const decoded = jwtDecode<{ exp: number }>(token);
  return decoded.exp * 1000 < Date.now();
}