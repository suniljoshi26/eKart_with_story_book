import axios from "axios";
import React, { useEffect, useState } from "react";
import { userContext } from "../context/context";
import Loading from "../Loading";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  //loading use state
  const [loadingUser, setLoadingUser] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);

          console.log("response", response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser) {
    return <Loading />;
  }
  return (
    <userContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
export default UserProvider;
