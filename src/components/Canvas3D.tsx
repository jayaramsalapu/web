"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface BottleModelProps {
  color: string;
  scrollProgress: number;
  mouse: { x: number; y: number };
}

function BottleModel({ color, scrollProgress, mouse }: BottleModelProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Animate the bottle rotation and position based on scroll and mouse position
  useFrame((state) => {
    if (!meshRef.current) return;

    // Scroll-driven rotations
    const targetYRotation = scrollProgress * Math.PI * 2.5;
    const targetXRotation = Math.sin(scrollProgress * Math.PI) * 0.5;
    
    // Mouse hover offsets (slight tilting)
    const targetMouseX = mouse.x * 0.4;
    const targetMouseY = -mouse.y * 0.4;

    // Smooth interpolations (lerping)
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetYRotation + targetMouseX, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetXRotation + targetMouseY, 0.1);
    
    // Float movement
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      scrollProgress < 0.35 ? 0 : scrollProgress < 0.7 ? -1.5 : 0.5,
      0.05
    );
  });

  return (
    <group ref={meshRef} scale={[1.2, 1.2, 1.2]}>
      {/* 3D Cap */}
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.4, 32]} />
        <meshPhysicalMaterial 
          color="#1e293b" 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>

      {/* 3D Bottle Neck */}
      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 0.5, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          transmission={0.9} 
          opacity={1}
          transparent
          roughness={0.15} 
          thickness={0.5}
        />
      </mesh>

      {/* 3D Bottle Body (Frosted Translucent Glass) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.75, 2.4, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.9}
          roughness={0.25}
          thickness={1.5}
          transparent
          opacity={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Liquid Contents Inside (Updates color dynamically) */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.62, 0.67, 2.0, 32]} />
        <meshStandardMaterial 
          color={color}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Premium Embossed Brand Label */}
      <mesh position={[0, 0, 0.76]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.8, 1.2]} />
        <meshStandardMaterial 
          color="#fdfdfd"
          roughness={0.5}
          metalness={0.0}
        />
      </mesh>
    </group>
  );
}

interface Canvas3DProps {
  colorCode?: string;
}

export default function Canvas3D({ colorCode = "#047857" }: Canvas3DProps) {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions to range [-1, 1]
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50/20 to-slate-100 rounded-3xl animate-pulse border border-slate-200/50">
        <div className="text-center p-8">
          <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Compiling 3D Model...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[450px] sm:h-[550px] md:h-[650px] cursor-grab active:cursor-grabbing relative">
      <Canvas
        camera={{ position: [0, 0.5, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 2]} intensity={0.8} color="#ffffff" />
        <spotLight position={[5, 15, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <BottleModel color={colorCode} scrollProgress={scrollProgress} mouse={mouse} />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>

      {/* Hotspot indicator overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md shadow-lg pointer-events-none">
        ← Drag to Rotate 3D Model →
      </div>
    </div>
  );
}
