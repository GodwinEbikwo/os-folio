import { m } from "framer-motion";
import styled from "styled-components";
import { fadeDelay } from "@/helpers/transition";
import { SplitText } from "@/helpers/split-text";

export default function About() {
  return (
    <AboutBox>
      <m.div variants={fadeDelay}>
        <m.div
          variants={{
            transition: {
              stagger: 0.09,
              delay: 0.35,
            },
          }}
        >
          <aside className="absolute-left hide-for-mobile">
            <ul>
              <li>
                <a className="link link--metis">About</a>
              </li>
              <li>
                <a className="link link--metis">work</a>
              </li>
              <li>
                <a className="link link--metis">contact</a>
              </li>
              <li>
                <a className="link link--metis">services</a>
              </li>
            </ul>
          </aside>

          <div className="right px-2">
            <AboutTitle className="not-selectable">
              <SplitText
                initial={{ y: "110%", opacity: 0, rotate: "0deg" }}
                animate="enter"
                exit={{
                  y: "110%",
                }}
                variants={{
                  enter: (i) => ({
                    y: "0%",
                    opacity: 1,
                    rotate: "0deg",
                    transition: {
                      duration: 1.8,
                      ease: [0.77, 0, 0.175, 1],
                      delay: i * 0.02,
                    },
                  }),
                }}
              >
                Clinton Nonso is an architect, creative director and visual
                designer dedicated to helping clients create functional living
                spaces and artful pieces for their home or work space.
              </SplitText>
            </AboutTitle>
          </div>
        </m.div>
      </m.div>
    </AboutBox>
  );
}

const AboutBox = styled.div`
  height: calc(63.33vh - 58px);
  padding-top: calc(33.33vh - 58px);

  position: relative;
  @media (min-width: 768px) {
    height: calc(50vh - 35px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 35px);
  }

  .right {
    left: 0;
    bottom: 0;
    position: absolute;
    @media (min-width: 1024px) {
      bottom: 30px;
    }
  }

  .absolute-left {
    position: fixed;
    right: var(--spacer);
    bottom: var(--spacer);
    text-transform: uppercase;
    font-weight: 400;
    font-family: var(--font-2);
    letter-spacing: var(--ls-sm);
  }
`;

const AboutTitle = styled(m.h2)`
  margin-top: 5rem;
  font-family: "Roslindale Display Condensed Regular", var(--font-2);
  letter-spacing: var(--ls-sm);
  font-size: calc(34px + 44 * ((100vw - 320px) / 680));
  line-height: 1;
  max-width: 1000px;
  text-rendering: optimizeLegibility;
  color: rgba(255, 255, 255, 0.9);
  padding-top: calc(23.33vh - 58px);

  @media (min-width: 1024px) {
    font-size: calc(44px + 44 * ((100vw - 320px) / 680));
  }

  @media (min-width: 768px) {
    padding-top: 0;
    max-width: 900px;
    font-size: 5vw;
    margin-top: 10rem;
  }
`;
