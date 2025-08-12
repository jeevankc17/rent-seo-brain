import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import HeroSection from "@components/Contact-Us/Hero-Section";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[1321px] bg-primary-100">
        <HeroSection />
      </section>
    </main>
  );
}
