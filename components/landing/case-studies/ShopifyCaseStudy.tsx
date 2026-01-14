"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, TrendingUp, Zap, DollarSign, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ShopifyCaseStudy() {
  const features = [
    "Custom theme development & design",
    "Shopify app integration & customization",
    "Performance optimization & SEO",
    "Payment gateway integration",
    "Mobile-first responsive design",
  ];

  const metrics = [
    { icon: TrendingUp, value: "+45%", label: "Conversion Rate", description: "Average increase" },
    { icon: Zap, value: "2.1s", label: "Load Time", description: "Page speed" },
    { icon: DollarSign, value: "+62%", label: "Revenue Growth", description: "6 months" },
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
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-cta/10">
              <ShoppingBag className="w-6 h-6 text-primary-cta" />
            </div>
            <div className="px-4 py-1.5 bg-primary-cta/10 text-primary-cta rounded-full text-sm font-medium">
              Case Study 01
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Shopify Custom Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Transform your Shopify store with custom themes, apps, and integrations. Our Shopify solutions are designed to maximize conversions and streamline operations for e-commerce businesses of all sizes.
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
              <h3 className="text-xl font-semibold text-gray-900">Key Features & Capabilities</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-lg bg-primary-cta/10 flex items-center justify-center group-hover:bg-primary-cta/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary-cta" />
                      </div>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed pt-0.5">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
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
            <Card className="p-6 bg-white border-gray-200 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-cta/10 via-primary-cta/5 to-transparent rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <ShoppingBag className="w-20 h-20 text-primary-cta/30 mx-auto mb-4" />
                  <p className="text-sm text-gray-500">Shopify Store Preview</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-6 bg-white border-gray-200 hover:border-primary-cta/30 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-cta/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-cta" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.description}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

