import CMS from "@components/CMS/Hero-Section";
import { AdOptionsSection } from "@components/Google/AdOptionsSection";
import { AdOverviewSection } from "@components/Google/AdOverviewSection";

import GoogleFeatures from "@components/Google/GoogleFeatures";
import { GoogleTestimonial } from "@components/Google/GoogleTestimonial";
import HeroSection from "@components/Google/HeroSection";
import { ProcessSection } from "@components/Google/Process";
import { ServicesSection } from "@components/Google/ServiceSection";
import { StatisticsSection } from "@components/Google/StatisticsSection";
import { FAQSection } from "@components/Google/FAQSection";
import { ToolsIntegrationSection } from "@components/Google/ToolsIntegrationsection";
import { ToolsSection } from "@components/Google/ToolsSection";
import { CaseStudies } from "@components/Google/CaseStudies";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px] w-full">
      <section className="relative w-full bg-white">
        <HeroSection />
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <AdOverviewSection />
        </div>
      </section>
      <section className="relative w-full bg-neutral-900">
        <GoogleFeatures />
      </section>
      <section className="relative w-full bg-white">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <AdOptionsSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <ServicesSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className=" mx-auto px-4 md:px-8 lg:px-0 w-full">
          <ProcessSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className="mx-auto px-4 md:px-8 lg:px-0 w-full">
          <ToolsSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <StatisticsSection />
        </div>
      </section>
      <section className="relative w-full bg-neutral-900">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <CaseStudies />
        </div>
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <ToolsIntegrationSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <FAQSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <GoogleTestimonial />
        </div>
      </section>
    </main>
  );
}
