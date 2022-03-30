import { m } from "framer-motion";
import { getAllPostsForHome } from "@lib/api";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage({ allPosts }) {
  const headerPost = allPosts;
  const { data: session } = useSession();

  function renderAuthButtons() {
    if (session) {
      return <button onClick={() => signIn("spotify")}>Sign out</button>;
    } else {
      return <button onClick={() => signIn()}>Sign in</button>;
    }
  }

  return (
    <Layout>
      <m.div initial="initial" animate="enter" exit="exit">
        {renderAuthButtons()}
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
