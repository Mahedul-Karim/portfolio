"use client";

import {  motion, Variants, MotionProps } from "motion/react";

import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React from "react";

interface FlipTextProps extends MotionProps {
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 1,
  delayMultiple = 0.08,
  className,
  as: Component = "span",
  variants,
  ...props
}: FlipTextProps) {
  const MotionComponent = motion.create(Component);
  const characters = React.Children.toArray(children).join("").split(" ");

  return (
    <p className="flex flex-wrap space-x-1 mt-2 text-sm xs:text-base text-white/60">
      
        {characters.map((char, i) => (
          <MotionComponent
            key={i}
            initial="hidden"
            animate="visible"
            variants={variants || defaultVariants}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center", className)}
            {...props}
          >
            {char}
          </MotionComponent>
        ))}
    </p>
  );
}
