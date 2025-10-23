"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle, Mic, Heart, Star } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
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

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e0fd60] rounded-full opacity-20"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Say <span className="italic text-[#e0fd60]">howdy</span> to
            <br />
            <span className="text-[#e0fd60] relative">authentic</span>
            <br />
            <span className="italic">conversations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8"
          >
            Where{" "}
            <span className="italic text-[#e0fd60]">real expressions</span> meet
            digital convenience. Voice messages, styled chats, and genuine
            connections -
            <span className="italic"> just like the good ol' days</span>
          </motion.p>
        </motion.div>

        {/* Video Section with Scroll Effects */}
        <motion.div
          className="relative mx-auto max-w-5xl mb-16"
          style={{ scale: videoScale, opacity: videoOpacity }}
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

          {/* Video description */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-gray-400 text-sm">
              <span className="italic">Real voices,</span> genuine reactions,
              and
              <span className="italic"> conversations that matter</span>
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e0fd60] text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-[#e0fd60]/25 transition-all duration-300"
          >
            Download Howdy App
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#e0fd60] text-[#e0fd60] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e0fd60] hover:text-black transition-all duration-300"
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
