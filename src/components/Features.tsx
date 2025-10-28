"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    id: "howdy-chats",
    title: "Howdy Chats",
    subtitle: "One-to-One & Group Chats",
    description:
      "Chat instantly with friends and groups using your number messages, media, and calls made easy.",
    shortDesc: "Instant messaging with friends and groups",
    image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
    color: "#57bb5b",
  },
  {
    id: "direct-messages",
    title: "Direct Messages",
    subtitle: "From Posts & Reels",
    description:
      "Send private messages straight from posts, reels, or status updates.",
    shortDesc: "Private messaging from any content",
    image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg",
    color: "#ff6b6b",
  },
  {
    id: "channels",
    title: "Reach Your Followers",
    subtitle: "Channels",
    description:
      "Share updates, polls, and media with all your followers in one go.",
    shortDesc: "Broadcast to all your followers instantly",
    image: "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg",
    color: "#4ecdc4",
  },
  {
    id: "status",
    title: "Share Your Moments",
    subtitle: "Status",
    description:
      "Post text, photos, videos, or GIFs and let friends react instantly.",
    shortDesc: "Express yourself with disappearing content",
    image: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg",
    color: "#45b7d1",
  },
  {
    id: "profile",
    title: "Make Your Profile Yours",
    subtitle: "Profile",
    description:
      "Show off your style with bio, photos, music, links, and highlights.",
    shortDesc: "Customize your personal brand",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    color: "#f7b731",
  },
  {
    id: "shots",
    title: "Create & Remix Videos",
    subtitle: "Shots",
    description:
      "Record, edit, and remix short videos with fun effects and stickers.",
    shortDesc: "Professional video creation tools",
    image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg",
    color: "#ff6b6b",
  },
  {
    id: "discover",
    title: "Explore & Stay Updated",
    subtitle: "iFeed & Discover",
    description:
      "Discover trending posts, reels, events, and content from your network.",
    shortDesc: "Personalized content discovery",
    image: "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg",
    color: "#4ecdc4",
  },
  {
    id: "planner",
    title: "Plan Your Day",
    subtitle: "Planner",
    description: "Organize tasks, events, and reminders, solo or with friends.",
    shortDesc: "Smart scheduling and organization",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    color: "#f7b731",
  },
  {
    id: "creators",
    title: "Grow as a Creator",
    subtitle: "For Creators",
    description:
      "Reach more people, track engagement, and grow your audience effortlessly.",
    shortDesc: "Creator tools and analytics",
    image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
    color: "#57bb5b",
  },
  {
    id: "business",
    title: "Grow Your Business",
    subtitle: "For Business",
    description:
      "Promote your brand, connect with customers, and measure results easily.",
    shortDesc: "Business promotion and analytics",
    image: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg",
    color: "#45b7d1",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main section animation
      gsap.from(".features-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".features-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-subtitle",
          start: "top 90%",
        },
      });

      // Stagger animation for feature items
      gsap.from(".feature-item", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 80%",
        },
      });

      // Feature text animations
      gsap.from(".feature-text", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-text",
          start: "top 85%",
        },
      });

      // Parallax effect for images
      gsap.utils.toArray(".feature-image").forEach((image: any) => {
        gsap.fromTo(
          image,
          { y: 0 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Hover effects for images
      gsap.utils.toArray(".feature-image").forEach((image: any) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(image, { scale: 1.03, duration: 0.3, ease: "power2.out" });

        image.addEventListener("mouseenter", () => tl.play());
        image.addEventListener("mouseleave", () => tl.reverse());
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
          <h2 className="features-title text-4xl md:text-6xl font-bold uppercase mb-4 text-black">
            Super <span className="text-[#57bb5b]">Features</span>
          </h2>
          <p className="features-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of digital communication
          </p>
        </div>

        {/* Features Layout - Single Continuous Grid */}
        <div className="feature-grid grid lg:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-16">
            {features
              .filter((_, index) => index % 2 === 0)
              .map((feature, index) => (
                <div key={feature.id} className="feature-item space-y-6">
                  <div className="relative">
                    <a href={`/features/${feature.id}`}>
                      <div
                        className="feature-image relative rounded-xl overflow-hidden cursor-pointer max-w-lg image-hover group"
                        style={{ aspectRatio: index === 1 ? "5/4" : "2.5/3.5" }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${feature.color}15 0%, transparent 50%)`,
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="feature-text space-y-2 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {feature.shortDesc}
                    </p>
                    <p className="text-gray-700 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {/* Space Block */}
            <div className="h-32 lg:h-40"></div>
            {features
              .filter((_, index) => index % 2 === 1)
              .map((feature, index) => (
                <div key={feature.id} className="feature-item space-y-6">
                  <div className="relative">
                    <a href={`/features/${feature.id}`}>
                      <div
                        className="feature-image relative rounded-xl overflow-hidden cursor-pointer max-w-lg image-hover group"
                        style={{ aspectRatio: index === 3 ? "5/4" : "2.5/3.5" }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${feature.color}15 0%, transparent 50%)`,
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="feature-text space-y-2 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {feature.shortDesc}
                    </p>
                    <p className="text-gray-700 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
