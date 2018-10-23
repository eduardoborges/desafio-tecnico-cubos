import React, { Component } from 'react';
import movies from '../services/movies';
import moment from 'moment';
moment.locale('pt-br');

class MovieDetails extends Component {
  state = {
    details: false,
    isLoading: true
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });
    movies.get(this.props.match.params.id).then(resp => {
      this.setState({ details: resp.data, isLoading: false });
      console.log(resp.data);
    });
  };

  formatMoney = amount =>
    '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  render() {
    const movie = this.state.details;
    return this.state.isLoading ? (
      <h1>Carregando...</h1>
    ) : (
      <div className="movie-details">
        <div className="card">
          <div className="card-header">
            <h1 className="title">{movie.title}</h1>
          </div>
          <div className="card-body columns">
            <div className="column details">
              <div className="subtitle is-underlined">Sinopse</div>
              <p className="overview">{movie.overview}</p>
              <div className="subtitle  is-underlined">Informações</div>
              <div className="columns informations">
                <div className="column">
                  <h4 className="subtitle">Situação</h4>
                  {movie.status}
                </div>
                <div className="column">
                  <h4 className="subtitle">Situação</h4>
                  {movie.status}
                </div>
                <div className="column">
                  <h4 className="subtitle">Idioma</h4>
                  {movie.spoken_languages.map(lan => (
                    <span>
                      {lan.name} {'  '}
                    </span>
                  ))}
                </div>
                <div className="column">
                  <h4 className="subtitle">Duração</h4>
                  {Math.floor(Number(movie.runtime) / 60)}h{' '}
                  {Math.floor((movie.runtime %= 3600 / 60))}
                  min
                </div>
                <div className="column">
                  <h4 className="subtitle">Orçamento</h4>
                  {this.formatMoney(movie.budget)}
                </div>
                <div className="column">
                  <h4 className="subtitle">Receita</h4>
                  {this.formatMoney(movie.revenue)}
                </div>
                <div className="column">
                  <h4 className="subtitle">Lucro</h4>
                  {this.formatMoney(movie.revenue - movie.budget)}
                </div>
              </div>
              <br />
              <br />
              <div className="columns genres">
                {movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              <span className="vote">
                <span>{movie.vote_average * 10}%</span>
              </span>

              <div className="columns">{movie.video && movie.video}</div>
            </div>
            <div className="column">
              <div className="cover">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
