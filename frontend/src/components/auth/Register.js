import React, { Fragment, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import setAuthToken from "../../utils/setAuth";
const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const { isAuthenticated, setIsAuthenticated, setUser, setIsLoaded } =
    useContext(AuthContext);
  // const { getPersonal } = useContext(PersonalContext);
  const { name, email, username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post("/api/user/signUp", formData);
      console.log(res.data);
      const { token } = res.data;
      console.log(res.data);
      setAuthToken(token);
      setIsAuthenticated(true);
      setUser(res.data);
      setIsLoaded(true);
      history.push("/welcome");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  if (isAuthenticated === true) {
    return <Redirect to="/welcome" />;
  }
  return (
    <Fragment>
      <h1 className="medium text-secondary">Register</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
