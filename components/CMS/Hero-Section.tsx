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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-3">
              <div className="flex items-start gap-[-8px] lg:gap-[-10.677px]">
                {[
                  "/Home-Page/Hero-Section/image1.jpg",
                  "/Home-Page/Hero-Section/image2.jpg",
                  "/Home-Page/Hero-Section/image3.jpg",
                  "/Home-Page/Hero-Section/image4.jpg",
                ].map((imagePath, index) => (
                  <div
                    key={imagePath}
                    className={`relative w-[28px] lg:w-[33.231px] h-[28px] lg:h-[33.231px] rounded-full overflow-hidden
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
                Trusted by 500+ Growing Clients
              </span>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-3 lg:gap-4">
              <h1 className="w-full text-center text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-[36px] sm:leading-[46px] lg:leading-[57px] font-sans">
                <span className="text-primary-300">Transform</span>
                <span className="text-white">
                  {" "}
                  Your Brand with Strategic Content{" "}
                </span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] font-sans">
                Drive explosive growth with data-driven content strategies that
                convert visitors into customers and build lasting brand
                authority in your industry.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 lg:gap-[13px] w-full max-w-[630px]">
            <button className="flex w-full sm:w-[287px] lg:w-[287px] h-[45px] lg:h-[50px] px-[3px] py-0 justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[35px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <span className="text-white text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] capitalize font-sans">
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

            <button className="flex w-full sm:w-[280px] lg:w-[228px] h-[45px] lg:h-[50px] px-4 lg:px-[19px] py-[10px] justify-center items-center gap-2 lg:gap-[7px] rounded-[25px] lg:rounded-[33px] border border-grey-200 bg-grey-50">
              <span className="text-[#091E42] text-sm lg:text-base font-medium leading-[100%] capitalize font-sans">
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
        <div className="flex w-[1129px] max-w-[1129px] h-auto lg:h-[358px]  items-start lg:items-center gap-4 lg:gap-6 flex-col lg:flex-row rounded-[11px] bg-white shadow-[0_4px_25.6px_0_rgba(47,152,255,0.37)] mb-8 lg:mb-16">
          {/* Blog Image */}
          <div className="w-full h-full flex-shrink-0 rounded-[7px] bg-cover bg-center bg-no-repeat overflow-hidden">
            <img
              src="/CMS/Hero-Section/Component45.png"
              alt="Local SEO workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content */}
          <div data-property-1="Component 43" className="self-stretch h-96 relative rounded-3xl overflow-hidden">
  <div className="w-48 px-3 py-2.5 left-[19px] top-[40px] absolute bg-white rounded-[10px] shadow-[0px_4px_16.399999618530273px_0px_rgba(0,0,0,1.00)] inline-flex justify-start items-center gap-2.5">
    <div className="p-1.5 bg-assest rounded-[58.73px] flex justify-start items-center gap-1.5">
      <div data-size="48" className="w-3.5 h-3.5 relative overflow-hidden">
        <div className="w-3 h-3 left-[1.20px] top-[1.20px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Icon-Default-Default" />
      </div>
    </div>
    <div className="w-32 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch justify-start text-slate-900 text-sm font-semibold font-['Urbanist'] capitalize leading-3">2.5k</div>
      <div className="self-stretch justify-start text-gray-500 text-xs font-medium font-['Urbanist'] capitalize leading-none">Content Pieces Published this year</div>
    </div>
  </div>
  <div className="w-48 px-3 py-3.5 left-[917px] top-[54px] absolute bg-blue-500 rounded-[10px] shadow-[0px_4px_46.099998474121094px_0px_rgba(0,0,0,1.00)] inline-flex justify-start items-center gap-2.5">
    <div className="p-1.5 bg-indigo-50 rounded-[58.73px] flex justify-start items-center gap-1.5">
      <div className="w-3.5 h-3.5 relative overflow-hidden">
        <div className="w-2.5 h-3 left-[2.33px] top-[1.17px] absolute outline outline-1 outline-offset-[-0.58px] outline-blue-500" />
        <div className="w-1 h-1 left-[8.17px] top-[1.17px] absolute outline outline-1 outline-offset-[-0.58px] outline-blue-500" />
        <div className="w-1 h-0 left-[4.67px] top-[7.58px] absolute outline outline-1 outline-offset-[-0.58px] outline-blue-500" />
        <div className="w-1 h-0 left-[4.67px] top-[9.92px] absolute outline outline-1 outline-offset-[-0.58px] outline-blue-500" />
        <div className="w-px h-0 left-[4.67px] top-[5.25px] absolute outline outline-1 outline-offset-[-0.58px] outline-blue-500" />
      </div>
    </div>
    <div className="w-32 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch justify-start text-white text-sm font-semibold font-['Urbanist'] capitalize leading-3">SEO Blog Posts</div>
      <div className="self-stretch justify-start text-neutral-300 text-xs font-medium font-['Urbanist'] capitalize leading-none">3.2% avg conversion</div>
    </div>
  </div>
  <div className="w-48 px-3 py-3.5 left-[878px] top-[313px] absolute bg-white rounded-[10px] shadow-[0px_4px_20.799999237060547px_0px_rgba(0,0,0,1.00)] inline-flex justify-start items-center gap-2.5">
    <div className="p-1.5 bg-blue-500 rounded-[58.73px] flex justify-start items-center gap-1.5">
      <div className="w-3.5 h-3.5 relative overflow-hidden">
        <div className="w-2.5 h-3 left-[2.33px] top-[1.17px] absolute outline outline-1 outline-offset-[-0.58px] outline-white" />
        <div className="w-1 h-1 left-[8.17px] top-[1.17px] absolute outline outline-1 outline-offset-[-0.58px] outline-white" />
        <div className="w-1 h-0 left-[4.67px] top-[7.58px] absolute outline outline-1 outline-offset-[-0.58px] outline-white" />
        <div className="w-1 h-0 left-[4.67px] top-[9.92px] absolute outline outline-1 outline-offset-[-0.58px] outline-white" />
        <div className="w-px h-0 left-[4.67px] top-[5.25px] absolute outline outline-1 outline-offset-[-0.58px] outline-white" />
      </div>
    </div>
    <div className="w-32 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch justify-start text-slate-900 text-sm font-semibold font-['Urbanist'] capitalize leading-3">Content Strategy</div>
      <div className="self-stretch justify-start text-neutral-500 text-xs font-medium font-['Urbanist'] capitalize leading-none">420% avg roi</div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
