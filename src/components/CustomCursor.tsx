"use client";
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div style={{ pointerEvents: 'none' }}>
      <div style={{ position: 'fixed', left: pos.x - 10, top: pos.y - 10, width: 20, height: 20, borderRadius: 9999, background: 'rgba(0,255,255,0.9)', mixBlendMode: 'screen', transform: 'translate3d(0,0,0)', transition: 'transform 0.08s linear' }} />
    </div>
  );
}
