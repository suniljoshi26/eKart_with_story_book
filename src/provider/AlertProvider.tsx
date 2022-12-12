import React, { useState } from "react";
import { AlertContext } from "../context/context";

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState();
  // alert remove code
  const removeAlert = () => {
    setAlert(undefined);
  };

  return (
    <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
