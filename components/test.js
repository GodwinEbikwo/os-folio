import { useEffect, useState } from "react";
import { m, useViewportScroll, useTransform } from "framer-motion";

//Components
import styled from "styled-components";
import FancySpan from "./fancy-span";
import { revealInOut } from "@/helpers/transition";
//Ease
const transition = { duration: 1.5, ease: [0.215, 0.61, 0.355, 1] };

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const [canScroll, setCanScroll] = useState(false);
  const [introContext, setIntroContext] = useState(true);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext();
    }, 1000);
  }, []);

  const innerReveal = {
    initial: { x: 0 },
    enter: {
      x: "100%",
      transition: {
        delay: introContext ? 0.05 : 1.9,
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    exit: {
      x: 0,
      transition: { delay: 0.05, duration: 0.65, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const innerReveal2 = {
    initial: { x: 0 },
    enter: {
      x: "100%",
      transition: {
        delay: introContext ? 0.275 : 2.25,
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    exit: {
      x: 0,
      transition: { delay: 0.1, duration: 0.65, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <m.div
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <m.div className="relative" style={{ minHeight: "100vh" }}>
        <m.div
          variants={innerReveal}
          className="animate-bg"
          style={{ background: "#dc2f02", zIndex: 21 }}
        ></m.div>

        <m.div
          variants={innerReveal2}
          className="animate-bg"
          style={{ background: "#f77f00" }}
        ></m.div>

        <m.div
          initial={{
            opacity: 0,
            scale: 1.4,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.4, ...transition },
          }}
          className="relative"
        >
          <m.div className="relative" transition={transition}>
            <m.img
              className="img-bg"
              src="/room.jpg"
              alt="an image"
              style={{ scale: scale }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, ...transition },
              }}
            />
            <TitleContainer>
              <Title>
                <FancySpan>
                  <m.span
                    className="block"
                    initial={{ y: "160%", opacity: 0 }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      transition: {
                        delay: 0.8,
                        duration: 1.95,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    }}
                  >
                    Ready
                  </m.span>
                </FancySpan>
                <FancySpan>
                  <m.span
                    className="block"
                    initial={{ y: "160%", opacity: 0 }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      transition: {
                        delay: 0.8,
                        duration: 1.95,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    }}
                  >
                    Tan
                  </m.span>
                </FancySpan>
                <FancySpan>
                  <m.span
                    className="block"
                    initial={{ y: "160%", opacity: 0 }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      transition: {
                        delay: 0.8,
                        duration: 1.95,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    }}
                  >
                    Glow
                  </m.span>
                </FancySpan>
              </Title>
            </TitleContainer>
          </m.div>
          <ParaContainer>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
          </ParaContainer>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Model;

const TitleContainer = styled.div`
  position: absolute;
  left: var(--golden-ratio);
  bottom: var(--spacer-lg);
  z-index: 25;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: -0.055em;
  font-size: 5vw;
  z-index: 25;
`;

const ParaContainer = styled.div`
  max-width: 45rem;
  margin: 3rem auto;
  p {
    margin-bottom: 2rem;
  }
`;
