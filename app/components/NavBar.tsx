"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

import MaxWidthWrapper from "./MaxWidthWrapper";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import PhoneNav from "./PhoneNav";
import { Button } from "@/components/ui/button";
const links = [
  {
    text: "ABOUT US",
  },
  {
    text: "Courses",
    href: "/about-us",
  },
];
const NavBar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [active, setIsActive] = useState(false);
  const router = useRouter();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTopPage, setIsTopPage] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsTopPage(true);
      } else setIsTopPage(false);
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isTopPage]);
  const isHome = pathName === "/ar" || pathName === "/en";
  return (
    <header className=" w-full">
      <nav
        className={`${
          isHome
            ? "text-white placeholder:text-white "
            : `text-black placeholder:text-white ${!isScrollingDown && !isTopPage && "bg-white/80"}`
        } fixed inset-0 z-50 max-h-[5rem]    flex flex-col gap-2  py-4 transition-all duration-300 ${
          isScrollingDown ? "-translate-y-full" : !isTopPage && !isScrollingDown ? "-translate-y-10" : "translate-y-0"
        }`}
      >
        <MaxWidthWrapper noPadding>
          <div className="flex items-center justify-between  ">
            <div className="flex  items-center">
              <div className="flex w-full items-center   ">
                <Logo />
              </div>
            </div>
            <div className="  flex items-center gap-8 ">
              <ul className=" hidden lg:flex z-30 relative items-center  gap-4 xl:gap-8 ">
                {links.map((link) => (
                  //@ts-ignore
                  <NavLink isHome={isHome} key={link.text} href={link.href} text={link.text} subLinks={link.subLinks} />
                ))}
              </ul>
              <div className={`z-[999] duration-150 h-full top-0  fixed left-0  lg:hidden block`}>
                <PhoneNav navigation={links} />
              </div>
              {/* <Button
                className="  px-4 lg:px-8  rounded-t-full rounded-bl-sm rounded-br-sm rounded-l-full rounded-r-full"
                variant={'outline'}
              >
                LOGIN
              </Button> */}
              <Button className="  px-4 lg:px-8 rounded-full">GET STARTED</Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
};

export default NavBar;
