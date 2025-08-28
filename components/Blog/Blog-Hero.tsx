"use client";
import React from "react";
import Image from "next/image";
import AppButton from "@utils/AppButton";

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

export default function BlogHero() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-900 overflow-hidden">
      {/* Replace static grid with animated GridBackground */}
      <GridBackground />

      {/* Background Blur Effects */}
      <div className="absolute left-0 top-[400px] sm:top-[500px] lg:top-[722px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />
      {/* <div className="absolute left-[150px] lg:left-[303px] top-[260px] lg:top-[260px] md:top-[200px] sm:top-[150px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}
      {/* <div className="absolute right-[50px] lg:right-[125px] top-0 w-[150px] lg:w-[244px] h-[130px] lg:h-[226px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}

      {/* Center blur effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[200px] md:top-[260px] w-[100px] md:w-[154px] h-[90px] md:h-[142px] rounded-full bg-primary-300/20 blur-[200px] md:blur-[290px]" />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center px-4 sm:px-8 lg:px-[157px] pt-8 lg:pt-[78px] min-h-screen">
        {/* Header Section */}
        <div className="flex w-full max-w-[766px] flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11 mb-6 md:mb-8 lg:mb-16">
          <div className="flex w-full max-w-[702px] flex-col justify-center items-center gap-3 md:gap-4 lg:gap-5">
            {/* className="flex items-center justify-start w-[365px] h-[33px] p-[5px] border  rounded-[45px] absolute left-1/2 transform -translate-x-1/2 gap-[9px]" */}
            <div className="flex items-center justify-start gap-[6px] md:gap-[9px] h-[28px] md:h-[33px] border border-white p-[4px] md:p-[5px] rounded-[35px] md:rounded-[45px]">
              <div className="flex items-start gap-[-6px] md:gap-[-8px] lg:gap-[-10.677px]">
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
                    className={`relative w-[18px] md:w-[23px] h-[18px] md:h-[23px] rounded-full overflow-hidden
               ${
                 index > 0
                   ? "border-[1px] md:border-[1.2px] lg:border-[1.602px] border-grey-50 -ml-[6px] md:-ml-[8px] lg:-ml-[10.677px]"
                   : ""
               }`}
                  >
                    <Image
                      src={imagePath}
                      alt={`Review avatar ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 18px, 23px"
                      priority={index < 2} // Load first two images immediately
                    />
                  </div>
                ))}
              </div>
              <span className="text-white font-urbanist font-medium text-[10px] md:text-[12px] leading-[18px] md:leading-[23px] tracking-[0.5%] uppercase w-[200px] md:w-[256px] h-[18px] md:h-[23px]">
                The SEO Playbook for Modern Brands.
              </span>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4">
              <h1 className="w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px] font-sans">
                <span className="text-white">Rank Smarter with </span>
                <span className="text-primary-300">SEO Tips</span>
                <span className="text-white"> That Work</span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-xs md:text-sm lg:text-base font-medium leading-[16px] md:leading-[20px] lg:leading-[23px] font-sans">
                From keyword research to link building, get actionable advice
                and case studies to grow your organic reach.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 md:gap-3 lg:gap-[13px] w-full max-w-[520px]">
            <AppButton
              variant="blue"
              size="lg"
              text="Boost Your SEO Knowledge"
            />

            <AppButton variant="white" size="lg" text="Read the Trending" />
          </div>
        </div>

        {/* Blog Card Section */}
        <div className="flex w-full max-w-[1129px] p-3 md:p-4 lg:p-6 items-center gap-3 md:gap-4 lg:gap-6 flex-col lg:flex-row rounded-[8px] md:rounded-[11px] bg-white shadow-[0_4px_25.6px_0_rgba(47,152,255,0.37)] mb-6 md:mb-8 lg:mb-16">
          {/* Blog Image */}
          <div className="w-full lg:w-[450px] h-[180px] md:h-[200px] lg:h-[250px] flex-shrink-0 rounded-[5px] md:rounded-[7px] bg-cover bg-center bg-no-repeat overflow-hidden">
            <img
              src="/Blog/Hero-Section/Component.png"
              alt="Local SEO workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="flex w-full lg:flex-1 flex-col items-start gap-4 md:gap-6 lg:gap-[39px] flex-shrink-0 min-w-0">
            {/* Article Header */}
            <div className="flex flex-col items-start gap-2 lg:gap-2 flex-shrink-0 w-full min-w-0">
              <div className="flex flex-col items-start gap-2 lg:gap-[9px] w-full min-w-0">
                {/* Tags */}
                <div className="flex  items-start gap-1 md:gap-2 lg:gap-[9px] flex-wrap">
                  <div className="flex py-[2px] px-2 md:py-1 md:px-3 lg:py-1 lg:px-[10px] justify-center items-center gap-1 md:gap-2 rounded-full border border-primary-300 bg-primary-50">
                    <span className="text-primary-300 text-center text-[7px] md:text-[8px] lg:text-[10px] font-normal leading-[10px] md:leading-[12px] lg:leading-[14px] font-sans">
                      Trending
                    </span>
                  </div>
                  <div className="flex py-[2px] px-2 md:py-1 md:px-3 lg:py-1 lg:px-[10px] justify-center items-center gap-1 md:gap-2 rounded-full border border-green-500 bg-green-500/17">
                    <span className="text-green-500 text-center text-[7px] md:text-[8px] lg:text-[10px] font-normal leading-[10px] md:leading-[12px] lg:leading-[14px] font-sans">
                      Local SEO
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h2 className="w-full whitespace-normal break-words text-primary-500 text-sm md:text-base lg:text-[18px] font-semibold leading-[18px] md:leading-[22px] lg:leading-[25px] font-sans">
                  Local SEO Checklist: 15 Steps to Dominate Local Search
                </h2>

                {/* Article Description */}
                <p className="w-full text-grey-400 text-xs md:text-[12px] lg:text-[14px] font-medium leading-[16px] md:leading-[18px] lg:leading-[23px] font-sans break-words whitespace-normal">
                  To improve your local search rankings and attract more
                  customers in your area, start by optimizing your Google
                  Business Profile (GBP). Claim and verify your listing,
                  ensuring your business name, address, and phone number (NAP)
                  are accurate and consistent. Choose the most relevant business
                  categories, write a keyword-rich description, and upload
                  high-quality images of your storefront,{" "}
                  <span className="text-primary-300">Read More.....</span>
                </p>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-[4px] md:gap-[6px] mt-1 md:mt-2">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0026 15.1668C11.6845 15.1668 14.6693 12.1821 14.6693 8.50016C14.6693 4.81826 11.6845 1.8335 8.0026 1.8335C4.32071 1.8335 1.33594 4.81826 1.33594 8.50016C1.33594 12.1821 4.32071 15.1668 8.0026 15.1668Z"
                    stroke="#8D8D8D"
                    strokeWidth="1.61538"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 4.5V8.5L10.6667 9.83333"
                    stroke="#8D8D8D"
                    strokeWidth="1.61538"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-grey-400 text-[9px] md:text-[10px] lg:text-[12px] font-normal leading-[14px] md:leading-[18px] lg:leading-[23px] font-sans">
                  12 min read
                </span>
              </div>
            </div>

            {/* Author and CTA */}
            <div className="flex items-center justify-between w-full min-w-0 gap-2">
              {/* Author Info */}
              <div className="flex items-center gap-2 md:gap-3 lg:gap-[15px] flex-1 min-w-0">
                <div className="w-[28px] md:w-[32px] lg:w-[40px] h-[28px] md:h-[32px] lg:h-[40px] rounded-full overflow-hidden">
                  <img
                    src="/Blog/ca/alex.png"
                    alt="Alex Thompson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-[2px] md:gap-1 lg:gap-[6px] min-w-0 flex-1">
                  <div className="text-neutral-800 text-[10px] md:text-[12px] lg:text-[14px] font-medium leading-[10px] md:leading-[12px] lg:leading-[14px] font-sans truncate w-full">
                    Alex Thompson
                  </div>
                  <div className="text-grey-500 text-[8px] md:text-[10px] lg:text-[12px] font-normal leading-[10px] md:leading-[12px] lg:leading-[14px] font-sans truncate w-full">
                    Senior SEO Strategist
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <div className="flex w-[28px] md:w-[32px] lg:w-[41px] h-[28px] md:h-[32px] lg:h-[41px] p-1 md:p-2 lg:p-[10px] justify-center items-center gap-1 md:gap-2 rounded-full border border-grey-75 bg-grey-50 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  className="md:w-5 md:h-5 lg:w-6 lg:h-6"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 17.5L17.5 7.5"
                    stroke="#1D8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 7.5H17.5V17.5"
                    stroke="#1D8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
