type Id = 'nowplayingmovies' | 'topratedmovies' | 'popularmovies' | 'popularseries' | 'topratedseries' | 'ontheairseries';
type MediaType = 'tv' | 'movie' | 'person'

interface Show {
  backdrop_path: string,
  overview: string
  id: string
  title?: string
  name?: string
  media_type: MediaType
  known_for?: Show[]
}

interface MovieCollection {
  id: Id,
  title: string,
  res: Show[];
  type: MediaType
}

interface Collections {
  [getCollection: string]: () => Promise<MovieCollection>
}

export type {
  MovieCollection,
  Collections,
  Show,
  MediaType,
};
