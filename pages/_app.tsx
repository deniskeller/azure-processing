// import { store } from '@store/store';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <Head>
        <title>Azure processing</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="keywords"
          content="Azure Processing is professional Agent with many years of experience made to solicit merchants for an acquiring banks or payment service providers under their name."
        />
      </Head>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
}
