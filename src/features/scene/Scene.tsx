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
import { useControls } from "leva";

import { TorusKnot } from "../../shared/ui";

export const Scene: FC = () => {
  const directionalLightRef = useRef<DirectionalLight | null>(null);

  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 3.5,
      min: 0,
      max: 5,
      step: 0.1
    }
  });

  useHelper(
		directionalLightRef as unknown as MutableRefObject<Object3D>,
		DirectionalLightHelper,
		0.5,
		"white"
  );

  return (
    <>
      <ambientLight intensity={0.5}/>
      <directionalLight
        position={[0, 0, 2]}
        intensity={lightIntensity}
        color={lightColor}
        ref={directionalLightRef}
      />

      <TorusKnot
        position={[0, 0, 0]}
        size={[0.2, 1000, 50]}
        color="#FF69B4"
      />

      <OrbitControls enableZoom={false}/>
    </>
  );
};
