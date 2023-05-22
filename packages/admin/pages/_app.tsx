import './styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NhostProvider, NhostClient } from '@nhost/nextjs';
import MainLayout from '../components/main-layout/main-layout';

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || '',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>sykofizz</title>
      </Head>
      <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
        <MainLayout>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </MainLayout>
      </NhostProvider>
    </>
  );
}

export default CustomApp;
