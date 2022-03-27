import "@styles/main.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
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
        <meta name="description" content="" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
