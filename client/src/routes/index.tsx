import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { MainPage } from "pages/index";

export const Routes = () => {
  return (
    <Router>
      <Redirect to="/main" />
      <Switch>
        <Route exact path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
};
