import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import CMS from "@components/CMS/Hero-Section";
import CMSROI from "@components/CMS/CMS-ROI";
import CMSResult from "@components/CMS/CMS-Result";
import ContentServiceSection from "@components/CMS/ContentServiceSection";
import { TechnologyStackSection } from "@components/CMS/TechnologyStackSection";
import ImportanceSection from "@components/CMS/ImportanceSection";
import CMSImpact from "@components/CMS/CMSImpact";
import PowerContent from "@components/CMS/PowerContent";
import CMSConnect from "@components/CMS/CMSConnect";


export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center gap-[132px] pb-[132px]">
      <section className="relative w-full h-[960px] bg-neutral-900">
        <CMS />
      </section>

      <section className="relative w-full h-[2400px] pb-[106px] pt-[106px] bg-neutral-900">
        <CMSROI />
      </section>
      <section className="relative w-full h-[962px] bg-white">
        <CMSResult />
      </section>
      <section className="relative w-full h-[1200px] ">
        <ContentServiceSection />
      </section>
      <section className="relative w-full h-[735px] ">
        <TechnologyStackSection />
      </section>
      <section className="relative w-full h-[1200px] bg-white px-[156px]">
        <ImportanceSection />
      </section>
      <section className="relative w-full h-[899px] bg-white ">
        <CMSImpact />
      </section>
      <section className="relative w-full h-[1465px] bg-neutral-900">
        <PowerContent />
      </section>
      <section className="relative w-full h-[902px] bg-white px-[156px]">
        <CMSConnect />
      </section>
    </main>
  );
}
