import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { FadeUpCard } from "../../features/fadeUpCard";
import { ShapeShiftCard } from "../../features/shapeShiftCard";
import { ButtonTapCard } from "../../features/buttonTapCard";
import { DragCard } from "../../features/dragCard";
import { ScrollProgressCard } from "../../features/scrollProgressCard";
import { Card } from "../../shared/ui";

export const CardSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.section
      className="grid grid-cols-3 p-10 gap-10"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          opacity: 0
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <FadeUpCard />
      <ShapeShiftCard />
      <ButtonTapCard />
      <DragCard />
      <ScrollProgressCard />
      <Card>
      </Card>
    </motion.section>
  );
};
