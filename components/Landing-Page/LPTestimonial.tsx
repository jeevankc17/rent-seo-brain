import React from "react";
import AppButton from "@/utils/AppButton";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "/LP/ca/frame-2121457477.svg",
    "/LP/ca/frame-2121457476.svg",
    "/LP/ca/frame-2121457478.svg",
    "/LP/ca/frame-2121457479.svg",
  ],
};

interface TestimonialProps {
  rating?: string;
  description?: string;
  avatars?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const LPTestimonial: React.FC<TestimonialProps> = ({
  rating = defaultTestimonialData.rating,
  description = defaultTestimonialData.description,
  avatars = defaultTestimonialData.avatars,
  ctaLabel = "Book An Appointment",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full max-w-[1128px] h-auto lg:h-[640px] bg-neutral-900 rounded-[25px] lg:rounded-[50px] overflow-hidden mx-auto">
      <div className="relative w-full lg:w-[1233px] h-auto lg:h-[653px] lg:left-[-73px]">
        <div className="relative lg:absolute w-full lg:w-[1128px] h-auto lg:h-[640px] lg:top-0 lg:left-[73px]">
          <div className="relative h-auto lg:h-[640px]">
            <div className="hidden lg:block absolute w-[263px] h-[196px] top-[444px] left-[49px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[200px] opacity-50" />

            <div className="hidden lg:block absolute w-[263px] h-[196px] top-40 left-[280px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[200px] opacity-50" />

            <div className="hidden lg:block absolute w-[186px] h-[139px] top-0 left-[942px] bg-neutral-600 rounded-[93.02px/69.45px] blur-[200px] opacity-50" />

            <img
              className="absolute w-full h-full top-0 left-0 opacity-30 lg:opacity-100"
              alt="Background pattern"
              src="/LP/ca/background-pattern-1.svg"
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[798px] items-center justify-center gap-6 relative lg:absolute lg:top-[94px] lg:left-[238px] p-6 lg:p-0">
          <div className="flex flex-col w-full max-w-[492px] items-center gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-full max-w-[177px] items-center gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="5 star rating"
                  src="/LP/ca/frame-2121457515.svg"
                />

                <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {rating}
                </div>
              </div>

              <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    className={`relative w-8 lg:w-[40.16px] h-8 lg:h-[40.16px] mt-[-0.58px] mb-[-0.58px] ${
                      index === 0 ? "ml-[-1.08px]" : "-ml-1"
                    } ${
                      index >= 2
                        ? "lg:w-[41.22px] lg:h-[41.22px] mt-[-1.11px] mb-[-1.11px]"
                        : ""
                    } rounded-full object-cover`}
                    alt={`Customer avatar ${index + 1}`}
                    src={avatar}
                  />
                ))}

                <div className="relative w-8 lg:w-[41.22px] h-8 lg:h-[41.22px] mt-[-1.11px] mb-[-1.11px] mr-[-2.41px] -ml-2 bg-neutral-0 rounded-full border-[1.11px] border-solid border-[#f8f8f9] flex items-center justify-center overflow-hidden">
                  <div className="[font-family:'Urbanist',Helvetica] font-medium text-[#0a1519] text-[8px] lg:text-[10px] text-center leading-[normal]">
                    100K+
                  </div>
                </div>
              </div>
            </div>

            <p className="relative w-full max-w-[404px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-base lg:text-lg text-center tracking-[0] leading-[22px] lg:leading-[26.1px]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative w-full max-w-[798px] mt-[-1.00px] font-semibold text-neutral-0 text-center leading-tight text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                Ready to Grow With Google Ads?
              </h1>

              <p className="relative w-full max-w-[598px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-base lg:text-lg text-center tracking-[0] leading-[22px] lg:leading-[26.1px]">
                Join the brands that trust RENT SEO BRAIN to drive traffic,
                leads, and real revenue through high-performing Google Ads
                campaigns.
              </p>
            </div>

            <AppButton
              text={ctaLabel}
              variant="white"
              size="lg"
              onClick={onCtaClick}
            />
          </div>
        </div>

        <div className="hidden lg:block absolute w-[266px] h-[231px] top-1 left-0 bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[209.73px]" />

        <div className="hidden lg:block absolute w-[266px] h-[231px] top-[421px] left-[967px] bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[209.73px]" />
      </div>
    </section>
  );
};
