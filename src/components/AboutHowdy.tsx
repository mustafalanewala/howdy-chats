"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHowdy() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Graphics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Infinite GIF Animation */}
            <div className="relative w-96 h-96 mx-auto rounded-2xl overflow-hidden">
              <img
                src="/about.gif"
                alt="Animated blobs"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                About <span className="text-[#57bb5b] italic">Howdy</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                Howdy brings back the warmth of genuine conversation in our
                digital world. We believe that every message should carry the
                emotion, tone, and authenticity that makes human connection
                special. From voice messages that capture your true feelings to
                styled chats that express your personality –
                <span className="text-[#57bb5b] italic">
                  {" "}
                  we're here to make every conversation count
                </span>
                .
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#57bb5b] text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:bg-[#4a9e4a] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Learn More</span>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
