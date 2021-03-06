import { PostPreviewImage } from "./cover-image";
import Link from "next/link";
import s from "./p.module.css";

export default function PostPreview({ title, coverImage, slug }) {
  return (
    <Link href={`/work/${slug}`}>
      <a className={s.link} aria-label={`read more about ${title}`}>
        <div className={s.imgContainer}>
          <PostPreviewImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
        </div>
      </a>
    </Link>
  );
}
