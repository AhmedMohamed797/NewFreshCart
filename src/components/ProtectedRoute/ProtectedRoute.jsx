import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { TokenContext } from "../../context/TokenContext/TokenContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(TokenContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
