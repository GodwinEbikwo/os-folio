import CoverImage from './cover-image';
import Link from 'next/link';
import styled from 'styled-components';

export default function PostPreview({ title, coverImage, slug }) {
  return (
    <PostPreviewBox>
      <div className="py-2">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <PostPreviewTitle>{title}</PostPreviewTitle>
    </PostPreviewBox>
  );
}

const PostPreviewTitle = styled.h3`
  margin-bottom: 0.75rem;
  line-height: 1;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-family: var(--font-2);
  font-weight: var(--font-md);
  letter-spacing: var(--ls-md);
  mix-blend-mode: difference;
  color: white;
`;

const PostPreviewBox = styled.div`
  z-index: 10;
  @media (min-width: 700px) {
    max-width: 70%;
    margin: 0 auto;
  }
`;
