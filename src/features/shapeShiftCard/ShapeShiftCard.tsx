import { FC } from "react";
import { motion } from "framer-motion";

import { Card } from "../../shared/ui";

export const ShapeShiftCard: FC = () => {
  return (
    <Card>
      <motion.div
        className="w-1/3 h-1/3 shadow-md bg-rose-400"
        animate={{
          scale: [1, 2, 2, 1],
          rotate: [0, 90, 90, 0],
          borderRadius: ["10%", "10%", "50%", "10%"]
        }}
        transition={{
          duration: 5,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
      </motion.div>
    </Card>
  );
};
