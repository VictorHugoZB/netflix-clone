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
  const [showList, setShowList] = useState<Show[]>([]);

  useEffect(() => {
    const dataPromises = Object.keys(allData).map((f) => allData[f as keyof Collections]());
    Promise.all(dataPromises).then((d) => setData(d));
  }, []);

  useEffect(() => {
    if (data.length) {
      const randCategory = data.find((m) => m.id === 'topratedmovies');
      const currentShowList = randCategory?.res || [];
      setShowList(currentShowList);
    }
  }, [data]);

  return (
    <Container>
      <Banner showList={showList} />
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
    </Container>
  );
}

export default Home;
