import styles from "./ps.module.css";
import CoverImage from "@components/PostPreview/cover-image";
import PostBody from "./PostBody";

export default function PostScreen({
  title,
  coverImage,
  link,
  bc,
  cms,
  framework,
  hosting,
  typeface,
  photos,
  content,
}) {
  return (
    <section className={styles.project} style={{ backgroundColor: bc }}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.leftSide}>
            <div className={styles.leftSideImg}>
              <div className={styles.wFull}>
                <div className="overflow-hidden">
                  <CoverImage
                    title={title}
                    link={link}
                    responsiveImage={coverImage.responsiveImage}
                  />
                </div>
              </div>

              <div className={styles.title}>
                <div className={styles.innerT}>
                  <h1 className={styles.ptitle}>{title}</h1>
                  <div className={styles.backlinkBg}>
                    <div className={styles.dot}></div>
                    <a
                      aria-label={`read more about ${title}`}
                      id={styles.sl}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`link link--io ${styles.backLink}`}
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <span className={styles.rHeader}>Tech Stack</span>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemInner}>
                  <span className={styles.spanL}>{framework}</span>
                  <span className={styles.spanR}>Framework</span>
                </div>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemInner}>
                  <span className={styles.spanL}>{cms}</span>
                  <span className={styles.spanR}>Headless CMS</span>
                </div>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemInner}>
                  <span className={styles.spanL}>{hosting || "Vercel"}</span>
                  <span className={styles.spanR}>Hosting</span>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
              <span className={styles.rHeader}>Credits</span>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <div className={styles.itemInner}>
                    <span className={styles.spanL}>{typeface}</span>
                    <span className={styles.spanR}>Typeface</span>
                  </div>
                </li>
              </ul>

              <ul className={styles.list}>
                <li className={styles.item}>
                  <div className={styles.itemInner}>
                    <span className={styles.spanL}>{photos}</span>
                    <span className={styles.spanR}>Photography</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.aboutWork}>
            <div className={styles.als}>
              <h4 className={styles.ap}>About Project</h4>
            </div>
            <PostBody content={content} />
          </div>
        </div>
      </div>
    </section>
  );
}
