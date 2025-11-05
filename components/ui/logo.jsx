import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-4  rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap  text-green-950 max-lg:text-[1.3rem]">
        foodliver
      </span>
    </Link>
  );
};

export default Logo;
