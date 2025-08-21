"use client";
import React from "react";

export default function SEOMethod() {
  return (
    <div className="relative w-full h-[2076px] bg-[#0C0C0F] overflow-hidden">
      {/* Background blur effect */}
      <div 
        className="absolute w-[464px] h-[403px] rounded-full blur-[365.84px] opacity-63"
        style={{
          background: 'rgba(47, 152, 255, 0.63)',
          left: '1144px',
          top: '277px'
        }}
      />

      {/* Header Section */}
      <div className="absolute left-[156px] top-[72px] w-[552px] h-[225px] flex flex-col justify-center items-start gap-4">
        {/* Badge */}
        <div className="flex w-[274px] py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C]">
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
              fill="#E8F4FF"
            />
          </svg>
          <div className="text-[#E8F4FF] font-urbanist text-[14px] font-medium leading-[23px]">
            Smarter steps for stronger rankings.
          </div>
        </div>

        {/* Main heading and description */}
        <div className="flex h-[176px] flex-col justify-center items-start gap-4 w-full">
          <h1 className="w-[593px] text-[#E8F4FF] font-urbanist text-[50px] font-bold leading-[57px]">
            The SEO Method That Sets Us Apart
          </h1>
          <p className="w-full text-[#EBEDEF] font-urbanist text-[16px] font-normal leading-[23px]">
            Our approach is transparent, strategic, and results-driven — built to help you climb rankings and stay there.
          </p>
        </div>
      </div>

      {/* Step 1 - Initial Consultation */}
      <div className="absolute left-[777px] top-[361px] w-[507px] h-[235px] flex flex-col items-center gap-[33px]">
        <div className="h-[157px] w-full relative">
          <div className="absolute left-[31px] top-[40px] w-[476px] h-[117px] flex flex-col items-start gap-[25px]">
            <div className="flex flex-col items-start gap-[13px] w-full">
              <h3 className="w-full text-white font-urbanist text-[24px] font-semibold leading-[23px]">
                Initial Consultation
              </h3>
              <p className="w-full text-white font-urbanist text-[18px] font-normal leading-[23px]">
                Understand your goals, challenges, and target audience
              </p>
            </div>
            <div className="flex items-center gap-[13px] w-full">
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Market Analysis
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Vision Allignment
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Goal Setting 
                </div>
              </div>
            </div>
          </div>
          {/* Step number */}
          <div className="absolute left-0 top-0 w-[74px] h-[23px] text-[200px] font-normal leading-[23px] font-urbanist" style={{ color: 'rgba(67, 162, 255, 0.15)' }}>
            1
          </div>
          {/* Connecting line */}
          <svg 
            className="absolute left-[-565px] top-[43px] w-[569px] h-[143px]"
            width="571" 
            height="146" 
            viewBox="0 0 571 146" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M569.5 1.5H1V144.5" 
              stroke="url(#paint0_linear_step1)" 
              strokeOpacity="0.24" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_step1" x1="285.25" y1="1.5" x2="285.25" y2="144.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F98FF"/>
                <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Progress section */}
        <div className="flex w-[447px] flex-col items-start gap-[13px]">
          <div className="w-full text-[#8D8D8D] font-urbanist text-[16px] font-medium leading-[100%]">
            Journey Process
          </div>
          <div className="flex items-center gap-[32px] w-full">
            <svg 
              className="flex w-[383px] h-[0.473px] flex-col justify-center items-start"
              width="397" 
              height="16" 
              viewBox="0 0 397 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 7.76367H390" 
                stroke="url(#paint0_bg_step1)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <path 
                d="M7.02672 0.763723C3.16075 0.748967 0.0148065 3.87099 5.09024e-05 7.73695C-0.0147047 11.6029 3.10732 14.7489 6.97328 14.7636L7.02672 0.763723ZM130.973 15.2369C134.839 15.2517 137.985 12.1296 138 8.26367C138.015 4.39771 134.893 1.25176 131.027 1.23701L130.973 15.2369ZM7 7.76367L6.97328 14.7636L130.973 15.2369L131 8.23695L131.027 1.23701L7.02672 0.763723L7 7.76367Z" 
                fill="url(#paint1_diamond_step1)"
              />
              <defs>
                <linearGradient id="paint0_bg_step1" x1="198.5" y1="7.92157" x2="198.5" y2="8.76367" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF" stopOpacity="0.17"/>
                </linearGradient>
                <linearGradient id="paint1_diamond_step1" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                  <stop offset="0.485577" stopColor="white"/>
                  <stop offset="1" stopColor="#7ABDFF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-[#C9C9C9] font-urbanist text-[16px] font-medium leading-[100%]">
              20%
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 - Comprehensive SEO Audit */}
      <div className="absolute left-[156px] top-[726px] w-[507px] h-[235px] flex flex-col items-center gap-[33px]">
        <div className="h-[157px] w-full relative">
          <div className="absolute left-[31px] top-[40px] w-[487px] h-[117px] flex flex-col items-start gap-[25px]">
            <div className="flex flex-col items-start gap-[13px] w-full">
              <h3 className="w-full text-white font-urbanist text-[24px] font-semibold leading-[23px]">
                Comprehensive SEO Audit
              </h3>
              <p className="w-full text-[#C9C9C9] font-urbanist text-[18px] font-normal leading-[23px]">
                Analyze your website's SEO health and gaps
              </p>
            </div>
            <div className="flex w-[487px] items-center gap-[13px]">
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Technical Audit
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Content Analysis
                </div>
              </div>
              <div className="flex w-[161px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Competitor Intelligence
                </div>
              </div>
            </div>
          </div>
          {/* Step number */}
          <div className="absolute left-0 top-0 w-[118px] h-[23px] text-[200px] font-normal leading-[23px] font-urbanist" style={{ color: 'rgba(67, 162, 255, 0.15)' }}>
            2
          </div>
        </div>
        {/* Progress section */}
        <div className="flex w-[447px] flex-col items-start gap-[13px]">
          <div className="w-full text-[#8D8D8D] font-urbanist text-[16px] font-medium leading-[100%]">
            Journey Process
          </div>
          <div className="flex items-center gap-[32px] w-full">
            <svg 
              className="flex w-[383px] h-[0.473px] flex-col justify-center items-start"
              width="397" 
              height="16" 
              viewBox="0 0 397 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 7.76367H390" 
                stroke="url(#paint0_bg_step2)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <path 
                d="M7 7.76367L163.999 8.3629" 
                stroke="url(#paint1_linear_step2)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="paint0_bg_step2" x1="198.5" y1="7.92157" x2="198.5" y2="8.76367" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF" stopOpacity="0.17"/>
                </linearGradient>
                <linearGradient id="paint1_linear_step2" x1="85.4988" y1="8.22118" x2="85.4956" y2="9.06328" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-[#C9C9C9] font-urbanist text-[16px] font-medium leading-[100%]">
              40%
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line for step 2 */}
      <svg 
        className="absolute left-[215px] top-[916px] w-[533px] h-[157px]"
        width="536" 
        height="159" 
        viewBox="0 0 536 159" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1.5 1.5V79.75V158H534.5" 
          stroke="url(#paint0_linear_connecting2)" 
          strokeOpacity="0.24" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_connecting2" x1="268" y1="1.5" x2="268" y2="158" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F98FF"/>
            <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Step 3 - Bespoke Action Plan */}
      <div className="absolute left-[777px] top-[1019px] w-[507px] h-[235px] flex flex-col items-center gap-[33px]">
        <div className="h-[157px] w-full relative">
          <div className="absolute left-[31px] top-[40px] w-[476px] h-[117px] flex flex-col items-start gap-[25px]">
            <div className="flex flex-col items-start gap-[13px] w-full">
              <h3 className="w-full text-white font-urbanist text-[24px] font-semibold leading-[23px]">
                Bespoke Action Plan
              </h3>
              <p className="w-full text-[#C9C9C9] font-urbanist text-[18px] font-normal leading-[23px]">
                Create a tailored roadmap with clear priorities
              </p>
            </div>
            <div className="flex items-center gap-[13px] w-full">
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Custom Strategy
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Priority Matrix
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Timeline Planning
                </div>
              </div>
            </div>
          </div>
          {/* Step number */}
          <div className="absolute left-0 top-0 w-[105px] h-[23px] text-[200px] font-normal leading-[23px] font-urbanist" style={{ color: 'rgba(67, 162, 255, 0.15)' }}>
            3
          </div>
        </div>
        {/* Progress section */}
        <div className="flex w-[447px] flex-col items-start gap-[13px]">
          <div className="w-full text-[#8D8D8D] font-urbanist text-[16px] font-medium leading-[100%]">
            Journey Process
          </div>
          <div className="flex items-center gap-[32px] w-full">
            <svg 
              className="flex w-[383px] h-[0.473px] flex-col justify-center items-start"
              width="397" 
              height="16" 
              viewBox="0 0 397 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 7.76367H390" 
                stroke="url(#paint0_bg_step3)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <path 
                d="M7 7.76367L266.998 8.75603" 
                stroke="url(#paint1_linear_step3)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="paint0_bg_step3" x1="198.5" y1="7.92157" x2="198.5" y2="8.76367" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF" stopOpacity="0.17"/>
                </linearGradient>
                <linearGradient id="paint1_linear_step3" x1="136.998" y1="8.41775" x2="136.995" y2="9.25984" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-[#C9C9C9] font-urbanist text-[16px] font-medium leading-[100%]">
              60%
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line for step 3 */}
      <svg 
        className="absolute left-[291px] top-[1222px] w-[560px] h-[85px]"
        width="562" 
        height="87" 
        viewBox="0 0 562 87" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M561 1.5V86H1" 
          stroke="url(#paint0_linear_connecting3)" 
          strokeOpacity="0.24" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_connecting3" x1="281" y1="1.5" x2="281" y2="86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F98FF"/>
            <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Step 4 - Monthly Reporting */}
      <div className="absolute left-[156px] top-[1372px] w-[507px] h-[235px] flex flex-col items-center gap-[33px]">
        <div className="h-[157px] w-full relative">
          <div className="absolute left-[31px] top-[40px] w-[476px] h-[117px] flex flex-col items-start gap-[25px]">
            <div className="flex flex-col items-start gap-[13px] w-full">
              <h3 className="w-full text-white font-urbanist text-[24px] font-semibold leading-[23px]">
                Monthly Reporting
              </h3>
              <p className="w-full text-[#C9C9C9] font-urbanist text-[18px] font-normal leading-[23px]">
                Track your rankings, traffic, and conversions
              </p>
            </div>
            <div className="flex items-center gap-[13px] w-full">
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Performance Metrics
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Growth Insights
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Next Steps
                </div>
              </div>
            </div>
          </div>
          {/* Step number */}
          <div className="absolute left-0 top-0 w-[120px] h-[23px] text-[200px] font-normal leading-[23px] font-urbanist" style={{ color: 'rgba(67, 162, 255, 0.15)' }}>
            4
          </div>
        </div>
        {/* Progress section */}
        <div className="flex w-[447px] flex-col items-start gap-[13px]">
          <div className="w-full text-[#8D8D8D] font-urbanist text-[16px] font-medium leading-[100%]">
            Journey Process
          </div>
          <div className="flex items-center gap-[32px] w-full">
            <svg 
              className="flex w-[383px] h-[0.473px] flex-col justify-center items-start"
              width="397" 
              height="17" 
              viewBox="0 0 397 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 7.76367H390" 
                stroke="url(#paint0_bg_step4)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <path 
                d="M7 7.76367L335.998 9.01939" 
                stroke="url(#paint1_linear_step4)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="paint0_bg_step4" x1="198.5" y1="7.92157" x2="198.5" y2="8.76367" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF" stopOpacity="0.17"/>
                </linearGradient>
                <linearGradient id="paint1_linear_step4" x1="171.498" y1="8.54942" x2="171.495" y2="9.39152" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-[#C9C9C9] font-urbanist text-[16px] font-medium leading-[100%]">
              80%
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line for step 4 */}
      <svg 
        className="absolute left-[228px] top-[1558px] w-[490px] h-[243px]"
        width="492" 
        height="246" 
        viewBox="0 0 492 246" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1 1.5V244.5H490.5" 
          stroke="url(#paint0_linear_connecting4)" 
          strokeOpacity="0.24" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_connecting4" x1="245.75" y1="1.5" x2="245.75" y2="244.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F98FF"/>
            <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Step 5 - Adjust Strategy */}
      <div className="absolute left-[777px] top-[1749px] w-[507px] h-[235px] flex flex-col items-center gap-[33px]">
        <div className="h-[157px] w-full relative">
          <div className="absolute left-[31px] top-[40px] w-[476px] h-[117px] flex flex-col items-start gap-[25px]">
            <div className="flex flex-col items-start gap-[13px] w-full">
              <h3 className="w-full text-white font-urbanist text-[24px] font-semibold leading-[23px]">
                Adjust Strategy
              </h3>
              <p className="w-full text-[#C9C9C9] font-urbanist text-[18px] font-normal leading-[23px]">
                Refine based on performance and algorithm updates
              </p>
            </div>
            <div className="flex items-center gap-[13px] w-full">
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Strategy Refinement
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Opportunity Capture
                </div>
              </div>
              <div className="flex w-[150px] py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)]">
                <div className="text-white text-center font-urbanist text-[14px] font-normal leading-[23px]">
                  Future Planning
                </div>
              </div>
            </div>
          </div>
          {/* Step number */}
          <div className="absolute left-0 top-0 w-[118px] h-[23px] text-[200px] font-normal leading-[23px] font-urbanist" style={{ color: 'rgba(67, 162, 255, 0.15)' }}>
            5
          </div>
        </div>
        {/* Progress section */}
        <div className="flex w-[447px] flex-col items-start gap-[13px]">
          <div className="w-full text-[#8D8D8D] font-urbanist text-[16px] font-medium leading-[100%]">
            Journey Process
          </div>
          <div className="flex items-center gap-[32px] w-full">
            <svg 
              className="flex w-[383px] h-[0.473px] flex-col justify-center items-start"
              width="397" 
              height="17" 
              viewBox="0 0 397 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 7.76367H390" 
                stroke="url(#paint0_bg_step5)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <path 
                d="M7 7.76367L389.997 9.22549" 
                stroke="url(#paint1_linear_step5)" 
                strokeWidth="14" 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="paint0_bg_step5" x1="198.5" y1="7.92157" x2="198.5" y2="8.76367" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF" stopOpacity="0.17"/>
                </linearGradient>
                <linearGradient id="paint1_linear_step5" x1="198.498" y1="8.65248" x2="198.495" y2="9.49458" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#43A2FF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-[#C9C9C9] font-urbanist text-[16px] font-medium leading-[100%]">
              100%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
