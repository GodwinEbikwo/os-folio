import styled from "styled-components";
import { m } from "framer-motion";
import { SplitText } from "@/helpers/split-text";
import FancySpan from "./fancy-span";
import { revealInOut } from "@/helpers/transition";

const variantsAni = {
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.35 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export default function Menu({ open }) {
  return (
    <m.div animate="enter" initial="initial" exit="exit">
      <MenuRight open={open} data-scroll-section>
        <m.div
          className="scroll-container"
          initial={false}
          animate={open ? "enter" : "exit"}
          exit="exit"
          variants={variantsAni}
        >
          <SplitText
            initial={{ y: "110%", opacity: 0 }}
            animate={open ? "enter" : "exit"}
            exit={{
              y: "110%",
            }}
            variants={{
              enter: (i) => ({
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 1.8,
                  ease: [0.77, 0, 0.175, 1],
                  delay: i * 0.02,
                },
              }),
            }}
          >
            Hello, I'm Godwin, I was born and raised in a country called
            Nigeria. Whilst writing code is what I do to not go broke in a
            capitalist state, it’s my appreciation for design, music, modern art
            and family that keeps me going. I spend my free time creating broken
            layouts, coding them and improving myself because you can never stop
            learning.
          </SplitText>

          <div style={{ marginTop: "var(--spacer)" }}>
            <SplitText
              initial={{ y: "110%", opacity: 0 }}
              animate={open ? "enter" : "exit"}
              exit={{
                y: "110%",
              }}
              variants={{
                enter: (i) => ({
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 1.8,
                    ease: [0.77, 0, 0.175, 1],
                    delay: i * 0.03,
                  },
                }),
              }}
            >
              I'M A VERY OUTGOING AND CURIOUS PERSON, WHO'S PASSIONATE ABOUT
              MUSIC, modern art, NATURE, and my dog (oti). I LOVE TO STARE AT A
              NOT-SO-BRIGHT SCREEN WHILE CODING ON A CONSTANT STATE OF FLOW.
            </SplitText>
          </div>

          <div style={{ marginTop: "var(--spacer)" }}>
            <SplitText
              initial={{ y: "110%", opacity: 0 }}
              animate={open ? "enter" : "exit"}
              exit={{
                y: "110%",
              }}
              variants={{
                enter: (i) => ({
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 1.8,
                    ease: [0.77, 0, 0.175, 1],
                    delay: i * 0.04,
                  },
                }),
              }}
            >
              I am always open to hearing about new projects and opportunities
              so please feel free to get in touch.
            </SplitText>
          </div>

          <div style={{ marginTop: "var(--spacer)" }} className="tech-grid">
            <div className="left">
              <span className="labels">Some technologies I use</span>
              <ul>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    React
                  </m.span>
                </FancySpan>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    React Native
                  </m.span>
                </FancySpan>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    Next.js
                  </m.span>
                </FancySpan>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    GraphQL
                  </m.span>
                </FancySpan>
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    Framer Motion
                  </m.span>
                </FancySpan>
              </ul>
            </div>

            <div className="middle">
              <span className="labels">Tech I'm currently learning</span>
              <ul>
                <li>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      WebGL
                    </m.span>
                  </FancySpan>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      Figma
                    </m.span>
                  </FancySpan>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      GSAP
                    </m.span>
                  </FancySpan>
                </li>
              </ul>
            </div>
          </div>
        </m.div>
      </MenuRight>

      <Overlay open={open} />
    </m.div>
  );
}

const MenuRight = styled.aside`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.77, 0, 0.18, 1) 0.125s;
  will-change: transform;
  z-index: 5;

  @media (min-width: 768px) {
    max-width: 35%;
    background: var(--bg);
  }

  ${(props) =>
    props.open &&
    `opacity: 1; 
      transition: opacity 1s cubic-bezier(.76,0,.24,1);
      cursor: pointer;
    `};

  .scroll-container {
    padding: calc(var(--spacer-lg) * 1.5) var(--golden-ratio);
    line-height: 1.55;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 0.8vw;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
      .labels {
        display: block;
        margin-bottom: var(--spacing-md);

        &::after {
          height: 1px;
          width: 3rem;
          content: "";
          display: block;
          background: var(--white);
          margin-top: 0.8rem;
        }
      }
    }
  }

  /* .scroll-container {
    padding: calc(var(--spacer-lg) * 1.5) var(--spacer);

    &:hover > li {
      transition: opacity 400ms;
      opacity: 0.5;
    }

    &:hover > li:hover {
      opacity: 1;
      color: var(--accent-1);
    }

    li {
      a {
        font-family: var(--font-2);
        font-weight: var(--font-sm);
        font-size: 10vw;
        text-transform: capitalize;
        text-align: right;
        letter-spacing: var(--ls-lg);
        @media (min-width: 768px) {
          font-size: 3.5vw;
        }
      }
    }
  } */
`;

export const Overlay = styled.div`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(36px) saturate(180%);
  background-color: rgba(10, 10, 10, 0.5);
  z-index: 4;
  transition: opacity 1s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1s cubic-bezier(0.77, 0, 0.18, 1);
  cursor: pointer;
  ${(props) =>
    props.open && `opacity: 1; visibility: visible; transition-delay: 0.01s;`};
`;
