import ReadBlog from "@components/Read-Blog/Read-Blog";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[1440px] bg-primary-100">
        <ReadBlog />
      </section>
    </main>
  );
}
