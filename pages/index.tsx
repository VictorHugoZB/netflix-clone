import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import data from '../data';
import Banner from '../components/Banner';

const Content = styled.div`
  z-index: 1;
  position: relative;
`;

const BASE_IMG = 'https://image.tmdb.org/t/p/original';

function Home() {
  const [latest, setLatest] = useState();
  const [movie, setMovie] = useState();

  useEffect(() => {
    data.movies.getTopRated()
      .then((dados) => setLatest(dados))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (latest) {
      console.log(latest.res.data.results[0]);
      setMovie(latest.res.data.results[0]);
    }
  }, [latest]);

  return (
    <>
      <Banner movie={movie} />
      <Content>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
        <div>kdsodk</div>
      </Content>
    </>
  );
}

export default Home;
