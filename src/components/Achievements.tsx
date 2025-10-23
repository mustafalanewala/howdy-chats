"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Users, Globe, Zap } from "lucide-react";

const stats = [
  { icon: MessageCircle, value: 2.5, label: "Million Messages", suffix: "M+" },
  { icon: Users, value: 150, label: "Active Users", suffix: "K+" },
  { icon: Globe, value: 85, label: "Countries Connected", suffix: "+" },
  { icon: Zap, value: 99.9, label: "Uptime Reliability", suffix: "%" },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          const newValue = Math.min(stepValue * currentStep, stat.value);
          // Handle decimal values properly
          newCounts[index] =
            stat.value % 1 !== 0
              ? Math.min(parseFloat(newValue.toFixed(1)), stat.value)
              : Math.min(Math.floor(newValue), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 text-center whitespace-nowrap">
          Our <span className="text-[#e0fd60]">Impact</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 border border-gray-800 hover:border-[#e0fd60] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-6 text-[#e0fd60]" />
              <div className="text-5xl md:text-6xl font-bold mb-4">
                {typeof counts[index] === "number" && counts[index] % 1 !== 0
                  ? counts[index].toFixed(1)
                  : counts[index]}
                {stat.suffix}
              </div>
              <div className="text-xl text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
            "Howdy isn't just about messaging - it's about bringing back the
            warmth and authenticity to digital conversations, one 'howdy' at a
            time."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
