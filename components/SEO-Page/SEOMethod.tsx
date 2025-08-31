"use client";
import React from "react";

export default function SEOMethod() {
  const seoSteps = [
    {
      id: "1",
      title: "Initial Consultation",
      description: "Understand your goals, challenges, and target audience",
      tags: ["Market Analysis", "Vision Allignment", "Goal Setting"],
      position: { left: "lg:left-[777px]", top: "lg:top-[361px]" },
      progress: "20%",
      progressWidth: "130px",
      stepNumber: { width: "lg:w-[74px]", text: "lg:text-[200px]" }
    },
    {
      id: "2", 
      title: "Comprehensive SEO Audit",
      description: "Analyze your website's SEO health and gaps",
      tags: ["Technical Audit", "Content Analysis", "Competitor Intelligence"],
      position: { left: "lg:left-[156px]", top: "lg:top-[726px]" },
      progress: "40%",
      progressWidth: "164px",
      stepNumber: { width: "lg:w-[118px]", text: "lg:text-[200px]" }
    },
    {
      id: "3",
      title: "Bespoke Action Plan", 
      description: "Create a tailored roadmap with clear priorities",
      tags: ["Custom Strategy", "Priority Matrix", "Timeline Planning"],
      position: { left: "lg:left-[777px]", top: "lg:top-[1019px]" },
      progress: "60%",
      progressWidth: "267px",
      stepNumber: { width: "lg:w-[105px]", text: "lg:text-[200px]" }
    },
    {
      id: "4",
      title: "Monthly Reporting",
      description: "Track your rankings, traffic, and conversions", 
      tags: ["Performance Metrics", "Growth Insights", "Next Steps"],
      position: { left: "lg:left-[156px]", top: "lg:top-[1372px]" },
      progress: "80%",
      progressWidth: "336px",
      stepNumber: { width: "lg:w-[120px]", text: "lg:text-[200px]" }
    },
    {
      id: "5",
      title: "Adjust Strategy",
      description: "Refine based on performance and algorithm updates",
      tags: ["Strategy Refinement", "Opportunity Capture", "Future Planning"],
      position: { left: "lg:left-[777px]", top: "lg:top-[1749px]" },
      progress: "100%", 
      progressWidth: "390px",
      stepNumber: { width: "lg:w-[118px]", text: "lg:text-[200px]" }
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0C0C0F] overflow-hidden px-4 py-8 lg:px-0 lg:py-0 lg:h-[2076px]">
      {/* Background blur effect */}
      <div 
        className="absolute w-[300px] h-[260px] rounded-full blur-[200px] opacity-63 right-4 top-32 lg:w-[464px] lg:h-[403px] lg:blur-[365.84px] lg:right-[156px] lg:top-[277px]"
        style={{
          background: 'rgba(47, 152, 255, 0.63)'
        }}
      />

      {/* Header Section */}
      <div className="relative w-full max-w-[552px] mx-auto flex flex-col justify-center items-start gap-4 mb-16 lg:top-[72px] lg:w-[552px] lg:h-[225px] lg:mb-0">
        {/* Badge */}
        <div className="flex w-auto py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C] lg:w-[274px]">
          <svg 
            width="16" 
            height="15" 
            viewBox="0 0 16 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-[15px] h-[15px] flex-shrink-0"
          >
            <path 
              d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" 
              fill="#E8F4FF"
            />
          </svg>
          <div className="text-[#E8F4FF] font-urbanist text-[12px] font-medium leading-[20px] lg:text-[14px] lg:leading-[23px]">
            Smarter steps for stronger rankings.
          </div>
        </div>

        {/* Main heading and description */}
        <div className="flex h-auto flex-col justify-center items-start gap-4 w-full lg:h-[176px]">
          <h1 className="w-full text-[#E8F4FF] font-urbanist text-xl font-bold leading-[24px] sm:text-2xl md:text-3xl lg:text-[50px] lg:leading-[57px] lg:w-[593px]">
            The SEO Method That Sets Us Apart
          </h1>
          <p className="w-full text-[#EBEDEF] font-urbanist text-sm font-normal leading-[20px] lg:text-[16px] lg:leading-[23px]">
            Our approach is transparent, strategic, and results-driven — built to help you climb rankings and stay there.
          </p>
        </div>
      </div>

      {/* SEO Steps */}
      {seoSteps.map((step, index) => (
        <div key={step.id} className={`relative w-full max-w-[507px] mx-auto flex flex-col items-center gap-8 mb-16 lg:absolute ${step.position.left} ${step.position.top} lg:w-[507px] lg:h-[235px] lg:gap-[33px] lg:mb-0`}>
          <div className="h-auto w-full relative lg:h-[157px]">
            <div className="relative pl-16 pt-8 w-full h-auto flex flex-col items-start gap-6 lg:absolute lg:left-[31px] lg:top-[40px] lg:w-[476px] lg:h-[117px] lg:gap-[25px] lg:pl-0 lg:pt-0">
              <div className="flex flex-col items-start gap-3 w-full lg:gap-[13px]">
                <h3 className="w-full text-white font-urbanist text-lg font-semibold leading-[22px] lg:text-[24px] lg:leading-[23px]">
                  {step.title}
                </h3>
                <p className={`w-full font-urbanist text-base font-normal leading-[22px] lg:text-[18px] lg:leading-[23px] ${step.id === '1' ? 'text-white' : 'text-[#C9C9C9]'}`}>
                  {step.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full lg:flex-row lg:items-center lg:gap-[13px]">
                {step.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="flex w-auto py-[5px] justify-center items-center gap-[10px] rounded-[456px] bg-[rgba(255,255,255,0.10)] lg:w-[150px]">
                    <div className="text-white text-center font-urbanist text-[12px] font-normal leading-[20px] lg:text-[14px] lg:leading-[23px]">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Step number */}
            <div className={`absolute left-0 top-0 w-[50px] h-[23px] text-[120px] font-normal leading-[23px] font-urbanist ${step.stepNumber.width} ${step.stepNumber.text}`} style={{ color: 'rgba(67, 162, 255, 0.15)' }}>
              {step.id}
            </div>
            {/* Connecting line for step 1 */}
            {step.id === '1' && (
              <svg 
                className="hidden lg:block absolute left-[-565px] top-[43px] w-[569px] h-[143px]"
                width="571" 
                height="146" 
                viewBox="0 0 571 146" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M569.5 1.5H1V144.5" 
                  stroke="url(#paint0_linear_step1)" 
                  strokeOpacity="0.24" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="paint0_linear_step1" x1="285.25" y1="1.5" x2="285.25" y2="144.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2F98FF"/>
                    <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
          {/* Progress section */}
          <div className="flex w-full max-w-[447px] flex-col items-start gap-3 lg:w-[447px] lg:gap-[13px]">
            <div className="w-full text-[#8D8D8D] font-urbanist text-sm font-medium leading-[100%] lg:text-[16px]">
              Journey Process
            </div>
            <div className="flex items-center gap-6 w-full lg:gap-[32px]">
              <svg 
                className="flex w-[300px] h-[0.473px] flex-col justify-center items-start lg:w-[383px]"
                width="397" 
                height="16" 
                viewBox="0 0 397 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M7 7.76367H390" 
                  stroke={`url(#paint0_bg_step${step.id})`}
                  strokeWidth="14" 
                  strokeLinecap="round"
                />
                {step.id !== '1' && (
                  <path 
                    d={`M7 7.76367L${step.progressWidth === '164px' ? '163.999 8.3629' : step.progressWidth === '267px' ? '266.998 8.75603' : step.progressWidth === '336px' ? '335.998 9.01939' : '389.997 9.22549'}`}
                    stroke={`url(#paint1_linear_step${step.id})`}
                    strokeWidth="14" 
                    strokeLinecap="round"
                  />
                )}
                {step.id === '1' && (
                  <path 
                    d="M7.02672 0.763723C3.16075 0.748967 0.0148065 3.87099 5.09024e-05 7.73695C-0.0147047 11.6029 3.10732 14.7489 6.97328 14.7636L7.02672 0.763723ZM130.973 15.2369C134.839 15.2517 137.985 12.1296 138 8.26367C138.015 4.39771 134.893 1.25176 131.027 1.23701L130.973 15.2369ZM7 7.76367L6.97328 14.7636L130.973 15.2369L131 8.23695L131.027 1.23701L7.02672 0.763723L7 7.76367Z" 
                    fill="url(#paint1_diamond_step1)"
                  />
                )}
                <defs>
                  <linearGradient id={`paint0_bg_step${step.id}`} x1="198.5" y1="7.92157" x2="198.5" y2="8.76367" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stopColor="#43A2FF" stopOpacity="0.17"/>
                  </linearGradient>
                  {step.id !== '1' && (
                    <linearGradient id={`paint1_linear_step${step.id}`} x1={step.id === '2' ? '85.4988' : step.id === '3' ? '136.998' : step.id === '4' ? '171.498' : '198.498'} y1={step.id === '2' ? '8.22118' : step.id === '3' ? '8.41775' : step.id === '4' ? '8.54942' : '8.65248'} x2={step.id === '2' ? '85.4956' : step.id === '3' ? '136.995' : step.id === '4' ? '171.495' : '198.495'} y2={step.id === '2' ? '9.06328' : step.id === '3' ? '9.25984' : step.id === '4' ? '9.39152' : '9.49458'} gradientUnits="userSpaceOnUse">
                      <stop offset="1" stopColor="#43A2FF"/>
                    </linearGradient>
                  )}
                  {step.id === '1' && (
                    <linearGradient id="paint1_diamond_step1" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                      <stop offset="0.485577" stopColor="white"/>
                      <stop offset="1" stopColor="#7ABDFF"/>
                    </linearGradient>
                  )}
                </defs>
              </svg>
              <div className="text-[#C9C9C9] font-urbanist text-sm font-medium leading-[100%] lg:text-[16px]">
                {step.progress}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Connecting Lines */}
      <svg 
        className="hidden lg:block absolute left-[215px] top-[916px] w-[533px] h-[157px]"
        width="536" 
        height="159" 
        viewBox="0 0 536 159" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1.5 1.5V79.75V158H534.5" 
          stroke="url(#paint0_linear_connecting2)" 
          strokeOpacity="0.24" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_connecting2" x1="268" y1="1.5" x2="268" y2="158" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F98FF"/>
            <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
          </linearGradient>
        </defs>
      </svg>

      <svg 
        className="hidden lg:block absolute left-[291px] top-[1222px] w-[560px] h-[85px]"
        width="562" 
        height="87" 
        viewBox="0 0 562 87" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M561 1.5V86H1" 
          stroke="url(#paint0_linear_connecting3)" 
          strokeOpacity="0.24" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_connecting3" x1="281" y1="1.5" x2="281" y2="86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F98FF"/>
            <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
          </linearGradient>
        </defs>
      </svg>

      <svg 
        className="hidden lg:block absolute left-[228px] top-[1558px] w-[490px] h-[243px]"
        width="492" 
        height="246" 
        viewBox="0 0 492 246" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1 1.5V244.5H490.5" 
          stroke="url(#paint0_linear_connecting4)" 
          strokeOpacity="0.24" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_connecting4" x1="245.75" y1="1.5" x2="245.75" y2="244.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F98FF"/>
            <stop offset="1" stopColor="#0A1519" stopOpacity="0.77"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
