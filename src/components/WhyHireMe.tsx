"use client";

import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Built', value: 24 },
  { label: 'Technologies', value: 36 },
  { label: 'Domains', value: 8 },
  { label: 'Hackathons', value: 12 }
];

export default function WhyHireMe() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-6 grid grid-cols-2 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-6 rounded-xl bg-glass text-center">
            <div className="text-4xl font-bold">{s.value}+</div>
            <div className="text-sm text-slate-300">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
