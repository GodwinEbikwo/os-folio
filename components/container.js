import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  &.has-mw {
    max-width: var(--max-width);
  }
`;
