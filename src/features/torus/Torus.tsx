import { FC, useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

interface ITorus {
	position: [number, number, number];
	size: number[];
	color: string;
}

export const Torus: FC<ITorus> = ({
  position,
  size,
  color
}) => {
  const ref = useRef<Mesh | null>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
			ref.current!.rotation.x += delta;
			ref.current!.rotation.y += delta;
			ref.current!.position.z = Math.cos(state.clock.elapsedTime) * 2;
    }
  });

  return (
	  <mesh position={position} ref={ref}>
		  <torusGeometry args={size}/>
		  <meshStandardMaterial color={color} />
	  </mesh>
  );
};
