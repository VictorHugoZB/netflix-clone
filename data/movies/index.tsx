import axios from 'axios';
import {
  MediaType, MovieCollection, Genre,
} from '../../types';
import { BASE_URL, QUERY_URL } from '..';

const getMovieCollections = async (): Promise<MovieCollection[]> => {
  const genres = (await axios.get(`${BASE_URL}/genre/movie/list?${QUERY_URL}`)).data.genres as Genre[];

  const movieCollectionPromises = genres.map(async (genre) => ({
    id: genre.id,
    title: genre.name,
    res: (await axios.get(`${BASE_URL}/discover/movie?${QUERY_URL}&with_genres=${genre.id}`)).data.results,
    type: 'movie' as MediaType,
  }));

  return Promise.all(movieCollectionPromises);
};

export default getMovieCollections;
