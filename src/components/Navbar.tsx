"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LogIn,
  ChevronRight,
  Download,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isHamburgerOpen &&
        !(event.target as Element).closest(".hamburger-menu")
      ) {
        setIsHamburgerOpen(false);
      }
      if (
        isFeaturesDropdownOpen &&
        !(event.target as Element).closest(".features-dropdown")
      ) {
        setIsFeaturesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isHamburgerOpen, isFeaturesDropdownOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const featuresDropdownItems = [
    { name: "iFeed", href: "/features/ifeed" },
    { name: "Profile", href: "/features/profile" },
    { name: "Shots", href: "/features/shots" },
    { name: "Chat Translator", href: "/features/chat-translator" },
    { name: "Planner", href: "/features/planner" },
    { name: "Channels", href: "/features/channels" },
    { name: "Discover", href: "/features/discover" },
  ];

  const hamburgerItems = [
    { name: "Blogs", href: "/blogs" },
    { name: "Developers", href: "/developers" },
    { name: "Creators", href: "/creators" },
    { name: "Business", href: "/business" },
    { name: "Careers", href: "/careers" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black border-b border-gray-800/50" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu and Logo Group */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu - Desktop */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                className="hidden lg:flex text-white hover:text-[#57bb5b] transition-colors duration-300 p-2"
              >
                <Menu size={20} />
              </motion.button>

              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold cursor-pointer"
              >
                <span className="text-white">Howdy Chats</span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Home and About */}
              {navItems.slice(0, 2).map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative text-white hover:text-[#57bb5b] transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#57bb5b] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}

              {/* Features Dropdown */}
              <div className="relative features-dropdown">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() =>
                    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)
                  }
                  className="relative text-white hover:text-[#57bb5b] transition-colors duration-300 font-medium group flex items-center gap-1"
                >
                  Features
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isFeaturesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#57bb5b] transition-all duration-300 group-hover:w-full"></span>
                </motion.button>

                <AnimatePresence>
                  {isFeaturesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 w-56 bg-black/95 backdrop-blur-lg border border-gray-800/50 rounded-2xl shadow-xl overflow-hidden"
                    >
                      {featuresDropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-3 text-white hover:text-[#57bb5b] hover:bg-[#57bb5b]/10 transition-all duration-300 text-sm font-medium"
                          onClick={() => setIsFeaturesDropdownOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* News and Contact */}
              {navItems.slice(2).map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 4) * 0.1 + 0.3 }}
                  className="relative text-white hover:text-[#57bb5b] transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#57bb5b] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              <div className="flex gap-3">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#57bb5b] text-[#57bb5b] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#57bb5b] hover:text-black transition-all duration-300"
                >
                  <Download size={18} />
                  Download App
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#57bb5b] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#4a9e4c] transition-all duration-300 shadow-lg hover:shadow-[#57bb5b]/25"
                >
                  <LogIn size={18} />
                  Login
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:hidden text-white hover:text-[#57bb5b] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800/50"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col space-y-6">
                  {/* Home and About */}
                  {navItems.slice(0, 2).map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={itemVariants}
                      className="text-white hover:text-[#57bb5b] transition-colors duration-300 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  {/* Mobile Features Dropdown */}
                  <div className="space-y-4">
                    <motion.button
                      variants={itemVariants}
                      onClick={() =>
                        setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)
                      }
                      className="text-white hover:text-[#57bb5b] transition-colors duration-300 font-medium text-lg flex items-center gap-2"
                    >
                      Features
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isFeaturesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {isFeaturesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 space-y-3"
                        >
                          {featuresDropdownItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block text-gray-300 hover:text-[#57bb5b] transition-colors duration-300 text-base"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsFeaturesDropdownOpen(false);
                              }}
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* News and Contact */}
                  {navItems.slice(2).map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={itemVariants}
                      className="text-white hover:text-[#57bb5b] transition-colors duration-300 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <motion.button
                    variants={itemVariants}
                    className="border-2 border-[#57bb5b] text-[#57bb5b] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#57bb5b] hover:text-black transition-all duration-300 w-fit"
                  >
                    <Download size={18} />
                    Download App
                  </motion.button>

                  <motion.button
                    variants={itemVariants}
                    className="bg-[#57bb5b] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#4a9e4c] transition-all duration-300 w-fit"
                  >
                    <LogIn size={18} />
                    Login
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full-Screen Hamburger Menu */}
        <AnimatePresence>
          {isHamburgerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-start justify-start pt-32 pl-12 hamburger-overlay"
              onClick={() => setIsHamburgerOpen(false)}
            >
              <div className="absolute top-6 right-6">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHamburgerOpen(false);
                  }}
                  className="text-white hover:text-[#57bb5b] transition-colors duration-300 p-2"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="text-left" onClick={(e) => e.stopPropagation()}>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-16"
                >
                  Menu
                </motion.h2>

                <div className="space-y-12">
                  {hamburgerItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group flex items-center text-3xl md:text-5xl font-bold text-white hover:text-[#57bb5b] transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsHamburgerOpen(false);
                      }}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#57bb5b] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronRight
                        size={32}
                        className="ml-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
}
