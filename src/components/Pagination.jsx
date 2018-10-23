import React from 'react';

import context from '../contexts/MoviesContext';
const { Consumer } = context;

const Pagination = () => {
  return (
    <Consumer>
      {({ state, goToPage }) => {
        const totalPages = state.searchResults.total_pages;
        const currentPage = state.currentPage;

        return (
          <div className="pagination">
            {[...Array(totalPages).keys()].map(x => x + 1).map(number => (
              <div
                key={number}
                className={`pagination-item ${
                  currentPage === number ? 'is-active' : ''
                }`}
                onClick={() => goToPage(number)}
              >
                {number}
              </div>
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Pagination;
