import { FC, useRef } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";
import { MeshProps, TorusKnotGeometryProps } from "@react-three/fiber";
import { Mesh } from "three";
import { useControls } from "leva";

interface ITorusKnot {
	position: MeshProps["position"];
	size: TorusKnotGeometryProps["args"];
	color: string;
}

export const TorusKnot: FC<ITorusKnot> = ({
  position,
  size,
  color: propColor
}) => {
  const ref = useRef<Mesh | null>(null);

  const { color, radius } = useControls({
    color: propColor,
    radius: {
      value: 5,
	    min: 1,
	    max: 10,
	    step: 0.5
    },
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...size]} />
	    <MeshWobbleMaterial
		    color={color}
		    factor={5}
		    speed={2}
	    />
    </mesh>
  );
};
