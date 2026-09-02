import { useState } from "react";
import { TokenContext } from "./TokenContext";

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token"),
  );

  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return (
    <TokenContext.Provider value={{ token, setToken, logOut }}>
      {children}
    </TokenContext.Provider>
  );
}
