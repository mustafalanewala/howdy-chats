"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">
      <Navbar />

      {/* About Us Intro Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-[#57bb5b]">Us</span>
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Curious about the name?{" "}
              <span className="font-semibold text-[#57bb5b]">Howdy</span>, a
              friendly greeting that embodies warmth and connection. True to its
              name, it can be used to connect with your friends and family in
              the most authentic way possible.
            </p>

            <p>
              Howdy was born out of the vision to create an instant messaging
              application that's simple, secure, and built for genuine human
              connection. You can use the app to send messages, share media and
              documents, make audio and video calls, share moments through
              status updates, create community channels, and much more. As a
              business, you can also use the application to share your content
              with a wider audience and build meaningful relationships with your
              customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-6 bg-[#57bb5b] text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-left">
            Howdy's commitment to security
          </h2>
          <div className="text-lg md:text-xl text-black/80 leading-relaxed space-y-6 text-left">
            <p>
              With any exchange of data over the internet, security is key.
              Howdy is built on the mission to keep your communication safe.
              This is carried out through end-to-end encrypted calls.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              The foundation
            </h3>
            <p>
              Howdy was developed with a focus on privacy and security. Our
              commitment to user privacy and industry-leading security practices
              has been the foundation of Howdy as a messaging app that has an
              unwavering commitment to security.
            </p>
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
