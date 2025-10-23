"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutHowdy from "../components/AboutHowdy";
import FeaturesSection from "../components/FeaturesSection";
import Philosophy from "../components/Philosophy";
import BlogSection from "../components/BlogSection";
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

  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CustomCursor mousePosition={mousePosition} />
      <Navbar />
      <Hero />
      <AboutHowdy />
      <FeaturesSection />
      <Philosophy />
      <BlogSection />
      <Footer />
    </div>
  );
}
