import type { NextPage } from 'next'
import Head from 'next/head';
import { Header } from '../src/components/Header'
import { Hero } from '../src/components/Hero'
import { Wrapper } from '../src/styles/pages/index/styles';

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
