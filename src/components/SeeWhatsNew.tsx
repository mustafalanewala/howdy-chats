"use client";

import { useEffect, useRef } from "react";

export default function SeeWhatsNew() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  const items = [
    {
      id: 1,
      content:
        "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
      color: "#57bb5b",
    },
    {
      id: 2,
      content:
        "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg",
      color: "#ff6b6b",
    },
    {
      id: 3,
      content:
        "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg",
      color: "#4ecdc4",
    },
    {
      id: 4,
      content:
        "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg",
      color: "#45b7d1",
    },
    {
      id: 5,
      content:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      color: "#f7b731",
    },
    {
      id: 6,
      content:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
      color: "#9b59b6",
    },
    {
      id: 7,
      content:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      color: "#e74c3c",
    },
    {
      id: 8,
      content:
        "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
      color: "#f39c12",
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
            {/* First set of 8 items (4 per row) */}
            <div className="w-1/2 px-4">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {items.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:border-white hover:bg-black/30 transition-all duration-300 cursor-pointer group"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <img
                      src={item.content}
                      alt={`Feature ${item.id}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {items.slice(4, 8).map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:border-white hover:bg-black/30 transition-all duration-300 cursor-pointer group"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <img
                      src={item.content}
                      alt={`Feature ${item.id}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="w-1/2 px-4">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {items.slice(0, 4).map((item) => (
                  <div
                    key={`duplicate-${item.id}`}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:border-white hover:bg-black/30 transition-all duration-300 cursor-pointer group"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <img
                      src={item.content}
                      alt={`Feature ${item.id}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {items.slice(4, 8).map((item) => (
                  <div
                    key={`duplicate-${item.id}`}
                    className="aspect-square rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:border-white hover:bg-black/30 transition-all duration-300 cursor-pointer group"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10 0%, transparent 50%)`,
                    }}
                  >
                    <img
                      src={item.content}
                      alt={`Feature ${item.id}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                    />
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
