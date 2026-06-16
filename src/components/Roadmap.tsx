"use client";

import { motion } from 'framer-motion';

const nodes = [
  { title: 'Backend Engineering', eta: '2026' },
  { title: 'AI Engineering', eta: '2027' },
  { title: 'Startup Building', eta: '2028' },
  { title: 'Technology Leadership', eta: '2030' }
];

export default function Roadmap() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6">
        <h3 className="text-3xl font-semibold mb-8">Mission Control — Roadmap</h3>
        <div className="space-y-6">
          {nodes.map((n, i) => (
            <motion.div key={n.title} initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.12 }} className="p-6 rounded-lg bg-glass flex justify-between items-center">
              <div>
                <div className="font-bold text-lg">{n.title}</div>
                <div className="text-sm text-slate-300">ETA: {n.eta}</div>
              </div>
              <div className="text-xs text-slate-400">Status: In Progress</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
