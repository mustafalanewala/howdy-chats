"use client";

import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-[#57bb5b]">Howdy Chats</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Say howdy to authentic conversations that connect people
              worldwide.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href="mailto:hello@howdy.com"
                aria-label="Email Howdy"
                className="text-gray-400 hover:text-[#57bb5b] transition-colors flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-sm">hello@howdy.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/features"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="/roadmap"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/blog"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/terms"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="hover:text-[#57bb5b] transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-6 md:mb-0">
              © {currentYear} Howdy Chats. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm hidden sm:inline">
                Follow us
              </span>
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:border-[#57bb5b] hover:bg-[#57bb5b] hover:bg-opacity-10 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-200" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:border-[#57bb5b] hover:bg-[#57bb5b] hover:bg-opacity-10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-gray-200" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:border-[#57bb5b] hover:bg-[#57bb5b] hover:bg-opacity-10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
