import axios from 'axios';
import { Collections, MediaType, MovieCollection } from '../types';

const collections: Collections = {
  getNowPlayingMovies: async (): Promise<MovieCollection> => ({
    id: 'nowplayingmovies',
    title: 'Filmes Passando Agora',
    res: (await axios.get('/api/moviedb/movie/now_playing')).data.results,
    type: 'movie',
  }),
  getTopRatedMovies: async (): Promise<MovieCollection> => ({
    id: 'topratedmovies',
    title: 'Filmes Melhores Avaliados',
    res: (await axios.get('/api/moviedb/movie/top_rated')).data.results,
    type: 'movie',
  }),
  getPopularMovies: async (): Promise<MovieCollection> => ({
    id: 'popularmovies',
    title: 'Filmes Populares',
    res: (await axios.get('/api/moviedb/movie/popular')).data.results,
    type: 'movie',
  }),
  getPopularShows: async (): Promise<MovieCollection> => ({
    id: 'popularseries',
    title: 'Séries Populares',
    res: (await axios.get('/api/moviedb/tv/popular')).data.results,
    type: 'tv',
  }),
  getTopRatedShows: async (): Promise<MovieCollection> => ({
    id: 'topratedseries',
    title: 'Séries Melhores Avaliadas',
    res: (await axios.get('/api/moviedb/tv/top_rated')).data.results,
    type: 'tv',
  }),
  getOnTheAirShows: async (): Promise<MovieCollection> => ({
    id: 'ontheairseries',
    title: 'Séries Passando agora',
    res: (await axios.get('/api/moviedb/tv/on_the_air')).data.results,
    type: 'tv',
  }),
};

const getShowById = (id: string, mediaType: MediaType) => axios.get(`/api/moviedb/${mediaType}/${id}`);

const searchItems = (query: string) => axios
  .get(`/api/moviedb/search/multi?query=${query}`)
  .then(({ data }) => data)
  .catch((e) => console.error(e));

export default collections;

export {
  getShowById,
  searchItems,
};
