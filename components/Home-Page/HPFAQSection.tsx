import React from "react";

export const FAQSection: React.FC = () => {
  // Data for metrics in the case study card
  const metricsData = [
    {
      icon: "/Home-Page/ca/trending-up.svg",
      value: "8k - 38k",
      label: "Organic Traffic",
      alt: "Trending up",
    },
    {
      icon: "/Home-Page/ca/users.svg",
      value: "2k - 12k",
      label: "Email Susbcribers",
      alt: "Users",
    },
    {
      icon: "/Home-Page/ca/check-circle.svg",
      value: "+320%",
      label: "Social Engagement",
      alt: "Check circle",
    },
    {
      icon: "/Home-Page/ca/award.svg",
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
    "/Home-Page/ca/star-filled-4.svg"
  );

  return (
    <section
      className="relative w-full h-[1542px]"
      role="main"
      aria-label="Case Studies Section"
    >
      <div className="h-[1542px] bg-[#0c0c0f] overflow-hidden">
        <div className="relative w-[1780px] h-[1368px] top-[93px] left-[-172px]">
          {/* Background blur elements */}
          <div
            className="absolute w-[464px] h-[403px] top-[168px] left-[1316px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]"
            aria-hidden="true"
          />
          <div
            className="absolute w-[464px] h-[403px] top-[145px] left-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]"
            aria-hidden="true"
          />

          <div className="flex flex-col w-[1128px] items-start gap-[23px] absolute top-0 left-[328px]">
            {/* Bottom Section with Testimonial and Industry Tags */}
            <div className="relative self-stretch w-full h-[694px]">
              <div className="absolute w-[1128px] h-[661px] top-[33px] left-0">
                <div className="relative h-[694px] top-[-33px]">
                  <div className="absolute w-[1128px] h-[694px] top-0 left-0">
                    {/* Industry Tags Section */}
                    <div className="absolute w-[542px] h-[661px] top-[33px] left-[586px] bg-[url('/Home-Page/ca/frame-2121457564.svg')] bg-[100%_100%]">
                      <div className="flex flex-col w-[488px] items-start justify-center gap-56 relative top-[159px] left-[27px]">
                        <div className="flex flex-col items-start gap-[33px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex w-[255px] items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-0 rounded-[45px]">
                            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-black text-lg text-center tracking-[0] leading-[23px] whitespace-nowrap">
                              Case Studies by Industry
                            </h2>
                          </div>

                          <div className="flex flex-wrap items-end gap-[19px_14px] relative self-stretch w-full flex-[0_0_auto]">
                            {industryTags.map((tag, index) => (
                              <button
                                key={index}
                                className={`flex ${
                                  index === 0
                                    ? "w-[187px]"
                                    : index === 1
                                    ? "w-[198px]"
                                    : index === 2
                                    ? "w-[223px]"
                                    : index === 3
                                    ? "w-[146px]"
                                    : "w-[91px]"
                                } items-center justify-center gap-2.5 px-[23px] py-[13px] relative rounded-[45px] border border-solid border-neutral-0 hover:bg-neutral-0 hover:text-black transition-colors focus:outline-2 focus:outline-neutral-0`}
                              >
                                <span
                                  className={`relative w-fit mt-[-1.00px] ${
                                    index === 1
                                      ? "ml-[-3.00px] mr-[-3.00px]"
                                      : ""
                                  } [font-family:'Urbanist',Helvetica] font-semibold text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap`}
                                >
                                  {tag}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <button className="all-[unset] box-border w-[284px] flex h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-primary-300 transition-colors">
                          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
                            View All Case Studies
                          </span>
                          <img
                            className="relative w-5 h-5"
                            alt="Arrow right"
                            src="/Home-Page/ca/arrow-right-1.svg"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="flex flex-col w-[891px] items-start justify-center gap-2.5 px-[37px] py-[23px] absolute top-0 left-0 bg-neutral-0 rounded-[27px]">
                      <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                        <p className="relative w-[803px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[26px]">
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
                            className="relative w-6 h-6"
                            alt="Star filled"
                            src={star}
                          />
                        ))}
                      </div>
                    </blockquote>
                  </div>

                  {/* Background Image Section */}
                  <div className="flex w-[552px] h-[518px] items-center gap-2.5 absolute top-44 left-0">
                    <div className="relative w-[552px] h-[518px] rounded-[27px] overflow-hidden bg-[url('/Home-Page/ca/frame-2121457561.svg')] bg-cover bg-[50%_50%]">
                      <div className="h-[518px] bg-[#000000ba] rounded-[27px] overflow-hidden">
                        <div className="flex flex-col w-[485px] h-[444px] items-start gap-[351px] relative top-[35px] left-[37px]">
                          <div className="flex w-[227px] items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-0 rounded-[45px]">
                            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-black text-lg text-center tracking-[0] leading-[23px] whitespace-nowrap">
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
            <article className="flex items-center gap-[41px] px-[38px] py-[34px] relative self-stretch w-full flex-[0_0_auto] bg-neutral-0 rounded-[27px]">
              {/* Performance Dashboard */}
              <div className="relative w-[539px] h-[571px] bg-primary-50 rounded-[12.42px] overflow-hidden border-[0.96px] border-solid border-primary-75">
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
                    src="/Home-Page/ca/arrow-right.svg"
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
