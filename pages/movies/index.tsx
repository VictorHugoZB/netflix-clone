import { useEffect, useState } from 'react';
import { Container, Content, MovieRowContainer } from '..';
import MovieRow from '../../components/MovieRow';
import { MovieCollection } from '../../types';
import getMovieCollections from '../../data/movies';
import Banner from '../../components/Banner';

export default function Movies() {
  const [data, setData] = useState<MovieCollection[]>([]);

  useEffect(() => {
    getMovieCollections()
      .then((result) => setData(result))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Container>
      <Banner showList={data?.at(0)?.res || []} title="Filmes - Beeflix" />
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
