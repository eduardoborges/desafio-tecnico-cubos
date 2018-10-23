import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="container">
        <h2 className="title">Movies</h2>
      </Link>
    </header>
  );
};

export default Header;
