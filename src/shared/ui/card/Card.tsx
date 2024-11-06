import {
  FC,
  HTMLAttributes,
  PropsWithChildren
} from "react";
import { motion } from "framer-motion";

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
    >
	    {children}
    </motion.div>
  );
};
