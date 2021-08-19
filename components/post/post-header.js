import { m } from 'framer-motion';
import { ProjectCoverImage } from './cover-image';
import styled from 'styled-components';
import { SplitText } from '@/helpers/split-text';
import FancySpan from '../fancy-span';
import PostBody from './post-body';

export const enterIn = {
  initial: { y: '110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.375,
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: '110%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

export default function PostHeader({ title, coverImage, content }) {
  return (
    <m.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        enter: { transition: { staggerChildren: 0.09, delay: 0.2 } },
      }}>
      <PostGrid>
        <PostLeft>
          <PostLeftInner>
            <PostTitle>
              <SplitText
                initial={{ x: '-110%', opacity: 0 }}
                animate="enter"
                exit={{ x: '110%' }}
                variants={{
                  enter: (i) => ({
                    x: '0%',
                    opacity: 1,
                    transition: {
                      duration: 1.3,
                      ease: [0.77, 0, 0.175, 1],
                      delay: i * 0.05,
                    },
                  }),
                }}>
                {title}
              </SplitText>
            </PostTitle>

            <PostImageBox className="px-2">
              <ProjectCoverImage
                title={title}
                responsiveImage={coverImage.responsiveImage}
              />
            </PostImageBox>
          </PostLeftInner>
        </PostLeft>

        <PostRight>
          <PostRightInner>
            <h5>Tech Stack</h5>
            <ul>
              <li>
                <div className="flex space-between">
                  <span>Next js</span>
                  <span>tWO</span>
                </div>
                <div className="line" />
              </li>

              <li>
                <div className="flex space-between">
                  <span>Styled Components</span>
                  <span>FOUT</span>
                </div>
                <div className="line" />
              </li>

              <li>
                <div className="flex space-between">
                  <span>Vercel</span>
                  <span>FOUT</span>
                </div>
                <div className="line" />
              </li>

              <li>
                <div className="flex space-between">
                  <span>Dato Cms</span>
                  <span>FOUT</span>
                </div>
                <div className="line" />
              </li>

              <li>
                <div className="flex space-between">
                  <span>FIVE</span>
                  <span>SIX</span>
                </div>
                <div className="line" />
              </li>
            </ul>
          </PostRightInner>

          <PostRightBottom>
            <div className="px-2 text-uppercase">
              <h5>About work</h5>
            </div>
            <PostBody content={content} />
          </PostRightBottom>
        </PostRight>
      </PostGrid>
    </m.div>
  );
}

const PostGrid = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);

  @media (min-width: 1024px) {
    display: grid;
    gap: 0.5em;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 4vw;
  }
`;

const PostLeft = styled.aside`
  position: relative;
  @media (min-width: 768px) {
    grid-column: 1/9;
  }
`;

const PostLeftInner = styled.div`
  h1 {
    position: absolute;
    bottom: 0;
    left: 1rem;
    mix-blend-mode: difference;
    z-index: 2;
  }

  
`;

const PostImageBox = styled.div`
  margin-bottom: 3.5rem;
  z-index: 1;
`;

const PostTitle = styled.h1`
  font-family: var(--font-2);
  font-weight: var(--font-md);
  text-align: start;
  line-height: 1;
  letter-spacing: var(--ls-md);
  text-transform: uppercase;
  font-size: 6vw;
`;

const PostRight = styled.aside`
  position: relative;
  @media (min-width: 768px) {
    grid-column: 9/13;
  }
`;

const PostRightInner = styled.div`
  text-transform: uppercase;
  padding: 0 var(--golden-ratio);

  @media (min-width: 768px) {
    height: 45%;
    /* border-bottom: 1px dotted var(--border-color); */
  }

  h5 {
    &::after {
      height: 1px;
      width: 2.5rem;
      content: '';
      display: block;
      background: var(--white);
      margin-top: 0.75rem;
    }
  }

  ul {
    li {
      margin-top: var(--spacer);
      & > span {
        display: inline-block;
      }

      .line {
        width: 100%;
        height: 1px;
        background-color: var(--border-color);
      }
    }
  }
`;

const PostRightBottom = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    bottom: var(--spacer);
  }

  h5 {
    &::after {
      height: 1px;
      width: 2.5rem;
      content: '';
      display: block;
      background: var(--white);
      margin-top: 0.75rem;
    }
  }
`;
