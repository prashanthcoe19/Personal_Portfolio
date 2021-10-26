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
        <Route
          exact
          path="/create"
          render={() => (
            <PortfolioForm
              {...props}
              currentUser={props.currentUser}
              isAuthenticated={props.isAuthenticated}
            />
          )}
        />
        {/* <Route
              exact
              path="/create"
              render={(props) => (
                <PortfolioForm {...props} currentUser={props.currentUser} />
              )}
          /> */}
      </Switch>
    </section>
  );
};

export default Routes;
