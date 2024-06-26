import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Workshop</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/logoIcon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className={inter.variable + ' min-h-full text-haiti'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
