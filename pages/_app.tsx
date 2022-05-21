import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';

const AppContainer = styled.div`
  background-color: #141414;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Navbar />
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
