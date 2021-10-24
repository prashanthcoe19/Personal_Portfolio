import React from "react";
import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <h1>
        <i className="fas fa-address-card">Portfolio-Builder</i>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
