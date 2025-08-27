"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { Check, Star, ArrowRight } from "lucide-react";
import Button from "@components/registry/seraui/button";
import { IndustryLeadersSection } from "./IndustryLeaderSection";

const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        animation: "moveGrid 20s linear infinite",
        transform: "none",
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      {/* Keyframes for the animation */}
      <style jsx>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
      `}</style>
    </div>
  );
};

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  const avatars = [
    "/Home-Page/Hero-Section/image1.jpg",
    "/Home-Page/Hero-Section/image2.jpg",
    "/Home-Page/Hero-Section/image3.jpg",
    "/Home-Page/Hero-Section/image4.jpg",
    "/Home-Page/Hero-Section/image5.jpg",
    "/Home-Page/Hero-Section/image6.jpg",
  ];
  return (
    <div
      className={`w-full max-w-[1440px] bg-neutral-900 h-auto min-h-[600px] lg:h-[960px] overflow-hidden text-left text-sm lg:text-[22px] text-[#0a1519] font-[Urbanist] ${className}`}
    >
      <div>
        {/* Replace static grid with animated GridBackground */}
        <GridBackground />
      </div>

      {/* Background Blur Effects */}
      <div className="hidden lg:block absolute left-0 top-[722px] w-[345px] h-[319px] rounded-full bg-primary-200 opacity-50 blur-[200px]" />
      {/* <div className="absolute left-[150px] lg:left-[303px] top-[260px] lg:top-[260px] md:top-[200px] sm:top-[150px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}
      {/* <div className="absolute right-[50px] lg:right-[125px] top-0 w-[150px] lg:w-[244px] h-[130px] lg:h-[226px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}

      {/* Center blur effect */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-[260px] w-[154px] h-[142px] rounded-full bg-primary-300/20 blur-[290px]" />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center px-4 sm:px-8 lg:px-[157px] pt-8 lg:pt-[78px]  lg:min-h-screen mb-0 lg:mb-[-196px]">
        {/* Header Section */}
        <div className="flex w-full max-w-[766px] flex-col justify-center items-center gap-6 lg:gap-11">
          <div className="flex w-full max-w-[702px] flex-col justify-center items-center gap-3 lg:gap-5">
            {/* className="flex items-center justify-start w-[365px] h-[33px] p-[5px] border  rounded-[45px] absolute left-1/2 transform -translate-x-1/2 gap-[9px]" */}
            <div className="flex items-center justify-start gap-2 lg:gap-[9px] h-[30px] lg:h-[33px] border border-white p-[4px] lg:p-[5px] rounded-[35px] lg:rounded-[45px]">
              <div className="flex items-start gap-[-6px] lg:gap-[-10.677px]">
                {[
                  "/Home-Page/Hero-Section/image1.jpg",
                  "/Home-Page/Hero-Section/image2.jpg",
                  "/Home-Page/Hero-Section/image3.jpg",
                  "/Home-Page/Hero-Section/image4.jpg",
                  "/Home-Page/Hero-Section/image5.jpg",
                  "/Home-Page/Hero-Section/image6.jpg",
                ].map((imagePath, index) => (
                  <div
                    key={imagePath}
                    className={`relative w-[20px] lg:w-[25px] h-[20px] lg:h-[25px] rounded-full overflow-hidden
                      ${
                        index > 0
                          ? "border-[1px] lg:border-[1.602px] border-grey-50 -ml-[6px] lg:-ml-[10.677px]"
                          : ""
                      }`}
                  >
                    <Image
                      src={imagePath}
                      alt={`Review avatar ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 20px, 25px"
                      priority={index < 2} // Load first two images immediately
                    />
                  </div>
                ))}
              </div>
              <span className="text-white font-urbanist font-medium text-[10px] lg:text-[12px] leading-[18px] lg:leading-[23px] tracking-[0.5%] uppercase w-full max-w-[200px] lg:max-w-[256px] h-auto lg:h-[23px]">
              No fluff, Just clicks that converT
              </span>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-2 lg:gap-4">
              <h1 className="w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px] font-sans">
                <span className="text-white">Rank Smarter with </span>
                <span className="text-primary-300">SEO Tips</span>
                <span className="text-white"> That Work</span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-xs lg:text-base font-medium leading-[18px] lg:leading-[23px] font-sans">
                From keyword research to link building, get actionable advice
                and case studies to grow your organic reach.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 lg:gap-[13px] w-full max-w-[520px] px-4 sm:px-0">
            <button className="flex w-full sm:w-[240px] lg:w-[273px] h-[40px] lg:h-[50px] px-[3px] py-0 justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[30px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <span className="text-white text-center text-xs lg:text-base font-medium leading-[18px] lg:leading-[23px] capitalize font-sans">
                Boost Your SEO Knowledge
              </span>
              <div className="flex p-1.5 lg:p-3 items-center gap-[10px] rounded-[20px] lg:rounded-[34px] border border-primary-75 bg-primary-50">
                <svg
                  width="14"
                  height="14"
                  className="lg:w-5 lg:h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16797 10H15.8346"
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
            </button>

            <button className="flex w-full sm:w-[180px] lg:w-[220px] h-[40px] lg:h-[50px] px-3 lg:px-[19px] py-[8px] lg:py-[10px] justify-center items-center gap-2 lg:gap-[7px] rounded-[20px] lg:rounded-[33px] border border-grey-200 bg-grey-50">
              <span className="text-[#091E42] text-xs lg:text-base font-medium leading-[100%] capitalize font-sans">
                Read the Trending
              </span>
              <svg
                width="14"
                height="14"
                className="lg:w-5 lg:h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16797 10H15.8346"
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
            </button>
          </div>
        </div>
      </div>

      {/* Insert IndustryLeadersSection below the Hero content with 96px gap */}
      <div className="flex justify-center mt-8 lg:mt-0">
        <IndustryLeadersSection />
      </div>
    </div>
  );
};

export default HeroSection;
