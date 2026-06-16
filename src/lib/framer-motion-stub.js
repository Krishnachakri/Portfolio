const React = require('react');

// List of framer-motion props to strip so they don't get passed to DOM elements
const motionProps = [
  'initial', 'animate', 'exit', 'whileHover', 'whileTap', 'whileInView',
  'viewport', 'transition', 'drag', 'dragConstraints', 'onDrag', 'onDragEnd',
  'onDragStart', 'onViewportEnter', 'onViewportLeave', 'variants', 'custom',
  'inherit', 'layout', 'layoutId'
  // Keep style, className, ref, key because they're valid DOM props or React special props
];

function makeMotionTag(tag) {
  return React.forwardRef(function MotionTag(props, ref) {
    const { children, ...rest } = props || {};
    // Strip motion-specific props
    const domProps = {};
    for (const key in rest) {
      if (!motionProps.includes(key)) {
        domProps[key] = rest[key];
      }
    }
    return React.createElement(tag, { ref, ...domProps }, children);
  });
}

const handler = {
  get(target, prop) {
    return makeMotionTag(prop);
  },
  apply(target, thisArg, args) {
    // used if someone calls motion()
    return makeMotionTag('div');
  }
};

const motion = new Proxy(function () {}, handler);

function AnimatePresence({ children }) {
  return React.createElement(React.Fragment, null, children);
}

function useMotionValue(initial = 0) {
  const ref = React.useRef({ current: initial, onChange: () => {} });
  return ref.current;
}

function useTransform() {
  return (v) => v;
}

function animate(_mv, _to, _opts) {
  return { stop() {} };
}

module.exports = {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate
};
