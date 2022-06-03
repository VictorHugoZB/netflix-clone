import styled from '@emotion/styled';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MainButton from '../Shared/Buttons/MainButton';

const BASE_IMG = 'https://image.tmdb.org/t/p/original';

const Background = styled.div<{ url: string }>`
  width: 100%;
  height: 110vh;
  background-image:
    linear-gradient(to bottom, transparent 80%, #141414),
    linear-gradient(to right, #000 30%, transparent),
    ${({ url }) => `url(${url})`};
  background-size: cover;
  position: absolute;
  z-index: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  max-width: 45%;
  top: 50%;
  transform: translateY(-50%);
  padding: 40px;
`;

const Title = styled.h1`
  padding: .5rem 0;
`;

const P = styled.p`
 padding: .5rem 0 1rem;
 color: #ccc;
 line-height: 1.4;
`;

const truncate = (str: string) => (str.length > 500 ? `${str.slice(0, 407)}...` : str);

export default function Banner({ movie }: { movie: any }) {
  return (
    <>
      <Background url={`${BASE_IMG}/${movie?.backdrop_path}`} />
      <ContentContainer>
        <Info>
          <Title>{movie?.title || ''}</Title>
          <P>{truncate(movie?.overview || '')}</P>
          <MainButton Icon={ErrorOutlineIcon} onClick={() => {}}>Mais informações</MainButton>
        </Info>
      </ContentContainer>
    </>
  );
}
