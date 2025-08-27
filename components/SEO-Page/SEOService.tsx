"use client";
import React from "react";

export default function SEOService() {
  return (
    <div className="hidden  lg:flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 py-8 mx-auto lg:gap-12 lg:py-16">
      {/* Header Section */}
      <div className="flex w-full max-w-[565px] flex-col items-center gap-3 lg:gap-4">
        {/* Badge */}
        <div className="flex w-fit px-[10px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z"
              fill="#1D8FFF"
            />
          </svg>
          <span className="text-[#1D8FFF] font-urbanist text-xs font-medium leading-[18px] capitalize sm:text-sm lg:text-[14px] lg:leading-[23px]">
            End-to-end SEO that grows with you.
          </span>
        </div>

        {/* Title and Description */}
        <div className="flex h-auto flex-col items-center gap-3 self-stretch lg:h-[176px] lg:gap-4">
          <h2 className="self-stretch text-[#12579C] text-center font-urbanist text-xl font-bold leading-[24px] sm:text-2xl md:text-3xl lg:text-[50px] lg:leading-[57px]">
            SEO Services That Cover Every Angle
          </h2>
          <p className="w-full text-[#6A7986] text-center font-urbanist text-sm font-normal leading-[20px] lg:w-[565px] lg:text-[16px] lg:leading-[23px]">
            We offer end-to-end SEO services to boost your visibility and traffic — all tailored to your unique business needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex w-full max-w-[1128px] items-start align-content-flex-start gap-4 flex-wrap lg:gap-6">
        {/* Local SEO Card */}
        <div className="flex w-full h-auto p-4 flex-col items-start gap-[10px] flex-shrink-0 rounded-[18px] border border-[#D2D2D2] bg-white lg:w-[454px] lg:h-[466px] lg:p-[23px_21px]">
          <div className="flex h-auto flex-col items-start gap-6 flex-shrink-0 self-stretch lg:h-[420px] lg:gap-[35px]">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch lg:gap-[14px]">
              <div className="flex p-[10px] justify-center items-center gap-[10px] rounded-[50px] bg-[#1D8FFF]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="text-[#12579C] font-urbanist text-lg font-bold leading-normal lg:text-[20px]">
                  Local SEO
                </h3>
                <p className="self-stretch text-[#4F6070] font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                  Dominate local search results and attract nearby customers to your business.
                </p>
              </div>
            </div>

            {/* Chart Section */}
            <div className="flex h-auto p-4 flex-col items-start gap-[10px] flex-shrink-0 rounded-[11px] bg-[#FEF4E6] lg:h-[259.75px] lg:p-[16px_15px]">
              <div className="flex w-full flex-col justify-center items-center gap-3 lg:w-[382px] lg:gap-[14px]">
                <div className="flex flex-col items-center gap-2 self-stretch">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#F8A02C]"></div>
                      <span className="text-[#6A7986] text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                        Local Rankings
                      </span>
                    </div>
                    <span className="text-[#6A7986] text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                      2:23:24
                    </span>
                  </div>
                  <div className="flex w-full flex-col justify-center items-center gap-[6px] lg:w-[164px]">
                    <span className="self-stretch text-[#F78C01] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      3,478
                    </span>
                    <span className="self-stretch text-black text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                      GMB Views This Month
                    </span>
                  </div>
                </div>

                {/* Rankings List */}
                <div className="flex flex-col items-start gap-[-1px] self-stretch">
                  {/* New York */}
                  <div className="flex p-[10px_20px] items-center gap-[196px] self-stretch rounded-[12px] bg-white shadow-[0_4px_14.8px_0_rgba(247,181,13,0.47)]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex w-[26.25px] h-[26.25px] p-[7.989px] justify-center items-center rounded-full bg-[#00B45C]">
                        <span className="text-white text-center font-urbanist text-[12px] font-normal leading-[18.261px]">
                          #2
                        </span>
                      </div>
                      <span className="text-[#34475A] text-center font-inter text-[12px] font-normal leading-[16px]">
                        New York
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.52656 12.75L4.44063 8.79844L1.375 6.14062L5.425 5.78906L7 2.0625L8.575 5.78906L12.625 6.14062L9.55937 8.79844L10.4734 12.75L7 10.6547L3.52656 12.75Z"
                          fill="#F78C01"
                        />
                      </svg>
                      <span className="text-[#34475A] text-center font-inter text-[12px] font-normal leading-[16px]">
                        5.0
                      </span>
                    </div>
                  </div>

                  {/* Brooklyn */}
                  <div className="flex p-[10px_20px] items-center gap-[200px] self-stretch rounded-[12px] bg-white shadow-[0_4px_14.8px_0_rgba(247,181,13,0.47)]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex w-[26.25px] h-[26.25px] p-[7.989px] justify-center items-center rounded-full bg-[#00B45C]">
                        <span className="text-white text-center font-urbanist text-[12px] font-normal leading-[18.261px]">
                          #2
                        </span>
                      </div>
                      <span className="text-[#34475A] text-center font-inter text-[12px] font-normal leading-[16px]">
                        Brooklyn
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.52656 13L4.44063 9.04844L1.375 6.39062L5.425 6.03906L7 2.3125L8.575 6.03906L12.625 6.39062L9.55937 9.04844L10.4734 13L7 10.9047L3.52656 13Z"
                          fill="#F78C01"
                        />
                      </svg>
                      <span className="text-[#34475A] text-center font-inter text-[12px] font-normal leading-[16px]">
                        4.4
                      </span>
                    </div>
                  </div>

                  {/* Manhattan */}
                  <div className="flex p-[10px_20px] items-center gap-[189px] self-stretch rounded-[12px] bg-white shadow-[0_4px_14.8px_0_rgba(247,181,13,0.47)]">
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex w-[26.25px] h-[26.25px] p-[7.989px] justify-center items-center rounded-full bg-[#00B45C]">
                        <span className="text-white text-center font-urbanist text-[12px] font-normal leading-[18.261px]">
                          #1
                        </span>
                      </div>
                      <span className="text-[#34475A] text-center font-inter text-[12px] font-normal leading-[16px]">
                        Manhattan
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.52656 13.25L4.44063 9.29844L1.375 6.64062L5.425 6.28906L7 2.5625L8.575 6.28906L12.625 6.64062L9.55937 9.29844L10.4734 13.25L7 11.1547L3.52656 13.25Z"
                          fill="#F78C01"
                        />
                      </svg>
                      <span className="text-[#34475A] text-center font-inter text-[12px] font-normal leading-[16px]">
                        4.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical SEO Card */}
        <div className="flex w-full h-auto p-4 flex-col items-start gap-[10px] flex-shrink-0 rounded-[18px] border border-[#D2D2D2] bg-white lg:w-[649px] lg:h-[466px] lg:p-[23px_21px]">
          <div className="flex h-auto flex-col items-start gap-6 flex-shrink-0 self-stretch lg:h-[420px] lg:gap-[35px]">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch lg:gap-[14px]">
              <div className="flex p-[10px] justify-center items-center gap-[10px] rounded-[50px] bg-[#1D8FFF]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="text-[#12579C] font-urbanist text-lg font-bold leading-normal lg:text-[20px]">
                  Technical SEO
                </h3>
                <p className="self-stretch text-[#4F6070] font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                  Improve site speed, structure, indexing, and crawlability
                </p>
              </div>
            </div>

            {/* Technical SEO Chart */}
            <div className="w-full h-auto flex-shrink-0 rounded-[11px] bg-white shadow-[0_4px_25px_0_rgba(67,162,255,0.15)] relative lg:w-[607px] lg:h-[278px]">
              {/* Header */}
              <div className="absolute left-4 -top-[2px] flex w-[calc(100%-2rem)] h-[37px] p-[10px_15px] justify-between items-center flex-shrink-0 rounded-[45px] border border-[#C9C9C9] bg-[#FAFAFA] lg:left-8 lg:w-[543px] lg:p-[10px_23px]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F8A02C]"></div>
                  <span className="text-[#6A7986] text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                    Local Rankings
                  </span>
                </div>
                <span className="text-[#6A7986] text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                  2:23:24
                </span>
              </div>

              {/* Metrics Section */}
              <div className="absolute left-4 top-12 flex w-[calc(100%-2rem)] flex-col items-start gap-2 h-auto lg:left-8 lg:w-[543px] lg:h-[116px]">
                <div className="flex justify-between items-center self-stretch">
                  <span className="text-[#22384C] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                    PageSpeed Score
                  </span>
                  <div className="flex w-[38px] p-[10px] flex-col justify-center items-center gap-[10px] rounded-full bg-[rgba(29,143,255,0.22)]">
                    <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-sm font-normal leading-normal lg:text-[16px]">
                      97
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[6px] self-stretch mt-2">
                  <div className="flex justify-between items-center self-stretch">
                    <span className="text-[#4F6070] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      LCP
                    </span>
                    <span className="text-[#4F6070] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      0.8s
                    </span>
                  </div>
                  <div className="flex justify-between items-center self-stretch">
                    <span className="text-[#4F6070] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      FID
                    </span>
                    <span className="text-[#4F6070] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      81ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center self-stretch">
                    <span className="text-[#4F6070] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      CLS
                    </span>
                    <span className="text-[#4F6070] text-center font-urbanist text-sm font-bold leading-normal lg:text-[16px]">
                      0.05
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Health Button */}
              <div className="absolute left-4 bottom-3 flex w-[calc(100%-2rem)] p-[14px_20px] flex-col items-center gap-1 rounded-[12px] bg-[#43A2FF] shadow-[0_4px_17.7px_0_rgba(67,162,255,0.15)] h-auto lg:left-8 lg:w-[543px] lg:p-[14px_119px] lg:h-[71px]">
                <span className="self-stretch text-white text-center font-urbanist text-base font-bold leading-normal lg:text-[18px]">
                  81%
                </span>
                <span className="self-stretch text-[#E9E9E9] text-center font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                  Technical Health
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* On-page SEO Card */}
        <div className="flex w-full h-auto p-4 flex-col items-start gap-[10px] flex-shrink-0 rounded-[18px] border border-[#D2D2D2] bg-white lg:w-[552px] lg:h-[466px] lg:p-[23px_21px]">
          <div className="flex h-auto flex-col items-start gap-6 flex-shrink-0 self-stretch lg:h-[420px] lg:gap-[34px]">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch lg:gap-[14px]">
              <div className="flex p-[10px] justify-center items-center gap-[10px] rounded-[50px] bg-[#1D8FFF]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 20H2.01"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="text-[#12579C] font-urbanist text-lg font-bold leading-normal lg:text-[20px]">
                  On-page SEO
                </h3>
                <p className="self-stretch text-[#4F6070] font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                  Optimize content, keywords, and internal linking
                </p>
              </div>
            </div>

            {/* Content Optimization */}
            <div className="flex w-full h-auto p-4 flex-col items-center gap-4 flex-shrink-0 rounded-[11px] bg-[rgba(244,244,244,0.50)] lg:w-[510px] lg:h-[276px] lg:p-[24px_15px] lg:gap-5">
              <div className="flex w-full h-[17px] justify-between items-center flex-shrink-0 lg:w-[455px]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1D8FFF]"></div>
                  <span className="text-[#6A7986] text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                    Content Optimization
                  </span>
                </div>
                <span className="text-[#6A7986] text-center font-urbanist text-xs font-normal leading-normal lg:text-[14px]">
                  2:23:24AM
                </span>
              </div>

              {/* Content Quality Score */}
              <div className="flex p-[14px_20px] flex-col items-center gap-1 self-stretch rounded-[12px] border border-[#1D8FFF] bg-[#E8F4FF] lg:p-[14px_119px]">
                <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-base font-bold leading-normal lg:text-[18px]">
                  100%
                </span>
                <span className="self-stretch text-[#7B7B7B] text-center font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                  Content Quality Score
                </span>
              </div>

              {/* Progress Bar */}
              <svg
                width="472"
                height="12"
                viewBox="0 0 484 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M6.25 6H477.75"
                  stroke="#1D8FFF"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
              </svg>

              {/* Stats */}
              <div className="flex justify-between items-center self-stretch">
                <div className="flex w-[94px] flex-col justify-center items-center gap-2">
                  <span className="self-stretch text-[#405364] text-center font-urbanist text-base font-normal leading-[16px] lg:text-[18px]">
                    5.2%
                  </span>
                  <span className="self-stretch text-[#405364] text-center font-urbanist text-sm font-normal leading-[16px] lg:text-[14px]">
                    Conversion
                  </span>
                </div>
                <div className="flex w-[84px] flex-col justify-center items-center gap-2">
                  <span className="self-stretch text-[#405364] text-center font-urbanist text-base font-normal leading-[16px] lg:text-[18px]">
                    137
                  </span>
                  <span className="w-full text-[#405364] text-center font-urbanist text-sm font-normal leading-[16px] lg:w-[115px] lg:text-[14px]">
                    Sales Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Off-page SEO Card */}
        <div className="flex w-full h-auto p-4 flex-col items-start gap-[10px] flex-shrink-0 rounded-[18px] border border-[#D2D2D2] bg-[#E8F4FF] lg:w-[552px] lg:h-[466px] lg:p-[23px_21px]">
          <div className="flex h-auto flex-col items-start gap-6 flex-shrink-0 self-stretch lg:h-[420px] lg:gap-[34px]">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch lg:gap-[14px]">
              <div className="flex p-[10px] justify-center items-center gap-[10px] rounded-[50px] bg-[#1D8FFF]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex p-1 justify-center items-center"
                >
                  <path
                    d="M11.0008 14.986C11.0008 15.2512 11.1061 15.5056 11.2936 15.6931C11.4812 15.8806 11.7355 15.986 12.0008 15.986C12.266 15.986 12.5203 15.8806 12.7079 15.6931C12.8954 15.5056 13.0008 15.2512 13.0008 14.986V7.828L16.2437 11.071L17.6577 9.657L12.0008 4L6.34375 9.657L7.75775 11.071L11.0008 7.83V14.986Z"
                    fill="white"
                  />
                  <path
                    d="M4 14H6V18H18V14H20V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V14Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="text-[#12579C] font-urbanist text-lg font-bold leading-normal lg:text-[20px]">
                  Off-page SEO
                </h3>
                <p className="self-stretch text-[#4F6070] font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                  Build high-quality backlinks and online authority tagline
                </p>
              </div>
            </div>

            {/* Domain Authority Card */}
            <div className="flex w-full p-4 flex-col items-start gap-[10px] rounded-[11px] border border-[#E9E9E9] bg-white lg:w-[510px] lg:p-[14px_27px]">
              <div className="flex flex-col items-center gap-[5px] self-stretch">
                <div className="flex flex-col justify-center items-center gap-[14px] self-stretch">
                  <div className="flex p-[0_8px] flex-col items-start gap-[9px] self-stretch">
                    <span className="self-stretch text-[#22384C] font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                      DA 60
                    </span>
                    <span className="self-stretch text-[#22384C] font-urbanist text-sm font-normal leading-normal lg:text-[14px]">
                      Domain Authority
                    </span>
                  </div>

                  {/* Circular Chart */}
                  <div className="relative w-[140px] h-[148px]">
                    <svg
                      width="148"
                      height="157"
                      viewBox="0 0 148 157"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0"
                    >
                      <ellipse
                        cx="73.7121"
                        cy="74.2424"
                        rx="73.7121"
                        ry="74.2424"
                        fill="#E6E6EC"
                      />
                      <path
                        d="M73.7121 0C85.4012 1.40394e-07 96.9228 2.79991 107.326 8.16864C117.729 13.5374 126.715 21.321 133.543 30.877C140.37 40.4331 144.844 51.4876 146.594 63.1281C148.343 74.7687 147.32 86.6615 143.607 97.825C139.894 108.988 133.598 119.103 125.239 127.332C116.881 135.562 106.698 141.672 95.5332 145.157C84.368 148.642 72.54 149.403 61.0253 147.377C49.5106 145.351 38.6395 140.595 29.3092 133.503L73.7121 74.2424V0Z"
                        fill="#1D8FFF"
                      />
                      <ellipse
                        cx="73.0201"
                        cy="74.9357"
                        rx="59.9342"
                        ry="60.3653"
                        fill="white"
                      />
                      <ellipse
                        cx="34.4459"
                        cy="128.363"
                        rx="13.778"
                        ry="13.8771"
                        fill="#0465C4"
                        filter="url(#filter0_d)"
                      />
                      <ellipse
                        cx="34.4437"
                        cy="129.058"
                        rx="6.88898"
                        ry="6.93854"
                        fill="#1D8FFF"
                      />
                      <text
                        fill="#12579C"
                        xmlSpace="preserve"
                        style={{ whiteSpace: "pre" }}
                        fontFamily="Urbanist"
                        fontSize="22.0096"
                        fontWeight="600"
                        letterSpacing="0em"
                      >
                        <tspan x="53.6258" y="82.0608">
                          60%
                        </tspan>
                      </text>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="13.7805"
                          y="114.486"
                          width="41.3297"
                          height="42.2942"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="7.65277" />
                          <feGaussianBlur stdDeviation="3.44375" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.416538 0 0 0 0 0.372083 0 0 0 0 0.95 0 0 0 0.53 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex p-[0_15px] justify-between items-center self-stretch rounded-[12px]">
                  <div className="flex w-[94px] flex-col justify-center items-center gap-2">
                    <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-base font-normal leading-[16px] lg:text-[18px]">
                      5.2%
                    </span>
                    <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-sm font-normal leading-[16px] lg:text-[14px]">
                      Conversion
                    </span>
                  </div>
                  <div className="flex w-[84px] flex-col justify-center items-center gap-2">
                    <span className="self-stretch text-[#1D8FFF] text-center font-urbanist text-base font-normal leading-[16px] lg:text-[18px]">
                      137
                    </span>
                    <span className="w-full text-[#1D8FFF] text-center font-urbanist text-sm font-normal leading-[16px] lg:w-[115px] lg:text-[14px]">
                      Sales Today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col justify-center items-center gap-4 self-stretch lg:flex-row lg:gap-[9px]">
        <svg
          width="200"
          height="2"
          viewBox="0 0 459 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block lg:w-[459px]"
        >
          <path
            d="M0 1H459"
            stroke="#C9C9C9"
            strokeDasharray="9 9"
          />
        </svg>
        <div className="flex flex-col justify-center items-center gap-4 lg:flex-row lg:gap-6">
          {/* Primary CTA Button */}
          <button className="flex w-full h-[50px] p-[0_3px] justify-end items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)] lg:w-[246px]">
            <span className="text-white text-center font-urbanist text-sm font-normal leading-[20px] capitalize lg:text-[16px] lg:leading-[23px]">
              Start Your SEO Journey
            </span>
            <div className="flex p-3 items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
              <svg
                width="20"
                height="20"
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
                  d="M10 4.16699L15.8333 10.0003L10 15.8337"
                  stroke="#1D8FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Secondary CTA Button */}
          <button className="flex w-full h-[50px] p-[10px_19px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA] lg:w-[204px]">
            <span className="text-[#091E42] font-urbanist text-sm font-normal leading-[100%] capitalize lg:text-[16px]">
              See How SEO Works
            </span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66797 10H16.3346"
                stroke="#091E42"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337"
                stroke="#091E42"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <svg
          width="200"
          height="2"
          viewBox="0 0 459 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block lg:w-[459px]"
        >
          <path
            d="M0 1H459"
            stroke="#C9C9C9"
            strokeDasharray="9 9"
          />
        </svg>
      </div>
    </div>
  );
}
