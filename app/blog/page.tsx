import BlogHero from "@components/Blog/Blog-Hero";
import { ArticleCardsSection } from "@components/Blog/ArticleSection";
import { BlogTestimonial } from "@components/Blog/BlogTestimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px] w-full">
      <section className="relative w-full h-auto lg:h-[960px]">
        <BlogHero />
      </section>
      <section className="relative w-full h-auto lg:h-[1141px]">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <ArticleCardsSection />
        </div>
      </section>
      <section className="relative w-full">
        <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
          <BlogTestimonial />
        </div>
      </section>
    </main>
  );
}
