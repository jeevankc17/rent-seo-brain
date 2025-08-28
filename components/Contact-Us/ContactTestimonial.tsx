import AppButton from "@utils/AppButton";
import React from "react";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "/Contact/ca/frame-2121457477.svg",
    "/Contact/ca/frame-2121457476.svg",
    "/Contact/ca/frame-2121457478.svg",
    "/Contact/ca/frame-2121457479.svg",
  ],
};

interface TestimonialProps {
  rating?: string;
  description?: string;
  avatars?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const ContactTestimonial: React.FC<TestimonialProps> = ({
  rating = defaultTestimonialData.rating,
  description = defaultTestimonialData.description,
  avatars = defaultTestimonialData.avatars,
  ctaLabel = "Book An Appointment",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full max-w-[1128px] h-auto lg:h-[640px] bg-neutral-900 rounded-[20px] lg:rounded-[50px] overflow-hidden">
      <div className="relative w-full lg:w-[1233px] h-auto lg:h-[653px] lg:left-[-73px]">
        <div className="relative lg:absolute w-full lg:w-[1128px] h-auto lg:h-[640px] lg:top-0 lg:left-[73px]">
          <div className="relative h-auto lg:h-[640px]">
            <div className="absolute w-[150px] lg:w-[263px] h-[100px] lg:h-[196px] top-[200px] lg:top-[444px] left-[20px] lg:left-[49px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[100px] lg:blur-[200px] opacity-50" />

            <div className="absolute w-[150px] lg:w-[263px] h-[100px] lg:h-[196px] top-20 lg:top-40 left-[150px] lg:left-[280px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[100px] lg:blur-[200px] opacity-50" />

            <div className="absolute w-[100px] lg:w-[186px] h-[75px] lg:h-[139px] top-0 right-0 lg:left-[942px] bg-neutral-600 rounded-[93.02px/69.45px] blur-[100px] lg:blur-[200px] opacity-50" />

            <img
              className="absolute w-full h-full lg:w-[1128px] lg:h-[640px] top-0 left-0"
              alt="Background pattern"
              src="/Contact/ca/background-pattern-1.svg"
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[798px] items-center justify-center gap-6 relative lg:absolute lg:top-[94px] lg:left-[238px] px-4 lg:px-0 py-8 lg:py-0">
          <div className="flex flex-col w-full max-w-[492px] items-center gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-auto items-center gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="5 star rating"
                  src="/Contact/ca/frame-2121457515.svg"
                />

                <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {rating}
                </div>
              </div>

              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    className={`relative w-[40.16px] h-[40.16px] mt-[-0.58px] mb-[-0.58px] ${
                      index === 0 ? "ml-[-1.08px]" : "-ml-1"
                    } ${
                      index >= 2
                        ? "w-[41.22px] h-[41.22px] mt-[-1.11px] mb-[-1.11px]"
                        : ""
                    } rounded-full object-cover`}
                    alt={`Customer avatar ${index + 1}`}
                    src={avatar}
                  />
                ))}

                <div className="relative w-[41.22px] h-[41.22px] mt-[-1.11px] mb-[-1.11px] mr-[-2.41px] -ml-2 bg-neutral-0 rounded-full border-[1.11px] border-solid border-[#f8f8f9] flex items-center justify-center overflow-hidden">
                  <div className="[font-family:'Urbanist',Helvetica] font-medium text-[#0a1519] text-[10px] text-center leading-[normal]">
                    100K+
                  </div>
                </div>
              </div>
            </div>

            <p className="relative w-full max-w-[404px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-base lg:text-lg text-center tracking-[0] leading-[24px] lg:leading-[26.1px]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative w-full max-w-[798px] mt-[-1.00px] font-semibold text-neutral-0 text-center leading-tight text-xl md:text-3xl lg:text-4xl">
                Ready to Grow With Us?{" "}
              </h1>

              <p className="relative w-full max-w-[598px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-base lg:text-lg text-center tracking-[0] leading-[24px] lg:leading-[26.1px]">
                Let's talk strategy, goals, and what success looks like for your
                brand. Get a free consultation and discover how we can
                accelerate your growth.{" "}
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

        <div className="absolute w-[150px] lg:w-[266px] h-[130px] lg:h-[231px] top-1 left-0 bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[100px] lg:blur-[209.73px]" />

        <div className="absolute w-[150px] lg:w-[266px] h-[130px] lg:h-[231px] bottom-0 lg:top-[421px] right-0 lg:left-[967px] bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[100px] lg:blur-[209.73px]" />
      </div>
    </section>
  );
};
