"use client";

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model(props: any) {
  const result = useLoader(GLTFLoader, "/girl_statue.glb");

  return <primitive object={result.scene} />;
}

function Container() {
  return (
    <Canvas camera={{ position: [-5, 20, -15], fov: 22 }}>
      <pointLight position={[10, 10, 40]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model />
        </group>
        <Environment preset="studio" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}

export default Container;
