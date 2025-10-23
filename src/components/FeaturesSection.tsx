"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  Lock,
  Phone,
  Monitor,
  Users,
  Languages,
  Camera,
  Share,
  DollarSign,
  Music,
  Brain,
  Link,
  ShoppingBag,
  Calendar,
  MapPin,
  Lightbulb,
  Rocket,
} from "lucide-react";

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
    items: [
      {
        icon: MessageCircle,
        title: "Styled Chats",
        desc: "Match mood. Switch themes.",
      },
      { icon: Lock, title: "Just You Two", desc: "Your secrets stay sealed." },
      {
        icon: Phone,
        title: "Call, Talk, Repeat",
        desc: "Crystal clear. Like they're right there.",
      },
      {
        icon: Monitor,
        title: "Screens Synced",
        desc: "Show it off. Let's Get Things Screened.",
      },
      { icon: Users, title: "Circle Up!", desc: "Not just a group, it's fam." },
      {
        icon: Languages,
        title: "Translation!",
        desc: "Speak local. Connect global.",
      },
    ],
  },
  {
    id: 2,
    title: "Shots",
    subtitle: "Capture & Create",
    description: "Share your moments with style and earn real rewards",
    image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg",
    color: "#ff6b6b",
    items: [
      { icon: Camera, title: "Snap a Shot", desc: "Snap. Edit. Drop it." },
      { icon: Share, title: "Share the Spark", desc: "See it. Send it." },
      {
        icon: DollarSign,
        title: "Real Rewards",
        desc: "Turn views into rewards.",
      },
      {
        icon: Music,
        title: "Trend Tunes",
        desc: "Add hot tracks. Boost your reach.",
      },
    ],
  },
  {
    id: 3,
    title: "Ifeed",
    subtitle: "Smart Discovery",
    description: "A feed that actually gets you, with global connections",
    image: "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg",
    color: "#4ecdc4",
    items: [
      {
        icon: Brain,
        title: "Feed That Gets You",
        desc: "Your interests shape the feed.",
      },
      {
        icon: Link,
        title: "Link Up Globally",
        desc: "DMs that cross every border.",
      },
      {
        icon: ShoppingBag,
        title: "Shop What Pops",
        desc: "Scroll, spot, and shop.",
      },
      { icon: Calendar, title: "One-Tap", desc: 'Say "I\'m in" - one tap.' },
    ],
  },
  {
    id: 4,
    title: "Discover",
    subtitle: "Explore Around",
    description: "Find amazing places and experiences near you",
    image: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg",
    color: "#45b7d1",
    items: [
      {
        icon: MapPin,
        title: "Explore Nearby",
        desc: "Local picks made for you.",
      },
      {
        icon: Users,
        title: "Community Spots",
        desc: "Find where locals hang out.",
      },
    ],
  },
  {
    id: 5,
    title: "Planner",
    subtitle: "Smart Planning",
    description: "Create, customize, and join events effortlessly",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    color: "#f7b731",
    items: [
      {
        icon: Lightbulb,
        title: "Smarter Planning",
        desc: "Create it. Customize it. Get reminded.",
      },
      {
        icon: Rocket,
        title: "Instant Participation",
        desc: "Skip the wait. Join in a flash.",
      },
      {
        icon: MapPin,
        title: "Nearby Events",
        desc: "From your street to your screen.",
      },
      {
        icon: Users,
        title: "Plan with Groups",
        desc: "Get everyone on board, effortlessly.",
      },
    ],
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setTimeout(() => setIsTransitioning(false), 1200);
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${currentFeature * (100 / features.length)}%`,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }
  }, [currentFeature]);

  const goToFeature = (index: number) => {
    if (isTransitioning || index === currentFeature) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentFeature(index);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 1200);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative"
    >
      <div className="max-w-7xl mx-auto">
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

        {/* Main Feature Showcase */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={carouselRef}
              className="flex w-full transition-transform duration-1000 ease-in-out"
              style={{
                width: `${features.length * 100}%`,
                transform: `translateX(-${
                  currentFeature * (100 / features.length)
                }%)`,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="w-full shrink-0 relative px-4"
                  style={{ width: `${100 / features.length}%` }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center py-8 min-h-[500px]">
                    {/* Content Side */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 mb-6">
                          {feature.description}
                        </p>
                      </div>

                      {/* Feature Items Grid */}
                      <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                        {feature.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="feature-item group relative"
                            whileHover={{ scale: 1.05, y: -3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Circular tablet background */}
                            <div
                              className="relative p-4 rounded-full border-2 transition-all duration-300 cursor-pointer hover:shadow-lg"
                              style={{
                                borderColor:
                                  currentFeature === index
                                    ? feature.color
                                    : "#d1d5db",
                                backgroundColor:
                                  currentFeature === index
                                    ? `${feature.color}10`
                                    : "transparent",
                                boxShadow:
                                  currentFeature === index
                                    ? `0 0 20px ${feature.color}20`
                                    : "none",
                              }}
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className="p-3 rounded-full shrink-0 transition-all duration-300"
                                  style={{
                                    backgroundColor: `${feature.color}20`,
                                    border: `2px solid ${feature.color}40`,
                                  }}
                                >
                                  <item.icon
                                    size={20}
                                    style={{ color: feature.color }}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-semibold text-black text-sm mb-1 truncate">
                                    {item.title}
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative">
                      <motion.div
                        className="relative rounded-xl overflow-hidden aspect-4/3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${feature.color}15 0%, transparent 50%)`,
                          }}
                        />
                      </motion.div>

                      {/* Floating badge */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
                        style={{
                          borderColor: feature.color,
                          backgroundColor: `${feature.color}20`,
                        }}
                        animate={{
                          y: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span
                          className="text-lg font-bold"
                          style={{ color: feature.color }}
                        >
                          {feature.id}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToFeature(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature
                      ? "bg-[#57bb5b] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
