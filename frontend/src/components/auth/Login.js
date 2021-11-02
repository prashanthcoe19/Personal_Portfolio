import React, { Fragment, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuth";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { PersonalContext } from "../context/PersonalContext";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    isAuthenticated,
    currentUser,
    setIsAuthenticated,
    setUser,
    setIsLoaded,
    setToken,
  } = useContext(AuthContext);
  const { getPersonal } = useContext(PersonalContext);
  if (isAuthenticated === true) {
    return <Redirect to="/create" />;
  }

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", formData);
      const { token } = res.data;
      console.log(res.data);
      setAuthToken(token);
      setIsAuthenticated(true);
      setUser(res.data);
      setIsLoaded(true);
      currentUser();
      getPersonal();
      history.push("/create");
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Fragment>
      <h1 className="medium text-secondary">Log In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
