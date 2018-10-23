import React from 'react';

// context
import MoviesContext from '../contexts/MoviesContext';
const { Consumer } = MoviesContext;

const SearchMovies = () => (
  <Consumer>
    {({ state }) => {
      return (
        <div id="movies-search">
          <h1>Movies Search</h1>
        </div>
      );
    }}
  </Consumer>
);

export default SearchMovies;
