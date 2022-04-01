import { Image } from "react-datocms";
import Link from "next/link";

export default function CoverImage({ title, responsiveImage, slug, link }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
    />
  );

  return (
    <>
      {link ? (
        <a
          className="cursor-pointer"
          aria-label={title}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </>
  );
}

export function HeaderImage({ title, responsiveImage }) {
  const image = (
    <Image
      style={{ filter: "grayscale(1)" }}
      data={{
        ...responsiveImage,
        alt: `${title}`,
      }}
    />
  );

  return <>{image}</>;
}

export function ProjectCoverImage({ title, responsiveImage, slug }) {
  const image = (
    <div data-scroll data-scroll-speed="-1.5">
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className="not-selectable a-img"
      />
    </div>
  );

  return (
    <div className="overflow-hidden" data-scroll>
      {slug ? (
        <Link href={`/work/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

export function PostPreviewImage({ title, responsiveImage }) {
  const image = (
    <div data-scroll data-scroll-speed="-0.8">
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className="not-selectable"
      />
    </div>
  );

  return (
    <div className="mx-auto overflow-hidden" data-scroll>
      {image}
    </div>
  );
}
