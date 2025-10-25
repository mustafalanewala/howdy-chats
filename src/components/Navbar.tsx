"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isHamburgerOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
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
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
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
                  {navItems.map((item) => (
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
