import { Image } from 'react-datocms';
import Link from 'next/link';

export default function CoverImage({ title, responsiveImage, slug }) {
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
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}

export function HeaderImage({ title, responsiveImage }) {
  const image = (
    <Image
      style={{ filter: 'grayscale(1)' }}
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
    <div data-scroll data-scroll-speed="1.9">
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className="a-img"
      />
    </div>
  );

  return (
    <div className="overflow-hidden relative" data-scroll>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
