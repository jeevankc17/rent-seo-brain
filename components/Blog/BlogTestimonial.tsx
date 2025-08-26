import React from "react";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "/Blog/ca/frame-2121457477.svg",
    "/Blog/ca/frame-2121457476.svg",
    "/Blog/ca/frame-2121457478.svg",
    "/Blog/ca/frame-2121457479.svg",
  ],
};

interface TestimonialProps {
  rating?: string;
  description?: string;
  avatars?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const BlogTestimonial: React.FC<TestimonialProps> = ({
  rating = defaultTestimonialData.rating,
  description = defaultTestimonialData.description,
  avatars = defaultTestimonialData.avatars,
  ctaLabel = "Schedule a Call",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full max-w-[1128px] h-auto md:h-[500px] lg:h-[640px] bg-neutral-900 rounded-[25px] md:rounded-[35px] lg:rounded-[50px] overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full top-0 left-0">
          <div className="relative h-full">
            <div className="absolute w-[150px] md:w-[200px] lg:w-[263px] h-[100px] md:h-[150px] lg:h-[196px] top-[300px] md:top-[400px] lg:top-[444px] left-[20px] md:left-[30px] lg:left-[49px] bg-neutral-600 rounded-[100px/75px] md:rounded-[131.44px/98.14px] blur-[100px] md:blur-[150px] lg:blur-[200px] opacity-50" />

            <div className="absolute w-[150px] md:w-[200px] lg:w-[263px] h-[100px] md:h-[150px] lg:h-[196px] top-20 md:top-32 lg:top-40 left-[150px] md:left-[200px] lg:left-[280px] bg-neutral-600 rounded-[100px/75px] md:rounded-[131.44px/98.14px] blur-[100px] md:blur-[150px] lg:blur-[200px] opacity-50" />

            <div className="absolute w-[100px] md:w-[140px] lg:w-[186px] h-[75px] md:h-[105px] lg:h-[139px] top-0 right-[20px] md:right-[50px] lg:left-[942px] bg-neutral-600 rounded-[75px/55px] md:rounded-[93.02px/69.45px] blur-[100px] md:blur-[150px] lg:blur-[200px] opacity-50" />

            <img
              className="absolute w-full h-full top-0 left-0 object-cover"
              alt="Background pattern"
              src="/Blog/ca/background-pattern-1.svg"
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[798px] items-center justify-center gap-4 md:gap-6 absolute top-8 md:top-16 lg:top-[94px] left-1/2 transform -translate-x-1/2 px-4 md:px-8">
          <div className="flex flex-col w-full max-w-[492px] items-center gap-3 md:gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-full max-w-[177px] items-center gap-3 md:gap-4 lg:gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 md:gap-3 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="5 star rating"
                  src="/Blog/ca/frame-2121457515.svg"
                />

                <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm md:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {rating}
                </div>
              </div>

              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    className={`relative w-[32px] md:w-[36px] lg:w-[40.16px] h-[32px] md:h-[36px] lg:h-[40.16px] mt-[-0.58px] mb-[-0.58px] ${
                      index === 0 ? "ml-[-1.08px]" : "-ml-1"
                    } ${
                      index >= 2
                        ? "w-[33px] md:w-[37px] lg:w-[41.22px] h-[33px] md:h-[37px] lg:h-[41.22px] mt-[-1.11px] mb-[-1.11px]"
                        : ""
                    } rounded-full object-cover`}
                    alt={`Customer avatar ${index + 1}`}
                    src={avatar}
                  />
                ))}

                <div className="relative w-[33px] md:w-[37px] lg:w-[41.22px] h-[33px] md:h-[37px] lg:h-[41.22px] mt-[-1.11px] mb-[-1.11px] mr-[-2.41px] -ml-2 bg-neutral-0 rounded-full border-[1px] md:border-[1.11px] border-solid border-[#f8f8f9] flex items-center justify-center overflow-hidden">
                  <div className="[font-family:'Urbanist',Helvetica] font-medium text-[#0a1519] text-[8px] md:text-[9px] lg:text-[10px] text-center leading-[normal]">
                    100K+
                  </div>
                </div>
              </div>
            </div>

            <p className="relative w-full max-w-[404px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-sm md:text-base lg:text-lg text-center tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[26.1px]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-3 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative w-full max-w-[798px] mt-[-1.00px] font-semibold text-neutral-0 text-center leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Need Help With Your SEO?{" "}
              </h1>

              <p className="relative w-full max-w-[598px] [font-family:'Urbanist',Helvetica] font-medium text-[#ffffffb2] text-sm md:text-base lg:text-lg text-center tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[26.1px]">
                Our experts can audit, optimize, and grow your site traffic —
                fast. Get a comprehensive SEO strategy tailored to your
                business.
              </p>
            </div>

            <button
              className="all-[unset] box-border flex w-full max-w-[270px] h-[45px] md:h-[50px] items-center justify-center gap-[5px] md:gap-[7px] px-4 md:px-[19px] py-2 md:py-2.5 relative bg-grey-50 rounded-[28px] md:rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-0 transition-colors duration-200"
              type="button"
              aria-label="Book an appointment to discuss your business growth"
              onClick={onCtaClick}
            >
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-sm md:text-base tracking-[0] leading-4 whitespace-nowrap">
                {ctaLabel}
              </span>

              <img
                className="relative w-4 md:w-5 h-4 md:h-5"
                alt=""
                src="https://c.animaapp.com/zvzHaAwZ/img/arrow-right-2.svg"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="absolute w-[150px] md:w-[200px] lg:w-[266px] h-[130px] md:h-[170px] lg:h-[231px] top-1 left-0 bg-[#2e97ffa1] rounded-[100px/80px] md:rounded-[133px/115.59px] blur-[150px] md:blur-[180px] lg:blur-[209.73px]" />

        <div className="absolute w-[150px] md:w-[200px] lg:w-[266px] h-[130px] md:h-[170px] lg:h-[231px] top-[300px] md:top-[350px] lg:top-[421px] right-0 lg:left-[967px] bg-[#2e97ffa1] rounded-[100px/80px] md:rounded-[133px/115.59px] blur-[150px] md:blur-[180px] lg:blur-[209.73px]" />
      </div>
    </section>
  );
};
