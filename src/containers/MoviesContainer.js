import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// contexts
import MainContext from '../contexts/MoviesContext';

//services
import movies from '../services/movies';

// screens
import MoviesSearch from '../screens/MoviesSearch';
import MovieDetails from '../screens/MovieDetails';

// components
import Header from '../components/Header';

const { Provider } = MainContext;

class MainContainer extends Component {
  state = {
    searchInput: 'avengers',
    searchResults: {
      page: 0,
      total_results: 0,
      total_pages: 0,
      results: []
    },
    searchIsLoading: false,
    currentPage: 1,
    genreList: []
  };

  // just for simulate

  componentDidMount = () => {
    this.getGenreList();
    this.onHandleSearch();
  };

  getGenreList = () => {
    movies
      .getGenreList()
      .then(resp => this.setState({ genreList: resp.data.genres }));
  };

  /**
   * @param {Event} event The handled event
   */
  onChangeSearch = event => {
    event.preventDefault();
    this.setState({ searchInput: event.target.value });
  };

  /**
   * @param {Event} event The handled event
   */
  onHandleSearch = event => {
    if (event) {
      event.preventDefault();
    }
    this.setState({ searchIsLoading: true });
    const { searchInput, currentPage } = this.state;
    movies
      .search(searchInput, currentPage)
      .then(resp => {
        console.log(resp.data);
        this.setState({ searchResults: resp.data, searchIsLoading: false });
      })
      .catch(this.handleErr);
  };

  resolveGenreId = id => {
    return this.state.genreList.find(item => item.id === id);
  };

  /**
   * @param {Number} pageId Number of the page
   */
  goToPage = pageId => {
    this.setState({ currentPage: pageId }, () => {
      this.onHandleSearch();
    });
  };

  render = () => {
    return (
      <Provider value={{ ...this }}>
        <Header />
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={MoviesSearch} />
            <Route path="/filme/:id" exact component={MovieDetails} />
          </Switch>
        </div>
      </Provider>
    );
  };
}

export default MainContainer;
