import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "./Hoc/WithUser";

const UserRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};
export default WithUser(UserRoute);
