import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";
import Spinner from "./Spinner";
import Logout from "./Logout";
const Navbar = (props) => {
  const { user, isAuthenticated, isLoaded } = useContext(AuthContext);
  // if (!isLoaded) return <Spinner />;
  const authLinks = (
    <Fragment>
      <ul>
        <li>{!isLoaded ? <h5>... </h5> : <h5>@{user?.username}</h5>}</li>
      </ul>
      <ul>
        <li>
          <Logout />
        </li>
      </ul>
    </Fragment>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <h1>
        <i className="fas fa-address-card">Portfolio-Builder</i>
      </h1>
      <Fragment>
        {isAuthenticated && isLoaded ? authLinks : guestLinks}
      </Fragment>
    </nav>
  );
};

export default Navbar;
