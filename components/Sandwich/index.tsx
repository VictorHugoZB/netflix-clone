import styled from '@emotion/styled';

const Container = styled.div<{ active: boolean }>`
  height: calc(100vh - 60px);
  width: 200px;
  position: fixed;
  bottom: 0;
  left: -200px;
  left: ${({ active }) => (active ? '0' : '-200px')};
  z-index: 999;
  transition: all .2s;
  background-color: #141414;
`;

const Ul = styled.ul`
  height: 100%;

  & li {
    padding: 1rem;
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

export default function Sandwich({ open }: { open: boolean }) {
  return (
    <Container active={open}>
      <Ul>
        {navigateItems.map((item) => (
          <li key={item.text}>
            <a href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </Ul>
    </Container>
  );
}
