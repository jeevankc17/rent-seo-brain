import React from "react";

export default function HomePageFeatures() {
  return (
    <section className="hidden w-full sm-flex justify-center py-8 lg:py-[50px]">
      <div className="w-full max-w-[1128px] px-4 lg:px-0 flex flex-col items-center gap-8 lg:gap-[50px]">
        {/* Title Section */}
        <div className="w-full max-w-[519px] h-auto flex flex-col items-center gap-4">
          {/* Tagline */}
          <div className="w-auto py-1 lg:py-[5px] flex justify-center items-center gap-1 lg:gap-[6px] rounded-[25px] lg:rounded-[45px] border border-[#1D8FFF] relative">
            <div className="flex w-auto py-1 lg:py-[2px] px-2 items-center gap-1 lg:gap-[6px] flex-shrink-0 rounded-[25px] lg:rounded-[45px] bg-[#1D8FFF]">
              <svg width="12" height="12" className="lg:w-[15px] lg:h-[15px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z" fill="white"/>
              </svg>
              <span className="text-white font-urbanist text-xs lg:text-[14px] font-normal leading-[18px] lg:leading-[23px] capitalize">
                Why rent SEO Brain
              </span>
            </div>
          </div>

          {/* Title and description */}
          <div className="h-auto flex flex-col items-center gap-3 lg:gap-4 flex-shrink-0 self-stretch">
            <h2 className="self-stretch text-[#12579C] text-center font-urbanist text-xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
              SEO That Works for You
            </h2>
            <p className="self-stretch text-[#6A7986] text-center font-urbanist text-sm md:text-base lg:text-[16px] font-normal leading-[18px] md:leading-[20px] lg:leading-[23px] px-4">
              Flexible, data-driven SEO solutions tailored to your goals—whether you're a solo creator or scaling agency.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-[552px] flex flex-col items-start gap-6">
            {/* Card 1: On-Demand Tools */}
            <div className="h-auto lg:h-[452px] flex justify-center items-center self-stretch relative">
              <div className="w-full lg:w-[552px] h-auto lg:h-[452px] rounded-[11px] bg-white shadow-[0_4px_57.3px_0_rgba(247,181,13,0.17)] relative lg:absolute left-0 top-0">
                {/* Decorative dots */}
                <div className="absolute left-[-27px] top-[-6px] w-[182px] h-[33px] flex items-center content-center gap-[3px] flex-wrap">
                  {Array(39).fill(0).map((_, i) => (
                    <circle key={i} cx="1.5" cy="-1.5" r="4.5" fill="#F4F4F4" className="w-[9px] h-[9px]" style={{display: 'block', borderRadius: '50%', backgroundColor: '#F4F4F4'}} />
                  ))}
                </div>

                <div className="relative lg:absolute left-4 lg:left-[18px] top-6 lg:top-[27px] right-4 lg:right-[18px] bottom-6 lg:bottom-[27px] flex flex-col items-center gap-3 overflow-hidden p-4 lg:p-0">
                  {/* Tool Interface */}
                  <div className="flex py-[18px] px-[13px] flex-col items-center gap-5 self-stretch rounded-[15px] bg-white shadow-[0_4px_29.4px_0_rgba(47,152,255,0.08)]">
                    <div className="flex flex-col items-end gap-4 self-stretch">
                      <div className="flex flex-col items-center gap-[14px] self-stretch">
                        <div className="flex flex-col items-start gap-[14px] self-stretch">
                          {/* Progress bar */}
                          <div className="h-3 flex flex-col justify-center items-start self-stretch relative">
                            <div className="w-full h-[11px] bg-[#E9E9E9] rounded-full relative">
                              <div className="absolute left-0 top-0 w-[44%] bg-[#F78C01] rounded-full h-[11px]"></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center self-stretch">
                            <span className="text-[#34475A] font-urbanist text-xs lg:text-[12px] font-medium">Progress</span>
                            <span className="text-[#34475A] font-urbanist text-xs lg:text-[12px] font-medium">50%</span>
                          </div>
                        </div>

                        {/* Stats boxes */}
                        <div className="flex justify-center items-center gap-[17px] self-stretch">
                          <div className="flex flex-1 py-[6px] px-[17px] flex-col justify-center items-center gap-[9px] rounded-[6px] bg-[#E8F4FF]">
                            <span className="self-stretch text-[#12579C] text-center font-urbanist text-sm lg:text-[16px] font-bold">50+</span>
                            <span className="self-stretch text-[#12579C] text-center font-urbanist text-xs lg:text-[14px] font-normal">Tools Available</span>
                          </div>
                          <div className="flex flex-1 py-[6px] px-[17px] flex-col justify-center items-center gap-[9px] rounded-[6px] bg-[#E8F4FF]">
                            <span className="self-stretch text-[#12579C] text-center font-urbanist text-sm lg:text-[16px] font-bold">49</span>
                            <span className="self-stretch text-[#12579C] text-center font-urbanist text-xs lg:text-[14px] font-normal">User Rating</span>
                          </div>
                        </div>
                      </div>

                      {/* Tool tabs */}
                      <div className="flex py-[6px] px-[16px] justify-center items-center gap-[8px] self-stretch rounded-[34px] bg-[#FAFAFA]">
                        <div className="flex flex-1 py-[6px] px-[8px] justify-center items-center gap-[6px] rounded-[32px] bg-[#1D8FFF]">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.41667 11.5833C8.994 11.5833 11.0833 9.494 11.0833 6.91667C11.0833 4.33934 8.994 2.25 6.41667 2.25C3.83934 2.25 1.75 4.33934 1.75 6.91667C1.75 9.494 3.83934 11.5833 6.41667 11.5833Z" stroke="white" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.2523 12.7499L9.71484 10.2124" stroke="white" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-white text-center font-urbanist text-xs lg:text-[14px] font-medium">Keyword</span>
                        </div>
                        <div className="flex flex-1 py-[6px] px-[8px] justify-center items-center gap-[6px] rounded-[32px] border border-[#8D8D8D]">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.33203 6.9165C3.72442 6.9165 5.05978 7.46963 6.04434 8.45419C7.02891 9.43876 7.58203 10.7741 7.58203 12.1665" stroke="#8D8D8D" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.33203 2.8335C4.80739 2.8335 7.18136 3.81683 8.93169 5.56717C10.682 7.31751 11.6654 9.69148 11.6654 12.1668" stroke="#8D8D8D" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.91536 12.1667C3.23753 12.1667 3.4987 11.9055 3.4987 11.5833C3.4987 11.2612 3.23753 11 2.91536 11C2.5932 11 2.33203 11.2612 2.33203 11.5833C2.33203 11.9055 2.5932 12.1667 2.91536 12.1667Z" stroke="#8D8D8D" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-[#8D8D8D] text-center font-urbanist text-xs lg:text-[14px] font-medium">Audit</span>
                        </div>
                        <div className="flex flex-1 py-[6px] px-[8px] justify-center items-center gap-[6px] rounded-[32px] border border-[#8D8D8D]">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5013 13.3332C10.723 13.3332 13.3346 10.7215 13.3346 7.49984C13.3346 4.27818 10.723 1.6665 7.5013 1.6665C4.27964 1.6665 1.66797 4.27818 1.66797 7.49984C1.66797 10.7215 4.27964 13.3332 7.5013 13.3332Z" stroke="#8D8D8D" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11Z" stroke="#8D8D8D" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5026 8.66683C8.14694 8.66683 8.66927 8.14449 8.66927 7.50016C8.66927 6.85583 8.14694 6.3335 7.5026 6.3335C6.85827 6.3335 6.33594 6.85583 6.33594 7.50016C6.33594 8.14449 6.85827 8.66683 7.5026 8.66683Z" stroke="#8D8D8D" strokeWidth="1.44318" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-[#8D8D8D] text-center font-urbanist text-xs lg:text-[14px] font-medium">Backlink</span>
                        </div>
                      </div>
                    </div>

                    <span className="self-stretch text-[#8D8D8D] text-center font-urbanist text-xs lg:text-[12px] font-normal">
                      Search Volume : 12,000 | Keyword Difficulty : 29
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-[4px] self-stretch px-2">
                    <span className="text-[#F78C01] font-urbanist text-sm lg:text-[16px] font-bold">01</span>
                    <div className="flex flex-col items-start gap-[1px] self-stretch">
                      <h3 className="text-[#132A40] font-urbanist text-lg lg:text-[20px] font-bold">On-Demand Tools</h3>
                      <p className="relative z-10 text-[#4F6070] font-urbanist text-sm lg:text-[16px] font-normal">
                        Access 20+ powerful SEO tools instantly—no installation, no contracts. Everything runs in-browser.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Affordable & Scalable */}
            <div className="h-auto lg:h-[432px] flex justify-center items-center self-stretch relative">
              <div className="w-full lg:w-[552px] h-auto lg:h-[432px] rounded-[11px] bg-white shadow-[0_4px_57.3px_0_rgba(247,181,13,0.17)] relative lg:absolute left-0 top-0">
                {/* Decorative dots */}
                <div className="absolute left-[187px] top-[63px] w-[177px] h-[69px] flex items-center content-center gap-[3px] flex-wrap">
                  {Array(105).fill(0).map((_, i) => (
                    <div key={i} className="w-[9px] h-[9px] bg-[#F4F4F4] rounded-full" />
                  ))}
                </div>

                <div className="relative lg:absolute left-4 lg:left-[25px] top-6 lg:top-[25px] right-4 lg:right-[25px] bottom-6 lg:bottom-[25px] flex flex-col items-center gap-4 lg:gap-[25px] overflow-hidden p-4 lg:p-0">
                  {/* Pricing Interface */}
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="flex py-0 px-6 justify-between items-center self-stretch rounded-[345px]">
                      <span className="text-[#12579C] text-center font-urbanist text-xs lg:text-[14px] font-medium">View Features ( Free )</span>
                      <div className="flex py-[5px] px-[10px] justify-center items-center gap-[10px] rounded-[27px] border border-[#00B45C] bg-[rgba(0,180,92,0.16)]">
                        <span className="text-[#00B45C] text-center font-urbanist text-xs lg:text-[12px] font-medium">4 included</span>
                      </div>
                    </div>

                    <div className="flex py-[7px] px-0 flex-col items-center gap-[14px] self-stretch rounded-[9px] bg-[rgba(255,255,255,0.97)]">
                      <div className="flex justify-center items-center gap-[10px] self-stretch">
                        <span className="text-[#5B6B7A] text-center font-urbanist text-xs lg:text-[14px] font-medium">Free</span>
                        <div className="flex w-[40px] h-[24.314px] py-[1.02px] px-[1.569px_1.569px_17.255px] justify-end items-center rounded-[78.431px] bg-[#34C759] relative">
                          <div className="w-[21px] h-[21px] flex-shrink-0 rounded-[78.431px] bg-white shadow-[0_0_0_0.784px_rgba(0,0,0,0.04),0_2.353px_6.275px_0_rgba(0,0,0,0.15),0_2.353px_0.784px_0_rgba(0,0,0,0.06)] absolute left-[17px] top-[1px]"></div>
                        </div>
                        <span className="text-[#5B6B7A] text-center font-urbanist text-xs lg:text-[14px] font-medium">Enterprise</span>
                      </div>
                      <div className="w-[122px] flex flex-col items-center gap-[7px]">
                        <span className="self-stretch text-[#12579C] text-center font-urbanist text-base lg:text-[18px] font-bold">Free</span>
                        <span className="self-stretch text-[#12579C] text-center font-urbanist text-xs lg:text-[14px] font-normal">Basic Tools Included</span>
                      </div>
                    </div>

                    <div className="flex py-[10px] px-[10px] justify-center items-center gap-[10px] self-stretch rounded-[4px] bg-[#1D8FFF]">
                      <span className="text-white text-center font-urbanist text-xs lg:text-[14px] font-medium">Compare All Plans</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-[14px] self-stretch px-2">
                    <span className="text-[#F78C01] font-urbanist text-sm lg:text-[16px] font-bold">03</span>
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      <h3 className="text-[#132A40] font-urbanist text-lg lg:text-[20px] font-bold">Affordable & Scalable</h3>
                      <p className="relative z-10 text-[#4F6070] font-urbanist text-sm lg:text-[16px] font-normal">
                        Start free, pay as you grow—no hidden fees, no long-term contracts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[552px] flex flex-col items-start gap-6">
            {/* Card 2: Actionable Insights */}
            <div className="h-auto lg:h-[300px] flex justify-center items-center self-stretch relative">
              <div className="w-full lg:w-[552px] h-auto lg:h-[300px] rounded-[11px] bg-white shadow-[0_4px_57.3px_0_rgba(247,181,13,0.17)] relative lg:absolute left-0 top-0">
                {/* Decorative dots */}
                <div className="absolute left-[472px] top-[75px] w-[80px] h-[69px] flex items-center content-center gap-[3px] flex-wrap">
                  {Array(49).fill(0).map((_, i) => (
                    <div key={i} className="w-[9px] h-[9px] bg-[#F4F4F4] rounded-full" />
                  ))}
                </div>

                <div className="relative lg:absolute left-4 lg:left-[21px] top-6 lg:top-[27px] right-4 lg:right-[21px] bottom-6 lg:bottom-[27px] flex flex-col items-start gap-4 overflow-hidden p-4 lg:p-0">
                  {/* Chart/Image placeholder */}
                  <div className="h-[94px] self-stretch rounded-[8px] bg-gradient-to-r from-pink-200 to-purple-200"></div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-[14px] self-stretch px-2">
                    <span className="text-[#F78C01] font-urbanist text-sm lg:text-[16px] font-bold">02</span>
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      <h3 className="text-[#132A40] font-urbanist text-lg lg:text-[20px] font-bold">Actionable Insights</h3>
                      <p className="text-[#4F6070] font-urbanist text-sm lg:text-[16px] font-normal">
                        Get clear reports with action items, priority scores, and implementation steps—ready for your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Boost SEO Performance */}
            <div className="h-auto lg:h-[534px] flex justify-center items-center self-stretch relative">
              <div className="w-full lg:w-[552px] h-auto lg:h-[534px] rounded-[11px] bg-white shadow-[0_4px_57.3px_0_rgba(247,181,13,0.17)] relative lg:absolute left-0 top-0">
                {/* Decorative dots - rotated */}
                <div className="absolute left-[487px] top-[-110px] w-[182px] h-[45px] flex items-center content-center gap-[3px] flex-wrap transform rotate-[89.708deg]">
                  {Array(21).fill(0).map((_, i) => (
                    <div key={i} className="w-[9px] h-[9px] bg-[#F4F4F4] rounded-full" />
                  ))}
                </div>

                <div className="relative lg:absolute left-4 lg:left-[25px] top-6 lg:top-[36px] right-4 lg:right-[25px] bottom-6 lg:bottom-[36px] flex flex-col items-center gap-6 lg:gap-[40px] overflow-hidden p-4 lg:p-0">
                  {/* Performance Visual */}
                  <div className="w-full max-w-[334.949px] h-auto lg:h-[190.084px] shadow-[0_7.812px_80.075px_0_rgba(47,152,255,0.63)] relative">
                    <div className="w-[335px] h-[190px] flex-shrink-0 absolute left-0 top-0">
                      {/* Task items */}
                      <div className="inline-flex py-[13.529px] px-[18.039px] items-center gap-[18.039px] rounded-[15.032px] bg-white absolute left-[39px] top-[127px] w-[258px] h-[63px]">
                        <div className="flex py-[8.199px] px-[8.199px] items-center gap-[8.199px] rounded-[27.878px] border-[1.127px] border-[#8D8D8D] bg-[#8D8D8D] shadow-[0_1.127px_10.372px_0_#2F98FF]">
                          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.65023 15.4365L3.97656 10.7628L5.14498 9.59438L8.65023 13.0996L16.1732 5.57666L17.3416 6.74508L8.65023 15.4365Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex w-[167.61px] flex-col items-start gap-[18.039px]">
                          <div className="w-full h-[9.01936px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                          <div className="w-[60%] h-[9.01936px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                        </div>
                      </div>

                      <div className="inline-flex py-[13.529px] px-[18.039px] items-center gap-[18.039px] rounded-[15.032px] bg-white absolute left-[33px] top-[13px] w-[258px] h-[63px]">
                        <div className="flex py-[8.199px] px-[8.199px] items-center gap-[8.199px] rounded-[27.878px] border-[1.127px] border-[#8D8D8D] bg-[#8D8D8D] shadow-[0_1.127px_10.372px_0_#2F98FF]">
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.79086 14.9423L4.11719 10.2687L5.28561 9.10024L8.79086 12.6055L16.3138 5.08252L17.4822 6.25094L8.79086 14.9423Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex w-[167.61px] flex-col items-start gap-[18.039px]">
                          <div className="w-full h-[9.01936px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                          <div className="w-[60%] h-[9.01936px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                        </div>
                      </div>

                      <div className="inline-flex py-[13.529px] px-[18.039px] items-center gap-[18.039px] rounded-[15.032px] bg-white absolute left-[33px] top-[43px] w-[258px] h-[63px]">
                        <div className="flex py-[8.199px] px-[8.199px] items-center gap-[8.199px] rounded-[27.878px] border-[1.127px] border-[#8D8D8D] bg-[#8D8D8D] shadow-[0_1.127px_10.372px_0_#2F98FF]">
                          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.79086 15.0947L4.11719 10.421L5.28561 9.25258L8.79086 12.7578L16.3138 5.23486L17.4822 6.40328L8.79086 15.0947Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex w-[167.61px] flex-col items-start gap-[18.039px]">
                          <div className="w-full h-[9.01936px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                          <div className="w-[60%] h-[9.01936px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                        </div>
                      </div>

                      {/* Highlighted task */}
                      <div className="inline-flex py-[17.578px] px-[23.437px] items-center gap-[23.437px] rounded-[19.531px] bg-white absolute left-0 top-[85px] w-[335px] h-[82px]">
                        <div className="flex py-[10.653px] px-[10.653px] items-center gap-[10.653px] rounded-[36.22px] border-[1.465px] border-[#1D8FFF] bg-[#D8FD5F] shadow-[0_1.465px_13.476px_0_#2F98FF]">
                          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7871 19.6198L4.71484 13.5476L6.2329 12.0296L10.7871 16.5837L20.5612 6.80957L22.0793 8.32763L10.7871 19.6198Z" fill="#071F36"/>
                          </svg>
                        </div>
                        <div className="flex w-[217.766px] flex-col items-start gap-[23.437px]">
                          <div className="w-full h-[11.7183px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                          <div className="w-[60%] h-[11.7183px] bg-[rgba(201,201,201,0.22)] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="w-[117px] h-[106px] flex-shrink-0 absolute left-[109px] top-[42px] bg-gradient-to-b from-[rgba(247,181,13,0.64)] via-[rgba(187,255,0,0.66)] to-[rgba(67,162,255,0.71)] rounded-full blur-[89px]"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-[14px] self-stretch px-2">
                    <span className="text-[#F78C01] font-urbanist text-sm lg:text-[16px] font-bold">04</span>
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      <h3 className="text-[#132A40] font-urbanist text-lg lg:text-[20px] font-bold">Boost SEO Performance</h3>
                      <p className="text-[#4F6070] font-urbanist text-sm lg:text-[16px] font-normal">
                        Track progress with real-time monitoring, automated reports, and AI-powered strategy adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-[22px] px-4">
          <div className="flex w-full sm:w-[220px] lg:w-[265px] h-[45px] lg:h-[50px] py-0 px-[3px] justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[35px] lg:rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
            <span className="text-white text-center font-urbanist text-xs md:text-sm lg:text-[16px] font-medium leading-[18px] md:leading-[20px] lg:leading-[23px] capitalize">
              Get Your SEO Audit Now
            </span>
            <div className="flex py-2 lg:py-3 px-2 lg:px-3 items-center gap-[10px] rounded-[24px] lg:rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
              <svg width="16" height="16" className="lg:w-5 lg:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16797 10H15.8346" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex w-full sm:w-[200px] lg:w-[229px] h-[45px] lg:h-[50px] py-[8px] lg:py-[10px] px-4 lg:px-[19px] justify-center items-center gap-2 lg:gap-[7px] rounded-[25px] lg:rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
            <span className="text-[#091E42] font-urbanist text-xs md:text-sm lg:text-[16px] font-medium leading-[100%] capitalize">
              See Real Client Results
            </span>
            <svg width="18" height="16" className="lg:w-[21px] lg:h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66797 10H16.3346" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
