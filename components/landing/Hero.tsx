"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {

  const handleTryNow = () => {
    // Scroll to solutions section
    const solutions = document.querySelector("#solutions");
    if (solutions) {
      solutions.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-cta/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary-cta/20 bg-white/80"
            >
              <div className="w-2 h-2 bg-primary-cta rounded-full animate-pulse" />
              <span className="text-sm text-gray-700 font-medium">
                Custom E-Commerce Solutions
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-5xl text-gray-900 leading-tight font-normal"
              >
                Elevate Your Online Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed max-w-xl"
              >
                Discover how our expert website solutions can transform your Shopify, WordPress, and custom sites into powerful online platforms.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                type="button"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                aria-label="Get started with your project"
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-cta hover:bg-primary-cta-hover text-white rounded-xl text-base font-light hover:shadow-sm hover:shadow-primary-cta/50 transition-all duration-300 overflow-hidden cursor-pointer flex"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Case Studies
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="absolute inset-0 bg-primary-cta/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  aria-hidden="true"
                ></span>
              </motion.button>
              <motion.button
                type="button"
                onClick={handleTryNow}
                aria-label="View our solutions"
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl text-base font-light hover:shadow-sm hover:shadow-gray-300/40 transition-all duration-300 overflow-hidden cursor-pointer flex"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start your Journey
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="absolute inset-0 bg-gray-200/40 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  aria-hidden="true"
                ></span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {[
                { value: "200+", label: "Stores Built" },
                { value: "+45%", label: "Avg. Conversion" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl text-primary-cta mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src="/images/Wantace.png"
                alt="E-commerce solutions hero"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [0, 8, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        onClick={() => {
          const nextSection = document.querySelector("#case-studies");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}

