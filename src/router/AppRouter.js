//vendor
import React from "react";
//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//components
import { LoginScreen } from "../components/Screen/LoginScreen";
import { LandingScreen } from "../components/Screen/LandingScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={LandingScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
