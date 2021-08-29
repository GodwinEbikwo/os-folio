import { m } from "framer-motion";
import styled from "styled-components";
import { fadeDelay } from "@/helpers/transition";
import { SplitText } from "@/helpers/split-text";

export default function Asection() {
  return (
    <AboutIntro>
      <AboutIntroRow>
        <div className="row-inner">
          <div className="border-top">
            <AboutSemi className="not-selectable">
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
                He specializes in working with businesses and social impact
                organizations by bringing their stories to life through engaging
                visuals and strategically-designed Squarespace websites.
              </SplitText>
            </AboutSemi>

            <AboutSemi
              className="not-selectable"
              style={{ marginTop: "2rem" }}
            >
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
                Hype Legal provides a full range of marketing services to
                maximize online exposure and connect law firms with quality
                clients.
              </SplitText>
            </AboutSemi>
          </div>
        </div>
      </AboutIntroRow>
    </AboutIntro>
  );
}

const AboutIntro = styled.section`
  max-width: var(--max-width);
  margin-right: auto;
  margin-left: auto;
  padding: 50px var(--golden-ratio);
`;

const AboutIntroRow = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  .row-inner {
    margin-left: 0%;
    flex-basis: 100%;
    max-width: 100%;
    flex: 0 0 auto;
    padding-bottom: var(--golden-ratio);

    .border-top {
      border-top: 1px solid var(--border-color);
    }

    @media (min-width: 768px) {
      flex-basis: 50%;
      max-width: 50%;
      margin-left: 50%;
    }

    @media (min-width: 1024px) {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
      padding: 0 var(--spacing-sm);
    }
  }
`;

const AboutSemi = styled(m.h3)`
  margin-top: 1.5rem;
  font-family: var(--font-2);
  letter-spacing: var(--ls-sm);
  line-height: 1.1;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  @media (min-width: 768px) {
    font-size: 1.7vw;
  }
`;
