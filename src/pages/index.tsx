import type { NextPage } from 'next';
import Head from 'next/head';

import ClubCard from '@/components/ClubCard';

/**
 * Returns the home page with club cards
 */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Workshop</title>
      </Head>
      <div className="">
        <ClubCard name="Howdy!" />
        <ClubCard name="Hello!" />
      </div>
    </>
  );
};

export default Home;
