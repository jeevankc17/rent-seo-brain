"use client";
import React from "react";

const testimonialData = {
  quote:
    "Our Google Ads conversion rate jumped from 2.8% to 7.4% after launching a page designed by Rent SEO Brain.",
  author: "Ramesh D., Co-founder, SaaS Growlytics",
  avatar: "/LP/ca/avatar-6@2x.png",
  rating: 5,
};

const performanceCards = [
  {
    id: 1,
    title: "+165% Increase In Conversions",
    description:
      "Strategic Layout, Clear Ctas, And Optimized Ux Turned Visitors Into Loyal Customers.",
    color: "secondary-300",
    rotation: "-9.13deg",
    position: { top: "29px", left: "35px" },
    gradient:
      "linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(249,189,36,0.1)_100%)",
    borderGradient:
      "linear-gradient(180deg,rgba(224,224,224,0.31)_0%,rgba(247,181,13,0.23)_100%)",
    metrics: [
      {
        label: "Click-through Rate",
        value: "12.4%",
        icon: "/LP/ca/arrow-up.svg",
      },
      {
        label: "Bounce Rate",
        value: "23.1%",
        icon: "/LP/ca/arrow-up-1.svg",
      },
      {
        label: "Avg. Session Duration",
        value: "4:3",
        icon: " /LP/ca/arrow-up-2.svg",
      },
    ],
    chartData: [
      { month: "Jan", height: "8.67px" },
      { month: "Feb", height: "16.56px" },
      { month: "Mar", height: "34.93px" },
      { month: "Apr", height: "45.06px" },
      { month: "May", height: "69px" },
    ],
  },
  {
    id: 2,
    title: "3x Faster Load Time On Mobile",
    description:
      "Our Mobile-first Approach Ensures Your Page Loads In Seconds, Not Stalls.",
    color: "#00b45c",
    rotation: "6.00deg",
    position: { top: "21px", left: "737px" },
    gradient:
      "linear-gradient(180deg,rgba(255,255,255,1)_45%,rgba(255,255,255,1)_100%)",
    border: "16.46px solid var(--primary-50)",
    metrics: [
      {
        label: "Core Web Vitals",
        value: "65/100",
        icon: "/LP/ca/arrow-up-3.svg",
      },
      {
        label: "Mobile Score",
        value: "56/100",
        icon: "/LP/ca/arrow-up-4.svg",
      },
      {
        label: "Seo Imapct",
        value: "+23%",
        icon: "/LP/ca/arrow-up-5.svg",
      },
    ],
  },
  {
    id: 3,
    title: "2.5x Lower Cost Per Lead",
    description:
      "Better Design Meant Better Quality Scores — Leading To Cheaper, More Efficient Ad Spend.",
    color: "primary-300",
    rotation: "0deg",
    position: { top: "0", left: "380px" },
    gradient: "white",
    border: "16.46px solid var(--grey-100)",
    shadow: "0px_4.39px_9.33px_5.49px_transparent",
    chartData: [
      { month: "Jan", height: "5px" },
      { month: "Feb", height: "12px" },
      { month: "Mar", height: "21px" },
      { month: "Apr", height: "29px" },
      { month: "May", height: "37px" },
      { month: "June", height: "53px" },
    ],
  },
];

const starIcons = [
  "/LP/ca/star-filled-5.svg",
  "/LP/ca/star-filled-6.svg",
  "/LP/ca/star-filled-7.svg",
  "/LP/ca/star-filled-8.svg",
  "/LP/ca/star-filled-9.svg",
];

export default function ClientSuccessStoriesSection() {
  return (
    <section
      className="flex flex-col w-full max-w-[1125.39px] items-center gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0 mx-auto"
      role="region"
      aria-labelledby="success-stories-heading"
    >
      <header className="flex flex-col w-full max-w-[552px] items-center justify-center gap-6 relative flex-[0_0_auto]">
        <div className="flex w-auto items-center justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-[var(--secondary-300)]">
          <div className="flex w-auto items-center justify-center gap-1.5 px-2 py-0.5 relative bg-[var(--secondary-50)] rounded-[45px] border-[0.2px] border-solid border-[var(--secondary-200)]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Achievement badge"
              src="/LP/ca/stars.svg"
            />
            <p className="relative w-auto mt-[-0.20px] [font-family:'Urbanist',Helvetica] font-medium text-[var(--secondary-300)] text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px] text-center">
              Landing Page Results We&#39;ve Delivered
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h1
            id="success-stories-heading"
            className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-[var(--primary-500)] text-3xl lg:text-[50px] text-center tracking-[0] leading-[40px] lg:leading-[57px]"
          >
            Real Pages, Real Performance.
          </h1>

          <div className="flex flex-col items-center justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <blockquote className="relative self-stretch text-white h-auto mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
              &quot;{testimonialData.quote}&quot;
            </blockquote>

            <div className="flex w-full max-w-[470px] items-center justify-center gap-3 relative flex-[0_0_auto] flex-wrap">
              <cite className="relative w-auto text-white [font-family:'Urbanist',Helvetica] font-semibold text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[23px] not-italic text-center">
                -{testimonialData.author}
              </cite>

              <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                <img
                  className="w-8 lg:w-[33.23px] h-8 lg:h-[33.23px] rounded-full relative bg-cover bg-[50%_50%]"
                  alt={`${testimonialData.author} profile picture`}
                  src={testimonialData.avatar}
                  loading="lazy"
                />

                <div
                  className="inline-flex items-center relative flex-[0_0_auto]"
                  role="img"
                  aria-label={`${testimonialData.rating} out of 5 stars`}
                >
                  {starIcons.map((starIcon, index) => (
                    <img
                      key={index}
                      className={`relative w-4 lg:w-[24.06px] h-4 lg:h-[24.06px] ${
                        index > 0 ? "ml-[-3px]" : ""
                      }`}
                      alt=""
                      src={starIcon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative self-stretch w-full h-auto lg:h-[532.03px]">
        <div className="relative w-full lg:w-[1126px] h-auto lg:h-[525px] lg:top-[-3px]">
          {/* First Card - Conversion Increase */}
          <article className="flex w-full max-w-[365px] h-auto lg:h-[470px] items-center gap-2.5 px-6 lg:px-[50px] py-8 lg:py-[49px] relative lg:absolute lg:top-[29px] lg:left-[35px] rounded-[20px] lg:rounded-[40.6px] overflow-hidden border-[none] lg:rotate-[-9.13deg] bg-[linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(249,189,36,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-4 before:rounded-[20px] lg:before:rounded-[40.6px] before:[background:linear-gradient(180deg,rgba(224,224,224,0.31)_0%,rgba(247,181,13,0.23)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none mb-6 lg:mb-0 mx-auto">
            <div className="flex flex-col w-full max-w-[265.58px] items-center gap-6 lg:gap-[42px] relative mt-[-0.59px] mb-[-0.59px] mr-[-0.58px]">
              <header className="flex flex-col items-start gap-[13.17px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5 bg-[var(--secondary-300)] rounded-[7px]" />
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-[var(--neutral-800)] text-base lg:text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                    +165% Increase In Conversions
                  </h3>
                </div>
                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-[var(--neutral-400)] text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[22px]">
                  Strategic Layout, Clear Ctas, And Optimized Ux Turned Visitors
                  Into Loyal Customers.
                </p>
              </header>

              <div className="flex w-full max-w-[265.58px] items-center justify-center gap-2.5 px-4 lg:px-6 py-2.5 relative flex-[0_0_auto] bg-[var(--neutral-0)] rounded-[17px] overflow-hidden">
                <div className="flex flex-col w-full max-w-[210px] items-center gap-[13px] relative">
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    {(performanceCards[0]?.metrics ?? []).map(
                      (metric, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[52px] px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] border-b border-[var(--neutral-50)]"
                        >
                          <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-[var(--grey-500)] text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                            {metric.label}
                          </div>
                          <div className="flex w-12 items-center justify-between relative">
                            <img
                              className="relative w-[17.19px] h-[17.19px] mt-[-1.09px] mb-[-1.10px] ml-[-1.10px] rotate-[9.13deg]"
                              alt="Trending up"
                              src={metric.icon}
                              loading="lazy"
                            />
                            <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-semibold text-[var(--neutral-800)] text-xs tracking-[0] leading-3 whitespace-nowrap">
                              {metric.value}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[120px] items-start gap-[7px] relative flex-[0_0_auto]">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-[var(--neutral-700)] text-xs tracking-[0] leading-3">
                        Conversion Rate Trend
                      </h4>
                      <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-[#00b45c] text-[10px] tracking-[0] leading-[10px]">
                        Live Data
                      </div>
                    </div>

                    <div className="relative self-stretch w-full h-[81px]">
                      <div className="inline-flex items-end gap-[5px] absolute top-0 left-0">
                        {(performanceCards[0]?.chartData ?? []).map(
                          (data, index) => (
                            <div
                              key={index}
                              className="bg-[#d8fd5f] relative w-[38px] rounded-[5px_5px_0px_0px]"
                              style={{ height: data.height }}
                            />
                          )
                        )}
                      </div>
                      {(performanceCards[0]?.chartData ?? []).map(
                        (data, index) => (
                          <div
                            key={index}
                            className="absolute top-[70px] [font-family:'Urbanist',Helvetica] font-normal text-[var(--neutral-200)] text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap"
                            style={{ left: `${9 + index * 43}px` }}
                          >
                            {data.month}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Second Card - Mobile Performance */}
          <article className="flex w-full max-w-[365px] h-auto lg:h-[470px] items-center justify-center gap-2.5 px-6 lg:px-[35px] py-8 lg:py-[49px] relative lg:absolute lg:top-[21px] lg:left-[737px] rounded-[20px] lg:rounded-[40.6px] overflow-hidden border-8 lg:border-[16.46px] border-solid border-[var(--primary-50)] lg:rotate-[6.00deg] bg-[linear-gradient(180deg,rgba(255,255,255,1)_45%,rgba(255,255,255,1)_100%)] mb-6 lg:mb-0 mx-auto">
            <div className="flex flex-col w-full max-w-[285.67px] items-start gap-6 lg:gap-[37px] relative">
              <header className="flex flex-col items-start gap-[13.17px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="bg-[#00b45c] relative w-3.5 h-3.5 rounded-[7px]" />
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-[var(--neutral-800)] text-base lg:text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                    3x Faster Load Time On Mobile
                  </h3>
                </div>
                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-[var(--neutral-700)] text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[22px]">
                  Our Mobile-first Approach Ensures Your Page Loads In Seconds,
                  Not Stalls.
                </p>
              </header>

              <div className="flex flex-col w-full max-w-[285.67px] items-start gap-[15px] relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto] mt-[-1.59px] ml-[-1.59px] rotate-[-6.00deg]"
                  alt="Mobile performance visualization"
                  src="/LP/ca/frame-2121458127.svg"
                  loading="lazy"
                />

                <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                        <img
                          className="relative w-[19.79px] h-[19.78px] mt-[-0.89px] mb-[-0.89px] ml-[-0.89px] rotate-[-6.00deg]"
                          alt="Calendar"
                          src="/LP/ca/calendar.svg"
                        />
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-[var(--grey-500)] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          Last 3 Months
                        </div>
                      </div>
                      <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-[#00b45c] text-sm tracking-[0] leading-[22px]">
                        Mobile-first Performance For Better Ux And Seo
                      </p>
                    </div>
                  </div>

                  <div className="flex-col items-start gap-[9px] flex relative self-stretch w-full flex-[0_0_auto]">
                    {(performanceCards[1]?.metrics ?? []).map(
                      (metric, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[156px] px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] border-b border-[var(--neutral-50)]"
                        >
                          <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-[var(--grey-500)] text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                            {metric.label}
                          </div>
                          <div className="flex w-12 items-center justify-between relative">
                            <img
                              className="relative w-[16.49px] h-[16.49px] mt-[-0.74px] mb-[-0.74px] ml-[-0.74px] rotate-[-6.00deg]"
                              alt="Trending up"
                              src={metric.icon}
                              loading="lazy"
                            />
                            <div className="mr-[-3.00px] ml-[-0.74px] relative w-fit [font-family:'Urbanist',Helvetica] font-semibold text-[var(--neutral-800)] text-xs tracking-[0] leading-3 whitespace-nowrap">
                              {metric.value}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <img
                    className="relative w-[99.51px] h-[20.3px] mb-[-10.15px] ml-[-5.26px] rotate-[-6.00deg]"
                    alt="Performance trend line"
                    src="/LP/ca/vector-2528.svg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Third Card - Cost Per Lead */}
          <article className="flex w-full max-w-[365px] h-auto lg:h-[470px] items-center gap-2.5 px-6 lg:px-[41px] py-8 lg:py-[52px] relative lg:absolute lg:top-0 lg:left-[380px] bg-[var(--neutral-0)] rounded-[20px] lg:rounded-[40.6px] overflow-hidden border-8 lg:border-[16.46px] border-solid border-[var(--grey-100)] shadow-[0px_4.39px_9.33px_5.49px_transparent] mb-6 lg:mb-0 mx-auto">
            <div className="flex flex-col w-full max-w-[284px] items-start gap-8 lg:gap-[52px] relative mt-[-3.08px] mb-[-3.08px] mr-[-1.00px]">
              <header className="flex flex-col items-start gap-[13.17px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="bg-[var(--primary-300)] relative w-3.5 h-3.5 rounded-[7px]" />
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-[var(--neutral-800)] text-base lg:text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                    2.5x Lower Cost Per Lead
                  </h3>
                </div>
                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-[var(--grey-500)] text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[22px]">
                  Better Design Meant Better Quality Scores — Leading To
                  Cheaper, More Efficient Ad Spend.
                </p>
              </header>

              <div className="flex flex-col w-full max-w-[284px] items-center justify-center gap-2.5 px-3 lg:px-[15px] py-[11px] relative flex-[0_0_auto] rounded-[17px] overflow-hidden">
                <div className="flex flex-col items-start justify-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <img
                        className="relative w-[15px] h-[15px]"
                        alt="Calendar"
                        src="/LP/ca/calendar-1.svg"
                      />
                      <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-[var(--primary-500)] text-xs tracking-[0] leading-3 whitespace-nowrap">
                        Last 6 Months
                      </div>
                    </div>
                    <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-[var(--primary-300)] text-sm tracking-[0] leading-[17px]">
                      Smart Design Improved Ad Quality Scores And Reduced Spend
                    </p>
                  </div>

                  <img
                    className="relative w-[265px] flex-[0_0_auto] ml-[-5.50px] mr-[-5.50px]"
                    alt="Cost reduction chart"
                    src="/LP/ca/frame-2121458132.svg"
                    loading="lazy"
                  />

                  <div className="flex flex-col h-[118px] items-start gap-2 relative self-stretch w-full">
                    <div className="flex flex-col w-[120px] items-start gap-[7px] relative flex-[0_0_auto]">
                      <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-[var(--neutral-700)] text-xs tracking-[0] leading-3">
                        Load Time (seconds)
                      </h4>
                    </div>

                    <div className="relative self-stretch w-full h-[81px]">
                      <div className="flex w-[251px] items-end gap-[5px] absolute top-0 left-0">
                        {(performanceCards[2]?.chartData ?? []).map(
                          (data, index) => (
                            <div
                              key={index}
                              className="relative w-[38px] rounded-[5px_5px_0px_0px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(225,240,255,0.7)_47%,var(--primary-200)_100%)]"
                              style={{ height: data.height }}
                            />
                          )
                        )}
                      </div>
                      {(performanceCards[2]?.chartData ?? []).map(
                        (data, index) => (
                          <div
                            key={index}
                            className="absolute top-[70px] font-normal text-[var(--neutral-200)] text-[10px] text-center leading-[10px] whitespace-nowrap [font-family:'Urbanist',Helvetica] tracking-[0]"
                            style={{ left: `${9 + index * 43}px` }}
                          >
                            {data.month}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 relative flex-[0_0_auto]">
        <button className="flex w-full max-w-[236px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-[var(--primary-300)] rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:bg-[var(--primary-400)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-200)] focus:ring-offset-2 transition-colors">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[var(--neutral-0)] text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
            Get Results Like This
          </span>
          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-[var(--primary-50)] rounded-[34px] border border-solid border-[var(--primary-75)]">
            <img
              className="relative w-5 h-5"
              alt=""
              src="/LP/ca/arrow-right.svg"
              loading="lazy"
            />
          </div>
        </button>

        <button className="flex w-full max-w-[257px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-[var(--grey-50)] rounded-[33px] border border-solid border-[var(--grey-200)] hover:bg-[var(--grey-75)] focus:outline-none focus:ring-2 focus:ring-[var(--grey-300)] focus:ring-offset-2 transition-colors">
          <span className="relative w-fit ml-[-3.50px] [font-family:'Urbanist',Helvetica] font-medium text-[var(--neutral-900)] text-sm lg:text-base tracking-[0] leading-4 whitespace-nowrap">
            Talk To A Conversion Expert
          </span>
          <img
            className="relative w-5 h-5 mr-[-3.50px]"
            alt=""
            src="/LP/ca/arrow-right-1.svg"
            loading="lazy"
          />
        </button>
      </div>
    </section>
  );
}
