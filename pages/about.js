import Nav from "@/components/nav";
import About from "@/components/about";
import Layout from "@/components/layout";
import { ContainerBox } from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Asection from "@/components/about-stuff/ab-section";
import AWork from "@/components/about-stuff/ab-work";
import { getAllPostsForHome } from "@/lib/api";

export default function AboutPage({ allWork }) {
  const workPosts = allWork.slice(0, 5);
  return (
    <Layout>
      <Nav />
      <main>
        <section>
          <LazyMotion features={domAnimation}>
            <m.aside initial="initial" animate="enter" exit="exit">
              <ContainerBox className="has-mw">
                <About />
                <Asection />
                {workPosts.length > 0 && <AWork posts={workPosts} />}
              </ContainerBox>
            </m.aside>
          </LazyMotion>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allWork = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allWork },
  };
}
