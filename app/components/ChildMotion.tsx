"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const ChildMotion = ({
  item,
  children,
  className,
  hover=false,
}: {
  item: any;
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) => {
  return (
    <motion.div whileHover={hover ? { y: -10, scale: 1.05 } : {}} className={className || ""} variants={item}>
      {children}
    </motion.div>
  );
};

export default ChildMotion;
