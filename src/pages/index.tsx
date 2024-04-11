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
      <div className="grid w-full auto-rows-fr grid-cols-3 justify-center align-center gap-16 p-4">
        <ClubCard id="654d361fbfe4308bcdfc4145" />
        <ClubCard id="W01t_tcbaFkzMT9HzRcG" />
        <ClubCard id="654d3640bfe4308bcdfc423e" />
      </div>
    </>
  );
};

export default Home;
