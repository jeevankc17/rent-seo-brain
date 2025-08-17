"use client";

import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative w-full h-[960px] bg-[#0D0E12] overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute left-0 top-[722px] w-[345px] h-[319px] bg-[#43A2FF] opacity-50 rounded-full blur-[200px]" />
      <div className="absolute left-[303px] top-[260px] w-[345px] h-[319px] bg-[#43A2FF] opacity-50 rounded-full blur-[200px]" />
      <div className="absolute right-0 top-0 w-[244px] h-[226px] bg-[#43A2FF] opacity-50 rounded-full blur-[200px]" />

      {/* Background Grid Pattern */}
      <div className="absolute left-[18px] top-[153px] w-[1401px] h-[888px] opacity-50">
        <div className="absolute left-[-19px] top-0 w-[1440px] h-[1440px] flex justify-center items-center">
          <div 
            className="absolute left-0 top-0 w-[1440px] h-[1197px]"
            style={{
              background: 'radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0, 0, 0, 0.00) 95.31%)'
            }}
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute left-[-239px] top-0 w-[1920px] h-[1440px] border border-[rgba(208,213,221,0.09)]">
          {Array.from({ length: 15 }, (_, rowIndex) => (
            <div key={rowIndex} className="flex">
              {Array.from({ length: 20 }, (_, colIndex) => (
                <div 
                  key={colIndex} 
                  className={`w-24 h-24 border-r border-b border-[rgba(208,213,221,0.09)] ${
                    (rowIndex === 1 && (colIndex === 5 || colIndex === 14)) ||
                    (rowIndex === 2 && (colIndex === 7 || colIndex === 11)) ||
                    (rowIndex === 3 && (colIndex === 2 || colIndex === 14)) ||
                    (rowIndex === 5 && (colIndex === 8 || colIndex === 18)) ||
                    (rowIndex === 6 && (colIndex === 5 || colIndex === 11)) ||
                    (rowIndex === 7 && (colIndex === 3 || colIndex === 16)) ||
                    (rowIndex === 9 && (colIndex === 8 || colIndex === 18)) ||
                    (rowIndex === 10 && (colIndex === 5 || colIndex === 11)) ||
                    (rowIndex === 11 && (colIndex === 1 || colIndex === 17)) ||
                    (rowIndex === 12 && (colIndex === 6 || colIndex === 10)) ||
                    (rowIndex === 13 && (colIndex === 2 || colIndex === 14))
                      ? 'bg-[rgba(242,244,247,0.05)]' 
                      : ''
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Central Blue Glow */}
      <div className="absolute left-[643px] top-[260px] w-[154px] h-[142px]">
        <div className="w-full h-full bg-[#1D8FFF] bg-opacity-20 rounded-full blur-[290px]" />
        <div className="absolute inset-0 w-full h-full bg-white rounded-full blur-[290px]" />
        <div className="absolute inset-0 w-full h-full bg-[#1D8FFF] bg-opacity-20 rounded-full blur-[290px]" />
      </div>

      {/* Main Content */}
      <div className="absolute left-[405px] top-[172px] w-[630px] h-[270px] flex flex-col items-center gap-11">
        <div className="flex flex-col justify-center items-center gap-4 self-stretch">
          <h1 className="w-[618px] text-center text-[50px] font-bold leading-[57px] font-[Urbanist]">
            <span className="text-[#1D8FFF]">High-Converting </span>
            <span className="text-white">Landing Pages That Sell</span>
          </h1>
          <p className="w-[640px] text-[#D2D2D2] text-center text-base font-medium leading-[23px] font-[Urbanist]">
            Our SEO-focused design team creates landing pages that convert visitors into customers. Proven designs that drive results for your business.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center gap-[13px]">
          <button className="flex w-[248px] h-[50px] px-[3px] justify-end items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)]">
            <span className="text-white text-center text-base font-medium leading-[23px] capitalize font-[Urbanist]">
              Start my landing page
            </span>
            <div className="flex p-3 items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
              <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66797 10H16.3346" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 4.1665L16.3333 9.99984L10.5 15.8332" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <button className="flex w-[220px] h-[50px] px-[19px] py-[10px] justify-center items-center gap-[7px] rounded-[33px] border border-[#D2D2D2] bg-[#FAFAFA]">
            <span className="text-[#091E42] text-base font-medium leading-[100%] capitalize font-[Urbanist]">
              see how it works
            </span>
            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66797 10H16.3346" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 4.1665L16.3333 9.99984L10.5 15.8332" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Cards */}
      
      {/* Conversion Rate Card - Left */}
      <div className="absolute left-[120px] top-[147px] w-[225px] h-[185px] rounded-xl bg-white shadow-[0_4px_18.1px_0_rgba(29,143,255,0.20)] p-[13px] flex flex-col gap-2">
        <h3 className="text-black text-base font-semibold leading-[23px] font-[Urbanist]">Conversion Rate</h3>
        
        <div className="flex flex-col gap-[10px]">
          <div className="flex p-4 justify-center items-center gap-[13px] border-b border-[rgba(123,123,123,0.22)]">
            <div className="flex items-center gap-[7px]">
              <span className="text-[#E51A1A] text-base font-semibold leading-[23px] font-[Urbanist]">12%</span>
              <div className="flex flex-col gap-[6px]">
                <span className="text-[#071F36] text-xs font-medium leading-[23px] font-[Urbanist]">Without RentSEOBrain</span>
                <div className="w-[50px] h-[7px] bg-[#ECEEF1] rounded-[3.5px]" />
              </div>
            </div>
            {/* Toggle Off */}
            <div className="w-[35px] h-[21px] rounded-[69px] bg-[rgba(120,120,128,0.16)] p-[1px] flex items-center">
              <div className="w-[19px] h-[19px] bg-white rounded-full shadow-[0_0_0_0.7px_rgba(0,0,0,0.04),_0_2px_5px_0_rgba(0,0,0,0.15),_0_2px_1px_0_rgba(0,0,0,0.06)]" />
            </div>
          </div>

          <div className="flex p-4 justify-center items-center gap-[26px] border-b border-[rgba(123,123,123,0.22)]">
            <div className="flex items-center gap-[7px]">
              <span className="text-[#1D8FFF] text-base font-semibold leading-[23px] font-[Urbanist]">75%</span>
              <div className="flex flex-col gap-[6px]">
                <span className="text-[#071F36] text-xs font-medium leading-[23px] font-[Urbanist]">With RentSEOBrain</span>
                <div className="w-[50px] h-[7px] bg-[#ECEEF1] rounded-[3.5px]" />
              </div>
            </div>
            {/* Toggle On */}
            <div className="w-[35px] h-[21px] rounded-[69px] bg-[#00B45C] p-[1px] flex items-center justify-end">
              <div className="w-[19px] h-[19px] bg-white rounded-full shadow-[0_0_0_0.7px_rgba(0,0,0,0.04),_0_2px_5px_0_rgba(0,0,0,0.15),_0_2px_1px_0_rgba(0,0,0,0.06)]" />
            </div>
          </div>
        </div>
      </div>

      {/* SEO Optimization Card - Right */}
      <div className="absolute left-[1085px] top-[162px] w-[247px] h-[170px] rounded-xl bg-white shadow-[0_4px_31.9px_0_rgba(29,143,255,0.20)] p-[14px] flex flex-col gap-[11px]">
        <div className="flex items-center gap-[13px]">
          <div className="flex p-[10px] justify-center items-center rounded-full bg-[rgba(0,180,92,0.11)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#00B45C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0016 14.0001L11.1016 11.1001" stroke="#00B45C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-black text-sm font-semibold leading-[23px] font-[Urbanist]">SEO Optimization Built-In</span>
        </div>

        <div className="flex flex-col gap-[7px] rounded-lg bg-[rgba(255,255,255,0.01)] p-[10px_7px]">
          <div className="flex items-center gap-2">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3346 9.73355V10.5002C18.3336 12.2972 17.7517 14.0458 16.6757 15.4851C15.5998 16.9244 14.0874 17.9773 12.3641 18.4868C10.6408 18.9963 8.79902 18.9351 7.11336 18.3124C5.4277 17.6896 3.98851 16.5386 3.01044 15.0311C2.03236 13.5236 1.56779 11.7403 1.68603 9.94714C1.80427 8.15402 2.49897 6.44715 3.66654 5.08111C4.8341 3.71506 6.41196 2.76303 8.16479 2.367C9.91763 1.97097 11.7515 2.15216 13.393 2.88355M18.3346 3.83355L10.0013 12.1752L7.50131 9.67521" stroke="#00B45C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#7B7B7B] text-xs font-medium leading-[23px] font-[Urbanist]">Core Web Vitals Optimized</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3346 9.73355V10.5002C18.3336 12.2972 17.7517 14.0458 16.6757 15.4851C15.5998 16.9244 14.0874 17.9773 12.3641 18.4868C10.6408 18.9963 8.79902 18.9351 7.11336 18.3124C5.4277 17.6896 3.98851 16.5386 3.01044 15.0311C2.03236 13.5236 1.56779 11.7403 1.68603 9.94714C1.80427 8.15402 2.49897 6.44715 3.66654 5.08111C4.8341 3.71506 6.41196 2.76303 8.16479 2.367C9.91763 1.97097 11.7515 2.15216 13.393 2.88355M18.3346 3.83355L10.0013 12.1752L7.50131 9.67521" stroke="#00B45C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#7B7B7B] text-xs font-medium leading-[23px] font-[Urbanist]">Schema Markup Included</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3346 9.73355V10.5002C18.3336 12.2972 17.7517 14.0458 16.6757 15.4851C15.5998 16.9244 14.0874 17.9773 12.3641 18.4868C10.6408 18.9963 8.79902 18.9351 7.11336 18.3124C5.4277 17.6896 3.98851 16.5386 3.01044 15.0311C2.03236 13.5236 1.56779 11.7403 1.68603 9.94714C1.80427 8.15402 2.49897 6.44715 3.66654 5.08111C4.8341 3.71506 6.41196 2.76303 8.16479 2.367C9.91763 1.97097 11.7515 2.15216 13.393 2.88355M18.3346 3.83355L10.0013 12.1752L7.50131 9.67521" stroke="#00B45C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#7B7B7B] text-xs font-medium leading-[23px] font-[Urbanist]">Mobile-First Design</span>
          </div>
        </div>
      </div>

      {/* Target Users Card - Bottom Left */}
      <div className="absolute left-[241px] top-[564px] w-[257px] h-[228px] rounded-xl bg-white shadow-[0_4px_48.2px_0_rgba(247,140,1,0.12)] p-[18px_19px] flex flex-col gap-3">
        <h3 className="text-black text-base font-semibold leading-[23px] font-[Urbanist]">Target Users</h3>
        
        <div className="flex flex-wrap gap-[17px_0] justify-center content-start">
          {[
            { name: "Lisa M.", role: "Agency Owner", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/758c4728a27ea9b4bf9439496a827cba2d9ed932?width=62" },
            { name: "Name", role: "Company", isBlue: true },
            { name: "Sarah K.", role: "Saas Founder", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/758c4728a27ea9b4bf9439496a827cba2d9ed932?width=62" },
            { name: "Name", role: "Company", isBlue: true },
            { name: "Mike R.", role: "eCommerce", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/758c4728a27ea9b4bf9439496a827cba2d9ed932?width=62" },
            { name: "Name", role: "Company", isBlue: true }
          ].map((user, index) => (
            <div key={index} className="flex flex-col items-center gap-2 w-[73px]">
              {user.isBlue ? (
                <div className="w-[31px] h-[31px] rounded-full border border-[#D2D2D2] bg-[#1D8FFF]" />
              ) : (
                <img className="w-[31px] h-[31px] rounded-full border border-[#D2D2D2]" src={user.avatar} alt="" />
              )}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#071F36] text-xs font-semibold leading-[10px] font-[Urbanist]">{user.name}</span>
                <span className="text-[#7B7B7B] text-[10px] font-normal leading-[10px] font-[Urbanist]">{user.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Project Team Badge */}
      <div className="absolute left-[959px] top-[461px] w-[188px] h-[41px] rounded-full bg-[#D8FD5F] flex items-center gap-2 px-[21px] py-[9px]">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1654 18V16.3333C14.1654 15.4493 13.8142 14.6014 13.1891 13.9763C12.5639 13.3512 11.7161 13 10.832 13H4.16536C3.28131 13 2.43346 13.3512 1.80834 13.9763C1.18322 14.6014 0.832031 15.4493 0.832031 16.3333V18M19.1654 18V16.3333C19.1648 15.5948 18.919 14.8773 18.4665 14.2936C18.014 13.7099 17.3805 13.293 16.6654 13.1083M13.332 3.10833C14.049 3.29192 14.6846 3.70892 15.1384 4.29359C15.5922 4.87827 15.8386 5.59736 15.8386 6.3375C15.8386 7.07764 15.5922 7.79673 15.1384 8.38141C14.6846 8.96608 14.049 9.38308 13.332 9.56667M10.832 6.33333C10.832 8.17428 9.33965 9.66667 7.4987 9.66667C5.65775 9.66667 4.16536 8.17428 4.16536 6.33333C4.16536 4.49238 5.65775 3 7.4987 3C9.33965 3 10.832 4.49238 10.832 6.33333Z" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-black text-sm font-semibold leading-[23px] font-[Urbanist]">Your Project Team</span>
      </div>

      {/* Project Team Card - Bottom Right */}
      <div className="absolute left-[1000px] top-[562px] w-[260px] h-[187px] rounded-xl bg-white shadow-[0_4px_34.2px_0_rgba(29,143,255,0.20)] p-[16px_20px] flex flex-col items-center gap-[19px]">
        <div className="flex flex-wrap gap-[21px_13px] justify-center content-center w-[224px]">
          {[
            { name: "Alex", role: "SEO Specialist", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='31' viewBox='0 0 32 31'%3E%3Ccircle cx='16' cy='15.5' r='15.5' fill='%23D9D9D9'/%3E%3C/svg%3E" },
            { name: "Emma", role: "UX Designer", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='31' viewBox='0 0 32 31'%3E%3Ccircle cx='16' cy='15.5' r='15.5' fill='%23D9D9D9'/%3E%3C/svg%3E" },
            { name: "Jake", role: "UI Designer", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='31' viewBox='0 0 32 31'%3E%3Ccircle cx='16' cy='15.5' r='15.5' fill='%23D9D9D9'/%3E%3C/svg%3E" },
            { name: "Maya", role: "Copy Writer", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='31' viewBox='0 0 31 31'%3E%3Ccircle cx='15.5' cy='15.5' r='15.5' fill='%23D9D9D9'/%3E%3C/svg%3E" },
            { name: "Sam", role: "Developer", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='31' viewBox='0 0 31 31'%3E%3Ccircle cx='15.5' cy='15.5' r='15.5' fill='%23D9D9D9'/%3E%3C/svg%3E" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-3 w-[66px]">
              <div className="w-[31px] h-[31px] rounded-full bg-[#D9D9D9]" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#071F36] text-xs font-semibold leading-[10px] font-[Urbanist]">{member.name}</span>
                <span className="text-[#7B7B7B] text-[10px] font-normal leading-[10px] font-[Urbanist]">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow Icons */}
      <div className="absolute left-[563px] top-[547px] w-[70px] h-[226px] flex flex-col gap-[11px]">
        {[
          { icon: "seo", label: "SEO Research" },
          { icon: "ui", label: "UI" },
          { icon: "wireframe", label: "Wireframe" }
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-[10px] w-[70px]">
            <div className="flex p-3 justify-center items-center rounded-full bg-white shadow-[0_4px_12.8px_0_rgba(29,143,255,0.12)]">
              {step.icon === "seo" && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.136 17.2881C11.2938 17.2881 13.3632 16.4309 14.889 14.9051C16.4148 13.3793 17.272 11.3099 17.272 9.15211C17.272 6.99431 16.4148 4.92489 14.889 3.39909C13.3632 1.8733 11.2938 1.01611 9.136 1.01611C6.9782 1.01611 4.90878 1.8733 3.38298 3.39909C1.85718 4.92489 1 6.99431 1 9.15211C1 11.3099 1.85718 13.3793 3.38298 14.9051C4.90878 16.4309 6.9782 17.2881 9.136 17.2881Z" fill="#66E1FF"/>
                  <path d="M10.7651 6.96025L13.2421 9.43425C13.3308 9.52303 13.4362 9.59345 13.5522 9.64149C13.6682 9.68953 13.7925 9.71426 13.9181 9.71426C14.0436 9.71426 14.1679 9.68953 14.2839 9.64149C14.3999 9.59345 14.5053 9.52303 14.5941 9.43425L16.9841 7.04325C16.5197 5.31083 15.4954 3.78064 14.0707 2.6911C12.646 1.60157 10.9009 1.01387 9.10732 1.01957C7.31376 1.02528 5.57245 1.62407 4.1547 2.72265C2.73695 3.82124 1.72238 5.35791 1.26907 7.09325C0.967739 8.24401 0.92261 9.44688 1.13686 10.617C1.35112 11.7871 1.81954 12.8959 2.50907 13.8653L9.41807 6.96025C9.59719 6.78218 9.8395 6.68223 10.0921 6.68223C10.3446 6.68223 10.5859 6.78218 10.7651 6.96025Z" fill="#C2F3FF"/>
                </svg>
              )}
              {step.icon === "ui" && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5085 3.62217C8.7822 0.601166 3.56895 2.75367 1.69095 5.69592C1.0752 6.65742 0.640204 8.40717 0.656704 9.79467C0.690454 12.6499 2.2707 15.8322 5.6817 19.0422C9.87795 22.9909 14.1605 22.6459 15.5217 22.3144C17.2355 21.8959 18.3845 21.5397 18.2082 19.9422C18.1857 19.7322 18.0057 19.3512 17.7342 19.1847C16.8627 18.6559 15.0417 18.3807 14.1852 17.1072C12.9402 15.2532 14.4882 15.1594 15.9717 15.9522C17.5595 16.8019 18.467 17.3322 20.0607 17.1859C21.2292 17.0794 22.928 16.3744 23.1582 14.4034C23.3652 12.6207 20.7627 6.92217 14.5077 3.62217M16.8455 13.3122C16.4067 13.9797 15.323 13.7509 14.6127 13.1209C13.9025 12.4909 13.8102 11.4409 14.2707 11.0284C14.7395 10.6107 15.6207 10.7059 16.3317 11.3359C17.0405 11.9674 17.189 12.7872 16.8455 13.3122Z" fill="#AC5810"/>
                </svg>
              )}
              {step.icon === "wireframe" && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 8.25C7.5 7.65326 7.73705 7.08097 8.15901 6.65901C8.58097 6.23705 9.15326 6 9.75 6H17.25C17.8467 6 18.419 6.23705 18.841 6.65901C19.2629 7.08097 19.5 7.65326 19.5 8.25V15.75C19.5 16.3467 19.2629 16.919 18.841 17.341C18.419 17.7629 17.8467 18 17.25 18H9.75C9.15326 18 8.58097 17.7629 8.15901 17.341C7.73705 16.919 7.5 16.3467 7.5 15.75V8.25Z" fill="url(#paint0_linear_1410_4695)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1410_4695" x1="21.3" y1="20.3085" x2="22.8705" y2="7.6035" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#BB45EA"/>
                      <stop offset="1" stopColor="#9C6CFE"/>
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
            <span className="text-[#7B7B7B] text-[10px] font-normal leading-[10px] text-center font-[Urbanist]">{step.label}</span>
          </div>
        ))}
      </div>

      {/* Right Side Process Icons */}
      <div className="absolute left-[761px] top-[628px] w-[162px] h-[68px] flex items-center gap-[22px]">
        <div className="flex flex-col items-center gap-[10px] w-[70px]">
          <div className="flex p-3 justify-center items-center rounded-full bg-white shadow-[0_4px_12.8px_0_rgba(29,143,255,0.12)]">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/351b14cff2d5dca4f268f2a64fa192f96a639767?width=89" alt="Prototype" className="w-6 h-6" />
          </div>
          <span className="text-[#7B7B7B] text-[10px] font-normal leading-[10px] text-center font-[Urbanist]">Prototype</span>
        </div>

        <div className="flex flex-col items-center gap-[10px] w-[70px]">
          <div className="flex p-3 justify-center items-center rounded-full bg-white shadow-[0_4px_12.8px_0_rgba(29,143,255,0.12)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.74631 15.0679H21.2671C21.5261 15.0679 21.759 15.2357 21.8557 15.4918L23.956 21.0588C23.9863 21.1391 24.0019 21.2248 24.0019 21.3113V21.8237C24.0019 22.1973 23.7179 22.5001 23.3675 22.5001H0.774984C0.424641 22.5001 0.140625 22.1973 0.140625 21.8237V21.3039C0.140625 21.2222 0.1545 21.1412 0.181641 21.0647L2.15297 15.5051C2.24625 15.242 2.4825 15.0679 2.74631 15.0679Z" fill="#ADB8BC"/>
              <path d="M2.86248 0.902832H21.2098C21.52 0.902832 21.7715 1.15432 21.7715 1.46454V14.5262C21.7715 14.8364 21.52 15.0879 21.2098 15.0879H2.86248C2.55227 15.0879 2.30078 14.8364 2.30078 14.5262V1.46454C2.30073 1.15432 2.55227 0.902832 2.86248 0.902832Z" fill="#C5CFD1"/>
            </svg>
          </div>
          <span className="text-[#7B7B7B] text-[10px] font-normal leading-[10px] text-center font-[Urbanist]">Dev Handoff</span>
        </div>
      </div>

      {/* Central Connection Circle */}
      <div className="absolute left-[688px] top-[642px] w-[40px] h-[40px] rounded-full bg-white border border-[#1D8FFF] shadow-[0_0_0_7px_#43A2FF,_0_4px_64.8px_0_#43A2FF] flex items-center justify-center" />

      {/* Decorative Lines */}
      <svg className="absolute left-[534px] top-[535px] w-[408px] h-[261px]" viewBox="0 0 410 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H172M172 1H376.041M172 1V131.5M172 262H376.041M172 262H1M172 262V131.5M172 131.5H409" stroke="url(#paint0_linear_1410_4552)" strokeLinecap="round" strokeDasharray="12 12"/>
        <defs>
          <linearGradient id="paint0_linear_1410_4552" x1="188.52" y1="1" x2="188.52" y2="262" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D0D5DD"/>
            <stop offset="0.326922" stopColor="#43A2FF"/>
            <stop offset="0.466346" stopColor="#7B7B7B"/>
            <stop offset="0.70673" stopColor="#1D8FFF" stopOpacity="0.2"/>
            <stop offset="1" stopColor="#2F98FF" stopOpacity="0.63"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow Up - Left */}
      <svg className="absolute left-[240px] top-[78px] w-[18px] h-[31px]" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.02899 25C3.02899 28.2977 5.7023 30.971 9 30.971C12.2977 30.971 14.971 28.2977 14.971 25C14.971 21.7023 12.2977 19.029 9 19.029C5.7023 19.029 3.02899 21.7023 3.02899 25ZM9.79165 1.20835C9.35443 0.77113 8.64557 0.77113 8.20835 1.20835L1.08348 8.33322C0.646261 8.77043 0.646261 9.4793 1.08348 9.91652C1.5207 10.3537 2.22957 10.3537 2.66678 9.91652L9 3.5833L15.3332 9.91652C15.7704 10.3537 16.4793 10.3537 16.9165 9.91652C17.3537 9.4793 17.3537 8.77043 16.9165 8.33322L9.79165 1.20835ZM9 25H10.1196V2H9H7.88043V25H9Z" fill="#1D8FFF"/>
      </svg>

      {/* Arrow Down - Right */}
      <svg className="absolute left-[1066px] top-[849px] w-[18px] h-[31px]" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.20835 29.7917C8.64557 30.2289 9.35443 30.2289 9.79165 29.7917L16.9165 22.6668C17.3537 22.2296 17.3537 21.5207 16.9165 21.0835C16.4793 20.6463 15.7704 20.6463 15.3332 21.0835L9 27.4167L2.66678 21.0835C2.22957 20.6463 1.5207 20.6463 1.08348 21.0835C0.646261 21.5207 0.646261 22.2296 1.08348 22.6668L8.20835 29.7917ZM3.02899 6C3.02899 9.2977 5.7023 11.971 9 11.971C12.2977 11.971 14.971 9.2977 14.971 6C14.971 2.7023 12.2977 0.0289855 9 0.0289855C5.7023 0.0289855 3.02899 2.7023 3.02899 6ZM9 29H10.1196V6H9H7.88043V29H9Z" fill="#1D8FFF"/>
      </svg>
    </div>
  );
};

export default LandingPage;
