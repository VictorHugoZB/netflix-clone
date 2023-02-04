import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import allData from '../data';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import { Collections, MovieCollection, Show } from '../types';

const Content = styled.div`
  z-index: 1;
  position: relative;
`;

const MovieRowContainer = styled.div`
  margin-bottom: 20px;
`;

const Container = styled.div`
  max-width: 100vw;
`;

function Home() {
  const [data, setData] = useState<MovieCollection[]>([]);
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    const dataPromises = Object.keys(allData).map((f) => allData[f as keyof Collections]());
    Promise.all(dataPromises).then((d) => setData(d));
  }, []);

  useEffect(() => {
    if (data.length) {
      let selectedShow = {} as Show;
      while (!selectedShow?.backdrop_path || !selectedShow?.overview) {
        const randCategory = data[Math.floor(Math.random() * data.length)];
        const showsList = randCategory.res;
        selectedShow = showsList[Math.floor(Math.random() * showsList.length)];
      }
      setShow(selectedShow);
    }
  }, [data]);

  return (
    <Container>
      <Banner show={show} />
      <Content>
        {data.map((info) => (
          <MovieRowContainer key={info?.id}>
            <MovieRow
              listTitle={info.title}
              movieList={info.res}
              type={info.type}
            />
          </MovieRowContainer>
        ))}
      </Content>
      <Footer />
    </Container>
  );
}

export default Home;
