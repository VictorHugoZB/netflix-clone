import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const QUERY_URL = `api_key=${API_KEY}&language=pt-BR`;

export default {
  getNowPlayingMovies: async () => ({
    id: 'nowplayingmovies',
    title: 'Filmes Passando Agora',
    res: await axios.get(`${BASE_URL}/movie/now_playing?${QUERY_URL}`),
  }),
  getTopRatedMovies: async () => ({
    id: 'topratedmovies',
    title: 'Filmes Melhores Avaliados',
    res: await axios.get(`${BASE_URL}/movie/top_rated?${QUERY_URL}`),
  }),
  getPopularMovies: async () => ({
    id: 'popularmovies',
    title: 'Filmes Populares',
    res: await axios.get(`${BASE_URL}/movie/popular?${QUERY_URL}`),
  }),
  getPopularShows: async () => ({
    id: 'popularseries',
    title: 'Séries Populares',
    res: await axios.get(`${BASE_URL}/tv/popular?${QUERY_URL}`),
  }),
  getTopRatedShows: async () => ({
    id: 'topratedseries',
    title: 'Séries Melhores Avaliadas',
    res: await axios.get(`${BASE_URL}/tv/top_rated?${QUERY_URL}`),
  }),
  getOnTheAirShows: async () => ({
    id: 'ontheairseries',
    title: 'Séries Passando agora',
    res: await axios.get(`${BASE_URL}/tv/on_the_air?${QUERY_URL}`),
  }),
};

const getMovieById = (id: string) => axios.get(`${BASE_URL}/movie/${id}?${QUERY_URL}`);

const getSeriesById = (id: string) => axios.get(`${BASE_URL}/tv/${id}?${QUERY_URL}`);

export {
  getMovieById,
  getSeriesById,
};
