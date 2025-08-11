"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const SectionTitle = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <motion.h3
      ref={ref}
      className="text-sm uppercase font-bold leading-[1.3] whitespace-pre-wrap text-white flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="size-2 bg-secondary rounded-full mr-2 origin-center" />
      {words.map((word, i) => {
        const isHighlighted = word
          .toLowerCase()
          .includes(highlight.toLowerCase());

        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={isHighlighted ? "text-secondary" : ""}
            style={{ display: "inline-block" }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.h3>
  );
};

export default SectionTitle;
