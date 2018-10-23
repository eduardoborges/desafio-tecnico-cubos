import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="*" render={() => <h1>Not Found</h1>} />
    </Switch>
  );
};

export default Routes;
