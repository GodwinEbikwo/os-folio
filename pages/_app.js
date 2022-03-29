import "@styles/main.css";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Godwin Ebikwo - Personal Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Godwin Ebikwo - Personal Site"
          key="title"
        />
        <meta
          name="description"
          content="A personal website and showcase on the very things I have learnt on my journey react, music front-end developer, shopify, e-commerce, ecommerce next js"
        />
      </Head>
      <SessionProvider session={session}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </SessionProvider>
    </>
  );
}
