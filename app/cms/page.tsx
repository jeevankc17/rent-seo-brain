import IdeasToContent from "@components/CMS/IdeasToContent";
import CMSResult from "@components/CMS/CMS-Result";
import ContentServiceSection from "@components/CMS/ContentServiceSection";
import { TechnologyStackSection } from "@components/CMS/TechnologyStackSection";
import ImportanceSection from "@components/CMS/ImportanceSection";
import CMSImpact from "@components/CMS/CMSImpact";
import CMSConnect from "@components/CMS/CMSConnect";
import Banner from "@components/CMS/Banner";
import { CMSTestimonial } from "@components/CMS/CMSTestimonial";
import PowerContent from "@components/CMS/PowerContent";
import { FAQSection } from "@components/CMS/FAQSection";
import HeroSection from "@components/CMS/Hero-Section";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px]">
      <section className="relative w-full h-auto min-h-[400px] md:min-h-[600px] lg:h-[960px] bg-neutral-900">
        <HeroSection />
      </section>
      <section className="relative w-full h-auto min-h-[300px] md:min-h-[500px] lg:h-[902px] bg-white px-4 md:px-8 lg:px-[156px]">
        <CMSConnect />
      </section>

      <section className="relative w-full h-auto min-h-[600px] md:min-h-[800px] lg:min-h-[1200px] bg-neutral-900">
        <PowerContent />
      </section>

      <section className="relative w-full h-auto min-h-[400px] md:min-h-[600px] lg:h-[899px] bg-white">
        <CMSImpact />
      </section>

      <section className="relative bg-neutral-900 w-full py-8 px-4 lg:py-[106px] lg:px-[266.5px] sm:block">
        <div className="flex justify-center">
          <IdeasToContent />
        </div>
      </section>
      <section className="relative w-full h-auto min-h-[500px] md:min-h-[800px] lg:h-[1200px]">
        <ContentServiceSection />
      </section>
      <section className="relative w-full h-auto min-h-[400px] md:min-h-[600px] lg:h-[962px] bg-white">
        <CMSResult />
      </section>
      <section className="relative w-full h-auto min-h-[200px] md:min-h-[300px] lg:h-[519px] px-4 md:px-8 lg:px-[156px]">
        <Banner />
      </section>
      <section className="relative w-full h-auto min-h-[300px] md:min-h-[500px] lg:h-[735px]">
        <TechnologyStackSection />
      </section>
      <section className="relative w-full h-auto min-h-[400px] md:min-h-[600px] lg:h-[848px] px-4 md:px-8 lg:px-[156px]">
        <FAQSection />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px]">
        <CMSTestimonial />
      </section>
      {/* <section className="relative w-full h-[1200px] bg-white px-[156px]">
        <ImportanceSection />
      </section> */}
    </main>
  );
}