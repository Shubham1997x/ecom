export const siteConfig = {
  // Site Branding
  siteName: "E-Com by Wantace",
  logoText: "E-Com",
  tagline: "Custom E-Commerce Solutions for Modern Businesses",

  // Primary Color (HSL format for Tailwind)
  primaryColor: {
    hsl: "220 100% 57%", // #2468FF
    hex: "#2468FF",
  },

  // Navigation Links
  navigationLinks: [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Shopify", href: "#shopify" },
    { label: "WordPress", href: "#wordpress" },
    { label: "Custom", href: "#custom-platform" },
    { label: "Comparison", href: "#comparison" },
    { label: "Solutions", href: "#solutions" },
    { label: "Results", href: "#results" },
    { label: "Testimonials", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],

  // Contact CTA
  contactCTA: {
    label: "Get Started",
    href: "#contact",
  },

  // Social Links
  socialLinks: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },

  // Footer
  footer: {
    description: "Custom e-commerce website solutions for businesses. We specialize in Shopify and WordPress development, delivering high-converting online stores that drive growth.",
    copyright: "© Copyright 2024, All Rights Reserved",
  },

  // Meta
  meta: {
    title: "E-Com by Wantace - Custom E-Commerce Solutions",
    description: "Expert Shopify and WordPress custom website development for e-commerce businesses. See our case studies and transform your online store.",
    url: "https://yourwebsite.com",
  },
} as const;

