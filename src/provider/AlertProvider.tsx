import React, { useState } from "react";
import { AlertContext } from "../context/Context";

export const AlertProvider = ({ children }: any) => {
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
