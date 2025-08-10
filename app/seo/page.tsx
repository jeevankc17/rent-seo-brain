import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import Features from "@components/SEO-Page/SEO-Page";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[922px]">
        <Features />{" "}
      </section>
      <section className="relative w-full h-[1440px] bg-primary-100"></section>
    </main>
  );
}
