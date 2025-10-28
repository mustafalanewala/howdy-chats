"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.3 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@howdychats.com",
      action: "mailto:hello@howdychats.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Start a conversation",
      action: "#",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come see us in person",
      contact: "San Francisco, CA",
      action: "#",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with Howdy Chats?",
      answer:
        "Simply sign up for an account and start connecting with friends through voice messages and styled chats.",
    },
    {
      question: "Is Howdy Chats free to use?",
      answer:
        "We offer a free tier with basic features, and premium plans for advanced functionality.",
    },
    {
      question: "What platforms does Howdy Chats support?",
      answer:
        "We're available on iOS, Android, and web browsers for maximum accessibility.",
    },
    {
      question: "How secure are my conversations?",
      answer:
        "We use end-to-end encryption and prioritize your privacy in all communications.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#57bb5b] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Get in <span className="text-[#57bb5b] italic">Touch</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Have questions? Want to join our mission? We'd love to hear from
              you. Reach out and let's start an authentic conversation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#57bb5b] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-[#4a9e4c] transition-all duration-300 shadow-lg hover:shadow-[#57bb5b]/25"
              >
                Send Message
                <Send size={20} />
              </motion.a>

              <motion.a
                href="#contact-info"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#57bb5b] text-[#57bb5b] px-8 py-4 rounded-full font-semibold hover:bg-[#57bb5b] hover:text-black transition-all duration-300"
              >
                Contact Info
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods Section */}
      <section id="contact-info" ref={infoRef} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Multiple Ways to <span className="text-[#57bb5b]">Connect</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 hover:from-[#57bb5b]/5 hover:to-[#57bb5b]/10 transition-all duration-500 border-2 border-gray-100 hover:border-[#57bb5b]/30 shadow-lg hover:shadow-xl group text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-linear-to-br from-[#57bb5b] to-[#4a9e4c] rounded-2xl p-4 w-fit mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <method.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <p className="text-[#57bb5b] font-semibold bg-[#57bb5b]/10 px-4 py-2 rounded-full inline-block">
                  {method.contact}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" ref={formRef} className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Send us a <span className="text-[#57bb5b]">Message</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 text-white"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-[#57bb5b] focus:outline-none transition-colors duration-300 text-white placeholder-white/50"
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 text-white"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-[#57bb5b] focus:outline-none transition-colors duration-300 text-white placeholder-white/50"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-semibold mb-3 text-white"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-[#57bb5b] focus:outline-none transition-colors duration-300 text-white"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="press">Press Inquiry</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-3 text-white"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-[#57bb5b] focus:outline-none transition-colors duration-300 text-white placeholder-white/50 resize-none"
                placeholder="Tell us how we can help you..."
              />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-3 bg-[#57bb5b] text-white px-8 py-4 rounded-full font-semibold"
                >
                  <CheckCircle size={20} />
                  Message Sent Successfully!
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#57bb5b] text-black px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#4a9e4c] transition-all duration-300 shadow-lg hover:shadow-[#57bb5b]/25 flex items-center gap-3 mx-auto"
                >
                  Send Message
                  <ArrowRight size={20} />
                </motion.button>
              )}
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-32 px-6 bg-[#57bb5b]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-black/10 rounded-3xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-black">
                  {faq.question}
                </h3>
                <p className="text-black/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
