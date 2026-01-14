"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "Which platform is better for my e-commerce business: Shopify or WordPress?",
    answer:
      "The best platform depends on your specific needs. Shopify is ideal for businesses that want a quick setup, built-in hosting, and extensive app ecosystem. WordPress with WooCommerce offers more flexibility and customization options, better for businesses with unique requirements. We can help you analyze your needs and recommend the best solution during our consultation.",
    category: "General",
  },
  {
    question: "How long does it take to build a custom e-commerce website?",
    answer:
      "Timeline varies based on complexity and requirements. A standard Shopify store typically takes 4-6 weeks, while a custom WordPress/WooCommerce site may take 6-10 weeks. Fully custom solutions can take 10-16 weeks. We provide detailed timelines after understanding your specific needs and requirements.",
    category: "General",
  },
  {
    question: "Do you provide ongoing maintenance and support after launch?",
    answer:
      "Yes, we offer comprehensive maintenance packages that include security updates, performance monitoring, backup management, and technical support. We also provide training for your team to manage day-to-day operations. Our support plans are flexible and can be customized to your business needs.",
    category: "Support",
  },
  {
    question: "Can you migrate my existing store to a new platform?",
    answer:
      "Absolutely! We specialize in platform migrations, whether you're moving from Shopify to WordPress, WordPress to Shopify, or from any other platform. We handle product data, customer information, order history, and ensure zero downtime during the migration process. All migrations include thorough testing and quality assurance.",
    category: "Technical",
  },
  {
    question: "What payment gateways and shipping integrations do you support?",
    answer:
      "We integrate with all major payment gateways including Stripe, PayPal, Square, Authorize.net, and platform-specific options like Shopify Payments. For shipping, we integrate with carriers like USPS, FedEx, UPS, DHL, and shipping management tools like ShipStation and Shippo. We can also set up custom integrations based on your requirements.",
    category: "Technical",
  },
  {
    question: "How do you ensure my website is optimized for conversions?",
    answer:
      "We use proven conversion optimization strategies including A/B testing, user experience best practices, mobile-first design, fast loading times, clear call-to-actions, streamlined checkout processes, and trust signals. We analyze your target audience and industry benchmarks to create a conversion-focused design that maximizes sales.",
    category: "General",
  },
  {
    question: "Will my website be mobile-responsive and SEO optimized?",
    answer:
      "Yes, all our websites are built mobile-first and fully responsive across all devices. We implement comprehensive SEO best practices including proper meta tags, structured data, fast page speeds, clean URLs, XML sitemaps, and mobile optimization. We also provide ongoing SEO recommendations to improve your search rankings.",
    category: "Technical",
  },
  {
    question: "What is included in your e-commerce website development package?",
    answer:
      "Our packages typically include custom design, development, payment gateway integration, shipping setup, product management system, inventory management, order management, customer accounts, admin dashboard, mobile responsiveness, SEO optimization, and launch support. We can customize packages based on your specific needs and budget.",
    category: "Pricing",
  },
];

const categories = ["All", "General", "Technical", "Pricing", "Support"];

export const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpandAll = () => {
    if (expandedItems.length === filteredFaqs.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(filteredFaqs.map((_, index) => `item-${index}`));
    }
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border-gray-200 focus:border-primary-cta focus:ring-primary-cta"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-primary-cta text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredFaqs.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={toggleExpandAll}
                className="text-sm text-primary-cta hover:text-primary-cta-hover font-medium transition-colors cursor-pointer"
              >
                {expandedItems.length === filteredFaqs.length
                  ? "Collapse All"
                  : "Expand All"}
              </button>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-gray-600">
                  No questions found matching your search.
                </p>
              </div>
            ) : (
              <Accordion
                type="multiple"
                value={expandedItems}
                onValueChange={setExpandedItems}
                className="w-full"
              >
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left [&>svg]:hidden [&[data-state=open]_.faq-arrow]:rotate-135">
                      <div className="flex items-center gap-3 w-full">
                        <ArrowUpRight className="faq-arrow w-4 h-4 text-primary-cta shrink-0 transition-transform duration-300" />
                        <span className="text-gray-700 font-medium text-sm sm:text-base flex-1 text-left">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 font-normal leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

