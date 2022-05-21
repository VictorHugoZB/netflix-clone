import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import ProfileIcon from '../ProfileIcon';

const Container = styled.div<{ isOnTop: boolean }>`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: ${({ isOnTop }) => (isOnTop ? '#00000000' : '#141414')};
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  transition: background-color .3s;
  z-index: 99;
  padding: 0 3rem;
`;

const ItemText = styled.p`
  font-size: 0.9rem;
`;

const SecondMenu = styled.div`
  position: absolute;
  height: 100%;
  right: 3rem;
  top: 0;
`;

const IconArrowMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;

  #dropdown-arrow {
    transform: rotate(0deg);
    transition: transform .5s;
    margin: 0.2rem;
  }

  &:hover {
    cursor: pointer;
    #dropdown-arrow {
      transform: rotate(180deg);
    }
  }
`;

const FilterContainer = styled.div<{ extended: boolean }>`
  height: 100%;
  position: relative;

  input {
    padding: ${({ extended }) => (extended ? '5px 30px' : '0')};
    max-width: ${({ extended }) => (extended ? '200px' : '0px')};
    background-color: black;
    outline: none;
    border: 2px solid white;
    transition: all .5s fade-in-out;
    height: 100%;
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 2px));
    cursor: pointer;
  }

  .icon:nth-of-type(1) {
    left: 5px;
  }

  .icon:nth-of-type(2) {
    right: 5px;
    display: none;
  }
`;

const navigateItems = [
  {
    text: 'Inicio',
    link: '/browse',
  },
  {
    text: 'Filmes',
    link: '/browse',
  },
  {
    text: 'Séries',
    link: '/browse',
  },
  {
    text: 'Bombando',
    link: '/browse',
  },
  {
    text: 'Minha Lista',
    link: '/browse',
  },
];

export default function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [extended, setExtended] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 0) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    if (window) {
      window.addEventListener('scroll', listener);
    }

    return () => window.removeEventListener('scroll', listener);
  }, []);
  return (
    <Container isOnTop={isOnTop}>
      <Grid container sx={{ alignItems: 'center', height: '100%', width: '100%' }}>
        <Grid item sx={{ height: '85%', paddingRight: '2rem' }}>
          <Link href="/browse" passHref>
            <a href="/browse">
              <img src="/assets/logos/netflix_logo.svg" alt="Logo da Netflix" height="100%" />
            </a>
          </Link>
        </Grid>
        <Grid item>
          <Grid container>
            {navigateItems.map((item) => (
              <Grid item key={item.text} sx={{ padding: '0 .5rem' }}>
                <Link href={item.link} passHref>
                  <a href={item.link}>
                    <ItemText>{item.text}</ItemText>
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <SecondMenu>
        <Grid container columnSpacing={4} sx={{ alignItems: 'center', height: '100%' }}>
          <Grid item height="50%">
            <FilterContainer extended={extended}>
              <Box onClick={() => setExtended(true)} className="icon">
                <SearchIcon sx={{ fontSize: 25 }} />
              </Box>
              <input type="text" />
              <Box onClick={() => setExtended(false)} className="icon">
                <CloseIcon sx={{ fontSize: 25 }} />
              </Box>
            </FilterContainer>
          </Grid>
          <Grid item sx={{ height: '100%' }}>
            <IconArrowMenu>
              <ProfileIcon height="55%" imageUrl="/assets/avatars/option1.png" />
              <ArrowDropDownIcon id="dropdown-arrow" />
            </IconArrowMenu>
          </Grid>
        </Grid>
      </SecondMenu>
    </Container>
  );
}
