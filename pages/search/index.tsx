import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { searchItems } from '../../data';
import MoviePage from '../../components/MoviePage';
import { Show } from '../../types';

const Content = styled.div`
  margin-top: 60px;
`;

const P = styled.p`
  margin-top: 12%;
  font-size: 2rem;
  padding: 2rem;
  font-weight: bold;
`;

export default function Search() {
  const router = useRouter();
  const q = router.query.q as string;
  const timeoutRef = useRef<number>(0);
  const [shows, setShows] = useState<Show[]>([]);

  const search = () => {
    searchItems(q)
      .then(({ results }) => {
        const newResults = results
          .reduce((arr: Show[], r: Show) => {
            if (r.media_type === 'person') {
              arr.push(...(r.known_for || []));
            } else {
              arr.push(r);
            }

            return arr;
          }, [])
          .filter((r: Show) => !!r.backdrop_path);

        setShows(newResults);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    if (q) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => search(), 300);
    }
  }, [q]);

  return (
    <Content>
      {shows.length ? (
        <MoviePage
          shows={shows}
        />
      ) : (
        <P>
          Desculpe-nos,
          <br />
          {' '}
          nenhum resultado foi encontrado =(
        </P>
      )}
    </Content>
  );
}
