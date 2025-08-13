"use client";

import { useScroll, motion, useSpring } from "motion/react";
import React from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const scroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="size-12 bg-glass rounded-full fixed right-4 bottom-4 z-[4]">
      <svg
        className="absolute inset-0"
        viewBox="0 0 40 40"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#26ffd3"
          strokeWidth="2.5"
          fill="none"
          opacity="0.2"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          stroke="#26ffd3"
          fill="none"
          strokeLinecap="round"
          pathLength="1"
          style={{
            pathLength: scroll,
            strokeWidth: "3px",
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
