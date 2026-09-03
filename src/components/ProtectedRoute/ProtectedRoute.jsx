import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { TokenContext } from "../../context/TokenContext/TokenContext";
import Loading from "../Loading/Loading";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useContext(TokenContext);
  const location = useLocation();

  if (isLoading) return <Loading />;

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
