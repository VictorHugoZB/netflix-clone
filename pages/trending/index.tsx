import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Content } from '..';
import { Show } from '../../types';
import getTrending from '../../data/trending';
import MoviePage from '../../components/MoviePage';

const ContainerTrending = styled(Container)`
  margin-top: calc(60px + 1rem);
`;

const Title = styled.h2`
  padding: 0 40px;
`;

const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

function removeDuplicates<T extends { id: number | string }>(arr: T[]) {
  return arr.filter((value, index, self) => index === self.findIndex((t) => (
    t.id === value.id
  )));
}

function debounce(fn: () => void, timeout = 1000) {
  let timerId: number | undefined;

  return () => {
    if (!timerId) {
      fn();
    }
    clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      timerId = undefined;
    }, timeout);
  };
}

export default function Movies() {
  const [data, setData] = useState<Show[]>([]);
  const [page, _setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pageRef = useRef(page);

  const setPage = (newPage: number) => {
    pageRef.current = newPage;
    _setPage(newPage);
  };

  const getTrendingDebounce = debounce(() => {
    const currentPage = pageRef.current;
    setIsLoading(true);

    getTrending(currentPage)
      .then((result) => {
        setPage(currentPage + 1);
        setData((oldData) => removeDuplicates([...oldData, ...result]));
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  });

  useEffect(() => {
    const currentPage = pageRef.current;

    getTrending(currentPage)
      .then((result) => {
        setPage(currentPage + 1);
        setData(result);
      })
      .catch((e) => console.error(e));

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const { scrollTop, offsetHeight } = document.documentElement;

      if (windowHeight + scrollTop >= offsetHeight - 50) {
        getTrendingDebounce();
      }
    });
  }, []);

  return (
    <ContainerTrending>
      <Head>
        <title>Bombando - Netflix</title>
      </Head>
      <Content>
        <Title>Séries e filmes bombando</Title>
        <MoviePage shows={data} />
        {isLoading && (
          <LoadContainer>
            <CircularProgress />
          </LoadContainer>
        )}
      </Content>
    </ContainerTrending>
  );
}
