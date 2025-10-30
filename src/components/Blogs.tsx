"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
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
  {
    title: "Smart Discovery",
    category: "AI Features",
    description: "Intelligent recommendations that understand your preferences",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  },
  {
    title: "Creative Sharing",
    category: "Content Creation",
    description: "Express yourself with stunning visual stories and posts",
    image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg",
  },
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerView = 2;
  const totalSlides = Math.ceil(blogs.length / itemsPerView);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 650);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 650);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
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
      className="min-h-screen py-20 px-6 bg-white text-black opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog <span className="text-[#57bb5b]">Section</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover insights and stories from the{" "}
          <span className="italic">Howdy</span> community
        </motion.p>

        <div className="relative">
          {/* Blog Grid Container */}
          <div className="overflow-hidden">
            <motion.div
              ref={scrollRef}
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                type: "tween",
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="grid grid-cols-2 gap-8 w-full shrink-0"
                >
                  {blogs
                    .slice(
                      slideIndex * itemsPerView,
                      (slideIndex + 1) * itemsPerView
                    )
                    .map((blog, index) => (
                      <div key={blog.title} className="group cursor-pointer">
                        <div className="relative overflow-hidden aspect-4/3 mb-6 rounded-2xl">
                          <div className="w-full h-full">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Hover Overlay */}
                          <motion.div
                            className="absolute top-6 right-6 w-12 h-12 bg-[#57bb5b] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ArrowUpRight className="w-6 h-6 text-white" />
                          </motion.div>

                          {/* Category Badge */}
                          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                            {blog.category}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <motion.h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#57bb5b] transition-colors duration-300">
                            {blog.title}
                          </motion.h3>
                          <motion.p className="text-gray-600 leading-relaxed">
                            {blog.description}
                          </motion.p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 650);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#57bb5b] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
