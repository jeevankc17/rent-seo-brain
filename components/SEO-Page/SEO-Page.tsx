"use client";
import React from "react";
import Image from "next/image";

// Near the top of your file, import the SVGs
import SendIcon from "@/public/SEO/SEOPage/Send.svg"; // Adjust the path as necessary
import DollarIcon from "@/public/SEO/SEOPage/Dollar.svg"; // Adjust the path as necessary/Dollar sign.svg";
import SearchIcon from "@/public/SEO/SEOPage/Search.svg";
import GlobeIcon from "@/public/SEO/SEOPage/Globe.svg";

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
    </div>
  );
};

export default function SEOPage() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-900 overflow-hidden">
      {/* Replace the old grid with new GridBackground */}
      <GridBackground />

      {/* Add animation keyframes to global styles */}
      <style jsx global>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
      `}</style>

      {/* Background Blur Effects */}
      {/* <div className="absolute left-0 top-[722px] lg:top-[722px] md:top-[500px] sm:top-[400px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />
      <div className="absolute left-[150px] lg:left-[303px] top-[260px] lg:top-[260px] md:top-[200px] sm:top-[150px] w-[200px] lg:w-[345px] h-[180px] lg:h-[319px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" />
      <div className="absolute right-[50px] lg:right-[125px] top-0 w-[150px] lg:w-[244px] h-[130px] lg:h-[226px] rounded-full bg-primary-200 opacity-50 blur-[100px] lg:blur-[200px]" /> */}

      {/* Large background blur circle */}
      {/* <div className="absolute right-[20px] lg:right-[135px] top-[100px] lg:top-[131px] w-[400px] lg:w-[790px] h-[400px] lg:h-[790px] rounded-full bg-blue-500/[0.02] blur-[15px] lg:blur-[25px]" /> */}

      {/* Main Content Container */}
      <div className="relative flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-3 px-4 sm:px-8 lg:px-[157px] pt-8 lg:pt-[107px] pb-12 lg:pb-[304px] min-h-screen">
        <div className="flex w-full lg:w-[552px] flex-col items-start lg:items-end gap-12 lg:gap-20 shrink-0">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-start gap-6 lg:gap-10 w-full">
            <div className="flex flex-col justify-center items-start gap-4 lg:gap-5 w-full">
              {/* Attention Badge */}
              <div className="flex p-[5px] items-center gap-2 lg:gap-[9px] rounded-[45px] border border-primary-75 w-full sm:w-auto">
                <div className="flex px-2 lg:px-[11px] py-0 justify-center items-center gap-1 lg:gap-[6px] rounded-[39px] bg-secondary-200">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-white border-2 lg:border-4 border-secondary-300" />
                  <span className="text-white text-center text-[8px] lg:text-[10px] font-medium leading-[20px] lg:leading-[23px] tracking-[0.05px] uppercase font-sans">
                    ATTENTION
                  </span>
                </div>
                <span className="text-white text-[10px] lg:text-[12px] font-medium leading-[20px] lg:leading-[23px] tracking-[0.06px] uppercase font-sans">
                  No fluff, Just clicks that converT
                </span>
              </div>

              {/* Main Heading and Description */}
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 w-full">
                <h1 className="w-full text-[28px] sm:text-[36px] lg:text-[50px] font-bold leading-[32px] sm:leading-[40px] lg:leading-[57px] font-sans">
                  <span className="text-white">Smarter SEO for </span>
                  <span className="text-primary-300">
                    Real Business Growth.
                  </span>
                </h1>
                <p className="w-full text-grey-200 text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] font-sans">
                  We don't just focus on rankings — we focus on results. Our SEO
                  strategies are designed to drive qualified traffic, increase
                  visibility.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-start lg:justify-center items-stretch sm:items-center gap-3 lg:gap-[13px] w-full">
              <button className="flex w-full sm:w-[200px] lg:w-[243px] h-[45px] lg:h-[50px] px-[3px] py-0 justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[35px] lg:rounded-[45px] bg-primary-300 shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
                <span className="text-white text-center text-sm lg:text-base font-medium leading-[20px] lg:leading-[23px] capitalize font-sans">
                  Talk to an SEO Expert
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
                  Book an appointment
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

            {/* Review Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-3">
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
              <div className="flex flex-col items-start gap-1 lg:gap-2">
                <div className="flex items-center gap-[1px] lg:gap-[2px]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      className="lg:w-[18px] lg:h-[18px]"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.36875 16.5L5.5875 11.2313L1.5 7.6875L6.9 7.21875L9 2.25L11.1 7.21875L16.5 7.6875L12.4125 11.2313L13.6313 16.5L9 13.7063L4.36875 16.5Z"
                        fill="#FFCC00"
                      />
                    </svg>
                  ))}
                </div>
                <div className="text-white text-sm lg:text-base font-medium leading-[100%] capitalize font-sans">
                  <span className="font-bold">4.9/5</span> based on reviews
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="flex flex-col items-start gap-4 lg:gap-5 w-full">
            <p className="w-full text-grey-50 text-sm lg:text-base font-medium leading-[22px] lg:leading-[26px] capitalize font-sans">
              We saw a 300% increase in organic traffic within 4 months. Rent
              SEO Brain helped us rank on the first page for highly competitive
              keywords
            </p>
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-[50px] lg:w-[63px] h-[50px] lg:h-[63px] rounded-[10px] lg:rounded-[12.6px] bg-primary-300 flex justify-center items-center overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc34ab42bfc61416eb4f25f673bee072f%2F9cf36ca517bc4e5c8a6a0433d5bf7ea4?format=webp&width=126"
                  alt="Franklyn C."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-[1px]">
                <div className="text-neutral-60 text-sm lg:text-base font-semibold leading-[22px] lg:leading-[26px] capitalize font-sans">
                  Franklyn C.
                </div>
                <div className="text-neutral-90 text-sm lg:text-base font-medium leading-[22px] lg:leading-[26px] capitalize font-sans">
                  CEO, CraftLayer Interiors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Phone Mockup with Floating Elements */}
        <div className="w-full lg:w-[587px] h-[400px] lg:h-[603px] shrink-0 relative hidden sm:block">
          {/* Main Phone SVG */}
          <svg
            className="absolute left-[50px] lg:left-[108px] top-[-30px] lg:top-[-62px] w-[250px] lg:w-[456px] h-[350px] lg:h-[665px]"
            viewBox="0 0 458 667"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="imagePattern"
                patternUnits="userSpaceOnUse"
                width="100%"
                height="100%"
              >
                <image
                  href="frame.png" // Replace with your image path
                  width="458"
                  height="667"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>

            <path
              d="M457 220.123C457 -75.0354 1 -69.0311 1 220.123V656C1 661.523 5.47715 666 11 666H447C452.523 666 457 661.606 457 656.084V220.123Z"
              fill="url(#imagePattern)" // Use the pattern as fill
              stroke="black"
              strokeWidth="1.332"
            />
          </svg>

          {/* Search Icon - Bottom Left */}
          <div className="absolute left-[30px] lg:left-[77px] top-[200px] lg:top-[385px] w-[45px] lg:w-[73px] h-[45px] lg:h-[73px] rotate-[-8.637deg] rounded-[12px] lg:rounded-[17.033px] bg-gradient-to-b from-primary-300 to-secondary-500 shadow-[0_2px_8px_0_rgba(247,181,13,0.58)] lg:shadow-[0_3.586px_12.371px_0_rgba(247,181,13,0.58)] flex items-center justify-center">
            <Image
              src={SearchIcon}
              alt="Search icon"
              width={28}
              height={28}
              className="lg:w-[43px] lg:h-[43px]"
            />
          </div>

          {/* Globe Icon - Top Right */}
          <div className="absolute right-[10px] lg:right-[4px] top-[60px] lg:top-[121px] w-[45px] lg:w-[72px] h-[45px] lg:h-[72px] rotate-[21.087deg] rounded-[12px] lg:rounded-[17.033px] bg-gradient-to-b from-primary-300 to-secondary-500 shadow-[0_2px_8px_0_rgba(247,181,13,0.58)] lg:shadow-[0_3.586px_12.371px_0_rgba(247,181,13,0.58)] flex items-center justify-center">
            <Image
              src={GlobeIcon}
              alt="Globe icon"
              width={28}
              height={28}
              className="lg:w-[42px] lg:h-[42px]"
            />
          </div>

          {/* Top Blue Bubble with Icons */}
          <div className="absolute left-[120px] lg:left-[251px] top-0 w-[120px] lg:w-[181px] h-[60px] lg:h-[92px] rounded-full border border-black bg-primary-200 flex items-center justify-between px-[5px] lg:px-[7px]">
            {/* Send Icon */}
            <div className="ml-[8px] lg:ml-[18px]">
              <Image
                src={SendIcon}
                alt="Send icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>

            {/* Dollar Sign Circle */}
            <div className="w-[50px] lg:w-[78px] h-[50px] lg:h-[78px] rounded-full bg-white shadow-[0_2px_8px_0_rgba(247,181,13,0.58)] lg:shadow-[0_3.586px_12.371px_0_rgba(247,181,13,0.58)] flex items-center justify-center">
              <Image
                src={DollarIcon}
                alt="Dollar sign"
                width={32}
                height={32}
                className="lg:w-[48px] lg:h-[48px]"
              />
            </div>
          </div>

          {/* Dashed Line */}
          <svg
            className="absolute left-0 top-[35px] lg:top-[55px] w-[180px] lg:w-[284px] h-[50px] lg:h-[79px]"
            width="286"
            height="81"
            viewBox="0 0 286 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 80C1 80 36.8398 9.18834 83.7876 1.68817C128.458 -5.44822 144.223 45.3082 189.602 43.7091C231.317 42.2392 285 1.68817 285 1.68817"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
