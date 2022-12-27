import React from "react";
import { useContext } from "react";
import { AlertContext, CartContext, userContext } from "../context/Context";
const WithProvider = (provider: any) => {
  const myHoc = (IncomingComponent: any) => {
    const outgoingComponent = (props: any) => {
      const contexData: any = useContext(provider);
      return <IncomingComponent {...props} {...contexData} />;
    };

    return outgoingComponent;
  };
  return myHoc;
};
export default WithProvider;

export const WithAlert = WithProvider(AlertContext);
export const WithUser = WithProvider(userContext);
export const WithCart = WithProvider(CartContext);
