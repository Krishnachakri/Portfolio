"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically load heavy client-only visuals to prevent server bundling of three
const ThreeExperience = dynamic(() => import('./ThreeExperience'), { ssr: false });
const CodeRainShader = dynamic(() => import('./CodeRainShader'), { ssr: false });
const GlassShader = dynamic(() => import('./GlassShader'), { ssr: false });
const IntroSequence = dynamic(() => import('./IntroSequence'), { ssr: false });
const ProjectOrbitPanel = dynamic(() => import('./ProjectOrbitPanel'), { ssr: false });

export default function CinematicLanding() {
  const [booted, setBooted] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooted(true);
      setTimeout(() => setGlitch(true), 800);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const [project, setProject] = useState<string | null>(null);

  useEffect(() => {
    function onEnter(e: any) {
      const name = e?.detail?.name;
      if (name) setProject(name);
    }

    function onHome() {
      setProject(null);
    }

    window.addEventListener('enterProject', onEnter as EventListener);
    window.addEventListener('flyHome', onHome as EventListener);
    return () => {
      window.removeEventListener('enterProject', onEnter as EventListener);
      window.removeEventListener('flyHome', onHome as EventListener);
    };
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="terminal text-2xl text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <pre>BOOTING KRISHNA_CHAKRI.OS</pre>
            <pre>Loading Projects...</pre>
            <pre>Loading Experience...</pre>
            <pre>Loading Innovation Engine...</pre>
            <pre>Loading Future Founder Mode...</pre>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {booted && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <ThreeExperience glitch={glitch} />
            <IntroSequence />
            <CodeRainShader />
            <GlassShader />
            {project && <ProjectOrbitPanel name={project} onClose={() => { window.dispatchEvent(new Event('flyHome')); setProject(null); }} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
