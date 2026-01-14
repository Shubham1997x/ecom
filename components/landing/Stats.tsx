"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Calendar } from "lucide-react";

const stats = [
  {
    value: 45,
    suffix: "%",
    title: "Average conversion increase",
    description: "Across all our e-commerce projects",
    icon: TrendingUp,
    vsIndustry: "vs 2.5% industry avg",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    value: 62,
    suffix: "%",
    title: "Revenue growth",
    description: "For businesses using our solutions",
    icon: DollarSign,
    vsIndustry: "vs 18% industry avg",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    value: 1.8,
    suffix: "s",
    title: "Average page load time",
    description: "Optimized for speed and performance",
    icon: Calendar,
    vsIndustry: "vs 3.5s industry avg",
    color: "from-blue-500/10 to-blue-600/5",
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
            const Icon = stat.icon;

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
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-50 pointer-events-none`}
                />
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary-cta/10 group-hover:bg-primary-cta/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary-cta" />
                    </div>
                  </div>

                  <h3 className="font-bold text-3xl sm:text-4xl mb-3 text-primary-cta">
                    {stat.suffix === "s"
                      ? `${count.toFixed(1)}${stat.suffix}`
                      : stat.suffix === "x"
                      ? `${count.toFixed(1)}${stat.suffix}`
                      : `${Math.round(count)}${stat.suffix}`}
                  </h3>

                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.title}
                  </p>

                  <p className="text-base text-gray-600 font-normal leading-relaxed mb-3">
                    {stat.description}
                  </p>

                  <div className="pt-3 border-t border-gray-200/50">
                    <p className="text-xs text-gray-500 font-medium">
                      {stat.vsIndustry}
                    </p>
                  </div>

                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-cta to-primary-cta-hover rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

