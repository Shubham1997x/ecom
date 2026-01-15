"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      title: "Consultation & Planning",
      description: "Understand your business and create a strategic plan.",
      number: "01",
      graphicType: "consultation",
    },
    {
      title: "Design & Development",
      description: "Build custom solutions with best practices.",
      icon: "wand",
      number: "02",
      graphicType: "development",
    },
    {
      title: "Launch & Optimization",
      description: "Launch your store and optimize for results.",
      number: "03",
      graphicType: "launch",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl text-black mb-4 font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple, streamlined process
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => {
            const getImageUrl = () => {
              switch (step.graphicType) {
                case "consultation":
                  return "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80";
                case "development":
                  return "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80";
                case "launch":
                  return "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80";
                default:
                  return "";
              }
            };

            return (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  {/* Graphics Section - Major */}
                  <div className="h-48 lg:h-56 rounded-md overflow-hidden relative flex items-center justify-center bg-white mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={getImageUrl()}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>
                    {/* Step Number */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-3xl font-light text-white opacity-30 drop-shadow-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Text Section - Minor */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl text-gray-900 mb-2 font-medium leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            type="button"
            onClick={() => window.location.href = "#"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary-cta hover:bg-primary-cta-hover text-white rounded-xl text-base font-light shadow-lg cursor-pointer"
            aria-label="Get started with your project"
          >
            <span className="relative z-10">Start Your Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

