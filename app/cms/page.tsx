import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import CMS from "@components/CMS/Hero-Section";
import CMSROI from "@components/CMS/CMS-ROI";
import CMSResult from "@components/CMS/CMS-Result";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[960px] bg-neutral-900">
        <CMS />
      </section>
      {/* <section className="relative w-full h-[899px] bg-neutral-900">
        
      </section> */}
      <section className="relative w-full h-[2400px]">
        <CMSROI />
      </section>
      <section className="relative w-full h-[1260px] bg-white">
        <CMSResult />
      </section>
    </main>
  );
}
