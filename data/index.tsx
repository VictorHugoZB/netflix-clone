import axios from 'axios';
import { Collections, MovieCollection } from '../types';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const QUERY_URL = `api_key=${API_KEY}&language=pt-BR`;

const collections: Collections = {
  getNowPlayingMovies: async (): Promise<MovieCollection> => ({
    id: 'nowplayingmovies',
    title: 'Filmes Passando Agora',
    res: (await axios.get(`${BASE_URL}/movie/now_playing?${QUERY_URL}`)).data.results,
    type: 'movie',
  }),
  getTopRatedMovies: async (): Promise<MovieCollection> => ({
    id: 'topratedmovies',
    title: 'Filmes Melhores Avaliados',
    res: (await axios.get(`${BASE_URL}/movie/top_rated?${QUERY_URL}`)).data.results,
    type: 'movie',
  }),
  getPopularMovies: async (): Promise<MovieCollection> => ({
    id: 'popularmovies',
    title: 'Filmes Populares',
    res: (await axios.get(`${BASE_URL}/movie/popular?${QUERY_URL}`)).data.results,
    type: 'movie',
  }),
  getPopularShows: async (): Promise<MovieCollection> => ({
    id: 'popularseries',
    title: 'Séries Populares',
    res: (await axios.get(`${BASE_URL}/tv/popular?${QUERY_URL}`)).data.results,
    type: 'series',
  }),
  getTopRatedShows: async (): Promise<MovieCollection> => ({
    id: 'topratedseries',
    title: 'Séries Melhores Avaliadas',
    res: (await axios.get(`${BASE_URL}/tv/top_rated?${QUERY_URL}`)).data.results,
    type: 'series',
  }),
  getOnTheAirShows: async (): Promise<MovieCollection> => ({
    id: 'ontheairseries',
    title: 'Séries Passando agora',
    res: (await axios.get(`${BASE_URL}/tv/on_the_air?${QUERY_URL}`)).data.results,
    type: 'series',
  }),
};

const getMovieById = (id: string) => axios.get(`${BASE_URL}/movie/${id}?${QUERY_URL}`);

const getSeriesById = (id: string) => axios.get(`${BASE_URL}/tv/${id}?${QUERY_URL}`);

export default collections;

export {
  getMovieById,
  getSeriesById,
};
