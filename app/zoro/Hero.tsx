import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".head", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2});
    tl.fromTo(".para", { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 }, "-=1");
  });
  return (
    <section
      style={{
        backgroundImage: "url(/img2.jpg)", // Replace with a relevant image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center flex-col justify-between p-16"
    >
      <h1 className="head max-w-2xl mt-28 text-center">Genesis of the Symbiote</h1>
      <p className="w-1/2 para text-lg font-semibold text-center">
        The battle for New York has never been more personal. Peter Parker and Miles Morales team up against a threat
        unlike any other—Venom. As the symbiote takes hold, the line between hero and villain blurs. Will Peter succumb
        to its power, or will Miles help him find his way back?
      </p>
    </section>
  );
};

export default Hero;
