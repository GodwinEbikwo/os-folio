import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { AppStyles } from "@/styles/app-styles";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AppStyles />
      <ThemeProvider themes={["dark", "blue", "yellow", "red", "pink"]}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
