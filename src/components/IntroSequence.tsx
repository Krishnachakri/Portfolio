"use client";
import { useEffect } from 'react';

export default function IntroSequence() {
  useEffect(() => {
    // Step 1: brief focus on center/monument
    const t1 = setTimeout(() => {
      const ev = new CustomEvent('enterProject', { detail: { name: 'IntroMonument', pos: [0, 0, -2], lookAt: [0, 0, 0] } });
      window.dispatchEvent(ev);
    }, 700);

    // Step 2: glide into a project planet orbit
    const t2 = setTimeout(() => {
      const ev2 = new CustomEvent('enterProject', { detail: { name: 'Transport Logistics Solutions', pos: [-1.5, -1.2, -4], lookAt: [-1.5, -1.2, -4] } });
      window.dispatchEvent(ev2);
    }, 2700);

    // Step 3: return to home vantage
    const t3 = setTimeout(() => {
      window.dispatchEvent(new Event('flyHome'));
    }, 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return null;
}
