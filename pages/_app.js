import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.INFURA_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
    appName: "BlockChange",
  })
);

const queryClient = new QueryClient();

export default function App({ Component, pageProps: { ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          {getLayout(
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ConnectKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
