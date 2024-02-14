import axios from 'axios';
import {
  MediaType, MovieCollection, Genre,
} from '../../types';

const getMovieCollections = async (): Promise<MovieCollection[]> => {
  const genres = (await axios.get(`/api/moviedb/genre/movie/list`)).data.genres as Genre[];

  const movieCollectionPromises = genres.map(async (genre) => ({
    id: genre.id,
    title: genre.name,
    res: (await axios.get(`/api/moviedb/discover/movie?with_genres=${genre.id}`)).data.results,
    type: 'movie' as MediaType,
  }));

  return Promise.all(movieCollectionPromises);
};

export default getMovieCollections;
