import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_GB" />
        <title>Godwin - Portofolio</title>
        <meta name="description" content="" />
        <meta
          name="Godwin Ebikwo | Front end developer"
          content="Godwin Ebikwo"
        />
        <meta
          name="keywords"
          content="Godwin Ebikwo, Front-end deceloper, JavaScript, JAMStack, Nextjs Framer motion, React "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
}
