import styled from '@emotion/styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
  width: 70%;
  margin: auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled.a`
  text-decoration: none;
  padding: 0 1rem;
`;

const P = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, .6);
  position: relative;
  padding: 5px 0;
  
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: white;
    transform-origin: bottom right;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform .5s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

`;

export default function Footer() {
  return (
    <Container>
      <P>Desenvolvido por Victor Hugo Zaninette Bernardino</P>
      <div>
        <Anchor href="https://www.linkedin.com/in/victor-hugo-zaninette-bernardino-0a28011a6/" target="_blank">
          <LinkedInIcon sx={{ fontSize: 35 }} />
        </Anchor>
        <Anchor href="https://github.com/VictorHugoZB" target="_blank">
          <GitHubIcon sx={{ fontSize: 35 }} />
        </Anchor>
      </div>
    </Container>
  );
}
