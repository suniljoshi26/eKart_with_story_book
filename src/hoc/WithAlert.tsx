import React from "react";
import { useContext } from "react";
import { AlertContext } from "../context/Context";

const WithAlert = (IncomingComponent: any) => {
  const outgoingComponent = (props: any) => {
    const contexData: any = useContext(AlertContext);
    return <IncomingComponent {...props} {...contexData} />;
  };

  return outgoingComponent;
};
export default WithAlert;
