import CMS from "@components/CMS/Hero-Section";

import GoogleFeatures from "@components/Google/GoogleFeatures";
import { BenefitsSection } from "@components/Landing-Page/BenefitsSection";
import { ClientResultsSection } from "@components/Landing-Page/ClientResultsSection";
import HomePage from "@components/Landing-Page/Hero-Section";
import LandingPage from "@components/Landing-Page/LandingPage";
import ClientSuccessStoriesSection from "@components/Landing-Page/LP";
import { OverviewSection } from "@components/Landing-Page/OverviewSection";
import { PerformanceDashboardSection } from "@components/Landing-Page/PerformanceDashboardSection";
import { ProcessSection } from "@components/Landing-Page/ProcessSection";
import LPServices from "@components/Landing-Page/LPServices";
import IdeasToContent from "@components/Landing-Page/IdeasToContent";
import { ToolsIntegrationSection } from "@components/Landing-Page/ToolsIntegrationSection";
import { StatsSection } from "@components/Landing-Page/StatsSection";
import { LPTestimonial } from "@components/Landing-Page/LPTestimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center pb-[132px] bg-white gap-[132px]">
      {/* <section className="relative w-full h-[960px] bg-neutral-900">
        <LandingPage />
      </section> */}
      <section className="relative w-full h-[960px] bg-neutral-900">
        <HomePage />
      </section>
      <section className="relative w-full h-[601px] px-[157px]  bg-white">
        <OverviewSection />
      </section>

      {/* <section className="relative w-full h-[1870px]">
        <GoogleFeatures />
      </section> */}
      <section className="relative w-full h-[1161px] bg-white px-[157px]">
        <LPServices />
      </section>
      <section className="relative w-full h-[1046px]  bg-neutral-900">
        <BenefitsSection />
      </section>
      <section className="relative   py-[106px] px-[266.5px]">
        <IdeasToContent />
      </section>
      <section className="relative w-full h-[1130px]  bg-neutral-900">
        <ProcessSection />
      </section>
      <section className="relative w-full h-[790px] bg-white px-[156px]">
        <PerformanceDashboardSection />
      </section>

      <section className="relative w-full h-[1130px]  px-[156px] py-[109px]">
        <ClientSuccessStoriesSection />
      </section>
      <section className="relative w-full h-[1117px] px-[156px] ">
        <StatsSection />
      </section>
      <section className="relative w-full h-[506px] px-[156px] ">
        <ToolsIntegrationSection />
      </section>
      <section className="relative w-full px-[156px] ">
        <LPTestimonial />
      </section>
    </main>
  );
}
