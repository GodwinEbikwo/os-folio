import Link from "next/link";
import styled from "styled-components";
import { m } from "framer-motion";
import FancySpan from "./fancy-span";

const variantsAni = {
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.35 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const revealIn = {
  initial: { x: "110%", opacity: 0 },
  enter: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    x: "110%",
    transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
  },
};

export default function Menu({ open, setOpen }) {
  return (
    <m.div animate="enter" initial="initial" exit="exit">
      <MenuRight open={open} data-scroll-section>
        <m.ul
          className="scroll-container"
          initial={false}
          animate={open ? "enter" : "exit"}
          exit="exit"
          variants={variantsAni}
        >
          <li>
            <Link href="/projects">
              <a
                aria-label="navigate to the work page"
                onClick={() => setOpen(!open)}
              >
                <FancySpan>
                  <m.span className="inline-block" variants={revealIn}>
                    Work
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a
                aria-label="navigate to the about page"
                onClick={() => setOpen(!open)}
              >
                <FancySpan>
                  <m.span className="inline-block" variants={revealIn}>
                    About
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a
                aria-label="navigate to the contact page"
                onClick={() => setOpen(!open)}
              >
                <FancySpan>
                  <m.span className="inline-block" variants={revealIn}>
                    Contact
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </li>
        </m.ul>

        <footer>
          <div className="flex">
            <a
              aria-label="navigate to instagram"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span className="inline-block sm-spacing">&bull;</span>
            <span className="block sm-spacing">
              <a
                aria-label="navigate to twitter"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </span>
            <span className="block sm-spacing">&bull;</span>
            <span className="block sm-spacing">
              <a
                aria-label="navigate to contact page"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </span>
          </div>
        </footer>
      </MenuRight>

      <Overlay open={open} />
    </m.div>
  );
}

const MenuRight = styled.aside`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  transform: translate3d(100%, 0, 0);
  transition: transform 1s cubic-bezier(0.77, 0, 0.18, 1) 0.125s;
  will-change: transform;
  z-index: 5;

  @media (min-width: 768px) {
    max-width: 35%;
  }

  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
      transition: transform 1s cubic-bezier(.76,0,.24,1);
      cursor: pointer;
    `};

  .scroll-container {
    padding: calc(var(--spacer-lg) * 1.5) var(--spacer);

    &:hover > li {
      transition: opacity 400ms;
      opacity: 0.5;
    }

    &:hover > li:hover {
      opacity: 1;
      color: var(--accent-1);
    }

    li {
      a {
        font-family: var(--font-2);
        font-weight: var(--font-sm);
        font-size: 10vw;
        text-transform: capitalize;
        text-align: right;
        letter-spacing: var(--ls-lg);
        @media (min-width: 768px) {
          font-size: 3.5vw;
        }
      }
    }
  }

  footer {
    text-transform: uppercase;
    position: absolute;
    bottom: calc(var(--golden-ratio) * 6);
    right: var(--golden-ratio);
    align-items: center;
    font-size: 1.3rem;
    @media (min-width: 768px) {
      bottom: var(--golden-ratio);
    }
  }
`;

export const Overlay = styled.div`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(10, 10, 10, 0.5);
  z-index: 4;
  transition: opacity 1s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1s cubic-bezier(0.77, 0, 0.18, 1);
  cursor: pointer;
  ${(props) =>
    props.open && `opacity: 1; visibility: visible; transition-delay: 0.01s;`};
`;
