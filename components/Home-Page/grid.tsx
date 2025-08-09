"use client";
import React from "react";
import Button from "../registry/seraui/button";
import { ArrowRight } from "lucide-react";

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
        backgroundSize: "80px 80px",
        animation: "moveGrid 20s linear infinite",
        transform: "none",
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      {/* Keyframes for the animation */}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  );
};

// Main App Component
export default function GridBackgroundView() {
  const avatars = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
  ];
  return (
    <div className="relative w-full h-screen bg-[#0d0f13] overflow-hidden">
      <GridBackground />

      {/* Main Content */}
      <div className="relative z-10 style={{ position: 'absolute', top: '119px'">
        {/* Hero Section */}
        <div className="flex items-center justify-between w-[385px] h-[33px] p-[5px] border border-[#A2D1FF] rounded-full absolute top-[87px] left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-start ">
            {avatars.map((src, idx) => (
              <span
                key={idx}
                className="h-[22px] w-[22px] rounded-full overflow-hidden flex-shrink-0 ml-[-3px]"
              >
                <img
                  src={src}
                  alt={`avatar-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </span>
            ))}
          </div>
          <span className="text-white font-urbanist font-medium text-[12px] leading-[23px] tracking-[0.5%] uppercase ml-2 w-[252px] h-[23px]">
            We Grow Brands with SEO, Ads & Design{" "}
          </span>
        </div>
        <div className="text-center px-8 pt-[120px] mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 leading-tight font-urbanist">
            <span className="text-white">
              Custom SEO That Powers Your Rise to{" "}
            </span>
            <span style={{ color: "#1D8FFF" }}>#1 </span>
            <span className="text-white">Online</span>
          </h1>
          <p className="text-[#D2D2D2] text-base mb-11 max-w-2xl mx-auto font-urbanist">
            Our data-driven SEO approach combines in-depth keyword research,
            technical optimization, and content strategy. We help you
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              className=" px-[3px] py-3 gap-[10px] h-[50px] rounded-full font-urbanist relative overflow-hidden "
              style={{
                background: "#1D8FFF",
                boxShadow: "0 4px 14.7px rgba(47, 152, 255, 0.63)",
              }}
            >
              <span className="text-white w-[190px] h-[23px]">
                Launch my SEO campaign
              </span>
              <div className="ml-3 p-3 h-[44px] w-[44px]  rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF] flex items-center justify-center">
                <ArrowRight
                  className="h-4 w-4 text-[#1D8FFF]"
                  strokeWidth={2}
                />
              </div>
            </Button>
            <Button
              className="py-3 h-[50px] rounded-full font-urbanist relative overflow-hidden flex items-center justify-center gap-2"
              style={{
                background: "#ffffff",
                boxShadow: "0 4px 14.7px rgba(255, 255, 255, 0.63)",
              }}
            >
              <span className="inline-flex items-center gap-[9px] text-neutral-900 w-[190px] h-[23px]">
                <span>Meet Our Experts</span>
                <ArrowRight
                  className="h-4 w-4 text-[#091E42]"
                  strokeWidth={1.75}
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
