import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap';
const Navbar = (props) => {
  const authLinks = (
    <ul>
      <li>
        <h5>@ {props.loggedUser && props.loggedUser.username}</h5>
      </li>
    </ul>
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
      <Fragment>{props.isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
