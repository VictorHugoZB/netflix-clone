import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
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
  padding: 0; 

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

const FilterContainer = styled.div<{ expanded: boolean }>`
  height: 100%;
  position: relative;

  input {
    padding: 0;
    max-width: ${({ expanded }) => (expanded ? '250px' : '0')};
    background-color: black;
    outline: none;
    transition: all .2s;
    height: 100%;
    border: ${({ expanded }) => (expanded ? '2px solid white' : 'none')};
    ${({ expanded }) => expanded && `
      padding: 10px 30px;
    `}
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 2px));
    cursor: pointer;
  }

  .icon:nth-of-type(1) {
    left: ${({ expanded }) => (expanded ? '5px' : '-25px')};
    transition: left .3s;
  }

  .icon:nth-of-type(2) {
    right: 5px;
  }
`;

const navigateItems = [
  {
    text: 'Inicio',
    link: '/',
  },
  {
    text: 'Filmes',
    link: '/movies',
  },
  {
    text: 'Séries',
    link: '/series',
  },
  {
    text: 'Bombando',
    link: '/trending',
  },
];

export default function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [filterValue, setFilterValue] = useState('');
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();

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

  useEffect(() => {
    const filter = document.getElementById('filter-input');

    const onBlur = () => {
      setFilterValue((prevValue) => {
        if (!prevValue) {
          setExpanded(false);
        }

        return prevValue;
      });
    };

    filter?.addEventListener('blur', onBlur);

    return () => {
      filter?.removeEventListener('blur', onBlur);
    };
  }, []);

  useEffect(() => {
    const filter = document.getElementById('filter-input');
    if (expanded) {
      filter?.focus();
    }
  }, [expanded]);

  useEffect(() => {
    if (filterValue && filterValue.length > 0) {
      router.push(`/search?q=${encodeURI(filterValue)}`);
    } else {
      router.push('/');
    }
  }, [filterValue]);

  const handleFilterClose = () => {
    setFilterValue('');
    setExpanded(false);
  };

  return (
    <Container isOnTop={isOnTop}>
      <Grid container sx={{ alignItems: 'center', height: '100%', width: '100%' }}>
        <Grid item sx={{ height: '85%', paddingRight: '2rem' }}>
          <Link href="/" passHref>
            <a href="/">
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
        <Grid container columnSpacing={2} sx={{ alignItems: 'center', height: '100%' }}>
          <Grid item sx={{ height: '50%' }}>
            <FilterContainer expanded={expanded}>
              <Box onClick={() => setExpanded(true)} className="icon">
                <SearchIcon sx={{ fontSize: 25 }} />
              </Box>
              <input
                type="text"
                id="filter-input"
                placeholder="Séries, filmes e pessoas"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <Box
                onClick={handleFilterClose}
                sx={{ display: filterValue ? 'inline' : 'none' }}
                className="icon"
              >
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
