import { Contact, Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import HeroSection from "@components/Contact-Us/Hero-Section";
import ContactUs from "@components/Contact-Us/ContactUs";
import { ContactTestimonial } from "@components/Contact-Us/ContactTestimonial";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px]">
      <section className="relative w-full h-auto ">
        <HeroSection />
      </section>
      <section className="relative w-full h-auto bg-primary-100">
        <ContactUs />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px]">
        <ContactTestimonial />
      </section>
    </main>
  );
}
