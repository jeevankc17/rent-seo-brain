import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import HeroSection from "@components/Contact-Us/Hero-Section";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-neutral-900 gap-[132px] pb-[132px]">
      <section className="relative w-full h-[1321px] bg-primary-100">
        <HeroSection />
      </section>
    </main>
  );
}
