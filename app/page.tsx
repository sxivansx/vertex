import Image from "next/image";
import Hero from "@/components/Hero.tsx";
import Domains from "@/components/Domains.jsx";
import Journey from "@/components/journey.jsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-black justify-center pt-12 font-sans overflow-hidden ">
      <Hero />
      <Domains />
      <div className="border border-white/10 h-[200px] min-w-[1200px]"></div>
      <Journey />
    </div>
  );
}
