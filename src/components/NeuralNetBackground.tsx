"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { webgl, cores } = (typeof window !== 'undefined' && require('../lib/capabilities').useCapabilities()) as any;
  const particles = webgl && cores >= 4 ? 600 : 200;
  const positions = new Float32Array(particles * 3);
  for (let i = 0; i < particles; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
      (pointsRef.current.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color={new THREE.Color('#00fff6')} sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

export default function NeuralNetBackground() {
  return (
    <Canvas camera={{ position: [0, 2, 18], fov: 50 }} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <ambientLight intensity={0.4} />
      <NeuralField />
    </Canvas>
  );
}
