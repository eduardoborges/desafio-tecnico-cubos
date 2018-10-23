import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c1a498b67ddffdba915545915eedcc3b'
  }
});

export default class Movies {
  static search(query) {
    return API.get('/search/movie', {
      params: {
        query: query
      }
    });
  }

  static get(id) {
    return API.get(`movie/${id}`);
  }
}
