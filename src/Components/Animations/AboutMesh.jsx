import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import imgSrc from "../../assets/myphoto.png";

// Neural points background
const NeuralBackground = () => {
  const groupRef = useRef();
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        )
      );
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const meshRef = useRef();
  useEffect(() => {
    if (meshRef.current) {
      points.forEach((pos, i) => {
        const matrix = new THREE.Matrix4();
        matrix.setPosition(pos);
        meshRef.current.setMatrixAt(i, matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [points]);

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[null, null, points.length]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial emissive="#00f0ff" emissiveIntensity={1} />
      </instancedMesh>
    </group>
  );
};

// Face with rounded corners + dark blending
const FaceMesh = ({ scale }) => {
  const texture = useLoader(THREE.TextureLoader, imgSrc);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  const aspect = texture.image.height / texture.image.width;
  const width = 2;
  const height = width * aspect;

  return (
    <mesh scale={scale}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent />
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
    <div style={{ width: "100%", height: "100vh", background: "transparent" }}>
      <Canvas
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 6], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <group ref={meshRef}>
          <NeuralBackground />
          <FaceMesh scale={scale} />
        </group>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default AboutMesh;
