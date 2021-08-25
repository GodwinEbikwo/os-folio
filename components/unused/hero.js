import styled from 'styled-components';
import { m } from 'framer-motion';
import { fade, revealInOut } from '@/helpers/transition';
import { SplitText } from '@/helpers/split-text';
import PostPreview from '../post/post-preview';
import Image from 'next/image';
import Tabs from './tabs';
import FancySpan from '../fancy-span';

export default function Hero() {
  return (
    <HeroBox>
      <m.div className="h-grid" variants={fade}>
        <HeroNav className="w-full">
          <div className="flex space-between align-center px-2">
            <h3 className="h-nav-labels">SS ❊</h3>
            <h3 className="h-nav-labels">FRONT-END DEVELOPER</h3>
          </div>
        </HeroNav>

        <HeroInfo>
          <HeroInfoContent>
            <HeroContentTop>
              <Tabs />
              <h3>
                <FancySpan>
                  <m.span className="inline-block" variants={revealInOut}>
                    Segun Sowunmi
                  </m.span>
                </FancySpan>
              </h3>

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
                    I am a developer based in Lagos, Nigeria focused on creating
                    interactive digital experiences on the web, working with
                    brands and industry leaders such as DISNEY, PAYSTACK,
                    PRINTIVO, and WILD amongst others to achieve this.
                  </SplitText>
                </h5>
              </div>
            </HeroContentTop>

            <div className="h-img">
              <Image
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628673325/rachel-mcdermott-0fN7Fxv1eWA-unsplash_ujennl.jpg"
                width={640}
                height={460}
                alt="your-img"
              />
            </div>
          </HeroInfoContent>
        </HeroInfo>

        <HeroWork className="h-work">
          <div className="h-work-content">
            <div className="h-work-top hide-for-mobile">
              GODWIN ADEJO EBIKWO
            </div>

            {/* {posts.map((post) => (
              <m.div
                className="h-work-middle"
                key={post.slug}
                style={{ backgroundColor: '#f3f1e7' }}>
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  slug={post.slug}
                />
              </m.div>
            ))} */}

            <m.div
              className="h-work-middle h-full"
              style={{ backgroundColor: '#f3f1e7' }}>
              <h1>Thank you</h1>
            </m.div>

            <div className="h-work-bottom hide-for-mobile">
              FOLIO 2021 - AVAILABLE WHEN YOU SEND THAT MAIL
            </div>
          </div>
        </HeroWork>
      </m.div>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: relative;
  background-color: #f3f1e7;
`;

const HeroNav = styled.nav`
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-small);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #f3f1e7;
  border-bottom: 1px solid var(--border-color);

  .h-nav-labels {
    letter-spacing: var(--ls-md);
    font-weight: var(--font-md);
    font-size: 1.2vw;
  }
`;

const HeroWork = styled(m.aside)`
  top: 0;
  right: 0;
  width: auto;

  @media (min-width: 1024px) {
    position: absolute;
    width: 70%;
    flex-grow: 1;
  }

  .h-work-content {
    position: relative;

    .h-work-top {
      position: fixed;
      top: var(--spacer);
      right: var(--spacer);
      z-index: 20;
    }

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
      right: var(--spacer);
    }
  }
`;

const HeroInfo = styled(m.aside)`
  top: 0;
  left: 0;
  position: relative;
  width: auto;
  background-color: #f3f1e7;

  @media (min-width: 1024px) {
    position: fixed;
    width: 30%;
    border-right: 1px solid var(--border-color);
  }
`;

const HeroInfoContent = styled.div`
  height: 60.666666vh;
  position: relative;

  @media (min-width: 1024px) {
    height: 100vh;
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
`;

const HeroContentTop = styled.div`
  position: relative;
  padding: var(--golden-ratio);
  padding-top: 5vw;

  @media (min-width: 1024px) {
    height: 60%;
    border-bottom: 1px solid var(--border-color);
  }

  h3 {
    margin-top: var(--spacer);
    margin-bottom: var(--spacer-md);
    /* font-weight: var(--font-md); */
    letter-spacing: var(--ls-lg);
    text-transform: uppercase;
    line-height: 110%;
    font-size: 4vw;
    /* font-family: 'Cabinet Grotesk', sans-serif; */
  }

  .h-about-me {
    @media (min-width: 1024px) {
      max-width: 30vw;
      position: absolute;
      bottom: var(--spacer);
      left: var(--golden-ratio);
      right: var(--golden-ratio);
    }

    h5 {
      text-transform: uppercase;
      line-height: 1.2;
    }
  }
`;
