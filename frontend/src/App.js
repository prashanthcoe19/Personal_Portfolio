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
  const currentUser = async () => {
    try {
      const res = await axios.get("/api/auth");
      setisAuthenticated((prevState) => !prevState.isAuthenticated);
      setLoggedUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    currentUser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} loggedUser={loggedUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Landing {...props} isAuthenticated={isAuthenticated} />
            )}
          />
          <Route
            render={(props) => (
              <Routes
                {...props}
                currentUser={currentUser}
                isAuthenticated={isAuthenticated}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
