"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: 'Hospital Management System', description: 'Enterprise-ready HMS', color: '#FF6B6B' },
  { name: 'Veteran Talent Finder', description: 'Matchmaking veterans to roles', color: '#6BCB77' },
  { name: 'Transport Logistics Solutions', description: 'Container routing & tracking', color: '#4D96FF' },
  { name: 'CV Bag Counting System', description: 'Computer vision for port ops', color: '#FFD166' }
];

export default function ProjectUniverse() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl px-6 flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-center gap-8 py-20">
          {projects.map((p, i) => (
            <motion.div key={p.name} whileHover={{ scale: 1.08 }} onClick={() => setActive(i)} className="cursor-pointer">
              <div style={{ background: `linear-gradient(135deg, ${p.color} 0%, #0b0b0b 100%)` }} className="w-44 h-44 rounded-full shadow-2xl flex items-center justify-center">
                <span className="text-xl font-bold text-black">{p.name.split(' ')[0]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full bg-glass p-8 rounded-xl">
            <h3 className="text-2xl font-semibold">{projects[active].name}</h3>
            <p className="mt-2 text-slate-300">{projects[active].description}</p>
            <div className="mt-4 text-sm text-slate-400">(Problem, Architecture, Tech stack, Impact, Metrics — expand this interactive view)</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
