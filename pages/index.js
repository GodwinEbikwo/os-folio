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
    revalidate: 500,
    props: { allPosts, homeImage },
  };
}
