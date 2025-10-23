"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import Philosophy from "../components/Philosophy";
import HowdyHighlights from "../components/HowdyHighlights";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CustomCursor mousePosition={mousePosition} />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Philosophy />
      <HowdyHighlights />
      <Achievements />
      <Footer />
    </div>
  );
}
