import axios from 'axios';
import {
  MediaType, Show,
} from '../../types';
import { BASE_URL, QUERY_URL } from '..';

const getTrending = async (page: number = 1): Promise<Show[]> => {
  if (page < 1 || page > 500) return [];

  const trendingMovies = (await axios.get(`${BASE_URL}/movie/popular?${QUERY_URL}&page=${page}`)).data.results as Show[];
  const trendingSeries = (await axios.get(`${BASE_URL}/tv/popular?${QUERY_URL}&page=${page}`)).data.results as Show[];

  const trendingMoviesTyped = trendingMovies.map((m) => ({ ...m, media_type: 'movie' as MediaType }));
  const trendingSeriesTyped = trendingSeries.map((m) => ({ ...m, media_type: 'tv' as MediaType }));

  return [...trendingMoviesTyped, ...trendingSeriesTyped];
};

export default getTrending;
