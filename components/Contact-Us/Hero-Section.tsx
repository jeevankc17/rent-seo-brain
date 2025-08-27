 "use client";
import React from "react";
import Image from "next/image";

// Grid Background Component
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

      {/* Animation keyframes */}
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

// Arrow Icon Component
const ArrowIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16797 10H15.8346"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4.1665L15.8333 9.99984L10 15.8332"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron Down Icon Component
const ChevronDownIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Main Hero Section Component
const HeroSection: React.FC = () => {
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
                <span className="text-white">Let's Talk </span>
                <span className="text-primary-300">SEO That Works</span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-sm md:text-base font-medium leading-relaxed md:leading-[20px] lg:leading-[23px] font-sans">
                Reach out to the Rent SEO Brain team for product support,
                partnerships, or custom SEO tool access. We typically reply within
                24 hours.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-3 md:gap-[13px] w-full max-w-[520px]">
            <button className="flex w-full md:w-[240px] lg:w-[273px] h-[40px] lg:h-[50px] px-1 md:px-[3px] py-0 justify-center md:justify-end items-center gap-1 md:gap-[10px] rounded-[30px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <span className="text-white text-center text-sm md:text-base font-medium leading-normal md:leading-[20px] lg:leading-[23px] capitalize font-sans">
                Send a Message
              </span>
              <div className="flex p-2 lg:p-3 items-center gap-[10px] rounded-[24px] lg:rounded-[34px] border border-primary-75 bg-primary-50">
                <ArrowIcon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
              </div>
            </button>

            <button className="flex w-full md:w-[180px] lg:w-[220px] h-[40px] lg:h-[50px] px-3 lg:px-[19px] py-2 lg:py-[10px] justify-center items-center gap-1 lg:gap-[7px] rounded-[20px] lg:rounded-[33px] border border-grey-200 bg-grey-50">
              <span className="text-[#091E42] text-sm md:text-base font-medium leading-[100%] capitalize font-sans">
                Schedule a Call
              </span>
              <ArrowIcon className="w-4 h-4 lg:w-5 lg:h-5 text-[#091E42]" />
            </button>
          </div>
        </div>

        {/* Contact Form/Image Placeholder */}
        <div className=" relative w-full max-w-[1128px] h-auto lg:h-[407px] mt-6 lg:mt-8">
          <Image
            src="/Blog/Hero-Section/Component.png"
            alt="Contact Form"
            width={1128}
            height={407}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
