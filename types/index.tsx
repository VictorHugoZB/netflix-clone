type Id = 'nowplayingmovies' | 'topratedmovies' | 'popularmovies' | 'popularseries' | 'topratedseries' | 'ontheairseries';

interface Show {
  backdrop_path: string,
  overview: string
  id: string
  title?: string
  name?: string
}

interface MovieCollection {
  id: Id,
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
