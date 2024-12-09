"use client";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import xoraShape from "@/public/hero.png";
import buttonIcon from "@/public/zap.svg";

export default function HeroSection() {
  return (
    <div className="flex pt-40 max-w-[512px] lg:max-w-[32px]">
      <div className="flex flex-col">
        <p className="mb-5 font-bold text-textLime text-xs uppercase tracking-[0.3rem]">
          Video Editing
        </p>
        <h1 className="mb-6 font-[900] text-[84px] text-mainText uppercase leading-none">
          Amazingly simple
        </h1>
        <p className="mb-10 max-w-[440px] text-2xl leading-9">
          We designed XORA AI Video Editor to be an easy to use, quick to learn,
          and surprisingly powerful.
        </p>
        <a href="#">
          <Button icon={buttonIcon}>Try it now</Button>
        </a>
      </div>
      <div className="-top-32 left-[calc(50%-340px)] -z-10 absolute w-[1230px] overflow-hidden">
        <Image alt="Xora Shape" className="" src={xoraShape} />
      </div>
    </div>
  );
}
