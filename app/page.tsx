import Image from "next/image";
import Hero from "@/components/Hero.tsx";
import Domains from "@/components/Domains.jsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-black justify-center pt-12 font-sans overflow-hidden ">
      <Hero />
      <Domains />
    </div>
  );
}
