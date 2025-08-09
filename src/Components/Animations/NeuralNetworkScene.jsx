import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork({ mouse }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  const { positions, linePositions, pulseFactors } = useMemo(() => {
    const count = 50;
    const maxDistance = 1.5;
    const positionsArray = new Float32Array(count * 3);
    const pulseFactorsArray = [];
    const tempVecs = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 4;
      const z = (Math.random() - 0.5) * 6;
      positionsArray.set([x, y, z], i * 3);
      tempVecs.push(new THREE.Vector3(x, y, z));
      pulseFactorsArray.push(Math.random() * Math.PI * 2);
    }

    const linePositionsArray = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = tempVecs[i].distanceTo(tempVecs[j]);
        if (dist < maxDistance) {
          linePositionsArray.push(tempVecs[i].x, tempVecs[i].y, tempVecs[i].z);
          linePositionsArray.push(tempVecs[j].x, tempVecs[j].y, tempVecs[j].z);
        }
      }
    }

    return {
      positions: positionsArray,
      linePositions: new Float32Array(linePositionsArray),
      pulseFactors: pulseFactorsArray
    };
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Auto rotation
    const autoRotY = time * 0.05;
    const autoRotX = Math.sin(time * 0.3) * 0.05;

    // Mouse parallax influence
    const parallaxY = mouse.current.x * 0.15;
    const parallaxX = -mouse.current.y * 0.15;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = autoRotY + parallaxY;
      pointsRef.current.rotation.x = autoRotX + parallaxX;

      const material = pointsRef.current.children[0];
      if (material) {
        material.size =
          0.08 + Math.sin(time * 2 + pulseFactors[0]) * 0.02;
      }
    }

    if (linesRef.current) {
      linesRef.current.rotation.y = autoRotY + parallaxY;
      linesRef.current.rotation.x = autoRotX + parallaxX;

      const material = linesRef.current.material;
      if (material) {
        material.opacity = 0.25 + Math.sin(time * 3) * 0.1;
      }
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#7a5cff"
          size={0.08}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#413bff" opacity={0.3} transparent />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetworkScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  return (
    <div style={{ width: '100%', height: '100%' }} onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff4ecd" intensity={1.2} />
        <NeuralNetwork mouse={mouse} />
      </Canvas>
    </div>
  );
}
