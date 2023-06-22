"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const RouteAnimate = ({ children }: ReactChild) => {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RouteAnimate;
