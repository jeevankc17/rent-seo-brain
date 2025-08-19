import React from "react";

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
    <section className="w-full flex justify-center items-center ">
      <div className="flex w-full max-w-[1128px] flex-col justify-center items-center gap-[50px]">
        {/* Title Section */}
        <div className="flex w-[565px] flex-col items-center gap-4">
          <div className="flex w-[384px] px-[10px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF]">
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
            <div className="color-[#1D8FFF] font-urbanist text-[14px] font-medium leading-[23px] text-[#1D8FFF]">
              Why Choose Rent SEO Brain for Content Marketing?
            </div>
          </div>
          
          <div className="flex h-[176px] flex-col items-center gap-4 self-stretch">
            <h1 className="self-stretch color-[#12579C] text-center font-urbanist text-[50px] font-bold leading-[57px] text-[#12579C]">
              Not Just Words ,We Create Impact
            </h1>
            <p className="w-[565px] color-[#6A7986] text-center font-urbanist text-base font-normal leading-[23px] text-[#6A7986]">
              At Rent SEO Brain, we don't believe in churning out generic blog posts or keyword-stuffed articles. We believe in strategic content .
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center gap-14 self-stretch">
          <div className="flex px-[41px] py-12 items-center gap-14 self-stretch rounded-[25px]">
            <div className="flex justify-center items-center gap-[52px]">
              {/* Features List */}
              <div className="flex w-[480px] flex-col items-start gap-[57px]">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-start gap-2 self-stretch">
                    <div className="flex px-5 py-[11px] items-center gap-[10px] self-stretch border-l-[5px] border-[#F78C01]">
                      <h3 className="w-[429px] color-[#071F36] font-urbanist text-2xl font-bold leading-[23px] text-[#071F36]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="self-stretch color-[#7B7B7B] font-urbanist text-base font-normal leading-[23px] text-[#7B7B7B]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Content Analyzer Card */}
              <div className="flex h-[723px] px-8 py-[18px] justify-center items-center gap-[10px] rounded-[11px] bg-white shadow-[0_4px_57.7px_0_rgba(29,143,255,0.37)]">
                <div className="flex w-[463px] flex-col justify-center items-start gap-[30px]">
                  {/* Header */}
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex w-[174px] justify-between items-center">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 flex-shrink-0"
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
                      <div className="color-[#12579C] font-urbanist text-lg font-medium leading-[23px] text-[#12579C]">
                        Content Analyzer
                      </div>
                    </div>
                    <div className="flex px-[17px] py-1 justify-center items-center gap-[10px] rounded-[45px] border border-[#00B45C] bg-[rgba(0,180,92,0.11)]">
                      <div className="color-[#00B45C] font-urbanist text-[14px] font-medium leading-[23px] text-[#00B45C]">
                        Live Tool
                      </div>
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="flex px-[27px] py-5 justify-between items-center self-stretch rounded-[11px] bg-[#F1F1F1]">
                    <div className="color-[#00034A] font-urbanist text-lg font-medium leading-[23px] text-[#00034A]">
                      Professional
                    </div>
                    <svg 
                      width="24" 
                      height="25" 
                      viewBox="0 0 24 25" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <path 
                        d="M12 15.5L7 10.5H17L12 15.5Z" 
                        fill="#1D1B20"
                      />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="w-[450px] color-[#7B7B7B] font-urbanist text-lg font-medium leading-8 text-[#7B7B7B]">
                    Content marketing drives 3x more leads than traditional advertising. When done strategically, it builds trust and establishes your brand as an industry authority.
                  </p>

                  {/* Metrics Cards */}
                  <div className="flex items-center gap-[21px]">
                    <div className="flex w-[132px] px-[15px] py-3 flex-col justify-center items-center gap-[6px] rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                      <div className="self-stretch color-black text-center font-urbanist text-xl font-medium leading-8 text-black">
                        75%
                      </div>
                      <div className="self-stretch color-[#7B7B7B] text-center font-urbanist text-base font-normal leading-8 text-[#7B7B7B]">
                        Readability
                      </div>
                    </div>
                    <div className="flex w-[132px] px-[15px] py-3 flex-col justify-center items-center gap-[6px] rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                      <div className="self-stretch color-black text-center font-urbanist text-xl font-medium leading-8 text-black">
                        90%
                      </div>
                      <div className="self-stretch color-[#7B7B7B] text-center font-urbanist text-base font-normal leading-8 text-[#7B7B7B]">
                        SEO Score
                      </div>
                    </div>
                    <div className="flex w-[132px] px-[15px] py-3 flex-col justify-center items-center gap-[6px] rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                      <div className="self-stretch color-black text-center font-urbanist text-xl font-medium leading-8 text-black">
                        70%
                      </div>
                      <div className="self-stretch color-[#7B7B7B] text-center font-urbanist text-base font-normal leading-8 text-[#7B7B7B]">
                        Engagement
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="flex w-[430px] flex-col items-start gap-[18px]">
                    <svg 
                      width="442" 
                      height="31" 
                      viewBox="0 0 442 31" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[430px]"
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
                  <div className="flex flex-col items-start gap-[19px] self-stretch">
                    <button className="flex px-[10px] py-[10px] justify-center items-center gap-[10px] self-stretch rounded-[5px] bg-[#1D8FFF]">
                      <div className="color-white text-center font-urbanist text-base font-medium leading-8 text-white">
                        Analyze Content
                      </div>
                    </button>
                    <button className="flex px-[10px] py-[10px] justify-center items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#E9E9E9]">
                      <div className="color-[#071F36] text-center font-urbanist text-base font-medium leading-8 text-[#071F36]">
                        Get Professional Content like this
                      </div>
                    </button>
                  </div>

                  {/* Footer Text */}
                  <div className="self-stretch color-[#7B7B7B] text-right font-urbanist text-xs font-normal leading-8 text-[#7B7B7B]">
                    23 words . 1 min read
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-[22px]">
            <button className="flex w-[299px] h-[50px] px-[3px] py-0 justify-end items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <div className="color-white text-center font-urbanist text-base font-medium leading-[23px] text-white">
                Work With Our Content Experts
              </div>
              <div className="flex px-3 py-3 items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
                <svg 
                  width="21" 
                  height="20" 
                  viewBox="0 0 21 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path 
                    d="M4.66406 10H16.3307" 
                    stroke="#1D8FFF" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" 
                    stroke="#1D8FFF" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            
            <button className="flex w-[172px] h-[50px] px-[19px] py-[10px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
              <div className="color-[#091E42] font-urbanist text-base font-medium leading-4 text-[#091E42]">
                Learn More
              </div>
              <svg 
                width="21" 
                height="20" 
                viewBox="0 0 21 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0"
              >
                <path 
                  d="M4.66406 10H16.3307" 
                  stroke="#091E42" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" 
                  stroke="#091E42" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServiceSection;
