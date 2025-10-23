"use client";

import { useEffect, useRef, useState } from "react";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#57bb5b] text-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <h2
          className={`text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Communication is not
          <br />
          just what you say.
          <br />
          It's how you
          <br />
          <span className="italic">connect.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              number: "01",
              title: "Authentic",
              text: "Real conversations with genuine expressions and emotions",
            },
            {
              number: "02",
              title: "Expressive",
              text: "Voice messages, reactions, and styles that match your mood",
            },
            {
              number: "03",
              title: "Connected",
              text: "Breaking barriers with global reach and local charm",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-6xl font-bold opacity-20 mb-4">
                {item.number}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg opacity-80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
