import React from "react";

export const BenefitsSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1440px] h-[1046px] bg-[#0C0C0F] mx-auto">
      {/* Background blur elements */}
      <div 
        className="absolute w-[464px] h-[403px] bg-[#2F98FF] opacity-63 rounded-full blur-[365px] pointer-events-none right-0 top-[277px]"
      />
      <div 
        className="absolute w-[464px] h-[403px] bg-[#2F98FF] opacity-63 rounded-full blur-[365px] pointer-events-none left-0 top-[254px]"
      />

      {/* Content Container */}
      <div 
        className="relative w-full max-w-[1128px] h-[839px] mx-auto"
        style={{ top: '103px' }}
      >
        <div className="flex flex-col items-start gap-[50px] w-[1128px] h-[839px]">
          
          {/* Header section */}
          <div className="flex flex-col items-start gap-6 w-[550px]">
            
            {/* Badge */}
            <div className="flex items-center justify-center gap-1.5 px-2.5 py-[5px] w-[167px] bg-[#12579C] rounded-[45px] shadow-[0_3px_1.1px_0_#FFF]">
              <svg className="w-[15px] h-[15px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z" fill="#E8F4FF"/>
              </svg>
              <span className="text-[#E8F4FF] font-urbanist text-sm font-medium leading-[23px]">
                What Sets Us Apart
              </span>
            </div>

            {/* Title and description */}
            <div className="flex flex-col items-start gap-4 w-[550px]">
              <h2 className="h-[116px] text-[#E8F4FF] font-urbanist text-[50px] font-bold leading-[57px] w-[550px]">
                Your Page, Designed With Purpose
              </h2>
              <p className="text-[#EBEDEF] font-urbanist text-base font-normal leading-[23px] w-[550px]">
                Every element we design has a reason behind it. With experience crafting high-converting pages, we combine proven UX strategies, CRO insights, and real user data
              </p>
            </div>
          </div>

          {/* Main content section */}
          <div className="flex items-end gap-[73px] w-[1128px]">
            
            {/* Left side - Performance metrics */}
            <div className="flex flex-col items-start gap-[21px] w-[480px]">
              
              {/* Dashboard mockup */}
              <svg className="h-[103px] w-[480px] rounded-[11px]" viewBox="0 0 480 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="103" rx="11" fill="#34475A" fillOpacity="0.2"/>
                <path d="M26.5 23.5H374.5" stroke="#D0D5DD" strokeOpacity="0.32" strokeWidth="9" strokeLinecap="round"/>
                <path d="M27 45H208" stroke="#D0D5DD" strokeOpacity="0.32" strokeWidth="9" strokeLinecap="round"/>
                <path d="M27 70H206" stroke="#43A2FF" strokeWidth="9" strokeLinecap="round"/>
              </svg>

              <div className="flex flex-col items-center gap-10 w-[480px]">
                <div className="flex flex-col items-center gap-[23px] w-[480px]">
                  
                  {/* Heatmap Active badge */}
                  <div className="flex items-center justify-center gap-2.5 px-[17px] py-1 bg-[#FFCECE] rounded-[4453px]">
                    <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.792969 9.50033C0.792969 9.50033 3.95964 3.16699 9.5013 3.16699C15.043 3.16699 18.2096 9.50033 18.2096 9.50033C18.2096 9.50033 15.043 15.8337 9.5013 15.8337C3.95964 15.8337 0.792969 9.50033 0.792969 9.50033Z" stroke="#E61A1A" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.5013 11.8753C10.813 11.8753 11.8763 10.812 11.8763 9.50033C11.8763 8.18865 10.813 7.12533 9.5013 7.12533C8.18963 7.12533 7.1263 8.18865 7.1263 9.50033C7.1263 10.812 8.18963 11.8753 9.5013 11.8753Z" stroke="#E61A1A" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#E51A1A] font-urbanist text-sm font-medium leading-[23px] capitalize">
                      Heatmap Active
                    </span>
                  </div>

                  {/* Metrics grid - 2x2 layout with exact gaps */}
                  <div className="flex flex-wrap items-start content-start gap-x-[77px] gap-y-9 w-[480px]">
                    
                    {/* SEO Score */}
                    <div className="flex flex-col items-center gap-[27px] w-[198px] px-[11px] py-3.5 rounded-[11px]">
                      <div className="flex flex-col justify-center items-center gap-1.5">
                        <div className="flex justify-center items-center gap-2 w-[76px]">
                          <svg className="w-[18px] h-[18px]" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25 14.75C11.5637 14.75 14.25 12.0637 14.25 8.75C14.25 5.43629 11.5637 2.75 8.25 2.75C4.93629 2.75 2.25 5.43629 2.25 8.75C2.25 12.0637 4.93629 14.75 8.25 14.75Z" stroke="#1D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.7469 16.2498L12.4844 12.9873" stroke="#1D8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-white font-urbanist text-2xl font-semibold leading-[23px] capitalize">94%</span>
                        </div>
                        <span className="text-white text-center font-urbanist text-sm font-normal leading-[23px] capitalize">SEO Score</span>
                      </div>
                      <svg className="h-[0.5px] w-[182px]" viewBox="0 0 182 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5H177.5" stroke="#D0D5DD" strokeOpacity="0.32" strokeWidth="9" strokeLinecap="round"/>
                        <path d="M5 5.5H161" stroke="#43A2FF" strokeWidth="9" strokeLinecap="round"/>
                      </svg>
                    </div>

                    {/* CRO Rating */}
                    <div className="flex flex-col items-center gap-[27px] w-[198px] px-[11px] py-3.5 rounded-[11px]">
                      <div className="flex flex-col justify-center items-center gap-1.5">
                        <div className="flex justify-center items-center gap-2 w-[76px]">
                          <svg className="w-[18px] h-[18px]" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.25 5L10.125 12.125L6.375 8.375L0.75 14" stroke="#00B45C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.75 5H17.25V9.5" stroke="#00B45C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-white font-urbanist text-2xl font-semibold leading-[23px] capitalize">87%</span>
                        </div>
                        <span className="text-white text-center font-urbanist text-sm font-normal leading-[23px] capitalize">CRO Rating</span>
                      </div>
                      <svg className="h-[0.5px] w-[182px]" viewBox="0 0 182 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5H177.5" stroke="#D0D5DD" strokeOpacity="0.32" strokeWidth="9" strokeLinecap="round"/>
                        <path d="M5 6H145" stroke="#00B45C" strokeWidth="9" strokeLinecap="round"/>
                      </svg>
                    </div>

                    {/* Mobile Score */}
                    <div className="flex flex-col items-center gap-[27px] w-[198px] px-[11px] py-3.5 rounded-[11px]">
                      <div className="flex flex-col justify-center items-center gap-1.5">
                        <div className="flex justify-center items-center gap-2 w-[76px]">
                          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.168 1.66699H5.83464C4.91416 1.66699 4.16797 2.41318 4.16797 3.33366V16.667C4.16797 17.5875 4.91416 18.3337 5.83464 18.3337H14.168C15.0884 18.3337 15.8346 17.5875 15.8346 16.667V3.33366C15.8346 2.41318 15.0884 1.66699 14.168 1.66699Z" stroke="#FFFF00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 15H10.0083" stroke="#FFFF00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-white font-urbanist text-2xl font-semibold leading-[23px] capitalize">92%</span>
                        </div>
                        <span className="text-white text-center font-urbanist text-sm font-normal leading-[23px] capitalize">Mobile Score</span>
                      </div>
                      <svg className="h-[0.5px] w-[182px]" viewBox="0 0 182 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4.5H177.5" stroke="#D0D5DD" strokeOpacity="0.32" strokeWidth="9" strokeLinecap="round"/>
                        <path d="M5 5H144" stroke="#FFFF00" strokeWidth="9" strokeLinecap="round"/>
                      </svg>
                    </div>

                    {/* Page Speed */}
                    <div className="flex flex-col items-center gap-[27px] w-[198px] px-[11px] py-3.5 rounded-[11px]">
                      <div className="flex flex-col justify-center items-center gap-1.5">
                        <div className="flex justify-center items-center gap-2 w-[76px]">
                          <svg className="w-[19px] h-[19px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9154 10H14.7487L12.3737 17.125L7.6237 2.875L5.2487 10H2.08203" stroke="#F78C01" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-white text-center font-urbanist text-2xl font-semibold leading-[23px] capitalize">89%</span>
                        </div>
                        <span className="text-white text-center font-urbanist text-sm font-normal leading-[23px] capitalize">Page Speed</span>
                      </div>
                      <svg className="h-[0.5px] w-[182px]" viewBox="0 0 182 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4.5H177.5" stroke="#D0D5DD" strokeOpacity="0.32" strokeWidth="9" strokeLinecap="round"/>
                        <path d="M5 5H135" stroke="#F78C01" strokeWidth="9" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Real-time optimization */}
                <div className="flex flex-col items-center gap-4 w-[284px]">
                  <h3 className="text-white text-center font-urbanist text-xl font-medium leading-[23px] capitalize w-[284px]">
                    Real-time optimization Preview
                  </h3>
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 fill-[#00B45C]" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6.5" cy="6.5" r="6" fill="#00B45C"/>
                    </svg>
                    <span className="text-[#C9C9C9] text-center font-urbanist text-lg font-normal leading-[23px] capitalize">
                      Live Performance Monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Benefits card */}
            <div className="flex flex-col items-start gap-9 w-[575px]">
              
              {/* Benefits card */}
              <div className="flex flex-col justify-center items-start gap-6 px-[33px] py-8 w-[575px] bg-white rounded-[17px]">
                <div className="flex flex-col justify-center items-start gap-[38px] w-[509px]">
                  
                  {/* Benefits list */}
                  <div className="flex flex-col items-start gap-3 w-[509px]">
                    
                    {/* Benefit 1 */}
                    <div className="flex items-center gap-[19px] w-[509px]">
                      <div className="flex justify-center items-center gap-2.5 p-3 bg-[#FEF4E6] rounded-[344px]">
                        <svg className="w-[17px] h-[17px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.81672 9.83842L4.95964 16.2913L8.5013 14.1663L12.043 16.2913L11.1859 9.83134M13.4596 5.66634C13.4596 8.40475 11.2397 10.6247 8.5013 10.6247C5.76289 10.6247 3.54297 8.40475 3.54297 5.66634C3.54297 2.92793 5.76289 0.708008 8.5013 0.708008C11.2397 0.708008 13.4596 2.92793 13.4596 5.66634Z" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#132A40] font-urbanist text-lg font-medium leading-[23px] capitalize">
                        3+ years of conversion-optimized design experience
                      </span>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex items-center gap-[19px] w-[509px]">
                      <div className="flex justify-center items-center gap-2.5 p-3 bg-[#FEF4E6] rounded-[344px]">
                        <svg className="w-[17px] h-[17px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.2904 4.25L9.5612 10.9792L6.01953 7.4375L0.707031 12.75" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.043 4.25H16.293V8.5" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#132A40] font-urbanist text-lg font-medium leading-[23px] capitalize">
                        Data-driven structure , heatmaps, CRO, and UX testing
                      </span>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex items-center gap-[19px] w-[509px]">
                      <div className="flex justify-center items-center gap-2.5 p-3 bg-[#FEF4E6] rounded-[344px]">
                        <svg className="w-[17px] h-[17px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.043 1.41699H4.95964C4.17723 1.41699 3.54297 2.05126 3.54297 2.83366V14.167C3.54297 14.9494 4.17723 15.5837 4.95964 15.5837H12.043C12.8254 15.5837 13.4596 14.9494 13.4596 14.167V2.83366C13.4596 2.05126 12.8254 1.41699 12.043 1.41699Z" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.5 12.75H8.50708" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#132A40] font-urbanist text-lg font-medium leading-[23px] capitalize">
                        Mobile-first and SEO-ready designs
                      </span>
                    </div>

                    {/* Benefit 4 */}
                    <div className="flex items-center gap-[19px] w-[509px]">
                      <div className="flex justify-center items-center gap-2.5 p-3 bg-[#FEF4E6] rounded-[344px]">
                        <svg className="w-[17px] h-[17px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.293 2.83301V7.08301H12.043" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M0.707031 14.167V9.91699H4.95703" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2.48495 6.37528C2.84419 5.36008 3.45475 4.45244 4.25965 3.73703C5.06456 3.02163 6.03757 2.52178 7.0879 2.28413C8.13823 2.04648 9.23165 2.07877 10.2661 2.37799C11.3006 2.67722 12.2424 3.23362 13.0037 3.99528L16.2904 7.08361M0.707031 9.91694L3.9937 13.0053C4.75498 13.7669 5.6968 14.3233 6.73127 14.6226C7.76575 14.9218 8.85916 14.9541 9.90949 14.7164C10.9598 14.4788 11.9328 13.9789 12.7377 13.2635C13.5426 12.5481 14.1532 11.6405 14.5124 10.6253" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#132A40] font-urbanist text-lg font-medium leading-[23px] capitalize">
                        Unlimited design revisions
                      </span>
                    </div>

                    {/* Benefit 5 */}
                    <div className="flex items-center gap-[19px] w-[509px]">
                      <div className="flex justify-center items-center gap-2.5 p-3 bg-[#FEF4E6] rounded-[344px]">
                        <svg className="w-[17px] h-[17px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.5846 8.5H12.7513L10.6263 14.875L6.3763 2.125L4.2513 8.5H1.41797" stroke="#F78C01" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#132A40] font-urbanist text-lg font-medium leading-[23px] capitalize">
                        Fast delivery & responsive support
                      </span>
                    </div>
                  </div>

                  {/* Check items */}
                  <div className="flex items-center gap-[26px]">
                    <div className="flex justify-center items-center gap-[7px]">
                      <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1376_81891)">
                          <path d="M17.4154 8.77197V9.5003C17.4144 11.2075 16.8616 12.8686 15.8394 14.2359C14.8172 15.6032 13.3805 16.6035 11.7434 17.0876C10.1062 17.5716 8.35653 17.5135 6.75515 16.9218C5.15378 16.3302 3.78655 15.2368 2.85737 13.8046C1.9282 12.3725 1.48687 10.6783 1.59919 8.97488C1.71152 7.27141 2.37149 5.64989 3.48067 4.35215C4.58985 3.05441 6.08882 2.14998 7.75401 1.77375C9.41921 1.39752 11.1614 1.56965 12.7208 2.26447M17.4154 3.16697L9.4987 11.0915L7.1237 8.71655" stroke="#00B45C" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1376_81891">
                            <rect width="19" height="19" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-[#132A40] font-urbanist text-sm font-medium leading-[23px] capitalize">
                        Design System
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-[7px]">
                      <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1376_81894)">
                          <path d="M17.4154 8.77197V9.5003C17.4144 11.2075 16.8616 12.8686 15.8394 14.2359C14.8172 15.6032 13.3805 16.6035 11.7434 17.0876C10.1062 17.5716 8.35653 17.5135 6.75515 16.9218C5.15378 16.3302 3.78655 15.2368 2.85737 13.8046C1.9282 12.3725 1.48687 10.6783 1.59919 8.97488C1.71152 7.27141 2.37149 5.64989 3.48067 4.35215C4.58985 3.05441 6.08882 2.14998 7.75401 1.77375C9.41921 1.39752 11.1614 1.56965 12.7208 2.26447M17.4154 3.16697L9.4987 11.0915L7.1237 8.71655" stroke="#00B45C" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1376_81894">
                            <rect width="19" height="19" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-[#132A40] font-urbanist text-sm font-medium leading-[23px] capitalize">
                        Unlimited Revisions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-end gap-2.5 w-[262px] h-[50px] px-[3px] bg-[#1D8FFF] rounded-[45px] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
                  <span className="text-white text-center font-urbanist text-base font-medium leading-[23px] capitalize">
                    Optimize My Landing Page
                  </span>
                  <div className="flex items-center gap-2.5 p-3 bg-[#E8F4FF] border border-[#A2D1FF] rounded-[34px]">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16797 10H15.8346" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[7px] w-[220px] h-[50px] px-[19px] py-2.5 bg-[#FAFAFA] border border-[#D2D2D2] rounded-[33px]">
                  <span className="text-[#091E42] font-urbanist text-base font-medium leading-4 capitalize">
                    talk to a designer
                  </span>
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16797 10H15.8346" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting line */}
        <svg 
          className="absolute w-[271px] h-[333px] pointer-events-none"
          style={{ left: '577px', top: '110px' }}
          viewBox="0 0 273 334" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1H252C263.046 1 272 9.95431 272 21V333.5" stroke="url(#paint0_linear_1376_81899)" strokeOpacity="0.32" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_1376_81899" x1="136.5" y1="1" x2="136.5" y2="333.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1D8FFF"/>
              <stop offset="1" stopColor="white" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
