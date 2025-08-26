"use client";
import React from "react";
import Image from "next/image";

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

export default function CMS() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-900 overflow-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Background Blur Effects */}
      <div className="absolute left-0 top-[400px] md:top-[500px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />
      <div className="absolute right-0 top-0 w-[150px] lg:w-[244px] h-[130px] lg:h-[226px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />

      {/* Center blur effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[260px] w-[154px] h-[142px] rounded-full bg-primary-300/20 blur-[290px]" />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[157px] pt-8 md:pt-12 lg:pt-[78px] min-h-fit max-w-full pb-8 md:pb-16 lg:pb-24">
        {/* Header Section */}
        <div className="flex w-full max-w-[766px] flex-col justify-center items-center gap-6 sm:gap-10 lg:gap-11 mb-6 sm:mb-8 lg:mb-16">
          <div className="flex w-full max-w-[702px] flex-col justify-center items-center gap-4 lg:gap-5">
            {/* Brand Badge */}
            <div className="flex items-center justify-center gap-[9px] h-[33px] border border-white p-[5px] sm:p-[10px] rounded-[45px]">
              <div className="flex items-center gap-2">
                <div className="flex items-start gap-[-8px] lg:gap-[-10.677px]">
                  {[
                    "/Home-Page/Hero-Section/image1.jpg",
                    "/Home-Page/Hero-Section/image2.jpg",
                    "/Home-Page/Hero-Section/image3.jpg",
                    "/Home-Page/Hero-Section/image4.jpg"
                  ].map((imagePath, index) => (
                    <div
                      key={imagePath}
                      className={`relative w-[25px] h-[25px] rounded-full overflow-hidden ${
                        index > 0 ? "border-[1.2px] lg:border-[1.602px] border-grey-50 -ml-[8px] lg:-ml-[10.677px]" : ""
                      }`}
                    >
                      <Image
                        src={imagePath}
                        alt={`Client ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 28px, 33.231px"
                        priority={index < 2}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-white text-[10px] lg:text-[12px] font-medium leading-[20px] lg:leading-[23px] tracking-[0.06px] uppercase font-sans">
                  Trusted by 500+ Growing Clients
                </span>
              </div>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-4">
              <h1 className="w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-tight sm:leading-[46px] lg:leading-[57px] font-sans">
                <span className="text-primary-300">Transform</span>
                <span className="text-white">
                  {" "}
                  Your Brand with Strategic Content
                </span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-sm sm:text-base md:text-lg lg:text-base font-medium leading-relaxed sm:leading-[20px] lg:leading-[23px] font-sans">
                Drive explosive growth with data-driven content strategies that
                convert visitors into customers and build lasting brand
                authority in your industry.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 md:gap-[13px] w-full max-w-[630px]">
            <button className="flex w-full sm:w-[200px] md:w-[240px] lg:w-[273px] h-[40px] sm:h-[45px] lg:h-[50px] px-1 sm:px-2 md:px-[3px] py-0 justify-center sm:justify-end items-center gap-1 sm:gap-2 md:gap-[10px] rounded-[30px] sm:rounded-[35px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <span className="text-white text-center text-sm sm:text-base md:text-lg lg:text-base font-medium leading-normal sm:leading-[20px] lg:leading-[23px] capitalize font-sans">
                Create Content That Converts
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

            <button className="flex w-full sm:w-[160px] md:w-[180px] lg:w-[220px] h-[40px] sm:h-[45px] lg:h-[50px] px-3 sm:px-4 lg:px-[19px] py-2 sm:py-[10px] justify-center items-center gap-1 sm:gap-2 lg:gap-[7px] rounded-[20px] sm:rounded-[25px] lg:rounded-[33px] border border-grey-200 bg-grey-50">
              <span className="text-[#091E42] text-sm sm:text-base md:text-lg lg:text-base font-medium leading-[100%] capitalize font-sans">
                Explore Our Client Wins
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

        {/* Blog Card Section */}
        <div className="w-full max-w-[1129px] h-auto lg:h-[358px] flex flex-col lg:flex-row items-start gap-4 lg:gap-6 rounded-[11px] bg-white shadow-[0_4px_25.6px_0_rgba(47,152,255,0.37)] mb-8 lg:mb-16 p-4 lg:p-6">
          {/* Blog Image */}
          <div className="w-full lg:w-1/2 h-[200px] lg:h-full rounded-[7px] overflow-hidden">
            <Image
              src="/CMS/Hero-Section/Component45.png"
              alt="Local SEO workspace"
              width={564}
              height={358}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Blog Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 p-4">
            {/* Stats Card 1 */}
            <div className="w-full max-w-[192px] p-2.5 bg-white rounded-[10px] shadow-[0px_4px_16.4px_0px_rgba(0,0,0,0.1)] flex items-center gap-2.5">
              <div className="p-1.5 bg-assest rounded-full flex items-center justify-center">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 text-sm font-semibold font-sans capitalize">2.5k</span>
                <span className="text-gray-500 text-xs font-medium font-sans capitalize">
                  Content Pieces Published
                </span>
              </div>
            </div>

            {/* Stats Card 2 */}
            <div className="w-full max-w-[192px] p-2.5 bg-blue-500 rounded-[10px] shadow-lg flex items-center gap-2.5">
              <div className="p-1.5 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold font-sans capitalize">SEO Blog Posts</span>
                <span className="text-blue-100 text-xs font-medium font-sans">3.2% avg conversion</span>
              </div>
            </div>

            {/* Stats Card 3 */}
            <div className="w-full max-w-[192px] p-2.5 bg-white rounded-[10px] shadow-lg flex items-center gap-2.5">
              <div className="p-1.5 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 text-sm font-semibold font-sans capitalize">Content Strategy</span>
                <span className="text-gray-500 text-xs font-medium font-sans">420% avg ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
