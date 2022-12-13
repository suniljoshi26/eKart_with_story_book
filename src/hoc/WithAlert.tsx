import React from "react";
import { useContext } from "react";
import { AlertContext } from "../context/context";

const WithAlert = (IncomingComponent) => {
  const outgoingComponent = (props) => {
    const contexData = useContext(AlertContext);
    return <IncomingComponent {...props} {...contexData} />;
  };

  return outgoingComponent;
};
export default WithAlert;
