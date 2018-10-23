import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// contexts
import MainContext from '../contexts/MoviesContext';

//services
import movies from '../services/movies';

// screens
import MoviesSearch from '../screens/MoviesSearch';

const { Provider } = MainContext;

class MainContainer extends Component {
  state = {
    foo: 'bar'
  };

  componentDidMount = () => {
    movies.search('avengers').then(resp => {
      this.setState({ searchResults: resp.data });
      console.log(resp.data);
    });

    movies.get(24428).then(resp => {
      console.log(resp.data);
    });
  };

  doSomething = () => {
    return false;
  };

  render = () => {
    return (
      <Provider value={{ ...this }}>
        <Switch>
          <Route path="/" component={MoviesSearch} />
        </Switch>
      </Provider>
    );
  };
}

export default MainContainer;
