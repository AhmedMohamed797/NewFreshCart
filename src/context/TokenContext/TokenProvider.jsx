import { useEffect, useState } from "react";
import { verifyToken } from "../../services/auth.service";
import { TokenContext } from "./TokenContext";

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token"),
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await verifyToken();

        if (response.success) {
          setIsAuthenticated(true);
          setUserInfo(response.data.decoded);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setIsError(true);
        setError(error);
      }
    };

    checkToken();
  }, [token]);

  function logOut() {
    setToken(null);
    setIsAuthenticated(false)
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        logOut,
        isAuthenticated,
        userInfo,
        isError,
        error,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
