import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Azure processing</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="Azure Processing is professional Agent with many years of experience made to solicit merchants for an acquiring banks or payment service providers under their name."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://azure-processing.vercel.app" />
        <meta property="og:title" content="Azure processing" />
        <meta
          property="og:description"
          content="Azure Processing is professional Agent with many years of experience made to solicit merchants for an acquiring banks or payment service providers under their name."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
