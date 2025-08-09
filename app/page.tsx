import { Grid } from "lucide-react";
import Header from "../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import NewGrid from "@components/Home-Page/NewGrid";
import NewGrid1 from "@components/Home-Page/NewGrid1";
import NewGrid2 from "@components/Home-Page/NewGrid2";
import NewGrid3 from "@components/Home-Page/NewGrid3";
import NewGrid4 from "@components/Home-Page/NewGrid4";
import NewGrid5 from "@components/Home-Page/NewGrid5";
import NewGrid6 from "@components/Home-Page/NewGrid6";
import NewGrid7 from "@components/Home-Page/NewGrid7";
import NewGrid8 from "@components/Home-Page/NewGrid8";
import SEOBlogSection from "@components/Home-Page/NewGrid10";
import CaseStudiesSection from "@components/Home-Page/NewGrid11";
import TestimonialsSection from "@components/Home-Page/NewGrid12";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[922px]">
        <GridBackgroundView />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid />
      </section>
      <section className="relative  bg-grey-100 pt-[132px]">
        <NewGrid1 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid2 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid3 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid4 />
      </section>
      <section className="relative w-full bg-grey-100 pt-[132px]">
        <NewGrid5 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid6 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid7 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid8 />
      </section>
      <section className="relative bg-grey-100 pt-[132px] px-[156px]">
        <SEOBlogSection />
      </section>
      <section className="relative bg-grey-100 pt-[132px] px-[156px] bg-neutral-900">
        <CaseStudiesSection />
      </section>
      <section className="relative bg-grey-100 pt-[132px] px-[156px]">
        <TestimonialsSection />
      </section>
    </main>
  );
}
