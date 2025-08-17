"use client";

import React from "react";

export interface ServeBusinessProps {
  className?: string;
}

const ServeBusiness: React.FC<ServeBusinessProps> = ({ className = "" }) => {
  return (
    <div className={`flex w-[1128px] flex-col justify-center items-center gap-[50px] relative ${className}`}>
      {/* Header Section */}
      <div className="flex w-[565px] flex-col items-center gap-4 relative">
        {/* Badge */}
        <div className="flex w-[212px] p-[5px_0] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] relative">
          <div className="flex w-[197px] p-[2px_8px] items-center gap-[6px] flex-shrink-0 rounded-[45px] bg-[#1D8FFF] relative">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[15px] h-[15px] flex-shrink-0 relative">
              <path d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" fill="white"/>
            </svg>
            <span className="text-white font-urbanist text-[14px] font-medium leading-[23px] capitalize">
              we've got the strategy.
            </span>
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex h-[176px] flex-col items-center gap-4 self-stretch relative">
          <h2 className="self-stretch text-[#12579C] text-center font-urbanist text-[50px] font-bold leading-[57px]">
            We Serve Businesses Across Industries
          </h2>
          <p className="w-[565px] text-[#6A7986] text-center font-urbanist text-[16px] font-medium leading-[23px]">
            From local startups to global brands — our Google Ads strategies work across all sectors.
          </p>
        </div>
      </div>

      {/* Main Content Cards */}
      <div className="flex flex-col items-start gap-[78px] self-stretch relative">
        <div className="flex justify-center items-center gap-5 self-stretch relative">
          {/* Lead Based Card */}
          <div className="flex p-[32px_29px] justify-center items-center gap-[10px] rounded-[14px] bg-white shadow-[0_4px_8.6px_8px_rgba(0,132,255,0.09)] relative">
            <div className="flex w-[494px] flex-col justify-center items-center gap-[45px] relative">
              {/* Industry Cards Visualization */}
              <div className="w-[494px] h-[331px] relative overflow-hidden">
                {/* Card Background Mask */}
                <div className="w-[494px] h-[331px] absolute left-0 top-0 rounded-[12px]" />
                <div className="w-[494px] h-[331px] absolute left-0 top-0 rounded-[12px] bg-black" />

                {/* Main Card Container */}
                <div className="w-[494px] h-[331px] absolute left-0 top-0">
                  <div className="w-[494px] h-[331px] absolute left-0 top-0" />
                  <div className="w-[494px] h-[331px] absolute left-0 top-0 rounded-[20px] border border-[#F8F9FA] bg-white shadow-[0_4px_20px_0_rgba(238,238,238,0.50)]" />
                </div>

                {/* Background Image Area */}
                <div className="w-[573px] h-[409px] absolute left-[-27px] top-[-26px]" />

                {/* Inner Card Container with Floating Cards */}
                <div className="w-[384px] h-[244px] absolute left-[53px] top-[39px] rounded-[13px] bg-white shadow-[0_4px_8.9px_12px_rgba(0,132,255,0.16)]">

                  {/* Home & Local Services Card - Active/Highlighted */}
                  <div className="absolute left-[192px] top-[80px] w-[265px] h-[83px] inline-flex p-[9.075px_18.151px] items-center gap-[9.075px] rounded-[25.411px] bg-[#F8A02C] shadow-[0_7.26px_22.507px_0_rgba(0,132,255,0.35)]">
                    <div className="flex w-[45.377px] h-[45.377px] p-[22.688px] flex-col justify-center items-center gap-[22.688px] rounded-[1234.247px] bg-[#AD6201] relative">
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32.121px] h-[32.121px] flex-shrink-0">
                        <path d="M6.125 15.2373C9.31965 15.2373 12.3835 16.5064 14.6424 18.7653C16.9014 21.0243 18.1705 24.0881 18.1705 27.2828" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.125 5.86816C11.8044 5.86816 17.2512 8.12429 21.2671 12.1402C25.283 16.1562 27.5391 21.6029 27.5391 27.2823" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.46338 27.2822C8.20255 27.2822 8.80177 26.683 8.80177 25.9439C8.80177 25.2047 8.20255 24.6055 7.46338 24.6055C6.72421 24.6055 6.125 25.2047 6.125 25.9439C6.125 26.683 6.72421 27.2822 7.46338 27.2822Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex w-[174.247px] flex-col items-start">
                      <div className="text-[#FAFBFB] font-urbanist text-[16.553px] font-semibold leading-[27.226px]">
                        Home & Local Services
                      </div>
                      <div className="w-[183.322px] text-[#E9E9E9] font-urbanist text-[14.521px] font-medium leading-[18.151px]">
                        Get more calls and service requests
                      </div>
                    </div>
                  </div>

                  {/* Education Card */}
                  <div className="absolute left-[-103px] top-[34px] w-[265px] h-[83px] inline-flex p-[9.075px_18.151px] items-center gap-[9.075px] rounded-[25.411px] bg-white shadow-[0_7.26px_22.507px_0_rgba(0,132,255,0.35)]">
                    <div className="flex w-[45.377px] h-[45.377px] p-[22.688px] flex-col justify-center items-center gap-[22.688px] rounded-[1234.247px] bg-[#673AB7] relative">
                      {/* Education Icon - Book or Graduation Cap */}
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32.121px] h-[32.121px] flex-shrink-0">
                        <path d="M16.5 5.5L28.875 11L16.5 16.5L4.125 11L16.5 5.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.25 14.4375V20.625C8.25 21.7548 9.1952 22.6473 10.3125 22.6473H22.6875C23.8048 22.6473 24.75 21.7548 24.75 20.625V14.4375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex w-[174.247px] flex-col items-start">
                      <div className="text-[#071F36] font-urbanist text-[16.553px] font-semibold leading-[27.226px]">
                        Education
                      </div>
                      <div className="w-[183.322px] text-[#7B7B7B] font-urbanist text-[14.521px] font-medium leading-[18.151px]">
                        Boost enrollment through targeted campaigns
                      </div>
                    </div>
                  </div>

                  {/* Healthcare Card */}
                  <div className="absolute left-[202px] top-[6px] w-[265px] h-[83px] inline-flex p-[9.075px_18.151px] items-center gap-[9.075px] rounded-[25.411px] border border-black bg-white shadow-[0_4px_0_0_#2A90E5]">
                    <div className="flex w-[45.377px] h-[45.377px] p-[22.688px] flex-col justify-center items-center gap-[22.688px] rounded-[1234.247px] bg-[#1D9B5E] relative">
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32.121px] h-[32.121px] flex-shrink-0">
                        <path d="M30.2208 16.5757H24.8673L20.8521 28.6212L12.8218 4.53027L8.80666 16.5757H3.45312" stroke="white" strokeWidth="2.67677" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex w-[174.247px] flex-col items-start">
                      <div className="text-[#071F36] font-urbanist text-[16.553px] font-semibold leading-[27.226px]">
                        Healthcare
                      </div>
                      <div className="w-[183.322px] text-[#7B7B7B] font-urbanist text-[14.521px] font-medium leading-[18.151px]">
                        Attract patients searching for nearby services
                      </div>
                    </div>
                  </div>

                  {/* Real Estate Card */}
                  <div className="absolute left-[6px] top-[204px] w-[254px] h-[79px] inline-flex p-[6.781px_13.562px] items-center gap-[6.781px] rounded-[18.986px] bg-white shadow-[0_2px_0_0_#1D9B5E]">
                    <div className="flex w-[45.377px] h-[45.377px] p-[22.688px] flex-col justify-center items-center gap-[22.688px] rounded-[1234.247px] bg-[#1D9B5E] relative">
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32.121px] h-[32.121px] flex-shrink-0">
                        <path d="M4.20312 12.2661L16.2486 2.89746L28.294 12.2661V26.9884C28.294 27.6983 28.012 28.3791 27.51 28.8811C27.008 29.3831 26.3272 29.6651 25.6173 29.6651H6.87989C6.16997 29.6651 5.48912 29.3831 4.98713 28.8811C4.48514 28.3791 4.20313 27.6983 4.20312 26.9884V12.2661Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.2344 29.6651V16.2812H20.2647V29.6651" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex w-[174.247px] flex-col items-start">
                      <div className="text-[#071F36] font-urbanist text-[16.553px] font-semibold leading-[27.226px]">
                        Real Estate
                      </div>
                      <div className="w-[183.322px] text-[#7B7B7B] font-urbanist text-[14.521px] font-medium leading-[18.151px]">
                        Generate property buyer and seller inquiries
                      </div>
                    </div>
                  </div>

                  {/* Consulting Card */}
                  <div className="absolute left-[276px] top-[225px] w-[254px] h-[79px] inline-flex p-[6.781px_13.562px] items-center gap-[6.781px] rounded-[18.986px] bg-white shadow-[0_5.425px_16.816px_0_rgba(0,132,255,0.35)]">
                    <div className="flex w-[45.377px] h-[45.377px] p-[22.688px] flex-col justify-center items-center gap-[22.688px] rounded-[1234.247px] bg-[#C04350] relative">
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32.121px] h-[32.121px] flex-shrink-0">
                        <path d="M29.6349 16.2818H24.2813L20.2662 28.3272L12.2359 4.23633L8.22072 16.2818H2.86719" stroke="white" strokeWidth="2.67677" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex w-[174.247px] flex-col items-start">
                      <div className="text-[#071F36] font-urbanist text-[16.553px] font-semibold leading-[27.226px]">
                        Consulting
                      </div>
                      <div className="w-[183.322px] text-[#7B7B7B] font-urbanist text-[14.521px] font-medium leading-[18.151px]">
                        Reach decision-makers ready to take action
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Based Section */}
              <div className="flex flex-col items-start gap-[38px] self-stretch relative">
                <div className="flex flex-col items-start gap-4 self-stretch relative">
                  <h3 className="self-stretch text-[#071F36] font-urbanist text-[28px] font-semibold leading-[23px]">
                    Lead Based
                  </h3>
                  <p className="self-stretch text-[#798692] font-urbanist text-[18px] font-medium leading-[25px]">
                    We specialize in generating high-quality leads for service-based industries.
                  </p>
                </div>
                <button className="flex w-[275px] h-[50px] p-[0_32px] justify-center items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_5px_14.7px_0_rgba(47,152,255,0.63)] relative">
                  <span className="text-white text-center font-urbanist text-[16px] font-medium leading-[23px] capitalize">
                    Start Getting Qualified Lead
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Sales Based Card */}
          <div className="flex p-[32px_29px] justify-center items-center gap-[10px] rounded-[14px] bg-white shadow-[0_4px_8.6px_8px_rgba(0,132,255,0.09)] relative">
            <div className="flex w-[494px] flex-col justify-center items-center gap-[45px] relative">
              {/* Chart Card */}
              <div className="w-[494px] h-[331px] shadow-[0_4px_28.1px_0_rgba(0,0,0,0.10)] relative">
                {/* Card Background Container */}
                <div className="w-[494px] h-[331px] absolute left-0 top-0 rounded-[20px] border border-[#F8F9FA] bg-white shadow-[0_4px_20px_0_rgba(238,238,238,0.50)]" />
                
                {/* Card Header */}
                <div className="w-[494px] h-[61px] absolute left-0 top-0">
                  <div className="w-[490px] h-[61px] absolute left-[4px] top-0" />
                  <div className="absolute left-[15px] top-[24px] w-[63px] h-[32px]">
                    <span className="text-[#05004E] font-urbanist text-[20px] font-bold leading-[32px]">
                      Sales
                    </span>
                  </div>
                </div>

                {/* Chart Axis Lines */}
                <div className="absolute left-[43px] top-[88px] w-[431px] h-[157px]">
                  <div className="absolute left-0 top-0 w-[516px] h-[1px] bg-[rgba(70,78,95,0.04)]" />
                  <div className="absolute left-0 top-[41px] w-[516px] h-[1px] bg-[rgba(70,78,95,0.04)]" />
                  <div className="absolute left-0 top-[82px] w-[516px] h-[1px] bg-[rgba(70,78,95,0.04)]" />
                  <div className="absolute left-0 top-[123px] w-[516px] h-[1px] bg-[rgba(70,78,95,0.04)]" />
                  <div className="absolute left-0 top-[164px] w-[516px] h-[1px] bg-[rgba(70,78,95,0.04)]" />
                </div>

                {/* Y-Axis Labels */}
                <div className="absolute left-[30px] top-[238px] w-[7px] h-[15px] text-right">
                  <span className="text-[#7B91B0] font-urbanist text-[10px] font-normal leading-[16px] opacity-70">
                    0
                  </span>
                </div>
                <div className="absolute left-[10px] top-[199px] w-[27px] h-[30px] text-right">
                  <span className="text-[#7B91B0] font-urbanist text-[10px] font-normal leading-[16px] opacity-70">
                    100
                  </span>
                </div>
                <div className="absolute left-[5px] top-[159px] w-[32px] h-[30px] text-right">
                  <span className="text-[#7B91B0] font-urbanist text-[10px] font-normal leading-[16px] opacity-70">
                    200
                  </span>
                </div>
                <div className="absolute left-[4px] top-[121px] w-[33px] h-[30px] text-right">
                  <span className="text-[#7B91B0] font-urbanist text-[10px] font-normal leading-[16px] opacity-70">
                    300
                  </span>
                </div>
                <div className="absolute left-0 top-[82px] w-[37px] h-[30px] text-right">
                  <span className="text-[#7B91B0] font-urbanist text-[10px] font-normal leading-[16px] opacity-70">
                    400
                  </span>
                </div>

                {/* X-Axis Labels */}
                <div className="absolute left-[56px] top-[243px] w-[414px] h-[19px] flex items-center gap-[17px]">
                  <div className="w-[65px] h-[19px]">
                    <span className="text-[#464E5F] font-urbanist text-[10px] font-normal">
                      Ecommerce
                    </span>
                  </div>
                  <div className="w-[84px] h-[19px]">
                    <span className="text-[#464E5F] font-urbanist text-[10px] font-normal">
                      Saas & Software
                    </span>
                  </div>
                  <div className="w-[77px] h-[19px]">
                    <span className="text-[#464E5F] font-urbanist text-[10px] font-normal">
                      Digital products
                    </span>
                  </div>
                  <div className="w-[86px] h-[19px]">
                    <span className="text-[#464E5F] font-urbanist text-[10px] font-normal">
                      Travel & Hospitality
                    </span>
                  </div>
                  <div className="w-[37px] h-[19px]">
                    <span className="text-[#464E5F] font-urbanist text-[10px] font-normal">
                      Delivery
                    </span>
                  </div>
                </div>

                {/* Chart Lines SVG */}
                <svg
                  className="absolute left-[56px] top-[89px] w-[405px] h-[155px]"
                  width="405"
                  height="156"
                  viewBox="0 0 405 156"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1410_693)">
                    <mask
                      id="mask0_1410_693"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="405"
                      height="156"
                    >
                      <rect
                        x="0.0078125"
                        y="0.408203"
                        width="404.562"
                        height="155.037"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1410_693)">
                      <path
                        d="M-4.99219 63.1072C7.00781 37.7739 46.4078 -4.59278 108.008 28.6072C185.008 70.1072 200.008 97.6072 274.008 63.1072C348.008 28.6072 382.008 21.1072 440.008 63.1072C486.408 96.7072 513.008 77.1072 520.508 63.1072"
                        stroke="#3CD856"
                        strokeWidth="4"
                      />
                      <path
                        d="M-4.99219 36.4081C20.0078 7.90813 44.4078 34.2081 106.008 67.4081C183.008 108.908 188.48 82.4218 261.508 45.9081C328.508 12.4081 380.508 48.4082 438.508 90.4081C484.908 124.008 514.508 104.408 522.008 90.4081"
                        stroke="#1D8FFF"
                        strokeWidth="4"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1410_693">
                      <rect
                        width="404.562"
                        height="155.037"
                        fill="white"
                        transform="translate(0.0078125 0.408203)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                {/* Vertical Dotted Line with Circle */}
                <svg
                  className="absolute left-[318px] top-[73px] w-[12px] h-[160px]"
                  width="13"
                  height="160"
                  viewBox="0 0 13 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="6.49172" cy="17.5662" rx="5.8511" ry="6.65805" fill="#F64E60" />
                  <path
                    d="M6.49219 159.733L6.49218 0.00012207"
                    stroke="#F64E60"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* Legend */}
                <div className="absolute left-[24px] top-[297px] w-[428px] h-[11px]">
                  {/* This Month Legend */}
                  <div className="absolute left-[97px] top-0 w-[126px] h-[12px]">
                    <div className="absolute left-0 top-0 w-[12px] h-[12px] rounded-[2px] bg-[#3CD856]" />
                    <div className="absolute left-[16px] top-0 w-[59px] h-[14px]">
                      <span className="text-[#464E5F] font-urbanist text-[12px] font-normal">
                        This Month
                      </span>
                    </div>
                  </div>
                  
                  {/* Last Month Legend */}
                  <div className="absolute left-[4px] top-0 w-[115px] h-[12px]">
                    <div className="absolute left-0 top-0 w-[12px] h-[12px] rounded-[2px] bg-[#1D8FFF]" />
                    <div className="absolute left-[16px] top-0 w-[59px] h-[14px]">
                      <span className="text-[#464E5F] font-urbanist text-[12px] font-normal">
                        Last Month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Based Section */}
              <div className="flex flex-col items-start gap-[38px] self-stretch relative">
                <div className="flex flex-col items-start gap-4 self-stretch relative">
                  <h3 className="self-stretch text-[#071F36] font-urbanist text-[28px] font-semibold leading-[23px]">
                    Sales Based
                  </h3>
                  <p className="self-stretch text-[#798692] font-urbanist text-[18px] font-medium leading-[25px]">
                    For product-driven businesses, we focus on driving sales through conversion-optimized campaigns.
                  </p>
                </div>
                <div className="flex items-start gap-3 relative">
                  <button className="flex w-[217px] h-[50px] p-[0_32px] justify-center items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_5px_14.7px_0_rgba(47,152,255,0.63)] relative">
                    <span className="text-white text-center font-urbanist text-[16px] font-medium leading-[23px] capitalize">
                      Boost My Sales Now
                    </span>
                  </button>
                  <button className="flex w-[220px] h-[50px] p-[10px_19px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA] relative">
                    <span className="text-[#091E42] font-urbanist text-[16px] font-medium leading-[100%] capitalize">
                      Know More
                    </span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 relative">
                      <path d="M4.66406 10H16.3307" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.5 4.16602L16.3333 9.99935L10.5 15.8327" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-center items-center gap-[38px] self-stretch relative">
          <div className="flex w-[253px] p-[22px_34px] flex-col justify-center items-center gap-[21px] rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)] relative">
            <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-[24px] font-semibold leading-[26px]">
              25+
            </span>
            <span className="w-[125px] text-[#7B7B7B] text-center font-urbanist text-[18px] font-medium leading-[26px]">
              Industries Served
            </span>
          </div>
          <div className="flex w-[253px] p-[22px_34px] flex-col justify-center items-center gap-[21px] rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)] relative">
            <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-[24px] font-semibold leading-[26px]">
              3+
            </span>
            <span className="w-[125px] text-[#7B7B7B] text-center font-urbanist text-[18px] font-medium leading-[26px]">
              Years of experience
            </span>
          </div>
          <div className="flex w-[253px] p-[22px_34px] flex-col justify-center items-center gap-[21px] rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)] relative">
            <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-[24px] font-semibold leading-[26px]">
              10+
            </span>
            <span className="w-[125px] text-[#7B7B7B] text-center font-urbanist text-[18px] font-medium leading-[26px]">
              Industries Experts
            </span>
          </div>
          <div className="flex w-[253px] p-[22px_34px] flex-col justify-center items-center gap-[21px] rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)] relative">
            <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-[24px] font-semibold leading-[26px]">
              50+
            </span>
            <span className="w-[125px] text-[#7B7B7B] text-center font-urbanist text-[18px] font-medium leading-[26px]">
              Specialized Content types
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeBusiness;
