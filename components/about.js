import { m } from "framer-motion";
import styled from "styled-components";
import { fadeDelay } from "@/helpers/transition";
import { SplitText } from "@/helpers/split-text";

export default function About() {
  return (
    <AboutBox>
      <div className="absolute-left">
        <h5>
          <a>godwin.a.ebikwo@gmail.com</a>
        </h5>
      </div>
      <m.div variants={fadeDelay}>
        <m.div
          variants={{
            transition: {
              stagger: 0.09,
              delay: 0.35,
            },
          }}
        >
          <div className="left hide-for-mobile" />
          <div className="right">
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
                Segun Sowunmi is a visual designer and architect dedicated to helping clients build
                thoughtful visual identities and memorable experiences for their
                audience.
              </SplitText>
            </AboutTitle>

            <AboutSemi>
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
                She specializes in working with female-run businesses and social
                impact organizations by bringing their stories to life through
                engaging visuals and strategically-designed Squarespace
                websites.
              </SplitText>
            </AboutSemi>
          </div>
        </m.div>
      </m.div>
    </AboutBox>
  );
}

const AboutBox = styled.div`
  position: relative;
  @media (min-width: 768px) {
    .left {
      top: 0;
      left: 0;
      width: 30%;
      position: fixed;
    }

    .right {
      top: 0;
      right: 0;
      position: fixed;
      width: 70%;
    }

    .absolute-left {
      position: fixed;
      left: var(--spacer);
      bottom: var(--spacer);
      text-transform: uppercase;
    }
  }
`;

const AboutTitle = styled(m.h2)`
  margin-top: 10rem;
  font-family: var(--font-2);
  letter-spacing: var(--ls-md);
  font-size: 3.5vw;
  line-height: 1.1;
  max-width: 900px;
  text-rendering: optimizeLegibility;
`;

const AboutSemi = styled(m.h3)`
  margin-top: 5rem;
  font-size: 2.5vw;
  font-family: var(--font-2);
  letter-spacing: var(--ls);
  max-width: 45ch;
  line-height: 1.2;
  font-family: 'Helvetica Neue', sans-serif
`;
