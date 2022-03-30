import { m } from "framer-motion";
import { getAllPostsForHome } from "@lib/api";
import Layout from "@components/Layout";
import Hero from "@components/Hero";

export default function HomePage({ allPosts }) {
  const headerPost = allPosts;

  return (
    <Layout>
      <m.div initial="initial" animate="enter" exit="exit">
        {headerPost.length > 0 && <Hero posts={headerPost} />}
      </m.div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  return {
    revalidate: 200,
    props: { allPosts },
  };
}
