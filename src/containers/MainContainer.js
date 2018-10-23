import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainContext from "../contexts/MainContext";

// screens
import MainScreen from "../screens/MainScreen";

const { Provider } = MainContext;

class MainContainer extends Component {
  state = {
    foo: "bar"
  };

  doSomething = () => {
    return false;
  };

  render = () => {
    return (
      <Provider value={{ ...this }}>
        <Switch>
          <Route path="/" component={MainScreen} />
        </Switch>
      </Provider>
    );
  };
}

export default MainContainer;
