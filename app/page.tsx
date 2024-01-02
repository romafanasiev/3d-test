'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Test } from './models';
import dynamic from 'next/dynamic';

const ZapparCameraSSR = dynamic(
  () => import('@zappar/zappar-react-three-fiber/lib/Components/ZapparCamera'),
  {
    ssr: false,
  }
);

export default function Home() {
  const [ar, setAr] = useState(false);

  return (
    <main>
      <div className="h-screen w-screen relative">
        {ar ? (
          <Canvas>
            <ZapparCameraSSR environmentMap poseMode="anchor-origin" />
            <Suspense fallback={null}>
              <Test />
            </Suspense>
          </Canvas>
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

