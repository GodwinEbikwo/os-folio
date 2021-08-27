import { m } from "framer-motion";
import styled from "styled-components";
import { fadeDelay } from "@/helpers/transition";
import { SplitText } from "@/helpers/split-text";

export default function About() {
  return (
    <AboutBox>
      <aside className="absolute-right">
        <div></div>
      </aside>

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
      <m.div variants={fadeDelay}>
        <m.div
          variants={{
            transition: {
              stagger: 0.09,
              delay: 0.35,
            },
          }}
        >
          {/* <div className="left hide-for-mobile" /> */}
          <div className="right px-2">
            <div className="relative">
              <div className="right-inner">
                <AboutTitle>
                  <SplitText
                    initial={{ y: "110%", opacity: 0 }}
                    animate="enter"
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
                    Mars Mathew is an architect, creative director and visual
                    designer dedicated to helping clients create functional
                    living spaces and artful pieces for their home or work space.
                  </SplitText>
                </AboutTitle>

                <div className="border-top">
                  <AboutSemi className="not-selectabel">
                    <SplitText
                      initial={{ y: "110%", opacity: 0 }}
                      animate="enter"
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
                      He specializes in working with female-run businesses and
                      social impact organizations by bringing their stories to
                      life through engaging visuals and strategically-designed
                      Squarespace websites.
                    </SplitText>
                  </AboutSemi>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </m.div>
    </AboutBox>
  );
}

const AboutBox = styled.div`
  position: relative;
  .border-top {
    margin-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .right-inner {
    position: sticky;
    top: 0;
    min-height: 100vh;
  }

  @media (min-width: 768px) {
    .left {
      top: 0;
      left: 0;
      width: 30%;
      position: fixed;
    }

    .right {
      top: 30px;
      right: 0;
      position: fixed;
      width: 70%;
      overflow-y: scroll;
    }

    .absolute-left {
      position: fixed;
      left: var(--spacer);
      bottom: var(--spacer);
      text-transform: uppercase;
      font-weight: 400;
      font-family: "Helvetica Neue", sans-serif;
      letter-spacing: var(--ls-sm);
    }
    .absolute-right {
      position: fixed;
      left: var(--spacer);
      bottom: var(--spacer);
      text-transform: uppercase;
      font-weight: 400;
      font-family: "Helvetica Neue", sans-serif;
      letter-spacing: var(--ls-sm);

      & > div {
        display: inline-flex;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
      }
    }
  }
`;

const AboutTitle = styled(m.h2)`
  margin-top: 5rem;
  font-family: "Roslindale Display Condensed Regular", var(--font-2);
  letter-spacing: var(--ls-sm);
  font-size: calc(44px + 44 * ((100vw - 320px) / 680));
  line-height: 1;
  max-width: 1000px;
  text-rendering: optimizeLegibility;
  color: rgba(255, 255, 255, 0.9);
  padding-top: calc(23.33vh - 58px);

  @media (min-width: 768px) {
    padding-top: 0;
    max-width: 900px;
    font-size: 5vw;
    margin-top: 10rem;
  }
`;

const AboutSemi = styled(m.h4)`
  margin-top: 1.5rem;
  font-family: var(--font-2);
  letter-spacing: var(--ls-sm);
  line-height: 1.1;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  @media (min-width: 768px) {
    max-width: 41ch;
    margin-top: 1.5rem;
    font-size: 2.5vw;
  }
`;
