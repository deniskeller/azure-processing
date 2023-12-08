import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="Azure Processing is professional Agent with many years of experience made to solicit merchants for an acquiring banks or payment service providers under their name."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="Azure processing" />
        <meta
          property="og:title"
          content="Azure processing. Your best acquiring provider111111"
        />
        <meta
          property="og:description"
          content="Azure Processing is professional Agent with many years of experience made to solicit merchants for an acquiring banks or payment service providers under their name."
        />
      </Head>
      <title>Azure processing</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
