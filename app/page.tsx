'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Test } from './models';
import { ARButton, XR } from '@react-three/xr';

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen">
        <Canvas>
          <XR>
            <Suspense fallback={null}>
              <Test scale={[10, 10, 10]} />
              <Environment preset="sunset" background />
              <OrbitControls autoRotate />
            </Suspense>
          </XR>
        </Canvas>
        <ARButton className="bg-red">AR</ARButton>
      </div>
    </main>
  );
}

