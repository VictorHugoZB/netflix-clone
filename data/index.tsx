import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const QUERY_URL = `api_key=${API_KEY}&language=pt-BR`;

export default {
  movies: {
    getNowPlaying: async () => ({
      id: 'nowplaying',
      title: 'Filmes Passando Agora',
      res: await axios.get(`${BASE_URL}/movie/now_playing?${QUERY_URL}`),
    }),
    getPopular: async () => ({
      id: 'popular',
      title: 'Filmes Populares',
      res: await axios.get(`${BASE_URL}/movie/popular?${QUERY_URL}`),
    }),
    getTopRated: async () => ({
      id: 'toprated',
      title: 'Filmes Melhores Avaliados',
      res: await axios.get(`${BASE_URL}/movie/top_rated?${QUERY_URL}`),
    }),
  },
  shows: {
    getPopular: async () => ({
      id: 'popular',
      title: 'Séries Popular',
      res: await axios.get(`${BASE_URL}/tv/popular?${QUERY_URL}`),
    }),
    getTopRated: async () => ({
      id: 'toprated',
      title: 'Séries Melhores Avaliadas',
      res: await axios.get(`${BASE_URL}/tv/top_rated?${QUERY_URL}`),
    }),
    getOnTheAir: async () => ({
      id: 'ontheair',
      title: 'Séries Passando agora',
      res: await axios.get(`${BASE_URL}/tv/on_the_air?${QUERY_URL}`),
    }),
  },
};
