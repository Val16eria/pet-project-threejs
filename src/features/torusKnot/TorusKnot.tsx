import { FC } from "react";

interface ITorusKnot {
	position: [number, number, number];
	size: number[];
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
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
