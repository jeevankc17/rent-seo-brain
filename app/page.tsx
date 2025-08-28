import HeroSection from "@components/Home-Page/Hero-Section";
import { Proposition } from "@components/Home-Page/Proposition";
import DeepDive from "@components/Home-Page/DeepDive";

import TestimonialsSection from "@components/Home-Page/TestimonialsSection";
import IdeasToContent from "@components/Home-Page/IdeasToContent";
import { SuccessStoriesSection } from "@components/Home-Page/SuccessStoriesSection";
import { LatestBlogsSection } from "@components/Home-Page/FAQSection";
import { KeyMetricsSection } from "@components/Home-Page/KeyMetricsSection";
import { CoreServicesSection } from "@components/Home-Page/CoreServicesSection";
import { CaseStudies } from "@components/Home-Page/CaseStudies";

import { StatisticsSection } from "@components/Home-Page/StatisticsSection";
import { Testimonial } from "@components/Home-Page/Testimonial";
import { ToolsSection } from "@components/Home-Page/ToolsSection";
import HomePageFeatures from "@components/Home-Page/HomePageFeatures";
import HaveQuestions from "@components/Home-Page/HaveQuestions";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#eeeeee] gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px] w-full mx-auto">
      <section className="relative w-full h-auto lg:h-[922px]">
        <HeroSection />
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <HomePageFeatures />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <Proposition />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <DeepDive />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <CoreServicesSection />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <KeyMetricsSection />
        </div>
      </section>
      <section className="relative w-full bg-neutral-900 hidden sm:block p-[10px] lg:p-[30px]">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full flex justify-center ">
          <IdeasToContent />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <SuccessStoriesSection />
        </div>
      </section>
      <section className="relative w-full bg-[#a2d1ff66]">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <ToolsSection />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <StatisticsSection />
        </div>
      </section>
      <section className="relative w-full bg-[#eeeeee]">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <LatestBlogsSection />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <HaveQuestions />
        </div>
      </section>
      <section className="relative w-full bg-neutral-900">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <CaseStudies />
        </div>
      </section>
      <section className="relative w-full bg-grey-100">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <TestimonialsSection />
        </div>
      </section>
      <section className="relative w-full bg-grey-100 hidden lg:block">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <Testimonial />
        </div>
      </section>
    </main>
  );
}
