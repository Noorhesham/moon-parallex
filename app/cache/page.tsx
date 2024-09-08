import { cookies } from "next/headers";
import React from "react";

const page = () => {
  cookies();
  return <div>{Date.now()}</div>;
};

export default page;
