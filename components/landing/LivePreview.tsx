"use client";

import { motion } from "framer-motion";

export function LivePreview() {
  return (
    <section id="live-preview" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            See Our Work In Action
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore live examples of our Shopify and WordPress e-commerce websites. See the quality and attention to detail we bring to every project.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-96 bg-gradient-to-br from-primary-cta/10 via-primary-cta/5 to-transparent flex items-center justify-center">
            <span className="text-gray-400 text-lg">Live Preview Placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

