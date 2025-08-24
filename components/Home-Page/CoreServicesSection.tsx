import React from "react";

export const CoreServicesSection: React.FC = () => {
  const landingPageFeatures = [
    "Modern Conversion-focused Interfaces",
    "Fast-loading, performance-optimized",
    "Mobile-first & responsive layout",
    "Clean UX backed by data",
  ];

  const seoFeatures = [
    "On-page SEO optimization",
    "Technical SEO fixes & audits",
    "Local SEO for maps and local search",
    "High-authority link building",
  ];

  const googleAdsFeatures = [
    "Instantly increase website traffic",
    "Outrank competitors with smart bidding",
    "Get measurable results and ROI",
    "Reach local and global audiences",
  ];

  const chartDays = [
    { label: "MON", line: "/Home-Page/ca/line-3.svg" },
    { label: "TUE", line: "/Home-Page/ca/line-3-1.svg" },
    { label: "WED", line: "/Home-Page/ca/line-3-2.svg" },
    { label: "THU", line: "/Home-Page/ca/line-3-3.svg" },
    { label: "FRI", line: "/Home-Page/ca/line-3-4.svg" },
    { label: "SAT", line: "/Home-Page/ca/line-3-5.svg" },
    { label: "SUN", line: "/Home-Page/ca/line-3-6.svg" },
  ];

  return (
    <section className="flex flex-col w-[1128px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="w-[552px] justify-center gap-6 flex-[0_0_auto] flex flex-col items-center relative">
        <div className="flex w-[193px] items-center justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-300">
          <div className="flex w-[173px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px] border-[0.2px] border-solid border-secondary-200">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/Home-Page/ca/stars.svg"
            />

            <div className="relative w-[117px] mt-[-0.20px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-sm tracking-[0] leading-[23px]">
              Our Core Services
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
            Landing Pages, SEO &amp; Ads, Built to Convert
          </h1>

          <p className="relative self-stretch h-[45px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-900 text-base text-center tracking-[0] leading-[23px]">
            We create performance-driven digital experiences — from
            high-converting landing pages to powerful SEO and strategic Google
            Ads.
          </p>
        </div>
      </header>

      <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[552px] items-start gap-6 relative">
          <article className="flex-col w-[552px] h-[300px] items-start justify-center px-[21px] py-[23px] bg-neutral-0 rounded-[18px] border-grey-200 flex gap-2.5 relative border border-solid">
            <div className="flex flex-col h-[258px] items-start gap-[30px] relative self-stretch w-full mt-[-2.00px] mb-[-2.00px]">
              <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-primary-300 rounded-[50px]">
                  <img
                    className="relative w-6 h-6"
                    alt="Pen tool"
                    src="/Home-Page/ca/pen-tool.svg"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Landing Page Design
                    </h2>

                    <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[3px] relative flex-[0_0_auto] bg-secondary-100 rounded-[50px]">
                      <div className="relative w-fit mt-[-0.30px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                        High Converting Pages
                      </div>
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                    Custom-built pages optimized for conversions and user
                    experience.
                  </p>
                </div>
              </div>

              <ul className="flex flex-col w-[510px] h-[121px] items-start gap-[13px] relative">
                {landingPageFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <img
                      className="relative w-[13px] h-[13px]"
                      alt="Checkmark"
                      src="/Home-Page/ca/frame-2121457509-11.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="flex-col w-[552px] h-[300px] items-start justify-center px-[21px] py-[23px] bg-neutral-0 rounded-[18px] border-grey-200 flex gap-2.5 relative border border-solid">
            <div className="h-[258px] gap-[27px] mt-[-2.00px] mb-[-2.00px] flex flex-col items-start relative self-stretch w-full">
              <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-primary-300 rounded-[50px]">
                  <img
                    className="relative w-6 h-6"
                    alt="Search"
                    src="/Home-Page/ca/search.svg"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      SEO
                    </h2>

                    <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[3px] relative flex-[0_0_auto] bg-secondary-100 rounded-[50px]">
                      <div className="relative w-fit mt-[-0.30px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                    Get found on Google with strategies that actually work.
                  </p>
                </div>
              </div>

              <ul className="flex flex-col w-[510px] h-[124px] items-start gap-[13px] relative">
                {seoFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <img
                      className="relative w-[13px] h-[13px]"
                      alt="Checkmark"
                      src="/Home-Page/ca/frame-2121457509-7.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <article className="flex-col w-[552px] h-[624px] items-start px-[21px] py-[23px] bg-grey-50 rounded-[18px] border-grey-200 flex gap-2.5 relative border border-solid">
          <div className="h-[578px] gap-[33px] flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-start gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-primary-300 rounded-[50px]">
                  <img
                    className="relative w-6 h-6 aspect-[1]"
                    alt="Google Ads"
                    src="/Home-Page/ca/akar-icons-google-fill.svg"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Google Ads
                    </h2>
                  </div>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                    Instant visibility with ROI-focused paid campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-[510px] h-[287px]">
              <div className="relative h-[287px] bg-white rounded-[5px]">
                <div className="inline-flex items-center gap-3 absolute top-[11px] left-[25px]">
                  <img
                    className="relative w-6 h-6"
                    alt="Trending up"
                    src="/Home-Page/ca/trending-up.svg"
                  />

                  <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    Campaign Performance
                  </div>
                </div>

                <div className="flex w-[463px] items-start gap-4 absolute top-[74px] left-6">
                  <img
                    className="absolute w-[462px] h-32 top-0 left-0 z-[1]"
                    alt="Performance chart"
                    src="/Home-Page/ca/mask-group@2x.png"
                  />

                  <div className="flex w-[434.62px] items-start justify-between relative z-0">
                    {chartDays.map((day, index) => (
                      <div
                        key={index}
                        className="inline-flex flex-col h-40 items-center gap-4 relative flex-[0_0_auto]"
                      >
                        <img
                          className="relative flex-1 w-px grow object-cover"
                          alt={`${day.label} chart line`}
                          src={day.line}
                        />

                        <div className="relative w-[27px] h-[15px] [font-family:'Inter',Helvetica] font-medium text-grey-500 text-[10px] text-center tracking-[-0.30px] leading-[normal]">
                          {day.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ul className="flex flex-col h-[118px] items-start gap-[13px] relative self-stretch w-full">
              {googleAdsFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <img
                    className="relative w-[13px] h-[13px]"
                    alt="Checkmark"
                    src="/Home-Page/ca/frame-2121457509-11.svg"
                  />

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {feature}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
        <button className="flex w-[248px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1]">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
            Run A&nbsp;&nbsp;Seo &amp; Ads Audit
          </span>

          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
            <img
              className="relative w-5 h-5"
              alt="Arrow right"
              src="/Home-Page/ca/arrow-right.svg"
            />
          </div>
        </button>

        <button className="all-[unset] box-border flex w-[220px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-base tracking-[0] leading-4 whitespace-nowrap">
            Book An Appointment
          </span>

          <img
            className="relative w-5 h-5"
            alt="Arrow right"
            src="/Home-Page/ca/arrow-right-3.svg"
          />
        </button>
      </div>
    </section>
  );
};
