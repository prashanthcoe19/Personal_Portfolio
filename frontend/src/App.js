import React, { useEffect, useState } from "react";
import Landing from "./layout/Landing";
import "./App.css";
import Navbar from "./layout/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
import setAuthToken from "./utils/setAuth";
import axios from "axios";
function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [isAuthenticated, setisAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const currentUser = async () => {
      try {
        const res = await axios.get("/api/auth");
        setisAuthenticated(!isAuthenticated);
        // const { token } = res.data;
        // setAuthToken(token);
        setLoggedUser(res.data);
        console.log(loggedUser);
      } catch (err) {
        console.log(err.response);
      }
    };
    currentUser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} loggedUser={loggedUser} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
