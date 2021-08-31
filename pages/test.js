import { ContainerBox } from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Nav from "@/components/nav";
import Layout from "@/components/layout";
import Model from "@/components/test";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { options } from "@/lib/scroll-config";

export default function TestPage() {
  const containerRef = useRef(null);
  const imageDetails = {
    width: 1920,
    height: 1024,
  };
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
              <m.aside initial="initial" animate="enter" exit="exit">
                <ContainerBox>
                  <Model imageDetails={imageDetails} />
                </ContainerBox>
              </m.aside>
            </LazyMotion>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
