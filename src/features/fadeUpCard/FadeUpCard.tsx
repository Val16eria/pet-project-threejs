import { FC } from "react";
import { motion } from "framer-motion";

import { Card } from "../../shared/ui";

export const FadeUpCard: FC = () => {
  return (
    <Card>
      <motion.div
        className="w-20 h-20 bg-stone-100 rounded-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="w-20 h-20 bg-stone-100 rounded-full"
        initial={{ opacity: 0 , y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />
    </Card>
  );
};
