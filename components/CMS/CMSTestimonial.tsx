import React from "react";
import AppButton from "@/utils/AppButton";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "/CMS/ca/frame-2121457477.svg",
    "/CMS/ca/frame-2121457476.svg",
    "/CMS/ca/frame-2121457478.svg",
    "/CMS/ca/frame-2121457479.svg",
  ],
};

interface TestimonialProps {
  rating?: string;
  description?: string;
  avatars?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const CMSTestimonial: React.FC<TestimonialProps> = ({
  rating = defaultTestimonialData.rating,
  description = defaultTestimonialData.description,
  avatars = defaultTestimonialData.avatars,
  ctaLabel = "Book An Appointment",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full max-w-sm md:max-w-5xl lg:w-[1128px] mx-auto h-auto min-h-[400px] md:min-h-[500px] lg:h-[640px] bg-neutral-900 rounded-[25px] md:rounded-[35px] lg:rounded-[50px] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Blur backgrounds - hidden on mobile for performance */}
        <div className="hidden md:block absolute w-32 h-24 md:w-48 md:h-36 lg:w-[263px] lg:h-[196px] bottom-8 left-4 md:bottom-16 md:left-8 lg:top-[444px] lg:left-[49px] bg-neutral-600 rounded-full blur-[100px] md:blur-[150px] lg:blur-[200px] opacity-50" />
        <div className="hidden md:block absolute w-32 h-24 md:w-48 md:h-36 lg:w-[263px] lg:h-[196px] top-8 left-1/2 transform -translate-x-1/2 md:top-16 lg:top-40 lg:left-[280px] lg:transform-none bg-neutral-600 rounded-full blur-[100px] md:blur-[150px] lg:blur-[200px] opacity-50" />
        <div className="hidden lg:block absolute w-[186px] h-[139px] top-0 right-0 bg-neutral-600 rounded-full blur-[200px] opacity-50" />

        {/* Background pattern - hidden on mobile */}
        <img
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-50 lg:opacity-100"
          alt="Background pattern"
          src="/CMS/ca/background-pattern-1.svg"
        />

        {/* Additional blur elements */}
        <div className="hidden lg:block absolute w-[266px] h-[231px] top-1 left-0 bg-[#2e97ffa1] rounded-full blur-[209.73px]" />
        <div className="hidden lg:block absolute w-[266px] h-[231px] bottom-1 right-0 bg-[#2e97ffa1] rounded-full blur-[209.73px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-6 p-6 md:p-8 lg:p-12 h-full min-h-[400px] md:min-h-[500px] lg:min-h-[640px]">
        {/* Rating and Avatars Section */}
        <div className="flex flex-col w-full max-w-xs md:max-w-md lg:w-[492px] items-center gap-3 md:gap-4">
          <div className="flex flex-col w-full max-w-[140px] md:max-w-[160px] lg:w-[177px] items-center gap-3 md:gap-4 lg:gap-5">
            {/* Rating */}
            <div className="inline-flex items-center gap-2 md:gap-3">
              <img
                className="w-16 h-3 md:w-20 md:h-4 lg:w-auto lg:h-auto"
                alt="5 star rating"
                src="/CMS/ca/frame-2121457515.svg"
              />
              <div className="font-urbanist font-medium text-neutral-0 text-sm md:text-base text-center whitespace-nowrap">
                {rating}
              </div>
            </div>

            {/* Avatars */}
            <div className="flex items-center justify-center w-full">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  className={`relative w-8 h-8 md:w-9 md:h-9 lg:w-[40.16px] lg:h-[40.16px] ${
                    index === 0 ? "" : "-ml-1 md:-ml-1 lg:-ml-1"
                  } ${
                    index >= 2 ? "lg:w-[41.22px] lg:h-[41.22px]" : ""
                  } rounded-full object-cover border-2 border-neutral-900`}
                  alt={`Customer avatar ${index + 1}`}
                  src={avatar}
                />
              ))}
              <div className="relative w-8 h-8 md:w-9 md:h-9 lg:w-[41.22px] lg:h-[41.22px] -ml-1 bg-neutral-0 rounded-full border-2 border-neutral-900 flex items-center justify-center">
                <div className="font-urbanist font-medium text-[#0a1519] text-[8px] md:text-[9px] lg:text-[10px] text-center">
                  100K+
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="w-full max-w-xs md:max-w-sm lg:w-[404px] font-urbanist font-medium text-[#ffffffb2] text-sm md:text-base lg:text-lg text-center leading-relaxed">
            {description}
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-md md:max-w-2xl lg:w-[798px]">
          <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
            {/* Main Heading */}
            <h1 className="w-full font-urbanist font-semibold text-neutral-0 text-center leading-tight text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Let's Create Content That Works
            </h1>

            {/* Subheading */}
            <p className="w-full max-w-sm md:max-w-lg lg:w-[598px] font-urbanist font-medium text-[#ffffffb2] text-sm md:text-base lg:text-lg text-center leading-relaxed">
              Ready to transform your content marketing? Get a personalized
              strategy that drives real results for your business.
            </p>
          </div>

          {/* CTA Button */}
          <AppButton
            text="See Content Examples"
            variant="white"
            size="lg"
            onClick={onCtaClick}
          />
        </div>
      </div>
    </section>
  );
};
