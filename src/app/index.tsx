import { FC } from "react";
import { Canvas } from "@react-three/fiber";

import { Scene } from "../features/scene";

import "./stylus/index.css";

export const App: FC = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};
