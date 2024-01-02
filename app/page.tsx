'use client';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Test } from './models';
// import { ARButton, XR } from '@react-three/xr';
import { ZapparCamera, ZapparCanvas } from '@zappar/zappar-react-three-fiber';

export default function Home() {
  const [ar, setAr] = useState(false);

  if (!ar) {
  }

  return (
    <main>
      <div className="h-screen w-screen relative">
        {ar ? (
          <ZapparCanvas shadows>
            <ZapparCamera environmentMap poseMode="anchor-origin" />
            <Suspense fallback={null}>
              <Test />
            </Suspense>
          </ZapparCanvas>
        ) : (
          <Canvas>
            <Suspense fallback={null}>
              <Test scale={[10, 10, 10]} />
              <Environment preset="sunset" background />
              <OrbitControls autoRotate />
            </Suspense>
          </Canvas>
        )}
        <button
          className="absolute bottom-1 left-[50%] p-2 bg-white color-black z-10"
          onClick={() => setAr(!ar)}
        >
          AR
        </button>
      </div>
    </main>
  );
}

