"use client";

import Image from "next/image";
import React from "react";

type Props = {
  icon?: string;
  children: string;
};

export default function Button({icon, children}: Props) {
  return (
    <button className="relative flex items-center gap-5 bg-[linear-gradient(#253575,#162561)] px-4 rounded-2xl min-h-[60px] text-white transition-opacity duration-500">
      <svg
        className="left-0 absolute"
        width="8"
        height="22"
        viewBox="0 0 8 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 0H0.5V4V18V22H2.5V16.25L7.63991 11.7526C8.09524 11.3542 8.09524 10.6458 7.63991 10.2474L2.5 5.75V0Z"
          fill="#2EF2FF"
        ></path>
      </svg>
      {icon && <Image alt={children} src={icon} />}
      <span className="font-bold text-lighBlue uppercase leading-6">
        {children}
      </span>
    </button>
  );
}
