"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    id: "custom-design",
    title: "Custom Design & Branding",
    description: "Unique, conversion-optimized designs tailored to your brand identity and target audience.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-white",
  },
  {
    id: "platform-integration",
    title: "Platform Integration",
    description: "Seamless integration with payment gateways, shipping carriers, and third-party tools.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-white",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics & Reporting",
    description: "Comprehensive dashboards to track sales, inventory, customer behavior, and performance metrics.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-white",
  },
  {
    id: "multi-vendor",
    title: "Multi-Vendor Support",
    description: "Build marketplaces with multiple vendors, commission management, and vendor dashboards.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-white",
  },
  {
    id: "performance",
    title: "High Performance & Speed",
    description: "Optimized for speed with fast load times, improved SEO, and better conversion rates.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-white",
  },
  {
    id: "support-training",
    title: "Ongoing Support & Training",
    description: "Dedicated support team, training sessions, and maintenance packages for your store.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-white",
  },
];

interface FeaturesProps {
  id?: string;
}

export const Features = ({ id = "features" }: FeaturesProps) => {
  const shouldReduceMotion = useReducedMotion();

  const getColorValues = (colorClass: string) => {
    // All infographics use primary CTA color
    // Primary CTA: #2468FF (HSL: 220 100% 57%)
    // Primary CTA Hover: HSL(220 100% 50%) ≈ #1E5CE6
    return { 
      from: "#2468FF", 
      to: "#1E5CE6", 
      stroke: "#2468FF" 
    };
  };

  const renderInfographic = (featureId: string, color: string, bgColor: string) => {
    const colors = getColorValues(color);
    
    switch (featureId) {
      case "custom-design":
        return (
          <div className={`relative w-full h-full ${bgColor} rounded-lg overflow-hidden`}>
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id={`gradient-${featureId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.from} />
                  <stop offset="100%" stopColor={colors.to} />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="60" height="60" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.8" />
              <rect x="100" y="30" width="80" height="40" rx="6" fill={`url(#gradient-${featureId})`} opacity="0.6" />
              <circle cx="50" cy="120" r="25" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <rect x="100" y="100" width="70" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.5" />
            </svg>
          </div>
        );
      case "platform-integration":
        return (
          <div className={`relative w-full h-full ${bgColor} rounded-lg overflow-hidden`}>
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id={`gradient-${featureId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.from} />
                  <stop offset="100%" stopColor={colors.to} />
                </linearGradient>
              </defs>
              {/* Central hub */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <circle cx="100" cy="100" r="25" fill={`url(#gradient-${featureId})`} opacity="0.9" />
              </motion.g>
              {/* Connected platforms */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Top platform */}
                <rect x="70" y="30" width="60" height="30" rx="6" fill={`url(#gradient-${featureId})`} opacity="0.7" />
                <line x1="100" y1="60" x2="100" y2="75" stroke={colors.stroke} strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
                
                {/* Right platform */}
                <rect x="140" y="85" width="50" height="30" rx="6" fill={`url(#gradient-${featureId})`} opacity="0.7" />
                <line x1="140" y1="100" x2="125" y2="100" stroke={colors.stroke} strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
                
                {/* Bottom platform */}
                <rect x="70" y="140" width="60" height="30" rx="6" fill={`url(#gradient-${featureId})`} opacity="0.7" />
                <line x1="100" y1="140" x2="100" y2="125" stroke={colors.stroke} strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
                
                {/* Left platform */}
                <rect x="10" y="85" width="50" height="30" rx="6" fill={`url(#gradient-${featureId})`} opacity="0.7" />
                <line x1="60" y1="100" x2="75" y2="100" stroke={colors.stroke} strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
              </motion.g>
              {/* Connection dots */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <circle cx="100" cy="70" r="3" fill={colors.stroke} opacity="0.5" />
                <circle cx="130" cy="100" r="3" fill={colors.stroke} opacity="0.5" />
                <circle cx="100" cy="130" r="3" fill={colors.stroke} opacity="0.5" />
                <circle cx="70" cy="100" r="3" fill={colors.stroke} opacity="0.5" />
              </motion.g>
            </svg>
          </div>
        );
      case "analytics-dashboard":
        return (
          <div className={`relative w-full h-full ${bgColor} rounded-lg overflow-hidden`}>
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id={`gradient-${featureId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.from} />
                  <stop offset="100%" stopColor={colors.to} />
                </linearGradient>
              </defs>
              <rect x="30" y="120" width="25" height="50" rx="4" fill={`url(#gradient-${featureId})`} opacity="0.8" />
              <rect x="65" y="100" width="25" height="70" rx="4" fill={`url(#gradient-${featureId})`} opacity="0.8" />
              <rect x="100" y="80" width="25" height="90" rx="4" fill={`url(#gradient-${featureId})`} opacity="0.9" />
              <rect x="135" y="90" width="25" height="80" rx="4" fill={`url(#gradient-${featureId})`} opacity="0.8" />
            </svg>
          </div>
        );
      case "multi-vendor":
        return (
          <div className={`relative w-full h-full ${bgColor} rounded-lg overflow-hidden`}>
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id={`gradient-${featureId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.from} />
                  <stop offset="100%" stopColor={colors.to} />
                </linearGradient>
              </defs>
              <rect x="20" y="30" width="50" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <rect x="80" y="30" width="50" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <rect x="140" y="30" width="50" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <rect x="20" y="100" width="50" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <rect x="80" y="100" width="50" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <rect x="140" y="100" width="50" height="50" rx="8" fill={`url(#gradient-${featureId})`} opacity="0.7" />
              <circle cx="100" cy="175" r="12" fill={`url(#gradient-${featureId})`} opacity="0.9" />
            </svg>
          </div>
        );
      case "performance":
        return (
          <div className={`relative w-full h-full ${bgColor} rounded-lg overflow-hidden`}>
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id={`gradient-${featureId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.from} />
                  <stop offset="100%" stopColor={colors.to} />
                </linearGradient>
              </defs>
              {/* Lightning bolt/flash icon */}
              <motion.g
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Main lightning bolt */}
                <path
                  d="M 100 40 L 75 90 L 95 90 L 70 160 L 120 80 L 105 80 L 130 40 Z"
                  fill={`url(#gradient-${featureId})`}
                  opacity="0.9"
                />
                {/* Secondary flash effect */}
                <motion.path
                  d="M 100 50 L 80 85 L 92 85 L 75 145 L 115 75 L 102 75 L 125 50 Z"
                  fill={colors.stroke}
                  opacity="0.3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.3, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.g>
            </svg>
          </div>
        );
      case "support-training":
        return (
          <div className={`relative w-full h-full ${bgColor} rounded-lg overflow-hidden`}>
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id={`gradient-${featureId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.from} />
                  <stop offset="100%" stopColor={colors.to} />
                </linearGradient>
              </defs>
              {/* Continuous Learning Circle */}
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Outer circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="55"
                  fill="none"
                  stroke={`url(#gradient-${featureId})`}
                  strokeWidth="3"
                  opacity="0.2"
                />
                {/* Progress arc - representing continuous support */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="55"
                  fill="none"
                  stroke={`url(#gradient-${featureId})`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="345"
                  transform="rotate(-90 100 100)"
                  initial={{ strokeDashoffset: 345 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  opacity="0.8"
                />
              </motion.g>
              {/* Central Hub - Support Center */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="25"
                  fill={`url(#gradient-${featureId})`}
                  opacity="0.9"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="18"
                  fill="white"
                  opacity="0.3"
                />
              </motion.g>
            </svg>
          </div>
        );
      default:
        return null;
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
          {features.map((feature, index) => (
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
            >
              <div className="h-full bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200 overflow-hidden flex flex-col">
                {/* Major Graphics Section - 70% */}
                <div className="relative h-48 flex-shrink-0">
                  {renderInfographic(feature.id, feature.color, feature.bgColor)}
                </div>
                
                {/* Minor Text Section - 30% */}
                <div className="p-4 flex-shrink-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

