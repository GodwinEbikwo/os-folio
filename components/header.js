import PopUp from "./pop-up";
import { m } from "framer-motion";
import styled from "styled-components";
import PostPreview from "./post/post-preview";
import { SplitText } from "@/helpers/split-text";
import { HeaderImage } from "./post/cover-image";
import { fade } from "@/helpers/transition";

export default function Header({ posts, title, responsiveImage }) {
  return (
    <HeaderBox>
      <m.div variants={fade}>
        <HeaderInfo className="h-info">
          <HeaderInfoContent>
            <HeaderInfoContentTop>
              <HeaderInfoContentTopTitle>
                <span>Godwin</span>
                <br />
                <span>Ebikwo</span>
              </HeaderInfoContentTopTitle>

              <div className="h-about-me">
                <div className="py-2">
                  <h4>
                    <span className="inline-block">✦ ✦ ✦ ✦ </span>
                  </h4>
                </div>

                <h5>
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
                          duration: 1.4,
                          ease: [0.77, 0, 0.175, 1],
                          delay: i * 0.02,
                        },
                      }),
                    }}
                  >
                    I AM A DEVELOPER FOCUSED ON CREATING INTERACTIVE DIGITAL
                    EXPERIENCES ON THE WORLD WIDE WEB. CURRENTLY, I am taking a
                    break FROM full time employment and going to serve my
                    country (Nigeria). However I am Open to small projects and a
                    chat. (Gotta pay the bills) - Capitalism.
                  </SplitText>
                </h5>
              </div>
            </HeaderInfoContentTop>

            <div className="h-img">
              <HeaderImage title={title} responsiveImage={responsiveImage} />
            </div>
          </HeaderInfoContent>
        </HeaderInfo>

        <HeaderWork className="h-work">
          <div className="h-work-content">
            {posts.map((post) => (
              <m.ul className="h-work-middle" key={post.slug}>
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  link={post.link}
                />
              </m.ul>
            ))}

            <m.div
              className="h-work-middle"
              style={{ backgroundColor: "inherit", height: "100vh" }}
            >
              <PopUp />
            </m.div>

            <div className="h-work-bottom hide-for-mobile">
              FOLIO 2021 - AVAILABLE WHEN YOU SEND THAT MAIL
            </div>
          </div>
        </HeaderWork>
      </m.div>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  position: relative;
`;

const HeaderWork = styled(m.aside)`
  top: 0;
  left: 0;
  width: auto;

  @media (min-width: 700px) {
    width: 65%;
    border-right: 1px solid var(--border-color);
  }

  .h-work-content {
    position: relative;

    .h-work-middle {
      display: flex;
      align-items: center;
      align-content: flex-start;
      justify-content: center;
      padding: var(--golden-ratio);
      position: sticky;
      top: 0;
      height: 66.666666vh;
      backdrop-filter: blur(16px) saturate(180%);
      /* background-color: rgba(10, 10, 10, 0.75); */

      @media (min-width: 700px) {
        height: 100vh;
        padding: calc(var(--spacer-lg) * 2);
      }
    }

    .h-work-bottom {
      position: fixed;
      top: auto;
      z-index: 20;
      bottom: var(--spacer);
      left: var(--spacer);
      mix-blend-mode: difference;
      color: white;
    }
  }
`;

const HeaderInfo = styled(m.aside)`
  top: 15px;
  right: 0;
  position: relative;
  width: auto;

  @media (min-width: 700px) {
    top: 0;
    position: fixed;
    width: 35%;
  }
`;

const HeaderInfoContent = styled.div`
  height: 76.666666vh;
  position: relative;

  @media (min-width: 700px) {
    height: 100vh;
  }

  .h-services {
    padding: var(--golden-ratio);
  }

  .h-img {
    padding: var(--golden-ratio);
    @media (min-width: 700px) {
      padding: 0;
      position: absolute;
      bottom: 1rem;
      left: var(--golden-ratio);
      right: var(--golden-ratio);
    }
  }
`;

const HeaderInfoContentTop = styled.div`
  position: relative;
  padding: var(--golden-ratio);
  padding-top: 17vw;

  @media (min-width: 700px) {
    padding-top: 5vw;
    height: 50%;
    border-bottom: 1px solid var(--border-color);
  }

  .h-about-me {
    @media (min-width: 700px) {
      max-width: 35vw;
      position: absolute;
      bottom: var(--golden-ratio);
      left: var(--golden-ratio);
      right: var(--golden-ratio);
    }

    h5 {
      line-height: 140%;
      text-transform: uppercase;
    }
  }
`;

const HeaderInfoContentTopTitle = styled.h3`
  letter-spacing: var(--ls-lg);
  line-height: 90%;
  font-family: var(--font-2);
  font-weight: var(--font-md);
  text-align: left;
  font-size: 8.2vw;
  font-weight: 400;
  @media (min-width: 700px) {
    font-size: 4vw;
    max-width: 35px;
  }
`;
