import markdownStyles from "./markdown-styles.module.css";
import styled from "styled-components";

export default function PostBody({ content }) {
  return (
    <PostBox className="px-2">
      <div
        data-scroll
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PostBox>
  );
}

const PostBox = styled.div`
  margin-top: var(--spacer-md);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1024px) {
    max-width: 55rem;
  }
`;
