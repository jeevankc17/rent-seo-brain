import CMS from "@components/CMS/Hero-Section";

import GoogleFeatures from "@components/Google/GoogleFeatures";
import HomePage from "@components/Landing-Page/Hero-Section";
import LandingPage from "@components/Landing-Page/LandingPage";
import ClientSuccessStoriesSection from "@components/Landing-Page/LP";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      {/* <section className="relative w-full h-[960px] bg-neutral-900">
        <LandingPage />
      </section> */}
      <section className="relative w-full h-[960px] bg-neutral-900">
        <HomePage />
      </section>
      <section className="relative w-full h-[960px] bg-neutral-900 px-[156px]">
        <ClientSuccessStoriesSection />
      </section>
      {/* <section className="relative w-full h-[1870px]">
        <GoogleFeatures />
      </section> */}
    </main>
  );
}
