import PostPreview from "@components/PostPreview";
import s from "./H.module.css";
import FancySpan from "@components/fancy-span";
import { m } from "framer-motion";
import FancyLink from "@components/fancy-link";
// import Nowplaying from "@components/NowPlaying";

export const revealIn = {
  initial: {
    y: "110%",
    opacity: 0,
  },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    y: "110%",
    transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 },
  },
};

const variantsAni = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.03 },
  },
};

export default function Hero({ posts }) {
  return (
    <m.div className="flex flex-wrap" variants={variantsAni}>
      <aside className={s.headerWork}>
        <div className={s.workContent}>
          {posts.map((post) => (
            <div
              key={post.slug}
              className={s.workMiddle}
              style={{ background: post.backgroundcolor.hex }}
            >
              <PostPreview
                title={post.title}
                coverImage={post.coverImage}
                link={post.link}
                slug={post.slug}
              />
            </div>
          ))}

          <div className={`${s.workBottom} hide-for-mobile`}>
            folio 2021 - Available when you send that mail
          </div>
        </div>
      </aside>

      <aside className={s.headerInfo}>
        <div className={s.infoContent}>
          <ul className={s.contacts}>
            <li>
              <FancySpan>
                <m.span variants={revealIn} className="block">
                  <a
                    aria-label="send an email godwin ebikwo"
                    href="mailto:godwin.a.ebikwo@egmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link link--io"
                  >
                    Email
                  </a>
                </m.span>
              </FancySpan>
            </li>
            <li>
              <FancySpan>
                <m.span variants={revealIn} className="block">
                  <a
                    aria-label="Navigate to the Github page"
                    href="http://github.com/GodwinEbikwo/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link link--io"
                  >
                    Github
                  </a>
                </m.span>
              </FancySpan>
            </li>
          </ul>

          <div className={s.aboutMe}>
            <m.h2 className={s.aboutMeTitle}>
              <FancySpan>
                <m.span className="inline-block" variants={revealIn}>
                  Godwin ebikwo is a{" "}
                </m.span>
              </FancySpan>
              <FancySpan>
                <m.span className={s.indent} variants={revealIn}>
                  front end developer /
                </m.span>
              </FancySpan>
              <FancySpan>
                <m.span className="inline-block" variants={revealIn}>
                  potter focused on commerce &{" "}
                </m.span>
              </FancySpan>
              <FancySpan>
                <m.span className="inline-block" variants={revealIn}>
                  crafting pixel perfect
                </m.span>
              </FancySpan>
              <FancySpan>
                <m.span className="inline-block" variants={revealIn}>
                  experiences on the web.
                </m.span>
              </FancySpan>
            </m.h2>
          </div>
        </div>
      </aside>
    </m.div>
  );
}
