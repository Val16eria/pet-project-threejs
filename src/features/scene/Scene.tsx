import {
  FC,
  MutableRefObject,
  useRef
} from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import {
  DirectionalLight,
  DirectionalLightHelper,
  Object3D
} from "three";

import { TorusKnot } from "../../shared/ui";

export const Scene: FC = () => {
  const directionalLightRef = useRef<DirectionalLight | null>(null);

  useHelper(
		directionalLightRef as unknown as MutableRefObject<Object3D>,
	  DirectionalLightHelper,
	  0.5,
	  "black"
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight
	      position={[0, 0, 2]}
	      intensity={0.8}
	      ref={directionalLightRef}
      />

      {/*<Cube*/}
      {/*  position={[-1, 0, 0]}*/}
      {/*  size={[1, 1, 1]}*/}
      {/*  color="lightpink"*/}
      {/*/>*/}

      {/*<Sphere*/}
      {/*  position={[0, 0, 0]}*/}
      {/*  size={[1, 30, 30]}*/}
      {/*  color="lightblue"*/}
      {/*/>*/}

      {/*<Torus*/}
      {/*  position={[2, 0, 0]}*/}
      {/*  size={[0.5, 0.1, 30, 30]}*/}
      {/*  color="red"*/}
      {/*/>*/}

      <TorusKnot
        position={[0, 0, 0]}
        size={[0.5, 0.2, 1000, 50]}
        color="#FF69B4"
      />
      <OrbitControls enableZoom={false} />

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
    </>
  );
};
