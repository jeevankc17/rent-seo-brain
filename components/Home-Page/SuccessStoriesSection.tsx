import React from "react";
import Image from "next/image";

export const SuccessStoriesSection: React.FC = () => {
  const starImages = [
    "/Home-Page/ca/star-filled.svg",
    "/Home-Page/ca/star-filled-1.svg",
    "/Home-Page/ca/star-filled-2.svg",
    "/Home-Page/ca/star-filled-3.svg",
    "/Home-Page/ca/star-filled-4.svg",
  ];

  const statsData = [
    {
      icon: "/Home-Page/ca/trending-up-1.svg",
      iconAlt: "Trending up",
      value: "214%",
      title: "Traffic Growth",
      subtitle: "Organic Traffic Increase",
      position: "top-0 left-[99px]",
    },
    {
      icon: "/Home-Page/ca/eye.svg",
      iconAlt: "Eye",
      value: "4x",
      title: "More Pageviews",
      subtitle: "Average Session Engagement",
      position: "top-48 left-0",
    },
    {
      icon: "/Home-Page/ca/user-check.svg",
      iconAlt: "User check",
      value: "3x",
      title: "Lead Generation",
      subtitle: "Qualified Leads Per Month",
      position: "top-[378px] left-[99px]",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1128px] items-center gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0">
      <header className="w-full max-w-[552px] justify-center gap-4 flex-[0_0_auto] flex flex-col items-center relative">
        <div className="flex w-full max-w-[182px] items-center justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[35px] lg:rounded-[45px] border border-solid border-secondary-300">
          <div className="w-full max-w-[169px] justify-center bg-secondary-50 border-[0.2px] border-solid border-secondary-200 flex items-center gap-1.5 px-2 py-0.5 relative rounded-[35px] lg:rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/Home-Page/ca/stars-1.svg"
            />

            <div className="relative w-fit mt-[-0.20px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px]">
              Our Success Portfolio
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto lg:h-44 items-center justify-center gap-4 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.50px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-3xl md:text-4xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
            Real Results for Real Businesses
          </h2>

          <p className="relative self-stretch h-auto [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm md:text-base lg:text-base text-center tracking-[0] leading-[18px] md:leading-[20px] lg:leading-[23px]">
            Don&#39;t just take our word for it. See how we&#39;ve helped
            businesses like yours achieve remarkable growth through strategic
            content marketing.
          </p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row w-full items-center gap-6 lg:gap-[11px] relative flex-[0_0_auto]">
        <article className="flex flex-col w-full lg:w-[452px] h-auto lg:h-[280px] items-start gap-6 lg:gap-9 px-6 lg:px-9 py-6 lg:py-[30px] relative bg-white rounded-[8px] lg:rounded-[11px_11px_4px_4px] border-t-[3px] lg:border-t-[5px] [border-top-style:solid] shadow-[0px_4px_18px_#1d8fff33] border-[none] before:content-[''] before:absolute before:inset-0 before:p-[3px] lg:before:p-[5px] before:rounded-[8px] lg:before:rounded-[11px_11px_4px_4px] before:z-[1] before:pointer-events-none">
          <div className="flex flex-col items-start gap-6 lg:gap-9 relative z-10 self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 lg:gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="inline-flex items-center gap-[2.67px] relative flex-[0_0_auto]"
                role="img"
                aria-label="5 star rating"
              >
                {starImages.map((starSrc, index) => (
                  <img
                    key={index}
                    className="relative w-5 h-5 lg:w-[24.06px] lg:h-[24.06px]"
                    alt="Star filled"
                    src={starSrc}
                  />
                ))}
              </div>

              <blockquote className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-600 text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[26px]">
                &#34;the Seo Transformation Turned Our Struggling Online Store
                Into A Profitable Business. Our Organic Sales Now Exceed Our
                Paid Advertising Results.&#34;
              </blockquote>
            </div>

            <div className="inline-flex items-center gap-3 lg:gap-[15px] relative flex-[0_0_auto]">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/SJ.png"
                  alt="testimonial avatar shape"
                  width={40}
                  height={40}
                  className="object-cover lg:w-12 lg:h-12"
                  unoptimized
                />
              </div>

              <div className="flex flex-col w-full lg:w-[251px] items-start relative">
                <cite className="font-semibold text-primary-300 text-sm lg:text-base leading-[20px] lg:leading-[26px] relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0] not-italic">
                  Sarah Johnson
                </cite>

                <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs lg:text-sm text-left lg:text-center tracking-[0] leading-[18px] lg:leading-[26px]">
                  Marketing Director at techflow Solutions
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="relative w-full lg:w-[665px] h-auto lg:h-[490px] hidden lg:block">
          <div className="relative h-[490px]">
            <div className="absolute w-[428px] h-[490px] top-0 left-[237px]">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.position} flex w-[280px] lg:w-[329px] items-center gap-3 lg:gap-[18px] px-6 lg:px-[37px] py-3 lg:py-3.5 absolute bg-white rounded-[10px] lg:rounded-[13px] shadow-[0px_4px_27.7px_#f7b50d1f]`}
                >
                  <div className="flex w-10 h-10 lg:w-12 lg:h-12 items-center justify-center gap-2.5 p-2 lg:p-2.5 relative bg-secondary-100 rounded-[35px] lg:rounded-[43px] shadow-[0px_4px_19.5px_#f7b50d54]">
                    <img
                      className="relative w-5 h-5 lg:w-6 lg:h-6"
                      alt={stat.iconAlt}
                      src={stat.icon}
                    />
                  </div>

                  <div className="flex flex-col w-full lg:w-[168px] items-start gap-1 lg:gap-2 relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[26px]">
                      {stat.value}
                    </div>

                    <div className="flex flex-col w-full lg:w-[215px] items-start justify-center gap-1 relative flex-[0_0_auto] lg:mr-[-47.00px]">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-700 text-sm lg:text-base tracking-[0] leading-4 lg:leading-5">
                        {stat.title}
                      </div>

                      <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[26px]">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <img
              className="absolute w-[314px] h-[382px] top-14 left-0"
              alt="Analytics chart visualization"
              src="/Home-Page/ca/frame-2121458223.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

