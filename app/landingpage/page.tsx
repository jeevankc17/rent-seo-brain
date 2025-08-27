import { BenefitsSection } from "@components/Landing-Page/BenefitsSection";
import HeroSection from "@components/Landing-Page/Hero-Section";
import ClientSuccessStoriesSection from "@components/Landing-Page/LP";
import { OverviewSection } from "@components/Landing-Page/OverviewSection";
import { PerformanceDashboardSection } from "@components/Landing-Page/PerformanceDashboardSection";
import { ProcessSection } from "@components/Landing-Page/ProcessSection";
import LPServices from "@components/Landing-Page/LPServices";
import IdeasToContent from "@components/Landing-Page/IdeasToContent";
import { ToolsIntegrationSection } from "@components/Landing-Page/ToolsIntegrationSection";
import { LPTestimonial } from "@components/Landing-Page/LPTestimonial";
import Banner from "@components/Landing-Page/Banner";
import { TechnologyStackSection } from "@components/Landing-Page/TechnologyStackSection";
import { FAQSection } from "@components/Landing-Page/FAQSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center pb-8 lg:pb-[132px] bg-white gap-8 lg:gap-[132px]">
      <section className="relative w-full h-auto bg-neutral-900 ">
        <HeroSection />
      </section>
      <section className="relative max-w-[1128px] mx-auto w-full h-auto lg:h-[601px] px-4  bg-white">
        <OverviewSection />
      </section>

      {/* <section className="relative w-full h-[1870px]">
        <GoogleFeatures />
      </section> */}
      <section className="relative max-w-[1440px] mx-auto w-full h-auto lg:h-[1161px] bg-white px-4 lg:px-[157px]">
        <LPServices />
      </section>
      <section className="relative w-full h-auto lg:h-[1046px] bg-neutral-900 px-4 lg:px-[156px]">
        <BenefitsSection />
      </section>
      <section className="relative w-full py-8 lg:py-[106px] px-4 lg:px-[266.5px]">
        <IdeasToContent />
      </section>
      <section className="relative w-full h-auto lg:h-[1130px] bg-neutral-900">
        <ProcessSection />
      </section>
      <section className="relative w-full h-auto lg:h-[790px] bg-white px-4 lg:px-[156px]">
        <PerformanceDashboardSection />
      </section>
      <section className="relative w-full h-auto lg:h-[735px]">
        <TechnologyStackSection />
      </section>
      <section className="relative w-full h-auto lg:h-[463px] bg-white px-4 lg:px-[156px]">
        <Banner />
      </section>
      <section className="relative w-full h-auto lg:h-[1130px] px-4 lg:px-[156px] py-8 lg:py-[109px]">
        <ClientSuccessStoriesSection />
      </section>
      <section className="relative w-full h-auto lg:h-[848px] px-4 lg:px-[156px]">
        <FAQSection />
      </section>
      <section className="relative w-full h-auto lg:h-[506px] px-4 lg:px-[156px]">
        <ToolsIntegrationSection />
      </section>
      <section className="relative w-full px-4 lg:px-[156px]">
        <LPTestimonial />
      </section>
    </main>
  );
}
