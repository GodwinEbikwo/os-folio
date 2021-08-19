import styled from 'styled-components';

export default function PostTitle({ children }) {
  return <PostT>{children}</PostT>;
}

const PostT = styled.h1`
  font-family: var(--font-2);
  font-weight: var(--font-md);
  text-align: start;
  line-height: 1;
  letter-spacing: var(--ls-md);
  text-transform: uppercase;
`;
