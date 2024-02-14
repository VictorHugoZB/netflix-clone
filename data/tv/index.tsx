import axios from 'axios';
import {
  MediaType, MovieCollection, Genre,
} from '../../types';

const getTvCollections = async (): Promise<MovieCollection[]> => {
  const genres = (await axios.get('/api/moviedb/genre/tv/list')).data.genres as Genre[];

  const tvCollectionPromises = genres.map(async (genre) => ({
    id: genre.id,
    title: genre.name,
    res: (await axios.get(`/api/moviedb/discover/tv?with_genres=${genre.id}`)).data.results,
    type: 'tv' as MediaType,
  }));

  return Promise.all(tvCollectionPromises);
};

export default getTvCollections;
