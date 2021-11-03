import React, { useContext, Fragment } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Welcome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div style={{ padding: "40px" }}>
      {/* {user ? ( */}
      <Fragment>
        <h1>Welcome {user && user.name}</h1>{" "}
        <Link to="/create">
          <button class="btn btn-primary">Create Portfolio</button>
        </Link>
      </Fragment>
      {/* ) : (
        <h1>Loading .... </h1>
      )} */}
    </div>
  );
};

export default Welcome;
