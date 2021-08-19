import styled from 'styled-components';
import { m } from 'framer-motion';
import { fade, revealInOut } from '@/helpers/transition';
import { SplitText } from '@/helpers/split-text';
import FancySpan from '../fancy-span';
import PostPreview from '../post/post-preview';
import Image from 'next/image';

let src =
  'https://res.cloudinary.com/godwinebikwo/image/upload/v1628673325/rachel-mcdermott-0fN7Fxv1eWA-unsplash_ujennl.jpg';

export default function Header({ posts }) {
  return (
    <HeaderBox>
      <m.div className="h-grid" variants={fade}>
        <m.div>
          <HeaderNav className="w-full">
            <div className="flex space-between align-center px-2">
              <h3 className="h-nav-labels">SS ❊</h3>
              <h3 className="h-nav-labels">FRONT-END DEVELOPER</h3>
            </div>
          </HeaderNav>
          <HeaderInfo className="h-info">
            <HeaderInfoContent>
              <HeaderInfoContentTop>
                <div className="h-about-me">
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
                      I am a developer based in Abuja, Nigeria focused on
                      creating interactive digital experiences on the web.
                    </SplitText>
                  </h5>
                </div>
              </HeaderInfoContentTop>

              <div className="h-img">
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628672656/j-waye-covington-D38l260GHc4-unsplash_ic6yq2.jpg"
                  width={640}
                  height={460}
                  alt="your-img"
                />
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
                style={{ backgroundColor: 'whitesmoke', height: '100vh' }}>
                <h1>Thank you</h1>
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

const HeaderBox = styled.section`
  position: relative;
`;

const HeaderNav = styled.nav`
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-small);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--border-color);

  .h-nav-labels {
    letter-spacing: var(--ls-md);
    font-size: 1.12vw;
  }
`;

const HeaderWork = styled(m.aside)`
  top: 0;
  left: 0;
  width: auto;

  @media (min-width: 1024px) {
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
      padding: var(--spacer-md);
      position: sticky;
      top: 0;
      height: 66.666666vh;
      @media (min-width: 1024px) {
        height: 100vh;
      }
    }

    .h-work-bottom {
      position: fixed;
      top: auto;
      z-index: 20;
      bottom: var(--spacer);
      left: var(--spacer);
    }
  }
`;

const HeaderInfo = styled(m.aside)`
  top: 0;
  right: 0;
  position: relative;
  width: auto;
  background: var(--white);

  @media (min-width: 1024px) {
    position: fixed;
    width: 35%;
  }
`;

const HeaderInfoContent = styled.div`
  height: 66.666666vh;
  position: relative;

  @media (min-width: 1024px) {
    height: 100vh;
  }

  .h-services {
    padding: var(--golden-ratio);
  }

  .h-img {
    padding: var(--golden-ratio);
    @media (min-width: 1024px) {
      position: absolute;
      bottom: var(--spacer);
      left: var(--golden-ratio);
      right: var(--golden-ratio);
    }
  }

  /* .h-contact {
    position: absolute;
    text-align: left;
    top: var(--spacer);
    left: var(--golden-ratio);
    text-transform: uppercase;

    a {
      overflow: hidden;
    }
  } */
`;

const HeaderInfoContentTop = styled.div`
  position: relative;
  padding: var(--golden-ratio);
  padding-top: 5vw;

  @media (min-width: 1024px) {
    height: 50%;
    border-bottom: 1px solid var(--border-color);
  }

  .h-about-me {
    /* padding: var(--golden-ratio); */
    @media (min-width: 1024px) {
      max-width: 30vw;
      position: absolute;
      bottom: var(--spacer);
      left: var(--golden-ratio);
      right: var(--golden-ratio);
    }

    h5 {
      line-height: 100%;
      text-transform: uppercase;
      @media (max-width: 500px) {
        font-size: 7.2vw;
      }
    }
  }
`;

{
  /* <div className="h-contact">
                <ul>
                  <li>
                    <a className="link link--ersa">
                      <m.span className="block" variants={revealInOut}>
                        Email
                      </m.span>
                    </a>
                  </li>
                  <li>
                    <a className="link link--ersa">
                      <m.span className="block" variants={revealInOut}>
                        Github
                      </m.span>
                    </a>
                  </li>
                  <li>
                    <a className="link link--ersa">
                      <m.span className="block" variants={revealInOut}>
                        Twitter
                      </m.span>
                    </a>
                  </li>
                  <li>
                    <a className="link link--ersa">
                      <m.span className="block" variants={revealInOut}>
                        LinkedIn
                      </m.span>
                    </a>
                  </li>
                </ul>
              </div> */
}

{
  /* 
              <div className="h-services">
                <div>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      UI DESIGN
                    </m.span>
                  </FancySpan>
                </div>
                <div>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      E-COMMERCE
                    </m.span>
                  </FancySpan>
                </div>
                <div>
                  <FancySpan>
                    <m.span className="block" variants={revealInOut}>
                      FRONT-END DEVELOPER
                    </m.span>
                  </FancySpan>
                </div>
              </div> */
}
