"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GlassMesh() {
  const matRef = useRef<any>(null);
  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  const uniforms = {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  } as any;

  const frag = `
    precision mediump float;
    uniform float uTime;
    uniform vec2 uResolution;
    void main(){
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      float glare = pow(1.0 - length(uv - 0.5) * 1.2, 2.0);
      vec3 base = vec3(0.06,0.07,0.08);
      vec3 glow = vec3(0.12,0.18,0.2) * glare * 0.8;
      gl_FragColor = vec4(base + glow, 0.18 + glare*0.12);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={matRef} fragmentShader={frag} vertexShader={`void main(){gl_Position = vec4(position,1.0);}`} uniforms={uniforms} transparent depthWrite={false} blending={THREE.NormalBlending} />
    </mesh>
  );
}

export default function GlassShader() {
  const { webgl } = (typeof window !== 'undefined' && require('../lib/capabilities').useCapabilities()) as any;
  if (!webgl) return null;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }}>
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }} style={{ width: '100%', height: '100%' }}>
        <GlassMesh />
      </Canvas>
    </div>
  );
}
