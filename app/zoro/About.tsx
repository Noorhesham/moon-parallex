import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        ".text1",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".about",
            start: "-200 top",
            end: "bottom bottom",
            scrub: true,
            scroller: ".main-container",
          },
        }
      );

      // Image clipPath animation
      const clipPathAnimation = gsap.utils.interpolate(
        "polygon(0 0, 0 0, 0 100%, 0 100%)", // Starting as fully hidden
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)" // Animate to a rectangle (fully visible)
      );
      gsap.to(".image-clip", {
        scrollTrigger: {
          trigger: ".about",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          scroller: ".main-container",
          onUpdate: (self) => {
            // Update clipPath based on scroll progress
            const progress = self.progress;
            const clipPath = clipPathAnimation(progress);
            gsap.set(".image-clip", { clipPath });
          },
        },
      });
    });

    return () => {
      ctx.revert(); // clean up ScrollTrigger
    };
  }, []);

  return (
    <section className="py-8 about px-16 flex justify-center gap-40 bg-gray-400 items-center">
      <div className="h-[75%] w-full border-2 border-black flex-1">
        <img
          className="image-clip" // Apply clipPath animation here
          src="/venom-symbiote.jpg"
          alt="Venom Symbiote"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-center opacity-100 text-[10vw] text1 text-gray-500">The Symbiote Saga</h1>
        <p className="text-center">
          The world of Spider-Man is forever changed. As the symbiote consumes Peter, it's up to Miles to navigate the
          challenges of becoming a true hero. With Venom on the loose, will both Spider-Men be enough to stop this new
          threat, or will New York fall into darkness?
        </p>
      </div>
    </section>
  );
};

export default About;
