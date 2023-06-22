"use client";

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model(props: any) {
  const result = useLoader(GLTFLoader, "/shiba.glb");
  const isLargePhone = useMediaQuery({ maxWidth: 640 });
  const isMediumLaptop = useMediaQuery({ maxWidth: 2440 });

  const scaleFactor = isLargePhone ? 5 : isMediumLaptop ? 3.2 : 2.8;

  return (
    <primitive
      object={result.scene}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    />
  );
}

function Container() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [-5, 20, -15], fov: 27 }}
    >
      <pointLight position={[10, 10, 40]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 3.5, 0]}>
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

/*const dracoLoader = useMemo(() => new DRACOLoader(), []); // Create an instance of DRACOLoader

  const result = useLoader(GLTFLoader, "/girl_statue.glb", (loader) => {
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
  });*/
