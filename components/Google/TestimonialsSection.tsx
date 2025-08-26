"use client";
import type { NextPage } from "next";

export type TestiType = {
  className?: string;
};

const TestimonialsSection: NextPage<TestiType> = ({ className = "" }) => {
  return (
    <div 
      className={`flex w-full max-w-[1128px] py-0 px-4 lg:px-[183px] justify-center items-center relative ${className}`}
    >
      <div className="flex w-full max-w-[762px] flex-col items-center gap-8 lg:gap-[50px] relative lg:absolute lg:left-[183px] lg:top-0 h-auto lg:h-[733px]">
        {/* Title Section */}
        <div className="flex w-full max-w-[565px] flex-col items-center gap-4 relative">
          {/* Seamless Integrations Badge */}
          <div className="flex w-full max-w-[185px] py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF] relative">
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[15px] flex-shrink-0 relative"
            >
              <path 
                d="M5 11.3125L7.5 9.40625L10 11.3125L9.0625 8.21875L11.5625 6.4375H8.5L7.5 3.1875L6.5 6.4375H3.4375L5.9375 8.21875L5 11.3125ZM7.5 13.8125C6.63542 13.8125 5.82292 13.6484 5.0625 13.3203C4.30208 12.9922 3.64062 12.5469 3.07812 11.9844C2.51562 11.4219 2.07031 10.7604 1.74219 10C1.41406 9.23958 1.25 8.42708 1.25 7.5625C1.25 6.69792 1.41406 5.88542 1.74219 5.125C2.07031 4.36458 2.51562 3.70312 3.07812 3.14062C3.64062 2.57812 4.30208 2.13281 5.0625 1.80469C5.82292 1.47656 6.63542 1.3125 7.5 1.3125C8.36458 1.3125 9.17708 1.47656 9.9375 1.80469C10.6979 2.13281 11.3594 2.57812 11.9219 3.14062C12.4844 3.70312 12.9297 4.36458 13.2578 5.125C13.5859 5.88542 13.75 6.69792 13.75 7.5625C13.75 8.42708 13.5859 9.23958 13.2578 10C12.9297 10.7604 12.4844 11.4219 11.9219 11.9844C11.3594 12.5469 10.6979 12.9922 9.9375 13.3203C9.17708 13.6484 8.36458 13.8125 7.5 13.8125Z" 
                fill="#1D8FFF"
              />
            </svg>
            <div className="text-[#1D8FFF] font-urbanist text-xs lg:text-[14px] font-medium leading-[20px] lg:leading-[23px] relative">
              Seamless Integrations
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-auto lg:h-[176px] flex-col items-center gap-4 self-stretch relative">
            {/* Main Heading */}
            <div className="w-full max-w-[641px] text-[#12579C] text-center font-urbanist text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px] relative">
              Connect Google Ads with the tools you already use.
            </div>
            
            {/* Description */}
            <div className="w-full max-w-[565px] text-[#6A7986] text-center font-urbanist text-sm lg:text-base font-normal leading-[20px] lg:leading-[23px] relative">
              We streamline your workflow by syncing Google Ads with industry-standard platforms to improve tracking, reporting, and automation.
            </div>
          </div>
        </div>

        {/* Circular Integration Diagram */}
        <div className="flex w-full max-w-[762px] h-auto lg:h-[458px] justify-center items-center relative">
          <div className="w-full max-w-[762px] flex-shrink-0 self-stretch relative lg:absolute lg:left-0 lg:top-0 h-auto lg:h-[790px] hidden lg:block">
            {/* Outer Circle */}
            <svg 
              width="762" 
              height="437" 
              viewBox="0 0 762 437" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[762px] h-auto lg:h-[762px] rounded-full border border-[#7CBEFF] shadow-[0_4px_9.6px_0_#132A40] relative lg:absolute lg:left-0 lg:top-[28px]"
            >
              <g filter="url(#filter0_d_1478_9826)">
                <circle cx="381" cy="387.062" r="380.5" stroke="#7CBEFF" shapeRendering="crispEdges"/>
              </g>
              <defs>
                <filter id="filter0_d_1478_9826" x="-9.6" y="0.4625" width="781.2" height="781.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="4.8"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0745098 0 0 0 0 0.164706 0 0 0 0 0.25098 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_9826"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1478_9826" result="shape"/>
                </filter>
              </defs>
            </svg>

            {/* Middle Circle */}
            <svg 
              width="630" 
              height="361" 
              viewBox="0 0 630 361" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[610px] h-auto lg:h-[610px] rounded-full border-[0.801px] border-[#7CBEFF] shadow-[0_4.129px_9.909px_0_#132A40] relative lg:absolute lg:left-[77px] lg:top-[104px]"
            >
              <g filter="url(#filter0_d_1478_9827)">
                <circle cx="315" cy="311.062" r="304.6" stroke="#7CBEFF" strokeWidth="0.800525" shapeRendering="crispEdges"/>
              </g>
              <defs>
                <filter id="filter0_d_1478_9827" x="0.0913706" y="0.282466" width="629.817" height="629.817" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4.1286"/>
                  <feGaussianBlur stdDeviation="4.95431"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0745098 0 0 0 0 0.164706 0 0 0 0 0.25098 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_9827"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1478_9827" result="shape"/>
                </filter>
              </defs>
            </svg>

            {/* Inner Circle */}
            <svg 
              width="485" 
              height="271" 
              viewBox="0 0 485 271" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[469px] h-auto lg:h-[469px] rounded-full border-[0.615px] border-[#7CBEFF] shadow-[0_3.174px_7.618px_0_#132A40] relative lg:absolute lg:left-[147px] lg:top-[193px]"
            >
              <g filter="url(#filter0_d_1478_9828)">
                <circle cx="242.5" cy="239.562" r="234.192" stroke="#7CBEFF" strokeWidth="0.615486" shapeRendering="crispEdges"/>
              </g>
              <defs>
                <filter id="filter0_d_1478_9828" x="0.381726" y="0.618507" width="484.237" height="484.237" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="3.17428"/>
                  <feGaussianBlur stdDeviation="3.80914"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0745098 0 0 0 0 0.164706 0 0 0 0 0.25098 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_9828"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1478_9828" result="shape"/>
                </filter>
              </defs>
            </svg>

            {/* Platform Icons */}
            {/* Snapchat - Top */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7135bbdad4ac0761a8ec0e4038a2f2da271f178e?width=228" 
              alt="Snapchat" 
              className="w-[80px] h-[80px] lg:w-[114px] lg:h-[114px] aspect-square relative lg:absolute lg:left-[177px] lg:top-0"
            />
            
            {/* LinkedIn - Right */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/08f653c88a45aa8cca65041783cfc271514c70c0?width=106" 
              alt="LinkedIn" 
              className="w-[40px] h-[40px] lg:w-[53px] lg:h-[53px] aspect-[53.10/52.96] relative lg:absolute lg:left-[532px] lg:top-[127px]"
            />
            
            {/* Instagram - Left */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d6b3594e46fe1459f80f063838d4b2f378f3aa62?width=127" 
              alt="Instagram" 
              className="w-[45px] h-[45px] lg:w-[63px] lg:h-[63px] aspect-square relative lg:absolute lg:left-[70px] lg:top-[261px]"
            />
            
            {/* Facebook - Bottom Right */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c35d57c4e552a4618fd894e8792b894076bf20d6?width=109" 
              alt="Facebook" 
              className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] aspect-square relative lg:absolute lg:left-[561px] lg:top-[283px]"
            />
            
            {/* TikTok - Center */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/8be968a8bdf866b3e80a0431e04b17542c21fdc1?width=142" 
              alt="TikTok" 
              className="w-[50px] h-[50px] lg:w-[71px] lg:h-[71px] aspect-square relative lg:absolute lg:left-[263px] lg:top-[174px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;