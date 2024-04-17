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
      <div className="w-full flex flex-wrap justify-center gap-16 p-10">
        <ClubCard id="654d361fbfe4308bcdfc4145" />
        <ClubCard id="W01t_tcbaFkzMT9HzRcG" />
        <ClubCard id="654d3640bfe4308bcdfc423e" />
      </div>
    </>
  );
};

export default Home;
