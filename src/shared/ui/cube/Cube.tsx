import {
  BoxGeometryProps,
  MeshProps,
  useFrame
} from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh } from "three";

interface ICube {
	position: MeshProps["position"];
	size: BoxGeometryProps["args"];
	color: string;
}

export const Cube: FC<ICube> = ({
  position,
  size,
  color
}) => {
  const ref = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    if (ref.current) {
			ref.current!.rotation.x += delta;
			ref.current!.rotation.y += delta * 2.0;
			ref.current!.position.z = Math.cos(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  );
};
