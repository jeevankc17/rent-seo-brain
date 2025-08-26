"use client";
import React from "react";

export default function ImageSection() {
  return (
    <div className="relative w-full max-w-[1118px] h-auto lg:h-[639px] flex-shrink-0">
      {/* Left Section - Phone with gradient background */}
      <div className="relative lg:absolute left-0 top-0 flex w-full lg:w-[552px] h-auto lg:h-[639px] pt-[1px] flex-col justify-center items-center flex-shrink-0">
        <div className="relative lg:absolute left-0 top-[1px] w-full lg:w-[552px] h-auto lg:h-[638px] flex-shrink-0">
          {/* Gradient Background */}
          <div 
            className="absolute left-0 top-[120px] lg:top-[242px] w-full lg:w-[552px] h-[200px] lg:h-[396px] flex-shrink-0 rounded-[15px]"
            style={{
              background: "linear-gradient(180deg, #43A2FF 0%, #FFF 100%)"
            }}
          />
          
          {/* Logo/Icon Container */}
          <div className="absolute left-[50px] lg:left-[131px] top-[20px] lg:top-[101px] inline-flex h-[32px] lg:h-[63px] px-[0.477px] py-[4px_0px_4px_13px] lg:py-[8.68px_0px_7.629px_26.18px] justify-end items-center flex-shrink-0 w-[44px] lg:w-[88px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7aee602eb3fd10d5da1cd68ddcea7f720aabf2fe?width=123" 
              className="absolute left-[13px] lg:left-[26px] top-[5px] lg:top-[9px] w-[31px] lg:w-[62px] h-[23px] lg:h-[46px]"
              alt="Frame 2121457905" 
            />
          </div>
          
          {/* Phone Image */}
          <img 
            className="absolute left-[35px] lg:left-[71px] top-[55px] lg:top-[110px] w-[205px] lg:w-[410px] h-[264px] lg:h-[528px] flex-shrink-0"
            style={{ aspectRatio: "73/94" }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/17a8536c5ae38906ad273d69191b437c18c3a7ce?width=820" 
            alt="" 
          />
        </div>
      </div>

      {/* Curved SVG Connector */}
      <svg 
        className="hidden lg:block absolute left-[322px] top-[293px] w-[330px] h-[198px] flex-shrink-0"
        style={{ strokeWidth: "3px", stroke: "#1D8FFF" }}
        width="333" 
        height="201" 
        viewBox="0 0 333 201" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1.32031 199C1.32031 199 87.3717 121.549 164.32 127C207.699 130.073 213.374 187.115 256.82 189C335.719 192.423 331.32 1 331.32 1" 
          stroke="#1D8FFF" 
          strokeWidth="3" 
          strokeDasharray="8 8"
        />
      </svg>

      {/* Right Section - Live Demo Interface */}
      <div className="relative lg:absolute left-0 lg:left-[602px] top-0 lg:top-[57px] w-full lg:w-[516px] h-auto lg:h-[546px] flex-shrink-0 mt-4 lg:mt-0">
        {/* Background Image */}
        <img 
          className="absolute left-0 top-0 w-full lg:w-[516px] h-[291px] lg:h-[582px] flex-shrink-0"
          style={{ aspectRatio: "102/115" }}
          src="https://api.builder.io/api/v1/image/assets/TEMP/e715b55fe32746b22aa0d0bd26a665fe353cad9e?width=1033" 
          alt="" 
        />
        
        {/* Demo Interface Container */}
        <div 
          className="absolute left-[20px] lg:left-[41px] top-[44px] lg:top-[87px] flex w-[calc(100%-40px)] lg:w-[423px] h-[242px] lg:h-[484px] px-[9px] lg:px-[17.85px] py-[4px] lg:py-[7.65px] flex-col items-center gap-[16px] lg:gap-[31.874px] flex-shrink-0 bg-white"
          style={{
            borderRadius: "26.774px 26.774px 0 0",
            boxShadow: "0 -8.925px 19.125px 0 #FFF"
          }}
        >
          {/* Header */}
          <div className="flex h-[11px] lg:h-[21.675px] justify-between items-center flex-shrink-0 self-stretch">
            <div className="flex items-center gap-[10.2px]">
              <svg 
                className="w-[15.3px] h-[15.3px] fill-[#00B45C]"
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.7553" cy="8.18498" r="7.64983" fill="#00B45C"/>
              </svg>
              <div 
                className="text-center font-urbanist text-[9px] lg:text-[17.85px] font-semibold"
                style={{ color: "#4F6070" }}
              >
                Live SEO Demo
              </div>
            </div>
            <div 
              className="text-center font-urbanist text-[15.3px] font-medium"
              style={{ color: "#4F6070" }}
            >
              2:23:24AM
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-[18px] lg:gap-[36.974px] self-stretch">
            {/* Counter Section */}
            <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-[5.1px] self-stretch">
              <div className="flex w-full lg:w-[387.591px] h-[14px] lg:h-[28.049px] pb-[0.049px] justify-center items-center">
                <div 
                  className="flex-1 text-center font-urbanist text-[11px] lg:text-[22.949px] font-semibold w-full lg:w-[388px] h-[14px] lg:h-[28px]"
                  style={{ color: "#1D8FFF" }}
                >
                  11,345
                </div>
              </div>
              <div 
                className="self-stretch text-center font-urbanist text-[8px] lg:text-[15.3px] font-medium"
                style={{ color: "#7B7B7B" }}
              >
                Searches Happening Now
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex flex-col items-start gap-[8px] lg:gap-[15.3px] self-stretch">
              {/* Crawling Step */}
              <div 
                className="flex px-[8px] lg:px-[16.575px] py-[8px] lg:py-[15.3px] flex-col justify-center items-start gap-[5px] lg:gap-[10.2px] self-stretch rounded-[4px] lg:rounded-[7.65px] bg-white"
                style={{ boxShadow: "0 5.1px 15.937px 0 rgba(0, 0, 0, 0.15)" }}
              >
                <div className="flex flex-col justify-center items-start gap-[5.1px] self-stretch">
                  <div className="flex items-center gap-[10.2px]">
                    <svg 
                      className="w-[15.3px] h-[15.3px] fill-[#1D8FFF]"
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8.32951" cy="8.31975" r="7.64983" fill="#1D8FFF"/>
                    </svg>
                    <div 
                      className="text-center font-urbanist text-[15.3px] font-medium"
                      style={{ color: "#132A40" }}
                    >
                      Crawling
                    </div>
                  </div>
                  <div 
                    className="self-stretch font-urbanist text-[15.3px] font-medium"
                    style={{ color: "#5B6B7A" }}
                  >
                    Search bots discover and scan web pages
                  </div>
                </div>
                <svg 
                  className="w-[349.98px] h-0"
                  style={{ strokeWidth: "6.375px", stroke: "#43A2FF" }}
                  width="357" 
                  height="7" 
                  viewBox="0 0 357 7" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M3.67969 3.61914H353.659" 
                    stroke="url(#paint0_linear_335_13107)" 
                    strokeWidth="6.37486" 
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_335_13107" x1="178.669" y1="3.77704" x2="178.669" y2="4.61914" gradientUnits="userSpaceOnUse">
                      <stop offset="1" stopColor="#43A2FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Indexing Step */}
              <div 
                className="flex px-[8px] lg:px-[16.575px] py-[8px] lg:py-[15.3px] flex-col justify-center items-start gap-[5px] lg:gap-[10.2px] self-stretch rounded-[4px] lg:rounded-[7.65px] bg-white"
                style={{ boxShadow: "0 5.1px 15.937px 0 rgba(0, 0, 0, 0.15)" }}
              >
                <div className="flex flex-col justify-center items-start gap-[5.1px] self-stretch">
                  <div className="flex items-center gap-[10.2px]">
                    <svg 
                      className="w-[15.3px] h-[15.3px] fill-[#F8A02C]"
                      width="16" 
                      height="17" 
                      viewBox="0 0 16 17" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8.32951" cy="8.51799" r="7.64983" fill="#F8A02C"/>
                    </svg>
                    <div 
                      className="text-center font-urbanist text-[15.3px] font-medium"
                      style={{ color: "#132A40" }}
                    >
                      Indexing
                    </div>
                  </div>
                  <div 
                    className="self-stretch font-urbanist text-[15.3px] font-medium"
                    style={{ color: "#5B6B7A" }}
                  >
                    Content is analyzed and stored
                  </div>
                </div>
                <svg 
                  className="w-[274.119px] h-0"
                  style={{ strokeWidth: "6.375px", stroke: "#F8A02C" }}
                  width="281" 
                  height="7" 
                  viewBox="0 0 281 7" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M3.67969 3.81738H277.798" 
                    stroke="#F8A02C" 
                    strokeWidth="6.37486" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Ranking Step */}
              <div 
                className="flex px-[8px] lg:px-[16.575px] py-[8px] lg:py-[15.3px] flex-col justify-center items-start gap-[5px] lg:gap-[10.2px] self-stretch rounded-[4px] lg:rounded-[7.65px] bg-white"
                style={{ boxShadow: "0 5.1px 15.937px 0 rgba(0, 0, 0, 0.15)" }}
              >
                <div className="flex flex-col justify-center items-start gap-[5.1px] self-stretch">
                  <div className="flex items-center gap-[10.2px]">
                    <svg 
                      className="w-[15.3px] h-[15.3px] fill-[#00B45C]"
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8.32951" cy="7.71721" r="7.64983" fill="#00B45C"/>
                    </svg>
                    <div 
                      className="text-center font-urbanist text-[15.3px] font-medium"
                      style={{ color: "#132A40" }}
                    >
                      Ranking
                    </div>
                  </div>
                  <div 
                    className="self-stretch font-urbanist text-[15.3px] font-medium"
                    style={{ color: "#5B6B7A" }}
                  >
                    Best results are selected and ranked
                  </div>
                </div>
                <svg 
                  className="w-[175.946px] h-0"
                  style={{ strokeWidth: "6.375px", stroke: "#00B45C" }}
                  width="183" 
                  height="8" 
                  viewBox="0 0 183 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M3.67969 4.0166H179.626" 
                    stroke="url(#paint0_linear_335_13121)" 
                    strokeWidth="6.37486" 
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_335_13121" x1="91.6527" y1="4.1745" x2="91.6527" y2="5.0166" gradientUnits="userSpaceOnUse">
                      <stop offset="1" stopColor="#00B45C"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <svg 
          className="absolute left-[83px] top-[51px] flex w-[360px] justify-between items-center h-[11px]"
          width="361" 
          height="11" 
          viewBox="0 0 361 11" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M3.61912 9.50294C5.65139 9.50294 6.85857 7.91367 6.85857 5.22244C6.85857 4.20908 6.66476 3.3563 6.29374 2.69733C5.7566 1.67289 4.83184 1.11914 3.66342 1.11914C1.92464 1.11914 0.695312 2.28756 0.695312 3.92666C0.695312 5.46609 1.80282 6.58467 3.32563 6.58467C4.26147 6.58467 5.02011 6.14721 5.39666 5.38857H5.4908C5.4908 7.21595 4.79861 8.30684 3.6302 8.30684C2.94354 8.30684 2.41194 7.93029 2.2292 7.3267H0.806063C1.04418 8.63909 2.15722 9.50294 3.61912 9.50294ZM3.66896 5.44948C2.74973 5.44948 2.0963 4.79605 2.0963 3.88236C2.0963 2.99082 2.78296 2.30971 3.6745 2.30971C4.56604 2.30971 5.25269 3.0019 5.25269 3.90451C5.25269 4.79605 4.58265 5.44948 3.66896 5.44948ZM10.0263 3.43936C10.0263 3.93774 9.66631 4.30875 9.14025 4.30875C8.61972 4.30875 8.25425 3.93774 8.25425 3.43936C8.25425 2.93545 8.61972 2.56443 9.14025 2.56443C9.66631 2.56443 10.0263 2.93545 10.0263 3.43936ZM9.14025 8.46189C9.66631 8.46189 10.0263 8.08534 10.0263 7.58696C10.0263 7.08305 9.66631 6.71203 9.14025 6.71203C8.61972 6.71203 8.25425 7.08305 8.25425 7.58696C8.25425 8.08534 8.61972 8.46189 9.14025 8.46189ZM16.6881 7.81954V9.30913H15.3203V7.81954H11.4164V6.54591C12.1363 5.22244 13.2604 3.4449 14.6724 1.31849H16.6881V6.61236H17.7679V7.81954H16.6881ZM15.3425 6.64558H12.7399V6.56252C13.6702 4.92342 14.5008 3.61102 15.265 2.48137H15.3425V6.64558ZM22.3698 1.31849V9.30913H20.9411V2.75825H20.847L18.859 4.1537V2.7804L20.9467 1.31849H22.3698Z" 
            fill="black"
          />
          <path 
            opacity="0.35" 
            d="M339.937 0.469727H355.557C356.678 0.469899 357.587 1.37872 357.587 2.5V8.12305C357.587 9.24439 356.678 10.1531 355.557 10.1533H339.937C338.815 10.1533 337.906 9.24445 337.906 8.12305V2.5C337.906 1.37865 338.815 0.469794 339.937 0.469727Z" 
            fill="black" 
            stroke="white" 
            strokeWidth="0.93718"
          />
          <path 
            opacity="0.4" 
            d="M358.992 3.4375V7.18622C359.746 6.86873 360.237 6.13014 360.237 5.31186C360.237 4.49358 359.746 3.75499 358.992 3.4375" 
            fill="black"
          />
          <path 
            d="M339.312 2.9059C339.312 2.33655 339.774 1.875 340.343 1.875H355.151C355.72 1.875 356.182 2.33655 356.182 2.9059V7.71676C356.182 8.28611 355.72 8.74766 355.151 8.74766H340.343C339.774 8.74766 339.312 8.28611 339.312 7.71676V2.9059Z" 
            fill="black"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M325.567 2.13329C327.644 2.13338 329.641 2.93133 331.146 4.36222C331.259 4.47269 331.441 4.47129 331.552 4.35909L332.636 3.26572C332.692 3.20881 332.724 3.13172 332.723 3.05152C332.723 2.97131 332.69 2.8946 332.633 2.83836C328.683 -0.947422 322.451 -0.947422 318.5 2.83836C318.443 2.89456 318.411 2.97125 318.41 3.05145C318.41 3.13166 318.441 3.20877 318.498 3.26572L319.581 4.35909C319.693 4.47146 319.874 4.47286 319.987 4.36222C321.493 2.93124 323.49 2.13328 325.567 2.13329ZM325.567 5.69051C326.708 5.69044 327.808 6.11455 328.654 6.88042C328.768 6.98911 328.949 6.98676 329.06 6.87511L330.142 5.78173C330.199 5.72438 330.231 5.64658 330.23 5.56573C330.229 5.48489 330.196 5.40775 330.138 5.35157C327.562 2.95578 323.574 2.95578 320.998 5.35157C320.94 5.40775 320.907 5.48493 320.906 5.5658C320.905 5.64667 320.937 5.72446 320.994 5.78173L322.076 6.87511C322.188 6.98676 322.368 6.98911 322.482 6.88042C323.327 6.11505 324.427 5.69099 325.567 5.69051ZM327.735 8.0839C327.736 8.16497 327.705 8.24314 327.647 8.29994L325.775 10.189C325.72 10.2445 325.645 10.2757 325.567 10.2757C325.489 10.2757 325.414 10.2445 325.359 10.189L323.487 8.29994C323.429 8.24309 323.397 8.16491 323.399 8.08383C323.401 8.00276 323.436 7.92599 323.496 7.87164C324.692 6.86054 326.442 6.86054 327.638 7.87164C327.698 7.92603 327.733 8.00283 327.735 8.0839Z" 
            fill="black"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M312.761 0.313477H311.823C311.306 0.313477 310.886 0.733066 310.886 1.25066V9.37289C310.886 9.89048 311.306 10.3101 311.823 10.3101H312.761C313.278 10.3101 313.698 9.89048 313.698 9.37289V1.25066C313.698 0.733066 313.278 0.313477 312.761 0.313477ZM307.45 2.50023H308.387C308.905 2.50023 309.324 2.91982 309.324 3.43741V9.37289C309.324 9.89048 308.905 10.3101 308.387 10.3101H307.45C306.932 10.3101 306.513 9.89048 306.513 9.37289V3.43741C306.513 2.91982 306.932 2.50023 307.45 2.50023ZM304.013 4.68698H303.076C302.559 4.68698 302.139 5.10657 302.139 5.62416V9.37289C302.139 9.89048 302.559 10.3101 303.076 10.3101H304.013C304.531 10.3101 304.951 9.89048 304.951 9.37289V5.62416C304.951 5.10657 304.531 4.68698 304.013 4.68698ZM299.64 6.56134H298.703C298.185 6.56134 297.766 6.98093 297.766 7.49853V9.37289C297.766 9.89048 298.185 10.3101 298.703 10.3101H299.64C300.158 10.3101 300.577 9.89048 300.577 9.37289V7.49853C300.577 6.98093 300.158 6.56134 299.64 6.56134Z" 
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}
