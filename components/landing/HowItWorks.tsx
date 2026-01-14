"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      title: "Consultation & Planning",
      description:
        "We start with a detailed consultation to understand your business, goals, and requirements. We analyze your target audience and create a strategic plan for your e-commerce website.",
    },
    {
      title: "Design & Development",
      description:
        "Our team creates custom designs and develops your website using best practices. We focus on user experience, conversion optimization, and mobile responsiveness throughout the process.",
    },
    {
      title: "Launch & Optimization",
      description:
        "After thorough testing, we launch your store and provide ongoing optimization. We monitor performance, make improvements, and ensure your website continues to drive results.",
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
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From initial consultation to successful launch and beyond
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-0 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />
              )}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4 font-normal leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto h-40 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-cta/10 to-primary-cta/5">
                  <span className="text-gray-400 text-sm">Preview</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
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

