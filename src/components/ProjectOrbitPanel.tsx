"use client";
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import GlassPanel from './GlassPanel';
import MagneticButton from './MagneticButton';
import { useEffect, useRef, useState } from 'react';

function MetricCounter({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.2 });
    const unsub = mv.onChange((v) => setDisplay(Math.round(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [value]);

  return <div className="text-2xl font-bold">{display}</div>;
}

export default function ProjectOrbitPanel({ name, onClose }: { name: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [showArch, setShowArch] = useState(false);
  const screenshots = [
    '/images/placeholder-1.jpg',
    '/images/placeholder-2.jpg',
    '/images/placeholder-3.jpg'
  ];
  const metrics = [
    { label: 'Accuracy', value: 96 },
    { label: 'Throughput', value: 1200 },
    { label: 'Deployments', value: 3 }
  ];

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % screenshots.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed right-8 top-16 z-50 w-96">
      <GlassPanel>
        <div ref={ref} tabIndex={-1} aria-modal="true" role="dialog">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm text-slate-300 mt-2">A deep-dive interactive walkthrough of the project — architecture, impact, metrics, and demos.</p>

          <div className="mt-4">
            <div className="relative h-40 overflow-hidden rounded-md bg-black/20">
              <AnimatePresence initial={false} mode="wait">
                <motion.img key={index} src={screenshots[index]} alt={`screenshot-${index}`} loading="lazy" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} className="w-full h-full object-cover" />
              </AnimatePresence>
              <div className="absolute left-2 top-2 flex gap-2">
                <button onClick={() => setIndex((i) => (i - 1 + screenshots.length) % screenshots.length)} className="px-2 py-1 rounded bg-white/6">◀</button>
                <button onClick={() => setIndex((i) => (i + 1) % screenshots.length)} className="px-2 py-1 rounded bg-white/6">▶</button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <MetricCounter value={m.value} />
                  <div className="text-xs text-slate-300">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button aria-pressed={showArch} aria-label={showArch ? 'Hide Architecture' : 'Show Architecture'} onClick={() => setShowArch((s) => !s)} className="text-sm text-slate-300 underline">{showArch ? 'Hide' : 'Show'} Architecture</button>
              {showArch && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-3 text-sm text-slate-300">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Edge Camera Nodes capture frames</li>
                    <li>Lightweight CV model performs bag detection</li>
                    <li>Event stream forwarded to backend via Kafka</li>
                    <li>Dashboard aggregates metrics and alerts</li>
                  </ol>
                </motion.div>
              )}
            </div>

            <div className="flex gap-3 mt-4">
              <MagneticButton aria-label="Open GitHub" onClick={() => window.open('https://github.com', '_blank')}>GitHub</MagneticButton>
              <MagneticButton aria-label="Open Live Demo" onClick={() => window.open('https://example.com', '_blank')}>Live Demo</MagneticButton>
              <MagneticButton aria-label="Close panel" onClick={onClose}>Close</MagneticButton>
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
