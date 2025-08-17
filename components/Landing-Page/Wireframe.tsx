"use client";

import type { NextPage } from "next";
import { ArrowRight, Star } from "lucide-react";

export type WireframeType = {
  className?: string;
};

const Wireframe: NextPage<WireframeType> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start gap-[50px] w-full ${className}`}>
      {/* Header Section */}
      <div className="flex w-[552px] flex-col justify-center items-start gap-4">
        {/* Badge */}
        <div className="flex w-[305px] p-[5px_0] justify-center items-center gap-[6px] rounded-[45px] border border-[#F78C01]">
          <div className="flex w-[286px] p-[2px_8px] justify-center items-center gap-[6px] rounded-[45px] border-[0.2px] border-[#F8A02C] bg-[#FEF4E6]">
            <Star className="w-[15px] h-[15px] fill-[#F78C01] text-[#F78C01]" />
            <div className="w-[246px] text-[#F78C01] font-urbanist text-sm font-medium leading-[23px] capitalize">
              Not just design ,design that performs.
            </div>
          </div>
        </div>

        {/* Main Heading and Description */}
        <div className="flex h-[176px] flex-col justify-center items-start gap-4 w-full">
          <h1 className="text-[#12579C] font-urbanist text-[50px] font-bold leading-[57px] w-full">
            From Wireframe to Wow ,Here's How We Build It
          </h1>
          <p className="w-[565px] text-[#071F36] font-urbanist text-base font-normal leading-[23px]">
            Our landing page design process focuses on results. From strategy to final handoff, every step is crafted to meet your goals and drive conversions.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="flex flex-col justify-center items-center gap-[50px] w-full">
        <div className="w-[907px] h-[1491px] relative">
          {/* Step 1 - Discovery */}
          <div className="absolute left-[562px] top-0 flex w-[345px] p-[33px_22px] flex-col items-start gap-[-15px] rounded-[25px] bg-white shadow-[0_4px_20px_0_rgba(29,143,255,0.20)] h-[292px]">
            <div className="w-[307px] text-[rgba(201,201,201,0.32)] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              01
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] p-[6px_29px] justify-center items-center gap-[10px] rounded-[435px] border border-[#43A2FF] bg-[#E8F4FF]">
                <div className="text-[#1D8FFF] font-urbanist text-sm font-medium leading-5 capitalize">
                  STEP 1
                </div>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <div className="text-black font-urbanist text-lg font-medium leading-5 capitalize w-full">
                  Discovery
                </div>
                <div className="w-[307px] text-[#8D8D8D] font-urbanist text-sm font-medium leading-6 capitalize">
                  We begin by understanding your campaign's goals, audience, and desired actions. This helps us shape the strategy, tone, and layout that fits your brand and objectives.
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Content Planning */}
          <div className="absolute left-0 top-[292px] flex w-[345px] p-[33px_22px] flex-col items-start gap-[-15px] rounded-[25px] bg-white shadow-[0_4px_20px_0_rgba(29,143,255,0.20)] h-[316px]">
            <div className="w-[307px] text-[rgba(201,201,201,0.32)] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              02
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] p-[6px_29px] justify-center items-center gap-[10px] rounded-[435px] border border-[#43A2FF] bg-[#E8F4FF]">
                <div className="text-[#1D8FFF] font-urbanist text-sm font-medium leading-5 capitalize">
                  STEP 2
                </div>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <div className="text-black font-urbanist text-lg font-medium leading-5 capitalize w-full">
                  Content Planning
                </div>
                <div className="w-[307px] text-[#8D8D8D] font-urbanist text-sm font-medium leading-6 capitalize">
                  Before designing, we craft the right message. This includes defining your headline, value proposition, call-to-action (CTA), and structuring content that engages and guides the user.
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Wireframing */}
          <div className="absolute left-[562px] top-[591px] flex w-[345px] p-[33px_22px] flex-col items-start gap-[-15px] rounded-[25px] bg-white shadow-[0_4px_20px_0_rgba(29,143,255,0.20)] h-[292px]">
            <div className="w-[307px] text-[rgba(201,201,201,0.32)] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              03
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] p-[6px_29px] justify-center items-center gap-[10px] rounded-[435px] border border-[#43A2FF] bg-[#E8F4FF]">
                <div className="text-[#1D8FFF] font-urbanist text-sm font-medium leading-5 capitalize">
                  STEP 3
                </div>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <div className="text-black font-urbanist text-lg font-medium leading-5 capitalize w-full">
                  Wireframing
                </div>
                <div className="w-[307px] text-[#8D8D8D] font-urbanist text-sm font-medium leading-6 capitalize">
                  We create a layout blueprint that maps out the user journey, focusing on flow, hierarchy, and placement — making sure every element is intentional and conversion-friendly.
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 - UI/UX Design */}
          <div className="absolute left-0 top-[883px] flex w-[345px] p-[33px_22px] flex-col items-start gap-[-15px] rounded-[25px] bg-white shadow-[0_4px_20px_0_rgba(29,143,255,0.20)] h-[292px]">
            <div className="w-[307px] text-[rgba(201,201,201,0.32)] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              04
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] p-[6px_29px] justify-center items-center gap-[10px] rounded-[435px] border border-[#43A2FF] bg-[#E8F4FF]">
                <div className="text-[#1D8FFF] font-urbanist text-sm font-medium leading-5 capitalize">
                  STEP 4
                </div>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <div className="text-black font-urbanist text-lg font-medium leading-5 capitalize w-full">
                  UI/UX Design
                </div>
                <div className="w-[307px] text-[#8D8D8D] font-urbanist text-sm font-medium leading-6 capitalize">
                  Next, we bring your page to life with beautiful, responsive design that reflects your brand. We blend visuals and UX principles to ensure clarity, engagement, and consistency.
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 - Testing & Handoff */}
          <div className="absolute left-[561px] top-[1175px] flex w-[345px] p-[33px_22px] flex-col items-start gap-[-15px] rounded-[25px] bg-white shadow-[0_4px_20px_0_rgba(29,143,255,0.20)] h-[316px]">
            <div className="w-[307px] text-[rgba(201,201,201,0.32)] font-urbanist text-[85px] font-bold leading-[55px] capitalize">
              05
            </div>
            <div className="flex w-[307px] flex-col items-start gap-6">
              <div className="flex w-[97px] p-[6px_29px] justify-center items-center gap-[10px] rounded-[435px] border border-[#43A2FF] bg-[#E8F4FF]">
                <div className="text-[#1D8FFF] font-urbanist text-sm font-medium leading-5 capitalize">
                  STEP 5
                </div>
              </div>
              <div className="flex w-[307px] flex-col items-start gap-[14px]">
                <div className="text-black font-urbanist text-lg font-medium leading-5 capitalize w-full">
                  Testing & Handoff
                </div>
                <div className="w-[307px] text-[#8D8D8D] font-urbanist text-sm font-medium leading-6 capitalize">
                  Once designed, we review performance essentials: spacing, responsiveness, usability, and file optimization. Then we hand over clean, dev-ready assets (or collaborate with your dev team).
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines and Dots */}
          {/* Line from Step 1 to Step 2 */}
          <svg 
            className="absolute left-[164px] top-[127px]" 
            width="400" 
            height="175" 
            viewBox="0 0 400 175" 
            fill="none"
          >
            <path 
              d="M398.5 1H33.5C15.8269 1 1.5 15.3269 1.5 33V174" 
              stroke="url(#paint0_linear_1376_81917)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_1376_81917" x1="200" y1="1" x2="200" y2="174" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F98FF" stopOpacity="0.63"/>
                <stop offset="0.466346" stopColor="#D0D5DD" stopOpacity="0.32"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Connection dots */}
          <div className="absolute left-[449px] top-[121px] w-[25px] h-[26px]">
            <div className="w-3 h-3 bg-[#43A2FF] rounded-full border-[2.4px] border-white shadow-[0_4.8px_3.6px_rgba(29,143,255,0.20)]"></div>
          </div>

          <div className="absolute left-[158px] top-[177px] w-[21px] h-[22px]">
            <div className="w-[10px] h-[10px] bg-[#43A2FF] rounded-full border-[2px] border-white shadow-[0_4px_3px_rgba(29,143,255,0.20)]"></div>
          </div>

          {/* Line from Step 2 to Step 3 */}
          <svg 
            className="absolute left-[168px] top-[622px]" 
            width="396" 
            height="173" 
            viewBox="0 0 396 173" 
            fill="none"
          >
            <path 
              d="M1.5 1V132.941C1.5 147.885 13.6148 160 28.5592 160H394.5" 
              stroke="url(#paint0_linear_1376_81920)" 
              strokeWidth="1.6912" 
              strokeLinecap="round"
            />
            <path 
              d="M1.5 71.1846V108.391" 
              stroke="#2F98FF" 
              strokeWidth="1.6912" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_1376_81920" x1="198" y1="1" x2="198" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1D8FFF" stopOpacity="0"/>
                <stop offset="0.480769" stopOpacity="0.25"/>
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.25"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-[43px] top-[775px] w-[19px] h-[19px]">
            <div className="w-[9px] h-[9px] bg-[#43A2FF] rounded-full border-[1.86px] border-white shadow-[0_3.721px_2.79px_rgba(29,143,255,0.20)]"></div>
          </div>

          {/* Line from Step 3 to Step 4 */}
          <svg 
            className="absolute left-[347px] top-[885px]" 
            width="397" 
            height="146" 
            viewBox="0 0 397 146" 
            fill="none"
          >
            <path 
              d="M395.5 1V113C395.5 130.673 381.173 145 363.5 145H1.5" 
              stroke="url(#paint0_linear_1376_81930)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_1376_81930" x1="198.5" y1="1" x2="198.5" y2="145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F98FF" stopOpacity="0.63"/>
                <stop offset="0.466346" stopColor="#D0D5DD" stopOpacity="0.32"/>
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.11"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-[654px] top-[1024px] w-[20px] h-[21px]">
            <div className="w-[9px] h-[9px] bg-[#43A2FF] rounded-full border-[1.86px] border-white shadow-[0_3.721px_2.79px_rgba(29,143,255,0.20)]"></div>
          </div>

          {/* Line from Step 4 to Step 5 */}
          <svg 
            className="absolute left-[148px] top-[1166px]" 
            width="412" 
            height="212" 
            viewBox="0 0 412 212" 
            fill="none"
          >
            <path 
              d="M1.5 1V183.941C1.5 198.885 13.6148 211 28.5592 211H410.5" 
              stroke="url(#paint0_linear_1376_81925)" 
              strokeWidth="1.6912" 
              strokeLinecap="round"
            />
            <path 
              d="M1.5 71.1846V108.391" 
              stroke="#2F98FF" 
              strokeWidth="1.6912" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_1376_81925" x1="206" y1="1" x2="206" y2="211" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1D8FFF" stopOpacity="0"/>
                <stop offset="0.480769" stopOpacity="0.25"/>
                <stop offset="1" stopColor="#2F98FF" stopOpacity="0.25"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-[290px] top-[1371px] w-[20px] h-[21px]">
            <div className="w-[9px] h-[9px] bg-[#43A2FF] rounded-full border-[1.86px] border-white shadow-[0_3.721px_2.79px_rgba(29,143,255,0.20)]"></div>
          </div>

          <div className="absolute left-[450px] top-[1373px] w-[13px] h-[13px]">
            <div className="w-[6px] h-[6px] bg-[#43A2FF] rounded-full border-[1.16px] border-white shadow-[0_2.321px_1.74px_rgba(29,143,255,0.20)]"></div>
          </div>

          {/* Vertical connector line */}
          <svg 
            className="absolute left-[484px] top-[643px]" 
            width="1" 
            height="9" 
            viewBox="0 0 1 9" 
            fill="none"
          >
            <path 
              d="M0.5 8V1" 
              stroke="url(#paint0_linear_1376_81912)" 
              strokeWidth="0.669086" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_1376_81912" x1="1" y1="2.10526" x2="1" y2="8" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#43A2FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-6">
          {/* Primary Button */}
          <button className="flex w-[248px] h-[50px] p-[0_3px] justify-end items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
            <div className="text-white text-center font-urbanist text-base font-medium leading-[23px] capitalize">
              Build My Landing Page
            </div>
            <div className="flex p-3 items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
              <ArrowRight className="w-5 h-5 text-[#1D8FFF]" strokeWidth="2" />
            </div>
          </button>

          {/* Secondary Button */}
          <button className="flex w-[220px] h-[50px] p-[10px_19px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
            <div className="text-[#091E42] font-urbanist text-base font-medium leading-[100%] capitalize">
              Book an appointment
            </div>
            <ArrowRight className="w-5 h-5 text-[#091E42]" strokeWidth="1.75" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
