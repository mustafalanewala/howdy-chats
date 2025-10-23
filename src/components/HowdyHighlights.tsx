"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Voice Stories",
    category: "Feature Showcase",
    description: "Authentic voice messages that bring conversations to life",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
  },
  {
    title: "Global Connections",
    category: "Community",
    description: "Breaking language barriers with real-time translation",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
  },
  {
    title: "Expressive Chats",
    category: "User Experience",
    description: "Styled conversations that match your mood and personality",
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg",
  },
  {
    title: "Secure Circles",
    category: "Privacy",
    description: "Private group conversations with end-to-end encryption",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".project-card")
              .forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("animate-slide-up");
                }, index * 150);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold uppercase mb-4">
          Howdy <span className="text-black">Highlights</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl">
          Discover what makes <span className="italic">Howdy</span> special -
          authentic features for genuine conversations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card opacity-0 group cursor-pointer hover-target"
            >
              <div className="relative overflow-hidden aspect-4/3 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#e0fd60] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm uppercase text-gray-500 tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
