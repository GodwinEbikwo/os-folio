import Link from "next/link";
import Menu from "./menu";
import Burger from "./burger";
import { useState } from "react";
import styled from "styled-components";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <m.nav initial="initial" animate="enter" exit="exit">
        <HeaderNav className="w-full">
          <div className="flex space-between align-center px-2">
            <Link href="/">
              <a>
                <h4 className="h-nav-labels">MM ❊</h4>
              </a>
            </Link>
            <Burger open={open} setOpen={setOpen} />
          </div>
        </HeaderNav>
        <Menu open={open} setOpen={setOpen} />
      </m.nav>
    </LazyMotion>
  );
}

const HeaderNav = styled.div`
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-small);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);

  .h-nav-labels {
    letter-spacing: var(--ls-md);
  }

  &.bg {
    background: var(--bg);
  }
`;
