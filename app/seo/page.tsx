import SEOPage from "@components/SEO-Page/SEO-Page";
import ImageSection from "@components/SEO-Page/Image-Section";
import InputDesign from "@components/SEO-Page/SEO-Benefits";
import Brief from "@components/SEO-Page/Brief";

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
    </main>
  );
}
