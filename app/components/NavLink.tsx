import Link from "next/link";
import React from "react";

import { ArrowDownIcon } from "lucide-react";

const NavLink = ({
  text,
  href,
  subLinks,
  isHome,
}: {
  text: string;
  href?: string;
  subLinks: { text: string; href?: string }[];
  isHome?: boolean;
}) => {
  const linkStyles = "uppercase flex items-center gap-2 text-white  font-[400]   text-sm  xl:text-base  ";
  if (!subLinks)
    return (
      <Link href={href || "/"} className={linkStyles}>
        {text}
      </Link>
    );
};

export default NavLink;
