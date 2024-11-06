import { FC } from "react";
import { motion } from "framer-motion";

import { Card } from "../../shared/ui";

export const DragCard: FC = () => {
  return (
    <Card>
      <motion.div
        className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
        drag
        dragConstraints={{
          top: -125,
          right: 125,
          bottom: 125,
          left:  -125
        }}
        dragTransition={{ bounceStiffness: 600 }}
      />
    </Card>
  );
};
