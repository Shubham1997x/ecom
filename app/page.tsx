import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CaseStudiesHeader } from "@/components/landing/case-studies/CaseStudiesHeader";
import { ShopifyCaseStudy } from "@/components/landing/case-studies/ShopifyCaseStudy";
import { WordPressCaseStudy } from "@/components/landing/case-studies/WordPressCaseStudy";
import { CustomPlatformCaseStudy } from "@/components/landing/case-studies/CustomPlatformCaseStudy";
import { PlatformComparisonCaseStudy } from "@/components/landing/case-studies/PlatformComparisonCaseStudy";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LivePreview } from "@/components/landing/LivePreview";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="skip-link absolute left-4 top-[-40px] z-50 px-4 py-2 bg-primary-cta text-white rounded focus:top-4 focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 transition-all duration-200"
      >
        Skip to main content
      </a>
      <StructuredData />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <CaseStudiesHeader />
        <ShopifyCaseStudy />
        <WordPressCaseStudy />
        <CustomPlatformCaseStudy />
        <PlatformComparisonCaseStudy />
        <FinalCTA />
        <HowItWorks />
        <LivePreview />
        <Features id="solutions" />
        <Stats id="results" />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

