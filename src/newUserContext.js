import { createContext, useState } from "react";

export const NewUserContext = createContext();

const ContextProvider = ({ children }) => {
  const [newObj, setNewObj] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  return (
    <NewUserContext.Provider value={{ newObj, setNewObj }}>
      {children}
    </NewUserContext.Provider>
  );
};
export default ContextProvider;
