import Link from "next/link";
import Menu from "./menu";
import Burger from "./burger";
import { useState } from "react";
import styled from "styled-components";
import { m, LazyMotion, domAnimation } from "framer-motion";
import ThemeSwitch from "./theme-switcher";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <m.nav initial="initial" animate="enter" exit="exit" className="relative">
        <HeaderNav className="w-full">
          <div className="flex space-between align-center px-2">
            <Link href="/">
              <a>
                <h4 className="h-nav-labels">GE ❊</h4>
              </a>
            </Link>
            <ThemeSwitch />
            <div className="hide-for-mobile">
              <Burger open={open} setOpen={setOpen} />
            </div>
          </div>
        </HeaderNav>
        <FloatingMenu>
          <Burger open={open} setOpen={setOpen} />
        </FloatingMenu>
        <Menu open={open} setOpen={setOpen} />
      </m.nav>
    </LazyMotion>
  );
}

const HeaderNav = styled.div`
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 768px) {
    border-bottom: 1px solid var(--border-color);
  }

  .h-nav-labels {
    letter-spacing: var(--ls-md);
  }

  &.bg {
    background: var(--bg);
  }
`;

const FloatingMenu = styled.div`
  background: var(--accent-1);
  z-index: 100;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: fixed;
  bottom: calc(var(--golden-ratio) * 4);
  right: var(--golden-ratio);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
