"use client";
import React from "react";
import { FileText, ChevronDown, ArrowRight } from "lucide-react";

export type ImportanceSectionType = {
  className?: string;
};

const ImportanceSection: React.FC<ImportanceSectionType> = ({
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center gap-14 w-full ${className}`}>
      {/* Header Section */}
      <div className="flex w-[565px] flex-col items-center gap-4 relative">
        {/* Tag */}
        <div className="flex w-[384px] py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF] relative">
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z"
              fill="#1D8FFF"
            />
          </svg>
          <span className="text-[#1D8FFF] font-urbanist text-[14px] font-medium leading-[23px] capitalize">
            Why Choose Rent SEO Brain for Content Marketing?
          </span>
        </div>

        {/* Title and Description */}
        <div className="flex h-[176px] flex-col items-center gap-4 self-stretch relative">
          <h2 className="self-stretch text-[#12579C] text-center font-urbanist text-[50px] font-bold leading-[57px]">
            Not Just Words ,We Create Impact
          </h2>
          <p className="w-[565px] text-[#6A7986] text-center font-urbanist text-[16px] font-normal leading-[23px]">
            At Rent SEO Brain, we don't believe in churning out generic blog
            posts or keyword-stuffed articles. We believe in strategic content .
          </p>
        </div>
      </div>
      {/* Main Content Section */}
      <div className="flex p-12 items-center gap-14 w-full rounded-[25px]">
        <div className="flex justify-center items-center gap-[52px]">
          {/* Left Side - Features List */}
          <div className="flex w-[480px] flex-col items-start gap-[57px]">
            {/* Feature 1 */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex py-[11px] px-5 pl-5 pr-2.5 items-center gap-2.5 w-full border-l-[5px] border-[#F78C01]">
                <div className="w-[429px] text-[#071F36] font-urbanist text-2xl font-bold leading-[23px]">
                  A Full In-House Team of Experts
                </div>
              </div>
              <div className="w-full text-[#7B7B7B] font-urbanist text-base font-normal leading-[23px]">
                From SEO-trained writers and keyword strategists to creative
                leads and editors, everything is handled by our in-house team.
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex py-[11px] px-5 items-center gap-2.5 w-full border-l-[5px] border-[#F78C01]">
                <div className="w-[470px] text-[#071F36] font-urbanist text-2xl font-bold leading-[23px]">
                  Tailored, Industry-Specific Content
                </div>
              </div>
              <div className="w-full text-[#7B7B7B] font-urbanist text-base font-normal leading-[23px]">
                We understand the nuances of your field. Whether you're in B2B,
                tech, SaaS, real estate, health, or finance.
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex py-[11px] px-5 items-center gap-2.5 w-full border-l-[5px] border-[#F78C01]">
                <div className="w-[313px] text-[#071F36] font-urbanist text-2xl font-bold leading-[23px]">
                  SEO + UX-Driven Approach
                </div>
              </div>
              <div className="w-full text-[#7B7B7B] font-urbanist text-base font-normal leading-[23px]">
                Every piece we create is designed to rank and resonate. Our
                content is optimized for Google, while being easy to read.
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex py-[11px] px-5 items-center gap-2.5 w-full border-l-[5px] border-[#F78C01]">
                <div className="w-[460px] text-[#071F36] font-urbanist text-2xl font-bold leading-[23px]">
                  Brand-First Storytelling
                </div>
              </div>
              <div className="w-full text-[#7B7B7B] font-urbanist text-base font-normal leading-[23px]">
                We stay true to your brand voice, tone, and values. Our content
                follows clear guidelines to maintain consistency across all
                platforms.
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex py-[11px] px-5 items-center gap-2.5 w-full border-l-[5px] border-[#F78C01]">
                <div className="w-[460px] text-[#071F36] font-urbanist text-2xl font-bold leading-[23px]">
                  Clarity, Calendars, and Transparency
                </div>
              </div>
              <div className="w-full text-[#7B7B7B] font-urbanist text-base font-normal leading-[23px]">
                You'll always know what's coming. We deliver organized monthly
                content calendars and provide transparent reporting .
              </div>
            </div>
          </div>

          {/* Right Side - Content Analyzer Card */}
          <div className="flex h-[723px] py-[18px] px-8 justify-center items-center gap-2.5 rounded-[11px] bg-white shadow-[0_4px_57.7px_0_rgba(29,143,255,0.37)]">
            <div className="flex w-[463px] flex-col justify-center items-start gap-[30px]">
              {/* Header */}
              <div className="flex justify-between items-center w-full">
                <div className="flex w-[174px] justify-between items-center">
                  <FileText
                    className="w-6 h-6 text-[#00B45C]"
                    strokeWidth={2}
                  />
                  <div className="text-[#12579C] font-urbanist text-lg font-medium leading-[23px]">
                    Content Analyzer
                  </div>
                </div>
                <div className="flex py-1 px-[17px] justify-center items-center gap-2.5 rounded-[45px] border border-[#00B45C] bg-[rgba(0,180,92,0.11)]">
                  <div className="text-[#00B45C] font-urbanist text-sm font-medium leading-[23px]">
                    Live Tool
                  </div>
                </div>
              </div>

              {/* Dropdown */}
              <div className="flex py-5 px-[27px] justify-between items-center w-full rounded-[11px] bg-[#F1F1F1]">
                <div className="text-[#00034A] font-urbanist text-lg font-medium leading-[23px]">
                  Professional
                </div>
                <ChevronDown className="w-6 h-6 text-[#1D1B20]" />
              </div>

              {/* Description */}
              <div className="w-[450px] text-[#7B7B7B] font-urbanist text-lg font-medium leading-8">
                Content marketing drives 3x more leads than traditional
                advertising. When done strategically, it builds trust and
                establishes your brand as an industry authority.
              </div>

              {/* Metrics Cards */}
              <div className="flex items-center gap-[21px]">
                <div className="flex w-[132px] py-3 px-[15px] flex-col justify-center items-center gap-1.5 rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                  <div className="w-full text-black text-center font-urbanist text-xl font-medium leading-8">
                    75%
                  </div>
                  <div className="w-full text-[#7B7B7B] text-center font-urbanist text-base font-normal leading-8">
                    Readability
                  </div>
                </div>
                <div className="flex w-[132px] py-3 px-[15px] flex-col justify-center items-center gap-1.5 rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                  <div className="w-full text-black text-center font-urbanist text-xl font-medium leading-8">
                    90%
                  </div>
                  <div className="w-full text-[#7B7B7B] text-center font-urbanist text-base font-normal leading-8">
                    SEO Score
                  </div>
                </div>
                <div className="flex w-[132px] py-3 px-[15px] flex-col justify-center items-center gap-1.5 rounded-[10px] bg-white shadow-[0_4px_30.5px_0_rgba(29,143,255,0.45)]">
                  <div className="w-full text-black text-center font-urbanist text-xl font-medium leading-8">
                    70%
                  </div>
                  <div className="w-full text-[#7B7B7B] text-center font-urbanist text-base font-normal leading-8">
                    Engagement
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="flex w-[430px] flex-col items-start gap-[18px]">
                <div className="w-full h-3 rounded-full">
                  <div className="w-full h-3 bg-[#A2D1FF] rounded-full"></div>
                </div>
                <div className="w-full h-3 rounded-full">
                  <div className="w-[72%] h-3 bg-[#D8FD5F] rounded-full"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-start gap-[19px] w-full">
                <div className="flex py-2.5 px-2.5 justify-center items-center gap-2.5 w-full rounded-[5px] bg-[#1D8FFF]">
                  <div className="text-white text-center font-urbanist text-base font-medium leading-8">
                    Analyze Content
                  </div>
                </div>
                <div className="flex py-2.5 px-2.5 justify-center items-center gap-2.5 w-full rounded-[5px] border border-[#D2D2D2] bg-[#E9E9E9]">
                  <div className="text-[#071F36] text-center font-urbanist text-base font-medium leading-8">
                    Get Professional Content like this
                  </div>
                </div>
              </div>

              {/* Word Count */}
              <div className="w-full text-[#7B7B7B] text-right font-urbanist text-xs font-normal leading-8">
                23 words . 1 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Buttons */}
      <div className="flex justify-center items-center gap-[22px]">
        <div className="flex w-[299px] h-[50px] px-[3px] py-0 justify-end items-center gap-2.5 rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
          <div className="text-white text-center font-urbanist text-base font-medium leading-[23px] capitalize">
            Work With Our Content Experts
          </div>
          <div className="flex p-3 items-center gap-2.5 rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
            <ArrowRight className="w-5 h-5 text-[#1D8FFF]" strokeWidth={2} />
          </div>
        </div>
        <div className="flex w-[172px] h-[50px] py-2.5 px-[19px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
          <div className="text-[#091E42] font-urbanist text-base font-medium leading-[100%] capitalize">
            Learn More
          </div>
          <ArrowRight className="w-5 h-5 text-[#091E42]" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};

export default ImportanceSection;
