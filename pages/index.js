import { Head } from "next/head";
import { ContainerBox } from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Nav from "@/components/nav";
import Layout from "@/components/layout";
import Header from "@/components/header";
import { getAllPostsForHome, getImageForHome } from "@/lib/api";

export default function HomePage({ allPosts, homeImage }) {
  const headerPost = allPosts;
  const homePhoto = homeImage;
  return (
    <Layout>
      <Nav />
      <Head>
        <title>Godwin - Portofolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta
          name="Godwin Ebikwo | Front end developer"
          content="Godwin Ebikwo"
        ></meta>
        <meta property="og:locale" content="en_GB" />
        <meta
          name="keywords"
          content="Godwin Ebikwo, Front-end deceloper, JavaScript, JAMStack, Nextjs Framer motion, React "
        />
      </Head>
      <main>
        <section>
          <LazyMotion features={domAnimation}>
            <m.aside initial="initial" animate="enter" exit="exit">
              <ContainerBox>
                {headerPost.length > 0 && (
                  <Header
                    posts={headerPost}
                    title={homePhoto.title}
                    responsiveImage={homePhoto.responsiveImage}
                  />
                )}
              </ContainerBox>
            </m.aside>
          </LazyMotion>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  const homeImage = (await getImageForHome()) || [];
  return {
    revalidate: 200,
    props: { allPosts, homeImage },
  };
}
