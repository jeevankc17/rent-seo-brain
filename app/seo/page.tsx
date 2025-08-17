import SEOPage from "@components/SEO-Page/SEO-Page";
import ImageSection from "@components/SEO-Page/Image-Section";
import InputDesign from "@components/SEO-Page/SEO-Benefits";
import Brief from "@components/SEO-Page/Brief";
import SEOService from "@components/SEO-Page/SEOService";
import TrustSEO from "@components/SEO-Page/TrustSEO";
import InvestSEO from "@components/SEO-Page/InvestSEO";
import SEOMethod from "@components/SEO-Page/SEOMethod";
import ServeBusiness from "@components/SEO-Page/ServeBusiness";

export default function Home() {
  return (
    <main className="w-full flex flex-col  pb-[132px] gap-[132px]">
      <section className="relative bg-neutral-900 w-full h-[960px]">
        <SEOPage />{" "}
      </section>
      <section className="relative w-full h-[546px] bg-white ">
        <Brief />
      </section>
      <section className="relative w-full h-[639px] bg-white">
        <ImageSection />
      </section>
      <section className="relative w-full h-[1331px] bg-white">
        <SEOService />
      </section>
      <section className="relative w-full h-[1002px] bg-white">
        <TrustSEO />
      </section>
      <section className="relative w-full h-[1510px] bg-white px-[155.5px]">
        <InvestSEO />
      </section>
      <section className="relative w-full h-[519px] ">
        <span>Tools</span>
      </section>
      <section className="relative w-full h-[2076px]  ">
        <SEOMethod />
      </section>
      <section className="relative w-full h-[1117px] bg-white px-[156px]">
        <ServeBusiness />
      </section>
    </main>
  );
}
