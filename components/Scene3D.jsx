"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";

function SceneContent({ scrollProgress, reducedMotion }) {
  const meshRefs = useRef([]);
  const { camera, invalidate } = useThree();
  const shapes = useMemo(() => {
    return [
      { type: "icosahedron", position: [-3.4, 1.2, -2.2], scale: 0.8, rotation: [0.3, 0.8, 0.2] },
      { type: "octahedron", position: [2.6, -1.1, -2.5], scale: 0.65, rotation: [0.6, 0.2, 0.4] },
      { type: "torus", position: [-1.8, -2.2, -1.6], scale: 0.7, rotation: [0.5, 0.9, 0.3] },
      { type: "icosahedron", position: [3.1, 1.7, -1.7], scale: 0.45, rotation: [0.2, 0.6, 0.1] },
      { type: "octahedron", position: [0.2, 2.4, -2.4], scale: 0.55, rotation: [0.8, 0.3, 0.7] },
      { type: "torus", position: [-2.7, 2.6, -2.1], scale: 0.5, rotation: [0.2, 0.7, 0.4] }
    ];
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      camera.position.set(0, 0, 7.4);
      camera.lookAt(0, 0, 0);
      meshRefs.current.forEach((mesh, index) => {
        if (!mesh) return;
        const shape = shapes[index];
        mesh.position.set(shape.position[0], shape.position[1], shape.position[2]);
        mesh.rotation.set(shape.rotation[0], shape.rotation[1], shape.rotation[2]);
      });
      invalidate();
      return;
    }

    const base = scrollProgress;

    meshRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      const shape = shapes[index];
      const x = shape.position[0] + Math.sin(base * 6.0 + index * 0.7) * 0.55;
      const y = shape.position[1] + Math.cos(base * 4.0 + index * 0.5) * 0.45;
      const z = shape.position[2] + Math.sin(base * 3.0 + index * 0.4) * 0.25;
      const rotationX = shape.rotation[0] + base * 1.2 + Math.sin(base * 4.0 + index * 0.4) * 0.18;
      const rotationY = shape.rotation[1] + base * 2.8 + Math.cos(base * 3.0 + index * 0.3) * 0.2;
      const rotationZ = shape.rotation[2] + base * 1.0;

      mesh.position.set(x, y, z);
      mesh.rotation.set(rotationX, rotationY, rotationZ);
    });

    camera.position.set(Math.sin(base * 1.8) * 0.45, Math.cos(base * 1.2) * 0.35, 7.2 + Math.sin(base * 2.0) * 0.2);
    camera.lookAt(0, 0, 0);
    invalidate();
  }, [camera, invalidate, reducedMotion, scrollProgress, shapes]);

  return (
    <group>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 2]} intensity={0.9} color="#8f9bff" />
      <pointLight position={[-2, -2, -2]} intensity={0.45} color="#8f9bff" />

      {shapes.map((shape, index) => (
        <mesh
          key={index}
          ref={(node) => {
            meshRefs.current[index] = node;
          }}
          position={shape.position}
          rotation={shape.rotation}
          scale={shape.scale}
        >
          {shape.type === "torus" ? (
            <torusGeometry args={[0.65, 0.19, 12, 24]} />
          ) : shape.type === "octahedron" ? (
            <octahedronGeometry args={[0.85]} />
          ) : (
            <icosahedronGeometry args={[0.95, 1]} />
          )}
          <meshPhysicalMaterial
            color="#8f9bff"
            emissive="#8f9bff"
            emissiveIntensity={0.06}
            transparent
            opacity={0.28}
            wireframe
            roughness={0.1}
            metalness={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);
    const updateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextValue = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      setScrollProgress(nextValue);
    };

    const handleVisibility = () => {
      setVisible(!document.hidden);
    };

    updateReducedMotion();
    updateScroll();
    handleVisibility();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    document.addEventListener("visibilitychange", handleVisibility);
    mediaQuery.addEventListener?.("change", updateReducedMotion);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      mediaQuery.removeEventListener?.("change", updateReducedMotion);
    };
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        frameloop="demand"
        className="h-full w-full"
      >
        {visible ? <SceneContent scrollProgress={scrollProgress} reducedMotion={reducedMotion} /> : null}
      </Canvas>
    </div>
  );
}
