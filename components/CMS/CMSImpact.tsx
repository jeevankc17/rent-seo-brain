import React from 'react';
import { cn } from '../../lib/utils';

const CMSImpact = () => {
  return (
    <div className="flex w-full px-4 md:px-8 lg:max-w-[1128px] lg:mx-auto flex-col items-center gap-8 md:gap-12 lg:gap-18 relative">
      {/* Header Section */}
      <div className="flex w-full max-w-md md:max-w-lg lg:w-[565px] flex-col items-center gap-4 relative">
        {/* Tag */}
        <div className="flex w-full max-w-sm md:max-w-md lg:w-[384px] py-[5px] px-[10px] justify-center items-center gap-[6px] rounded-[45px] border border-[#1D8FFF] bg-[#E8F4FF] relative">
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 16 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path 
              d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" 
              fill="#1D8FFF"
            />
          </svg>
          <span className="text-[#1D8FFF] font-urbanist text-xs sm:text-sm lg:text-[14px] font-medium leading-[23px] capitalize text-center">
            Why Choose Rent SEO Brain for Content Marketing?
          </span>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col items-center gap-4 w-full relative">
          <h2 className="w-full text-[#12579C] text-center font-urbanist text-lg sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-tight lg:leading-[57px]">
            Not Just Words ,We Create Impact
          </h2>
          <p className="w-full max-w-md md:max-w-lg lg:w-[565px] text-[#6A7986] text-center font-urbanist text-sm md:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[23px]">
            At Rent SEO Brain, we don't believe in churning out generic blog posts or keyword-stuffed articles. We believe in strategic content .
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:w-[1128px] lg:h-[602px] lg:relative gap-6 md:gap-8 lg:gap-0">
        {/* Content Cards */}
        <div className="flex w-full flex-col items-start gap-6 md:gap-8 lg:w-[336px] lg:absolute lg:left-0 lg:top-0 lg:h-[600px] lg:gap-[42px]">
          {/* Video Scripts */}
          <div className="flex h-auto min-h-[120px] md:min-h-[140px] lg:h-[172px] py-4 px-4 md:py-6 md:px-5 lg:py-[35px] lg:px-[25px] justify-center items-start gap-3 md:gap-4 lg:gap-[17px] w-full rounded-[17px] border-b border-[#E0E0E0] bg-white shadow-[0_4px_26.4px_0_rgba(47,152,255,0.24)] relative">
            <div className="flex flex-col items-start gap-2 md:gap-3 flex-1 relative">
              <h3 className="w-full text-[#071F36] font-urbanist text-base md:text-lg lg:text-[20px] font-medium leading-normal">
                Video Scripts
              </h3>
              <p className="w-full text-[#8D8D8D] font-urbanist text-sm md:text-base lg:text-[18px] font-normal leading-normal">
                Engaging scripts for YouTube, social media, and ads
              </p>
            </div>
            <div className="flex w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10px] justify-center items-center gap-[10px] rounded-[42px] bg-[rgba(216,253,95,1)] relative flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 7L16 12L23 17V7Z" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Content Reports */}
          <div className="flex h-auto min-h-[120px] md:min-h-[140px] lg:h-[172px] py-4 px-4 md:py-6 md:px-5 lg:py-[35px] lg:px-[25px] justify-center items-start gap-3 md:gap-4 lg:gap-[17px] w-full rounded-[17px] border-b border-[#E0E0E0] bg-white shadow-[0_4px_26.4px_0_rgba(47,152,255,0.24)] relative">
            <div className="flex flex-col items-start gap-2 md:gap-3 flex-1 relative">
              <h3 className="w-full text-[#071F36] font-urbanist text-base md:text-lg lg:text-[20px] font-medium leading-normal">
                Content Reports
              </h3>
              <p className="w-full text-[#8D8D8D] font-urbanist text-sm md:text-base lg:text-[18px] font-normal leading-normal">
                Data-driven insights and performance analysis
              </p>
            </div>
            <div className="flex w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10px] justify-center items-center gap-[10px] rounded-[42px] bg-[rgba(216,253,95,1)] relative flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 6H23V12" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Email Campaigns */}
          <div className="flex h-auto min-h-[120px] md:min-h-[140px] lg:h-[172px] py-4 px-4 md:py-6 md:px-5 lg:py-[35px] lg:px-[25px] justify-center items-start gap-3 md:gap-4 lg:gap-[17px] w-full rounded-[17px] border-b border-[#E0E0E0] bg-white shadow-[0_4px_26.4px_0_rgba(47,152,255,0.24)] relative">
            <div className="flex flex-col items-start gap-2 md:gap-3 flex-1 relative">
              <h3 className="w-full text-[#071F36] font-urbanist text-base md:text-lg lg:text-[20px] font-medium leading-normal">
                Email Campaigns
              </h3>
              <p className="w-full text-[#8D8D8D] font-urbanist text-sm md:text-base lg:text-[18px] font-normal leading-normal">
                High-converting email sequences and newsletters
              </p>
            </div>
            <div className="flex w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10px] justify-center items-center gap-[10px] rounded-[42px] bg-[rgba(216,253,95,1)] relative flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex w-full flex-col items-start gap-6 md:gap-8 lg:w-[336px] lg:absolute lg:left-[792px] lg:top-[2px] lg:h-[600px] lg:gap-[42px]">
          {/* Blog Posts */}
          <div className="flex h-auto min-h-[120px] md:min-h-[140px] lg:h-[172px] py-4 px-4 md:py-6 md:px-5 lg:py-[35px] lg:px-[25px] justify-center items-start gap-3 md:gap-4 lg:gap-[17px] w-full rounded-[17px] border-b border-[#E0E0E0] bg-white shadow-[0_4px_26.4px_0_rgba(47,152,255,0.24)] relative">
            <div className="flex flex-col items-start gap-2 md:gap-3 flex-1 relative">
              <h3 className="w-full text-[#071F36] font-urbanist text-base md:text-lg lg:text-[20px] font-medium leading-normal">
                Blog Posts
              </h3>
              <p className="w-full text-[#8D8D8D] font-urbanist text-sm md:text-base lg:text-[18px] font-normal leading-normal">
                SEO-optimized articles that drive organic traffic
              </p>
            </div>
            <div className="flex w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10px] justify-center items-center gap-[10px] rounded-[42px] bg-[rgba(216,253,95,1)] relative flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#071F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex h-auto min-h-[120px] md:min-h-[140px] lg:h-[172px] py-4 px-4 md:py-6 md:px-5 lg:py-[35px] lg:px-[25px] justify-center items-start gap-3 md:gap-4 lg:gap-[17px] w-full rounded-[17px] border-b border-[#E0E0E0] bg-white shadow-[0_4px_26.4px_0_rgba(47,152,255,0.24)] relative">
            <div className="flex flex-col items-start gap-2 md:gap-3 flex-1 relative">
              <h3 className="w-full text-[#071F36] font-urbanist text-base md:text-lg lg:text-[20px] font-medium leading-normal">
                Social Media
              </h3>
              <p className="w-full text-[#8D8D8D] font-urbanist text-sm md:text-base lg:text-[18px] font-normal leading-normal">
                Viral-worthy posts for all major platforms
              </p>
            </div>
            <div className="flex w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10px] justify-center items-center gap-[10px] rounded-[42px] bg-[rgba(216,253,95,1)] relative flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Podcast Content */}
          <div className="flex h-auto min-h-[120px] md:min-h-[140px] lg:h-[172px] py-4 px-4 md:py-6 md:px-5 lg:py-[35px] lg:px-[25px] justify-center items-start gap-3 md:gap-4 lg:gap-[17px] w-full rounded-[17px] border-b border-[#E0E0E0] bg-white shadow-[0_4px_26.4px_0_rgba(47,152,255,0.24)] relative">
            <div className="flex flex-col items-start gap-2 md:gap-3 flex-1 relative">
              <h3 className="w-full text-[#071F36] font-urbanist text-base md:text-lg lg:text-[20px] font-medium leading-normal">
                Podcast Content
              </h3>
              <p className="w-full text-[#8D8D8D] font-urbanist text-sm md:text-base lg:text-[18px] font-normal leading-normal">
                Show notes, transcripts, and episode outlines
              </p>
            </div>
            <div className="flex w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10px] justify-center items-center gap-[10px] rounded-[42px] bg-[rgba(216,253,95,1)] relative flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Central Circle - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block lg:absolute lg:left-[499px] lg:top-[258px]">
          <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="38.5" cy="38.5" r="34.1564" fill="white" stroke="url(#paint0_linear_1423_3301)" strokeWidth="8.68718"/>
            <defs>
              <linearGradient id="paint0_linear_1423_3301" x1="38.5" y1="0" x2="38.5" y2="77" gradientUnits="userSpaceOnUse">
                <stop stopColor="#43A2FF"/>
                <stop offset="0.546064" stopColor="white"/>
                <stop offset="0.657222" stopColor="white"/>
                <stop offset="1" stopColor="#43A2FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CMSImpact;
