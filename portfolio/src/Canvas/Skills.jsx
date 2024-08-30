import React,{Suspense} from 'react'
import {Canvas,} from '@react-three/fiber';
 import{Float,useTexture,Preload,OrbitControls,Decal} from '@react-three/drei'



const Shape =(props)=>{

  const [decall] = useTexture([props.imgUrl]);
  return(
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}> 
    <ambientLight intensity={0.25}/>
    <directionalLight position={(0,0,0.05)}/>
    <mesh castShadow receiveShadow scale={2.75}>
    <icosahedronGeometry args={[1, 1]} />
    <meshStandardMaterial
    color="#ff04"
    polygonOffset
    polygonOffsetFactor={-5}
    flatShading
    />
    <Decal position={[0,0,1]}
    rotation={[2 * Math.PI,0,0.25]}
    map={decall}/>
    </mesh>
  </Float>
  )
}
const Skills = ({icon}) => {
  
   
  return (
    <Canvas
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    >
      
        <OrbitControls enableZoom={false}/>
        <Shape imgUrl={icon}/>
       
      <Preload all />
  </Canvas>
  )
}

export default Skills