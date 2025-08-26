"use client";
import type { NextPage } from "next";

export type HeroPageType = {
  className?: string;
};

const HeroPage: NextPage<HeroPageType> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-[1440px] h-[600px] lg:h-[960px] bg-[#0D0E12] overflow-hidden font-urbanist ${className}`}
    >
      {/* BG Layer */}
      <div className="absolute inset-0 w-[1438px] h-[960px]">
        {/* Blue Ellipse 1 */}
        <div className="absolute left-0 top-[666px] w-[345px] h-[294px] rounded-[344.61px] bg-[#43A2FF] opacity-50 blur-[200px]" />
        
        {/* Blue Ellipse 2 */}
        <div className="absolute left-[303px] top-[240px] w-[345px] h-[294px] rounded-[344.61px] bg-[#43A2FF] opacity-50 blur-[200px]" />
        
        {/* Blue Ellipse 3 */}
        <div className="absolute left-[1171px] top-0 w-[244px] h-[208px] bg-[#43A2FF] opacity-50 blur-[200px]" />
        
        {/* Background Pattern */}
        <div className="absolute left-9 top-[141px] w-[1401px] h-[819px] opacity-50">
          {/* Mask */}
          <div className="absolute left-[-19px] top-0 w-[1440px] h-[1440px] flex justify-center items-center pb-[243px]">
            <div 
              className="absolute left-0 top-0 w-[1440px] h-[1197px]"
              style={{
                background: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0, 0, 0, 0.00) 95.31%)"
              }}
            />
          </div>
          
          {/* Content */}
          <div className="absolute left-[-39px] top-0 w-[1441px] h-[888px] flex justify-center items-center">
            {/* Rows */}
            <div className="absolute left-[-239px] top-0 w-[1920px] h-[1440px] flex flex-col items-start border border-[rgba(208,213,221,0.10)]">
              {/* Row 1 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)]" />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 5 || i === 14 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 3 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 7 || i === 11 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 4 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 2 || i === 14 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 5 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 8 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 6 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 5 || i === 11 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 7 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 1 || i === 17 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 8 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 6 || i === 10 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 9 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 8 || i === 18 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 10 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 14 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 11 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 1 || i === 17 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 12 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 2 || i === 10 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 13 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 6 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 14 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)] ${i === 14 ? 'bg-[rgba(242,244,247,0.04)]' : ''}`} />
                ))}
              </div>
              {/* Row 15 */}
              <div className="flex items-start">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="w-24 h-24 border-r border-b border-[rgba(208,213,221,0.10)]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Blur Circle */}
      <div className="hidden lg:block absolute left-[308px] top-[468px] w-[790px] h-[790px] rounded-[790px] bg-[rgba(0,132,255,0.09)] blur-[25.3px]" />

      {/* iPhone 14 Pro Max */}
      <div className="hidden lg:block absolute left-[539px] top-[521px] w-[363px] h-[742px]">
        {/* Device */}
        <div className="absolute left-[-1px] top-1 flex w-[363px] h-[742px] p-[0.594px_0.298px_0.599px_0.597px] flex-col justify-center items-center">
          <div className="absolute left-1 top-1 w-[362px] h-[740px] bg-black rounded-[44px]" />
        </div>
        {/* Mockup */}
        <div className="absolute left-4 top-[15px] w-[330px] h-[712px] rounded-[37px] overflow-hidden">
          <div className="w-full h-full bg-[#0A1519] opacity-10" />
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute left-4 lg:left-[136px] top-[50px] lg:top-[102px] flex w-full max-w-[calc(100%-32px)] lg:max-w-[1168px] h-auto lg:h-[732px] flex-col items-center gap-8 lg:gap-[95px]">
        {/* Header Section */}
        <div className="flex w-full max-w-[766px] flex-col justify-center items-center gap-4 lg:gap-11">
          <div className="flex w-full max-w-[702px] flex-col justify-center items-center gap-3 lg:gap-5">
            {/* Badge */}
            <div className="flex items-center gap-2 lg:gap-[9px] p-1 lg:p-[5px] rounded-[25px] lg:rounded-[45px] border border-[#A2D1FF]">
              <div className="flex px-2 lg:px-[11px] py-0 justify-center items-center gap-1 lg:gap-[6px] rounded-[20px] lg:rounded-[39px] bg-[#1D8FFF]">
                <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-white border-2 lg:border-[4px] border-[#7CBEFF]" />
                <div className="text-white font-medium text-[8px] lg:text-[10px] leading-[18px] lg:leading-[23px] tracking-[0.05px] uppercase">
                  ATTENTION
                </div>
              </div>
              <div className="w-[140px] lg:w-[224px] text-white font-medium text-[10px] lg:text-xs leading-[18px] lg:leading-[23px] tracking-[0.06px] uppercase">
                No fluff, Just clicks that converT
              </div>
            </div>

            {/* Main Heading and Description */}
            <div className="flex w-full max-w-[630px] flex-col justify-center items-center gap-3 lg:gap-4">
              <h1 className="w-full max-w-[618px] text-center text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-[50px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]">
                Smarter Google Ads, Real Business Growth.
              </h1>
              <p className="w-full max-w-[640px] text-center text-[#D2D2D2] font-medium text-sm md:text-base lg:text-base leading-[18px] md:leading-[20px] lg:leading-[23px]">
                We help businesses of all sizes launch high-performing Google Ads campaigns that bring real results — more clicks, more leads, and more sales.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-[13px]">
            <button className="flex w-full sm:w-auto lg:w-[237px] h-[40px] lg:h-[50px] px-[3px] py-0 justify-center lg:justify-end items-center gap-2 lg:gap-[10px] rounded-[25px] lg:rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
              <div className="text-white text-center font-medium text-xs lg:text-base leading-[18px] lg:leading-[23px] capitalize px-4 lg:px-0">
                Talk to an SEO Expert
              </div>
              <div className="flex p-2 lg:p-3 items-center gap-[10px] rounded-[20px] lg:rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
                <svg width="16" height="16" className="lg:w-5 lg:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16797 10H15.8346" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.1665L15.8333 9.99984L10 15.8332" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            <button className="flex w-full sm:w-auto lg:w-[220px] h-[40px] lg:h-[50px] px-4 lg:px-[19px] py-2 lg:py-[10px] justify-center items-center gap-2 lg:gap-[7px] rounded-[20px] lg:rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
              <div className="text-[#091E42] font-medium text-xs lg:text-base leading-[100%] capitalize">
                Book an appointment
              </div>
              <svg width="16" height="16" className="lg:w-5 lg:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16797 10H15.8346" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.1665L15.8333 9.99984L10 15.8332" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Section - Desktop Only */}
        <div className="hidden lg:block relative w-full h-[314px]">
          {/* Dollar coin icon */}
          <div className="absolute left-[275px] top-[174px] w-[52px] h-[52px] flex justify-center items-center gap-[8.125px] rounded-[81.25px] bg-[#43A2FF]">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9973 20.4818C17.1254 20.4818 20.4789 17.1337 20.4789 13.0002C20.4789 8.87202 17.1307 5.51855 12.9973 5.51855C10.843 5.51855 8.90093 6.43121 7.53726 7.88509C6.28501 9.22223 5.51562 11.021 5.51562 12.9949C5.51563 17.1337 8.86909 20.4818 12.9973 20.4818ZM10.3866 15.961C10.4556 15.7169 10.5193 15.4675 10.5989 15.2235C10.6891 14.9422 10.7634 14.9051 11.0234 15.043C11.4691 15.2765 11.936 15.4039 12.4295 15.4675C12.7479 15.5047 13.0609 15.4728 13.3528 15.3455C13.9046 15.1067 13.9895 14.47 13.5226 14.0826C13.3634 13.95 13.183 13.8545 12.9973 13.7749C12.5144 13.5626 12.0103 13.4035 11.5593 13.1275C10.8217 12.6871 10.3495 12.0769 10.4079 11.1802C10.4715 10.1614 11.0446 9.52998 11.9785 9.19039C12.3605 9.05243 12.3658 9.05774 12.3658 8.65447C12.3658 8.51651 12.3658 8.38386 12.3658 8.2459C12.3711 7.94345 12.4242 7.89039 12.7266 7.87978C12.8222 7.87447 12.9124 7.87978 13.0079 7.87978C13.6499 7.87978 13.6499 7.87978 13.6552 8.52182C13.6552 8.97815 13.6552 8.97815 14.1115 9.04713C14.4564 9.10019 14.7907 9.201 15.1091 9.34427C15.2842 9.42386 15.3532 9.5459 15.3001 9.73162C15.2205 10.0075 15.1462 10.2888 15.056 10.5647C14.9711 10.8247 14.8915 10.8618 14.6422 10.7398C14.1381 10.4957 13.6128 10.3949 13.0609 10.4267C12.9177 10.432 12.7744 10.4532 12.6364 10.5116C12.1589 10.7186 12.0793 11.2492 12.4879 11.5781C12.6948 11.7426 12.9283 11.8647 13.1724 11.9655C13.5968 12.1406 14.0213 12.3104 14.4246 12.5332C15.7087 13.2443 16.0536 14.852 15.1515 15.9504C14.8226 16.3484 14.3981 16.6137 13.9046 16.7516C13.6871 16.81 13.5915 16.9267 13.6022 17.1496C13.6128 17.3724 13.6022 17.59 13.6022 17.8128C13.6022 18.0092 13.5013 18.1153 13.305 18.1206C13.0662 18.1259 12.8275 18.1259 12.594 18.1206C12.3871 18.1153 12.2862 17.9986 12.2862 17.7969C12.2862 17.6377 12.2809 17.4732 12.2809 17.3141C12.2756 16.9586 12.265 16.9426 11.9254 16.8896C11.485 16.8206 11.0552 16.7198 10.6573 16.5235C10.3283 16.3696 10.2964 16.29 10.3866 15.961Z" fill="white"/>
              <path d="M21.1009 21.1076C16.7817 25.4268 9.84657 25.5701 5.35228 21.5481H6.79555V20.0093H3.76044H3.7233H2.69922V21.0493V21.0705V24.1056H4.23799V22.6146C6.71065 24.8697 9.85187 25.9999 12.9931 25.9999C16.3253 25.9999 19.6523 24.7317 22.1886 22.1954L22.7351 21.6489L21.6474 20.5611L21.1009 21.1076Z" fill="white"/>
              <path d="M21.7575 1.89429V3.38531C19.2848 1.1302 16.1436 0 13.0024 0C9.67011 0 6.34318 1.26816 3.80685 3.80449L3.26562 4.34571L4.35338 5.43347L4.89991 4.88694C9.21909 0.567755 16.1542 0.42449 20.6485 4.44653H19.2052V5.98531H22.2403H22.2775H23.3015V4.94531V4.92408V1.89429H21.7575Z" fill="white"/>
            </svg>
          </div>

          {/* Statistics icon */}
          <div className="absolute left-[834px] top-[174px] w-[52px] h-[52px] flex justify-center items-center gap-[8.125px] rounded-[81.25px] bg-[#F8A02C]">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1734_4361)">
                <path d="M21.7558 3.30938L21.2587 3.80646L17.2018 7.8633L16.8437 8.22141L15.9565 9.10868L12.5891 12.476L12.4662 12.599L12.2631 12.3958L9.3661 9.49886C8.87436 10.1777 8.57504 11.0008 8.54297 11.8881L10.6542 13.9993L11.5415 14.8866L11.782 15.1271C11.9691 15.3142 12.2203 15.4104 12.4662 15.4104C12.5089 15.4104 12.5464 15.4051 12.5891 15.3997C12.7922 15.373 12.9953 15.2821 13.1503 15.1271L13.3909 14.8866L17.5653 10.7122L18.4526 9.82491L18.8107 9.46679L22.8675 5.40996L23.3592 4.91822L24.6848 6.23308C24.8077 6.35602 24.9307 6.48964 25.1017 6.48964C25.1658 6.48964 25.2407 6.47361 25.3209 6.4255C25.5881 6.28119 25.6416 6.05135 25.6576 5.78945C25.7217 4.36234 25.7912 2.92989 25.8554 1.50278C25.8767 1.06983 25.695 0.87207 25.2781 0.87207C25.2567 0.87207 25.2353 0.87207 25.2086 0.87207C23.7441 0.941555 22.2796 1.01104 20.815 1.08052C20.5852 1.09121 20.3607 1.1019 20.2378 1.3745C20.1095 1.64709 20.2538 1.8021 20.4088 1.9571C20.8525 2.41142 21.2961 2.86575 21.7558 3.30938Z" fill="white"/>
                <path d="M0.28462 12.396C-0.0948734 12.7755 -0.0948734 13.3849 0.28462 13.7644L0.525144 14.0049C0.712218 14.192 0.963432 14.2882 1.2093 14.2882C1.45517 14.2882 1.70638 14.192 1.89346 14.0049L3.73213 12.1662C3.73213 12.1288 3.73213 12.0967 3.73213 12.0593C3.73213 10.6055 4.06886 9.23181 4.67285 8.00781L0.28462 12.396Z" fill="white"/>
                <path d="M25.5362 22.4071L20.0416 16.9125L19.7423 17.2118L19.3307 16.8003C20.3088 15.4747 20.8914 13.8391 20.8914 12.0646C20.8914 11.1827 20.7471 10.3328 20.4852 9.54177L18.4969 11.5301C18.5129 11.7065 18.5236 11.8829 18.5236 12.0646C18.5236 15.154 16.0168 17.6554 12.9328 17.6554C9.84337 17.6554 7.34192 15.1487 7.34192 12.0646C7.34192 8.97521 9.84871 6.47376 12.9328 6.47376C14.0499 6.47376 15.0921 6.80514 15.9634 7.36637L17.6684 5.66132C16.3429 4.68319 14.7073 4.10059 12.9328 4.10059C8.53385 4.10059 4.96875 7.66569 4.96875 12.0646C4.96875 16.4635 8.53385 20.0286 12.9328 20.0286C14.7126 20.0286 16.3589 19.446 17.6845 18.4572L18.096 18.8688L17.7967 19.1681L23.2913 24.6627C23.9113 25.2827 24.9216 25.2827 25.5416 24.6627C26.1562 24.0374 26.1562 23.0272 25.5362 22.4071Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_1734_4361">
                  <rect width="26" height="26" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Snapchat Card */}
          <div className="absolute left-0 top-[197px] inline-flex p-5 items-end gap-3 rounded-[20px] bg-[#F8F9F9] w-[227px] h-[92px]">
            <div className="w-[52px] h-[52px] flex justify-center items-center rounded-[81.25px] bg-[#FFFF00]">
              <div className="w-[42px] h-[42px] aspect-square rounded-full bg-yellow-400" />
            </div>
            <div className="flex w-[123px] flex-col items-start gap-1">
              <div className="text-[rgba(10,21,25,0.70)] font-normal text-base leading-[120%]">
                Snapchat
              </div>
              <div className="text-[#0A1519] font-semibold text-[21px] leading-[120%]">
                679,7k reach
              </div>
            </div>
          </div>

          {/* Trusted Clients Card */}
          <div className="absolute left-[934px] top-[200px] inline-flex p-5 items-end gap-3 rounded-[20px] bg-[#F8F9F9] w-[234px] h-[85px]">
            <div className="flex items-center gap-[-10px]">
              <div className="flex w-[44px] h-[44px] justify-center items-center border-[1.25px] border-[#F8F9F9] rounded-full relative overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Client 1"
                  src="/Google/ca/client-1.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold drop-shadow-lg">
                    A+
                  </span>
                </div>
              </div>
              <div className="flex w-[44px] h-[44px] justify-center items-center border-[1.25px] border-[#F8F8F9] rounded-full -ml-[10px] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Client 2"
                  src="/Google/ca/client-2.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold drop-shadow-lg">
                    5★
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[#0A1519] font-semibold text-[22px] leading-[120%]">
                124,89K+
              </div>
              <div className="text-[rgba(10,21,25,0.70)] font-normal text-base leading-[120%]">
                Trusted Clients
              </div>
            </div>
          </div>

          {/* Campaign Markets Card */}
          <div className="absolute left-[359px] top-0 flex w-[443px] h-[314px] p-4 flex-col items-center gap-4 rounded-[24px] bg-white shadow-[7px_8px_54.8px_0_rgba(15,32,40,0.25)]">
            <div className="flex flex-col items-center gap-6 self-stretch">
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="text-[#0A1519] text-center font-semibold text-xl leading-[34px]">
                  Campaign Markets
                </div>
                <div className="text-[rgba(10,21,25,0.70)] text-center font-normal text-sm leading-[145%]">
                  Latest results from active ad campaigns
                </div>
              </div>
              
              <div className="flex flex-col items-start gap-[10px] self-stretch">
                <div className="flex p-[10px] flex-col items-start gap-[10px] self-stretch rounded-[20px] bg-[#EFF2F1]">
                  <div className="flex p-[13px_12px] justify-between items-center self-stretch rounded-[16px] bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[28px] bg-blue-500" />
                      <div className="flex justify-center items-center gap-[2px]">
                        <div className="text-[#0A1519] font-medium text-base leading-[34px] capitalize">
                          Google CPC
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.4714 10.471C8.21105 10.7313 7.78895 10.7313 7.5286 10.471L3.75736 6.69974C3.49701 6.43939 3.49701 6.01728 3.75736 5.75693C4.01771 5.49658 4.43982 5.49658 4.70017 5.75693L8 9.05676L11.2998 5.75693C11.5602 5.49658 11.9823 5.49658 12.2426 5.75693C12.503 6.01728 12.503 6.43939 12.2426 6.69974L8.4714 10.471Z" fill="#121212" fillOpacity="0.8"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-[rgba(18,18,18,0.80)] font-medium text-base leading-[34px] uppercase">
                      $1.34
                    </div>
                  </div>
                </div>

                <div className="flex p-[10px] flex-col items-start gap-[10px] self-stretch rounded-[20px] bg-[#EFF2F1]">
                  <div className="flex p-[13px_12px] justify-between items-center self-stretch rounded-[16px] bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[28px] bg-blue-600" />
                      <div className="flex justify-center items-center gap-[2px]">
                        <div className="text-[#0A1519] font-medium text-base leading-[34px] capitalize">
                          Meta CPM
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.4714 10.471C8.21105 10.7313 7.78895 10.7313 7.5286 10.471L3.75736 6.69974C3.49701 6.43939 3.49701 6.01728 3.75736 5.75693C4.01771 5.49658 4.43982 5.49658 4.70017 5.75693L8 9.05676L11.2998 5.75693C11.5602 5.49658 11.9823 5.49658 12.2426 5.75693C12.503 6.01728 12.503 6.43939 12.2426 6.69974L8.4714 10.471Z" fill="#121212" fillOpacity="0.8"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-[rgba(18,18,18,0.80)] font-medium text-base leading-[34px] uppercase">
                      $9.80
                    </div>
                  </div>
                </div>

                {/* Swap Icon */}
                <div className="absolute left-[184px] top-[124px] flex w-[34px] h-[34px] transform rotate-[-90deg] p-[14.118px] justify-center items-center gap-[14.118px] rounded-[200px] border-4 border-white bg-[#1D8FFF]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.63828 1.97965C9.83335 1.78419 10.1499 1.78388 10.3454 1.97895L13.6921 5.31895C13.8875 5.51401 13.8878 5.8306 13.6928 6.02605C13.4977 6.22151 13.1811 6.22182 12.9857 6.02676L9.63899 2.68676C9.44353 2.49169 9.44321 2.17511 9.63828 1.97965Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99219 14.167C9.71605 14.167 9.49219 13.9431 9.49219 13.667L9.49219 2.33366C9.49219 2.05752 9.71604 1.83366 9.99219 1.83366C10.2683 1.83366 10.4922 2.05752 10.4922 2.33366L10.4922 13.667C10.4922 13.9431 10.2683 14.167 9.99219 14.167Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.30625 9.97379C2.50132 9.77833 2.8179 9.77802 3.01336 9.97309L6.36002 13.3131C6.55548 13.5082 6.5558 13.8247 6.36073 14.0202C6.16566 14.2156 5.84908 14.216 5.65362 14.0209L2.30696 10.6809C2.1115 10.4858 2.11118 10.1692 2.30625 9.97379Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.00781 14.167C5.73167 14.167 5.50781 13.9431 5.50781 13.667L5.50781 2.33366C5.50781 2.05752 5.73167 1.83366 6.00781 1.83366C6.28395 1.83366 6.50781 2.05752 6.50781 2.33366L6.50781 13.667C6.50781 13.9431 6.28395 14.167 6.00781 14.167Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex h-12 p-[18px_12px] justify-between items-center self-stretch rounded-[100px] bg-[#071F36]">
              <div className="text-white font-medium text-base leading-[34px] uppercase">
                Optimize Now
              </div>
            </div>
          </div>

          {/* Average Client ROI Card */}
          <div className="absolute left-[839px] top-[37px] inline-flex p-6 flex-col items-start gap-2 rounded-[24px] border-[1.5px] border-[#E9E9EB] bg-white shadow-[20px_20px_42.1px_0_rgba(28,63,58,0.15)] w-[210px] h-[105px]">
            <div className="text-[rgba(10,21,25,0.70)] text-center font-normal text-base leading-[124%]">
              Average Client ROI
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="text-[#0A1519] font-semibold text-2xl leading-normal">
                $234.98K NI
              </div>
              <div className="flex w-6 h-6 justify-center items-center gap-[10px] rounded-[100px] bg-[#1D9B5E]">
                <svg width="16" height="16" className="transform rotate-[-12.165deg]" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.17257 7.93955C6.02285 7.70753 6.08955 7.3981 6.32157 7.24836L10.2825 4.69228C10.5145 4.54255 10.8239 4.60925 10.9737 4.84128L13.5298 8.80217C13.6795 9.03419 13.6128 9.34362 13.3808 9.49336C13.1487 9.64309 12.8393 9.57639 12.6896 9.34436L10.788 6.39776L9.63754 11.7347C9.53734 12.1996 9.52818 12.9387 9.81972 13.6063C10.0986 14.2451 10.6661 14.8548 11.8102 15.1015C12.0802 15.1597 12.2518 15.4257 12.1936 15.6956C12.1354 15.9655 11.8694 16.1372 11.5995 16.079C10.1368 15.7637 9.30918 14.9361 8.90322 14.0065C8.50987 13.1057 8.52607 12.1453 8.66 11.524L9.81044 6.18704L6.8638 8.08856C6.63178 8.23829 6.3223 8.17158 6.17257 7.93955Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Total Ad Spend Managed Card */}
          <div className="absolute left-[93px] top-[32px] inline-flex p-6 flex-col items-start gap-2 rounded-[24px] bg-white w-[234px] h-[96px]">
            <div className="flex flex-col items-start gap-2">
              <div className="text-[rgba(10,21,25,0.70)] font-medium text-base leading-normal">
                Total Ad Spend Managed
              </div>
              <div className="flex items-start gap-2">
                <div className="text-[#0A1519] font-semibold text-2xl leading-normal">
                  $964,700+
                </div>
                <div className="flex p-[6px_8px] items-end gap-2 rounded-[100px] bg-[#21AA5B]">
                  <div className="text-white font-normal text-xs leading-normal">
                    +8.5% ER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
