import HeroSection from "@components/About-Us/Hero-Section";
import { Principles } from "@components/About-Us/Principles";
import { StarRatingSection } from "@components/About-Us/StarRating";
import { TeamSection } from "@components/About-Us/TeamSection";
import { Testimonial } from "@components/About-Us/Testimonial";
import TestimonialsSection from "@components/About-Us/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white gap-8 md:gap-16 lg:gap-[132px] pb-8 md:pb-16 lg:pb-[132px] w-full mx-auto">
      <section className="relative w-full bg-neutral-900">
        <HeroSection />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px] max-w-[2000px] bg-white">
        <TestimonialsSection />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px] max-w-[2000px] bg-white">
        <Principles />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px] max-w-[2000px] bg-white">
        <TeamSection />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px] max-w-[2000px] bg-white">
        <StarRatingSection />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-[156px] max-w-[2000px] bg-white hidden lg:block">
        <Testimonial />
      </section>
    </main>
  );
}
