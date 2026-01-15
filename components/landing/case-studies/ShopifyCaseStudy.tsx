"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ShopifyCaseStudy() {
  const features = [
    "Custom theme development & design",
    "Shopify app integration & customization",
    "Performance optimization & SEO",
    "Payment gateway integration",
    "Mobile-first responsive design",
  ];

  const metrics = [
    { value: "+45%", label: "Conversion Rate", percentage: 45, color: "bg-blue-500", textColor: "text-blue-500" },
    { value: "2.1s", label: "Load Time", percentage: 85, color: "bg-green-500", textColor: "text-green-500" },
    { value: "+62%", label: "Revenue Growth", percentage: 62, color: "bg-purple-500", textColor: "text-purple-500" },
  ];

  return (
    <section id="shopify" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50">
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
              Case Study 01
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
            Shopify Custom Solutions
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Custom themes, apps, and integrations that maximize conversions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
              <div className="space-y-2.5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
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
                <span>4-6 weeks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Shopify Plus</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Liquid</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">React</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Card className="p-0 bg-white border-gray-200 shadow-lg overflow-hidden">
              <div className="aspect-video w-full h-full relative">
                <Image
                  src="/images/shopify.jpg"
                  alt="Shopify Store Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Card>
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

