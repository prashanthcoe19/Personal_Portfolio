import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import setAuthToken from "../../utils/setAuth";
// import setAuthToken from "../../utils/setAuth";

export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentUser = async () => {
    try {
      console.log(localStorage.getItem("token"));
      const res = await api.get("/auth");
      // const { user } = res.data;
      console.log(user);
      setUser(res.data);
      // setToken(localStorage.getItem("token"));
      setIsAuthenticated(true);
      setIsLoaded(true);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    setIsLoaded(false);
    setToken(null);
    // props.history.push("/login");
  };

  useEffect(() => {
    if (token) {
      setAuthToken(localStorage.getItem("token"));
    }
    currentUser();
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          isAuthenticated,
          setIsAuthenticated,
          currentUser,
          isLoaded,
          setIsLoaded,
          logout,
          ...props,
        }}
      >
        {props.children}
      </AuthContext.Provider>
      {/* )} */}
    </div>
  );
};
export default AuthState;
