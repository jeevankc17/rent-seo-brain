import React from "react";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "https://c.animaapp.com/zvzHaAwZ/img/frame-2121457477.svg",
    "https://c.animaapp.com/zvzHaAwZ/img/frame-2121457476.svg",
    "https://c.animaapp.com/zvzHaAwZ/img/frame-2121457478.svg",
    "https://c.animaapp.com/zvzHaAwZ/img/frame-2121457479.svg",
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
    <section className="relative w-[1128px] h-[640px] bg-neutral-900 rounded-[50px] overflow-hidden">
      <div className="relative w-[1233px] h-[653px] left-[-73px]">
        <div className="absolute w-[1128px] h-[640px] top-0 left-[73px]">
          <div className="relative h-[640px]">
            <div className="absolute w-[263px] h-[196px] top-[444px] left-[49px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[200px] opacity-50" />

            <div className="absolute w-[263px] h-[196px] top-40 left-[280px] bg-neutral-600 rounded-[131.44px/98.14px] blur-[200px] opacity-50" />

            <div className="absolute w-[186px] h-[139px] top-0 left-[942px] bg-neutral-600 rounded-[93.02px/69.45px] blur-[200px] opacity-50" />

            <img
              className="absolute w-[1128px] h-[640px] top-0 left-0"
              alt="Background pattern"
              src="https://c.animaapp.com/zvzHaAwZ/img/background-pattern-1.svg"
            />
          </div>
        </div>

        <div className="flex flex-col w-[798px] items-center justify-center gap-6 absolute top-[94px] left-[238px]">
          <div className="flex flex-col w-[492px] items-center gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[177px] items-center gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="5 star rating"
                  src="https://c.animaapp.com/zvzHaAwZ/img/frame-2121457515.svg"
                />

                <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
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

            <p className="relative w-[404px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-lg text-center tracking-[0] leading-[26.1px]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative w-[798px] mt-[-1.00px] font-semibold text-neutral-0 text-center leading-tight text-4xl sm:text-5xl">
              Let's Create Content That Works 
              </h1>

              <p className="relative w-[598px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-lg text-center tracking-[0] leading-[26.1px]">
              Ready to transform your content marketing? Get a personalized strategy that drives real results for your business.
              </p>
            </div>

            <button
              className="all-[unset] box-border flex w-[270px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-0 transition-colors duration-200"
              type="button"
              aria-label="Book an appointment to discuss your business growth"
              onClick={onCtaClick}
            >
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
                See Content Examples
              </span>

              <img
                className="relative w-5 h-5"
                alt=""
                src="https://c.animaapp.com/zvzHaAwZ/img/arrow-right-2.svg"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="absolute w-[266px] h-[231px] top-1 left-0 bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[209.73px]" />

        <div className="absolute w-[266px] h-[231px] top-[421px] left-[967px] bg-[#2e97ffa1] rounded-[133px/115.59px] blur-[209.73px]" />
      </div>
    </section>
  );
};
