import Layout from "@components/Layout";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";
import PostScreen from "@components/Post/PostScreen";
import { m } from "framer-motion";
import { fade } from "@helpers/transition";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout hasNav={false}>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <m.article initial="initial" animate="enter" exit="exit">
          <Head>
            <title>{post.title || "Godwin Ebikwo Portfolio"}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <m.div variants={fade}>
            <PostScreen
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              link={post.link}
              bc={post.backgroundcolor.hex}
              cms={post.cms}
              framework={post.framework}
              hosting={post.hosting}
              photos={post.photos}
              typeface={post.typeface}
              content={post.content}
            />
          </m.div>
        </m.article>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);
  const content = await markdownToHtml(data?.post?.content || "");

  return {
    props: {
      post: {
        ...data?.post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/work/${post.slug}`) || [],
    fallback: true,
  };
}
