import { createGlobalStyle } from "styled-components";
export const AppStyles = createGlobalStyle`

@font-face {
  font-family: 'EditorialNew-Ultralight';
  src: url('/fonts/EditorialNew-Ultralight.otf') format('otf');
  font-style: normal;
  font-weight: normal;
}

:root{
  --golden-ratio: 1.4rem;
  --max-width: 140rem;

  --bg:#0a0a0a;

  --text-white: hsl(200, 12%, 95%);
  --text-black: #2b2b2b;

  --black: #000;
  --white: #fff;

  --accent-1: #dbff00;
  --accent-2: hsl(252, 83%, 87%);
  --accent-3: #001d3d;

  --font: 'Roboto Mono', 'Helvetica Neue', sans-serif;
  --font-2: 'Helvetica Neue', sans-serif;

  --font-xsm: 300;
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --border-color: rgb(120, 120, 120);
 
  --ls-xsm: -0.015em;
  --ls-sm: -0.02em;
  --ls-md: -0.03em;
  --ls-lg: -0.05em;

  --spacing-sm: 10px;
  --spacing-md: 20px;
  --spacing-lg: 30px;

  --spacer: 2rem;
  --spacer-md: 3rem;
  --spacer-lg: 5rem;
  --easing: cubic-bezier(0.215, 0.61, 0.355, 1);  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  border: 0 solid #444;
}

html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

[data-scroll-direction='horizontal'] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap;
}

[data-scroll-direction='horizontal'] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%;
}

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
}

.c-scrollbar:hover {
  transform: scaleX(1.45);
}

.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}

[data-scroll-direction='horizontal'] .c-scrollbar {
  width: 100%;
  height: 10px;
  top: auto;
  bottom: 0;
  transform: scaleY(1);
}
[data-scroll-direction='horizontal'] .c-scrollbar:hover {
  transform: scaleY(1.3);
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: grab;
}

.has-scroll-dragging .c-scrollbar_thumb {
  cursor: grabbing;
}

[data-scroll-direction='horizontal'] .c-scrollbar_thumb {
  right: auto;
  bottom: 0;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button {
  font-family: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  outline: none;
  background-color: transparent;
}

html,
  body,
  div,
  button,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  svg,
  img,
  strong,
  ol,
  ul,
  li,
  form,
  aside,
  footer,
  header,
  input,
  optgroup,
  select,
  textarea,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: middle; 
  }

  html {
    font-size: 62.5%;
    background-color: var(--bg);
    /* &:not(.has-scroll-init) {
      cursor: wait;
      overflow: hidden;
    } */
  }

  body {
    min-height: 100vh;
    width: 100%;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    color: var(--text-white);
    font-family: var(--font);
    font-weight: 300;
    font-size: 1.2rem;

    &.no-scroll {
      overflow-y: hidden;
      touch-action: none;
    }    
}



  li,
  ul {
    list-style: none;
  }

  a {
    text-decoration: inherit;
    color: inherit;
    background-color: transparent;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209rem;
  }

  h2 {font-size: 3.157rem;}

  h3 {font-size: 2.369rem;}

  h4 {font-size: 1.777rem;}

  h5 {font-size: 1.333rem;}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-center {
    text-align: center;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .m-auto {
    margin: auto;
  }

  .w-full{
    width: 100%;
  }

  .h-full{
    height: 100%;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .mt-auto {
    margin-top: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .flex-column {
    flex-direction: column
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .sm-spacing {
    --absolute: 0;
    margin-right: calc(0.5rem * var(--absolute));
    margin-left: calc(0.5rem * calc(1 - var(--absolute)));
    display: block;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .not-selectable {
    user-select: none;
  }

  .px-2 {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  .py-2 {
    padding-top: var(--golden-ratio);
    padding-bottom: var(--golden-ratio);
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .center {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hide-for-mobile {
    @media (max-width: 767px) {
     display: none;
    }
  }
  
  .hide-for-desktop {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }

  .link::before,
  .link::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .link::before {
    content: '';
  }

  .link--metis {
    text-transform: inherit;
  }

  .link--metis::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  .link--metis:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }


  .link--ersa {
    padding: 0;
  }

  .link--ersa::before {
    top: 50%;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
  }

  .link--ersa:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .link--ersa span {
    display: inline-block;
  }

  .link--ersa:hover span {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  .b-speed-block {
    position: relative;
  }

  .b-image_wrapper {
    position: relative;
    overflow: hidden;
  }

  .b-image {
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      opacity: 0;
      transform: rotate(10deg) scale(1.4);
      transition: opacity 1.2s var(--easing), transform 1.2s var(--easing);
      will-change: transform, opacity;
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
  }

    &.is-inview {
      .img {
        opacity: 1;
        transform: rotate(0deg)  scale(1);
        transition-delay: 0.65s;
    }
  }
}

  .a-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.4);
    transform-origin: 50% 50%;
    transition: opacity 1.2s var(--easing), transform 1.5s var(--easing);
    will-change: transform, opacity;
  }

   &.is-inview {
    .a-img {
      opacity: 1;
      transform: scale(1);
      transition-delay: 0.65s;
    
    }
  }

  .animate-bg{
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 20;
  
  }


  .img-bg{
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }


  .bg-full {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: sticky;
    height: 87vh;
    width: 100vw;
    overflow: hidden;
    z-index: 1;
    @media (min-width: 768px) {
      position: sticky;
      height: 100vh;
    }
    @media (min-width: 1025px) {
      position: fixed;
    }
  }
`;
