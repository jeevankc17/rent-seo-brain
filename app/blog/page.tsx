import BlogHero from "@components/Blog/Blog-Hero";
import { ArticleCardsSection } from "@components/Blog/ArticleSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-[132px] pb-[132px] ">
      <section className="relative w-full h-[960px] ">
        <BlogHero />
      </section>
      <section className="relative w-full h-[1141px] px-[154px]">
        <ArticleCardsSection />
      </section>
    </main>
  );
}