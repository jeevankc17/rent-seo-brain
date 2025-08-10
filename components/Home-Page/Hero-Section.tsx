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
export default function HeroSection() {
  const avatars = [
    "/Home-Page/Hero-Section/image1.jpg",
    "/Home-Page/Hero-Section/image2.jpg",
    "/Home-Page/Hero-Section/image3.jpg",
    "/Home-Page/Hero-Section/image4.jpg",
    "/Home-Page/Hero-Section/image5.jpg",
    "/Home-Page/Hero-Section/image6.jpg",
  ];
  return (
    <main className="relative w-full h-full bg-neutral-900 overflow-hidden">
      <GridBackground />

      {/* Central Graphic Circle */}

      <section
        className="absolute top-[91%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                      w-[320px] h-[320px] md:w-[526px] md:h-[526px]
                      bg-black/80 rounded-full flex items-center justify-center
                      border border-blue-400 shadow-xl"
      >
        <div className="relative w-full h-[80%] flex flex-col items-center justify-center text-white text-sm">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center">
            <div className="bg-lime-400 p-2 rounded-full mb-1" />
            Keywords
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
            <div className="bg-orange-400 p-2 rounded-full mb-1" />
            Analytics
          </div>
          <div className="absolute top-1/2 left-2 -translate-y-1/2 text-center">
            <div className="bg-white p-2 rounded-full mb-1" />
            Content
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 text-center">
            {/* <div className="bg-blue-500 p-2 rounded-full mb-1" /> */}
            <img
              src="image5.jpg"
              className="absolute top-1/2 right-2 -translate-y-1/2 text-center"
              alt="center"
            />
            Tools
          </div>
          <img
            src="image5.jpg"
            className="w-[260px] h-[260px] rounded-full object-cover border border-white mt-4"
            alt="center"
          />
        </div>
      </section>

      {/* left part */}
      <section className="ml-[112px] w-[443.5px] h-[275px] absolute top-[699px] border text-red-800 border-[#A2D1FF]  bg-[#0B0B0B]">
        Hello
      </section>

      {/* right part */}

      <section className="ml-[112px] w-[422px] h-[240px] absolute top-[736px] text-red-800 right-0 border border-[#A2D1FF]  bg-[#0B0B0B]">
        Hello
      </section>

      {/* Hero Section */}
      <section className="absolute top-[78px] ml-[337px] mr-[316.46px] border border-red-700 w-[766px] h-[323px] z-10">
        <div className="w-[702px] h-[229px] mx-[32px] border border-blue-500">
          <div className="flex items-center justify-start w-[365px] h-[33px] p-[5px] border border-[#A2D1FF] rounded-[45px] absolute left-1/2 transform -translate-x-1/2 gap-[9px]">
            <div className="flex items-center justify-start pl-[5px] w-[94px] h-[21.4px]">
              {avatars.map((src, idx) => (
                <span
                  key={idx}
                  className="h-[21.4px] w-[21.4px] rounded-full overflow-hidden flex-shrink-0 ml-[-6.87px]"
                >
                  <img
                    src={src}
                    alt={`avatar-${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </span>
              ))}
            </div>
            <span className="text-white font-urbanist font-medium text-[12px] leading-[23px] tracking-[0.5%] uppercase w-[256px] h-[23px]">
              We Grow Brands with SEO, Ads & Design{"  "}
            </span>
          </div>

          <div className="w-[630px] h-[176px] ml-[36px] mr-[36px] border border-green-600 gap-[16px] mt-[53px] flex flex-col items-center justify-center">
            <span className="w-[630px] h-[114px] text-white text-[50px] font-bold leading-[57px] text-center">
              Custom SEO That Powers Your Rise to{" "}
              <span style={{ color: "#1D8FFF" }}>#1 </span> Online
            </span>
            <span
              className="
                block
                w-[640px] h-[46px]
                text-[16px] font-medium
                leading-[23px]
                text-grey-300
                text-center
                align-center
              "
            >
              Our data-driven SEO approach combines in-depth keyword research,
              technical optimization, and content strategy.
            </span>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-[13px] justify-center items-center pt-[44px] mx-[130px]">
          <Button
            className=" px-[3px] py-3 gap-[10px] h-[50px] rounded-full font-urbanist relative overflow-hidden "
            style={{
              background: "#1D8FFF",
              boxShadow: "0 1px 8.7px rgba(47, 152, 255, 0.63)",
            }}
          >
            <span className="text-white w-[190px] h-[23px]">
              Launch my SEO campaign
            </span>
            <div className="ml-3 p-3 h-[44px] w-[44px]  rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF] flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-[#1D8FFF]" strokeWidth={2} />
            </div>
          </Button>
          <Button
            className="py-3 h-[50px] rounded-full font-urbanist relative overflow-hidden flex items-center justify-center gap-2"
            style={{
              background: "#ffffff",
              boxShadow: "0 1px 8.7px rgba(255, 255, 255, 0.63)",
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
      </section>
    </main>
  );
}
