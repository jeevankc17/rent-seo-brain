import AppButton from "@utils/AppButton";
import React from "react";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "/SEO/ca/frame-2121457477.svg",
    "/SEO/ca/frame-2121457476.svg",
    "/SEO/ca/frame-2121457478.svg",
    "/SEO/ca/frame-2121457479.svg",
  ],
};

interface TestimonialProps {
  rating?: string;
  description?: string;
  avatars?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const SEOTestimonial: React.FC<TestimonialProps> = ({
  rating = defaultTestimonialData.rating,
  description = defaultTestimonialData.description,
  avatars = defaultTestimonialData.avatars,
  ctaLabel = "Book an Appointment",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full max-w-[1128px] mx-auto h-auto min-h-[400px] bg-neutral-900 rounded-[25px] overflow-hidden p-6 lg:h-[640px] lg:rounded-[50px] lg:p-0">
      <div className="relative w-full h-full">
        {/* Background decorative elements - hidden on mobile for performance */}
        <div className="hidden lg:block">
          <div className="absolute w-[263px] h-[196px] top-[444px] left-[49px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[200px] opacity-50" />
          <div className="absolute w-[263px] h-[196px] top-40 left-[280px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[200px] opacity-50" />
          <div className="absolute w-[186px] h-[139px] top-0 left-[942px] bg-neutral-600 rounded-[93.02px/69.45px] blur-[200px] opacity-50" />
          <img
            className="absolute w-full h-full top-0 left-0 object-cover"
            alt="Background pattern"
            src="/SEO/ca/background-pattern-1.svg"
          />
        </div>

        <div className="flex flex-col w-full max-w-[798px] items-center justify-center gap-6 relative z-10 mx-auto py-8 lg:absolute lg:top-[94px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:py-0">
          <div className="flex flex-col w-full max-w-[492px] items-center gap-4 relative">
            <div className="flex flex-col w-full max-w-[177px] items-center gap-4 relative lg:gap-5">
              <div className="inline-flex items-center gap-2 relative lg:gap-3">
                <img
                  className="relative w-20 h-4 lg:w-auto lg:h-auto"
                  alt="5 star rating"
                  src="/SEO/ca/frame-2121457515.svg"
                />

                <div className="relative w-fit font-urbanist font-medium text-neutral-0 text-sm text-center leading-normal whitespace-nowrap lg:text-base">
                  {rating}
                </div>
              </div>

              <div className="flex items-center justify-center relative w-full">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    className={`relative w-8 h-8 ${
                      index === 0 ? "" : "-ml-2"
                    } rounded-full object-cover border-2 border-neutral-900 lg:w-[40.16px] lg:h-[40.16px] lg:border-[1px]`}
                    alt={`Customer avatar ${index + 1}`}
                    src={avatar}
                  />
                ))}

                <div className="relative w-8 h-8 -ml-2 bg-neutral-0 rounded-full border-2 border-neutral-900 flex items-center justify-center overflow-hidden lg:w-[41px] lg:h-[41px] lg:border-[1.11px] lg:border-[#f8f8f9]">
                  <div className="font-urbanist font-medium text-[#0a1519] text-[8px] text-center leading-normal lg:text-[10px]">
                    100K+
                  </div>
                </div>
              </div>
            </div>

            <p className="relative w-full max-w-[404px] font-urbanist font-medium text-[#ffffffb2] text-sm text-center leading-[22px] lg:text-lg lg:leading-[26.1px]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full lg:gap-8">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full lg:gap-4">
              <h1 className="relative w-full max-w-[798px] font-semibold text-neutral-0 text-center leading-tight text-xl md:text-3xl lg:text-5xl">
                Ready to Grow With Google Ads?
              </h1>

              <p className="relative w-full max-w-[598px] font-urbanist font-medium text-[#ffffffb2] text-sm text-center leading-[22px] lg:text-lg lg:leading-[26.1px]">
                Join the brands that trust RENT SEO BRAIN to drive traffic,
                leads, and real revenue through high-performing Google Ads
                campaigns.{" "}
              </p>
            </div>

            <AppButton
              variant="white"
              size="lg"
              onClick={onCtaClick}
              text={ctaLabel}
            />
          </div>
        </div>

        {/* Additional background blur effects - hidden on mobile */}
        <div className="hidden lg:block">
          <div className="absolute w-[266px] h-[231px] top-1 left-0 bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[209.73px]" />
          <div className="absolute w-[266px] h-[231px] top-[421px] left-[967px] bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[209.73px]" />
        </div>
      </div>
    </section>
  );
};
