"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { name: 'Backend', skills: ['Node.js', 'Express', 'TypeScript', 'GraphQL'] },
  { name: 'AI/ML', skills: ['PyTorch', 'TensorFlow', 'Transformers'] },
  { name: 'Computer Vision', skills: ['OpenCV', 'YOLO', 'Edge Detection'] },
  { name: 'Cloud', skills: ['AWS', 'GCP', 'Docker', 'Kubernetes'] }
];

export default function SkillsMatrix() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((g) => (
            <motion.div key={g.name} className="p-6 rounded-xl bg-glass" onMouseEnter={() => setHovered(g.name)} onMouseLeave={() => setHovered(null)}>
              <h4 className="text-xl font-semibold">{g.name}</h4>
              <ul className="mt-4 space-y-2 text-slate-300">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm">{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
