"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { Check, Star, ArrowRight } from "lucide-react";
import Button from "@components/registry/seraui/button";

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
      className={`relative w-full bg-[#0d0e12] max-w-full h-[960px] overflow-hidden text-left text-[22px] text-[#0a1519] font-[Urbanist] ${className}`}
    >
      <div>
        {/* Replace static grid with animated GridBackground */}
        <GridBackground />
      </div>

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
            {/* className="flex items-center justify-start w-[365px] h-[33px] p-[5px] border  rounded-[45px] absolute left-1/2 transform -translate-x-1/2 gap-[9px]" */}
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
                    className={`relative w-[25px]  h-[25px]  rounded-full overflow-hidden
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
              <span className="text-white font-urbanist font-medium text-[12px] leading-[23px] tracking-[0.5%] uppercase w-[256px] h-[23px]">
                The SEO Playbook for Modern Brands.
              </span>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-3 lg:gap-4">
              <h1 className="w-full text-center text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-[36px] sm:leading-[46px] lg:leading-[57px] font-sans">
                <span className="text-white">Rank Smarter with </span>
                <span className="text-primary-300">SEO Tips</span>
                <span className="text-white"> That Work</span>
              </h1>
              <p className="w-full max-w-[640px] text-grey-200 text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] font-sans">
                From keyword research to link building, get actionable advice
                and case studies to grow your organic reach.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 lg:gap-[13px] w-full max-w-[520px]">
            <button className="flex w-full sm:w-[240px] lg:w-[273px] h-[45px] lg:h-[50px] px-[3px] py-0 justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[35px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <span className="text-white text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] capitalize font-sans">
                Boost Your SEO Knowledge
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
                Read the Trending
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
      </div>

      <section>
        <div className="absolute top-[0px] left-[0px] w-[1419.5px] h-[1041px] overflow-hidden flex items-center justify-center">
          <Image
            className="w-full h-full object-cover absolute left-[10px] top-[122px] [transform:scale(1.014)]"
            width={1419.5}
            height={1041}
            sizes="100vw"
            alt=""
            src="/Home-Page/Hero-Section/public/bg1@2x.png"
          />
        </div>
        <div className="absolute top-[260px] left-[643px] w-[154px] h-[142px]" />
        <div className="absolute top-[699px] left-[112px] w-[1248px] h-[525.7px]" />
        <div className="absolute top-[84px] left-[calc(50%_-_624px)] w-[1248px] h-[922px]">
          <div className="absolute top-[502px] left-[0px] w-[1248px] h-[525.7px]">
            <div className="absolute top-[0px] left-[0px] w-[443.5px] h-[275px] overflow-hidden flex items-center justify-center">
              <Image
                className="w-full h-full object-cover absolute left-[0px] top-[7px] [transform:scale(1.027)]"
                width={443.5}
                height={275}
                sizes="100vw"
                alt=""
                src="/Home-Page/Hero-Section/public/left-part@2x.png"
              />
            </div>
            <div className="absolute top-[37px] left-[826px] w-[422px] h-60">
              <Image
                className="absolute top-[30px] left-[0px] rounded-[37.3px] w-[183px] h-[39.5px] object-contain"
                width={183}
                height={39.5}
                sizes="100vw"
                alt=""
                src="/Home-Page/Hero-Section/public/vector-2557.svg"
              />
              <div className="absolute top-[0px] left-[168px] shadow-[0px_4px_37.2px_rgba(47,_152,_255,_0.63)] rounded-[20px] bg-[#f8f9f9] flex flex-row items-end justify-start p-5 gap-3">
                <div className="flex flex-row items-center justify-start">
                  <Image
                    className="w-11 relative rounded-[100px] h-11 object-cover"
                    width={44}
                    height={44}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-2121457477@2x.png"
                  />
                  <Image
                    className="w-11 relative rounded-[100px] h-11 object-cover ml-[-10px]"
                    width={44}
                    height={44}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-2121457476@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    124,89K+
                  </div>
                  <div className="self-stretch relative text-base leading-[120%] text-[rgba(10,21,25,0.7)]">
                    Trusted Clients
                  </div>
                </div>
              </div>
              <div className="absolute top-[155px] left-[152px] shadow-[0px_4px_36.6px_#555] rounded-[20px] bg-[#f8f9f9] flex flex-row items-center justify-start p-5 gap-3">
                <Image
                  className="w-10 relative rounded-[39px] max-h-full object-cover"
                  width={40}
                  height={45}
                  sizes="100vw"
                  alt=""
                  src="/Home-Page/Hero-Section/public/image-139@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`SEO,Ads & Design`}</div>
                  <div className="self-stretch relative text-base leading-[120%] text-[rgba(10,21,25,0.7)]">
                    Ultimate SEO Services
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_278px)] w-[525.7px] h-[525.7px] text-center text-[12.8px] text-Foundation-Neutral-Scale-N0">
              <div className="absolute top-[0px] left-[0px] w-[525.7px] h-[525.7px]">
                <div className="absolute top-[0px] left-[calc(50%_-_262.85px)] shadow-[0px_0px_86.3px_17px_#43a2ff] rounded-[50%] bg-[rgba(255,255,255,0.02)] w-[525.7px] h-[525.7px]" />
                <div className="absolute top-[20.4px] left-[calc(50%_-_43.35px)] [filter:drop-shadow(0px_5.1px_82.9px_rgba(187,_255,_0,_0.39))] rounded-[243.7px] w-[90.6px] h-[90.6px] flex flex-col items-center justify-start py-[20.8px] px-[12.5px] box-border gap-[7.3px]">
                  <Image
                    className="w-[49.8px] rounded-[438.9px] h-[49.8px]"
                    width={49.8}
                    height={49.8}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-2121458283.svg"
                  />
                  <div className="self-stretch relative leading-[12.5px] font-medium text-white">
                    Keywords
                  </div>
                </div>
                <div className="absolute top-[93.1px] left-[calc(50%_+_104.65px)] [filter:drop-shadow(0px_5.1px_82.9px_rgba(187,_255,_0,_0.39))] rounded-[243.7px] w-[90.6px] h-[90.6px] flex flex-col items-center justify-start py-[20.8px] px-[12.5px] box-border gap-[7.3px]">
                  <Image
                    className="w-[49.8px] rounded-[438.9px] h-[49.8px]"
                    width={49.8}
                    height={49.8}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-21214582842.svg"
                  />
                  <div className="self-stretch relative leading-[12.5px] text-white font-medium">
                    Content
                  </div>
                </div>
                <div className="absolute top-[94.4px] left-[calc(50%_-_202.85px)] [filter:drop-shadow(0px_5.1px_82.9px_rgba(187,_255,_0,_0.39))] rounded-[243.7px] w-[90.6px] h-[90.6px] flex flex-col items-center justify-start py-[20.8px] px-[12.5px] box-border gap-[7.3px] text-Foundation-Neutral-Scale-N10">
                  <Image
                    className="w-[49.8px] rounded-[438.9px] h-[49.8px]"
                    width={49.8}
                    height={49.8}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-2121458284.svg"
                  />
                  <div className="self-stretch relative leading-[12.5px] text-white font-medium">
                    Analytics
                  </div>
                </div>
                <div className="absolute top-[266px] left-[calc(50%_-_236.05px)] [filter:drop-shadow(0px_5.1px_82.9px_rgba(187,_255,_0,_0.39))] rounded-[243.7px] w-[90.6px] h-[90.6px] flex flex-col items-center justify-start py-[20.8px] px-[12.5px] box-border gap-[7.3px]">
                  <Image
                    className="w-[49.8px] rounded-[438.9px] h-[49.8px]"
                    width={49.8}
                    height={49.8}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-21214582852.svg"
                  />
                  <div className="self-stretch relative leading-[12.5px] text-white font-medium">
                    Technical
                  </div>
                </div>
                <div className="absolute top-[264.1px] left-[calc(50%_+_150.55px)] [filter:drop-shadow(0px_5.1px_82.9px_rgba(187,_255,_0,_0.39))] rounded-[243.7px] w-[90.6px] h-[90.6px] flex flex-col items-center justify-start py-[20.8px] px-[12.5px] box-border gap-[7.3px]">
                  <Image
                    className="w-[49.8px] rounded-[438.9px] h-[49.8px]"
                    width={49.8}
                    height={49.8}
                    sizes="100vw"
                    alt=""
                    src="/Home-Page/Hero-Section/public/frame-2121458285.svg"
                  />
                  <div className="self-stretch relative text-white  leading-[12.5px] font-medium">
                    Design
                  </div>
                </div>
              </div>
              <Image
                className="absolute top-[135.2px] left-[135.2px] rounded-[50%] w-[259px] h-[260.3px] object-cover"
                width={259}
                height={260.3}
                sizes="100vw"
                alt=""
                src="/Home-Page/Hero-Section/public/ellipse-1683@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
