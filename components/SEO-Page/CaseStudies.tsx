import React from "react";

export const CaseStudies: React.FC = () => {
  // Data for metrics in the case study card
  const metricsData = [
    {
      icon: "/SEO/ca/trending-up.svg",
      value: "8k - 38k",
      label: "Organic Traffic",
      alt: "Trending up",
    },
    {
      icon: "/SEO/ca/users.svg",
      value: "2k - 12k",
      label: "Email Susbcribers",
      alt: "Users",
    },
    {
      icon: "/SEO/ca/check-circle.svg",
      value: "+320%",
      label: "Social Engagement",
      alt: "Check circle",
    },
    {
      icon: "/SEO/ca/award.svg",
      value: "+450%",
      label: "Brand Mentions",
      alt: "Award",
    },
  ];

  // Data for industry tags
  const industryTags = [
    "HEALTHCARE",
    "WELLNESS & BEAUTY",
    "TRAVEL & HOSPITALITY",
    "REALESTATE",
    "SAAS",
  ];

  // Data for star ratings
  const starRating = Array(5).fill(
    "/SEO/ca/star-filled-4.svg"
  );

  return (
    <section
      className="hidden lg:blockrelative w-full h-auto min-h-[800px] px-4 py-8 lg:h-[1542px] lg:px-0 lg:py-0"
      role="main"
      aria-label="Case Studies Section"
    >
      <div className="h-auto min-h-[800px] bg-[#0c0c0f] overflow-hidden lg:h-[1542px]">
        <div className="relative w-full max-w-[1128px] h-auto mx-auto py-8 lg:w-[1780px] lg:h-[1368px] lg:top-[93px] lg:left-[-172px] lg:py-0">
          {/* Background blur elements */}
          <div
            className="absolute w-[200px] h-[150px] top-[100px] right-[-50px] bg-[#2e97ffa1] rounded-full blur-[200px] lg:w-[464px] lg:h-[403px] lg:top-[168px] lg:left-[1316px] lg:rounded-[232px/201.63px] lg:blur-[365.85px]"
            aria-hidden="true"
          />
          <div
            className="absolute w-[200px] h-[150px] top-[80px] left-[-50px] bg-[#2e97ffa1] rounded-full blur-[200px] lg:w-[464px] lg:h-[403px] lg:top-[145px] lg:left-0 lg:rounded-[232px/201.63px] lg:blur-[365.85px]"
            aria-hidden="true"
          />

          <div className="flex flex-col w-full items-start gap-6 relative lg:w-[1128px] lg:gap-[23px] lg:absolute lg:top-0 lg:left-[328px]">
            {/* Bottom Section with Testimonial and Industry Tags */}
            <div className="relative self-stretch w-full h-auto lg:h-[694px]">
              <div className="flex flex-col gap-8 w-full lg:absolute lg:w-[1128px] lg:h-[661px] lg:top-[33px] lg:left-0">
                <div className="flex flex-col gap-8 w-full lg:relative lg:h-[694px] lg:top-[-33px]">
                  <div className="flex flex-col gap-8 w-full lg:absolute lg:w-[1128px] lg:h-[694px] lg:top-0 lg:left-0">
                    {/* Industry Tags Section */}
                    <div className="w-full h-auto p-6 bg-white rounded-[20px] lg:absolute lg:w-[542px] lg:h-[661px] lg:top-[33px] lg:left-[586px] lg:bg-[url(/SEO/ca/frame-2121457564.svg)] lg:bg-[100%_100%] lg:p-0 lg:rounded-0">
                      <div className="flex flex-col w-full items-start justify-center gap-8 lg:w-[488px] lg:gap-56 lg:relative lg:top-[159px] lg:left-[27px]">
                        <div className="flex flex-col items-start gap-[33px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex w-auto items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-0 rounded-[45px] lg:w-[255px]">
                            <h2 className="relative w-fit mt-[-1.00px] font-urbanist font-semibold text-black text-base text-center tracking-[0] leading-[23px] whitespace-nowrap lg:text-lg">
                              Case Studies by Industry
                            </h2>
                          </div>

                          <div className="flex flex-wrap items-end gap-3 relative self-stretch w-full flex-[0_0_auto] lg:gap-[19px_14px]">
                            {industryTags.map((tag, index) => (
                              <button
                                key={index}
                                className="flex w-auto items-center justify-center gap-2.5 px-4 py-3 relative rounded-[45px] border border-solid border-neutral-0 hover:bg-neutral-0 hover:text-black transition-colors focus:outline-2 focus:outline-neutral-0 lg:px-[23px] lg:py-[13px]"
                              >
                                <span className="relative w-fit mt-[-1.00px] font-urbanist font-semibold text-neutral-0 text-sm text-center tracking-[0] leading-[23px] whitespace-nowrap lg:text-base">
                                  {tag}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <button className="w-full flex h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-primary-300 transition-colors lg:w-[284px]">
                          <span className="relative w-fit font-urbanist font-medium text-[#091e42] text-sm tracking-[0] leading-4 whitespace-nowrap lg:text-base">
                            View All Case Studies
                          </span>
                          <img
                            className="relative w-5 h-5"
                            alt="Arrow right"
                            src="/SEO/ca/arrow-right-1.svg"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="flex flex-col w-full items-start justify-center gap-2.5 px-6 py-4 bg-neutral-0 rounded-[20px] lg:w-[891px] lg:px-[37px] lg:py-[23px] lg:absolute lg:top-0 lg:left-0 lg:rounded-[27px]">
                      <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                        <p className="relative w-full mt-[-1.00px] font-urbanist font-normal text-transparent text-sm tracking-[0] leading-[22px] lg:w-[803px] lg:text-base lg:leading-[26px]">
                          <span className="font-medium text-black">
                            "The team truly understood our audience. For the
                            first time, Google Ads actually started driving
                            qualified leads. Our CAC dropped significantly while
                            our signups skyrocketed. They became a true
                            extension of our team."
                          </span>
                          <span className="font-semibold text-[#43a2ff]">
                            {" "}
                            — Rhea S., Co-founder, GrowthLabs
                          </span>
                        </p>
                      </div>

                      <div
                        className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]"
                        role="img"
                        aria-label="5 star rating"
                      >
                        {starRating.map((star, index) => (
                          <img
                            key={index}
                            className="relative w-5 h-5 lg:w-6 lg:h-6"
                            alt="Star filled"
                            src={star}
                          />
                        ))}
                      </div>
                    </blockquote>
                  </div>

                  {/* Background Image Section */}
                  <div className="flex w-full h-[300px] items-center gap-2.5 lg:w-[552px] lg:h-[518px] lg:absolute lg:top-44 lg:left-0">
                    <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden bg-[url(/SEO/ca/frame-2121457561.svg)] bg-cover bg-[50%_50%] lg:w-[552px] lg:h-[518px] lg:rounded-[27px]">
                      <div className="h-[300px] bg-[#000000ba] rounded-[20px] overflow-hidden lg:h-[518px] lg:rounded-[27px]">
                        <div className="flex flex-col w-full h-full items-start justify-start p-6 lg:w-[485px] lg:h-[444px] lg:gap-[351px] lg:relative lg:top-[35px] lg:left-[37px] lg:p-0">
                          <div className="flex w-auto items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-0 rounded-[45px] lg:w-[227px]">
                            <h2 className="relative w-fit mt-[-1.00px] font-urbanist font-semibold text-black text-base text-center tracking-[0] leading-[23px] whitespace-nowrap lg:text-lg">
                              Real Results, Real Clients
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute w-[215px] h-[23px] top-0 left-[913px] bg-primary-300 rounded-[27px]"
                aria-hidden="true"
              />
            </div>

            {/* Case Study Card */}
            <article className="flex flex-col items-center gap-6 px-6 py-6 relative self-stretch w-full flex-[0_0_auto] bg-neutral-0 rounded-[20px] lg:flex-row lg:gap-[41px] lg:px-[38px] lg:py-[34px] lg:rounded-[27px]">
              {/* Performance Dashboard */}
              <div className="relative w-full h-[300px] bg-primary-50 rounded-[12px] overflow-hidden border border-solid border-primary-75 lg:w-[539px] lg:h-[571px] lg:rounded-[12.42px] lg:border-[0.96px]">
                <div className="flex flex-col w-[242px] items-center gap-[22.94px] relative top-[212px] left-[149px]">
                  <div className="flex flex-col w-[147.17px] items-center justify-center gap-[19.11px] relative flex-[0_0_auto]">
                    <div className="self-stretch mt-[-0.96px] font-semibold text-primary-300 text-[43px] text-center leading-[28.7px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      +380%
                    </div>
                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[19.1px] text-center tracking-[0] leading-[24.8px]">
                      Traffic Growth
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-[37.27px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[87.92px] items-center justify-center gap-[5.73px] relative">
                      <div className="self-stretch mt-[-0.96px] font-semibold text-neutral-600 text-[19.1px] text-center leading-[24.8px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                        +190%
                      </div>
                      <div className="self-stretch font-normal text-[13.4px] leading-[22.0px] relative [font-family:'Urbanist',Helvetica] text-grey-500 text-center tracking-[0]">
                        Lead Increase
                      </div>
                    </div>

                    <div className="flex flex-col w-[116.59px] items-center justify-center gap-[5.73px] relative">
                      <div className="relative self-stretch mt-[-0.96px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-600 text-[19.1px] text-center tracking-[0] leading-[24.8px]">
                        $1.8M
                      </div>
                      <div className="relative w-[141.43px] ml-[-12.42px] mr-[-12.42px] [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[13.4px] text-center tracking-[0] leading-[22.0px]">
                        Revenue Generated
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="flex flex-col w-[491px] items-start justify-center gap-[17px] relative mr-[-19.00px]">
                <div className="flex flex-col items-start justify-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
                    <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] bg-grey-50 rounded-[67px] border border-solid border-grey-300">
                      <span className="w-fit mt-[-1.00px] font-medium text-sm leading-[23px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-500 text-center tracking-[0]">
                        Lead Based
                      </span>
                    </span>

                    <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] bg-primary-300 rounded-[67px]">
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm text-center tracking-[0] leading-[23px] whitespace-nowrap">
                        6 months
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-lg tracking-[0] leading-[23px]">
                      GrowthLab Inc.
                    </h3>

                    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[289px] items-start justify-center gap-2 relative flex-[0_0_auto]">
                        <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-base tracking-[0] leading-[23px]">
                          Challenege
                        </h4>
                        <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm tracking-[0] leading-[23px]">
                          Struggling to compete with larger brands
                        </p>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-base tracking-[0] leading-[23px]">
                          Solution
                        </h4>
                        <p className="relative w-[491px] [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm tracking-[0] leading-[23px]">
                          Targeted content campaigns focusing on long-tail
                          keywords and customer success stories
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="flex flex-wrap items-center justify-center gap-[24px_89px] px-[68px] py-4 relative self-stretch w-full flex-[0_0_auto] rounded-[13px] border border-solid border-grey-50">
                  {metricsData.map((metric, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[125px] items-center gap-3.5 relative"
                    >
                      <div
                        className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ${
                          index === 3 ? "bg-[#e8f4ff]" : "bg-primary-50"
                        } rounded-[458px] border border-solid border-primary-75`}
                      >
                        <img
                          className="relative w-5 h-5"
                          alt={metric.alt}
                          src={metric.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="self-stretch mt-[-0.96px] font-medium text-neutral-800 text-sm text-center leading-5 relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          {metric.value}
                        </div>
                        <div
                          className={`relative ${
                            index === 1
                              ? "w-[132px] ml-[-3.50px] mr-[-3.50px]"
                              : index === 2
                              ? "w-[130px] ml-[-2.50px] mr-[-2.50px]"
                              : "self-stretch"
                          } [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs text-center tracking-[0] leading-[18px]`}
                        >
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="all-[unset] box-border flex w-[227px] h-[50px] justify-center gap-[7px] px-[19px] py-2.5 bg-grey-50 rounded-[33px] border border-solid border-grey-200 items-center relative hover:bg-grey-75 focus:outline-2 focus:outline-primary-300 transition-colors">
                  <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
                    Read Full Case Study
                  </span>
                  <img
                    className="relative w-5 h-5"
                    alt="Arrow right"
                    src="/SEO/ca/arrow-right.svg"
                  />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
