"use client";
import type { NextPage } from "next";

export type GoogleLPType = {
  className?: string;
};

const GoogleLP: NextPage<GoogleLPType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-auto min-h-[400px] md:min-h-[600px] lg:h-[960px] bg-foundation-neutral-scale-n1000 relative overflow-hidden ${className}`}
    >
      {/* First Blur Effect - Left Side */}
      <svg
        className="absolute hidden md:block"
        style={{
          width: "400px",
          height: "300px",
          left: "-100px",
          top: "200px",
          filter: "blur(30px)"
        }}
        data-lg-style={{
          width: "803px",
          height: "593px",
          left: "-187px",
          top: "514px",
          filter: "blur(61.5px)"
        }}
        width="534"
        height="567"
        viewBox="0 0 534 567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1625_933)">
          <path
            d="M24.9142 123.37C-190.385 121.004 -180.195 286.895 -182.632 508.624C-185.069 730.353 -199.21 923.955 16.089 926.322C231.388 928.688 407.897 750.86 410.334 529.131C412.772 307.402 240.213 125.737 24.9142 123.37Z"
            fill="url(#paint0_linear_1625_933)"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1625_933"
            x="-306.715"
            y="0.345215"
            width="840.074"
            height="1049"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_1625_933" />
          </filter>
          <linearGradient
            id="paint0_linear_1625_933"
            x1="458.534"
            y1="322.476"
            x2="-401.646"
            y2="415.71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F98FF" stopOpacity="0.63" />
            <stop offset="1" stopColor="#BBFF00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Second Blur Effect - Right Side */}
      <svg
        className="absolute hidden md:block"
        style={{
          width: "400px",
          height: "300px",
          left: "calc(100% - 300px)",
          top: "300px",
          filter: "blur(30px)"
        }}
        data-lg-style={{
          width: "803px",
          height: "593px",
          left: "1139px",
          top: "1025px",
          filter: "blur(61.5px)"
        }}
        width="421"
        height="56"
        viewBox="0 0 421 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1625_935)">
          <path
            d="M332.235 123.236C116.936 120.869 127.125 286.76 124.688 508.489C122.251 730.218 108.111 923.821 323.409 926.187C538.708 928.553 715.218 750.725 717.655 528.996C720.092 307.267 547.533 125.602 332.235 123.236Z"
            fill="url(#paint0_linear_1625_935)"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1625_935"
            x="0.605469"
            y="0.210449"
            width="840.074"
            height="1049"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_1625_935" />
          </filter>
          <linearGradient
            id="paint0_linear_1625_935"
            x1="765.855"
            y1="322.341"
            x2="-94.3255"
            y2="415.575"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F98FF" stopOpacity="0.63" />
            <stop offset="1" stopColor="#BBFF00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f14a8f5bf65ace143d8cdd3ffd24736ec71fb9fc?width=2880"
        alt="Hero Section"
        className="absolute left-0 top-0 w-full h-full object-cover"
      />

      {/* Small overlay image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/77a846a4b3fb3a10d256be30e6db4b3dbd012c94?width=102"
        alt=""
        className="absolute w-6 h-6 md:w-8 md:h-8 lg:w-[51px] lg:h-[51px] aspect-square"
        style={{
          left: "50%",
          top: "90%",
          transform: "translateX(-50%)"
        }}
        data-lg-style={{
          left: "797px",
          top: "8935px",
          transform: "none"
        }}
      />
    </div>
  );
};

export default GoogleLP;
