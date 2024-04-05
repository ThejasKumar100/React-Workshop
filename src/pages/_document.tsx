import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function Document() {
  return (
    <Html lang="en">
      <Head prefix="og: http://ogp.me/ns#">
        <meta name="description" content="Your description." />
        <meta name="theme-color" content="#573dff" />

        <meta property="og:title" content="React Workshop" />
        <meta property="og:description" content="Your description." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="<Your full og image path>" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Nebula Labs Icon." />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="<your domain>" />
      </Head>
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
