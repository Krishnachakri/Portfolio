"use client";
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function GlassPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div ref={ref} className={`p-6 rounded-2xl bg-white/4 border border-white/6 backdrop-blur-md shadow-lg ${className}`} whileHover={{ scale: 1.01 }}>
      {children}
    </motion.div>
  );
}
