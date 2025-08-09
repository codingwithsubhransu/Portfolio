import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function NeuralPoints() {
  const pointsRef = useRef();
  
  // Generate random points in a sphere (approx head shape)
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + (Math.random() - 0.5) * 0.3;
      temp.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      ));
    }
    return temp;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.x = mouse.y * 0.2;
      pointsRef.current.rotation.y += mouse.x * 0.2;
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(particles);
  const colors = new Float32Array(particles.length * 3).map(() => Math.random());

  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function NeuralMesh() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <NeuralPoints />
    </Canvas>
  );
}
