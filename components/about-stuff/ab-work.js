import { m } from "framer-motion";
import styled from "styled-components";
import { ContainerBox } from "@/components/container";
import PostPreview from "../post/post-preview";
import { fadeDelay } from "@/helpers/transition";

export default function AWork({ posts }) {
  return (
    <m.div initial="initial" animate="enter" exit="exit" className="relative">
      <m.div variants={fadeDelay}>
        <ContainerBox className="has-px has-mw">
          <WorkHeader>
            <WorkTitle>Selected work</WorkTitle>
          </WorkHeader>
          <WorkGrid>
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                slug={post.slug}
              />
            ))}
          </WorkGrid>
        </ContainerBox>
      </m.div>
    </m.div>
  );
}

const WorkHeader = styled.div`
  top: var(--spacer-lg);
  left: var(--golden-ratio);
  position: absolute;
`;

const WorkTitle = styled.h4`
  padding: var(--spacer) 0;
  line-height: 1;
  letter-spacing: var(--ls-sm);
  font-weight: 400;
  font-family: var(--font-2);
  text-transform: uppercase;

  &::after {
    height: 1px;
    width: 4rem;
    content: "";
    display: block;
    background: var(--white);
    margin-top: 1.01vw;
  }
`;

const WorkGrid = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  gap: 1em;
  margin-top: 8rem;
  padding: 8rem 0;

  @media (min-width: 768px) {
    position: relative;
    margin-bottom: 0.694vw;
    grid-column-gap: 2vw;
    grid-template-columns: repeat(12, 1fr);
    counter-reset: num;

    & > li {
      position: relative;
      vertical-align: middle;
      justify-content: center;
      grid-column: 3/11;
      margin-bottom: 4rem;
      counter-increment: num;
      z-index: -1;
     
/* 
      ::before {
        position: absolute;
        top: -70px;
        right: 0;
        z-index: 1;
        display: block;
        content: "0" counter(num);
        font-size: 7vw;
        mix-blend-mode: difference;
        font-family: "F37 Judge Test", var(--font-2);
        font-weight: var(--font-md);
      } */

      &:not(:last-child) {
        margin-bottom: calc(var(--spacer) + 2.5vw);
      }

      &:nth-child(1) {
        height: 34.569vw;
        grid-column: 3/9;
      }

      &:nth-child(2) {
        height: 34.569vw;
        grid-column: 9/12;
      }

      &:nth-child(4) {
        order: 2;
        height: 34.569vw;
        grid-column: 9/12;
      }

      &:nth-child(5) {
        order: 1;
        height: 34.569vw;
        grid-column: 3/9;
      }
    }
  }
`;
