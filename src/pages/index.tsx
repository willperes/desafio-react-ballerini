import type { NextPage } from 'next'
import Head from 'next/head';
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Wrapper } from '../styles/pages/index/styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | BalleriniDevs</title>
      </Head>
      <Wrapper>
        <div className="home-page-blobs" />
        <Header isSearchVisible={false} />
        <Hero />
      </Wrapper>
    </>
  );
}

export default Home
