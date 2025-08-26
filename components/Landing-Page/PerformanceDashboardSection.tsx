import React from "react";

export const PerformanceDashboardSection: React.FC = () => {
  // Data for statistics cards
  const statisticsData = [
    {
      value: "50+",
      label: "Pages Designed",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "4.2X+",
      label: "Average long-term ROI",
    },
    {
      value: "24h",
      label: "Support Response",
    },
  ];

  // Data for star ratings
  const starRatings = Array(5).fill(0);

  // Data for chart bars
  const chartData = [
    { height: "44.58px", fillHeight: "30px", fillTop: "15px" },
    { height: "58.88px", fillHeight: "13px", fillTop: "46px" },
    { height: "23.13px", fillHeight: "23px", fillTop: "0" },
    { height: "44.58px", fillHeight: "30px", fillTop: "15px" },
    { height: "37.01px", fillHeight: "13px", fillTop: "24px" },
    { height: "59.3px", fillHeight: "13px", fillTop: "46px" },
    { height: "48.37px", fillHeight: "48px", fillTop: "0" },
    { height: "35.75px", fillHeight: "30px", fillTop: "6px" },
    { height: "48.37px", fillHeight: "36px", fillTop: "13px" },
  ];

  // Data for conversion metrics
  const conversionMetrics = [
    { value: "8.5%", label: "Conversion" },
    { value: "12.4%", label: "CTR" },
  ];

  // Data for user avatars
  const userAvatars = [
    "/LP/ca/avatar@2x.png",
    "/LP/ca/avatar-1@2x.png",
    "/LP/ca/avatar-2@2x.png",
    "/LP/ca/avatar-3@2x.png",
    "/LP/ca/avatar-4@2x.png",
    "/LP/ca/avatar-5@2x.png",
  ];

  // Data for chart y-axis labels
  const chartLabels = ["$1000", "$500", "$200", "$0"];

  return (
    <section className="flex flex-col w-full max-w-[1128px] items-center lg:items-end gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0 mx-auto">
      <div className="relative self-stretch w-full h-auto lg:h-[597px]">
        <div className="relative w-full max-w-[1128px] h-auto lg:h-[598px] mx-auto">
          <img
            className="absolute w-[200px] lg:w-[267px] h-[223px] lg:h-[298px] top-[250px] lg:top-[300px] left-[20px] lg:left-[51px] aspect-[0.9]"
            alt="Performance dashboard illustration"
            src="LP/ca/image-131@2x.png"
          />

          <div className="relative lg:absolute w-full lg:w-[1128px] h-auto lg:h-[454px] lg:top-[143px] lg:left-0 rounded-[23px] bg-[linear-gradient(180deg,rgba(67,162,255,0.71)_0%,rgba(255,255,255,1)_100%)] mb-8 lg:mb-0">
            <div className="relative lg:absolute w-full lg:w-[436px] h-auto lg:h-[334px] lg:top-[15px] lg:left-7 p-4 lg:p-0">
              <div className="flex flex-col w-full max-w-[313px] items-start gap-3.5 px-5 py-4 relative lg:absolute lg:top-0 lg:left-0 rounded-xl">
                <div className="inline-flex items-center justify-center gap-2.5 px-[13px] py-[3px] relative flex-[0_0_auto] bg-[#d8fd5f] rounded-[674px]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-50 text-xs tracking-[0] leading-[23px] whitespace-nowrap">
                    Client Success Story
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[23px]">
                    Real Results For Real Businesses
                  </h2>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px]">
                    Every Design Decision Backed By Conversion Research And User
                    Behavior Analytics
                  </p>
                </div>
              </div>

              <div className="hidden lg:block absolute w-[332px] h-[230px] top-[104px] left-[104px]">
                <div className="relative w-[271px] h-[234px] top-[-3px] -left-px">
                  <img
                    className="absolute w-[252px] h-[220px] top-3.5 left-0"
                    alt="Analytics chart vector"
                    src="/LP/ca/vector-2533.svg"
                  />

                  <img
                    className="absolute w-[25px] h-[25px] top-0 left-[246px]"
                    alt="Send icon"
                    src="/LP/ca/send.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full max-w-[340px] items-start justify-center gap-3.5 p-4 lg:p-[22px] relative lg:absolute lg:top-[227px] lg:left-[763px] rounded-xl bg-neutral-900 mt-4 lg:mt-0">
              <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="inline-flex items-center relative flex-[0_0_auto]"
                    role="img"
                    aria-label="5 star rating"
                  >
                    {starRatings.map((_, index) => (
                      <img
                        key={index}
                        className="relative w-[18px] h-[18px]"
                        alt=""
                        src="/LP/ca/star-filled-4.svg"
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] relative flex-[0_0_auto] bg-[#00b45c17] rounded-[68px]">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-[#00b45c] text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                      Best On The Market
                    </span>
                  </div>
                </div>

                <blockquote className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[23px]">
                  "rent Seo Brain Transformed Our Landing Page Into A Conversion
                  Machine. Our Revenue Increased By 247% In Just 3 Months!"
                </blockquote>

                <cite className="relative self-stretch font-medium text-neutral-0 text-xs lg:text-sm leading-3 [font-family:'Urbanist',Helvetica] tracking-[0] not-italic">
                  Sarah Chen, Ceo At Techflow
                </cite>
              </div>
            </div>
          </div>

          <img
            className="hidden lg:block absolute w-[267px] h-[298px] top-[300px] left-[11px] aspect-[0.9]"
            alt="Performance dashboard illustration"
            src="/LP/ca/image-131@2x.png"
          />

          <div className="flex flex-col lg:inline-flex lg:flex-row items-center justify-center lg:justify-end gap-6 lg:gap-10 relative lg:absolute lg:top-0 lg:left-[412px] mt-8 lg:mt-0">
            <div className="relative w-full max-w-[304px] h-auto lg:h-[597px]">
              <div className="relative h-auto lg:h-[597px]">
                <div className="hidden lg:block absolute w-[304px] h-[41px] top-[556px] left-0 bg-[#1d8fff54] rounded-[152px/20.5px] blur-[5px]" />

                <img
                  className="relative lg:absolute w-full max-w-[275px] h-auto lg:h-[597px] lg:top-0 lg:left-3.5 aspect-[0.46] mx-auto"
                  alt="Mobile dashboard interface"
                  src="/LP/ca/image-109.png"
                />

                <div className="inline-flex items-center justify-center gap-[17.7px] px-[9.44px] py-[8.26px] absolute top-[65px] left-[65px] bg-primary-100 rounded-[4.72px] rotate-[1.00deg]">
                  <div className="flex flex-col w-[127.47px] items-start gap-[9.44px] relative">
                    <h3 className="relative self-stretch mt-[-1.18px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-[11.8px] tracking-[0] leading-[9.4px]">
                      Perfomance Dashboard
                    </h3>

                    <p className="relative self-stretch opacity-80 [font-family:'Urbanist',Helvetica] font-normal text-grey-75 text-[11.8px] tracking-[0] leading-[9.4px]">
                      Real-time Analytics
                    </p>
                  </div>

                  <div className="inline-flex items-center justify-center gap-[11.8px] p-[7.08px] relative flex-[0_0_auto] bg-[#d8fd5f] rounded-[79.08px]">
                    <img
                      className="relative w-[16.81px] h-[16.81px] mt-[-0.14px] mb-[-0.14px] ml-[-0.14px] mr-[-0.14px] rotate-[-1.00deg]"
                      alt="Trending up icon"
                      src="/LP/ca/trending-up.svg"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[238px] items-start gap-[12.2px] pl-[33.05px] pr-[11.78px] py-[11.78px] absolute top-[146px] left-[65px] bg-neutral-900 rounded-[6.73px] border-[0.48px] border-solid border-primary-300 shadow-[0px_0.96px_1.92px_#0000000a]">
                  <div className="inline-flex flex-col items-start gap-[11.78px] relative flex-[0_0_auto]">
                    <h4 className="w-fit mt-[-0.42px] [font-family:'Inter',Helvetica] text-grey-400 text-[5.9px] tracking-[-0.21px] leading-[7.6px] whitespace-nowrap relative font-medium">
                      Monthly Revenue
                    </h4>

                    <div className="text-neutral-0 text-[15.1px] tracking-[-0.84px] leading-[17.7px] relative w-fit [font-family:'Inter',Helvetica] font-medium whitespace-nowrap">
                      $234,846
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-[12.62px] relative flex-[0_0_auto] mr-[-0.10px]">
                    <div className="inline-flex items-center gap-[3.36px] relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-[12.2px] relative flex-[0_0_auto]">
                        {chartLabels.map((label, index) => (
                          <div
                            key={index}
                            className={`${
                              index === 0 ? "mt-[-0.42px]" : ""
                            } text-[#464646] text-[4.2px] tracking-[-0.21px] leading-[5.9px] relative w-fit [font-family:'Inter',Helvetica] font-medium whitespace-nowrap`}
                          >
                            {label}
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start justify-center gap-[17.66px] relative flex-[0_0_auto]">
                          <div className="relative w-[178.32px] h-px mt-[-0.21px] bg-[url(/LP/ca/line-57.svg)] bg-[100%_100%]" />
                          <div className="bg-[url(/LP/ca/line-57-1.svg)] relative w-[178.32px] h-px bg-[100%_100%]" />
                          <div className="bg-[url(/LP/ca/line-57-2.svg)] relative w-[178.32px] h-px bg-[100%_100%]" />
                          <div className="mb-[-0.37px] bg-[url(/LP/ca/line-57-3.svg)] relative w-[178.32px] h-px bg-[100%_100%]" />
                        </div>

                        <div className="inline-flex items-end gap-[8.41px] absolute top-0 left-1">
                          {chartData.map((bar, index) => (
                            <div
                              key={index}
                              className="inline-flex items-end relative flex-[0_0_auto]"
                            >
                              <img
                                className={`relative w-[11.36px] h-[${bar.height}]`}
                                alt=""
                                src={`/LP/ca/graph-bar${
                                  index > 0 ? `-${index}` : ""
                                }.svg`}
                              />
                              <div
                                className={`absolute w-[11px] h-[${bar.fillHeight}] top-[${bar.fillTop}] left-0 rounded-[1.68px] bg-[linear-gradient(180deg,rgba(33,150,243,0.63)_0%,rgba(33,150,243,1)_100%)]`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-[59.3px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-[4.21px] relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-0.42px] [font-family:'Inter',Helvetica] font-medium text-[#3b2c6e] text-[5.9px] tracking-[-0.21px] leading-[7.6px] whitespace-nowrap">
                          $350.00
                        </span>
                        <span className="relative w-fit mt-[-0.42px] [font-family:'Inter',Helvetica] font-medium text-[#3b2c6e] text-[5.9px] tracking-[-0.21px] leading-[7.6px] whitespace-nowrap">
                          /
                        </span>
                        <span className="relative w-fit mt-[-0.42px] [font-family:'Inter',Helvetica] font-medium text-[#3b2c6e] text-[5.9px] tracking-[-0.21px] leading-[7.6px] whitespace-nowrap">
                          $640.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-[12.98px] absolute top-[332px] left-[65px]">
                  <div className="flex w-[187.66px] items-center justify-between relative">
                    {conversionMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[87.34px] items-center justify-center gap-[5.9px] px-[10.62px] py-[9.44px] relative bg-white rounded-[8.26px] shadow-[0px_4.72px_4.72px_#00b45c29]"
                      >
                        <div className="relative self-stretch mt-[-1.18px] [font-family:'Inter',Helvetica] font-semibold text-primary-100 text-[11.8px] text-center tracking-[-0.19px] leading-[9.4px]">
                          {metric.value}
                        </div>
                        <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[11.8px] text-center tracking-[0] leading-[9.4px]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col w-[188px] items-center justify-center gap-[9.44px] px-[4.72px] py-[7.08px] absolute top-[412px] left-[21px] bg-primary-500 rounded-[7.08px] shadow-[0px_4px_4px_#1d8fff33]">
                  <div className="flex w-[168.78px] items-center justify-between relative flex-[0_0_auto]">
                    <h4 className="relative w-[66.09px] mt-[-1.18px] [font-family:'Urbanist',Helvetica] font-medium text-primary-100 text-[11.8px] tracking-[0] leading-[14.2px]">
                      Active Users
                    </h4>

                    <div className="inline-flex items-center justify-center gap-[4.72px] relative flex-[0_0_auto]">
                      <div className="relative w-[8.26px] h-[8.26px] bg-[#00b45c] rounded-[4.13px]" />
                      <span className="relative w-fit mt-[-1.18px] [font-family:'Urbanist',Helvetica] font-medium text-[#00b45c] text-[11.8px] tracking-[0] leading-[14.2px] whitespace-nowrap">
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="flex w-[169.96px] items-center gap-[11.8px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      {userAvatars.map((avatar, index) => (
                        <div
                          key={index}
                          className={`${
                            index === 0
                              ? "relative w-[16.66px] h-[16.66px]"
                              : "w-[18.26px] h-[18.26px] mt-[-0.80px] mb-[-0.80px] ml-[-5.35px] border-[0.8px] border-solid border-color-mode-color-border-oncolor relative"
                          } ${
                            index >= 3
                              ? "w-[16.66px] h-[16.66px] ml-[-5.35px] border-[0.8px] border-solid border-color-mode-color-border-oncolor relative"
                              : ""
                          } rounded-[5204.34px] bg-cover bg-[50%_50%]`}
                          style={{ backgroundImage: `url(${avatar})` }}
                          role="img"
                          aria-label={`User avatar ${index + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex flex-col w-[84.98px] items-start gap-[4.72px] relative">
                      <div className="relative self-stretch mt-[-1.18px] [font-family:'Urbanist',Helvetica] font-semibold text-grey-500 text-[11.8px] tracking-[0] leading-[10.6px]">
                        3.2M
                      </div>
                      <div className="self-stretch [font-family:'Urbanist',Helvetica] text-grey-500 text-[11.8px] tracking-[0] leading-[10.6px] relative font-medium">
                        Monthly Visitors
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-[9.02px] absolute top-[500px] left-[102px]">
                  <button className="flex w-[148.16px] h-[33.5px] items-center justify-center gap-[12.88px] px-[52.82px] py-[7.73px] relative bg-primary-100 rounded-[6.44px] hover:bg-primary-75 transition-colors">
                    <span className="relative w-fit ml-[-9.24px] mr-[-9.24px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-[12.9px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                      View More
                    </span>
                  </button>

                  <div className="inline-flex items-center justify-center gap-[12.88px] p-[7.73px] relative flex-[0_0_auto] bg-primary-500 rounded-[10.31px] rotate-[1.00deg]">
                    <img
                      className="relative w-[18.35px] h-[18.35px] mt-[-0.16px] mb-[-0.16px] ml-[-0.16px] mr-[-0.16px] rotate-[-1.00deg]"
                      alt="Trending up icon"
                      src="/LP/ca/trending-up-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[37px] relative self-stretch w-full flex-[0_0_auto]">
        {statisticsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-[253px] items-center justify-center gap-4 lg:gap-[21px] px-6 lg:px-[34px] py-4 lg:py-[22px] relative bg-grey-100 rounded-[13px] border border-grey-200 mx-auto"
          >
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-100 text-xl lg:text-2xl text-center tracking-[0] leading-[24px] lg:leading-[26px]">
              {stat.value}
            </div>
            <div className="relative w-full max-w-[125px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-base lg:text-lg text-center tracking-[0] leading-[22px] lg:leading-[26px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
