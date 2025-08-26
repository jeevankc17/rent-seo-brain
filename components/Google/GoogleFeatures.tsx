"use client";

import React from "react";

const GoogleFeatures = () => {
  return (
    <div className="flex w-full max-w-[1129px] mx-auto flex-col items-center gap-8 md:gap-12 lg:gap-[83px] relative py-8 md:py-12 lg:py-[86px] min-h-auto lg:min-h-[1154px] bg-neutral-900 px-4 md:px-8 lg:px-0">
      {/* Header Section */}
      <div className="flex w-full max-w-[601px] flex-col justify-center items-center gap-4 relative">
        {/* Badge */}
        <div className="flex w-full max-w-[203px] px-[10px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C] relative">
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-[15px] h-[15px] flex-shrink-0"
          >
            <path 
              d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z" 
              fill="#E8F4FF"
            />
          </svg>
          <span className="text-[#E8F4FF] font-urbanist text-xs lg:text-[14px] font-medium leading-[20px] lg:leading-[23px]">
            Implementation Process
          </span>
        </div>

        {/* Main Title and Subtitle */}
        <div className="flex h-[176px] flex-col justify-center items-center gap-4 self-stretch relative">
          <h2 className="w-full max-w-[593px] text-[#E8F4FF] text-center font-urbanist text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]">
            Our Proven Path to High-Performing Ads
          </h2>
          <p className="self-stretch text-[#EBEDEF] text-center font-urbanist text-sm lg:text-[16px] font-normal leading-[20px] lg:leading-[23px]">
            We blend strategy, creativity, and data to build high-performing ad campaigns from the ground up.
          </p>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="h-auto lg:h-[846px] self-stretch relative">
        {/* Connecting Lines */}
        <svg 
          className="hidden lg:block w-[850px] h-[161px] absolute left-[139px] top-[483px]" 
          width="852" 
          height="163" 
          viewBox="0 0 852 163" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M851 1H700.75H550.5L346.5 162H1" 
            stroke="url(#paint0_linear_1376_81001)" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="paint0_linear_1376_81001" x1="868" y1="69.0926" x2="31.5" y2="69.0926" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A1519" stopOpacity="0.7"/>
              <stop offset="0.495192" stopColor="white" stopOpacity="0.62"/>
              <stop offset="1" stopColor="#0A1519" stopOpacity="0.36"/>
            </linearGradient>
          </defs>
        </svg>

        <svg 
          className="hidden lg:block w-[850px] h-[161px] absolute left-[136px] top-[181px]" 
          width="852" 
          height="163" 
          viewBox="0 0 852 163" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M851 1H550.5L346.5 162H1" 
            stroke="url(#paint0_linear_1376_81002)" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="paint0_linear_1376_81002" x1="868" y1="69.0926" x2="31.5" y2="69.0926" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A1519" stopOpacity="0.7"/>
              <stop offset="0.495192" stopColor="white" stopOpacity="0.62"/>
              <stop offset="1" stopColor="#0A1519" stopOpacity="0.36"/>
            </linearGradient>
          </defs>
        </svg>

        <svg 
          className="hidden lg:block w-[550px] h-[161px] absolute left-[136px] top-[21px]" 
          width="551" 
          height="163" 
          viewBox="0 0 551 163" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M550.5 162L346.5 1H1" 
            stroke="url(#paint0_linear_1376_81003)" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="paint0_linear_1376_81003" x1="868" y1="93.9074" x2="31.5" y2="93.9074" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A1519" stopOpacity="0.7"/>
              <stop offset="0.495192" stopColor="white" stopOpacity="0.62"/>
              <stop offset="1" stopColor="#0A1519" stopOpacity="0.36"/>
            </linearGradient>
          </defs>
        </svg>

        <svg 
          className="hidden lg:block w-[850px] h-[161px] absolute left-[136px] top-[322px]" 
          width="852" 
          height="163" 
          viewBox="0 0 852 163" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M851 162H550.5L346.5 1H1" 
            stroke="url(#paint0_linear_1376_81004)" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="paint0_linear_1376_81004" x1="868" y1="93.9074" x2="31.5" y2="93.9074" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A1519" stopOpacity="0.7"/>
              <stop offset="0.495192" stopColor="white" stopOpacity="0.62"/>
              <stop offset="1" stopColor="#0A1519" stopOpacity="0.36"/>
            </linearGradient>
          </defs>
        </svg>

        <svg 
          className="hidden lg:block w-[850px] h-[161px] absolute left-[139px] top-[624px]" 
          width="852" 
          height="163" 
          viewBox="0 0 852 163" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M851 162H550.5L346.5 1H1" 
            stroke="url(#paint0_linear_1376_81005)" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="paint0_linear_1376_81005" x1="868" y1="93.9074" x2="31.5" y2="93.9074" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A1519" stopOpacity="0.7"/>
              <stop offset="0.495192" stopColor="white" stopOpacity="0.62"/>
              <stop offset="1" stopColor="#0A1519" stopOpacity="0.36"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Background Numbers */}
        <div className="hidden lg:block absolute left-[107px] top-[17px] w-[74px] h-[23px] text-[rgba(67,162,255,0.15)] font-urbanist text-[200px] font-black leading-[23px]">1</div>
        <div className="hidden lg:block absolute left-[903px] top-[174px] w-[118px] h-[88px] text-[rgba(67,162,255,0.15)] font-urbanist text-[200px] font-black leading-[23px]">2</div>
        <div className="hidden lg:block absolute left-[109px] top-[335px] w-[105px] h-[23px] text-[rgba(67,162,255,0.15)] font-urbanist text-[200px] font-black leading-[23px]">3</div>
        <div className="hidden lg:block absolute left-[912px] top-[488px] w-[120px] h-[23px] text-[rgba(67,162,255,0.15)] font-urbanist text-[200px] font-black leading-[23px]">4</div>
        <div className="hidden lg:block absolute left-[122px] top-[657px] w-[118px] h-[23px] text-[rgba(67,162,255,0.15)] font-urbanist text-[200px] font-black leading-[23px]">5</div>
        <div className="hidden lg:block absolute left-[938px] top-[763px] w-[111px] h-[23px] text-[rgba(67,162,255,0.15)] font-urbanist text-[200px] font-black leading-[23px]">6</div>

        {/* Step 1 - Discovery */}
        <div className="flex w-full max-w-[205px] flex-col items-center gap-4 lg:gap-[18px] relative lg:absolute lg:left-0 lg:top-0 h-auto lg:h-[128px] mb-6 lg:mb-0">
          <div className="flex pr-[19px] justify-center items-center gap-[12px] rounded-[35px] border border-[#1D8FFF] bg-[#22384C]">
            <div className="flex w-[41px] h-[41px] p-[11.31px_24.034px] flex-col justify-center items-center gap-[14.138px] rounded-[610.759px] bg-white">
              <span className="w-[9.897px] text-[#1D8FFF] text-center font-urbanist text-[20px] font-normal leading-[32.517px]">1</span>
            </div>
            <span className="text-white font-urbanist text-lg lg:text-[20px] font-normal leading-[20px] lg:leading-[23px]">Discovery</span>
          </div>
          <p className="self-stretch text-[#C1C7CD] text-center font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px]">
            Understand your goals, audience, and competitors to plan the right strategy.
          </p>
        </div>

        {/* Step 2 - Keyword Research */}
        <div className="flex w-full max-w-[234px] flex-col items-center gap-4 lg:gap-[18px] relative lg:absolute lg:left-[894px] lg:top-[169px] h-auto lg:h-[105px] mb-6 lg:mb-0">
          <div className="flex pr-[19px] justify-center items-center gap-[12px] self-stretch rounded-[35px] border border-[#1D8FFF] bg-[#22384C]">
            <div className="flex w-[41px] h-[41px] p-[11.31px_24.034px] flex-col justify-center items-center gap-[14.138px] rounded-[610.759px] bg-[#1D8FFF]">
              <span className="w-[9.897px] text-white text-center font-urbanist text-[20px] font-normal leading-[32.517px]">2</span>
            </div>
            <span className="text-white font-urbanist text-lg lg:text-[20px] font-normal leading-[20px] lg:leading-[23px]">Keyword Research</span>
          </div>
          <p className="self-stretch text-[#C1C7CD] text-center font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px]">
            Find high-intent keywords that drive quality traffic and conversions.
          </p>
        </div>

        {/* Step 3 - Campaign Setup */}
        <div className="flex w-full max-w-[222px] flex-col justify-center items-center gap-4 lg:gap-[18px] relative lg:absolute lg:left-0 lg:top-[322px] h-auto lg:h-[128px] mb-6 lg:mb-0">
          <div className="flex pr-[19px] justify-center items-center gap-[12px] self-stretch rounded-[35px] border border-[#1D8FFF] bg-[#22384C]">
            <div className="flex w-[41px] h-[41px] p-[11.31px_24.034px] flex-col justify-center items-center gap-[14.138px] rounded-[610.759px] bg-white">
              <span className="w-[9.897px] text-[#1D8FFF] text-center font-urbanist text-[20px] font-normal leading-[32.517px]">3</span>
            </div>
            <span className="text-white font-urbanist text-lg lg:text-[20px] font-normal leading-[20px] lg:leading-[23px]">Campaign Setup</span>
          </div>
          <p className="self-stretch text-[#C1C7CD] text-center font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px]">
            Create ad groups, write copy, and design creatives for peak performance.
          </p>
        </div>

        {/* Step 4 - Launch & Monitor */}
        <div className="flex w-full max-w-[226px] flex-col items-center lg:items-end gap-4 lg:gap-[18px] relative lg:absolute lg:left-[903px] lg:top-[472px] h-auto lg:h-[105px] mb-6 lg:mb-0">
          <div className="flex pr-[19px] justify-center items-center gap-[12px] self-stretch rounded-[35px] border border-[#4F6070] bg-[#22384C]">
            <div className="flex w-[41px] h-[41px] p-[11.31px_24.034px] flex-col justify-center items-center gap-[14.138px] rounded-[610.759px] bg-white">
              <span className="w-[9.897px] text-[#1D8FFF] text-center font-urbanist text-[20px] font-normal leading-[32.517px]">4</span>
            </div>
            <span className="text-white font-urbanist text-lg lg:text-[20px] font-normal leading-[20px] lg:leading-[23px]">Launch & Monitor</span>
          </div>
          <p className="self-stretch text-[#C1C7CD] text-center font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px]">
            Go live and monitor KPIs in real-time for smooth execution.
          </p>
        </div>

        {/* Step 5 - Optimization */}
        <div className="flex w-full max-w-[192px] flex-col items-center gap-4 lg:gap-[18px] relative lg:absolute lg:left-0 lg:top-[626px] h-auto lg:h-[128px] mb-6 lg:mb-0">
          <div className="flex pr-[19px] justify-center items-center gap-[12px] rounded-[35px] border border-[#1D8FFF] bg-[#22384C]">
            <div className="flex w-[41px] h-[41px] p-[11.31px_24.034px] flex-col justify-center items-center gap-[14.138px] rounded-[610.759px] bg-[#1D8FFF]">
              <span className="w-[9.897px] text-white text-center font-urbanist text-[20px] font-normal leading-[32.517px]">5</span>
            </div>
            <span className="text-white font-urbanist text-lg lg:text-[20px] font-normal leading-[20px] lg:leading-[23px]">Optimization</span>
          </div>
          <p className="self-stretch text-[#C1C7CD] text-center font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px]">
            Continuously improve ads with A/B testing and bid adjustments.
          </p>
        </div>

        {/* Step 6 - Reporting */}
        <div className="flex w-full max-w-[183px] flex-col items-center gap-4 lg:gap-[18px] relative lg:absolute lg:left-[946px] lg:top-[741px] h-auto lg:h-[105px] mb-0">
          <div className="flex pr-[19px] justify-center items-center gap-[12px] rounded-[35px] border border-[#1D8FFF] bg-[#22384C]">
            <div className="flex w-[41px] h-[41px] p-[11.31px_24.034px] flex-col justify-center items-center gap-[14.138px] rounded-[610.759px] bg-[#1D8FFF]">
              <span className="w-[9.897px] text-white text-center font-urbanist text-[20px] font-normal leading-[32.517px]">6</span>
            </div>
            <span className="text-white font-urbanist text-lg lg:text-[20px] font-normal leading-[20px] lg:leading-[23px]">Reporting</span>
          </div>
          <p className="self-stretch text-[#C1C7CD] text-center font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px]">
            Get clear, actionable reports to track growth and ROI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleFeatures;
