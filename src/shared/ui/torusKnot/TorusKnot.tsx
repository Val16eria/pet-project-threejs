import { FC } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";
import { MeshProps, TorusKnotGeometryProps } from "@react-three/fiber";

interface ITorusKnot {
	position: MeshProps["position"];
	size: TorusKnotGeometryProps["args"];
	color: string;
}

export const TorusKnot: FC<ITorusKnot> = ({
  position,
  size,
  color
}) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      {/*<meshStandardMaterial color={color} />*/}
	    <MeshWobbleMaterial
		    color={color}
		    factor={5}
		    speed={2}
	    />
    </mesh>
  );
};
