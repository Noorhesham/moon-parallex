import React from "react";
import { splitText } from "../m/page";
import { useGSAP } from "@gsap/react";

const Sticky = () => {
  return (
    <section className="h-screen sticky1">
      <div className="intro">
        <div className="intro-col flex-1 flex">
          <p className="flex-1">{splitText(`Venom's shadow looms over New York.`)}</p>
          <p>{splitText(`Peter is losing control, and Miles may be the only one who can stop him.`)}</p>
        </div>
        <div className="intro-col flex-1 flex">
          <p className="ml-auto text-right">{splitText(`Can they save the city... or themselves?`)}</p>
        </div>
      </div>
      <div className="img1 ">
        <video
          style={{
            width: "100%",
            height: "100%",
          }}
          loop
          autoPlay
          muted
          className="absolute aspect-video top-0 left-0 w-full h-full overflow-hidden"
        >
          <source
            className=" absolute h-full w-full "
            src="/Miles vs Peter, All Cutscenes - Marvel's Spider-Man 2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="">
        <img
          style={{ clipPath: "polygon(40% 25%, 60% 25%, 60% 75%, 40% 75%)" }}
          className="img2 absolute top-0 left-0 w-full h-full overflow-hidden"
          src="/img1.jpg"
          alt="Symbiote"
        />
      </div>
      <div className="">
        <img
          style={{ clipPath: "polygon(50% 25%, 50% 25%, 50% 75%, 50% 75%)" }}
          className="img3 origin-top-right scale-150 absolute top-0 left-0 w-full h-full overflow-hidden"
          src="/venomm.jpg"
          alt="Miles Morales"
        />
      </div>
      <div className="">
        <img
          style={{ clipPath: " polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          className="img4 absolute top-0 left-0 w-full h-full overflow-hidden"
          src="/miless.jpg"
          alt="Spider-Man and Venom"
        />
      </div>
      <div className="copy">
        <h1>The Symbiote's Power Comes at a Cost</h1>
      </div>
    </section>
  );
};

export default Sticky;
