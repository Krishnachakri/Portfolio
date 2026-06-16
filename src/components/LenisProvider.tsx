"use client";
import { ReactNode, useEffect } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let rafId: number;
    let lenisInstance: any;

    (async function init() {
      // Try multiple package names but avoid static analysis by using eval('import')
      const candidates = ['lenis', '@studio-freight/lenis'];
      for (const pkg of candidates) {
        try {
          const mod = await eval('import')(pkg);
          const Lenis = mod?.default ?? mod;
          lenisInstance = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

          function raf(time: number) {
            lenisInstance.raf(time);
            rafId = requestAnimationFrame(raf);
          }

          rafId = requestAnimationFrame(raf);
          break;
        } catch (e) {
          // try next candidate
          continue;
        }
      }
    })();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance && typeof lenisInstance.destroy === 'function') lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
