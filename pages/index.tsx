import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import { Hero } from '../src/components/Hero'
import { Wrapper } from '../src/styles/pages/index/styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header isSearchVisible={false} />
      <Hero />
    </Wrapper>
  );
}

export default Home
