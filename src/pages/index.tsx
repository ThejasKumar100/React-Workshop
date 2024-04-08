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
      <div className="grid w-full auto-rows-fr grid-cols-[repeat(auto-fill,320px)] justify-center gap-16 p-4">
        <ClubCard id="654d361fbfe4308bcdfc4145" />
        <ClubCard id="W01t_tcbaFkzMT9HzRcG" />
      </div>
    </>
  );
};

export default Home;
