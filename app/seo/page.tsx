import SEOPage from "@components/SEO-Page/SEO-Page";
import ImageSection from "@components/SEO-Page/Image-Section";
import InputDesign from "@components/SEO-Page/SEO-Benefits";
import Brief from "@components/SEO-Page/Brief";
import SEOService from "@components/SEO-Page/SEOService";
import TrustSEO from "@components/SEO-Page/TrustSEO";
import SEOMethod from "@components/SEO-Page/SEOMethod";
import ServeBusiness from "@components/SEO-Page/ServeBusiness";
import Banner from "@components/SEO-Page/Banner";
import { ToolsSection } from "@components/SEO-Page/ToolsSection";
import { IndustryLeaders } from "@components/SEO-Page/IndustryLeaders";
import { SEOTestimonial } from "@components/SEO-Page/SEOTestimonial";
import { CaseStudies} from "@components/SEO-Page/CaseStudies";
import { FAQSection } from "@components/SEO-Page/FAQSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center pb-8 gap-8 lg:pb-[132px] lg:gap-[132px]">
      <section className="relative bg-neutral-900 w-full h-auto lg:h-[960px] max-w-screen mx-auto flex justify-center">
        <SEOPage />{" "}
      </section>
      <section className="relative max-w-[1128px] mx-auto w-full h-auto bg-white lg:h-[546px] flex justify-center">
        <Brief />
      </section>
      <section className="relative  w-full h-auto bg-white lg:h-[639px] max-w-[1128px] mx-auto flex justify-center">
        <ImageSection />
      </section>
      <section className="relative w-full h-auto bg-white lg:h-[1331px] ">
        <SEOService />
      </section>
      <section className="relative w-full h-auto bg-white lg:h-[1002px] max-w-screen mx-auto flex justify-center">
        <TrustSEO />
      </section>
      {/* <section className="relative w-full h-auto px-4 lg:px-[156px] lg:h-[519px]">
        <Banner />
      </section> */}
      <section className="relative w-full bg-white h-auto lg:h-[519px] pb-[132px]">
        <ToolsSection />
      </section>
      <section className="relative w-full h-auto lg:h-[2076px] max-w-screen mx-auto flex justify-center">
        <SEOMethod />
      </section>
      <section className="relative w-full h-auto bg-white px-4 lg:px-[156px] lg:h-[1117px]">
        <ServeBusiness />
      </section>
      <section className="relative w-full h-auto lg:h-[1542px] max-w-[1128px] mx-auto flex justify-center">
        <CaseStudies />
      </section>
      <section className="relative w-full h-auto px-4 lg:px-[156px] lg:h-[506px] max-w-[1128px] mx-auto flex justify-center">
        <IndustryLeaders />
      </section>
      <section className="relative w-full h-auto px-4 lg:px-[156px] lg:h-[821px] max-w-[1128px] mx-auto flex justify-center">
        <FAQSection />
      </section>
      <section className="relative w-full px-4 lg:px-[156px]">
        <SEOTestimonial />
      </section>
    </main>
  );
}
