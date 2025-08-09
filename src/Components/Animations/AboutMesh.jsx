
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import imgSrc from "../../assets/myphoto.png"; // <-- Replace with your uploaded face image

const NeuralBackground = () => {
  const groupRef = useRef();
  const points = [];

  // Create random points for neurons
  for (let i = 0; i < 80; i++) {
    points.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      )
    );
  }

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial emissive="#00f0ff" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  );
};

const FaceMesh = ({ scale }) => {
  const texture = useLoader(THREE.TextureLoader, imgSrc);

  // Get image aspect ratio to keep proportions
  const imageAspect = texture.image.height / texture.image.width;
  const width = 2;
  const height = width * imageAspect;

  return (
    <mesh scale={scale}>
      {/* Main image */}
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} />

      {/* Dark overlay for blending */}
      <mesh scale={[1.01, 1.01, 1]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          color="black"
          transparent
          opacity={0.4} // Adjust darkness here
        />
      </mesh>
    </mesh>
  );
};


const AboutMesh = ({ scale = 1.5 }) => {
  const meshRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (meshRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        meshRef.current.rotation.y = x * 0.2;
        meshRef.current.rotation.x = y * 0.1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <group ref={meshRef}>
        <NeuralBackground />
        <FaceMesh scale={scale} />
      </group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AboutMesh;
