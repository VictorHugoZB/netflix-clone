interface Show {
  backdrop_path: string,
  overview: string
  id: string
}

interface MovieCollection {
  id: string,
  title: string,
  res: Show[];
  type: 'movie' | 'series'
}

interface Collections {
  [getCollection: string]: () => Promise<MovieCollection>
}

export type {
  MovieCollection,
  Collections,
  Show,
};
