"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically load heavy WebGL / three-related components on the client only
const PlanetsScene = dynamic(() => import('./PlanetsScene'), { ssr: false });
const NeuralNetBackground = dynamic(() => import('./NeuralNetBackground'), { ssr: false });
const MobileExperience = dynamic(() => import('./MobileExperience'), { ssr: false });

export default function ThreeExperience({ glitch = false }: { glitch?: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth <= 768);
    }
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) return <MobileExperience />;

  return (
    <div className="w-full h-screen relative">
      <NeuralNetBackground />
      <div style={{ position: 'absolute', inset: 0 }}>
        <PlanetsScene onEnterProject={(name) => console.log('Enter project orbit:', name)} />
      </div>
    </div>
  );
}
