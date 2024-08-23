import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className=" relative w-24 h-16">
      <Image src={"/ai-logo-AzG7MR1QJ6IJNkJK.svg"} fill alt="logo" className=" object-contain" />
    </Link>
  );
};

export default Logo;
