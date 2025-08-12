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
    <div className="relative w-full h-[1041px] bg-neutral-900 overflow-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Background Blur Effects */}
      {/* <div className="absolute left-0 top-[722px] w-80 h-80 opacity-50 bg-blue-400 rounded-full blur-[200px]" />
      <div className="absolute left-[299px] top-[260px] w-80 h-80 opacity-50 bg-blue-400 rounded-full blur-[200px]" /> 
      <div className="absolute left-[1156px] top-0 w-60 h-56 opacity-50 bg-blue-400 rounded-full blur-[200px]" /> */}

      {/* Radial Gradient Overlay */}
      {/* <div className="absolute left-[18px] top-[153px] w-[1422px] h-[888px] opacity-50 overflow-hidden">
        <div className="absolute left-[-9px] top-0 w-[1440px] h-[1440px]">
          <div 
            className="absolute left-0 top-0 w-[1440px] h-[1197px]"
            style={{
              background: 'radial-gradient(ellipse 100% 52.19% at 50% 0%, black 0%, rgba(0, 0, 0, 0) 95%)'
            }}
          />
        </div>
      </div> */}

      {/* Hero Content */}
      <main className="absolute left-1/2 top-[51px] -translate-x-1/2 w-[661px] flex flex-col items-center gap-11 z-10">
        {/* Text Content */}
        <div className="w-[630px] flex flex-col items-center gap-5">
          <div className="w-[630px] flex flex-col items-center gap-4">
            <h1 className="text-center text-white text-5xl font-bold font-urbanist leading-[57px]">
              Let's Talk SEO That Works & Grow
            </h1>
            <p className="text-center text-neutral-300 text-base font-medium font-urbanist leading-snug">
              Reach out to the Rent SEO Brain team for product support,
              partnerships, or custom SEO tool access. We typically reply within
              24 hours.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Primary CTA */}
          <button className="flex items-center gap-2.5 w-52 h-12 px-[3px] bg-primary-300 hover:bg-blue-600 rounded-[45px] shadow-[0px_4px_14.7px_rgba(47,152,255,0.63)] transition-colors">
            <span className="text-center text-white text-base font-medium font-urbanist capitalize leading-snug flex-1">
              Send a Message
            </span>
            <div className="p-3 bg-indigo-50 border border-blue-300 rounded-[34px] flex items-center justify-center">
              <ArrowIcon className="w-5 h-5 text-blue-500" />
            </div>
          </button>

          {/* Secondary CTA */}
          <button className="flex items-center gap-1.5 w-56 h-12 px-5 py-2.5 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-[33px] transition-colors">
            <span className="text-sky-950 text-base font-medium font-urbanist capitalize">
              Schedule a Call
            </span>
            <ArrowIcon className="w-5 h-5 text-sky-950" />
          </button>
        </div>
      </main>

      {/* Background decorative circle */}
      <div className="absolute left-[325px] top-[617px] w-[790px] h-[790px] bg-sky-500/10 rounded-full blur-xl" />

      {/* Contact Form/Image Placeholder */}
      <div className="absolute left-[156px] top-[461px] w-[1128px] h-96 z-10">
        <Image
          src="/Blog/Hero-Section/Component.png" // Replace with your contact form image
          alt="Contact Form"
          width={1128}
          height={407}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
