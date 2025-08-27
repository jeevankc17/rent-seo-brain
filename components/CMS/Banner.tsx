"use client";

import React from "react";
import Image from "next/image";

export type BannerProps = {
  className?: string;
};

const Banner: React.FC<BannerProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-[1129px] h-auto min-h-[300px] md:min-h-[400px] lg:h-[463px] rounded-[11px] md:rounded-[16px] lg:rounded-[21px] bg-[#0C0C0F] overflow-hidden mx-auto ${className}`}
    >
      {/* Background blur effects */}
      <div className="absolute -left-[169px] -top-[46px] w-[337px] h-[293px] rounded-full bg-[rgba(47,152,255,0.63)] blur-[265.7px]" />
      <div className="absolute left-[840px] top-[209px] w-[337px] h-[293px] rounded-full bg-[rgba(47,152,255,0.63)] blur-[265.7px]" />
      <div className="absolute left-[536px] top-[232px] w-[58px] h-[51px] bg-white blur-[59.79px]" />

      {/* Content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 md:gap-6 p-4 md:p-8 lg:p-0 lg:absolute lg:left-[166px] lg:top-[74px] lg:w-[798px] lg:h-[316px]">
        {/* Header section */}
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-full">
          <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 w-full">
            {/* Main heading */}
            <h1 className="w-full max-w-[798px] text-white text-center font-urbanist text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-[700] leading-[120%]">
            Let's Transform Content Strategy
            </h1>

            {/* Subtitle */}
            <p className="w-full max-w-[598px] text-[rgba(255,255,255,0.7)] text-center font-urbanist text-sm sm:text-base md:text-lg lg:text-lg font-normal leading-[145%]">
            We create SEO-optimized, audience-first content that drives real results — from blogs and landing pages to CMS-ready assets.
            </p>
          </div>

          {/* Avatar section */}
          <div className="flex w-full max-w-[214.387px] p-[6px_8px] flex-col items-center gap-[7px] rounded-[7px]">
            {/* Avatar group */}
            <div className="flex items-start gap-[-10.677px] relative">
              <div className="flex w-[33.231px] h-[33.231px] flex-col justify-center items-center rounded-full overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image1.jpg"
                  alt="Avatar 1"
                  width={33}
                  height={33}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex w-[33.231px] h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image2.jpg"
                  alt="Avatar 2"
                  width={33}
                  height={33}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex w-[33.231px] h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image3.jpg"
                  alt="Avatar 3"
                  width={33}
                  height={33}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex w-[33.231px] h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image4.jpg"
                  alt="Avatar 4"
                  width={33}
                  height={33}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex w-[33.231px] h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image5.jpg"
                  alt="Avatar 5"
                  width={33}
                  height={33}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex w-[33.231px] h-[33.231px] flex-col justify-center items-center rounded-full border-[1.602px] border-solid border-[#FAFAFA] overflow-hidden">
                <Image
                  src="/Home-Page/Hero-Section/image6.jpg"
                  alt="Avatar 6"
                  width={33}
                  height={33}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Trust text */}
            <div className="w-full max-w-[206.885px] h-auto text-[#DFE2E5] text-center font-urbanist text-xs sm:text-sm font-medium leading-5">
              Trusted By Over 100+k Clients
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
            <button className="flex w-full sm:w-[268px] h-[45px] sm:h-[50px] p-[0_3px] justify-center sm:justify-end items-center gap-[10px] rounded-[35px] sm:rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)] hover:opacity-90 transition-opacity cursor-pointer">
              <span className="text-white text-center font-urbanist text-sm sm:text-base font-medium leading-[23px] capitalize">
              Get a Custom Content Plan
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
              className="all-[unset] box-border flex w-full sm:w-[270px] h-[45px] sm:h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[25px] sm:rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-0 transition-colors duration-200"
              type="button"
              aria-label="Book an appointment to discuss your business growth"
            >
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-sm sm:text-base tracking-[0] leading-4 whitespace-nowrap">
                Book An Appointment
              </span>

              <img
                className="relative w-5 h-5"
                alt=""
                src="/CMS/ca/arrow-right-2.svg"
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
