"use client";

import React from "react";
import { Check, ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import AppButton from "@/utils/AppButton";

export default function TrustSEO() {
  const benefits = [
    "10+ years of SEO expertise",
    "Industry-specific SEO strategies",
    "Transparent reporting & ROI tracking",
    "Dedicated SEO specialists",
    "Proven success across local and national campaigns",
  ];

  const avatars = [
    "/Home-Page/Hero-Section/image1.jpg",
    "/Home-Page/Hero-Section/image2.jpg",
    "/Home-Page/Hero-Section/image3.jpg",
    "/Home-Page/Hero-Section/image4.jpg",
    "/Home-Page/Hero-Section/image5.jpg",
    "/Home-Page/Hero-Section/image6.jpg",
  ];

  return (
    <div className="hidden lg:block relative w-full h-auto bg-[#0C0C0F] overflow-hidden py-8 lg:h-[1002px] lg:py-0">
      {/* Background blur effect */}
      <div
        className="hidden lg:block absolute lg:left-[1144px] lg:top-[277px] lg:w-[464px] lg:h-[403px] rounded-full opacity-63"
        style={{
          background: "rgba(47, 152, 255, 0.63)",
          filter: "blur(365.84px)",
        }}
      />

      {/* Main content container */}
      <div className="flex w-full max-w-[1128px] flex-col items-center gap-8 relative mx-auto px-4 lg:gap-[65px] lg:top-[72px] lg:h-[858px] lg:px-0">
        
        {/* Header section */}
        <div className="flex w-full max-w-[622px] flex-col justify-center items-center gap-3 lg:gap-4">
          {/* Badge */}
          <div className="flex w-auto py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C]">
            <Star className="w-3 h-3 fill-[#E8F4FF] text-[#E8F4FF] lg:w-[15px] lg:h-[15px]" />
            <span className="text-white font-urbanist text-xs font-medium leading-[18px] capitalize sm:text-sm lg:text-[14px] lg:leading-[23px]">
              SEO done right, from day one.
            </span>
          </div>

          {/* Title and description */}
          <div className="flex h-auto flex-col justify-center items-center gap-3 w-full lg:h-[176px] lg:gap-4">
            <h2 className="text-[#E8F4FF] text-center font-urbanist text-xl font-bold leading-[24px] sm:text-2xl md:text-3xl lg:text-[50px] lg:leading-[57px]">
              Why Businesses Trust Us With Their SEO
            </h2>
            <p className="text-[#EBEDEF] text-center font-urbanist text-sm font-normal leading-[20px] lg:text-[16px] lg:leading-[23px]">
              We blend data, creativity, and strategy to deliver sustainable SEO
              results — not just rankings, but growth.
            </p>
          </div>
        </div>

        {/* Main content card */}
        <div className="flex h-auto justify-center items-center w-full relative lg:h-[568px]">
          <div
            className="w-full h-auto rounded-[19px] relative overflow-hidden lg:w-[1128px] lg:h-[568px] lg:absolute lg:left-0 lg:top-0"
            style={{
              background:
                "linear-gradient(180deg, #43A2FF -23.86%, #FFF 65.05%)",
            }}
          >
            {/* Left blur effect */}
            <div
              className="hidden lg:block absolute lg:left-[-111px] lg:top-[440px] lg:w-[239px] lg:h-[162px]"
              style={{
                background: "#00B45C",
                filter: "blur(150px)",
              }}
            />

            {/* Right blur effect */}
            <div
              className="hidden lg:block absolute lg:left-[971px] lg:top-[456px] lg:w-[239px] lg:h-[162px]"
              style={{
                background: "#00B45C",
                filter: "blur(150px)",
              }}
            />

            {/* Left content - Benefits list */}
            <div className="flex w-full flex-col items-start gap-4 relative px-4 py-6 lg:w-[450px] lg:gap-6 lg:absolute lg:left-[55px] lg:top-[129px] lg:h-[300px] lg:px-0 lg:py-0">
              <div className="flex flex-col items-start gap-6 w-full lg:gap-[31px]">
                <div className="flex flex-col items-start gap-4 w-full lg:gap-5">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 w-full">
                      <div className="flex w-5 h-5 justify-center items-center rounded-full bg-[#1D8FFF] lg:w-[26px] lg:h-[26px]">
                        <Check className="w-3 h-3 text-[#E8F4FF] lg:w-5 lg:h-5" />
                      </div>
                      <span className="text-[#071F36] font-urbanist text-sm font-medium lg:text-[18px]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Avatars and CTA section */}
                <div className="flex w-full flex-col items-start gap-4 lg:w-[449px] lg:flex-row lg:gap-[31px]">
                  <div className="flex flex-col items-start gap-2">
                    {/* Avatars */}
                    <div className="flex items-start gap-[-8px] lg:gap-[-10.677px]">
                      {avatars.map((avatar, index) => (
                        <div
                          key={index}
                          className="flex w-6 h-6 justify-center items-center rounded-full border border-[#FAFAFA] bg-gray-300 overflow-hidden lg:w-[33.231px] lg:h-[33.231px] lg:border-[1.602px]"
                          style={{
                            backgroundImage: `url(${avatar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      ))}
                    </div>

                    {/* Rating stars */}
                    <div className="flex items-center gap-[-2px] lg:gap-[-3px]">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 fill-[#FFCC00] text-[#FFCC00] lg:w-[18px] lg:h-[18px]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Book appointment button */}
                  <AppButton
                    variant="white"
                    size="lg"
                    text="Book an appointment"
                  />
                </div>
              </div>
            </div>

            {/* Right content - Image and statistics */}
            <div className="w-full h-auto relative px-4 py-6 lg:w-[477px] lg:h-[500px] lg:absolute lg:left-[650px] lg:top-[0px] lg:px-0 lg:py-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8349f39baf005afe759a6ccdd8cae96c680b707c?width=1050"
                alt="SEO Expert"
                className="w-full h-[250px] object-cover rounded-lg lg:w-[477px] lg:h-[450px] lg:rounded-none"
                onError={(e) => {
                  e.currentTarget.src = "/SEO/ca/bottommobile.png"; // your alternative source
                }}
              />

              {/* Bottom line accent */}
              <div className="hidden lg:block absolute lg:left-[154px] lg:top-[420px] lg:w-[168px] lg:h-[15px] rounded-full bg-[#0C0C0F]" />

              {/* Statistics overlay */}
              <div className="flex w-full max-w-[285px] flex-col items-center gap-4 absolute left-1/2 transform -translate-x-1/2 top-[20px] h-auto lg:w-[285px] lg:gap-[21px] lg:left-[96px] lg:top-[93px] lg:h-[236px] lg:transform-none lg:translate-x-0">
                <div className="flex w-full flex-col items-center gap-4 lg:w-[285px] lg:gap-[18px]">
                  <div className="flex w-full max-w-[246px] flex-col items-center gap-4 lg:w-[246px] lg:gap-[17px]">
                    {/* Success checkmark */}
                    <div className="flex p-2 justify-center items-center rounded-full bg-[#00B45C] lg:p-[10px]">
                      <Check
                        className="w-5 h-5 text-white lg:w-[26px] lg:h-[26px]"
                        strokeWidth={2.16667}
                      />
                    </div>

                    {/* Traffic increase badge */}
                    <div
                      className="flex py-[7px] px-[14px] justify-between items-center w-full rounded-[435px]"
                      style={{ background: "rgba(0, 180, 92, 0.17)" }}
                    >
                      <div className="flex justify-center items-center gap-3">
                        <TrendingUp
                          className="w-5 h-5 text-[#00B45C] lg:w-6 lg:h-6"
                          strokeWidth={2}
                        />
                        <span className="text-[#5C5F66] text-center font-urbanist text-sm font-semibold capitalize lg:text-[16px]">
                          Organic Traffic
                        </span>
                      </div>
                      <span className="text-[#00B45C] text-center font-urbanist text-sm font-semibold capitalize lg:text-[16px]">
                        +284%
                      </span>
                    </div>
                  </div>

                  <p className="text-[#7B7B7B] text-center font-urbanist text-sm font-semibold capitalize w-full lg:text-[16px]">
                    We increased organic traffic by 210% in 3 months.
                  </p>
                </div>

                {/* CTA button */}
                <AppButton
                  variant="blue"
                  size="lg"
                  text="Talk to an SEO Expert"
                />
              </div>
            </div>

            {/* Visitors stat card */}
            <div className="flex w-full max-w-[180px] py-2 px-3 justify-between items-center rounded-[12px] bg-white shadow-[0_4px_11.2px_0_rgba(0,0,0,0.25)] absolute right-4 top-4 h-auto lg:w-[194px] lg:py-[9px] lg:px-[14px] lg:left-[524px] lg:top-[57px] lg:h-[62px] lg:right-auto">
              <div className="flex p-2 justify-center items-center rounded-full bg-[#A2D1FF] lg:p-[10px]">
                <Users
                  className="w-4 h-4 text-[#1464B3] lg:w-6 lg:h-6"
                  strokeWidth={2}
                />
              </div>
              <div className="flex w-auto flex-col items-start gap-1 lg:w-[103px] lg:gap-2">
                <span className="text-[#132A40] font-urbanist text-sm font-semibold leading-[14px] lg:text-[18px] lg:leading-[16px]">
                  15,0000 +
                </span>
                <span className="text-[#405364] font-urbanist text-xs font-normal leading-[14px] lg:text-[14px] lg:leading-[16px]">
                  New Visitors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
