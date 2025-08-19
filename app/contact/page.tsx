import { Contact, Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import HeroSection from "@components/Contact-Us/Hero-Section";
import ContactUs from "@components/Contact-Us/ContactUs";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-[132px] pb-[132px]">
      <section className="relative w-full h-[1321px] ">
        <HeroSection />
      </section>
      <section className="relative w-full h-[1537px] bg-primary-100">
        <ContactUs />
      </section>
    </main>
  );
}
