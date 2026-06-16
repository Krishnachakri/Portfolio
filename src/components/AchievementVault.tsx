"use client";

import { motion } from 'framer-motion';

const items = [
  { title: 'Hackathon Winner', year: '2020' },
  { title: 'Port Automation Pilot', year: '2023' },
  { title: 'AI Research Project', year: '2022' }
];

export default function AchievementVault() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-6">
        <h3 className="text-3xl font-semibold mb-8">Achievement Vault</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg bg-glass">
              <div className="text-lg font-bold">{it.title}</div>
              <div className="text-sm text-slate-300">{it.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
