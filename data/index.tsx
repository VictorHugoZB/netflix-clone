import axios from 'axios';
import { Collections, MediaType, MovieCollection } from '../types';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const QUERY_URL = `api_key=${API_KEY}&language=pt-BR`;

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
    type: 'tv',
  }),
  getTopRatedShows: async (): Promise<MovieCollection> => ({
    id: 'topratedseries',
    title: 'Séries Melhores Avaliadas',
    res: (await axios.get(`${BASE_URL}/tv/top_rated?${QUERY_URL}`)).data.results,
    type: 'tv',
  }),
  getOnTheAirShows: async (): Promise<MovieCollection> => ({
    id: 'ontheairseries',
    title: 'Séries Passando agora',
    res: (await axios.get(`${BASE_URL}/tv/on_the_air?${QUERY_URL}`)).data.results,
    type: 'tv',
  }),
};

const getShowById = (id: string, mediaType: MediaType) => axios.get(`${BASE_URL}/${mediaType}/${id}?${QUERY_URL}`);

const searchItems = (query: string) => axios
  .get(`${BASE_URL}/search/multi?${QUERY_URL}&query=${query}`)
  .then(({ data }) => data)
  .catch((e) => console.error(e));

export default collections;

export {
  getShowById,
  searchItems,
};
