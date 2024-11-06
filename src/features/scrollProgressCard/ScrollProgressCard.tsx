import { FC } from "react";
import { motion, useScroll } from "framer-motion";

import { Card } from "../../shared/ui";

export const ScrollProgressCard: FC = () => {
  const { scrollYProgress: completionProgress } = useScroll();

  return (
    <Card>
      <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
        <motion.div
          className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
          style={{
            scaleY: completionProgress
          }}
        />
      </motion.div>
    </Card>
  );
};
