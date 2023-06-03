import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <div style={{ minHeight: 'calc(100vh - 103px )' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </AppContainer>
  );
}

export default MyApp;
