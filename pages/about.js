import Nav from "@/components/nav";
import About from "@/components/about";
import Layout from "@/components/layout";
import { ContainerBox } from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
      <Nav />
      <main>
        <section>
          <LazyMotion features={domAnimation}>
            <m.aside initial="initial" animate="enter" exit="exit">
              <ContainerBox className="has-px has-mw">
                <About />
              </ContainerBox>
            </m.aside>
          </LazyMotion>
        </section>
      </main>
    </Layout>
  );
}
