import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { TokenContext } from "../../context/TokenContext/TokenContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useContext(TokenContext);
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}
