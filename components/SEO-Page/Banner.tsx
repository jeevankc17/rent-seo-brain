"use client";

import React from "react";
import Image from "next/image";

export type BannerProps = {
  className?: string;
};

const Banner: React.FC<BannerProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-[1129px] h-auto min-h-[400px] rounded-[12px] bg-[#0C0C0F] overflow-hidden mx-auto px-4 py-8 lg:h-[463px] lg:rounded-[21px] lg:px-0 lg:py-0 ${className}`}
    >
      {/* Background blur effects */}
      <div className="absolute -left-[100px] -top-[30px] w-[200px] h-[150px] rounded-full bg-[rgba(47,152,255,0.63)] blur-[150px] lg:-left-[169px] lg:-top-[46px] lg:w-[337px] lg:h-[293px] lg:blur-[265.7px]" />
      <div className="absolute right-[-100px] bottom-[20px] w-[200px] h-[150px] rounded-full bg-[rgba(47,152,255,0.63)] blur-[150px] lg:left-[840px] lg:top-[209px] lg:w-[337px] lg:h-[293px] lg:blur-[265.7px]" />
      <div className="absolute left-1/2 bottom-[40px] w-[30px] h-[25px] bg-white blur-[30px] transform -translate-x-1/2 lg:left-[536px] lg:top-[232px] lg:w-[58px] lg:h-[51px] lg:blur-[59.79px] lg:transform-none" />

      {/* Content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center gap-6 z-10 lg:absolute lg:left-[166px] lg:top-[74px] lg:w-[798px] lg:h-[316px]">
        {/* Header section */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Main heading */}
            <h1 className="w-full text-white text-center font-urbanist text-xl font-bold leading-[120%] sm:text-2xl md:text-3xl lg:w-[798px] lg:text-[50px] lg:font-[700]">
              Let's Design a Page That Converts
            </h1>

            {/* Subtitle */}
            <p className="w-full text-[rgba(255,255,255,0.7)] text-center font-urbanist text-sm font-normal leading-[145%] lg:w-[598px] lg:text-lg">
              Whether you're starting fresh or need a conversion boost, we'll
              craft a landing page tailored to your goals, audience, and brand.
            </p>
          </div>

          {/* Avatar section */}
          <div className="flex w-auto p-[6px_8px] flex-col items-center gap-[7px] rounded-[7px] lg:w-[214.387px]">
            {/* Avatar group */}
            <div className="flex items-start gap-[-8px] relative lg:gap-[-10.677px]">
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
            <div className="w-auto h-auto text-[#DFE2E5] text-center font-urbanist text-xs font-medium leading-5 lg:w-[206.885px] lg:h-[21.749px] lg:text-sm">
              Trusted By Over 100+k Clients
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 w-full lg:flex-row lg:gap-4 lg:w-auto">
            <button className="flex w-full h-[50px] p-[0_3px] justify-center items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)] hover:opacity-90 transition-opacity cursor-pointer lg:w-[248px] lg:justify-end">
              <span className="text-white text-center font-urbanist text-sm font-medium leading-[23px] capitalize lg:text-base">
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
              className="flex w-full h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 bg-[#FAFAFA] rounded-[33px] border border-solid border-[#D2D2D2] hover:bg-[#F0F0F0] focus:outline-2 focus:outline-offset-2 focus:outline-neutral-0 transition-colors duration-200 lg:w-[280px]"
              type="button"
              aria-label="Book an appointment to discuss your business growth"
            >
              <span className="font-urbanist font-medium text-[#091e42] text-sm leading-4 whitespace-nowrap lg:text-base">
                Book An Appointment
              </span>

              <img
                className="w-5 h-5"
                alt=""
                src="/SEO/ca/arrow-right-2.svg"
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
