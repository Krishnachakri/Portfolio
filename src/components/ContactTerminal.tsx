"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactTerminal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-semibold mb-6">Let's Build Something That Matters</motion.h2>
        <div className="flex gap-4 justify-center">
          <button className="px-5 py-3 rounded-md bg-slate-800/60" onClick={() => (window.location.href = 'mailto:krishna@example.com')}>Email</button>
          <button className="px-5 py-3 rounded-md bg-slate-800/60" onClick={() => window.open('https://linkedin.com', '_blank')}>LinkedIn</button>
          <button className="px-5 py-3 rounded-md bg-slate-800/60" onClick={() => window.open('https://github.com', '_blank')}>GitHub</button>
        </div>
      </div>
    </section>
  );
}
