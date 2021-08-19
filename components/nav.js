import Menu from './menu';
import Burger from './burger';
import { useState } from 'react';
import styled from 'styled-components';
import { m, LazyMotion, domAnimation } from 'framer-motion';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <m.nav initial="initial" animate="enter" exit="exit">
        <HeaderNav className="w-full">
          <div className="flex space-between align-center px-2">
            <h3 className="h-nav-labels">SS ❊</h3>
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
  background: var(--bg);
  border-bottom: 1px dotted var(--border-color);

  .h-nav-labels {
    letter-spacing: var(--ls-md);
  }
`;
