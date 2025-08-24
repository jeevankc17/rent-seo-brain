import HeroSection from "@components/About-Us/Hero-Section";
import { Principles } from "@components/About-Us/Principles";
import { PrinciplesSection } from "@components/About-Us/StarRating";
import { TeamSection } from "@components/About-Us/TeamSection";
import { Testimonial } from "@components/About-Us/Testimonial";
import TestimonialsSection from "@components/About-Us/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white gap-[132px]  w-full mx-auto">
      <section className="relative w-full  h-[922px] bg-neutral-900 ">
        <HeroSection />
      </section>
      <section className="relative max-w-7xl h-[505px] bg-white mx-[156px]">
        <TestimonialsSection />
      </section>

      <section className="relative max-w-7xl min-h-[981px] bg-white mx-[156px]">
        <Principles />
      </section>
      <section className="relative max-w-7xl h-[710px] bg-white mx-[156px]">
        <TeamSection />
      </section>
      <section className="relative max-w-7xl h-[506px] bg-white mx-[156px]">
        <PrinciplesSection />
      </section>

      <section className="relative max-w-7xl h-[922px] bg-white mx-[156px]">
        <Testimonial />
      </section>
    </main>
  );
}
