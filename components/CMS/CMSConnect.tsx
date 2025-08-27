"use client";
import React from "react";

const CMSConnect = () => {
  return (
    <div className="flex w-full max-w-[1128px] flex-col items-center gap-[50px] relative mx-auto px-4 pb-8 md:pb-0">
      {/* Title Section */}
      <div className="flex w-full max-w-[552px] flex-col justify-center items-center gap-16 relative">
        {/* Badge */}
        <div className="flex w-full max-w-[236px] py-[5px] justify-center items-center gap-[6px] rounded-[35px] sm:rounded-[45px] border border-[#F78C01] relative">
          <div className="flex w-full max-w-[218px] py-[2px] px-2 justify-center items-center gap-[6px] flex-shrink-0 rounded-[35px] sm:rounded-[45px] border-[0.2px] border-[#F8A02C] bg-[#FEF4E6] relative">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[15px] flex-shrink-0 relative"
            >
              <path
                d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z"
                fill="#F78C01"
              />
            </svg>
            <div className="w-full max-w-[181px] flex-shrink-0 text-[#F78C01] font-urbanist text-xs sm:text-[14px] font-medium leading-[23px] capitalize relative">
              What Is Content Marketing?
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex h-auto flex-col justify-center items-center gap-3 md:gap-4 self-stretch relative">
          <div className="self-stretch text-[#12579C] text-center font-urbanist text-base md:text-xl lg:text-[48px] font-bold leading-tight lg:leading-[57px] relative">
            Content That Connects, Stories That Sell.
          </div>
          <div className="self-stretch text-[#6A7986] text-center font-urbanist text-xs md:text-base lg:text-[16px] font-normal leading-[23px] relative">
            Content marketing is more than just blogs and words — it's about delivering value to the right audience at the right time.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="h-auto self-stretch relative">
        {/* Decorative SVG Line */}
        <svg
          width="514"
          height="173"
          viewBox="0 0 514 173"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[300px] md:w-[400px] lg:w-[512px] h-auto lg:h-[171px] flex-shrink-0 absolute left-[50px] md:left-[100px] lg:left-[150px] top-[200px] md:top-[250px] lg:top-[311px] hidden md:block"
          style={{ strokeWidth: "1px", stroke: "rgba(29, 143, 255, 0.20)" }}
        >
          <path
            d="M40.7057 1C40.7057 1 -33.3347 80.5056 20.7964 143.832C93.501 228.888 276.298 91.1238 428.938 123.185C462.87 130.312 513 143.832 513 143.832"
            stroke="url(#paint0_linear_1376_82933)"
            strokeDasharray="9 9"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1376_82933"
              x1="244.388"
              y1="-49.0399"
              x2="244.388"
              y2="143.832"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1D8FFF" stopOpacity="0.2" />
              <stop offset="0.288462" stopColor="#AC955D" stopOpacity="0.707427" />
              <stop offset="0.454783" stopColor="#FF9800" />
              <stop offset="0.709019" stopColor="#00B45C" />
              <stop offset="1" stopColor="#1D8FFF" stopOpacity="0.33" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Content */}
        <div className="flex w-full md:w-[515px] flex-col items-start gap-6 md:gap-[36px] relative md:absolute left-0 top-0 h-auto px-4 md:px-0 mb-8 md:mb-0">
          {/* Benefits List */}
          <div className="flex flex-col items-start gap-4 md:gap-8 self-stretch relative">
            <div className="flex items-center gap-[19px] relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
              >
                <path d="M8 19V5L19 12L8 19Z" fill="#1D8FFF" />
              </svg>
              <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[18px] font-medium leading-[23px] capitalize relative">
                Builds authority and trust in your niche
              </div>
            </div>
            <div className="flex items-center gap-[19px] self-stretch relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
              >
                <path d="M8 19V5L19 12L8 19Z" fill="#1D8FFF" />
              </svg>
              <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[18px] font-medium leading-[23px] capitalize relative">
                Improves SEO rankings and organic traffic
              </div>
            </div>
            <div className="flex items-center gap-[19px] self-stretch relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
              >
                <path d="M8 19V5L19 12L8 19Z" fill="#1D8FFF" />
              </svg>
              <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[18px] font-medium leading-[23px] capitalize relative">
                Engages and nurtures potential customers
              </div>
            </div>
            <div className="flex items-center gap-[19px] self-stretch relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
              >
                <path d="M8 19V5L19 12L8 19Z" fill="#1D8FFF" />
              </svg>
              <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[18px] font-medium leading-[23px] capitalize relative">
                Supports every stage of your marketing funnel
              </div>
            </div>
            <div className="flex items-center gap-[19px] self-stretch relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
              >
                <path d="M8 19V5L19 12L8 19Z" fill="#1D8FFF" />
              </svg>
              <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[18px] font-medium leading-[23px] capitalize relative">
                Drives long-term, scalable growth
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 self-stretch relative">
            {/* Primary Button */}
            <div className="flex w-full sm:w-[271px] h-[45px] sm:h-[50px] py-0 px-[3px] justify-center sm:justify-end items-center gap-[10px] rounded-[35px] sm:rounded-[45px] bg-[#1D8FFF] relative shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <div className="text-white text-center font-urbanist text-xs md:text-base lg:text-[16px] font-medium leading-[23px] capitalize relative">
                Start My Content Strategy
              </div>
              <div className="flex p-3 items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF] relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 relative"
                >
                  <path
                    d="M4.16406 10H15.8307"
                    stroke="#1D8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.1665L15.8333 9.99984L10 15.8332"
                    stroke="#1D8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Secondary Button */}
            <div className="flex w-full sm:w-[220px] h-[45px] sm:h-[50px] py-[10px] px-[19px] justify-center items-center gap-[7px] rounded-[25px] sm:rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA] relative">
              <div className="text-[#091E42] font-urbanist text-xs md:text-base lg:text-[16px] font-medium leading-[100%] capitalize relative">
                See How It Works
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 relative"
              >
                <path
                  d="M4.16406 10H15.8307"
                  stroke="#091E42"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.1665L15.8333 9.99984L10 15.8332"
                  stroke="#091E42"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Image with Overlays */}
        <div className="w-full max-w-[400px] md:max-w-[464px] h-auto md:h-[623px] flex-shrink-0 relative md:absolute left-0 md:left-[664px] top-0 md:top-0 mx-auto md:mx-0">
          <img
            className="w-full max-w-[400px] md:max-w-[464px] h-auto md:h-[623px] flex-shrink-0 aspect-[143/192] relative md:absolute left-0 top-0"
            src="https://api.builder.io/api/v1/image/assets/TEMP/2cffe963ec0b5a8f8a4ad5865619a6a3405e439b?width=928"
            alt="Dashboard Preview"
            onError={(e) => {
              e.currentTarget.src = "/CMS/ca/connect.png"; // your alternative source
            }}
          />
          
          {/* Gradient Blur Effect */}
          <div className="w-[120px] md:w-[163px] h-[120px] md:h-[168px] flex-shrink-0 absolute left-[30px] md:left-[49px] top-[50px] md:top-[70px] rounded-full opacity-50 blur-[60px] md:blur-[79.51px]" 
               style={{ background: 'linear-gradient(180deg, #1D8FFF 0%, #D8FD5F 100%)' }} />

          {/* White Card Container */}
          <div className="w-[200px] md:w-[252px] h-[400px] md:h-[526px] flex-shrink-0 absolute left-[15px] md:left-[19px] top-[50px] md:top-[70px] bg-white rounded-[25px] md:rounded-[33px_41px_33px_33px]">
            {/* Live Traffic Surge Badge */}
            <div className="inline-flex py-[8px] md:py-[10px] px-[10px] md:px-[13px] items-center gap-[10px] md:gap-[13px] absolute left-[10px] md:left-[15px] top-[20px] md:top-[31px] w-[130px] md:w-[161px] h-[35px] md:h-[43px] bg-white rounded-lg shadow-[0_4px_19.5px_0_rgba(29,143,255,0.20)]">
              <div className="w-[10px] md:w-[13px] h-[10px] md:h-[13px] bg-[#00B45C] rounded-full relative" />
              <div className="text-black font-urbanist text-[12px] md:text-[14px] font-medium leading-[20px] md:leading-[23px] capitalize relative">
                Live Traffic Surge
              </div>
            </div>

            {/* Bottom Stats Cards */}
            <div className="flex w-[180px] md:w-[239px] items-center gap-[5px] md:gap-[7px] absolute left-[10px] md:left-[7px] top-[320px] md:top-[429px] h-[50px] md:h-[66px]">
              <div className="flex w-[85px] md:w-[113px] py-[8px] md:py-[11px] px-[8px] md:px-[10px] flex-col justify-center items-center gap-1 flex-shrink-0 bg-white rounded-lg shadow-[0_4px_18.3px_0_rgba(247,181,13,0.15)] relative">
                <div className="text-[#F78C01] text-center font-urbanist text-[12px] md:text-[14px] font-medium leading-[18px] md:leading-[20px] capitalize relative">
                  300%
                </div>
                <div className="text-[#7B7B7B] text-center font-urbanist text-[8px] md:text-[10px] font-medium leading-[16px] md:leading-[20px] capitalize relative">
                  Traffic Boost
                </div>
              </div>
              <div className="flex w-[85px] md:w-[113px] py-[8px] md:py-[11px] px-[8px] md:px-[10px] flex-col justify-center items-center gap-1 flex-shrink-0 bg-white rounded-lg shadow-[0_4px_18.3px_0_rgba(247,181,13,0.15)] relative">
                <div className="text-[#F78C01] text-center font-urbanist text-[12px] md:text-[14px] font-medium leading-[18px] md:leading-[20px] capitalize relative">
                  $2.5M+
                </div>
                <div className="text-[#7B7B7B] text-center font-urbanist text-[8px] md:text-[10px] font-medium leading-[16px] md:leading-[20px] capitalize relative">
                  Revenue Generated
                </div>
              </div>
            </div>

            {/* New Lead Generated Badge */}
            <div className="inline-flex py-[8px] md:py-[11px] px-[16px] md:px-[26px] justify-center items-center gap-[8px] md:gap-[10px] absolute left-[10px] md:left-[17px] top-[260px] md:top-[346px] w-[180px] md:w-[219px] h-[36px] md:h-[46px] bg-[#D8FD5F] rounded-[80px] md:rounded-[123px] shadow-[0_4px_123px_0_rgba(47,152,255,0.16)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6 aspect-[1/1] relative"
              >
                <path
                  d="M16.996 6.99993H17.005M2.5 21.4999L7.5 16.4999M8.5 21.4999L10.5 19.4999M2.5 15.4999L4.5 13.4999M11.801 6.48993L13.287 5.00393C14.96 3.33093 17.149 2.63693 19.467 2.52393C20.369 2.47993 20.819 2.45793 21.181 2.81893C21.542 3.18093 21.521 3.63093 21.476 4.53293C21.363 6.85093 20.669 9.03993 18.996 10.7129L17.511 12.1999C16.287 13.4229 15.939 13.7709 16.196 15.0979C16.45 16.1119 16.695 17.0929 15.958 17.8299C15.064 18.7249 14.248 18.7249 13.354 17.8299L6.171 10.6469C5.276 9.75293 5.276 8.93693 6.171 8.04293C6.908 7.30593 7.889 7.55093 8.903 7.80493C10.23 8.06193 10.578 7.71393 11.801 6.48993Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-black text-center font-urbanist text-[12px] md:text-[14px] font-medium leading-[20px] md:leading-[23px] capitalize relative">
                New Lead Generated
              </div>
            </div>
          </div>

          {/* Spendings Card */}
          <div className="inline-flex py-[8px] md:py-[11px] px-[12px] md:px-[18.969px] flex-col items-start gap-[6px] md:gap-[9px] absolute left-[-10px] md:left-[-2px] top-[140px] md:top-[183px] w-[200px] md:w-[261px] h-[160px] md:h-[209px] bg-white rounded-[8px] md:rounded-[10.84px] border-[0.5px] md:border-[0.775px] border-[#F9F9F9] shadow-[0_1.55px_12.5px_0_rgba(67,162,255,0.61)]">
            {/* Header */}
            <div className="flex items-center gap-[6px] md:gap-[8.526px] relative">
              <div className="flex p-[8px] md:p-[11.626px] justify-center items-center gap-[6px] md:gap-[7.751px] bg-[#E8F4FF] rounded-full relative">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] md:w-[18.602px] h-[14px] md:h-[18.602px] relative"
                >
                  <g clipPath="url(#clip0_1577_10331)">
                    <path
                      d="M18.4192 5.27686L11.0558 12.6402L7.18037 8.76477L1.36719 14.578"
                      stroke="#1D8FFF"
                      strokeWidth="1.55018"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.7734 5.27686H18.424V9.9274"
                      stroke="#1D8FFF"
                      strokeWidth="1.55018"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1577_10331">
                      <rect
                        width="18.6022"
                        height="18.6022"
                        fill="white"
                        transform="translate(0.59375 0.626465)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-start gap-[2px] md:gap-[3.1px] relative">
                <div className="text-[#7B7B7B] font-urbanist text-[9px] md:text-[10.851px] font-medium leading-[14px] md:leading-[17.827px] capitalize relative">
                  Monthly Growth
                </div>
                <div className="text-black font-urbanist text-[10px] md:text-[12.401px] font-semibold leading-[14px] md:leading-[17.827px] capitalize relative">
                  +347%
                </div>
              </div>
            </div>

            {/* Chart Content */}
            <div className="flex w-[223px] flex-col items-start gap-[20.324px] relative">
              {/* Chart Bars */}
              <div className="flex w-[223px] h-[101px] items-center gap-[5.42px] relative">
                <div className="flex w-[223px] h-[101px] flex-col items-center flex-shrink-0 relative">
                  <div className="flex items-end gap-[6px] relative -right-[3.264px]">
                    {/* Bar 1 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[72px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[28px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 2 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[72px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[9px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 3 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[95px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[15px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 4 */}
                    <div className="flex flex-col items-start relative">
                      <div className="w-[18px] h-[37px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[10px] absolute top-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 5 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[60px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[19px] h-[14px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 6 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[96px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[19px] h-[24px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 7 */}
                    <div className="flex flex-col items-start relative">
                      <div className="w-[18px] h-[78px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[56px] absolute top-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 8 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[58px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[8px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                    {/* Bar 9 */}
                    <div className="flex flex-col items-end relative">
                      <div className="w-[18px] h-[78px] flex-shrink-0 bg-[#D9D9D9] rounded-[2.71px]" />
                      <div className="w-[18px] h-[78px] absolute bottom-0 bg-gradient-to-b from-[rgba(47,152,255,0.63)] to-[#43A2FF] rounded-[2.71px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex w-[223px] items-center gap-[94px] relative">
                <div className="text-[#7A7A7A] font-urbanist text-[9px] font-medium leading-[14px] relative">
                  Monthly Visitors
                </div>
                <div className="flex w-[70px] h-[15px] justify-center items-center gap-[4.651px] flex-shrink-0 relative">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14.323px] h-[14.323px] flex-shrink-0 relative"
                  >
                    <g clipPath="url(#clip0_1577_10389)">
                      <path
                        d="M5.38444 8.80685L4.66232 14.2436L7.64626 12.4532L10.6302 14.2436L9.90808 8.80088M11.8238 5.29177C11.8238 7.59894 9.95344 9.46928 7.64626 9.46928C5.33909 9.46928 3.46875 7.59894 3.46875 5.29177C3.46875 2.98459 5.33909 1.11426 7.64626 1.11426C9.95344 1.11426 11.8238 2.98459 11.8238 5.29177Z"
                        stroke="#1D8FFF"
                        strokeWidth="1.19357"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1577_10389">
                        <rect
                          width="14.3229"
                          height="14.3229"
                          fill="white"
                          transform="translate(0.484375 0.517578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-[#7B7B7B] text-center font-urbanist text-[9px] font-medium leading-[17.827px] capitalize relative">
                    ROI : 420%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSConnect;
