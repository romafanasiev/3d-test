'use client';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Monitor_AGILOG_case_v2: THREE.Mesh;
    Monitor_Front_pannel: THREE.Mesh;
    Monitor_Hinge_1: THREE.Mesh;
    Monitor_Mount_1: THREE.Mesh;
    Monitor_screen: THREE.Mesh;
    Monitor_small_details: THREE.Mesh;
  };
  materials: {
    AGI_AGILOG_2: THREE.MeshPhysicalMaterial;
    AGI_AGILOG_2_TEXTS: THREE.MeshPhysicalMaterial;
  };
};

export function Test(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/test.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_AGILOG_case_v2.geometry}
          material={materials.AGI_AGILOG_2}
          position={[0, 0, 1.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_Front_pannel.geometry}
          material={materials.AGI_AGILOG_2}
          position={[-8, 0, 88.5]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_Hinge_1.geometry}
          material={materials.AGI_AGILOG_2}
          position={[-187.75, 113, 71]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_Mount_1.geometry}
          material={materials.AGI_AGILOG_2}
          position={[-187, 113, -66]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_screen.geometry}
          material={materials.AGI_AGILOG_2_TEXTS}
          position={[-74, -2.75, 95.5]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_small_details.geometry}
          material={materials.AGI_AGILOG_2}
          position={[14, -81, 95.5]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/test.glb');

