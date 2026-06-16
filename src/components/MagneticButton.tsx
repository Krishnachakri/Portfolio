"use client";
import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function MagneticButton({ children, onClick, ariaLabel }: { children: React.ReactNode; onClick?: () => void; ariaLabel?: string }) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-30, 30], [-6, 6]);

  function handleMove(e: React.PointerEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rx = e.clientX - (rect.left + rect.width / 2);
    const ry = e.clientY - (rect.top + rect.height / 2);
    x.set(rx * 0.12);
    y.set(ry * 0.12);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      aria-label={ariaLabel}
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onClick={onClick}
      style={{ x, y, rotateZ: rotate }}
      className="px-6 py-3 rounded-lg bg-slate-800/60 backdrop-blur-md border border-white/6"
    >
      {children}
    </motion.button>
  );
}
