"use client";

import React from "react";
import { Check, ArrowRight, Star, TrendingUp, Users } from "lucide-react";

export default function TrustSEO() {
  const benefits = [
    "10+ years of SEO expertise",
    "Industry-specific SEO strategies", 
    "Transparent reporting & ROI tracking",
    "Dedicated SEO specialists",
    "Proven success across local and national campaigns"
  ];

  const avatars = [
    "/Home-Page/Hero-Section/image1.jpg",
    "/Home-Page/Hero-Section/image2.jpg", 
    "/Home-Page/Hero-Section/image3.jpg",
    "/Home-Page/Hero-Section/image4.jpg",
    "/Home-Page/Hero-Section/image5.jpg",
    "/Home-Page/Hero-Section/image6.jpg"
  ];

  return (
    <div className="relative w-full h-[1002px] bg-[#0C0C0F] overflow-hidden">
      {/* Background blur effect */}
      <div 
        className="absolute left-[1144px] top-[277px] w-[464px] h-[403px] rounded-full opacity-63"
        style={{
          background: "rgba(47, 152, 255, 0.63)",
          filter: "blur(365.84px)"
        }}
      />

      {/* Main content container */}
      <div className="flex w-[1128px] flex-col items-center gap-[65px] absolute left-[156px] top-[72px] h-[858px]">
        
        {/* Header section */}
        <div className="flex w-[622px] flex-col justify-center items-center gap-4">
          {/* Badge */}
          <div className="flex w-[264px] py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C]">
            <Star className="w-[15px] h-[15px] fill-[#E8F4FF] text-[#E8F4FF]" />
            <span className="text-white font-urbanist text-[14px] font-medium leading-[23px] capitalize">
              SEO done right, from day one.
            </span>
          </div>

          {/* Title and description */}
          <div className="flex h-[176px] flex-col justify-center items-center gap-4 w-full">
            <h2 className="text-[#E8F4FF] text-center font-urbanist text-[50px] font-bold leading-[57px]">
              Why Businesses Trust Us With Their SEO
            </h2>
            <p className="text-[#EBEDEF] text-center font-urbanist text-[16px] font-normal leading-[23px]">
              We blend data, creativity, and strategy to deliver sustainable SEO results — not just rankings, but growth.
            </p>
          </div>
        </div>

        {/* Main content card */}
        <div className="flex h-[568px] justify-center items-center w-full relative">
          <div
            className="w-[1128px] h-[568px] rounded-[19px] absolute left-0 top-0 overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #43A2FF -23.86%, #FFF 65.05%)"
            }}
          >
            {/* Left blur effect */}
            <div 
              className="absolute left-[-111px] top-[440px] w-[239px] h-[162px]"
              style={{
                background: "#00B45C",
                filter: "blur(150px)"
              }}
            />
            
            {/* Right blur effect */}
            <div 
              className="absolute left-[971px] top-[456px] w-[239px] h-[162px]"
              style={{
                background: "#00B45C", 
                filter: "blur(150px)"
              }}
            />

            {/* Left content - Benefits list */}
            <div className="flex w-[450px] flex-col items-start gap-6 absolute left-[55px] top-[129px] h-[300px]">
              <div className="flex flex-col items-start gap-[31px] w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 w-full">
                      <div className="flex w-[26px] h-[26px] justify-center items-center rounded-full bg-[#1D8FFF]">
                        <Check className="w-5 h-5 text-[#E8F4FF]" />
                      </div>
                      <span className="text-[#071F36] font-urbanist text-[18px] font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Avatars and CTA section */}
                <div className="flex w-[449px] items-start gap-[31px]">
                  <div className="flex flex-col items-start gap-2">
                    {/* Avatars */}
                    <div className="flex items-start gap-[-10.677px]">
                      {avatars.map((avatar, index) => (
                        <div 
                          key={index}
                          className="flex w-[33.231px] h-[33.231px] justify-center items-center rounded-full border-[1.602px] border-[#FAFAFA] bg-gray-300 overflow-hidden"
                          style={{
                            backgroundImage: `url(${avatar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                        />
                      ))}
                    </div>

                    {/* Rating stars */}
                    <div className="flex items-center gap-[-3px]">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-[18px] h-[18px] fill-[#FFCC00] text-[#FFCC00]" />
                      ))}
                    </div>
                  </div>

                  {/* Book appointment button */}
                  <button className="flex w-[220px] h-[50px] py-[10px] px-[19px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
                    <span className="text-[#091E42] font-urbanist text-[16px] font-medium capitalize">
                      Book an appointment
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#091E42]" strokeWidth={1.75} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right content - Image and statistics */}
            <div className="w-[477px] h-[500px] absolute left-[650px] top-[0px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8349f39baf005afe759a6ccdd8cae96c680b707c?width=1050"
                alt="SEO Expert"
                className="w-[477px] h-[450px] object-cover"
              />
              
              {/* Bottom line accent */}
              <div className="absolute left-[154px] top-[420px] w-[168px] h-[15px] rounded-full bg-[#0C0C0F]" />

              {/* Statistics overlay */}
              <div className="flex w-[285px] flex-col items-center gap-[21px] absolute left-[96px] top-[93px] h-[236px]">
                <div className="flex w-[285px] flex-col items-center gap-[18px]">
                  <div className="flex w-[246px] flex-col items-center gap-[17px]">
                    {/* Success checkmark */}
                    <div className="flex p-[10px] justify-center items-center rounded-full bg-[#00B45C]">
                      <Check className="w-[26px] h-[26px] text-white" strokeWidth={2.16667} />
                    </div>

                    {/* Traffic increase badge */}
                    <div 
                      className="flex py-[7px] px-[14px] justify-between items-center w-full rounded-[435px]"
                      style={{ background: "rgba(0, 180, 92, 0.17)" }}
                    >
                      <div className="flex justify-center items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-[#00B45C]" strokeWidth={2} />
                        <span className="text-[#5C5F66] text-center font-urbanist text-[16px] font-semibold capitalize">
                          Organic Traffic
                        </span>
                      </div>
                      <span className="text-[#00B45C] text-center font-urbanist text-[16px] font-semibold capitalize">
                        +284%
                      </span>
                    </div>
                  </div>

                  <p className="text-[#7B7B7B] text-center font-urbanist text-[16px] font-semibold capitalize w-full">
                    We increased organic traffic by 210% in 3 months.
                  </p>
                </div>

                {/* CTA button */}
                <button 
                  className="flex h-[50px] py-0 px-8 justify-center items-center gap-[10px] w-full rounded-[45px] bg-[#1D8FFF]"
                  style={{ boxShadow: "0 5px 14.7px 0 rgba(47, 152, 255, 0.63)" }}
                >
                  <span className="text-white text-center font-urbanist text-[16px] font-medium capitalize">
                    Talk to an SEO Expert
                  </span>
                </button>
              </div>
            </div>

            {/* Visitors stat card */}
            <div className="flex w-[194px] py-[9px] px-[14px] justify-between items-center rounded-[12px] bg-white shadow-[0_4px_11.2px_0_rgba(0,0,0,0.25)] absolute left-[524px] top-[57px] h-[62px]">
              <div className="flex p-[10px] justify-center items-center rounded-full bg-[#A2D1FF]">
                <Users className="w-6 h-6 text-[#1464B3]" strokeWidth={2} />
              </div>
              <div className="flex w-[103px] flex-col items-start gap-2">
                <span className="text-[#132A40] font-urbanist text-[18px] font-semibold leading-[16px]">
                  15,0000 +
                </span>
                <span className="text-[#405364] font-urbanist text-[14px] font-normal leading-[16px]">
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
