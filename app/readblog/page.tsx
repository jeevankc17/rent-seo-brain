import { BlogSuggestionsSection } from "@components/Read-Blog/BlogSuggestionsSection";
import { MainContentSection } from "@components/Read-Blog/MainContentSection";
import ReadBlog from "@components/Read-Blog/Read-Blog";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-white gap-[132px]">
      <section className="relative w-full h-[2577px] px-[155px] top-[79px]">
        <MainContentSection />
      </section>
      <section className="relative w-full h-[560px] px-[155px]">
        <BlogSuggestionsSection />
      </section>
    </main>
  );
}
