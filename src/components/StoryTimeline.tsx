"use client";

import { motion } from 'framer-motion';

const chapters = [
  { title: 'Small-town Dream', year: '1999', text: 'Beginnings in a small town, curiosity ignited.' },
  { title: 'Engineering Journey', year: '2017', text: 'B.Tech CSE at Andhra University — building foundations.' },
  { title: 'Hackathons', year: '2019-2022', text: 'Built teams, won challenges, learned to iterate fast.' },
  { title: 'Building AI Systems', year: '2021-', text: 'From models to production: Computer vision, logistics.' },
  { title: 'Port Logistics Project', year: '2023', text: 'Real-world automation and CV for container operations.' },
  { title: 'Future Founder', year: '2024+', text: 'Relentless focus on building a technology startup.' }
];

export default function StoryTimeline() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6">
        {chapters.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }} className="mb-20">
            <h2 className="text-3xl font-semibold">{c.title}</h2>
            <p className="text-sm text-slate-300">{c.year}</p>
            <p className="mt-3 text-lg leading-relaxed text-slate-200">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
