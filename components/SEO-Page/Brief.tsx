import AppButton from "@utils/AppButton";
import React from "react";

const Brief = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-6 px-4 lg:px-0 relative mx-4 lg:mx-[156px]">
      {/* Left Column */}
      <div className="flex w-full lg:w-[552px] flex-col items-start gap-6 lg:gap-[60px] relative">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-start gap-4 w-full relative">
          {/* Badge */}
          <div className="flex w-fit max-w-full p-[5px_0] justify-center items-center gap-[6px] rounded-[45px] border border-[#F78C01] relative mx-auto lg:mx-0">
            <div className="flex w-fit px-3 mx-2 py-1 justify-center items-center gap-[6px] flex-shrink-0 rounded-[45px] border-[0.2px] border-[#F8A02C] bg-[#FEF4E6] relative">
              <svg
                className="w-[15px] h-[15px] flex-shrink-0 relative"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z"
                  fill="#F78C01"
                />
              </svg>
              <div className="text-[#F78C01] font-urbanist text-xs sm:text-sm font-medium leading-[20px] sm:leading-[23px] capitalize relative whitespace-nowrap">
                Your growth starts with a search.
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex min-h-[120px] lg:h-[176px] flex-col justify-center items-start gap-4 w-full relative">
            <div className="w-full text-[#12579C] font-urbanist text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-tight sm:leading-[42px] lg:leading-[57px] relative">
              What SEO Is and Why Your Business Needs It
            </div>
            <div className="w-full max-w-[565px] text-[#071F36] font-urbanist text-sm sm:text-base font-normal leading-[20px] sm:leading-[23px] relative">
              Search Engine Optimization (SEO) is how your business shows up
              when it matters most — right when people are searching for what
              you offer.
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="flex w-full lg:w-[552px] flex-col items-start gap-6 lg:gap-8 relative">
          {/* Benefits List */}
          <div className="flex flex-col items-start gap-4 lg:gap-5 w-full relative">
            {/* Benefit Item 1 */}
            <div className="flex items-center gap-3 w-full relative">
              <div className="flex w-[26px] h-[26px] justify-center items-center gap-[10px] rounded-full bg-[#1D8FFF] relative flex-shrink-0">
                <svg
                  className="w-5 h-5 flex-shrink-0 relative"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4226 5.24407C16.748 5.56952 16.748 6.09715 16.4226 6.42259L8.6785 14.1667C8.02763 14.8176 6.97236 14.8175 6.32149 14.1667L2.74408 10.5892C2.41864 10.2638 2.41864 9.73617 2.74408 9.41075C3.06952 9.08533 3.59715 9.08533 3.92259 9.41075L7.5 12.9882L15.2441 5.24407C15.5695 4.91864 16.0972 4.91864 16.4226 5.24407Z"
                    fill="#E8F4FF"
                  />
                </svg>
              </div>
              <div className="text-[#071F36] font-urbanist text-sm lg:text-lg font-medium leading-normal relative">
                Appear at the top when it counts
              </div>
            </div>

            {/* Benefit Item 2 */}
            <div className="flex items-center gap-3 w-full relative">
              <div className="flex w-[26px] h-[26px] justify-center items-center gap-[10px] rounded-full bg-[#1D8FFF] relative flex-shrink-0">
                <svg
                  className="w-5 h-5 flex-shrink-0 relative"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4226 5.24407C16.748 5.56952 16.748 6.09715 16.4226 6.42259L8.6785 14.1667C8.02763 14.8176 6.97236 14.8175 6.32149 14.1667L2.74408 10.5892C2.41864 10.2638 2.41864 9.73617 2.74408 9.41075C3.06952 9.08533 3.59715 9.08533 3.92259 9.41075L7.5 12.9882L15.2441 5.24407C15.5695 4.91864 16.0972 4.91864 16.4226 5.24407Z"
                    fill="#E8F4FF"
                  />
                </svg>
              </div>
              <div className="text-[#071F36] font-urbanist text-sm lg:text-lg font-medium leading-normal relative">
                Attract high-intent, ready-to-convert visitors
              </div>
            </div>

            {/* Benefit Item 3 */}
            <div className="flex items-center gap-3 w-full relative">
              <div className="flex w-[26px] h-[26px] justify-center items-center gap-[10px] rounded-full bg-[#1D8FFF] relative flex-shrink-0">
                <svg
                  className="w-5 h-5 flex-shrink-0 relative"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4226 5.24407C16.748 5.56952 16.748 6.09715 16.4226 6.42259L8.6785 14.1667C8.02763 14.8176 6.97236 14.8175 6.32149 14.1667L2.74408 10.5892C2.41864 10.2638 2.41864 9.73617 2.74408 9.41075C3.06952 9.08533 3.59715 9.08533 3.92259 9.41075L7.5 12.9882L15.2441 5.24407C15.5695 4.91864 16.0972 4.91864 16.4226 5.24407Z"
                    fill="#E8F4FF"
                  />
                </svg>
              </div>
              <div className="text-[#071F36] font-urbanist text-sm lg:text-lg font-medium leading-normal relative">
                Build long-term authority and trust online
              </div>
            </div>

            {/* Benefit Item 4 */}
            <div className="flex items-center gap-3 w-full relative">
              <div className="flex w-[26px] h-[26px] justify-center items-center gap-[10px] rounded-full bg-[#1D8FFF] relative flex-shrink-0">
                <svg
                  className="w-5 h-5 flex-shrink-0 relative"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4226 5.24407C16.748 5.56952 16.748 6.09715 16.4226 6.42259L8.6785 14.1667C8.02763 14.8176 6.97236 14.8175 6.32149 14.1667L2.74408 10.5892C2.41864 10.2638 2.41864 9.73617 2.74408 9.41075C3.06952 9.08533 3.59715 9.08533 3.92259 9.41075L7.5 12.9882L15.2441 5.24407C15.5695 4.91864 16.0972 4.91864 16.4226 5.24407Z"
                    fill="#E8F4FF"
                  />
                </svg>
              </div>
              <div className="text-[#071F36] font-urbanist text-sm lg:text-lg font-medium leading-normal relative">
                Enhance website structure and user experience
              </div>
            </div>
          </div>

          {/* CTA Button */}
      
          <AppButton
  variant="blue"
  size="lg"
  className="w-full max-w-[280px] sm:max-w-[243px]"
 
  iconPosition="right"
>
  See How SEO Can Help
</AppButton>
        </div>
      </div>

      {/* Right Side - Decorative Elements */}
      <div className="w-full lg:w-[552px] h-[300px] sm:h-[400px] lg:h-[546px] relative hidden lg:block">
        {/* Large Circle */}
        <div className="absolute left-0 top-[123px]">
          <svg
            className="w-[232px] h-[232px] flex-shrink-0"
            width="232"
            height="232"
            viewBox="0 0 232 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="116"
              cy="116"
              r="102.913"
              fill="white"
              stroke="url(#paint0_linear_335_13165)"
              strokeWidth="26.1744"
            />
            <defs>
              <linearGradient
                id="paint0_linear_335_13165"
                x1="116"
                y1="0"
                x2="116"
                y2="232"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#43A2FF" />
                <stop offset="0.546064" stopColor="white" />
                <stop offset="0.657222" stopColor="white" />
                <stop offset="1" stopColor="#43A2FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Connecting Lines */}
        <svg
          className="absolute left-[205px] top-[279px] w-[216px] h-[143px]"
          width="218"
          height="145"
          viewBox="0 0 218 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H42C48.6274 1 54 6.37258 54 13V132C54 138.627 59.3726 144 66 144H217"
            stroke="#C9C9C9"
            strokeLinecap="round"
          />
        </svg>

        {/* Additional decorative lines and elements */}
        <svg
          className="absolute left-[31px] top-[157px] w-[49px] h-[55px]"
          width="50"
          height="56"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.5 1V43.5C49.5 50.1274 44.1274 55.5 37.5 55.5H1"
            stroke="#D2D2D2"
            strokeLinecap="round"
          />
        </svg>

        {/* Text content lines */}
        <div className="absolute left-[210px] top-[247px] w-[263px] h-[1px] bg-[#C9C9C9]"></div>
        <div className="absolute left-[210px] top-[255px] w-[290px] h-[1px] bg-[#C9C9C9]"></div>
        <div className="absolute left-[210px] top-[263px] w-[340px] h-[1px] bg-[#C9C9C9]"></div>
        <div className="absolute left-[210px] top-[270px] w-[340px] h-[1px] bg-[#C9C9C9]"></div>

        {/* Additional connecting path */}
        <svg
          className="absolute left-[88px] top-[301px] w-[91px] h-[24px]"
          width="93"
          height="25"
          viewBox="0 0 93 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 24.5V13C1 6.37258 6.37258 1 13 1H92"
            stroke="#C9C9C9"
            strokeLinecap="round"
          />
        </svg>

        {/* Vertical connecting path */}
        <svg
          className="absolute left-[218px] top-[30px] w-[135px] h-[208px]"
          width="137"
          height="210"
          viewBox="0 0 137 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 209H39.4233C60.9624 209 78.4233 191.539 78.4233 170V40C78.4233 18.4609 95.8842 1 117.423 1H136"
            stroke="#C9C9C9"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating circles */}
        <div className="absolute left-[279px] top-[170px]">
          <svg
            className="w-[21px] h-[21px]"
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_335_13174)">
              <circle cx="22.5" cy="13.5" r="10.5" fill="#43A2FF" />
              <circle
                cx="22.5"
                cy="13.5"
                r="8.4"
                stroke="white"
                strokeWidth="4.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_335_13174"
                x="0.7"
                y="0.0999994"
                width="43.6"
                height="43.6"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="5"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_335_13174"
                />
                <feOffset dy="8.4" />
                <feGaussianBlur stdDeviation="3.15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_335_13174"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_335_13174"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Additional floating circles */}
        <div className="absolute left-[390px] top-[416px]">
          <svg
            className="w-[11px] h-[11px]"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_335_13175)">
              <circle cx="11.5" cy="7.5" r="5.5" fill="#43A2FF" />
              <circle cx="11.5" cy="7.5" r="4.4" stroke="white" strokeWidth="2.2" />
            </g>
            <defs>
              <filter
                id="filter0_d_335_13175"
                x="0.0809522"
                y="0.480952"
                width="22.8381"
                height="22.8381"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology radius="2.61905" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_335_13175" />
                <feOffset dy="4.4" />
                <feGaussianBlur stdDeviation="1.65" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_335_13175" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_335_13175" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute left-[308px] top-[264px]">
          <svg
            className="w-[11px] h-[11px]"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_335_13176)">
              <circle cx="11.5" cy="7.5" r="5.5" fill="#43A2FF" />
              <circle cx="11.5" cy="7.5" r="4.4" stroke="white" strokeWidth="2.2" />
            </g>
            <defs>
              <filter
                id="filter0_d_335_13176"
                x="0.0809522"
                y="0.480952"
                width="22.8381"
                height="22.8381"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology radius="2.61905" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_335_13176" />
                <feOffset dy="4.4" />
                <feGaussianBlur stdDeviation="1.65" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_335_13176" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_335_13176" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Gradient line elements */}
        <svg
          className="absolute left-[258px] top-[363px] w-[0px] h-[10px]"
          width="2"
          height="11"
          viewBox="0 0 2 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10V0.5"
            stroke="url(#paint0_linear_335_13177)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_335_13177"
              x1="1.5"
              y1="2"
              x2="1.5"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#43A2FF" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute left-[333px] top-[422px] w-[6px] h-[0px]"
          width="7"
          height="2"
          viewBox="0 0 7 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1H6"
            stroke="url(#paint0_linear_335_13178)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_335_13178"
              x1="3.25"
              y1="1.15789"
              x2="3.25"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="1" stopColor="#43A2FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stats Card - Long-term ROI */}
        <div className="absolute left-[50%] lg:left-[360px] top-[20px] lg:top-[-5px] transform -translate-x-1/2 lg:translate-x-0 inline-flex p-[9px_13px] flex-col items-start gap-2 rounded-[5px] bg-white shadow-[0_4px_33px_0_rgba(0,0,0,0.25)] w-auto min-w-[150px] max-w-[180px] h-auto min-h-[79px]">
          <div className="flex flex-col items-start gap-2 relative w-full">
            <div className="text-[rgba(10,21,25,0.70)] font-urbanist text-xs lg:text-sm font-medium leading-normal relative whitespace-nowrap">
              Long-term ROI
            </div>
            <div className="flex items-center gap-1 lg:gap-2 relative w-full">
              <div className="text-[#0A1519] font-urbanist text-sm lg:text-xl font-semibold leading-normal relative flex-shrink-0">
                12:1 Return
              </div>
              <div className="flex w-8 lg:w-9 h-8 lg:h-auto p-[4px_6px] lg:p-[6px_8px] justify-center items-center gap-2 rounded-full bg-[#21AA5B] relative flex-shrink-0">
                <svg
                  className="w-4 lg:w-6 h-4 lg:h-6 flex-shrink-0 relative"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 6L13.5 15.5L8.5 10.5L1 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 6H23V12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card - Brand Awareness */}
        <div className="absolute left-[50%] lg:left-[269px] top-[120px] lg:top-[450px] transform -translate-x-1/2 lg:translate-x-0 inline-flex p-4 lg:p-5 items-end gap-3 rounded-[20px] border border-black bg-[#F8F9F9] shadow-[0_4px_0_0_#FF9800] w-[200px] lg:w-[227px] h-[80px] lg:h-[92px]">
          <div className="flex w-[40px] lg:w-[52px] h-[40px] lg:h-[52px] justify-center items-center gap-[8.125px] rounded-[81.25px] bg-[rgba(216,253,95,1)] relative">
            <svg
              className="w-5 lg:w-6 h-5 lg:h-6 flex-shrink-0 relative"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 11L19 13L23 9"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-1 flex-col items-start gap-1 relative">
            <div className="w-full text-[rgba(10,21,25,0.70)] font-urbanist text-sm lg:text-base font-normal leading-[120%] relative">
              Brand Awareness
            </div>
            <div className="w-full text-[#0A1519] font-urbanist text-base lg:text-xl font-semibold leading-[120%] relative">
              +156%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;
