import React from 'react';

// components
import MovieItemResult from '../components/MovieItemResult';
import Pagination from '../components/Pagination';

// context
import MoviesContext from '../contexts/MoviesContext';
const { Consumer } = MoviesContext;

const SearchMovies = () => (
  <Consumer>
    {({ state, onChangeSearch, onHandleSearch, resolveGenreId }) => {
      return (
        <div id="movies-search">
          <form className="search-bar" onSubmit={onHandleSearch}>
            <input
              type="text"
              onChange={onChangeSearch}
              value={state.searchInput}
              placeholder="Busque um filme por nome, ano ou gênero"
            />
            <button type="submit" hidden>
              Pesquisar
            </button>
          </form>
          <br />
          {state.searchIsLoading && <h3 className="">Carregando...</h3>}
          <div className="movies-results">
            {state.searchResults.results.map(result => (
              <MovieItemResult
                key={result.id}
                {...result}
                resolveGenreId={resolveGenreId}
              />
            ))}
          </div>
          <Pagination />
        </div>
      );
    }}
  </Consumer>
);

export default SearchMovies;
