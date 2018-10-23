import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// context
import MoviesContext from '../contexts/MoviesContext';
const { Consumer } = MoviesContext;

const MovieItemResult = props => {
  return (
    <Link to={`filme/${props.id}`} className="movie-item-result">
      <div className="columns">
        <div className="column">
          <div className="cover">
            <img
              src={`https://image.tmdb.org/t/p/w300/${props.poster_path}`}
              alt={props.title}
            />
          </div>
        </div>
        <div className="column details">
          <h2 className="title">{props.title}</h2>
          <span className="vote">
            <span>{props.vote_average * 10}%</span>
          </span>
          <span className="release">
            {moment(props.release_date).format('L')}
          </span>
          <p className="overview">
            {String(props.overview).length > 400
              ? props.overview.substring(0, 400) + '[...]'
              : props.overview}
            <br />
            <br />
            <div className="genres">
              {props.genre_ids
                .map(genreId => props.resolveGenreId(genreId))
                .map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieItemResult;
