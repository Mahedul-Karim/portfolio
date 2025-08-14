"use client";

import { ArrowUp } from "lucide-react";
import { useScroll, motion, useSpring } from "motion/react";
import React from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const scroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleScrollToTop = () => {
    if (typeof window === "undefined") return;

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="size-12 bg-glass rounded-full fixed right-4 bottom-4 z-[2]">
      <button className="inset-0 absolute flex items-center justify-center cursor-pointer z-[3]" onClick={handleScrollToTop}>
        <ArrowUp className="text-secondary size-7" />
      </button>
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
