import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const AppContainer = styled.div`
  background-color: #141414;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/assets/logos/n_netflix.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
