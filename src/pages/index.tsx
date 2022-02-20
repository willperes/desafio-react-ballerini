import { motion } from 'framer-motion';
import type { NextPage } from 'next'
import Head from 'next/head';
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Wrapper } from '../styles/pages/index/styles';

const Home: NextPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .75 }}>
      <Head>
        <title>Início | BalleriniDevs</title>
      </Head>
      <Wrapper>
        <div className="home-page-blobs" />
        <Header isSearchVisible={false} />
        <Hero className="home-page-hero"/>
      </Wrapper>
    </motion.div>
  );
}

export default Home
