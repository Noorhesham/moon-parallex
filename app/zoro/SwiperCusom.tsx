"use client";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import React, { useEffect, useState } from "react";
import type SwiperType from "swiper";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const animation = () => {
  gsap.fromTo(
    ".swiper-slide-active h2",
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    }
  );
  gsap.fromTo(
    ".swiper-slide-active p",
    {
      y: 10,
      opacity: 0,
      stagger: 0.1,
    },
    {
      y: 0,
      stagger: 0.1,
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".swiper-slide-active .label",
    {
      rotate: 45,
      x: -200,
      opacity: 0,
      y: 100,
    },
    {
      y: 0,
      opacity: 1,
      rotate: -20,
      x: 0,
    }
  );
  gsap.fromTo(
    ".swiper-slide-active .mainimg",
    {
      opacity: 0,
      y: 50,
    },
    {
      y: 0,
      opacity: 1,
    }
  );
};
gsap.registerPlugin(ScrollTrigger);
export default function ImageSlider() {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const characterNames = ["SPIDER-MAN", "PETER P PARKER", "SPIDER-GWEN"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });
      ScrollTrigger.create({
        trigger: ".swiper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        scroller: ".main-container",
        toggleActions: "play reverse play reverse",

        onEnter: () => {
          animation();
        },
      });
    }
  }, [swiper]);

  return (
    <section className=" relative">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => {
          setTimeout(() => {
            animation();
          }, 50);
        }}
      >
        <SwiperSlide>
          <Slide
            contain
            bgImage="/d3h7ofnt73621.png"
            img="/miles.png"
            img2="/milesname.png"
            heading="SPIDER-MAN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem iusto est ad, aperiam doloremque debitis."
            color="red"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage="/Peter_Parker_29_from_Spider-Man_Into_the_Spider-Verse_008.webp"
            img="/dcv88ir-a087164f-0545-4119-9d64-89b4a6aa156e.png"
            img2="/nameparker.png"
            heading="PETER P PARKER"
            description="Accusantium doloremque velit ad sed rem beatae quibusdam, ipsum officiis nihil."
            color="blue"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            contain
            bgImage="/gwen-stacy-across-the-spider-verse.avif"
            img="/Spider-Woman_Gwen_Stacy_ITSV_render.webp"
            heading="SPIDER-GWEN"
            img2="/gwen.png"
            description="Magnam necessitatibus quidem beatae quibusdam accusantium rem sed rem beatae."
            color="blue"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex absolute left-[20%] bottom-20 z-20 justify-center gap-4 mt-4">
        {characterNames.map((name, i) => (
          <div
            key={i}
            onClick={() => swiper?.slideToLoop(i)} // Go to the slide on click
            className={`custom-bullet w-40 h-40 relative flex items-center justify-center cursor-pointer ${
              activeIndex === i ? "active" : "non"
            }`}
          >
            <img
              className="absolute inset-0 object-contain"
              src={`/pagination-image-${i + 1}.png`}
              alt={`Pagination ${name}`}
            />
            {activeIndex !== i && <h1 className="absolute text-white text-xl">{name}</h1>}
          </div>
        ))}
      </div>
    </section>
  );
}
