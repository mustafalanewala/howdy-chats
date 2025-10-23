"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    id: 1,
    title: "Howdy Chats",
    subtitle: "Connect Like Never Before",
    description:
      "Revolutionize your messaging experience with style and security",
    image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
    color: "#57bb5b",
  },
  {
    id: 2,
    title: "Shots",
    subtitle: "Capture & Create",
    description: "Share your moments with style and earn real rewards",
    image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg",
    color: "#ff6b6b",
  },
  {
    id: 3,
    title: "Ifeed",
    subtitle: "Smart Discovery",
    description: "A feed that actually gets you, with global connections",
    image: "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg",
    color: "#4ecdc4",
  },
  {
    id: 4,
    title: "Discover",
    subtitle: "Explore Around",
    description: "Find amazing places and experiences near you",
    image: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg",
    color: "#45b7d1",
  },
  {
    id: 5,
    title: "Planner",
    subtitle: "Smart Planning",
    description: "Create, customize, and join events effortlessly",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    color: "#f7b731",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main section animation
      gsap.from(".features-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stagger animation for feature items
      gsap.from(".feature-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="features-title text-4xl md:text-6xl font-bold uppercase mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Super <span className="text-[#57bb5b]">Features</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of digital communication
          </motion.p>
        </div>

        {/* Features Layout - Single Continuous Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer max-w-lg"
                  style={{ aspectRatio: "2.5/3.5" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={features[2].image}
                    alt={features[2].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${features[2].color}15 0%, transparent 50%)`,
                    }}
                  />
                </motion.div>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {features[2].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {features[2].description}
                </p>
              </div>
            </motion.div>

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer max-w-lg"
                  style={{ aspectRatio: "2.5/3.5" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={features[0].image}
                    alt={features[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${features[0].color}15 0%, transparent 50%)`,
                    }}
                  />
                </motion.div>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {features[0].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {features[0].description}
                </p>
              </div>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer max-w-lg"
                  style={{ aspectRatio: "2.5/3.5" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={features[4].image}
                    alt={features[4].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${features[4].color}15 0%, transparent 50%)`,
                    }}
                  />
                </motion.div>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {features[4].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {features[4].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {/* Space Block */}
            <div className="h-32 lg:h-40"></div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer max-w-lg"
                  style={{ aspectRatio: "2.5/3.5" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={features[1].image}
                    alt={features[1].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${features[1].color}15 0%, transparent 50%)`,
                    }}
                  />
                </motion.div>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {features[1].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {features[1].description}
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer max-w-lg"
                  style={{ aspectRatio: "2.5/3.5" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={features[3].image}
                    alt={features[3].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${features[3].color}15 0%, transparent 50%)`,
                    }}
                  />
                </motion.div>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {features[3].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {features[3].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
