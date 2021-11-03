import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import setAuthToken from "../../utils/setAuth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { currentUser, setIsAuthenticated, setUser, setIsLoaded } =
    useContext(AuthContext);

  const { email, password } = formData;
  const history = useHistory();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", formData);
      const { token } = res.data;
      const { user } = res.data;
      console.log(res.data);
      setAuthToken(token);
      setIsAuthenticated(true);
      setUser(user);
      setIsLoaded(true);
      currentUser();
      history.push("/welcome");
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
