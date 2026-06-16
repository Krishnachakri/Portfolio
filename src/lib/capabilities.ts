export function detectCapabilities() {
  const nav = typeof navigator !== 'undefined' ? navigator : ({} as any);
  const cores = nav.hardwareConcurrency || 2;
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  let webgl = false;
  try {
    const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
    if (canvas) {
      webgl = !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    }
  } catch (e) {
    webgl = false;
  }

  return {
    cores,
    webgl,
    prefersReducedMotion
  };
}

export function useCapabilities(): { cores: number; webgl: boolean; prefersReducedMotion: boolean } {
  // simple client-only hook
  if (typeof window === 'undefined') return { cores: 2, webgl: false, prefersReducedMotion: false };
  return detectCapabilities();
}
