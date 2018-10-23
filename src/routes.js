import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MoviesContainer} />
      <Route path="*" render={() => <h1>Not Found</h1>} />
    </Switch>
  );
};

export default Routes;
