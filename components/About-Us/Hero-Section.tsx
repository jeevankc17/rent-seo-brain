"use client";
import React from "react";
import type { NextPage } from "next";

import Image from "next/image";
export type Frame2121458408Type = {
  className?: string;
};

// Grid Background Component (from Hero Section)
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

const HeroSection: NextPage<Frame2121458408Type> = ({ className = "" }) => {
  return (
    <div className="relative w-full h-[922px] bg-neutral-900 overflow-hidden">
      {/* Replace static grid with animated GridBackground */}
      <GridBackground />

      {/* Background Blur Effects */}
      <div className="absolute left-0 top-[722px] lg:top-[722px] md:top-[500px] sm:top-[400px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />
      {/* <div className="absolute left-[150px] lg:left-[303px] top-[260px] lg:top-[260px] md:top-[200px] sm:top-[150px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}
      {/* <div className="absolute right-[50px] lg:right-[125px] top-0 w-[150px] lg:w-[244px] h-[130px] lg:h-[226px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}

      {/* Center blur effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[260px] w-[154px] h-[142px] rounded-full bg-primary-300/20 blur-[290px]" />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center px-4 sm:px-8 lg:px-[157px] pt-8 lg:pt-[78px] min-h-screen">
        {/* Header Section */}
        <div className="flex w-full max-w-[766px] flex-col justify-center items-center gap-8 lg:gap-11 mb-8 lg:mb-16">
          <div className="flex w-full max-w-[702px] flex-col justify-center items-center gap-4 lg:gap-5">
            {/* Brand Badge */}
            {/* <div className="flex p-[5px] items-center gap-2 lg:gap-[9px] rounded-[45px] border border-primary-75"> */}
            {/* {/* <div className="flex items-start gap-[-5px] lg:gap-[-6.874px]"> */}
            {/* {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className={`w-[18px] lg:w-[21.395px] h-[18px] lg:h-[21.395px] rounded-full bg-primary-300 ${i > 1 ? 'border border-grey-50 -ml-[5px] lg:-ml-[6.874px]' : ''}`} />
            ))} */}
            {/* </div>  */}
            <div className="flex items-center justify-start gap-[9px] h-[33px] border border-white  p-[5px] rounded-[45px]">
              <div className="flex items-start gap-[-8px] lg:gap-[-10.677px]">
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
                    className={`relative w-[25px] h-[25px] rounded-full overflow-hidden
                   ${
                     index > 0
                       ? "border-[1.2px] lg:border-[1.602px] border-grey-50 -ml-[8px] lg:-ml-[10.677px]"
                       : ""
                   }`}
                  >
                    <Image
                      src={imagePath}
                      alt={`Review avatar ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 28px, 33.231px"
                      priority={index < 2} // Load first two images immediately
                    />
                  </div>
                ))}
              </div>
              <span className="text-white text-[10px] lg:text-[12px] font-medium leading-[20px] lg:leading-[23px] tracking-[0.06px] uppercase font-sans">
                The SEO Playbook for Modern Brands.
              </span>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-3 lg:gap-4">
              <h1 className="w-full text-center text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-[36px] sm:leading-[46px] lg:leading-[57px] font-sans">
                <span className="text-white">We </span>
                <span className="text-primary-300">Grow Brands</span>
                <span className="text-white">
                  {" "}
                  By Ranking,Designing, and Promoting
                </span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] font-sans">
                Our team is on a mission to help startups, agencies, and
                enterprises thrive online with custom strategies that deliver
                results.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 lg:gap-[13px] w-full max-w-[520px]">
            <button className="flex w-full sm:w-[240px] lg:w-[273px] h-[45px] lg:h-[50px] px-[3px] py-0 justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[35px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <span className="text-white text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] capitalize font-sans">
                Meet The Team
              </span>
              <div className="flex p-2 lg:p-3 items-center gap-[10px] rounded-[24px] lg:rounded-[34px] border border-primary-75 bg-primary-50">
                <svg
                  width="16"
                  height="16"
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

            <button className="flex w-full sm:w-[180px] lg:w-[220px] h-[45px] lg:h-[50px] px-4 lg:px-[19px] py-[10px] justify-center items-center gap-2 lg:gap-[7px] rounded-[25px] lg:rounded-[33px] border border-grey-200 bg-grey-50">
              <span className="text-[#091E42] text-sm lg:text-base font-medium leading-[100%] capitalize font-sans">
                Our Success Stories
              </span>
              <svg
                width="16"
                height="16"
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

        {/* Image Section */}
        <div
          className={
            "w-[999.1px] max-w-full h-[790px]  text-left text-[22px] text-white font-[Urbanist]"
          }
        >
          <div className="absolute top-[0px] left-[calc(50%_-_394.55px)] [filter:blur(50.6px)] rounded-[50%] bg-[rgba(0,132,255,0.09)] w-[790px] h-[790px]" />
          <div className="absolute top-[503px] left-[calc(50%_-_499.55px)] flex flex-row items-center justify-start gap-[27px]">
            <div className="w-[349.1px] relative h-[342px] overflow-hidden  flex items-center justify-center">
              <Image
                className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.044)]"
                width={349.1}
                height={342}
                sizes="100vw"
                alt=""
                src="/About/left.png"
              />
            </div>
            <div className="w-[275px] shadow-[0px_0px_12.7px_#fff] rounded-[379.5px] bg-Foundation-Neutral-Scale-N0 border-[rgba(47,152,255,0.63)] border-solid border-[12.1px] box-border flex flex-row items-center justify-center py-[30.8px] px-[33px]">
              <div className="relative leading-[110%] capitalize font-medium">
                Rent SEO Brain
              </div>
            </div>
            <div className="w-[321px] relative h-[342px] overflow-hidden  flex items-center justify-center">
              <Image
                className="w-full h-full object-cover absolute left-[7px] top-[0px] [transform:scale(1.047)]"
                width={321}
                height={342}
                sizes="100vw"
                alt=""
                src="/About/right.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
