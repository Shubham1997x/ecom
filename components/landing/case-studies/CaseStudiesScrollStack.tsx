"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function CaseStudiesScrollStack() {
  return (
    <section id="case-studies-scroll" className="w-full min-h-screen bg-white">
      <ScrollStack useWindowScroll={true} className="w-full">
        {/* Shopify Case Study */}
        <ScrollStackItem itemClassName="!h-auto min-h-[800px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-8">
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
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
              {/* Content Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                  <div className="space-y-2.5">
                    {[
                      "Custom theme development & design",
                      "Shopify app integration & customization",
                      "Performance optimization & SEO",
                      "Payment gateway integration",
                      "Mobile-first responsive design",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-cta"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
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
              </div>

              {/* Image/Visual Section */}
              <div className="relative">
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
              </div>
            </div>

            {/* Metrics Section */}
            <div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: "+45%", label: "Conversion Rate", percentage: 45 },
                  { value: "2.1s", label: "Load Time", percentage: 85 },
                  { value: "+62%", label: "Revenue Growth", percentage: 62 },
                ].map((metric, index) => (
                  <Card key={index} className="p-4 bg-white border-gray-200 h-full">
                    <div className="flex items-center gap-4">
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
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            className="text-primary-cta"
                            strokeDasharray={`${metric.percentage * 2.199} 219.9`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-cta">
                            {metric.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-2xl font-bold text-gray-900 mb-0.5">{metric.value}</div>
                        <div className="text-xs font-medium text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* WordPress Case Study */}
        <ScrollStackItem itemClassName="!h-auto min-h-[800px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-8">
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
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
              {/* Image/Visual Section */}
              <div className="relative lg:order-2">
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
              </div>

              {/* Content Section */}
              <div className="space-y-6 lg:order-1">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                  <div className="space-y-2.5">
                    {[
                      "WooCommerce custom development",
                      "Custom plugin development",
                      "Theme customization & design",
                      "Multi-vendor marketplace setup",
                      "Advanced product management",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-cta"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
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
              </div>
            </div>

            {/* Metrics Section */}
            <div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: "+38%", label: "Conversion Rate", percentage: 38 },
                  { value: "1.8s", label: "Load Time", percentage: 90 },
                  { value: "+55%", label: "Revenue Growth", percentage: 55 },
                ].map((metric, index) => (
                  <Card key={index} className="p-4 bg-white border-gray-200 h-full">
                    <div className="flex items-center gap-4">
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
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            className="text-primary-cta"
                            strokeDasharray={`${metric.percentage * 2.199} 219.9`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-cta">
                            {metric.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-2xl font-bold text-gray-900 mb-0.5">{metric.value}</div>
                        <div className="text-xs font-medium text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Custom Platform Case Study */}
        <ScrollStackItem itemClassName="!h-auto min-h-[800px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-1.5 bg-primary-cta/10 text-primary-cta rounded-full text-sm font-medium">
                  Case Study 03
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
                Custom E-Commerce Platforms
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                Fully custom solutions built from the ground up, tailored to your unique needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
              {/* Content Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                  <div className="space-y-2.5">
                    {[
                      "Full-stack custom development",
                      "Headless commerce architecture",
                      "API-first integrations",
                      "Scalable cloud infrastructure",
                      "Enterprise-grade security",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-cta"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Typical Timeline:</span>
                    <span>10-16 weeks</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">AWS</span>
                  </div>
                </div>
              </div>

              {/* Image/Visual Section */}
              <div className="relative">
                <Card className="p-0 bg-white border-gray-200 shadow-lg overflow-hidden">
                  <div className="aspect-video w-full h-full relative">
                    <Image
                      src="/images/custom-1.jpg"
                      alt="Custom Platform Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Card>
              </div>
            </div>

            {/* Metrics Section */}
            <div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: "+52%", label: "Conversion Rate", percentage: 52 },
                  { value: "1.5s", label: "Load Time", percentage: 95 },
                  { value: "+71%", label: "Revenue Growth", percentage: 71 },
                ].map((metric, index) => (
                  <Card key={index} className="p-4 bg-white border-gray-200 h-full">
                    <div className="flex items-center gap-4">
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
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            className="text-primary-cta"
                            strokeDasharray={`${metric.percentage * 2.199} 219.9`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-cta">
                            {metric.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-2xl font-bold text-gray-900 mb-0.5">{metric.value}</div>
                        <div className="text-xs font-medium text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Platform Comparison Case Study */}
        <ScrollStackItem itemClassName="!h-auto min-h-[800px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-8">
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
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
              {/* Services Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                  <div className="space-y-2.5">
                    {[
                      "Platform analysis & recommendations",
                      "Migration planning & execution",
                      "Multi-platform integration",
                      "Performance benchmarking",
                      "ROI optimization strategies",
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-cta"></div>
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
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
              </div>

              {/* Comparison Table */}
              <div className="relative">
                <Card className="p-6 bg-white border-gray-200 shadow-lg">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-primary-cta" />
                      <h3 className="text-lg font-semibold text-gray-900">Platform Comparison</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { platform: "Shopify", bestFor: "Quick setup, app ecosystem", complexity: "Low" },
                      { platform: "WordPress", bestFor: "Flexibility, customization", complexity: "Medium" },
                      { platform: "Custom", bestFor: "Unique requirements", complexity: "High" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-gray-200"
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
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <Card className="p-8 bg-gradient-to-r from-primary-cta/5 to-primary-cta/10 border-primary-cta/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Choose Your Platform?</h3>
                    <p className="text-gray-600">Let us analyze your business needs and recommend the perfect solution.</p>
                  </div>
                  <button
                    onClick={() => window.open("https://calendly.com/wantace-ai/discovery-call", "_blank", "noopener,noreferrer")}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-cta text-white rounded-lg font-medium hover:bg-primary-cta-hover whitespace-nowrap cursor-pointer"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
}

