import { createContext } from 'react';

const context = {
  state: {
    searchInput: '',
    searchResults: {
      page: 0,
      total_results: 0,
      total_pages: 0,
      results: []
    },
    searchIsLoading: false,
    currentPage: 1,
    genreList: []
  },
  onChangeSearch: event => {},
  onHandleSearch: event => {},
  handleGetMovieDetails: id => {},
  goToPage: id => {},
  resolveGenreId: id => {}
};

export default createContext(context);
