import CMS from "@components/CMS/Hero-Section";
import { AdOptionsSection } from "@components/Google/AdOptionsSection";
import { AdOverviewSection } from "@components/Google/AdOverviewSection";
import { AudienceEngagementSection } from "@components/Google/AudienceEngagementSection";
import { FAQSection } from "@components/Google/FAQSection";

import GoogleFeatures from "@components/Google/GoogleFeatures";
import HeroSection from "@components/Google/HeroSection";
import { ProcessSection } from "@components/Google/Process";
import { ServicesSection } from "@components/Google/ServiceSection";
import { StatisticsSection } from "@components/Google/StatisticsSection";
import { StatsSection } from "@components/Google/StatsSection";
import TestimonialsSection from "@components/Google/TestimonialsSection";
import { ToolsIntegrationSection } from "@components/Google/ToolsIntegrationsection";
import { ToolsSection } from "@components/Google/ToolsSection";
import Wireframe from "@components/Landing-Page/Wireframe";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white gap-[132px] pb-[132px]">
      <section className="relative w-full h-[960px] bg-neutral-900">
        <HeroSection />
      </section>
      <section className="relative w-full h-[515px] px-[157px]">
        <AudienceEngagementSection />
      </section>{" "}
      <section className="relative w-full h-[1026px] px-[154px]">
        <AdOverviewSection />
      </section>{" "}
      <section className="relative w-full h-[1326px] bg-neutral-900">
        <GoogleFeatures />
      </section>
      <section className="relative w-full h-[552px] px-[113.5px] bg-white">
        <AdOptionsSection />
      </section>{" "}
      <section className="relative w-full h-[1044px] px-[156px] ">
        <ServicesSection />
      </section>{" "}
      <section className="relative w-full h-[840px] ">
        <ProcessSection />
      </section>{" "}
      <section className="relative w-full h-[519px] ">
        <ToolsSection />
      </section>
      <section className="relative w-full h-[1117px] px-[156px] ">
        <StatisticsSection />
      </section>
      <section className="relative w-full h-[506px] px-[156px] ">
        <ToolsIntegrationSection />
      </section>
      {/* <section className="relative w-full h-[733px] px-[156px] ">
        <TestimonialsSection />
      </section> */}
      <section className="relative w-full h-[1117px] px-[156px] ">
        <StatsSection />
      </section>
      <section className="relative w-full h-[1542px] ">
        <FAQSection />
      </section>
    </main>
  );
}
