"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RainShaderMesh() {
  const matRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  const uniforms = {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  } as any;

  const fragment = `
    precision mediump float;
    uniform float uTime;
    uniform vec2 uResolution;

    float hash(float n) { return fract(sin(n) * 43758.5453123); }

    void main(){
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      float t = uTime * 0.8;
      float col = 0.0;
      // vertical lines that scroll
      for(float i=0.0;i<40.0;i++){
        float x = fract(uv.x * 40.0 - t * (0.5 + mod(i,3.0)*0.2));
        float band = smoothstep(0.02,0.0,abs(x-0.5));
        float yOff = fract(uv.y * (10.0 + mod(i,7.0)) + t* (0.6 + hash(i)));
        float char = step(0.9, yOff);
        col += band * char * (0.8 - mod(i,5.0)*0.12);
      }
      vec3 color = vec3(col*0.1, col*0.9, col*0.85);
      color *= smoothstep(0.0,1.0,1.0-uv.y);
      gl_FragColor = vec4(color, col*0.9);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={matRef} fragmentShader={fragment} vertexShader={`void main(){gl_Position = vec4(position,1.0);}`} uniforms={uniforms} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

export default function CodeRainShader() {
  const { webgl } = (typeof window !== 'undefined' && require('../lib/capabilities').useCapabilities()) as any;
  if (!webgl) return null;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }}>
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }} style={{ width: '100%', height: '100%' }}>
        <RainShaderMesh />
      </Canvas>
    </div>
  );
}
