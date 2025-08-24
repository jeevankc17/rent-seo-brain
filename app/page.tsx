import { Grid } from "lucide-react";
import Header from "../components/registry/seraui/header";
import HeroSection from "@components/Home-Page/Hero-Section";
import { Proposition } from "@components/Home-Page/Proposition";
import DeepDive from "@components/Home-Page/DeepDive";

import TestimonialsSection from "@components/Home-Page/TestimonialsSection";
import IdeasToContent from "@components/CMS/IdeasToContent";
import { SuccessStoriesSection } from "@components/Home-Page/SuccessStoriesSection";
import { LatestBlogsSection } from "@components/Home-Page/LatestBlogsSection";
import { KeyMetricsSection } from "@components/Home-Page/KeyMetricsSection";
import ImageSection from "@components/Home-Page/ImageSection";
import { CoreServicesSection } from "@components/Home-Page/CoreServicesSection";
import { FAQSection } from "@components/Home-Page/HPFAQSection";
// import { FAQSection } from "@components/Google/FAQSection";

import { StatisticsSection } from "@components/Home-Page/StatisticsSection";
import { Testimonial } from "@components/Home-Page/Testimonial";
import { ToolsSection } from "@components/Home-Page/ToolsSection";
import HomePageFeatures from "@components/Home-Page/HomePageFeatures";
import HaveQuestions from "@components/Home-Page/HaveQuestions";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-[132px] pb-[132px] bg-[#eeeeee]">
      <section className="relative w-full h-[922px]">
        <HeroSection />
      </section>
      <section className="relative w-full bg-grey-100 ">
        <HomePageFeatures />
      </section>
      <section className="relative  bg-grey-100 h-[525px]  w-full px-[157px]">
        <Proposition />
      </section>
      <section className="relative bg-grey-100 w-full">
        <DeepDive />
      </section>
      <section className="relative bg-grey-100 w-full px-[156px]">
        <CoreServicesSection />
      </section>
      <section className="relative bg-grey-100 w-full px-[156px]">
        <KeyMetricsSection />
      </section>
      <section className="relative bg-neutral-900 w-full  py-[106px] px-[266.5px]">
        <IdeasToContent />
      </section>
      <section className="relative w-full bg-grey-100  px-[156px]">
        <SuccessStoriesSection />
      </section>
      <section className="relative w-full h-[519px] ">
        <ToolsSection />
      </section>
      <section className="relative w-full bg-grey-100  px-[156px]">
        <StatisticsSection />
      </section>
      <section className="relative bg-[#eeeeee] w-full px-[156px]">
        <LatestBlogsSection />
      </section>
      <section className="relative bg-grey-100 w-full px-[156px]">
        <HaveQuestions />
      </section>
      <section className="relative w-full bg-neutral-900">
        <FAQSection />
      </section>
      <section className="relative bg-grey-100 w-full px-[156px]">
        <TestimonialsSection />
      </section>
      <section className="relative bg-grey-100 w-full px-[156px]">
        <Testimonial />
      </section>
    </main>
  );
}
