import axios from 'axios';
import {
  MediaType, MovieCollection, Genre,
} from '../../types';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const QUERY_URL = `api_key=${API_KEY}&language=pt-BR`;

const getTvCollections = async (): Promise<MovieCollection[]> => {
  const genres = (await axios.get(`${BASE_URL}/genre/tv/list?${QUERY_URL}`)).data.genres as Genre[];

  const tvCollectionPromises = genres.map(async (genre) => ({
    id: genre.id,
    title: genre.name,
    res: (await axios.get(`${BASE_URL}/discover/tv?${QUERY_URL}&with_genres=${genre.id}`)).data.results,
    type: 'tv' as MediaType,
  }));

  return Promise.all(tvCollectionPromises);
};

export default getTvCollections;
