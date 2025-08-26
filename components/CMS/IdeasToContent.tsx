import React from 'react';

const IdeasToContent = () => {
  return (
    <div className="hidden sm:flex w-full max-w-[907px] h-auto lg:h-[1766px] flex-col items-center gap-[25px] lg:gap-[50px] relative px-4 lg:px-0">
      {/* Title Section */}
      <div className="flex w-full max-w-[601px] flex-col justify-center items-center gap-4 relative">
        {/* Badge */}
        <div className="flex w-[150px] lg:w-[203px] py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] bg-[#12579C] relative">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12px] lg:w-[15px] h-[12px] lg:h-[15px] flex-shrink-0 relative">
            <path d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z" fill="#E8F4FF"/>
          </svg>
          <div className="text-[#E8F4FF] font-urbanist text-[12px] lg:text-[14px] font-medium leading-[18px] lg:leading-[23px] relative">
            Our Proven Process
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex h-auto lg:h-[176px] flex-col justify-center items-center gap-4 self-stretch relative">
          <div className="w-full max-w-[593px] text-[#E8F4FF] text-center font-urbanist text-[24px] md:text-[36px] lg:text-[50px] font-bold leading-[28px] md:leading-[42px] lg:leading-[57px] relative">
            How We Turn Ideas Into ROI-Driven Content
          </div>
          <div className="text-[#EBEDEF] text-center font-urbanist text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[23px] self-stretch relative">
            From discovery to reporting, our systematic approach ensures your content marketing delivers measurable results.
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="h-auto lg:h-[1491px] flex-shrink-0 self-stretch relative">
        {/* Vertical Line */}
        <svg className="hidden lg:block w-0 h-[7px] flex-shrink-0 stroke-[0.669px] stroke-white absolute left-[484px] top-[643px]" width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8V1" stroke="url(#paint0_linear_1376_83835)" strokeWidth="0.669086" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_1376_83835" x1="1.5" y1="2.10526" x2="1.5" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#43A2FF"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Process Card 01 */}
        <div className="flex w-full lg:w-[345px] py-[20px] lg:py-[33px] px-[16px] lg:px-[22px] flex-col items-start gap-[-8px] lg:gap-[-15px] rounded-[15px] lg:rounded-[25px] bg-[rgba(36,50,64,0.46)] relative lg:absolute left-0 lg:left-[562px] top-0 h-auto lg:h-[292px] mb-4 lg:mb-0">
          <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize relative">
            01
          </div>
          <div className="flex w-[307px] flex-col items-start gap-6 relative">
            <div className="flex w-[97px] py-[6px] px-[29px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)] relative">
              <div className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize relative">
                WEEK 1
              </div>
            </div>
            <div className="flex w-[307px] flex-col items-start gap-[14px] relative">
              <div className="text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize self-stretch relative">
                Website Audit
              </div>
              <div className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize relative">
                We conduct a comprehensive audit of your website's technical health, structure, and content to identify critical issues that may be hindering your search visibility.
              </div>
            </div>
          </div>
        </div>

        {/* Process Card 02 */}
        <div className="flex w-full lg:w-[345px] py-[20px] lg:py-[33px] px-[16px] lg:px-[22px] flex-col items-start gap-[-8px] lg:gap-[-15px] rounded-[15px] lg:rounded-[25px] bg-[rgba(36,50,64,0.46)] relative lg:absolute left-0 lg:left-[-15px] top-0 lg:top-[300px] h-auto lg:h-[292px] mb-4 lg:mb-0">
          <div className="w-full lg:w-[307px] text-[#22384C] font-urbanist text-[42px] lg:text-[85px] font-bold leading-[28px] lg:leading-[55px] capitalize relative">
            02
          </div>
          <div className="flex w-full lg:w-[307px] flex-col items-start gap-4 lg:gap-6 relative">
            <div className="flex w-[80px] lg:w-[97px] py-[4px] lg:py-[6px] px-[20px] lg:px-[29px] justify-center items-center gap-[8px] lg:gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)] relative">
              <div className="text-[#071F36] font-urbanist text-[12px] lg:text-[14px] font-medium leading-[16px] lg:leading-[20px] capitalize relative">
                WEEK 1-2
              </div>
            </div>
            <div className="flex w-full lg:w-[307px] flex-col items-start gap-[10px] lg:gap-[14px] relative">
              <div className="text-white font-urbanist text-[16px] lg:text-[18px] font-medium leading-[18px] lg:leading-[20px] capitalize self-stretch relative">
                Keyword Research
              </div>
              <div className="w-full lg:w-[307px] text-[#D2D2D2] font-urbanist text-[12px] lg:text-[14px] font-medium leading-[18px] lg:leading-[24px] capitalize relative">
                ur process begins with a deep dive into your website to evaluate its performance, uncover on-page and technical SEO errors, and highlight areas for immediate improvement.
              </div>
            </div>
          </div>
        </div>

        {/* Process Card 03 */}
        <div className="flex w-[345px] py-[33px] px-[22px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)] absolute left-[562px] top-[583px] h-[268px]">
          <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize relative">
            03
          </div>
          <div className="flex w-[307px] flex-col items-start gap-6 relative">
            <div className="flex w-[97px] py-[6px] px-[29px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)] relative">
              <div className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize relative">
                WEEK 2-4
              </div>
            </div>
            <div className="flex w-[307px] flex-col items-start gap-[14px] relative">
              <div className="text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize self-stretch relative">
                On-Site Optimization
              </div>
              <div className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize relative">
                We analyze every aspect of your website — from site speed and mobile responsiveness to meta data and content quality
              </div>
            </div>
          </div>
        </div>

        {/* Process Card 04 */}
        <div className="flex w-[345px] py-[33px] px-[22px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)] absolute left-[-15px] top-[878px] h-[292px]">
          <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize relative">
            04
          </div>
          <div className="flex w-[307px] flex-col items-start gap-6 relative">
            <div className="flex w-[97px] py-[6px] px-[29px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)] relative">
              <div className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize relative">
                WEEK 3-8
              </div>
            </div>
            <div className="flex w-[307px] flex-col items-start gap-[14px] relative">
              <div className="text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize self-stretch relative">
                Link Building
              </div>
              <div className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize relative">
                We perform a detailed site audit to detect structural flaws, content gaps, and technical issues that negatively impact your search engine rankings and user experience.
              </div>
            </div>
          </div>
        </div>

        {/* Process Card 05 */}
        <div className="flex w-[345px] py-[33px] px-[22px] flex-col items-start gap-[-15px] rounded-[25px] bg-[rgba(36,50,64,0.46)] absolute left-[561px] top-[1199px] h-[292px]">
          <div className="w-[307px] text-[#22384C] font-urbanist text-[85px] font-bold leading-[55px] capitalize relative">
            05
          </div>
          <div className="flex w-[307px] flex-col items-start gap-6 relative">
            <div className="flex w-[97px] py-[6px] px-[29px] justify-center items-center gap-[10px] rounded-[435px] bg-[rgba(216,253,95,1)] relative">
              <div className="text-[#071F36] font-urbanist text-[14px] font-medium leading-[20px] capitalize relative">
                ONGOING
              </div>
            </div>
            <div className="flex w-[307px] flex-col items-start gap-[14px] relative">
              <div className="text-white font-urbanist text-[18px] font-medium leading-[20px] capitalize self-stretch relative">
                Analytics & Reporting
              </div>
              <div className="w-[307px] text-[#D2D2D2] font-urbanist text-[14px] font-medium leading-[24px] capitalize relative">
                Our team reviews your website's architecture, content relevance, and back-end setup to identify barriers to organic growth and create a clear plan of action.
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Lines and Dots */}
        
        {/* First connecting line */}
        <svg className="w-[397px] h-[173px] flex-shrink-0 stroke-2 stroke-[rgba(47,152,255,0.63)] absolute left-[164px] top-[127px]" width="399" height="175" viewBox="0 0 399 175" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M398 1H33C15.3269 1 1 15.3269 1 33V174" stroke="url(#paint0_linear_1376_83876)" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_1376_83876" x1="199.5" y1="1" x2="199.5" y2="174" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F98FF" stopOpacity="0.63"/>
              <stop offset="0.466346" stopColor="#D0D5DD" stopOpacity="0.32"/>
              <stop offset="1" stopColor="white"/>
            </linearGradient>
          </defs>
        </svg>

        {/* First dot */}
        <svg className="w-3 h-3 flex-shrink-0 fill-[#43A2FF] stroke-2 stroke-white filter-[drop-shadow(0_4.8px_3.6px_rgba(29,143,255,0.20))] absolute left-[449px] top-[121px]" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1376_83877)">
            <circle cx="13" cy="8" r="6" fill="#43A2FF"/>
            <circle cx="13" cy="8" r="4.8" stroke="white" strokeWidth="2.4"/>
          </g>
          <defs>
            <filter id="filter0_d_1376_83877" x="0.542857" y="0.342857" width="24.9143" height="24.9143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.85714" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1376_83877"/>
              <feOffset dy="4.8"/>
              <feGaussianBlur stdDeviation="1.8"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1376_83877"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1376_83877" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Second dot */}
        <svg className="w-[10px] h-[10px] flex-shrink-0 fill-[#43A2FF] stroke-2 stroke-white filter-[drop-shadow(0_4px_3px_rgba(29,143,255,0.20))] absolute left-[158px] top-[177px]" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1376_83878)">
            <circle cx="11" cy="7" r="5" fill="#43A2FF"/>
            <circle cx="11" cy="7" r="4" stroke="white" strokeWidth="2"/>
          </g>
          <defs>
            <filter id="filter0_d_1376_83878" x="0.619048" y="0.619048" width="20.7619" height="20.7619" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.38095" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1376_83878"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="1.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1376_83878"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1376_83878" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Second connecting line */}
        <svg className="w-[393px] h-[163px] flex-shrink-0 absolute left-[168px] top-[622px]" width="395" height="173" viewBox="0 0 395 173" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1V132.941C1 147.885 13.1148 160 28.0592 160H394" stroke="url(#paint0_linear_1376_83879)" strokeWidth="1.6912" strokeLinecap="round"/>
          <path d="M1 71.1846V108.391" stroke="#2F98FF" strokeWidth="1.6912" strokeLinecap="round"/>
          <g filter="url(#filter0_d_1376_83879)">
            <circle cx="42.8578" cy="159.55" r="4.65079" fill="#43A2FF"/>
            <circle cx="42.8578" cy="159.55" r="3.72063" stroke="white" strokeWidth="1.86032"/>
          </g>
          <defs>
            <filter id="filter0_d_1376_83879" x="33.2019" y="153.615" width="19.3111" height="19.312" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.21466" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1376_83879"/>
              <feOffset dy="3.72063"/>
              <feGaussianBlur stdDeviation="1.39524"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1376_83879"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1376_83879" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1376_83879" x1="197.5" y1="1" x2="197.5" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1D8FFF" stopOpacity="0"/>
              <stop offset="0.480769" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#2F98FF" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Third dot */}
        <svg className="w-[9px] h-[9px] flex-shrink-0 fill-[#43A2FF] stroke-[1.86px] stroke-white filter-[drop-shadow(0_3.721px_2.79px_rgba(29,143,255,0.20))] absolute left-[654px] top-[1024px]" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1376_83883)">
            <circle cx="9.65079" cy="6.65079" r="4.65079" fill="#43A2FF"/>
            <circle cx="9.65079" cy="6.65079" r="3.72063" stroke="white" strokeWidth="1.86032"/>
          </g>
          <defs>
            <filter id="filter0_d_1376_83883" x="-0.00513983" y="0.715495" width="19.3111" height="19.312" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.21466" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1376_83883"/>
              <feOffset dy="3.72063"/>
              <feGaussianBlur stdDeviation="1.39524"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1376_83883"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1376_83883" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Third connecting line */}
        <svg className="w-[409px] h-[210px] flex-shrink-0 absolute left-[148px] top-[1166px]" width="411" height="212" viewBox="0 0 411 212" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1V183.941C1 198.885 13.1148 211 28.0592 211H410" stroke="url(#paint0_linear_1376_83884)" strokeWidth="1.6912" strokeLinecap="round"/>
          <path d="M1 71.1846V108.391" stroke="#2F98FF" strokeWidth="1.6912" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_1376_83884" x1="205.5" y1="1" x2="205.5" y2="211" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1D8FFF" stopOpacity="0"/>
              <stop offset="0.480769" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#2F98FF" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Fourth dot */}
        <svg className="w-[9px] h-[9px] flex-shrink-0 fill-[#43A2FF] stroke-[1.86px] stroke-white filter-[drop-shadow(0_3.721px_2.79px_rgba(29,143,255,0.20))] absolute left-[290px] top-[1371px]" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1376_83887)">
            <circle cx="9.65079" cy="6.65079" r="4.65079" fill="#43A2FF"/>
            <circle cx="9.65079" cy="6.65079" r="3.72063" stroke="white" strokeWidth="1.86032"/>
          </g>
          <defs>
            <filter id="filter0_d_1376_83887" x="-0.00513983" y="0.715495" width="19.3111" height="19.312" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.21466" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1376_83887"/>
              <feOffset dy="3.72063"/>
              <feGaussianBlur stdDeviation="1.39524"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1376_83887"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1376_83887" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Fifth dot */}
        <svg className="w-[10px] h-[10px] flex-shrink-0 fill-[#43A2FF] stroke-[1.9px] stroke-white filter-[drop-shadow(0_3.8px_2.85px_rgba(29,143,255,0.20))] absolute left-[450px] top-[1371px]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1376_83888)">
            <circle cx="10.25" cy="6.65039" r="4.75" fill="#43A2FF"/>
            <circle cx="10.25" cy="6.65039" r="3.8" stroke="white" strokeWidth="1.9"/>
          </g>
          <defs>
            <filter id="filter0_d_1376_83888" x="0.388095" y="0.588486" width="19.7238" height="19.7238" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2.2619" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1376_83888"/>
              <feOffset dy="3.8"/>
              <feGaussianBlur stdDeviation="1.425"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.560784 0 0 0 0 1 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1376_83888"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1376_83888" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Fourth connecting line */}
        <svg className="w-[394px] h-[144px] flex-shrink-0 stroke-2 stroke-[rgba(47,152,255,0.63)] absolute left-[347px] top-[885px]" width="396" height="146" viewBox="0 0 396 146" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M395 1V113C395 130.673 380.673 145 363 145H1" stroke="url(#paint0_linear_1376_83889)" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_1376_83889" x1="198" y1="1" x2="198" y2="145" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F98FF" stopOpacity="0.63"/>
              <stop offset="0.466346" stopColor="#D0D5DD" stopOpacity="0.32"/>
              <stop offset="1" stopColor="#2F98FF" stopOpacity="0.11"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default IdeasToContent;
