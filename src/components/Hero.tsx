"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    // Title animation
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    });
  }, [controls]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handleVideoMouseEnter = () => {
      setIsVideoHovered(true);
    };

    const handleVideoMouseLeave = () => {
      setIsVideoHovered(false);
    };

    videoElement.addEventListener("mouseenter", handleVideoMouseEnter);
    videoElement.addEventListener("mouseleave", handleVideoMouseLeave);

    return () => {
      videoElement.removeEventListener("mouseenter", handleVideoMouseEnter);
      videoElement.removeEventListener("mouseleave", handleVideoMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#57bb5b] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          style={{ y: textY }}
          className="text-center mb-12"
        >
          <motion.h1
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Say <span className="italic text-[#57bb5b]">howdy</span> to
            <br />
            <span className="text-[#57bb5b] relative">
              authentic conversations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8"
          >
            Where{" "}
            <span className="italic text-[#57bb5b]">real expressions</span> meet
            digital convenience. Voice messages, styled chats, and genuine
            connections -
            <span className="italic"> just like the good ol' days</span>
          </motion.p>
        </motion.div>

        {/* Video Section with Scroll Effects */}
        <motion.div
          className="relative mx-auto max-w-6xl mb-16"
          style={{ scale: videoScale }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
