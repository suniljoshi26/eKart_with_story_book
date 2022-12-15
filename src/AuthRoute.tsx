import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "./Hoc/WithUser";

const AuthRoute = ({ children, user }) => {
  console.log("hjjsajsajh", user);
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};
export default WithUser(AuthRoute);
