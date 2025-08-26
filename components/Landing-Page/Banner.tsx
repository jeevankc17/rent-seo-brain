"use client";

import React from "react";
import Image from "next/image";

export type BannerProps = {
  className?: string;
};

const Banner: React.FC<BannerProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-[1129px] h-auto lg:h-[463px] rounded-[21px] bg-[#0C0C0F] overflow-hidden mx-auto ${className}`}
    >
      {/* Background blur effects */}
      <div className="absolute -left-[100px] lg:-left-[169px] -top-[30px] lg:-top-[46px] w-[200px] lg:w-[337px] h-[150px] lg:h-[293px] rounded-full bg-[rgba(47,152,255,0.4)] lg:bg-[rgba(47,152,255,0.63)] blur-[150px] lg:blur-[265.7px]" />
      <div className="absolute right-[-100px] lg:left-[840px] top-[120px] lg:top-[209px] w-[200px] lg:w-[337px] h-[150px] lg:h-[293px] rounded-full bg-[rgba(47,152,255,0.4)] lg:bg-[rgba(47,152,255,0.63)] blur-[150px] lg:blur-[265.7px]" />
      <div className="absolute left-[50%] lg:left-[536px] top-[150px] lg:top-[232px] w-[30px] lg:w-[58px] h-[25px] lg:h-[51px] bg-white blur-[30px] lg:blur-[59.79px] transform -translate-x-1/2 lg:transform-none" />

      {/* Content */}
      <div className="relative lg:absolute lg:left-[166px] lg:top-[74px] w-full lg:w-[798px] h-auto lg:h-[316px] flex flex-col justify-center items-center gap-6 p-6 lg:p-0">
        {/* Header section */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Main heading */}
            <h1 className="w-full max-w-[798px] text-white text-center font-urbanist text-3xl lg:text-[50px] font-[700] leading-[120%]">
              Let's Design a Page That Converts
            </h1>

            {/* Subtitle */}
            <p className="w-full max-w-[598px] text-[rgba(255,255,255,0.7)] text-center font-urbanist text-base lg:text-lg font-normal leading-[145%]">
              Whether you're starting fresh or need a conversion boost, we'll
              craft a landing page tailored to your goals, audience, and brand.
            </p>
          </div>

          {/* Avatar section */}
          <div className="flex w-full max-w-[214.387px] p-[6px_8px] flex-col items-center gap-[7px] rounded-[7px]">
            {/* Avatar group */}
            <div className="flex items-start gap-[-8px] lg:gap-[-10.677px] relative">
              <div className="flex w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] flex-col justify-center items-center rounded-full overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image1.jpg"
                  alt="Avatar 1"
                  width={28}
                  height={28}
                  className="rounded-full object-cover lg:w-[33px] lg:h-[33px]"
                />
              </div>
              <div className="flex w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image2.jpg"
                  alt="Avatar 2"
                  width={28}
                  height={28}
                  className="rounded-full object-cover lg:w-[33px] lg:h-[33px]"
                />
              </div>
              <div className="flex w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image3.jpg"
                  alt="Avatar 3"
                  width={28}
                  height={28}
                  className="rounded-full object-cover lg:w-[33px] lg:h-[33px]"
                />
              </div>
              <div className="flex w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image4.jpg"
                  alt="Avatar 4"
                  width={28}
                  height={28}
                  className="rounded-full object-cover lg:w-[33px] lg:h-[33px]"
                />
              </div>
              <div className="flex w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image5.jpg"
                  alt="Avatar 5"
                  width={28}
                  height={28}
                  className="rounded-full object-cover lg:w-[33px] lg:h-[33px]"
                />
              </div>
              <div className="flex w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image6.jpg"
                  alt="Avatar 6"
                  width={28}
                  height={28}
                  className="rounded-full object-cover lg:w-[33px] lg:h-[33px]"
                />
              </div>
            </div>

            {/* Trust text */}
            <div className="w-full max-w-[206.885px] h-auto text-[#DFE2E5] text-center font-urbanist text-xs lg:text-sm font-medium leading-5">
              Trusted By Over 100+k Clients
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="flex w-full sm:w-[220px] lg:w-[248px] h-[45px] lg:h-[50px] items-center justify-center lg:justify-end gap-2 lg:gap-[10px] px-[3px] py-0 relative bg-primary-300 rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:bg-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2">
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
                Start My Landing Page
              </span>
              <div className="flex p-3 items-center gap-[10px] rounded-[34px] border border-solid border-[#A2D1FF] bg-[#E8F4FF]">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16797 10.9805H15.8346"
                    stroke="#1D8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.14746L15.8333 10.9808L10 16.8141"
                    stroke="#1D8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <button
              className="all-[unset] box-border flex w-full sm:w-[200px] lg:w-[270px] h-[45px] lg:h-[50px] items-center justify-center gap-2 lg:gap-[7px] px-4 lg:px-[19px] py-2.5 relative bg-grey-50 rounded-[25px] lg:rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-0 transition-colors duration-200"
              type="button"
              aria-label="Book an appointment to discuss your business growth"
            >
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-sm lg:text-base tracking-[0] leading-[16px] lg:leading-4 whitespace-nowrap">
                Book a Free Consultation
              </span>

              <img
                className="relative w-5 h-5"
                alt=""
                src="/LP/ca/arrow-right-2.svg"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
