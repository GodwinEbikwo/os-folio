import styled from "styled-components";
import { PostPreviewImage } from "./cover-image";

export default function PostPreview({ title, coverImage, link }) {
  return (
    <ProjectContainer>
      <ProjectLink
        target="_blank"
        aria-label={`read more about ${title}`}
        href={link}
        rel="noopener noreferrer"
      >
        <div className="img-container">
          <div className="img-p">
            <PostPreviewImage
              title={title}
              responsiveImage={coverImage.responsiveImage}
            />
          </div>

          <div className="img-c-center">
            <div className="img-icon" />
            <p className="img-txt">View</p>
          </div>
        </div>
        <ProjectInfoContainer>
          <ProjectTitle>{title}</ProjectTitle>
        </ProjectInfoContainer>
      </ProjectLink>
    </ProjectContainer>
  );
}

export const ProjectContainer = styled.li`
  .img-container {
    display: inline-block;
    overflow: hidden;

    &:hover .img-txt {
      opacity: 1;
    }

    &:hover .img-icon {
      opacity: 1;
      transform: scale(1.6);

      &:hover {
        transform: scale(2.3);
      }
    }
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  .img-c-center {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    justify-content: center;
    display: grid;
    align-items: center;
    transition: all 1s var(--easing);

    .img-icon {
      grid-row: 1;
      grid-column: 1;
      border-radius: 50%;
      margin: 0 auto;
      background-color: var(--black);
      width: 4rem;
      height: 4rem;
      transition: all 1s var(--easing);
      opacity: 0;
      z-index: 0;
    }

    .img-txt {
      grid-row: 1;
      grid-column: 1;
      color: var(--text-white);
      opacity: 0;
      transition: all 1s var(--easing);
      z-index: 1;
      text-align: center;
      vertical-align: middle;
      letter-spacing: var(--ls-sm);
      text-transform: uppercase;
    }
  }
`;

const ProjectLink = styled.a`
  position: relative;
  max-width: 100%;

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--golden-ratio);
  padding-bottom: var(--golden-ratio);
`;

const ProjectTitle = styled.h4`
  text-transform: uppercase;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--font-2);
  font-weight: var(--font-md);
`;
