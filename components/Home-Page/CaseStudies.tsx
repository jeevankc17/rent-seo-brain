import React from "react";
import AppButton from "@/utils/AppButton";

export const CaseStudies: React.FC = () => {
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
      className="relative w-full h-auto lg:h-[1542px]"
      role="main"
      aria-label="Case Studies Section"
    >
      <div className="h-auto lg:h-[1542px] bg-[#0c0c0f] overflow-hidden py-8 lg:py-[93px]">
        <div className="relative w-full h-auto lg:h-[1368px]">
          {/* Background blur elements */}
          <div
            className="absolute w-[464px] h-[403px] top-[168px] right-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px] hidden lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute w-[464px] h-[403px] top-[145px] left-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px] hidden lg:block"
            aria-hidden="true"
          />

          <div className="flex flex-col w-full max-w-[1128px] mx-auto px-4 lg:px-0 items-start gap-6 lg:gap-[23px] relative">
            {/* Bottom Section with Testimonial and Industry Tags */}
            <div className="relative self-stretch w-full h-auto lg:h-[694px]">
              <div className="relative lg:absolute w-full lg:w-[1128px] h-auto lg:h-[661px] top-0 lg:top-[33px] left-0">
                <div className="relative h-auto lg:h-[694px] top-0 lg:top-[-33px]">
                  <div className="relative lg:absolute w-full lg:w-[1128px] h-auto lg:h-[694px] top-0 left-0 flex flex-col lg:block gap-6 lg:gap-0">
                    {/* Industry Tags Section */}
                    <div className="relative lg:absolute w-full lg:w-[542px] h-auto lg:h-[661px] top-0 lg:top-[33px] left-0 lg:left-[586px] bg-[url('/Home-Page/ca/frame-2121457564.svg')] bg-[100%_100%] order-2 lg:order-none">
                      <div className="flex flex-col w-full lg:w-[488px] items-start justify-center gap-8 lg:gap-56 relative top-0 lg:top-[159px] left-0 lg:left-[27px] p-4 lg:p-0">
                        <div className="flex flex-col items-start gap-[33px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex w-full max-w-[255px] items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-0 rounded-[35px] lg:rounded-[45px]">
                            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-black text-lg text-center tracking-[0] leading-[23px] whitespace-nowrap">
                              Case Studies by Industry
                            </h2>
                          </div>

                          <div className="flex flex-wrap items-end gap-3 lg:gap-[19px_14px] relative self-stretch w-full flex-[0_0_auto]">
                            {industryTags.map((tag, index) => (
                              <AppButton
                                key={index}
                                variant="white"
                                size="sm"
                                text={tag}
                                className="border border-solid border-neutral-0 hover:bg-neutral-0 hover:text-black focus:outline-2 focus:outline-neutral-0 lg:px-[23px] lg:py-[13px]"
                              />
                            ))}
                          </div>
                        </div>

                        <AppButton
                          variant="white"
                          size="lg"
                          className="w-full lg:w-[284px] bg-grey-50 border border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-primary-300"
                          icon={
                            <img
                              className="relative w-5 h-5"
                              alt="Arrow right"
                              src="/SEO/ca/arrow-right-1.svg"
                            />
                          }
                          iconPosition="right"
                        >
                          View All Case Studies
                        </AppButton>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="flex flex-col w-full lg:w-[891px] items-start justify-center gap-2.5 px-6 lg:px-[37px] py-4 lg:py-[23px] relative lg:absolute top-0 left-0 bg-neutral-0 rounded-[20px] lg:rounded-[27px] order-1 lg:order-none">
                      <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                        <p className="relative w-full lg:w-[803px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[26px]">
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
                  <div className="flex w-full lg:w-[552px] h-auto lg:h-[518px] items-center gap-2.5 relative lg:absolute top-0 lg:top-44 left-0 order-3 lg:order-none">
                    <div className="relative w-full lg:w-[552px] h-64 lg:h-[518px] rounded-[20px] lg:rounded-[27px] overflow-hidden bg-[url('/Home-Page/ca/frame-2121457561.svg')] bg-cover bg-[50%_50%]">
                      <div className="h-full lg:h-[518px] bg-[#000000ba] rounded-[20px] lg:rounded-[27px] overflow-hidden">
                        <div className="flex flex-col w-full lg:w-[485px] h-full lg:h-[444px] items-start gap-8 lg:gap-[351px] relative top-4 lg:top-[35px] left-4 lg:left-[37px] p-4 lg:p-0">
                          <div className="flex w-full max-w-[227px] items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-neutral-0 rounded-[35px] lg:rounded-[45px]">
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
                className="absolute w-[215px] h-[23px] top-0 left-[913px] bg-primary-300 rounded-[27px] hidden lg:block"
                aria-hidden="true"
              />
            </div>

            {/* Case Study Card */}
            <article className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[41px] px-6 lg:px-[38px] py-6 lg:py-[34px] relative self-stretch w-full flex-[0_0_auto] bg-neutral-0 rounded-[20px] lg:rounded-[27px]">
              {/* Performance Dashboard */}
              <div className="relative w-full lg:w-[539px] h-64 lg:h-[571px] bg-primary-50 rounded-[10px] lg:rounded-[12.42px] overflow-hidden border-[0.96px] border-solid border-primary-75">
                <div className="flex flex-col w-full lg:w-[242px] items-center gap-4 lg:gap-[22.94px] relative top-4 lg:top-[212px] left-0 lg:left-[149px] p-4 lg:p-0">
                  <div className="flex flex-col w-full lg:w-[147.17px] items-center justify-center gap-3 lg:gap-[19.11px] relative flex-[0_0_auto]">
                    <div className="self-stretch mt-[-0.96px] font-semibold text-primary-300 text-2xl lg:text-[43px] text-center leading-[28px] lg:leading-[28.7px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                      +380%
                    </div>
                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-sm lg:text-[19.1px] text-center tracking-[0] leading-[18px] lg:leading-[24.8px]">
                      Traffic Growth
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-[37.27px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-full lg:w-[87.92px] items-center justify-center gap-1 lg:gap-[5.73px] relative">
                      <div className="self-stretch mt-[-0.96px] font-semibold text-neutral-600 text-sm lg:text-[19.1px] text-center leading-[18px] lg:leading-[24.8px] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                        +190%
                      </div>
                      <div className="self-stretch font-normal text-xs lg:text-[13.4px] leading-[16px] lg:leading-[22.0px] relative [font-family:'Urbanist',Helvetica] text-grey-500 text-center tracking-[0]">
                        Lead Increase
                      </div>
                    </div>

                    <div className="flex flex-col w-full lg:w-[116.59px] items-center justify-center gap-1 lg:gap-[5.73px] relative">
                      <div className="relative self-stretch mt-[-0.96px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-600 text-sm lg:text-[19.1px] text-center tracking-[0] leading-[18px] lg:leading-[24.8px]">
                        $1.8M
                      </div>
                      <div className="relative w-full lg:w-[141.43px] lg:ml-[-12.42px] lg:mr-[-12.42px] [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs lg:text-[13.4px] text-center tracking-[0] leading-[16px] lg:leading-[22.0px]">
                        Revenue Generated
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="flex flex-col w-full lg:w-[491px] items-start justify-center gap-4 lg:gap-[17px] relative lg:mr-[-19.00px]">
                <div className="flex flex-col items-start justify-center gap-6 lg:gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
                    <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] bg-grey-50 rounded-[67px] border border-solid border-grey-300">
                      <span className="w-fit mt-[-1.00px] font-medium text-xs lg:text-sm leading-[18px] lg:leading-[23px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] text-grey-500 text-center tracking-[0]">
                        Lead Based
                      </span>
                    </span>

                    <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] bg-primary-300 rounded-[67px]">
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-xs lg:text-sm text-center tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
                        6 months
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[23px]">
                      GrowthLab Inc.
                    </h3>

                    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[289px] items-start justify-center gap-2 relative flex-[0_0_auto]">
                        <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-base tracking-[0] leading-[23px]">
                          Challenege
                        </h4>
                        <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-xs lg:text-sm tracking-[0] leading-[16px] lg:leading-[23px]">
                          Struggling to compete with larger brands
                        </p>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-base tracking-[0] leading-[23px]">
                          Solution
                        </h4>
                        <p className="relative w-full lg:w-[491px] [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-xs lg:text-sm tracking-[0] leading-[16px] lg:leading-[23px]">
                          Targeted content campaigns focusing on long-tail
                          keywords and customer success stories
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-4 lg:gap-[24px_89px] px-4 lg:px-[68px] py-4 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] lg:rounded-[13px] border border-solid border-grey-50">
                  {metricsData.map((metric, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-full lg:w-[125px] items-center gap-2 lg:gap-3.5 relative"
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
                        <div className="self-stretch mt-[-0.96px] font-medium text-neutral-800 text-xs lg:text-sm text-center leading-4 lg:leading-5 relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                          {metric.value}
                        </div>
                        <div
                          className={`relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[10px] lg:text-xs text-center tracking-[0] leading-[14px] lg:leading-[18px]`}
                        >
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="all-[unset] box-border flex w-full lg:w-[227px] h-12 lg:h-[50px] justify-center gap-2 lg:gap-[7px] px-4 lg:px-[19px] py-2.5 bg-grey-50 rounded-[28px] lg:rounded-[33px] border border-solid border-grey-200 items-center relative hover:bg-grey-75 focus:outline-2 focus:outline-primary-300 transition-colors">
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
