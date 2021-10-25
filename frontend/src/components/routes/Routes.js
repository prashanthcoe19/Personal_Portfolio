import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PortfolioForm from "../portfolio/PortfolioForm";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create" component={PortfolioForm} />
      </Switch>
    </section>
  );
};

export default Routes;
