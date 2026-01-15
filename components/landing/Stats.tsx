"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 45,
    suffix: "%",
    title: "Conversion increase",
    vsIndustry: "vs 2.5% avg",
    color: "from-blue-500/10 to-blue-600/5",
    graphicType: "conversion",
  },
  {
    value: 62,
    suffix: "%",
    title: "Revenue growth",
    vsIndustry: "vs 18% avg",
    color: "from-blue-500/10 to-blue-600/5",
    graphicType: "revenue",
  },
  {
    value: 1.8,
    suffix: "s",
    title: "Page load time",
    vsIndustry: "vs 3.5s avg",
    color: "from-blue-500/10 to-blue-600/5",
    graphicType: "speed",
  },
];

const useCountUp = (
  end: number,
  duration: number = 2000,
  startFrom: number
) => {
  const [count, setCount] = useState(startFrom);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = startFrom;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (end - startValue) * easeOutQuart;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, startFrom, duration]);

  return { count, ref };
};

interface StatsProps {
  id?: string;
}

export const Stats = ({ id = "stats" }: StatsProps) => {
  return (
    <section
      id={id}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Results That Speak For Themselves
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Proven track record of delivering high-performing e-commerce websites that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 text-center md:grid-cols-3">
          {stats.map((stat, index) => {
            const startValue = Math.max(0, stat.value - 10);
            const { count, ref } = useCountUp(stat.value, 2000, startValue);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary-cta/20"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${stat.color} opacity-50 pointer-events-none`}
                />
                <div className="relative z-10">
                  {/* Graphics */}
                  <div className="flex justify-center mb-6 h-32">
                    {stat.graphicType === "conversion" && (
                      <svg className="w-full h-full max-w-32" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <linearGradient id="gradient-conversion" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                        {/* Upward arrow/trend */}
                        <motion.path
                          d="M 50 150 L 100 50 L 150 150"
                          fill="none"
                          stroke="url(#gradient-conversion)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                        <motion.line
                          x1="50"
                          y1="150"
                          x2="150"
                          y2="150"
                          stroke="url(#gradient-conversion)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </svg>
                    )}
                    {stat.graphicType === "revenue" && (
                      <svg className="w-full h-full max-w-32" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <linearGradient id="gradient-revenue" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                        {/* Dollar sign */}
                        <motion.path
                          d="M 100 40 L 100 160 M 80 80 Q 80 60 100 60 Q 120 60 120 80 Q 120 100 100 100 Q 80 100 80 120 Q 80 140 100 140 Q 120 140 120 120"
                          fill="none"
                          stroke="url(#gradient-revenue)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                        />
                      </svg>
                    )}
                    {stat.graphicType === "speed" && (
                      <svg className="w-full h-full max-w-32" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <linearGradient id="gradient-speed" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                        {/* Lightning bolt */}
                        <motion.path
                          d="M 100 40 L 75 90 L 95 90 L 70 160 L 120 80 L 105 80 L 130 40 Z"
                          fill="url(#gradient-speed)"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="font-bold text-4xl sm:text-5xl mb-2 text-primary-cta">
                    {stat.suffix === "s"
                      ? `${count.toFixed(1)}${stat.suffix}`
                      : stat.suffix === "x"
                        ? `${count.toFixed(1)}${stat.suffix}`
                        : `${Math.round(count)}${stat.suffix}`}
                  </h3>

                  <p className="text-base font-medium text-gray-900 mb-3">
                    {stat.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {stat.vsIndustry}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

