"use client";

import { motion } from "framer-motion";
import { BarChart3, ArrowRight, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export function PlatformComparisonCaseStudy() {
  const services = [
    "Platform analysis & recommendations",
    "Migration planning & execution",
    "Multi-platform integration",
    "Performance benchmarking",
    "ROI optimization strategies",
  ];

  const comparisonData = [
    { platform: "Shopify", bestFor: "Quick setup, app ecosystem", complexity: "Low" },
    { platform: "WordPress", bestFor: "Flexibility, customization", complexity: "Medium" },
    { platform: "Custom", bestFor: "Unique requirements", complexity: "High" },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="px-4 py-1.5 bg-primary-cta/10 text-primary-cta rounded-full text-sm font-medium">
              Case Study 04
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Platform Comparison & Strategy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Not sure which platform is right for your business? We analyze your needs and recommend the best solution. Our strategic approach ensures you choose the platform that will drive the most growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
              <div className="space-y-2.5">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-cta"></div>
                    <span className="text-sm text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Analysis Timeline:</span>
                <span>1-2 weeks</span>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Card className="p-6 bg-white border-gray-200 shadow-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-primary-cta" />
                  <h3 className="text-lg font-semibold text-gray-900">Platform Comparison</h3>
                </div>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-lg border border-gray-200 hover:border-primary-cta/30 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{item.platform}</div>
                        <div className="text-sm text-gray-600">{item.bestFor}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Complexity</div>
                        <div className="text-sm font-medium text-gray-700">{item.complexity}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary-cta/5 to-primary-cta/10 border-primary-cta/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Choose Your Platform?</h3>
                <p className="text-gray-600">Let us analyze your business needs and recommend the perfect solution.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 bg-primary-cta text-white rounded-lg font-medium hover:bg-primary-cta-hover transition-colors whitespace-nowrap"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

