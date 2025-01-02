// 21522804 Phạm Hoài Vũ

import { createContext, useState } from "react";

const AuthenContext = createContext(null);

const AuthenContextProvider = ({ children }) => {
  const [isAuthen, setAuthen] = useState(false);

  return (
    <AuthenContext.Provider value={{ isAuthen, setAuthen }}>
      {children}
    </AuthenContext.Provider>
  );
};

export { AuthenContext, AuthenContextProvider };
