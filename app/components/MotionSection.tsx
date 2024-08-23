"use client";
import React from "react";
import { motion } from "framer-motion";
const MotionSection = ({
  children,
  axis,
  className,
}: {
  children: React.ReactNode;
  axis?: "y" | "x";
  className?: string;
}) => {
  return (
    <motion.section
      className={className || ""}
      initial={axis === "y" ? { y: 100, opacity: 0 } : axis === "x" ? { x: 100, opacity: 0 } : { opacity: 0 }}
      animate={axis === "y" ? { y: 0, opacity: 1 } : axis === "x" ? { x: 0, opacity: 1 } : { opacity: 1 }}
      transition={{ duration: 0.5, type: "tween", ease: "linear" }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
