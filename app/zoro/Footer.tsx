import React, { useEffect } from "react";
import { flickerAnimation, splitText } from "../m/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".footer",
        start: `${window.innerHeight * 7.5}`,
        scroller: ".main-container",
        end: `${window.innerHeight * 8}`,
        onEnter: () => flickerAnimation(".footer h1 span", 1),
        onLeave: () => flickerAnimation(".footer h1 span", 0),
        onEnterBack: () => flickerAnimation(".footer h1 span", 1),
        onLeaveBack: () => flickerAnimation(".footer h1 span", 0),

        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="footer">
      <h1 className=" p-20">{splitText(`Darkness creeps in, but heroes rise.`)}</h1>
    </div>
  );
};

export default Footer;
