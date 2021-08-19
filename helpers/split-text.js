import { m } from 'framer-motion';

export function SplitText({ children, ...rest }) {
  let text = children.split(' ');
  return text.map((word, i) => {
    return (
      <span key={children + i} className="inline-block overflow-hidden">
        <m.span {...rest} className="block will-change" custom={i}>
          {word + (i !== text.length - 1 ? '\u00A0' : '')}
        </m.span>
      </span>
    );
  });
}
