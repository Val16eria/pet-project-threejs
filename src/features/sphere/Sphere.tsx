import {
  FC,
  useRef,
  useState
} from "react";
import { Mesh } from "three";
import { ThreeEvent, useFrame } from "@react-three/fiber";

interface ISphere {
	position: [number, number, number];
	size: number[];
	color: string;
}

export const Sphere: FC<ISphere> = ({
  position,
  size,
  color
}) => {
  const ref = useRef<Mesh | null>(null);

  const [isHovered, setHovered] = useState(false);
  const [icClicked, setClicked] = useState(false);

  const handleHovered = () => {
    setHovered((prevState) => !prevState);
  };

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  useFrame((state, delta) => {
    if (ref.current) {
      const speed = isHovered ? 1 : 0.2;
			ref.current!.rotation.y += delta * speed;
    }
  });

  return (
    <mesh
	    position={position}
	    ref={ref}
	    scale={icClicked ? 1.5 : 1}
      onPointerEnter={handleHovered}
	    onPointerLeave={handleHovered}
	    onClick={handleClick}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "red" : color} wireframe />
    </mesh>
  );
};
