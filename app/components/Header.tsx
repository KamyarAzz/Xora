"use client";
import React from "react";
import Image from "next/image";
import xoraLogo from "@/app/assets/xora.svg";

export default function Header() {
  return (
    <header className="h-14">
      <ul className="flex justify-center items-center text-mainText">
        <li className="flex flex-1 justify-between items-center">
          <a
            className="font-bold hover:text-lighBlue transition-colors duration-500 cursor-pointer"
            href="#"
          >
            FEATURES
          </a>
          <div className="bg-mainBlue rounded-full w-1.5 h-1.5" content="" />
          <a
            className="font-bold hover:text-lighBlue transition-colors duration-500 cursor-pointer"
            href="#"
          >
            PRICING
          </a>
        </li>
        <li className="flex flex-1 justify-center">
          <a href="#">
            <Image src={xoraLogo} alt="Xora" />
          </a>
        </li>
        <li className="flex flex-1 justify-between items-center">
          <a
            className="font-bold hover:text-lighBlue transition-colors duration-500 cursor-pointer"
            href="#"
          >
            FAQ
          </a>
          <div className="bg-mainBlue rounded-full w-1.5 h-1.5" content="" />
          <a
            className="font-bold hover:text-lighBlue transition-colors duration-500 cursor-pointer"
            href="#"
          >
            DOWNLOAD
          </a>
        </li>
      </ul>
    </header>
  );
}
