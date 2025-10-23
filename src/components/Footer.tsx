"use client";

import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-[#57bb5b]">Howdy Chats</span>
            </h3>
            <p className="text-gray-400">
              Say howdy to authentic conversations that connect people
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#57bb5b] transition-colors cursor-pointer">
                About
              </li>
              <li className="hover:text-[#57bb5b] transition-colors cursor-pointer">
                Features
              </li>
              <li className="hover:text-[#57bb5b] transition-colors cursor-pointer">
                Contact
              </li>
              <li className="hover:text-[#57bb5b] transition-colors cursor-pointer">
                Download
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@howdy.com"
                className="flex items-center text-gray-400 hover:text-[#57bb5b] transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                hello@howdy.com
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-6 md:mb-0">
              © {currentYear} Howdy Chats. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:border-[#57bb5b] hover:bg-[#57bb5b] hover:bg-opacity-10 transition-all duration-300 hover-target"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:border-[#57bb5b] hover:bg-[#57bb5b] hover:bg-opacity-10 transition-all duration-300 hover-target"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:border-[#57bb5b] hover:bg-[#57bb5b] hover:bg-opacity-10 transition-all duration-300 hover-target"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
