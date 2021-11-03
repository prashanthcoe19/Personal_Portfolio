import React from "react";
import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <div>
      <h1>All Steps Completed</h1>
      <Link to="/portfolio">
        <button class="btn btn-primary">View Your Portfolio</button>
      </Link>
    </div>
  );
};

export default Submit;
