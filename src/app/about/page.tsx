"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            About <span className="text-[#57bb5b]">Howdy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl">
            Coming soon... Learn more about our mission to revolutionize digital
            communication.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
