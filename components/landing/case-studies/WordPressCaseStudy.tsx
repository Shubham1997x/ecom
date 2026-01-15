"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function WordPressCaseStudy() {
  const features = [
    "WooCommerce custom development",
    "Custom plugin development",
    "Theme customization & design",
    "Multi-vendor marketplace setup",
    "Advanced product management",
  ];

  const metrics = [
    { value: "+38%", label: "Conversion Rate", percentage: 38, color: "bg-blue-500", textColor: "text-blue-500" },
    { value: "1.8s", label: "Load Time", percentage: 90, color: "bg-green-500", textColor: "text-green-500" },
    { value: "+55%", label: "Revenue Growth", percentage: 55, color: "bg-purple-500", textColor: "text-purple-500" },
  ];

  return (
    <section id="wordpress" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
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
              Case Study 02
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
            WordPress E-Commerce Development
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Powerful WooCommerce solutions with complete control over functionality and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:order-2"
          >
            <Card className="p-0 bg-white overflow-hidden border-0 shadow-none">
              <div className="aspect-video w-full h-full relative bg-white">
                <Image
                  src="/images/wordpress.svg"
                  alt="WordPress Store Preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Card>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 lg:order-1"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
              <div className="space-y-2.5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-cta"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Typical Timeline:</span>
                <span>6-10 weeks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">WooCommerce</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">PHP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">React</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Section with Infographics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-4 bg-white border-gray-200 hover:border-primary-cta/30 transition-colors h-full">
                  <div className="flex items-center gap-4">
                    {/* Compact Circular Progress */}
                    <div className="relative flex-shrink-0">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="6"
                          className="text-gray-100"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinecap="round"
                          className={metric.textColor}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: metric.percentage / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          className={`text-sm font-bold ${metric.textColor}`}
                        >
                          {metric.percentage}%
                        </motion.span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl font-bold text-gray-900 mb-0.5">{metric.value}</div>
                      <div className="text-xs font-medium text-gray-600">{metric.label}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

