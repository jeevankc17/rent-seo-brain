import React from "react";

const testimonialData = {
  quote:
    "Our Google Ads conversion rate jumped from 2.8% to 7.4% after launching a page designed by Rent SEO Brain.",
  author: "Ramesh D., Co-founder, SaaS Growlytics",
  avatar: "/LP/ca/avatar-6@2x.png",
};

const performanceMetrics = [
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
    icon: "/LP/ca/arrow-up-2.svg",
  },
];

const chartData = [
  { month: "Jan", height: "8.67px" },
  { month: "Feb", height: "16.56px" },
  { month: "Mar", height: "34.93px" },
  { month: "Apr", height: "45.06px" },
  { month: "May", height: "69px" },
];

const mobileMetrics = [
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
];

const loadTimeData = [
  { month: "Jan", height: "5px" },
  { month: "Feb", height: "12px" },
  { month: "Mar", height: "21px" },
  { month: "Apr", height: "29px" },
  { month: "May", height: "37px" },
  { month: "June", height: "53px" },
];

export const ClientResultsSection: React.FC = () => {
  return (
    <section className="flex flex-col w-[1125.39px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="flex flex-col w-[552px] items-center justify-center gap-6 relative flex-[0_0_auto]">
        <div className="flex w-[305px] items-center justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-75">
          <div className="flex w-[286px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-500 rounded-[45px] border-[0.2px] border-solid border-secondary-100">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/LP/ca/stars.svg"
            />
            <p className="relative w-[232px] mt-[-0.20px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-75 text-sm tracking-[0] leading-[23px]">
              Landing Page Results We&#39;ve Delivered
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-50 text-[50px] text-center tracking-[0] leading-[57px]">
            Real Pages, Real Performance.
          </h1>

          <div className="flex flex-col items-center justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <blockquote className="relative self-stretch h-[45px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-50 text-base text-center tracking-[0] leading-[23px]">
              &quot;{testimonialData.quote}&quot;
            </blockquote>

            <div className="flex w-[470px] items-center justify-center gap-3 relative flex-[0_0_auto]">
              <cite className="relative w-[300px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-50 text-base tracking-[0] leading-[23px] not-italic">
                -{testimonialData.author}
              </cite>

              <div className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                <div
                  className="w-[33.23px] h-[33.23px] rounded-[10383.65px] relative bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${testimonialData.avatar})` }}
                  role="img"
                  aria-label="Ramesh D. avatar"
                />

                <div
                  className="inline-flex items-center relative flex-[0_0_auto]"
                  role="img"
                  aria-label="5 star rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      className={`relative w-[24.06px] h-[24.06px] ${
                        star > 1 ? "ml-[-3px]" : ""
                      }`}
                      alt="Star filled"
                      src={`/LP/ca/star-filled-${
                        star + 4
                      }.svg`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative self-stretch w-full h-[532.03px]">
        <div className="relative w-[1126px] h-[525px] top-[-3px]">
          <article className="flex w-[365px] h-[470px] items-center gap-2.5 px-[50px] py-[49px] absolute top-[29px] left-[35px] rounded-[40.6px] overflow-hidden border-[none] rotate-[-9.13deg] bg-[linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(249,189,36,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-4 before:rounded-[40.6px] before:[background:linear-gradient(180deg,rgba(224,224,224,0.31)_0%,rgba(247,181,13,0.23)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="flex flex-col w-[265.58px] items-center gap-[42px] relative mt-[-0.59px] mb-[-0.59px] mr-[-0.58px]">
              <header className="flex flex-col items-start gap-[13.17px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5 bg-secondary-75 rounded-[7px]" />
                  <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-80 text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                    +165% Increase In Conversions
                  </h2>
                </div>
                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm tracking-[0] leading-[22px]">
                  Strategic Layout, Clear Ctas, And Optimized Ux Turned Visitors
                  Into Loyal Customers.
                </p>
              </header>

              <div className="flex w-[265.58px] items-center justify-center gap-2.5 px-6 py-2.5 relative flex-[0_0_auto] bg-neutral-900 rounded-[17px] overflow-hidden">
                <div className="flex flex-col w-[210px] items-center gap-[13px] relative">
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    {performanceMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[52px] px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#cfd4dc52]"
                      >
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                          {metric.label}
                        </div>
                        <div className="flex w-12 items-center justify-between relative">
                          <img
                            className="relative w-[17.19px] h-[17.19px] mt-[-1.09px] mb-[-1.10px] ml-[-1.10px] rotate-[9.13deg]"
                            alt="Arrow up"
                            src={metric.icon}
                          />
                          <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-semibold text-neutral-80 text-xs tracking-[0] leading-3 whitespace-nowrap">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[120px] items-start gap-[7px] relative flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-90 text-xs tracking-[0] leading-3">
                        Conversion Rate Trend
                      </h3>
                      <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-[#00b45c] text-[10px] tracking-[0] leading-[10px]">
                        Live Data
                      </div>
                    </div>

                    <div className="relative self-stretch w-full h-[81px]">
                      <div className="inline-flex items-end gap-[5px] absolute top-0 left-0">
                        {chartData.map((data, index) => (
                          <div
                            key={index}
                            className="bg-[#d8fd5f] relative w-[38px] rounded-[5px_5px_0px_0px]"
                            style={{ height: data.height }}
                          />
                        ))}
                      </div>
                      {chartData.map((data, index) => (
                        <div
                          key={index}
                          className="absolute top-[70px] [font-family:'Urbanist',Helvetica] font-normal text-[#6a7986] text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap"
                          style={{ left: `${9 + index * 43}px` }}
                        >
                          {data.month}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[365px] h-[470px] items-center justify-center gap-2.5 px-[35px] py-[49px] absolute top-[21px] left-[737px] rounded-[40.6px] overflow-hidden border-[16.46px] border-solid border-primary-500 rotate-[6.00deg] bg-neutral-900">
            <div className="flex flex-col w-[285.67px] items-start gap-[37px] relative">
              <header className="flex flex-col items-start gap-[13.17px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="bg-[#00b45c] relative w-3.5 h-3.5 rounded-[7px]" />
                  <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-80 text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                    3x Faster Load Time On Mobile
                  </h2>
                </div>
                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-90 text-sm tracking-[0] leading-[22px]">
                  Our Mobile-first Approach Ensures Your Page Loads In Seconds,
                  Not Stalls.
                </p>
              </header>

              <div className="flex flex-col w-[285.67px] items-start gap-[15px] relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto] mt-[-1.59px] ml-[-1.59px] rotate-[-6.00deg]"
                  alt="Frame"
                  src="/LP/ca/frame-2121458127.svg"
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
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          Last 3 Months
                        </div>
                      </div>
                      <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-[#00b45c] text-sm tracking-[0] leading-[22px]">
                        Mobile-first Performance For Better Ux And Seo
                      </p>
                    </div>
                  </div>

                  <div className="flex-col items-start gap-[9px] flex relative self-stretch w-full flex-[0_0_auto]">
                    {mobileMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[156px] px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#cfd4dc52]"
                      >
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                          {metric.label}
                        </div>
                        <div className="flex w-12 items-center justify-between relative">
                          <img
                            className="relative w-[16.49px] h-[16.49px] mt-[-0.74px] mb-[-0.74px] ml-[-0.74px] rotate-[-6.00deg]"
                            alt="Arrow up"
                            src={metric.icon}
                          />
                          <div className="mr-[-3.00px] ml-[-0.74px] relative w-fit [font-family:'Urbanist',Helvetica] font-semibold text-neutral-80 text-xs tracking-[0] leading-3 whitespace-nowrap">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <img
                    className="relative w-[99.51px] h-[20.3px] mb-[-10.15px] ml-[-5.26px] rotate-[-6.00deg]"
                    alt="Vector"
                    src="/LP/ca/vector-2528.svg"
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[365px] h-[470px] items-center gap-2.5 px-[41px] py-[52px] absolute top-0 left-[380px] bg-neutral-900 rounded-[40.6px] overflow-hidden border-[16.46px] border-solid border-grey-75 shadow-[0px_4.39px_9.33px_5.49px_transparent]">
            <div className="flex flex-col w-[284px] items-start gap-[52px] relative mt-[-3.08px] mb-[-3.08px] mr-[-1.00px]">
              <header className="flex flex-col items-start gap-[13.17px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="bg-primary-100 relative w-3.5 h-3.5 rounded-[7px]" />
                  <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-80 text-lg tracking-[0] leading-[18px] whitespace-nowrap">
                    2.5x Lower Cost Per Lead
                  </h2>
                </div>
                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-sm tracking-[0] leading-[22px]">
                  Better Design Meant Better Quality Scores — Leading To
                  Cheaper, More Efficient Ad Spend.
                </p>
              </header>

              <div className="flex flex-col w-[284px] items-center justify-center gap-2.5 px-[15px] py-[11px] relative flex-[0_0_auto] rounded-[17px] overflow-hidden">
                <div className="flex flex-col items-start justify-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <img
                        className="relative w-[15px] h-[15px]"
                        alt="Calendar"
                        src="/LP/ca/calendar-1.svg"
                      />
                      <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-primary-50 text-xs tracking-[0] leading-3 whitespace-nowrap">
                        Last 6 Months
                      </div>
                    </div>
                    <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-primary-100 text-sm tracking-[0] leading-[17px]">
                      Smart Design Improved Ad Quality Scores And Reduced Spend
                    </p>
                  </div>

                  <img
                    className="relative w-[265px] flex-[0_0_auto] ml-[-5.50px] mr-[-5.50px]"
                    alt="Frame"
                    src="/LP/ca/frame-2121458132.svg"
                  />

                  <div className="flex flex-col h-[118px] items-start gap-2 relative self-stretch w-full">
                    <div className="flex flex-col w-[120px] items-start gap-[7px] relative flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-90 text-xs tracking-[0] leading-3">
                        Load Time (seconds)
                      </h3>
                    </div>

                    <div className="relative self-stretch w-full h-[81px]">
                      <div className="flex w-[251px] items-end gap-[5px] absolute top-0 left-0">
                        {loadTimeData.map((data, index) => (
                          <div
                            key={index}
                            className="relative w-[38px] rounded-[5px_5px_0px_0px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(227,242,253,0.7)_47%,rgba(33,150,243,1)_100%)]"
                            style={{ height: data.height }}
                          />
                        ))}
                      </div>
                      {loadTimeData.map((data, index) => (
                        <div
                          key={index}
                          className="absolute top-[70px] font-normal text-[#6a7986] text-[10px] text-center leading-[10px] whitespace-nowrap [font-family:'Urbanist',Helvetica] tracking-[0]"
                          style={{ left: `${9 + index * 43}px` }}
                        >
                          {data.month}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 relative flex-[0_0_auto]">
        <button className="flex w-full sm:w-[220px] lg:w-[236px] h-[45px] lg:h-[50px] items-center justify-center lg:justify-end gap-2 lg:gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:bg-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
            Get Results Like This
          </span>
          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
            <img
              className="relative w-5 h-5"
              alt="Arrow right"
              src="/LP/ca/arrow-right.svg"
            />
          </div>
        </button>

        <button className="all-[unset] box-border flex w-full sm:w-[200px] lg:w-[257px] h-[45px] lg:h-[50px] items-center justify-center gap-2 lg:gap-[7px] px-4 lg:px-[19px] py-2.5 relative bg-grey-50 rounded-[25px] lg:rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-grey-300 focus:ring-offset-2">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-sm lg:text-base tracking-[0] leading-[16px] lg:leading-4 whitespace-nowrap">
            Talk To A Conversion Expert
          </span>
          <img
            className="relative w-5 h-5"
            alt="Arrow right"
            src="/LP/ca/arrow-right-1.svg"
          />
        </button>
      </div>
    </section>
  );
};
