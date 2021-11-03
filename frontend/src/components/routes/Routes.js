import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PortfolioForm from "../portfolio/PortfolioForm";
import PrivateRoute from "./Private";
import PortfolioBuilder from "../portfolio/PortfolioBuilder";
import Welcome from "../portfolio/Welcome";
import FinalPort from "../../finalport/FinalPort";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <PrivateRoute exact path="/portfolio" component={FinalPort} /> */}
        <PrivateRoute exact path="/welcome" component={Welcome} />
        <PrivateRoute exact path="/create" component={PortfolioForm} />
      </Switch>
    </section>
  );
};

export default Routes;
