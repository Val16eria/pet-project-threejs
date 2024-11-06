import { FC } from "react";
import { Canvas } from "@react-three/fiber";

import { CardSection } from "../page/cardSection";
import { Scene } from "../features/scene";

import "./stylus/index.css";

export const App: FC = () => {
  return (
    <>
      <CardSection />
      <Canvas>
        <Scene/>
      </Canvas>
    </>
  );
};
