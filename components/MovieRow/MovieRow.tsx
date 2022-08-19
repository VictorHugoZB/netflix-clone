/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import Movie from './Movie';
import useWindowSize from '../../hooks/useWindowSize';

const RowContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  & span {
    position: absolute;
    display: none;
    top: 0;
    height: 100%;
    width: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    z-index: 10;
    transition: all .2s;
  }

  &:hover span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & span:hover {
    width: 50px;
  }

  & span svg {
    transform: scale(1);
    transition: all .2s;
  }

  & span:hover svg {
    transform: scale(1.5);
  }

  &:hover span:nth-of-type(1) {
    left: 0;
  }

  &:hover span:nth-of-type(2) {
    right: 0;
  }

`;

const MovieRowContainer = styled.div<{ offsetX: number }>`
  display: flex;
  width: min-content;
  padding: 0 57px 0 40px;
  gap: 20px;
  transform: ${({ offsetX }) => `translateX(${-1 * offsetX}px)`};
  transition: all .2s;

  & * {
    flex-shrink: 0;
  }
`;

const Title = styled.h2`
  padding: 15px 40px;
`;

export default function MovieRow(
  { listTitle, movieList, type }: { listTitle: string, movieList: Array<any>, type: 'movie' | 'series' },
) {
  const [offsetX, setOffsetX] = useState<number>(0);
  const { width } = useWindowSize();
  const MOVE = width * 0.4;

  const handleLeft = () => {
    if (offsetX - MOVE <= 0) {
      setOffsetX(0);
      return;
    }

    setOffsetX(offsetX - MOVE);
  };

  const handleRight = () => {
    const movieRowContainer = document.getElementById('movieRowContainer');
    const rowWidth = movieRowContainer?.offsetWidth || width;

    if (offsetX + MOVE >= rowWidth - width) {
      setOffsetX(rowWidth - width);
      return;
    }

    setOffsetX(offsetX + MOVE);
  };

  return (
    <>
      <Title>{listTitle}</Title>
      <RowContainer>
        <span onClick={handleLeft}>
          <KeyboardArrowLeftIcon sx={{ fontSize: 50 }} />
        </span>
        <MovieRowContainer offsetX={offsetX} id="movieRowContainer">
          {movieList.map((show) => (
            <Movie key={show.id} showId={show.id} type={type} />
          ))}
        </MovieRowContainer>
        <span onClick={handleRight} onKeyDown={handleRight}>
          <KeyboardArrowRightIcon sx={{ fontSize: 50 }} />
        </span>
      </RowContainer>
    </>
  );
}
