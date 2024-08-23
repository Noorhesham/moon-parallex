"use client";
import React from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ContainerMotion = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <MaxWidthWrapper>
      <motion.div className={className || ""} initial="hidden" viewport={{ once: true }} whileInView="show" variants={container}>
        {children}
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default ContainerMotion;
