import { Canvas } from "@react-three/fiber";
import { FC } from "react";

import {
  Cube,
  Sphere,
  Torus, TorusKnot
} from "../features";

import "./stylus/index.css";

export const App: FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0, 0, 2]} intensity={0.5}/>

      {/*<Cube*/}
      {/*  position={[-1, 0, 0]}*/}
      {/*  size={[1, 1, 1]}*/}
      {/*  color="lightpink"*/}
      {/*/>*/}

	    <Sphere
		    position={[0, 0, 0]}
		    size={[1, 30, 30]}
		    color="lightblue"
	    />

	    {/*<Torus*/}
		  {/*  position={[2, 0, 0]}*/}
		  {/*  size={[0.5, 0.1, 30, 30]}*/}
		  {/*  color="red"*/}
	    {/*/>*/}

	    {/*<TorusKnot*/}
		  {/*  position={[-2, 2, 0]}*/}
		  {/*  size={[0.5, 0.2, 1000 , 50]}*/}
		  {/*  color="yellow"*/}
	    {/*/>*/}

      {/*<group position={[0, -1, 0]}>*/}
      {/*    <Cube*/}
      {/*        position={[1, 0, 0]}*/}
      {/*        size={[1, 1, 1]}*/}
      {/*        color="orange"*/}
      {/*    />*/}
      {/*    <Cube*/}
      {/*        position={[-1, 0, 0]}*/}
      {/*        size={[1, 1, 1]}*/}
      {/*        color="orange"*/}
      {/*    />*/}
      {/*    <Cube*/}
      {/*        position={[-1, 2, 0]}*/}
      {/*        size={[1, 1, 1]}*/}
      {/*        color="orange"*/}
      {/*    />*/}
      {/*    <Cube*/}
      {/*        position={[1, 2, 0]}*/}
      {/*        size={[1, 1, 1]}*/}
      {/*        color="orange"*/}
      {/*    />*/}
      {/*</group>*/}
    </Canvas>
  );
};
