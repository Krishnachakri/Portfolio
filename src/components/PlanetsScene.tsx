"use client";
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useCapabilities } from '../lib/capabilities';
import CameraRig from './CameraRig';
import { Mesh, Vector3 } from 'three';

function Planet({ pos, color, name, onClick }: { pos: [number, number, number]; color: string; name: string; onClick: () => void }) {
  const ref = useRef<Mesh>(null!);
  const { webgl, cores } = useCapabilities();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.2;
  });

  const segments = webgl && cores >= 4 ? [48, 32] : [24, 16];

  return (
      <mesh ref={ref} position={pos as any} onClick={onClick} castShadow>
      <sphereGeometry args={[0.9, segments[0], segments[1]]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.15} transparent opacity={0.95} />
    </mesh>
  );
}

export default function PlanetsScene({ onEnterProject }: { onEnterProject?: (name: string) => void }) {
  const { webgl, cores } = useCapabilities();

  const projects = useMemo(
    () => [
      { name: 'Hospital Management System', color: '#FF6B6B', pos: [-4, 0.5, -6] },
      { name: 'Veteran Talent Finder', color: '#6BCB77', pos: [3.5, 1.2, -5] },
      { name: 'Transport Logistics Solutions', color: '#4D96FF', pos: [-1.5, -1.2, -4] },
      { name: 'CV Bag Counting System', color: '#FFD166', pos: [2.5, -0.5, -7] }
    ],
    []
  );

  return (
    <Canvas camera={{ position: [0, 1.2, 8], fov: 45 }} style={{ height: '100vh', width: '100%' }}>
      <CameraRig />
      <ambientLight intensity={0.45} />
      <directionalLight intensity={1.2} position={[5, 10, 7]} />
      <pointLight intensity={0.6} position={[-6, -6, -6]} />
      {projects.map((p) => (
        <Planet
          key={p.name}
          pos={p.pos as any}
          color={p.color}
          name={p.name}
          // pass lower-detail geometry when webgl is weak or few cores
          onClick={() => {
            const ev = new CustomEvent('enterProject', { detail: { name: p.name, pos: p.pos, lookAt: [0, 0, 0] } });
            window.dispatchEvent(ev);
            onEnterProject?.(p.name);
          }}
        />
      ))}
    </Canvas>
  );
}
