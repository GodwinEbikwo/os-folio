import PopUp from './pop-up';
import { m } from 'framer-motion';
import FancySpan from './fancy-span';
import styled from 'styled-components';
import PostPreview from './post/post-preview';
import { SplitText } from '@/helpers/split-text';
import { HeaderImage } from './post/cover-image';
import { fade, revealInOut } from '@/helpers/transition';

export default function Header({ posts, title, responsiveImage }) {
  return (
    <HeaderBox>
      <m.div className="h-grid" variants={fade}>
        <m.div>
          <HeaderInfo className="h-info">
            <HeaderInfoContent>
              <HeaderInfoContentTop>
                <HeaderInfoContentTopTitle>
                  <FancySpan>
                    <m.span className="inline-block" variants={revealInOut}>
                      Segun <br />
                      Sowunmi
                    </m.span>
                  </FancySpan>
                </HeaderInfoContentTopTitle>

                <div className="h-about-me">
                  <div className="py-2">
                    <h4>
                      <span className="inline-block">✦ ✦ ✦ ✦ </span>
                    </h4>
                  </div>

                  <h5>
                    <SplitText
                      initial={{ y: '110%', opacity: 0 }}
                      animate="enter"
                      exit={{
                        y: '110%',
                      }}
                      variants={{
                        enter: (i) => ({
                          y: '0%',
                          opacity: 1,
                          transition: {
                            duration: 1.8,
                            ease: [0.77, 0, 0.175, 1],
                            delay: i * 0.02,
                          },
                        }),
                      }}>
                      I AM A DEVELOPER BASED IN LAGOS, NIGERIA FOCUSED ON
                      CREATING INTERACTIVE DIGITAL EXPERIENCES ON THE WEB,
                      WORKING WITH BRANDS AND INDUSTRY LEADERS SUCH AS DISNEY,
                      PAYSTACK, PRINTIVO, AND WILD AMONGST OTHERS TO ACHIEVE
                      THIS.
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
                <m.div
                  className="h-work-middle"
                  key={post.slug}
                  style={{ backgroundColor: post.bg.hex }}>
                  <PostPreview
                    title={post.title}
                    coverImage={post.coverImage}
                    slug={post.slug}
                  />
                </m.div>
              ))}

              <m.div
                className="h-work-middle"
                style={{ backgroundColor: 'var(--bg)', height: '100vh' }}>
                <ClosingTitle>Thank you</ClosingTitle>

                <PopUp />

                {/* <div
                  className="w-full relative"
                  style={{ height: 0, paddingBottom: '16%' }}>
                  <iframe
                    src="https://giphy.com/embed/gTfyyVLTicxCE"
                    width="100%"
                    height="100%"
                    className="absolute"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  />
                </div> */}
                {/* 
                <div
                  className="w-full relative"
                  style={{ height: 0, paddingBottom: '75%' }}>
                  <iframe
                    src="https://giphy.com/embed/11ISwbgCxEzMyY"
                    width="100%"
                    height="100%"
                    className="absolute"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen></iframe>
                </div> */}
              </m.div>

              <div className="h-work-bottom hide-for-mobile">
                FOLIO 2021 - AVAILABLE WHEN YOU SEND THAT MAIL
              </div>
            </div>
          </HeaderWork>
        </m.div>
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
    border-right: 1px dotted var(--border-color);
  }

  .h-work-content {
    position: relative;

    .h-work-middle {
      display: flex;
      align-items: center;
      align-content: flex-start;
      justify-content: center;
      padding: var(--spacer-md);
      position: sticky;
      top: 0;
      height: 66.666666vh;
      @media (min-width: 700px) {
        height: 100vh;
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
  top: 0;
  right: 0;
  position: relative;
  width: auto;

  @media (min-width: 700px) {
    position: fixed;
    width: 35%;
  }
`;

const HeaderInfoContent = styled.div`
  height: 66.666666vh;
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
    border-bottom: 1px dotted var(--border-color);
  }

  .h-about-me {
    @media (min-width: 700px) {
      max-width: 30vw;
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
  margin-top: var(--golden-ratio);
  letter-spacing: var(--ls-lg);
  line-height: 90%;
  font-family: var(--font-2);
  font-weight: var(--font-sm);
  text-align: left;
  @media (min-width: 700px) {
    font-size: 4vw;
  }
`;

const ClosingTitle = styled.h3`
  letter-spacing: var(--ls-lg);
  line-height: 90%;
  font-family: var(--font-2);
  font-weight: var(--font-sm);
  text-align: left;
  text-transform: uppercase;
  @media (min-width: 700px) {
    font-size: 4vw;
  }
`;
