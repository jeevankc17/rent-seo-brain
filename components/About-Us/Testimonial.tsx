import AppButton from "@utils/AppButton";
import React from "react";

const defaultTestimonialData = {
  rating: "4.9/5",
  description:
    "Over 100k+ businesses choose RENT SEO BRAIN for results that matter.",
  avatars: [
    "/About/ca/frame-2121457477.svg",
    "/About/ca/frame-2121457476.svg",
    "/About/ca/frame-2121457478.svg",
    "/About/ca/frame-2121457479.svg",
  ],
};

interface TestimonialProps {
  rating?: string;
  description?: string;
  avatars?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  rating = defaultTestimonialData.rating,
  description = defaultTestimonialData.description,
  avatars = defaultTestimonialData.avatars,
  ctaLabel = "Book An Appointment",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full max-w-[1128px] h-auto sm:h-[500px] md:h-[600px] lg:h-[640px] bg-neutral-900 rounded-3xl sm:rounded-[50px] overflow-hidden mx-auto my-8 lg:my-12">
      <div className="relative w-full h-full lg:w-[1233px] lg:left-[-73px] lg:h-[653px]">
        <div className="absolute w-full h-full lg:w-[1128px] lg:left-[73px] lg:h-[640px]">
          <div className="relative w-full h-full min-h-[500px] sm:min-h-[600px] lg:h-[640px]">
            <div className="hidden sm:block absolute w-[150px] h-[112px] sm:w-[200px] sm:h-[150px] md:w-[263px] md:h-[196px] top-[60%] sm:top-[444px] left-[10%] sm:left-[49px] bg-neutral-600 rounded-full blur-[100px] sm:blur-[150px] md:blur-[200px] opacity-50" />

            <div className="hidden sm:block absolute w-[150px] h-[112px] sm:w-[200px] sm:h-[150px] md:w-[263px] md:h-[196px] top-32 sm:top-40 left-[30%] sm:left-[280px] bg-neutral-600 rounded-full blur-[100px] sm:blur-[150px] md:blur-[200px] opacity-50" />

            <div className="hidden sm:block absolute w-[100px] h-[75px] sm:w-[150px] sm:h-[112px] md:w-[186px] md:h-[139px] top-0 right-[5%] md:right-[10%] lg:left-[942px] bg-neutral-600 rounded-full blur-[80px] sm:blur-[120px] md:blur-[200px] opacity-50" />

            <img
              className="absolute w-full h-full object-cover"
              alt="Background pattern"
              src="/About/ca/background-pattern-1.svg"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[798px] items-center justify-center gap-4 sm:gap-6 absolute top-8 sm:top-16 md:top-[94px] left-1/2 transform -translate-x-1/2 lg:left-[238px] lg:translate-x-0 px-4 sm:px-6 py-8 sm:py-12 lg:py-0">
          <div className="flex flex-col w-full max-w-[492px] items-center gap-3 sm:gap-4">
            <div className="flex flex-col w-full max-w-[177px] items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="5 star rating"
                  src="/About/ca/frame-2121457515.svg"
                />

                <div className="font-sans font-medium text-white text-sm sm:text-base text-center leading-none">
                  {rating}
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 ${
                      index > 0 ? "-ml-2 sm:-ml-3" : ""
                    } rounded-full border-2 border-white`}
                    alt={`Customer avatar ${index + 1}`}
                    src={avatar}
                  />
                ))}

                <div className="relative w-10 h-10 sm:w-[41.22px] sm:h-[41.22px] -ml-2 bg-white rounded-full border-2 border-white flex items-center justify-center">
                  <span className="font-sans font-medium text-neutral-900 text-xs sm:text-[10px] text-center whitespace-nowrap">
                    100K+
                  </span>
                </div>
              </div>
            </div>

            <p className="w-full max-w-[404px] font-sans font-medium text-white/70 text-sm sm:text-base md:text-lg text-center leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-8 w-full mt-6 sm:mt-8">
            <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
              <h1 className="w-full font-sans font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
                Ready to Grow With Us?
              </h1>

              <p className="w-full max-w-[598px] font-sans font-medium text-white/70 text-sm sm:text-base md:text-lg text-center leading-relaxed">
                Let&#39;s talk strategy, goals, and what success looks like for
                your brand. Get a free consultation and discover how we can
                accelerate your growth.
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

        <div className="hidden sm:block absolute w-[133px] h-[116px] sm:w-[200px] sm:h-[174px] md:w-[266px] md:h-[231px] top-0 left-0 bg-[#2e97ffa1] rounded-full blur-[100px] sm:blur-[150px] md:blur-[209.73px]" />

        <div className="hidden sm:block absolute w-[133px] h-[116px] sm:w-[200px] sm:h-[174px] md:w-[266px] md:h-[231px] bottom-0 right-0 bg-[#2e97ffa1] rounded-full blur-[100px] sm:blur-[150px] md:blur-[209.73px]" />
      </div>
    </section>
  );
};
