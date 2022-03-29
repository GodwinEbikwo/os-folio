import { m } from "framer-motion";
import { getAllPostsForHome } from "@lib/api";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import Nowplaying from "../components/nowplaying";
import Image from "next/image";

export default function HomePage({ allPosts, items }) {
  const headerPost = allPosts;
  const { data: session } = useSession();

  if (session) {
    return (
      <Layout>
        <m.div initial="initial" animate="enter" exit="exit">
          {headerPost.length > 0 && <Hero posts={headerPost} />}
        </m.div>
      </Layout>
    );
  }

  return (
    <Layout>
      <m.div initial="initial" animate="enter" exit="exit">
        {headerPost.length > 0 && <Hero posts={headerPost} />}
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
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
