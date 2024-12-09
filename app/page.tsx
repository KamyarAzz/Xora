"use client";

import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <main className="mx-auto px-16 py-10 w-full max-w-[1252px] overflow-x-hidden">
      <Header />
      <HeroSection />
    </main>
  );
}
