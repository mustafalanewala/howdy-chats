"use client";

import { useEffect, useRef } from "react";

export default function SeeWhatsNew() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  const items = [
    {
      id: 1,
      title: "Real Time Translation",
      description:
        "Instant language translation for seamless global communication",
      icon: "🌐",
      color: "#57bb5b",
    },
    {
      id: 2,
      title: "Planner",
      description: "Smart scheduling and event planning made easy",
      icon: "📅",
      color: "#ff6b6b",
    },
    {
      id: 3,
      title: "To-do Tasks",
      description: "Organize and track your daily tasks efficiently",
      icon: "✅",
      color: "#4ecdc4",
    },
    {
      id: 4,
      title: "Reminders",
      description: "Never miss important events and deadlines",
      icon: "🔔",
      color: "#45b7d1",
    },
    {
      id: 5,
      title: "Add to Notes",
      description: "Save important information for later reference",
      icon: "📝",
      color: "#f7b731",
    },
    {
      id: 6,
      title: "Music - Real Time",
      description: "Share and enjoy music together in real-time",
      icon: "🎵",
      color: "#9b59b6",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#57bb5b] relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-black">
            See What's <span className="text-white">New</span>
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Discover the latest features and updates in Howdy Chats
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex animate-marquee"
            style={{
              width: "200%", // Double width for seamless loop
            }}
          >
            {/* First set of 6 items (3 per row, 2 rows) */}
            <div className="w-1/2 px-4">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {items.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6">
                {items.slice(3, 6).map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="w-1/2 px-4">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {items.slice(0, 3).map((item) => (
                  <div
                    key={`duplicate-${item.id}`}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6">
                {items.slice(3, 6).map((item) => (
                  <div
                    key={`duplicate-${item.id}`}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
