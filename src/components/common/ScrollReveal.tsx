"use client";

import { useInView, motion } from "motion/react";
import React, { useRef } from "react";

const ScrollReveal = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        delay: index * 0.3,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
