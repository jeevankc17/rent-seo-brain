import SEOPage from "@components/SEO-Page/SEO-Page";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative bg-neutral-900 w-full h-[922px]">
        <SEOPage />{" "}
      </section>
      <section className="relative w-full h-[1440px] bg-primary-100"></section>
    </main>
  );
}
