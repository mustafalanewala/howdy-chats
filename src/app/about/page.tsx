"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Heart,
  Users,
  MessageCircle,
  Zap,
  Globe,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Animated counter hook
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isStatsInView) return;

      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * (end - startCount) + startCount));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isStatsInView, end, duration]);

    return count;
  };

  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      description:
        "We believe in real conversations that build genuine relationships, not just digital interactions.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Every feature we build puts our community at the center, fostering meaningful connections.",
    },
    {
      icon: Shield,
      title: "Privacy & Trust",
      description:
        "Your conversations are yours. We prioritize security and privacy in everything we do.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connecting people across cultures and distances, breaking down barriers to communication.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly pushing boundaries to make digital communication more natural and expressive.",
    },
    {
      icon: Sparkles,
      title: "Joy in Communication",
      description:
        "Making every conversation delightful with personality, style, and authentic expression.",
    },
  ];

  const stats = [
    { number: useCountUp(50000), label: "Active Users", suffix: "+" },
    { number: useCountUp(2), label: "Million Messages", suffix: "M+" },
    { number: useCountUp(150), label: "Countries", suffix: "+" },
    { number: useCountUp(99), label: "Uptime", suffix: ".9%" },
  ];

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're building the future of
              <br />
              <span className="text-[#57bb5b] italic">authentic</span>{" "}
              communication
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              At Howdy Chats, we believe that every conversation should feel as
              natural and expressive as talking face-to-face. We're on a mission
              to bring back the soul of communication in our digital world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#57bb5b] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-[#4a9e4c] transition-all duration-300 shadow-lg hover:shadow-[#57bb5b]/25"
              >
                Join Our Mission
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="/features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#57bb5b] text-[#57bb5b] px-8 py-4 rounded-full font-semibold hover:bg-[#57bb5b] hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-32 px-6 bg-[#57bb5b] text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl mb-6 opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                To revolutionize digital communication by creating a platform
                where authenticity, expression, and genuine human connection
                thrive. We believe technology should amplify our humanity, not
                diminish it.
              </motion.p>
              <motion.p
                className="text-lg opacity-80"
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Every voice message, every styled chat, every reaction is
                designed to help you express yourself more naturally and connect
                more deeply with the people who matter most.
              </motion.p>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: MessageCircle, label: "Voice First" },
                    { icon: Heart, label: "Emotion Rich" },
                    { icon: Users, label: "Community Driven" },
                    { icon: Sparkles, label: "Authentically You" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="bg-black rounded-2xl p-6 mb-4 mx-auto w-fit">
                        <item.icon size={32} className="text-[#57bb5b]" />
                      </div>
                      <p className="font-semibold">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[#57bb5b]">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 hover:from-[#57bb5b]/5 hover:to-[#57bb5b]/10 transition-all duration-500 border-2 border-gray-100 hover:border-[#57bb5b]/30 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-linear-to-br from-[#57bb5b] to-[#4a9e4c] rounded-2xl p-4 w-fit mb-6 shadow-md">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-32 px-6 bg-black border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Making an <span className="text-[#57bb5b]">Impact</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold text-[#57bb5b] mb-4">
                  {stat.number}
                  {stat.suffix}
                </div>
                <p className="text-white text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to join the conversation?
          </motion.h2>
          <motion.p
            className="text-xl mb-12 opacity-70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Be part of the future of authentic digital communication. Join
            thousands of users who are already experiencing the difference.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#57bb5b] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#4a9e4c] transition-all duration-300 shadow-lg inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get Started Today
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
