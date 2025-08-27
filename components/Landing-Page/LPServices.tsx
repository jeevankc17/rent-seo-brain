import React from 'react';

const LPServices = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-6 lg:gap-[43px] w-full relative px-4 lg:px-0">
      {/* Title Section */}
      <div className="flex w-full max-w-[565px] flex-col items-center gap-4 relative">
        <div className="flex w-full max-w-[151px] px-[10px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF] relative">
          <svg className="w-[15px] h-[15px] flex-shrink-0 relative" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" fill="#1D8FFF"/>
          </svg>
          <span className="text-[#1D8FFF] font-urbanist text-[14px] font-medium leading-[23px] capitalize">Our Core Services</span>
        </div>
        <div className="flex h-[176px] flex-col items-center gap-4 w-full relative">
          <h2 className="w-full text-[#12579C] text-center font-urbanist text-xl md:text-3xl lg:text-[50px] font-bold leading-[24px] md:leading-[36px] lg:leading-[57px]">
            Landing Page Services That Deliver Results
          </h2>
          <p className="w-full max-w-[565px] text-[#6A7986] text-center font-urbanist text-sm md:text-[16px] font-normal leading-[18px] md:leading-[23px]">
            We design landing pages with one goal: conversion. Whether you're running ads, launching a product, or collecting leads, our landing pages are built to perform.
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col justify-center items-center gap-[34px] w-full relative">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[25px] w-full relative">
          {/* Card 1 - Mobile-Optimized Designs */}
          <div className="w-full max-w-[672px] h-auto lg:h-[383px] rounded-[18px] bg-[rgba(232,244,255,0.54)] relative p-4 lg:p-0">
            <div className="flex w-full max-w-[329px] flex-col items-start gap-[14px] relative lg:absolute lg:left-[37px] lg:top-[243px] h-auto lg:h-[109px] order-2 lg:order-1">
              <span className="w-full text-[#BBFF00] font-urbanist text-sm md:text-[16px] font-bold leading-normal">01</span>
              <h3 className="text-[#132A40] font-urbanist text-lg md:text-[20px] font-bold leading-normal">Mobile-Optimized Designs</h3>
              <p className="w-full text-[#4F6070] font-urbanist text-[16px] font-normal leading-normal">
                Fast, responsive pages that look great on every screen.
              </p>
            </div>
            
            {/* Mobile mockup visualization */}
            <div className="flex w-full max-w-[299px] h-[200px] lg:h-[315px] flex-col justify-center items-center flex-shrink-0 relative lg:absolute lg:left-[336px] lg:top-[68px] order-1 lg:order-2 mb-4 lg:mb-0">
              <div className="w-full max-w-[299px] h-[200px] lg:h-[315px] flex-shrink-0 relative">
                <img className="w-[120px] lg:w-[193px] h-[200px] lg:h-[315px] flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[70px] top-0" src="https://api.builder.io/api/v1/image/assets/TEMP/8fb4d74ba8dc95fcfb15ed76754b4435e6fd4cc3?width=385" alt="" />
                
                {/* Gradient blur effect */}
                <div className="w-[88px] h-[43px] absolute left-[117px] top-[255px] rounded-full bg-gradient-to-r from-[rgba(187,255,0,0.46)] via-[rgba(0,180,92,0.46)] to-[rgba(247,181,13,0.46)] blur-[50px]"></div>
                
                {/* Task list overlay */}
                <div className="w-[149px] h-[85px] absolute left-[91px] top-[57px] shadow-[0_3.484px_35.709px_rgba(47,152,255,0.63)]">
                  <div className="w-[149px] h-[85px] relative">
                    {/* Task items */}
                    <div className="inline-flex px-[8px] py-[6px] items-center gap-[8px] rounded-[7px] bg-white absolute left-[17px] top-[57px] w-[115px] h-[28px]">
                      <div className="flex p-[4px] items-center gap-[4px] rounded-[12px] border border-[#8D8D8D] bg-[#8D8D8D] shadow-[0_0.503px_4.625px_rgba(47,152,255,1)]">
                        <svg className="w-[9px] h-[9px]" viewBox="0 0 9 10" fill="none">
                          <path d="M3.60761 6.88223L1.52344 4.79806L2.04448 4.27701L3.60761 5.84014L6.9624 2.48535L7.48345 3.0064L3.60761 6.88223Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex-1 h-[13px]">
                        <div className="w-full h-[4px] bg-[rgba(201,201,201,0.22)] rounded-full mb-[5px]"></div>
                        <div className="w-[60%] h-[4px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="inline-flex px-[8px] py-[6px] items-center gap-[8px] rounded-[7px] bg-white absolute left-[15px] top-[6px] w-[115px] h-[28px]">
                      <div className="flex p-[4px] items-center gap-[4px] rounded-[12px] border border-[#8D8D8D] bg-[#8D8D8D] shadow-[0_0.503px_4.625px_rgba(47,152,255,1)]">
                        <svg className="w-[9px] h-[9px]" viewBox="0 0 10 10" fill="none">
                          <path d="M3.99433 7.2709L1.91016 5.18673L2.4312 4.66568L3.99433 6.22882L7.34912 2.87402L7.87017 3.39507L3.99433 7.2709Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex-1 h-[13px]">
                        <div className="w-full h-[4px] bg-[rgba(201,201,201,0.22)] rounded-full mb-[5px]"></div>
                        <div className="w-[60%] h-[4px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="inline-flex px-[8px] py-[6px] items-center gap-[8px] rounded-[7px] bg-white absolute left-[15px] top-[19px] w-[115px] h-[28px]">
                      <div className="flex p-[4px] items-center gap-[4px] rounded-[12px] border border-[#8D8D8D] bg-[#8D8D8D] shadow-[0_0.503px_4.625px_rgba(47,152,255,1)]">
                        <svg className="w-[9px] h-[9px]" viewBox="0 0 10 10" fill="none">
                          <path d="M3.99433 7.2709L1.91016 5.18673L2.4312 4.66568L3.99433 6.22882L7.34912 2.87402L7.87017 3.39507L3.99433 7.2709Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex-1 h-[13px]">
                        <div className="w-full h-[4px] bg-[rgba(201,201,201,0.22)] rounded-full mb-[5px]"></div>
                        <div className="w-[60%] h-[4px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="inline-flex px-[10px] py-[8px] items-center gap-[10px] rounded-[9px] bg-white absolute left-0 top-[38px] w-[149px] h-[37px]">
                      <div className="flex p-[5px] items-center gap-[5px] rounded-[16px] border border-[#1D8FFF] bg-[#1D8FFF] shadow-[0_0.653px_6.01px_rgba(47,152,255,1)]">
                        <svg className="w-[11px] h-[11px]" viewBox="0 0 12 12" fill="none">
                          <path d="M4.7391 9.14132L2.03125 6.43347L2.70821 5.75651L4.7391 7.7874L9.09779 3.42871L9.77475 4.10567L4.7391 9.14132Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex-1 h-[17px]">
                        <div className="w-full h-[5px] bg-[rgba(201,201,201,0.22)] rounded-full mb-[7px]"></div>
                        <div className="w-[60%] h-[5px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Status badges */}
                <div className="inline-flex transform rotate-[-2deg] px-[13px] py-[7px] justify-center items-center gap-[5px] rounded-[35px] bg-[#1D8FFF] absolute left-[205px] top-[162px] w-[94px] h-[28px]">
                  <svg className="w-[12px] h-[12px]" viewBox="0 0 14 14" fill="none">
                    <path d="M7.1719 11.4739C6.82211 11.4861 6.52224 11.3757 6.27229 11.1426C6.02233 10.9095 5.89125 10.6181 5.87903 10.2683C5.86682 9.9185 5.97725 9.61863 6.21034 9.36868C6.44343 9.11872 6.73486 8.98764 7.08465 8.97542C7.43443 8.96321 7.73431 9.07365 7.98426 9.30673C8.23421 9.53982 8.3653 9.83125 8.37751 10.181C8.38973 10.5308 8.27929 10.8307 8.04621 11.0806C7.81312 11.3306 7.52168 11.4617 7.1719 11.4739ZM4.25003 8.74921L3.16315 7.71151C3.63736 7.20299 4.20049 6.7935 4.85256 6.48306C5.50462 6.17261 6.21375 6.00401 6.97995 5.97725C7.74615 5.9505 8.46539 6.0713 9.13766 6.33967C9.80994 6.60804 10.4005 6.98349 10.9093 7.46603L9.89658 8.55203C9.51734 8.19838 9.08257 7.92589 8.59226 7.73455C8.10195 7.54322 7.58196 7.45714 7.0323 7.47634C6.48263 7.49553 5.96992 7.61767 5.49415 7.84274C5.01838 8.06782 4.60367 8.36997 4.25003 8.74921ZM2.05216 6.69967L0.966155 5.68695C1.70502 4.87734 2.57893 4.23395 3.58789 3.75678C4.59685 3.27961 5.69264 3.02038 6.87525 2.97908C8.05786 2.93778 9.16907 3.11995 10.2089 3.52557C11.2486 3.9312 12.1653 4.51206 12.9588 5.26816L11.9461 6.35416C11.2825 5.73528 10.5216 5.25946 9.66367 4.9267C8.8057 4.59394 7.89368 4.44443 6.9276 4.47817C5.96152 4.5119 5.06215 4.72467 4.22948 5.11647C3.39682 5.50827 2.67104 6.036 2.05216 6.69967Z" fill="white"/>
                  </svg>
                  <span className="text-white text-center font-urbanist text-[12px] font-medium leading-normal">Fast Load</span>
                </div>
                
                <div className="inline-flex transform rotate-[2deg] pr-[11px] pl-[1px] py-[1px] justify-center items-center gap-[5px] rounded-[35px] bg-[#D8FD5F] absolute left-0 top-[167px] w-[133px] h-[30px]">
                  <div className="flex h-[28px] px-[9px] py-[7px] justify-center items-center gap-[10px] rounded-[41px] bg-[#92BF00]">
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 31 30" fill="none">
                      <rect x="1.52734" y="0.731445" width="28.5" height="28" rx="14" transform="rotate(2 1.52734 0.731445)" fill="#92BF00"/>
                      <path d="M16.0681 9.41061L9.99398 16.2028L15.2408 16.386L14.4949 21.0295L20.569 14.2373L15.3222 14.0541L16.0681 9.41061Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#132A40] font-urbanist text-[12px] font-medium leading-normal">Loads in 0.9s</span>
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 15 15" fill="none">
                    <path d="M5.91801 11.1322L2.71108 7.6932L3.57083 6.89146L5.97603 9.47072L11.5116 4.30869L12.3134 5.16844L5.91801 11.1322Z" fill="#132A40"/>
                  </svg>
                </div>
                
                <div className="inline-flex transform rotate-[-3deg] px-[13px] py-[7px] justify-center items-center gap-[5px] rounded-[7px] border-[0.3px] border-black bg-white shadow-[0_3px_0_#F7B50D] absolute left-[180px] top-[231px] w-[105px] h-[28px]">
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 16 16" fill="none">
                    <path d="M10.6506 1.72252L4.82522 2.02781C4.18177 2.06153 3.68749 2.61049 3.72121 3.25393L4.20968 12.5745C4.24341 13.2179 4.79236 13.7122 5.43581 13.6785L11.2611 13.3732C11.9046 13.3395 12.3989 12.7905 12.3652 12.1471L11.8767 2.82652C11.843 2.18308 11.294 1.68879 10.6506 1.72252Z" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.22656 11.1953L8.23239 11.195" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#132A40] text-center font-urbanist text-[12px] font-medium leading-normal">Mobile First</span>
                </div>
                
                {/* Device status bar */}
                <div className="flex w-[141px] justify-between items-center absolute left-[95px] top-[18px] h-[5px]">
                  <div className="text-black font-urbanist text-[8px] font-medium">9:41</div>
                  <div className="flex items-center gap-[2px]">
                    <div className="flex items-center">
                      <div className="w-[4px] h-[3px] bg-black rounded-[1px]"></div>
                      <div className="w-[4px] h-[4px] bg-black rounded-[1px] ml-[1px]"></div>
                      <div className="w-[4px] h-[5px] bg-black rounded-[1px] ml-[1px]"></div>
                      <div className="w-[4px] h-[3px] bg-black/35 rounded-[1px] ml-[1px]"></div>
                    </div>
                    <div className="w-[25px] h-[12px] border border-black/35 rounded-[2px] ml-[2px] relative">
                      <div className="w-[20px] h-[8px] bg-black rounded-[1px] absolute left-[2px] top-[1px]"></div>
                      <div className="w-[2px] h-[6px] bg-black/40 rounded-r-[1px] absolute right-[-2px] top-[3px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Lead Capture Pages */}
          <div className="flex w-full max-w-[431px] h-auto lg:h-[383px] px-4 lg:px-[31px] py-4 lg:py-[16px] flex-col justify-center items-center gap-[10px] rounded-[18px] bg-[rgba(232,244,255,0.54)] relative">
            <div className="flex w-full max-w-[368px] flex-col items-start gap-[14px] relative">
              <div className="flex w-full max-w-[368px] px-4 lg:px-[20px] py-4 lg:py-[17px] flex-col items-center gap-4 lg:gap-[23px] rounded-[14px] bg-[rgba(255,255,255,0.11)] shadow-[0_4px_49.3px_rgba(67,162,255,0.15)] relative">
                <div className="flex flex-col items-center gap-[18px] w-full relative">
                  <div className="flex w-[231px] flex-col items-start gap-[8px] relative">
                    <div className="w-full text-[#132A40] text-center font-urbanist text-[14px] font-medium leading-normal">
                      Join 10,000+ Subscribers
                    </div>
                    <div className="w-full text-[#7B7B7B] text-center font-urbanist text-[12px] font-normal leading-normal">
                      Get Weekly Design Tips
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[14px] w-full relative">
                    <div className="flex flex-col justify-center items-center gap-[14px] w-full relative">
                      <div className="flex px-[10px] py-[13px] items-center gap-[10px] w-full rounded-[8px] border-2 border-[#1D8FFF] bg-white relative">
                        <span className="text-[#22384C] text-center font-urbanist text-[12px] font-medium leading-normal">Na |</span>
                      </div>
                      <div className="flex px-[10px] py-[13px] items-center gap-[10px] w-full rounded-[8px] border-2 border-[#E9E9E9] bg-[rgba(250,250,250,0.60)] relative">
                        <span className="text-[#A6AEB7] text-center font-urbanist text-[12px] font-medium leading-normal">Your@email.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-[4px] relative">
                  <svg className="w-[16px] h-[16px]" viewBox="0 0 17 16" fill="none">
                    <g clipPath="url(#clip0_1577_693)">
                      <path d="M15.8346 4L9.5013 10.3333L6.16797 7L1.16797 12" stroke="#00B45C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.832 4H15.832V8" stroke="#00B45C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1577_693">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-center font-urbanist text-[12px] font-normal leading-normal">
                    <span className="text-[#00B45C]">4,564</span>
                    <span className="text-[#8D8D8D]"> leads today</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[14px] w-full relative">
                <span className="w-full text-[#BBFF00] font-urbanist text-sm md:text-[16px] font-bold leading-normal">02</span>
                <h3 className="text-[#132A40] font-urbanist text-lg md:text-[20px] font-bold leading-normal">Lead Capture Pages</h3>
                <p className="w-full max-w-[359px] text-[#4F6070] font-urbanist text-sm md:text-[16px] font-normal leading-normal">
                  Simple, form-based pages that help grow your email or contact list.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[25px] w-full relative">
          {/* Card 3 - High-Converting Sales Pages */}
          <div className="flex h-[383px] px-[15px] py-[12px] items-center gap-[10px] rounded-[18px] bg-[rgba(232,244,255,0.54)] relative">
            <div className="flex w-full max-w-[329px] flex-col items-start gap-4 lg:gap-[24px] relative">
              <div className="flex w-full max-w-[329px] px-4 lg:px-[17px] py-4 lg:py-[13px] flex-col items-start gap-6 lg:gap-[34px] rounded-[12px] relative">
                <div className="flex justify-between items-center w-full relative">
                  <div className="flex px-[13px] py-[5px] justify-center items-center gap-[10px] rounded-[30px] bg-[#D8FD5F] relative">
                    <span className="text-[#071F36] font-urbanist text-[10px] font-bold leading-normal">-30% OFF</span>
                  </div>
                  <div className="flex w-[101px] justify-between items-center relative">
                    <div className="flex items-center gap-[-3px] relative">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-[18px] h-[18px]" viewBox="0 0 19 19" fill="none">
                          <path d="M4.86875 17L6.0875 11.7313L2 8.1875L7.4 7.71875L9.5 2.75L11.6 7.71875L17 8.1875L12.9125 11.7313L14.1313 17L9.5 14.2063L4.86875 17Z" fill="#FFCC00"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-black font-urbanist text-[12px] font-medium leading-normal">4.9</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[14px] w-full relative">
                  <div className="flex flex-col justify-end items-start gap-[12px] w-full relative">
                    <span className="w-full text-black font-urbanist text-[14px] font-normal leading-normal">Premiuim Landing Page Kit</span>
                    <div className="flex w-[58px] justify-between items-center relative">
                      <span className="text-black text-center font-urbanist text-[14px] font-medium leading-normal">$49</span>
                      <div className="w-[29px] h-[14px] flex-shrink-0 relative">
                        <span className="text-[#8D8D8D] text-center font-urbanist text-[12px] font-medium leading-normal absolute left-[5px] top-0 w-[21px] h-[14px]">$70</span>
                        <div className="w-[29px] h-0 flex-shrink-0 border-t border-[#7B7B7B] absolute left-0 top-[7px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-[10px] py-[10px] justify-center items-center gap-[10px] w-full rounded-[7px] bg-[#1D8FFF] relative">
                    <span className="text-white text-center font-urbanist text-[14px] font-medium leading-normal">Buy Now - Save $21</span>
                  </div>
                  <div className="flex justify-center items-center gap-[11px] relative">
                    <div className="flex items-center gap-[2px] relative">
                      <svg className="w-[12px] h-[12px]" viewBox="0 0 13 13" fill="none">
                        <path d="M6.5 11.5C6.5 11.5 10.5 9.5 10.5 6.5V3L6.5 1.5L2.5 3V6.5C2.5 9.5 6.5 11.5 6.5 11.5Z" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#8D8D8D] text-center font-urbanist text-[10px] font-medium leading-normal">Secure</span>
                    </div>
                    <div className="flex items-center gap-[2px] relative">
                      <svg className="w-[12px] h-[12px]" viewBox="0 0 13 13" fill="none">
                        <path d="M2.5 10.25C2.5 9.91848 2.6317 9.60054 2.86612 9.36612C3.10054 9.1317 3.41848 9 3.75 9H10.5" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.75 1.5H10.5V11.5H3.75C3.41848 11.5 3.10054 11.3683 2.86612 11.1339C2.6317 10.8995 2.5 10.5815 2.5 10.25V2.75C2.5 2.41848 2.6317 2.10054 2.86612 1.86612C3.10054 1.6317 3.41848 1.5 3.75 1.5Z" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#8D8D8D] text-center font-urbanist text-[10px] font-medium leading-normal">Fastcash</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[14px] w-full relative">
                <span className="w-full text-[#BBFF00] font-urbanist text-sm md:text-[16px] font-bold leading-normal">03</span>
                <h3 className="text-[#132A40] font-urbanist text-lg md:text-[20px] font-bold leading-normal">High-Converting Sales Pages</h3>
                <p className="w-full text-[#4F6070] font-urbanist text-[16px] font-medium leading-normal">
                  Persuasive pages designed to boost product sales or lead sign-ups.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Launch Pages */}
          <div className="flex w-full max-w-[359px] h-auto lg:h-[383px] px-4 lg:px-[15px] py-4 lg:py-[12px] justify-center items-center gap-[10px] rounded-[18px] bg-[rgba(232,244,255,0.54)] relative">
            <div className="flex w-full max-w-[310px] flex-col items-start gap-6 lg:gap-[32px] flex-shrink-0 relative">
              <div className="flex w-full max-w-[310px] px-4 lg:px-[19px] py-4 lg:py-[13px] flex-col items-center gap-4 lg:gap-[22px] rounded-[12px] bg-white shadow-[0_1px_20.5px_rgba(248,160,44,0.12)] relative">
                <div className="flex w-[150px] flex-col justify-center items-center gap-[8px] relative">
                  <div className="flex px-[19px] py-[7px] items-center gap-[4px] rounded-[44px] border-[0.4px] border-[#E0E0E0] bg-[#FAFAFA] relative">
                    <svg className="w-[12px] h-[12px]" viewBox="0 0 12 12" fill="none">
                      <g clipPath="url(#clip0_1577_4047)">
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 3V6L8 7" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1577_4047">
                          <rect width="12" height="12" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#8D8D8D] text-center font-urbanist text-[10px] font-medium leading-normal">Limited Time</span>
                  </div>
                  <span className="w-full text-[#132A40] text-center font-urbanist text-[14px] font-medium leading-normal">New Product Launch</span>
                </div>
                <div className="flex justify-center items-center gap-[38px] w-full relative">
                  {[
                    { value: "02", label: "Days" },
                    { value: "13", label: "Hours" },
                    { value: "56", label: "Minutes" },
                    { value: "28", label: "Seconds" }
                  ].map((item, i) => (
                    <div key={i} className="flex w-[37px] flex-col justify-center items-center gap-[8px] relative">
                      <div className="flex w-[37px] px-[10px] py-[10px] flex-col justify-center items-center gap-[10px] rounded-[8px] bg-[#E8F4FF] relative">
                        <span className="w-full text-[#43A2FF] text-center font-urbanist text-[14px] font-bold leading-normal">{item.value}</span>
                      </div>
                      <span className={`${i >= 2 ? 'w-[55px]' : 'w-full'} text-[#7B7B7B] text-center font-urbanist text-[12px] font-normal leading-normal`}>{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex px-[10px] py-[10px] justify-center items-center gap-[10px] w-full rounded-[7px] bg-[#1D8FFF] relative">
                  <span className="text-white font-urbanist text-[12px] font-bold leading-normal">Join the Launch</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[14px] w-full relative">
                <span className="w-full text-[#BBFF00] font-urbanist text-sm md:text-[16px] font-bold leading-normal">04</span>
                <h3 className="text-[#132A40] font-urbanist text-lg md:text-[20px] font-bold leading-normal">Launch Pages</h3>
                <p className="w-full text-[#4F6070] font-urbanist text-[16px] font-normal leading-normal">
                  Promote your product or event with bold visuals and countdowns.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - Ad-Specific Pages */}
          <div className="flex h-[383px] px-[15px] py-[12px] items-center gap-[10px] rounded-[18px] bg-[rgba(232,244,255,0.54)] relative">
            <div className="flex w-full max-w-[329px] flex-col items-center gap-8 lg:gap-[55px] relative">
              <div className="flex w-full max-w-[329px] flex-col items-center gap-4 lg:gap-[24px] relative">
                <div className="flex items-center gap-[15px] w-full relative">
                  <div className="flex w-[156px] h-[144px] px-[13px] py-[23px] flex-col items-start gap-[12px] rounded-[14px] border border-[#A2D1FF] bg-white relative">
                    <div className="flex w-[71px] justify-between items-center relative">
                      <div className="w-[11px] h-[11px] flex-shrink-0 bg-[#00B45C] rounded-full"></div>
                      <span className="text-[#8D8D8D] font-urbanist text-[12px] font-medium leading-normal">Google Ad</span>
                    </div>
                    <span className="w-full text-black font-urbanist text-[12px] font-medium leading-normal">Premiuim Templates</span>
                    <div className="flex flex-col items-start gap-[3px] w-full relative">
                      <span className="w-full text-[#8D8D8D] font-urbanist text-[10px] font-normal leading-normal">Save 30% on design kits</span>
                      <span className="w-full text-[#1D8FFF] font-urbanist text-[10px] font-normal leading-normal">ads.example.com</span>
                    </div>
                  </div>
                  <div className="flex w-[156px] h-[144px] px-[13px] py-[16px] flex-col items-start gap-[12px] rounded-[14px] border border-[#E9E9E9] bg-white shadow-[0_0_26.2px_rgba(187,255,0,0.35)] relative">
                    <div className="flex flex-col items-start gap-[41px] w-full relative">
                      <div className="flex flex-col items-start gap-[24px] w-full relative">
                        <div className="flex flex-col items-start gap-[6px] w-full relative">
                          <div className="flex flex-col items-start gap-[8px] w-full relative">
                            <div className="flex px-[21px] py-[8px] justify-center items-center gap-[10px] rounded-[36px] bg-[#D8FD5F] relative">
                              <span className="w-[60px] h-[12px] text-black font-urbanist text-[10px] font-medium leading-normal">Landing Page</span>
                            </div>
                            <span className="w-full text-black font-urbanist text-[12px] font-medium leading-normal">Premiuim Templates</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex px-[12px] py-[5px] items-end gap-[6px] rounded-[27px] border-[0.4px] border-[#43A2FF] bg-[rgba(162,209,255,0.30)] relative">
                  <svg className="w-[15px] h-[15px]" viewBox="0 0 16 17" fill="none">
                    <path d="M6.95466 12.2556L3.38672 8.68768L4.2787 7.79569L6.95466 10.4716L12.6978 4.72852L13.5898 5.6205L6.95466 12.2556Z" fill="#1D8FFF"/>
                  </svg>
                  <span className="text-[#43A2FF] font-urbanist text-[12px] font-medium leading-normal">Ad Match</span>
                  <svg className="w-[15px] h-[15px]" viewBox="0 0 16 17" fill="none">
                    <path d="M3.12891 8.5H11.8923" stroke="#1D8FFF" strokeWidth="1.25191" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.51172 4.11816L11.8934 8.49984L7.51172 12.8815" stroke="#1D8FFF" strokeWidth="1.25191" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[14px] w-full relative">
                <span className="w-full text-[#BBFF00] font-urbanist text-sm md:text-[16px] font-bold leading-normal">05</span>
                <h3 className="text-[#132A40] font-urbanist text-lg md:text-[20px] font-bold leading-normal">Ad-Specific Pages</h3>
                <p className="w-full text-[#4F6070] font-urbanist text-[16px] font-medium leading-normal">
                  Custom pages that match your ads for better clicks and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center items-start gap-4 lg:gap-[21px] relative">
        <div className="flex w-full max-w-[287px] h-[50px] pr-[3px] justify-end items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_rgba(47,152,255,0.63)] relative">
          <span className="text-white text-center font-urbanist text-[16px] font-medium leading-[23px] capitalize">Get Custom Service Package</span>
          <div className="flex p-[12px] items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF] relative">
            <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
              <path d="M4.16797 10H15.8346" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="flex w-full max-w-[220px] h-[50px] px-[19px] py-[10px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA] relative">
          <span className="text-[#091E42] font-urbanist text-[16px] font-medium leading-[100%] capitalize">Watch It Work</span>
          <svg className="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 20 20" fill="none">
            <path d="M4.16797 10H15.8346" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LPServices;
