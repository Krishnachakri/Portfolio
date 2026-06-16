"use client";
import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig() {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 1.2, 8));
  const lookAt = useRef(new THREE.Vector3(0, 0, 0));
  const velocity = useRef(0.06);

  useEffect(() => {
    function onEnter(e: CustomEvent) {
      const d = e.detail || {};
      if (d.pos) targetPos.current.copy(new THREE.Vector3(d.pos[0], d.pos[1] + 0.6, d.pos[2] + 3));
      if (d.lookAt) lookAt.current.copy(new THREE.Vector3(d.lookAt[0], d.lookAt[1], d.lookAt[2]));
      velocity.current = 0.08;
    }

    function onHome() {
      targetPos.current.set(0, 1.2, 8);
      lookAt.current.set(0, 0, 0);
      velocity.current = 0.05;
    }

    window.addEventListener('enterProject', onEnter as EventListener);
    window.addEventListener('flyHome', onHome as EventListener);
    return () => {
      window.removeEventListener('enterProject', onEnter as EventListener);
      window.removeEventListener('flyHome', onHome as EventListener);
    };
  }, []);

  useFrame(() => {
    // smooth lerp camera position
    camera.position.lerp(targetPos.current, velocity.current);
    // lookAt smoothing
    const currentLook = new THREE.Vector3();
    camera.getWorldDirection(currentLook);
    camera.lookAt(lookAt.current);
  });

  return null;
}
