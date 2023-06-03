import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { getShowById } from '../../data';
import { MediaType } from '../../types';

const Container = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${width * 1.5}px`};
  border-radius: 5px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function Movie({ showId, type }: { showId: string, type: MediaType }) {
  const [showInfo, setShowInfo] = useState<any>();
  const [cardWidth, setCardWidth] = useState<number>(0);
  const { width } = useWindowSize();

  useEffect(() => {
    getShowById(showId, type).then((info) => setShowInfo(info.data));
  }, [showId]);

  useEffect(() => {
    const cWidth = width * 0.13;

    if (cWidth > 200) {
      setCardWidth(200);
      return;
    }

    if (cWidth < 150) {
      setCardWidth(150);
      return;
    }

    setCardWidth(cWidth);
  }, [width]);

  return (showInfo && (
    <Container width={cardWidth}>
      <Image src={`${BASE_IMG_URL}/${showInfo.poster_path}`} />
    </Container>
  ));
}
