const React = require('react');

function makeMotionTag(tag) {
  return React.forwardRef(function MotionTag(props, ref) {
    const { children, ...rest } = props || {};
    return React.createElement(tag, { ref, ...rest }, children);
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
