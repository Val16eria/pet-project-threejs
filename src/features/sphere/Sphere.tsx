import { FC } from "react";

interface ISphere {
	position: [number, number, number];
	size: [number, number, number];
	color: string;
}

export const Sphere: FC<ISphere> = ({
  position,
  size,
  color
}) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
