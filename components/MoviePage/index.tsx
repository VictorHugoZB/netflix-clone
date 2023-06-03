import styled from '@emotion/styled';
import { Show } from '../../types';
import Movie from '../Movie';

const MoviePageContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  div {
    flex 0 0 auto;
    margin: 0 5px;
    flex-shrink: 0;
  }
`;

export default function MoviePage({ shows }: { shows: Show[] }) {
  return (
    <MoviePageContainer>
      {shows.filter((show) => !!show.backdrop_path).map((show) => (
        <Movie key={show.id} showId={show.id} type={show.media_type} />
      ))}
    </MoviePageContainer>
  );
}
