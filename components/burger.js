import styled from "styled-components";

export default function Burger({ open, setOpen }) {
  return (
    <BurgerMenu
      title="menu"
      aria-label="hamburger menu"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="menu-lines" aria-hidden="true" className="bg-line-top" />
      <div
        className="menu-lines"
        aria-hidden="true"
        className="bg-line-middle"
      />
      <div
        className="menu-lines"
        aria-hidden="true"
        className="bg-line-bottom"
      />
    </BurgerMenu>
  );
}

const BurgerMenu = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 1.125px;
    background: var(--text-white);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 6px;
    will-change: transform;
    mix-blend-mode: difference;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      @media (max-width: 768px) {
        margin-left: ${({ open }) => (open ? "0.15rem" : "0")};
      }
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      @media (max-width: 768px) {
        margin-left: ${({ open }) => (open ? "0.15rem" : "0")};
      }
    }
  }
`;
