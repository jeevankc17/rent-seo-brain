import CMS from "@components/CMS/Hero-Section";
import { AdOptionsSection } from "@components/Google/AdOptionsSection";
import { AdOverviewSection } from "@components/Google/AdOverviewSection";
import { FAQSection } from "@components/Google/FAQSection";

import GoogleFeatures from "@components/Google/GoogleFeatures";
import { GoogleTestimonial } from "@components/Google/GoogleTestimonial";
import HeroSection from "@components/Google/HeroSection";
import { ProcessSection } from "@components/Google/Process";
import { ServicesSection } from "@components/Google/ServiceSection";
import { StatisticsSection } from "@components/Google/StatisticsSection";
import { StatsSection } from "@components/Google/StatsSection";
import { ToolsIntegrationSection } from "@components/Google/ToolsIntegrationsection";
import { ToolsSection } from "@components/Google/ToolsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px]">
      <section className="relative w-full h-auto min-h-[400px] md:min-h-[600px] lg:h-[960px] bg-neutral-900">
        <HeroSection />
      </section>
      <section className="relative w-full h-auto px-4 md:px-8 lg:px-[154px]">
        <AdOverviewSection />
      </section>
      <section className="relative w-full h-auto bg-neutral-900">
        <GoogleFeatures />
      </section>
      <section className="relative w-full h-auto px-4 md:px-8 lg:px-[113.5px] bg-white">
        <AdOptionsSection />
      </section>
      <section className="relative w-full h-auto px-4 md:px-8 lg:px-[156px]">
        <ServicesSection />
      </section>
      <section className="relative w-full h-auto">
        <ProcessSection />
      </section>
      <section className="relative w-full h-auto">
        <ToolsSection />
      </section>
      <section className="relative w-full h-auto px-4 md:px-8 lg:px-[156px]">
        <StatisticsSection />
      </section>
      <section className="relative w-full h-auto">
        <FAQSection />
      </section>
      <section className="relative w-full h-auto px-4 md:px-8 lg:px-[156px]">
        <ToolsIntegrationSection />
      </section>
      <section className="relative w-full h-auto px-4 md:px-8 lg:px-[156px]">
        <StatsSection />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px]">
        <GoogleTestimonial />
      </section>
    </main>
  );
}
