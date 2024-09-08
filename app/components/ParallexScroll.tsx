"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ParallexScroll = () => {
  const { scrollY } = useScroll();

  // thisi s like mapping the scroll position to a value that is more than the current position so that the scroll of some elements
  //seems faster the creats the parallex effect
  const moonY = useTransform(scrollY, [0, 300], [0, 435]);
  const textY = useTransform(scrollY, [0, 300], [0, 200]);
  const groundY = useTransform(scrollY, [0, 300], [0, 50]);
  const mountainsX = useTransform(scrollY, [0, 300], [-100, 50]);

  // Star positions and animations
  const stars = [
    { left: "10%", top: "20%", size: "w-12 h-12", color: "#FFD700" }, // Gold
    { left: "70%", top: "15%", size: "w-16 h-16", color: "#FF6347" }, // Tomato
    { left: "50%", top: "5%", size: "w-8 h-8", color: "#7FFFD4" }, // Aquamarine
    { left: "80%", top: "40%", size: "w-10 h-10", color: "#ADFF2F" }, // GreenYellow
    { left: "30%", top: "60%", size: "w-14 h-14", color: "#FF69B4" }, // HotPink
  ];

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen w-full relative">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1, rotate: 0, x: 0 }}
          animate={{
            scale: [1, 1.3, 1.3, 1],
            rotate: [0, 360, 0, 360],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 4 + index, // Stagger the animations slightly
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className={`z-10 absolute ${star.size}`}
          style={{ left: star.left, top: star.top, color: star.color }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L14.09 8.26L20 8.27L15.45 11.97L17.54 18.24L12 14.77L6.46 18.24L8.55 11.97L4 8.27L9.91 8.26L12 2Z" />
          </svg>
        </motion.div>
      ))}

      <motion.div
        style={{ y: textY }}
        className="top-52 flex flex-col items-start gap-2 left-[20%] text-7xl font-bold text-white z-20 absolute"
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Top Training</h1>
        <p className="text-sm max-w-md">
          We offer a comprehensive range of courses designed to empower you with the knowledge and skills needed to
          excel in today's competitive world.
        </p>
        <Button
          className={cn(
            "px-8 py-4 w-fit  text-white rounded-full text-xl font-semibold",
            " focus:outline-none focus:ring-4"
          )}
        >
          View Courses
        </Button>
      </motion.div>

      <div
        className="bg-cover w-full h-full absolute inset-0"
        style={{
          backgroundImage: "url('/base.png')",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-20 -translate-x-1/2 aspect-square  w-80 xl:w-80"
        style={{ y: moonY }}
      >
        <Image src={"/مشروع جديد (16).png"} fill alt="moon" className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute z-10 bottom-0 w-full h-96 "
        style={{ y: groundY }}
      >
        <Image src={"/bottom.png"} fill alt="desert" className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute z-0 -left-10 bottom-20  w-[31rem] aspect-square"
        style={{ x: mountainsX }}
      >
        <Image src={"/left.png"} fill alt="mountains" className="object-contain" />
      </motion.div>
    </motion.section>
  );
};

export default ParallexScroll;
