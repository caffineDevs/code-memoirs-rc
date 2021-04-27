import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Router;
