import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
const Landing = (props) => {
  console.log(props);
  if (props.isAuthenticated === true) {
    return <Redirect to="/create" />;
  }
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Portfolio</h1>
            <p className="lead">
              Create a developer portfloio. Sign Up and you are just one click
              away!!
            </p>
            <div className="buttons">
              <a href="/register" className="btn btn-primary">
                Sign Up
              </a>
              <a href="/login" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
