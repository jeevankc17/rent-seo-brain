import React from "react";
import AppButton from "@/utils/AppButton";

export const ContentServiceSection: React.FC = () => {
  const features = [
    {
      title: "A Full In-House Team of Experts",
      description: "From SEO-trained writers and keyword strategists to creative leads and editors, everything is handled by our in-house team."
    },
    {
      title: "Tailored, Industry-Specific Content",
      description: "We understand the nuances of your field. Whether you're in B2B, tech, SaaS, real estate, health, or finance."
    },
    {
      title: "SEO + UX-Driven Approach", 
      description: "Every piece we create is designed to rank and resonate. Our content is optimized for Google, while being easy to read."
    },
    {
      title: "Brand-First Storytelling",
      description: "We stay true to your brand voice, tone, and values. Our content follows clear guidelines to maintain consistency across all platforms."
    },
    {
      title: "Clarity, Calendars, and Transparency",
      description: "You'll always know what's coming. We deliver organized monthly content calendars and provide transparent reporting ."
    }
  ];

  return (
    <section className="w-full flex justify-center items-center px-4 md:px-8">
      <div className="flex w-full max-w-sm md:max-w-4xl lg:max-w-[1128px] flex-col justify-center items-center gap-8 md:gap-12 lg:gap-[50px]">
        {/* Title Section */}
        <div className="flex w-full max-w-md md:max-w-lg lg:w-[565px] flex-col items-center gap-4">
          <div className="flex w-full max-w-sm md:max-w-md lg:w-[384px] px-[10px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF]">
            <svg 
              width="16" 
              height="15" 
              viewBox="0 0 16 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[15px] flex-shrink-0"
            >
              <path 
                d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" 
                fill="#1D8FFF"
              />
            </svg>
            <div className="color-[#1D8FFF] font-urbanist text-xs sm:text-sm lg:text-[14px] font-medium leading-[23px] text-[#1D8FFF] text-center">
              Why Choose Rent SEO Brain for Content Marketing?
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="w-full color-[#12579C] text-center font-urbanist text-lg sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-tight lg:leading-[57px] text-[#12579C]">
              Not Just Words ,We Create Impact
            </h1>
            <p className="w-full max-w-md md:max-w-lg lg:w-[565px] color-[#6A7986] text-center font-urbanist text-sm md:text-base font-normal leading-relaxed lg:leading-[23px] text-[#6A7986]">
              At Rent SEO Brain, we don't believe in churning out generic blog posts or keyword-stuffed articles. We believe in strategic content .
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-14 w-full">
          <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-[41px] py-6 md:py-8 lg:py-12 items-center gap-8 md:gap-12 lg:gap-14 w-full rounded-[15px] md:rounded-[20px] lg:rounded-[25px]">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-[52px] w-full">
              {/* Features List */}
              <div className="flex w-full lg:w-[480px] flex-col items-start gap-6 md:gap-8 lg:gap-[57px] order-2 lg:order-1">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-start gap-2 w-full">
                    <div className="flex px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-[11px] items-center gap-[10px] w-full border-l-[3px] md:border-l-[4px] lg:border-l-[5px] border-[#F78C01]">
                      <h3 className="w-full color-[#071F36] font-urbanist text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight lg:leading-[23px] text-[#071F36]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="w-full color-[#7B7B7B] font-urbanist text-sm md:text-base font-normal leading-relaxed lg:leading-[23px] text-[#7B7B7B]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Content Analyzer Card */}
              <div className="flex h-auto min-h-[400px] md:min-h-[500px] lg:h-[723px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-[18px] justify-center items-center gap-[10px] rounded-[11px] bg-white shadow-[0_4px_57.7px_0_rgba(29,143,255,0.37)] w-full lg:w-auto order-1 lg:order-2">
                <div className="flex w-full max-w-md md:max-w-lg lg:w-[463px] flex-col justify-center items-start gap-4 md:gap-6 lg:gap-[30px]">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2 sm:gap-0">
                    <div className="flex items-center gap-2 md:gap-3">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                      >
                        <path 
                          d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
                          stroke="#00B45C" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                        <path 
                          d="M14 2V8H20" 
                          stroke="#00B45C" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                        <path 
                          d="M16 13H8" 
                          stroke="#00B45C" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                        <path 
                          d="M16 17H8" 
                          stroke="#00B45C" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                        <path 
                          d="M10 9H9H8" 
                          stroke="#00B45C" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="color-[#12579C] font-urbanist text-base md:text-lg font-medium leading-[23px] text-[#12579C]">
                        Content Analyzer
                      </div>
                    </div>
                    <div className="flex px-3 md:px-[17px] py-1 justify-center items-center gap-[10px] rounded-[45px] border border-[#00B45C] bg-[rgba(0,180,92,0.11)]">
                      <div className="color-[#00B45C] font-urbanist text-xs md:text-[14px] font-medium leading-[23px] text-[#00B45C]">
                        Live Tool
                      </div>
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="flex px-4 md:px-6 lg:px-[27px] py-3 md:py-4 lg:py-5 justify-between items-center w-full rounded-[11px] bg-[#F1F1F1]">
                    <div className="color-[#00034A] font-urbanist text-base md:text-lg font-medium leading-[23px] text-[#00034A]">
                      Professional
                    </div>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 25" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <path 
                        d="M12 15.5L7 10.5H17L12 15.5Z" 
                        fill="#1D1B20"
                      />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="w-full color-[#7B7B7B] font-urbanist text-sm md:text-base lg:text-lg font-medium leading-relaxed lg:leading-8 text-[#7B7B7B]">
                    Content marketing drives 3x more leads than traditional advertising. When done strategically, it builds trust and establishes your brand as an industry authority.
                  </p>

                  {/* Metrics Cards */}
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4 lg:gap-[21px] w-full">
                    <div className="flex w-24 md:w-28 lg:w-[132px] px-2 md:px-3 lg:px-[15px] py-2 md:py-3 flex-col justify-center items-center gap-1 md:gap-[6px] rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                      <div className="w-full color-black text-center font-urbanist text-lg md:text-xl font-medium leading-6 md:leading-8 text-black">
                        75%
                      </div>
                      <div className="w-full color-[#7B7B7B] text-center font-urbanist text-xs md:text-sm lg:text-base font-normal leading-4 md:leading-6 lg:leading-8 text-[#7B7B7B]">
                        Readability
                      </div>
                    </div>
                    <div className="flex w-24 md:w-28 lg:w-[132px] px-2 md:px-3 lg:px-[15px] py-2 md:py-3 flex-col justify-center items-center gap-1 md:gap-[6px] rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                      <div className="w-full color-black text-center font-urbanist text-lg md:text-xl font-medium leading-6 md:leading-8 text-black">
                        90%
                      </div>
                      <div className="w-full color-[#7B7B7B] text-center font-urbanist text-xs md:text-sm lg:text-base font-normal leading-4 md:leading-6 lg:leading-8 text-[#7B7B7B]">
                        SEO Score
                      </div>
                    </div>
                    <div className="flex w-24 md:w-28 lg:w-[132px] px-2 md:px-3 lg:px-[15px] py-2 md:py-3 flex-col justify-center items-center gap-1 md:gap-[6px] rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                      <div className="w-full color-black text-center font-urbanist text-lg md:text-xl font-medium leading-6 md:leading-8 text-black">
                        70%
                      </div>
                      <div className="w-full color-[#7B7B7B] text-center font-urbanist text-xs md:text-sm lg:text-base font-normal leading-4 md:leading-6 lg:leading-8 text-[#7B7B7B]">
                        Engagement
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="flex w-full flex-col items-start gap-3 md:gap-4 lg:gap-[18px]">
                    <svg 
                      width="100%" 
                      height="31" 
                      viewBox="0 0 442 31" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full max-w-md lg:max-w-[430px]"
                    >
                      <path 
                        d="M6 6.5H436" 
                        stroke="#A2D1FF" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                      />
                      <path 
                        d="M6 24.5H312" 
                        stroke="#D8FD5F" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[19px] w-full">
                    <AppButton
                      text="Analyze Content"
                      variant="blue"
                      size="md"
                      className="w-full"
                    />
                    <AppButton
                      text="Get Professional Content like this"
                      variant="white"
                      size="md"
                      className="w-full"
                    />
                  </div>

                  {/* Footer Text */}
                  <div className="w-full color-[#7B7B7B] text-right font-urbanist text-xs font-normal leading-6 md:leading-8 text-[#7B7B7B]">
                    23 words . 1 min read
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-[22px] w-full">
            <AppButton
              text="Work With Our Content Experts"
              variant="blue"
              size="lg"
              className="w-full max-w-sm sm:max-w-none sm:w-auto lg:w-[309px]"
              icon={
                <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M4.66406 10H16.3307" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <AppButton
              text="Learn More"
              variant="white"
              size="lg"
              className="w-full max-w-xs sm:max-w-none sm:w-auto lg:w-[172px]"
              icon={
                <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M4.66406 10H16.3307" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServiceSection;
