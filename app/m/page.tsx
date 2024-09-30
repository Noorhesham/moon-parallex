"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import Hero from "../zoro/Hero";
import About from "../zoro/About";
import Sticky from "../zoro/Sticky";
gsap.registerPlugin(ScrollTrigger);
import "../zoro/zoro.scss";
import "../locomotive.css";
import Footer from "../zoro/Footer";
import Image from "next/image";
import Slide from "../zoro/Slide";
import ImageSlider from "../zoro/SwiperCusom";
export const splitText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="inline-block">
      {char === " " ? "\u00A0" : char} {/* Use a non-breaking space for better rendering */}
    </span>
  ));
};
export const flickerAnimation = (targets: any, opacity: any) => {
  gsap.to(targets, {
    opacity: opacity,
    duration: 0.05,
    ease: "linear",
    stagger: {
      amount: 0.3,
      from: "random",
    },
  });
};
const page = () => {
  const totalStickyHeight = global?.window?.innerHeight * 5;
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      //paragraph animation
      ScrollTrigger.create({
        trigger: ".sticky1",
        start: "top top",
        scroller: ".main-container",
        end: () => `${window.innerHeight * 3}`,
        onEnter: () => flickerAnimation(".intro-col p span", 1),
        onLeave: () => flickerAnimation(".intro-col p span", 0),
        onEnterBack: () => flickerAnimation(".intro-col p span", 1),
        onLeaveBack: () => flickerAnimation(".intro-col p span", 0),
      });
      //pinning the sticky section
      ScrollTrigger.create({
        trigger: ".sticky1",
        start: "top top",
        end: () => `+=${totalStickyHeight}`,
        scroller: ".main-container",
        pin: true,
        pinSpacing: true,
      });
      // it is better to zoom this a bit to make the effect like zooming and make it smooth
      gsap.to(".img1 img", {
        scale: 1.125,
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky1",
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scroller: ".main-container",
          scrub: true,
        },
      });
      //polygon effect in the image inside img1
      gsap.to(".img2", {
        clipPath: "polygon(0 0, 100% 0,100% 100%,0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky1",
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scroller: ".main-container",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(".img2", {
              clipPath: `polygon(${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(
                25,
                0,
                progress
              )}%, 
                ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%, 
                ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%, 
                ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%)`,
            });
          },
        },
      });
      // the second imaage after fully appeared
      gsap.to(".img2", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky1",
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          scroller: ".main-container",
          scrub: true,
        },
      });

      gsap.to(".img1 img", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 3}`,
          end: () => `${window.innerHeight * 4}`,
          scroller: ".main-container",
          scrub: true,
        },
      });
     
      gsap.to(".img3", {
        clipPath: "polygon(0 0, 100% 0,100% 100%,0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 3}`,
          end: () => `${window.innerHeight * 4}`,
          scroller: ".main-container",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(".img3", {
              clipPath: `polygon(${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(
                50,
                0,
                progress
              )}%, ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(
                50,
                0,
                progress
              )}%, ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(50, 100, progress)}%, 
                 ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(50, 100, progress)}%)`,
            });
          },
        },
      });
      gsap.to(".img2", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          scroller: ".main-container",
          scrub: true,
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 3}`,
          end: () => `${window.innerHeight * 4}`,
        },
      });
      gsap.to(".img3", {
        scale: 2.9,
        ease: "none",
        scrollTrigger: {
          scroller: ".main-container",
          scrub: true,
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 3}`,
          end: () => `${window.innerHeight * 4}`,
        },
      });

      gsap.fromTo(
        ".img3",
        { scale: 2.9 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            scrub: true,
            scroller: ".main-container",
            trigger: ".sticky1",
            start: () => `${window.innerHeight * 4}`,
            end: () => `${window.innerHeight * 6}`,
          },
        }
      );
      gsap.to(".img4", {
        clipPath: "polygon(0 0, 100% 0,100% 100%,0% 100%)",
        ease: "none",
        scrollTrigger: {
          scrub: true,
          scroller: ".main-container",
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 6}`,
          end: () => `${window.innerHeight * 7}`,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(".img4", {
              clipPath: `polygon(0% ${gsap.utils.interpolate(100, 0, progress)}%,  100% ${gsap.utils.interpolate(
                100,
                0,
                progress
              )}%, 
 100% 100%, 
0% 100%)`,
            });
          },
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: ".main-container",
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 4.5}`,
          end: () => `${window.innerHeight * 5.5}`,
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });
      tl.to(".copy", {
        display: "block",
        rotate: 0,
        scale: 1,
        duration: 1,
      }).to(".copy", {
        rotateX: -90,
        opacity: 0,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
          scroller: ".main-container",
          trigger: ".sticky1",
          start: () => `${window.innerHeight * 6}`,
          end: () => `${window.innerHeight * 6.2}`,
          scrub: true,
        },
      });
    });
    return () => ctx.revert(); // Clean up GSAP context on unmount
  }, []);
  useEffect(() => {}, []);
  return (
    <main className="">
      <section className="  h-full min-h-[600vh] ">
        <Hero />
        <About />
        <Sticky />
        <Footer />
      </section>
      <section>
        <ImageSlider />
      </section>
    </main>
  );
};

export default page;
