
import { Navigate } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <AppLayout>{children}</AppLayout>;
}
