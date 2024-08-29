import React,{Suspense,useState,useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from "@react-three/drei";
import { Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
 


const Computers = () => {


  const computer = useGLTF("./laptop/scene.gltf");
  return (
     <mesh>
        <hemisphereLight intensity={0.15} groundColor='white' />
       <pointLight intensity={1} />
       <primitive object={computer.scene}
       scale={ 1.5}
       position={ [0, -1.25, -1.5 ]}
        />
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}/>
     </mesh>
  )
}
const ComputerCanvas = () =>{
   
  return (
  <Canvas
   frameloop="demand"
    shadows
    camera={{position:[20, 3, 5], fov:25}}
    gl={{ preserveDrawingBuffer: true }}
    >
     <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
         
        />
        <Computers/>
      </Suspense>
      <Preload All/>
  </Canvas>
  )
}

export default ComputerCanvas