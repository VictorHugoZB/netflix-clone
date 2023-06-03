import styled from '@emotion/styled';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import EastIcon from '@mui/icons-material/East';
import { useEffect, useRef, useState } from 'react';
import MainButton from '../Shared/Buttons/MainButton';
import { Show } from '../../types';

const BASE_IMG = 'https://image.tmdb.org/t/p/original';

const Background = styled.div<{ url: string }>`
  width: 100%;
  height: 110vh;
  background-image:
    linear-gradient(to bottom, transparent 80%, #141414),
    linear-gradient(to right, #000 10%, transparent),
    ${({ url }) => `url(${url})`};
  background-size: cover;
  position: absolute;
  z-index: 0;
  transition: all 2s;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  transition: all .3s;
`;

const NextButton = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 3rem;
  top: 50%;
  border: none;
  transition: all .3s;

  &:hover {
    background-color: rgba(109, 109, 110, 1);
    cursor: pointer;
  }
`;

const Info = styled.div`
  position: absolute;
  max-width: 45%;
  top: 50%;
  transform: translateY(-50%);
  padding: 40px;

  transition: all .3s;
`;

const Title = styled.h1`
  padding: .5rem 0;
`;

const P = styled.p`
 padding: .5rem 0 1rem;
 color: white;
 line-height: 1.4;
 font-weight: bold;
`;

const truncate = (str: string) => (str.length > 500 ? `${str.slice(0, 407)}...` : str);

export default function Banner({ showList }: { showList?: Show[] }) {
  const [showIdx, setShowIdx] = useState(0);
  const [show, setShow] = useState<Show>();

  const intervalRef = useRef<number>();

  const getNextIdx = (currentIdx = showIdx) => {
    let idx = currentIdx;

    if (showList?.length) {
      let selectedShow = {} as Show;

      do {
        idx = (idx + 1) % showList.length;
        selectedShow = showList[idx];
      } while (!selectedShow?.backdrop_path || !selectedShow?.overview);

      setShow(selectedShow);
    }

    return idx;
  };

  /* setInterval funcion can't get current state values,
     so I had to pass the old state by fn param
  */
  useEffect(() => {
    if (showList?.length) {
      setShow(showList[showIdx]);

      intervalRef.current = window.setInterval(() => {
        setShowIdx((oldIdx) => getNextIdx(oldIdx));
      }, 5000);
    }

    return () => clearInterval(intervalRef?.current);
  }, [showList]);

  const onClickNext = () => {
    clearInterval(intervalRef.current);
    const nextIdx = getNextIdx();
    setShowIdx(nextIdx);
  };

  return (
    <>
      <Background url={`${BASE_IMG}/${show?.backdrop_path}`} />
      <ContentContainer>
        <NextButton onClick={onClickNext}>
          <EastIcon sx={{ color: 'white', fontSize: '2rem', paddingTop: '5px' }} />
        </NextButton>
        <Info>
          <Title>{show?.title || show?.name || ''}</Title>
          <P>{truncate(show?.overview || '')}</P>
          <MainButton Icon={ErrorOutlineIcon} onClick={() => {}}>Mais informações</MainButton>
        </Info>
      </ContentContainer>
    </>
  );
}
