import { useEffect, useState } from 'react';
import { Container, Content, MovieRowContainer } from '..';
import MovieRow from '../../components/MovieRow';
import { MovieCollection } from '../../types';
import getTvCollections from '../../data/tv';
import Banner from '../../components/Banner';

export default function Movies() {
  const [data, setData] = useState<MovieCollection[]>([]);

  useEffect(() => {
    getTvCollections()
      .then((result) => setData(result))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Container>
      <Banner showList={data?.at(0)?.res || []} title="Séries - Netflix" />
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
