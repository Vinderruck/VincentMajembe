import React,{Suspense,useState,useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from "@react-three/drei";
import { Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
 


const Computers = ({ismobile}) => {


  const computer = useGLTF("./comp/scene.gltf");
  return (
     <mesh>
       <premitve object={computer.scene}/>
     </mesh>
  )
}
const ComputerCanvas = () =>{
  const [ismobile, setismobile] = useState(false);
useEffect(() => {
 //add listener for changes in the screen
 const mediaquery = window.matchMedia('("max-width:500px")');

 //adding initial
 setismobile(mediaquery.matches)
 //add function that handle changes
 const handlechangemediaQuery = (event) =>{
  setismobile(event.mediaquery)
 }

 // we are adding an event listener on the mediaquery
 mediaquery.addEventListener('change',handlechangemediaQuery);

  return () => {
 //in this return we removing the eventListener
 mediaquery.removeEventListener('change',handlechangemediaQuery);
  }
}, [ ])
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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers ismobile={ismobile}/>
      </Suspense>
      <Preload all />
  </Canvas>
  )
}

export default ComputerCanvas