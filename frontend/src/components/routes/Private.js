import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../../layout/Spinner";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoaded } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoaded ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
