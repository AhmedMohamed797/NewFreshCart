import { useState } from "react";
import { TokenContext } from "./TokenContext";

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
