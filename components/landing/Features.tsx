"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { 
  Tag, 
  Code, 
  LayoutDashboard, 
  Users, 
  Zap, 
  Headphones,
  type LucideIcon
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    id: "custom-design",
    title: "Custom Design & Branding",
    description: "Unique, conversion-optimized designs tailored to your brand identity and target audience.",
    icon: Tag,
  },
  {
    id: "platform-integration",
    title: "Platform Integration",
    description: "Seamless integration with payment gateways, shipping carriers, and third-party tools.",
    icon: Code,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics & Reporting",
    description: "Comprehensive dashboards to track sales, inventory, customer behavior, and performance metrics.",
    icon: LayoutDashboard,
  },
  {
    id: "multi-vendor",
    title: "Multi-Vendor Support",
    description: "Build marketplaces with multiple vendors, commission management, and vendor dashboards.",
    icon: Users,
  },
  {
    id: "performance",
    title: "High Performance & Speed",
    description: "Optimized for speed with fast load times, improved SEO, and better conversion rates.",
    icon: Zap,
  },
  {
    id: "support-training",
    title: "Ongoing Support & Training",
    description: "Dedicated support team, training sessions, and maintenance packages for your store.",
    icon: Headphones,
  },
];

interface IconAnimation {
  animate: {
    scale?: number;
    rotate?: number;
    opacity?: number;
    y?: number;
  };
  transition: {
    duration: number;
    repeat?: number;
    ease?: string | number[];
  };
}

interface FeaturesProps {
  id?: string;
}

export const Features = ({ id = "features" }: FeaturesProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIconAnimation = (featureId: string): IconAnimation => {
    if (shouldReduceMotion) {
      return {
        animate: {},
        transition: { duration: 0, repeat: 0, ease: "easeInOut" },
      };
    }

    switch (featureId) {
      case "custom-design":
        return {
          animate: {
            scale: 1.15,
            rotate: 10,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "platform-integration":
        return {
          animate: {
            scale: 1.1,
            opacity: 0.9,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "analytics-dashboard":
        return {
          animate: {
            scale: 1.12,
            y: -8,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "multi-vendor":
        return {
          animate: {
            scale: 1.15,
            rotate: -8,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "performance":
        return {
          animate: {
            scale: 1.2,
            rotate: -12,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "support-training":
        return {
          animate: {
            scale: 1.1,
            rotate: 5,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      default:
        return {
          animate: {},
          transition: { duration: 0, repeat: 0, ease: "easeInOut" },
        };
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-normal text-black mb-3">
            E-Commerce Solutions Built For Growth
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Product features">
          {features.map((feature, index) => {
            const iconAnimation = getIconAnimation(feature.id);
            return (
              <motion.article
                key={feature.id}
                className="group"
                role="listitem"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: shouldReduceMotion ? 0 : index * 0.05, 
                  duration: shouldReduceMotion ? 0 : 0.4, 
                  ease: "easeOut" 
                }}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="h-full p-6 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200">
                  <div className="mb-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                      className="inline-flex"
                    >
                      <motion.div
                        animate={hoveredCard === feature.id && !shouldReduceMotion ? iconAnimation.animate : {
                          scale: 1,
                          rotate: 0,
                          opacity: iconAnimation.animate.opacity ?? 1,
                          y: iconAnimation.animate.y ?? 0
                        }}
                        transition={iconAnimation.transition as any}
                      >
                        <feature.icon 
                          className="w-8 h-8 text-primary-cta" 
                          aria-hidden="true"
                          aria-label={`${feature.title} icon`}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

