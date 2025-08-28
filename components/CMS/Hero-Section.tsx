"use client";
import React from "react";
import Image from "next/image";
import AppButton from "@/utils/AppButton";

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
        backgroundSize: "96px 96px",
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
            background-position: 96px 96px;
          }
        }
      `}</style>
    </div>
  );
};

export default function CMS() {
  return (
    <div className="relative w-full bg-neutral-900 overflow-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Background Blur Effects */}
      <div className="absolute left-0 top-[400px] md:top-[500px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />
      <div className="absolute right-0 top-0 w-[150px] lg:w-[244px] h-[130px] lg:h-[226px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />

      {/* Center blur effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[260px] w-[154px] h-[142px] rounded-full bg-primary-300/20 blur-[290px]" />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center px-4 md:px-8 lg:px-[157px] pt-6 lg:pt-12 min-h-fit max-w-full pb-6 lg:pb-12">
        {/* Header Section */}
        <div className="flex w-full max-w-[766px] flex-col justify-center items-center gap-6 lg:gap-8 mb-6 lg:mb-12">
          <div className="flex w-full max-w-[702px] flex-col justify-center items-center gap-4 lg:gap-5">
            {/* Brand Badge */}
            <div className="flex items-center justify-center gap-[9px] h-[33px] border border-white p-[5px] lg:p-[10px] rounded-[45px]">
              <span className="text-white text-xs lg:text-[12px] font-medium leading-[20px] lg:leading-[23px] tracking-[0.06px] uppercase font-sans">
                The SEO Playbook for Modern Brands
              </span>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-2 lg:gap-4">
              <h1 className="w-full text-center text-xl md:text-3xl lg:text-[50px] font-bold leading-tight md:leading-[46px] lg:leading-[57px] font-sans">
                <span className="text-primary-300">Transform</span>
                <span className="text-white">
                  {" "}
                  Your Brand with Strategic Content
                </span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-sm md:text-base font-medium leading-relaxed md:leading-[20px] lg:leading-[23px] font-sans">
                Drive explosive growth with data-driven content strategies that
                convert visitors into customers and build lasting brand
                authority in your industry.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 w-full max-w-[820px]">
            <AppButton
              text="Create Content That Converts"
              variant="blue"
              size="lg"
              className="w-full md:w-[300px]"
            />
            <AppButton
              text="Explore Our Client Wins"
              variant="white"
              size="lg"
              className="w-full md:w-[250px]"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[1128px] h-auto lg:h-[407px] mt-6 lg:mt-8">
          <Image
            src="/CMS/Hero-Section/Component45.png"
            alt="Content Management System"
            width={1128}
            height={407}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
