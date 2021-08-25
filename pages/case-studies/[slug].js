import Head from "next/head";
import { useRef } from "react";
import Nav from "@/components/nav";
import ErrorPage from "next/error";
import styled from "styled-components";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { fade } from "@/helpers/transition";
import { options } from "@/lib/scroll-config";
import markdownToHtml from "@/lib/markdownToHtml";
import PostTitle from "@/components/post/post-title";
import PostHeader from "@/components/post/post-header";
import MoreStories from "@/components/post/more-stories";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import { Seperator } from "@/components/seperator";


export default function PostPage({ post, morePosts, preview }) {
  const containerRef = useRef(null);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Nav />
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}
      >
        <main data-scroll-container ref={containerRef} id="scroll-container">
          <section data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.aside
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fade}
              >
                <PostContainerBox>
                  {router.isFallback ? (
                    <div className="center">
                      <PostTitle>Loading…</PostTitle>
                    </div>
                  ) : (
                    <>
                      <m.article>
                        <Head>
                          <meta
                            title={post.title}
                            property="og:image"
                            content={post.ogImage.url}
                          />
                        </Head>
                        <PostHeader
                          title={post.title}
                          coverImage={post.coverImage}
                          date={post.date}
                          content={post.content}
                        />
                      </m.article>
                      <Seperator />
                      {morePosts.length > 0 && (
                        <MoreStories posts={morePosts} />
                      )}
                    </>
                  )}
                </PostContainerBox>
              </m.aside>
            </LazyMotion>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.post?.content || "");

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}

const PostContainerBox = styled.div`
  position: relative;
  margin-top: var(--spacer-lg);
  margin-left: auto;
  margin-right: auto;
  padding-top: 18vw;
  padding-bottom: var(--spacer);
  min-height: 100vh;

  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  @media (min-width: 800px) {
    padding-top: var(--spacer);
  }
`;
