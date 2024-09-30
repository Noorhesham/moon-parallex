import Image from "next/image";
import React from "react";

interface SlideProps {
  bgImage: string;
  img: string;
  heading: string;
  description: string;
  color: string;
  img2?: string;
  contain?: boolean;
  reverse?: boolean; // New prop to reverse the flex layout
}

const Slide: React.FC<SlideProps> = ({
  bgImage,
  img,
  heading,
  description,
  color,
  img2,
  reverse = false,
  contain = false,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[100vh] relative flex items-start"
    >
      <div className="w-full h-full backdrop-blur-[2px] bg-black/40 absolute" />
      <div className={`flex ${reverse ? " flex-row-reverse " : " flex-row"} w-full z-10`}>
        <div className="flex flex-col flex-[45%]">
          {img2 && (
            <div className="w-full z-40 label h-52 mt-20 -rotate-[8deg] relative">
              <Image src={img2} alt="" fill className={contain ? "object-contain" : "object-cover"} />
            </div>
          )}
          <div className={`bg-[#1a1a1a] absolute bottom-52 left-[15%] max-w-lg pb-10 px-4`}>
            <h2
              className="ml-20 bg-[#1a1a1a] animatedhead -mt-5 font-bold shadow-lg text-5xl text-gray-50 px-4 p-1"
              style={{ textShadow: `2px 2px 5px ${color}`, boxShadow: `4px 4px 8px ${color}` }}
            >
              {heading}
            </h2>

            <p className="pt-10 text-gray-50 font-medium text-sm">{description}</p>
            <p className="pt-10 text-gray-50 font-medium text-sm">{description}</p>
          </div>
        </div>

        <div className="relative mainimg  h-[96vh] mt-14 w-[55%]">
          <Image className={"object-contain"} src={img} alt="Main Image" fill />
        </div>
      </div>
    </section>
  );
};

export default Slide;
