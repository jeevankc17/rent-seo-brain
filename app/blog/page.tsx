import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import BlogHero from "@components/Blog/Blog-Hero";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[1440px] bg-primary-100">
        <BlogHero />
      </section>
    </main>
  );
}
