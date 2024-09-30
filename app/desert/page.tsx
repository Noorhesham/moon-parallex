"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const slider = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let sections = document.querySelectorAll(".item");

    // Pin the entire container to keep it in place during scroll
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: slider.current,
        start: "top top", // Start when the container reaches the top of the viewport
        end: "+=400%", // The scroll duration (400% of the viewport height)
        pin: true, // Pin the container
        scrub: 1, // Smooth scrubbing for better effect
      },
    });

    // Animate each section to slide up into view
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          y: "100%", // Start the section from below the viewport
        },
        {
          y: "0%", // Animate the section to its natural position
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top center", // Start the animation when the section hits the center of the viewport
            end: "bottom center", // End when the section has fully moved up
            scrub: 1, // Smooth the scroll interaction
          },
        }
      );
    });
  }, []);

  return (
    <div ref={slider} className="split-slideshow w-full flex flex-col">
      <div className="slideshow">
        <div className="slider">
          {[1, 2, 3, 4].map((i, index) => (
            <div className="item h-screen" key={index} ref={(el) => (itemsRef.current[index] = el)}>
              <Image
                fill
                className="w-full image h-full object-cover"
                src={`https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-${i}.jpg`}
                alt={`Canyon ${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
