import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.scss';
import Head from 'next/head';

//test for ssh 3

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop - наш лучший топ</title>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps}/>    
  </>;  
}

export default MyApp;
