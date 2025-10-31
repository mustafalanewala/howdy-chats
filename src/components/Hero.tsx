"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, LogIn } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

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
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#57bb5b] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
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
      <div className="max-w-5xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
        {/* Left side - Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative max-w-lg h-128 rounded-2xl overflow-hidden shadow-2xl">
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

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <motion.h1
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-black"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Chat. Create. Connect.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-lg"
          >
            Howdy Chats is an all-in-one platform that brings your social,
            professional, and personal connections - all in one place
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#57bb5b] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-[#4a9e4c] transition-all duration-300 shadow-lg hover:shadow-[#57bb5b]/25"
            >
              <Download size={20} />
              Download Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#57bb5b] text-[#57bb5b] px-8 py-4 rounded-full font-semibold hover:bg-[#57bb5b] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
            >
              <LogIn size={20} />
              Login
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
