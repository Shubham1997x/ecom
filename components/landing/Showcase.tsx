"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Store, Code, TrendingUp } from "lucide-react";

export function Showcase() {
  const caseStudies = [
    {
      id: "shopify",
      step: "01",
      title: "Shopify Custom Solutions",
      description: "Transform your Shopify store with custom themes, apps, and integrations. Our Shopify solutions are designed to maximize conversions and streamline operations for e-commerce businesses of all sizes.",
      features: [
        "Custom theme development & design",
        "Shopify app integration & customization",
        "Performance optimization & SEO",
        "Payment gateway integration",
        "Mobile-first responsive design",
      ],
      icon: ShoppingBag,
      metrics: {
        conversion: "+45%",
        speed: "2.1s",
        revenue: "+62%",
      },
    },
    {
      id: "wordpress",
      step: "02",
      title: "WordPress E-Commerce Development",
      description: "Build powerful, scalable WordPress e-commerce websites with WooCommerce. We create custom solutions that give you complete control over your online store's functionality and design.",
      features: [
        "WooCommerce custom development",
        "Custom plugin development",
        "Theme customization & design",
        "Multi-vendor marketplace setup",
        "Advanced product management",
      ],
      icon: Store,
      metrics: {
        conversion: "+38%",
        speed: "1.8s",
        revenue: "+55%",
      },
    },
    {
      id: "other",
      step: "03",
      title: "Custom E-Commerce Platforms",
      description: "For businesses with unique requirements, we build fully custom e-commerce solutions from the ground up. Tailored to your specific needs with modern technologies and best practices.",
      features: [
        "Full-stack custom development",
        "Headless commerce architecture",
        "API-first integrations",
        "Scalable cloud infrastructure",
        "Enterprise-grade security",
      ],
      icon: Code,
      metrics: {
        conversion: "+52%",
        speed: "1.5s",
        revenue: "+71%",
      },
    },
    {
      id: "comparison",
      step: "04",
      title: "Platform Comparison & Strategy",
      description: "Not sure which platform is right for your business? We analyze your needs and recommend the best solution. Our strategic approach ensures you choose the platform that will drive the most growth.",
      features: [
        "Platform analysis & recommendations",
        "Migration planning & execution",
        "Multi-platform integration",
        "Performance benchmarking",
        "ROI optimization strategies",
      ],
      icon: TrendingUp,
      metrics: {
        conversion: "+41%",
        speed: "1.9s",
        revenue: "+58%",
      },
    },
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-3 sm:mb-4 text-sm sm:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Case Studies
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 font-normal px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proven E-Commerce Solutions
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our successful case studies across Shopify, WordPress, and custom platforms. See how we've helped businesses transform their online presence.
          </motion.p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                id={study.id}
                className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex items-center gap-2 bg-primary-cta/10 text-primary-cta px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
                      <span>{study.step}</span>
                    </div>
                    <Icon className="w-5 h-5 text-primary-cta" />
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 font-normal">
                    {study.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {study.description}
                  </p>

                  <ul className="space-y-2.5 sm:space-y-3">
                    {study.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-cta/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-cta rounded-full" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-2xl font-semibold text-primary-cta mb-1">
                        {study.metrics.conversion}
                      </div>
                      <div className="text-xs text-gray-600">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-primary-cta mb-1">
                        {study.metrics.speed}
                      </div>
                      <div className="text-xs text-gray-600">Load Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-primary-cta mb-1">
                        {study.metrics.revenue}
                      </div>
                      <div className="text-xs text-gray-600">Revenue Growth</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-full h-64 sm:h-80 md:h-96 bg-linear-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                      <Icon className="w-16 h-16 text-primary-cta/40 mx-auto mb-2" />
                      <span className="text-gray-400 text-sm">Case Study Image</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

