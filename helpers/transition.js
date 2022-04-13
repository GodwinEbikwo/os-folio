export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
};

export const fadeDelay = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1], delay: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1], delay: 0.25 },
  },
};

export const revealInOut = {
  initial: { y: "110%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.9,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    y: "110%",
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};
