import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';

const queryClient = new QueryClient();

export default function App({ Component, pageProps: { ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ClerkProvider>
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {getLayout(
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Analytics />
    </QueryClientProvider>
    </ClerkProvider>
  );
}
