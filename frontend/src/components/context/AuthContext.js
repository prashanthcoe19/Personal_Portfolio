import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import setAuthToken from "../../utils/setAuth";

export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentUser = async () => {
    try {
      const res = await api.get("/auth");
      setUser(res.data);
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
    setToken("");
    setIsAuthenticated(false);
    setIsLoaded(false);
  };

  useEffect(() => {
    if (token) {
      setAuthToken(localStorage.token);
      //   setToken(token);
    }
    currentUser();
  }, []);

  return (
    <div>
      {!isLoaded && token ? (
        <h1>Loading ... </h1>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            //   token,
            //   setToken,
            currentUser,
            isLoaded,
            setIsLoaded,
            logout,
            ...props,
          }}
        >
          {props.children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
export default AuthState;
