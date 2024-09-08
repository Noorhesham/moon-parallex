"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const imageRef = useRef(null); // Correct type annotation if using TypeScript
  const [x, setX] = useState();
  useGSAP(() => {
    // make a timeline and make a scroll trigger to it and pin scrub them
    const tl = gsap.timeline({
      x: 0,
      scrollTrigger: {
        trigger: ".bg",
        pin: true,
        start: "top top",
        end: "+=" + (window.innerHeight * 2 + 10), //specify length of animation
        scrub: 0.3,
      },
    });
    gsap.to(".dots1", {
      yPercent: 60,
      scrollTrigger: {
        scrub: 0.3,
      },
    });

    gsap.to(".dots2", {
      xPercent: 100,
      scrollTrigger: {
        scrub: 0.3,
      },
    });

    tl.to(".bg", {
      xPercent: -100,
      rotate: -360,
      yPercent: 20,
      ease: "none",
      backgroundColor: "transparent",
      backgroundSize: "100%",
      clipPath: "circle(50% at 50% 50%)",
      duration: 1.5,
    });
    tl.to(".bg", {
      yPercent: 10,
      duration: 1.5,
    });
    tl.to(".bg", {
      rotate: 360,
      xPercent: 0,
      duration: 1.5,
    });
  });
  useGSAP(() => {
    const sections = document.querySelectorAll(".boku");

    sections.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 200px",
          end: "bottom top",
          toggleActions: "resume none none pause",
          onEnter: () => tl.restart(),
          onLeaveBack: () => tl.restart(),
          markers: true,
        },
      });

      tl.fromTo(
        section.querySelector(".imgBoku"),
        {
          xPercent: -150,
          rotate: 360,
        },
        {
          xPercent: 0,
          rotate: 0,
          duration: 0.3,
        }
      )
        .fromTo(
          section.querySelector(".circle"),
          {
            xPercent: -500,
            rotate: 360,
            duration: 0.3,
          },
          {
            xPercent: 0,
            rotate: -360,
            duration: 0.3,
          }
        )
        .fromTo(
          section.querySelector(".title"),
          {
            yPercent: -150,
            opacity: 0,
            duration: 0.3,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.3,
          }
        )
        .fromTo(
          section.querySelectorAll(".stag"),
          {
            opacity: 0,
            yPercent: 150,
            duration: 0.3,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
            stagger: 0.1,
          }
        );
    });
  });

  console.log(x);
  return (
    <>
      <div ref={imageRef} className=" bg " />
      <main className=" relative h-full bg-purple-700">
        <section>
          <div className="half">
            <p className=" ">Hi there, I'm</p>
            <h1 className="head">Monkey D. Luffy</h1>
            <h4>
              A <a href="#">pirate</a> that desire to find the legendary treasure and become the Pirate King.
            </h4>
          </div>
        </section>

        <section>
          <div className="half right">
            <p>Some info</p>
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequuntur expedita, ipsam asperiores earum
              rerum porro minus maiores cumque praesentium sequi distinctio voluptas eligendi minima fuga quo quis
              molestias! Commodi?
            </p>
            <h3>Hobbies</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita nostrum natus quibusdam minima.
              At, aspernatur mollitia nihil eum esse corrupti reiciendis numquam adipisci voluptate suscipit doloremque
              aliquam hic quam?
            </p>
            <h3>Favourite quote</h3>
            <blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</blockquote>
          </div>
          <img className="dots dots1" src="/dots.svg" />
        </section>

        <section>
          <div className="half">
            <p>My fight</p>
            <h2>Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur? Quae soluta sequi quaerat
              ipsam expedita et placeat, impedit, molestiae alias tempore, facere adipisci modi fugiat explicabo animi
              non tenetur?
            </p>
            <div className="skills-box">
              <span>Gum Gum Pistol</span>
              <span>Gum-Gum Bazooka</span>
              <span>Gum-Gum Elephant Gun</span>
              <span>Gum-Gum Monkey God Gun</span>
              <span>Gum-Gum Lightning</span>
              <span>Gum-Gum Giant</span>
              <span>Gum-Gum King Cobra</span>
              <span>Gum-Gum Jet Gatling</span>
              <span>Gum-Gum Red Hawk</span>
              <span>Gum-Gum King Kong Gun</span>
            </div>
          </div>
          <img className="dots dots2" src="/dots2.svg" />
        </section>
        <section className=" py-40 boku grid  mt-20 grid-cols-2  bg-white">
          <div className=" w-full h-[40rem] relative">
            <div className="circle"></div>
            <Image src="/midoriya.webp" className="imgBoku " objectFit="contain" fill alt="goku" />
          </div>
          <div>
            <h1
              className=" title after:w-full after:h-8 after:absolute after:-bottom-2 after:left-0
             relative text-5xl w-fit  z-10  after:z-[-1]  after:bg-fuchsia-600 font-bold text-black"
            >
              MIDORYA
            </h1>

            <p className=" flex flex-col text-black mt-4">
              <span className="stag">
                Full name: <strong>Bakugō Katsuki</strong>
              </span>
              <span className="stag">
                Alias: <strong>Dynamight</strong>
              </span>
              <span className="stag">
                Birthday: <strong>April 20</strong>
              </span>
              <span className="stag">
                Age: <strong>16</strong>
              </span>
              <span className="stag">
                Gender: <strong>Male</strong>
              </span>
              <span className="stag">
                Height: <strong>172 cm</strong>
              </span>
              <span className="stag">
                Hair color: <strong>blonde</strong>
              </span>
              <span className="stag">
                Eye color: <strong>red</strong>
              </span>
              <span className="stag">
                Quirk: <strong>Explosion</strong>
              </span>
            </p>
          </div>
        </section>
        <section className=" py-40 boku grid   grid-cols-2  bg-white">
          <div className=" w-full h-[40rem] relative">
            <div className="circle circle2"></div>
            <Image src="/todoroki.webp" className="imgBoku " objectFit="contain" fill alt="goku" />
          </div>
          <div>
            <h1
              className=" title after:w-full after:h-8 after:absolute after:-bottom-2 after:left-0
             relative text-5xl w-fit  z-10  after:z-[-1]  after:bg-red-600 font-bold text-black"
            >
              Todoroki
            </h1>
            <p className="flex flex-col text-black mt-4">
              <span className="stag">
                Full name: <strong>Todoroki Shōto</strong>
              </span>
              <span className="stag">
                Alias: <strong>Shoto</strong>
              </span>
              <span className="stag">
                Birthday: <strong>January 11</strong>
              </span>
              <span className="stag">
                Age: <strong>16</strong>
              </span>
              <span className="stag">
                Gender: <strong>Male</strong>
              </span>
              <span className="stag">
                Height: <strong>176 cm</strong>
              </span>
              <span className="stag">
                Hair color: <strong>white/crimson</strong>
              </span>
              <span className="stag">
                Eye color: <strong>dark gray</strong>
              </span>
              <span className="stag">
                Quirk: <strong>Half cold Half hot</strong>
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
