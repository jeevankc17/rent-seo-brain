"use client";
import React from "react";

const CMSROI = () => {
  return (
    <div className="relative bg-neutral-900 px-4 overflow-hidden">
      {/* Main Container */}
      <div className="flex w-full max-w-[1173px] mx-auto flex-col items-center gap-12">
        {/* Header Section */}
        <div className="flex w-full max-w-[601px] flex-col justify-center items-center gap-4">
          {/* Badge */}
          <div className="flex w-[203px] px-[10px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z"
                fill="#E8F4FF"
              />
            </svg>
            <span className="text-[#E8F4FF] font-urbanist text-[14px] font-medium leading-[23px]">
              Our Proven Process
            </span>
          </div>

          {/* Main Heading and Description */}
          <div className="flex h-[176px] flex-col justify-center items-center gap-4 w-full">
            <h2 className="w-[593px] text-[#E8F4FF] text-center font-urbanist text-[50px] font-bold leading-[57px]">
              How We Turn Ideas Into ROI-Driven Content
            </h2>
            <p className="w-full text-[#EBEDEF] text-center font-urbanist text-[16px] font-normal leading-[23px]">
              From discovery to reporting, our systematic approach ensures your
              content marketing delivers measurable results.
            </p>
          </div>
        </div>

        {/* Process Steps Container */}
        <div className="relative w-full max-w-[907px] h-[1895px]">
          {/* Step 1 - Top Right */}
          <div className="absolute left-[562px] top-0 flex w-[345px] h-[292px] px-[22px] py-[33px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)]">
            <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              01
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] px-[29px] py-[6px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)]">
                <span className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize">
                  STEP 1
                </span>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <h3 className="w-full text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize">
                  Discovery & Research
                </h3>
                <p className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize">
                  We begin by understanding the heart of your business — your
                  goals, audience, competitors, and current positioning. This
                  foundation ensures that every piece of content aligns.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Left */}
          <div className="absolute left-[-15px] top-[300px] flex w-[345px] h-[292px] px-[22px] py-[33px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)]">
            <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              02
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] px-[29px] py-[6px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)]">
                <span className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize">
                  STEP 2
                </span>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <h3 className="w-full text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize">
                  Strategy & Planning
                </h3>
                <p className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize">
                  With research in hand, we build a tailored content plan that
                  outlines key topics, content types, publishing timelines, and
                  clear objectives. Every move we make is backed by intent .
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Right */}
          <div className="absolute left-[562px] top-[583px] flex w-[345px] h-[292px] px-[22px] py-[33px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)]">
            <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              03
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] px-[29px] py-[6px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)]">
                <span className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize">
                  STEP 3
                </span>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <h3 className="w-full text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize">
                  Content Creation
                </h3>
                <p className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize">
                  Now the magic happens. Our team of skilled writers, content
                  strategists, and designers collaborate to produce engaging,
                  high-quality content.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Left */}
          <div className="absolute left-[-15px] top-[878px] flex w-[345px] h-[292px] px-[22px] py-[33px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)]">
            <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              04
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] px-[29px] py-[6px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)]">
                <span className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize">
                  STEP 4
                </span>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <h3 className="w-full text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize">
                  SEO Optimization & Review
                </h3>
                <p className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize">
                  Before anything goes live, we fine-tune every element for
                  search performance. That means keyword optimization, metadata,
                  clean structure, internal linking, and quality control.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 - Right */}
          <div className="absolute left-[561px] top-[1199px] flex w-[345px] h-[292px] px-[22px] py-[33px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)]">
            <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              05
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] px-[29px] py-[6px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)]">
                <span className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize">
                  STEP 5
                </span>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <h3 className="w-full text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize">
                  Publishing & Promotion
                </h3>
                <p className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize">
                  We don't just hand off the files. We help schedule and publish
                  your content, and if you opt in, we'll promote it across the
                  most relevant channels.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 - Left */}
          <div className="absolute left-[-15px] top-[1570px] flex w-[345px] h-[292px] px-[22px] py-[33px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)]">
            <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              06
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] px-[29px] py-[6px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)]">
                <span className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize">
                  STEP 6
                </span>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <h3 className="w-full text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize">
                  Reporting & Iteration
                </h3>
                <p className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize">
                  After publishing, we monitor how your content performs —
                  tracking traffic, engagement, and lead generation. We use real
                  data to improve and adapt the strategy
                </p>
              </div>
            </div>
          </div>

          {/* Connecting Lines and Dots */}
          {/* Line 1: From step 1 to step 2 */}
          <svg
            className="absolute left-[164px] top-[127px] w-[397px] h-[173px]"
            viewBox="0 0 399 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M398 1H33C15.3269 1 1 15.3269 1 33V174"
              stroke="url(#paint0_linear_1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1"
                x1="199.5"
                y1="1"
                x2="199.5"
                y2="174"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2F98FF" stopOpacity="0.63" />
                <stop
                  offset="0.466346"
                  stopColor="#D0D5DD"
                  stopOpacity="0.32"
                />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dot 1 */}
          <div className="absolute left-[449px] top-[121px] w-[12px] h-[12px] rounded-full bg-[#43A2FF] border-[2.4px] border-white shadow-[0_4.8px_3.6px_rgba(29,143,255,0.20)]"></div>

          {/* Dot 2 */}
          <div className="absolute left-[158px] top-[177px] w-[10px] h-[10px] rounded-full bg-[#43A2FF] border-[2px] border-white shadow-[0_4px_3px_rgba(29,143,255,0.20)]"></div>

          {/* Line 2: From step 2 to step 3 */}
          <svg
            className="absolute left-[168px] top-[622px] w-[393px] h-[163px]"
            viewBox="0 0 395 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1V132.941C1 147.885 13.1148 160 28.0592 160H394"
              stroke="url(#paint0_linear_2)"
              strokeWidth="1.6912"
              strokeLinecap="round"
            />
            <path
              d="M1 71.1846V108.391"
              stroke="#2F98FF"
              strokeWidth="1.6912"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2"
                x1="197.5"
                y1="1"
                x2="197.5"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1D8FFF" stopOpacity="0" />
                <stop offset="0.480769" stopOpacity="0.25" />
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dot 3 */}
          <div className="absolute left-[42px] top-[780px] w-[9px] h-[9px] rounded-full bg-[#43A2FF] border-[1.86px] border-white shadow-[0_3.721px_2.79px_rgba(29,143,255,0.20)]"></div>

          {/* Line 3: From step 3 to step 4 */}
          <svg
            className="absolute left-[347px] top-[885px] w-[394px] h-[144px]"
            viewBox="0 0 396 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M395 1V113C395 130.673 380.673 145 363 145H1"
              stroke="url(#paint0_linear_3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3"
                x1="198"
                y1="1"
                x2="198"
                y2="145"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2F98FF" stopOpacity="0.63" />
                <stop
                  offset="0.466346"
                  stopColor="#D0D5DD"
                  stopOpacity="0.32"
                />
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.11" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dot 4 */}
          <div className="absolute left-[654px] top-[1024px] w-[9px] h-[9px] rounded-full bg-[#43A2FF] border-[1.86px] border-white shadow-[0_3.721px_2.79px_rgba(29,143,255,0.20)]"></div>

          {/* Line 4: From step 4 to step 5 */}
          <svg
            className="absolute left-[148px] top-[1166px] w-[409px] h-[210px]"
            viewBox="0 0 411 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1V183.941C1 198.885 13.1148 211 28.0592 211H410"
              stroke="url(#paint0_linear_4)"
              strokeWidth="1.6912"
              strokeLinecap="round"
            />
            <path
              d="M1 71.1846V108.391"
              stroke="#2F98FF"
              strokeWidth="1.6912"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4"
                x1="205.5"
                y1="1"
                x2="205.5"
                y2="211"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1D8FFF" stopOpacity="0" />
                <stop offset="0.480769" stopOpacity="0.25" />
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dot 5 */}
          <div className="absolute left-[290px] top-[1371px] w-[9px] h-[9px] rounded-full bg-[#43A2FF] border-[1.86px] border-white shadow-[0_3.721px_2.79px_rgba(29,143,255,0.20)]"></div>

          {/* Dot 6 */}
          <div className="absolute left-[450px] top-[1371px] w-[10px] h-[10px] rounded-full bg-[#43A2FF] border-[1.9px] border-white shadow-[0_3.8px_2.85px_rgba(29,143,255,0.20)]"></div>

          {/* Line 5: From step 5 to step 6 */}
          <svg
            className="absolute left-[347px] top-[1519px] w-[394px] h-[202px]"
            viewBox="0 0 396 204"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M395 1.08203V171C395 188.673 380.673 203 363 203H1"
              stroke="url(#paint0_linear_5)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5"
                x1="198"
                y1="59"
                x2="198"
                y2="203"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2F98FF" stopOpacity="0.63" />
                <stop
                  offset="0.466346"
                  stopColor="#D0D5DD"
                  stopOpacity="0.32"
                />
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.11" />
              </linearGradient>
            </defs>
          </svg>

          {/* Final large dot */}
          <div className="absolute left-[668px] top-[1713px] w-[16px] h-[16px] rounded-full bg-[#43A2FF] border-[3.26px] border-white shadow-[0_6.521px_4.89px_rgba(29,143,255,0.20)]"></div>

          {/* Small connecting line */}
          <svg
            className="absolute left-[484px] top-[643px] w-[0px] h-[7px]"
            viewBox="0 0 2 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8V1"
              stroke="url(#paint0_linear_small)"
              strokeWidth="0.669086"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_small"
                x1="1.5"
                y1="2.10526"
                x2="1.5"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#43A2FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CMSROI;
