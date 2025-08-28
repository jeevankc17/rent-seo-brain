import React from "react";
import AppButton from "@/utils/AppButton";

export default function DeepDive() {
  return (
    <section className="w-full flex justify-center py-6 lg:py-8">
      <div className="w-full max-w-[1128px] h-auto lg:h-[456px] relative bg-gradient-to-b from-[#43A2FF] via-[#43A2FF] to-white rounded-[12px] lg:rounded-[19px] overflow-hidden mx-4 lg:mx-0">
        {/* Background blur elements - hidden on mobile */}
        <div className="hidden lg:block w-[239px] h-[162px] absolute left-[-111px] top-[440px] bg-[#00B45C] rounded-full blur-[150px]" />
        <div className="hidden lg:block w-[239px] h-[162px] absolute left-[971px] top-[456px] bg-[#00B45C] rounded-full blur-[150px]" />
        
        {/* Main content */}
        <div className="flex w-full lg:w-[773px] flex-col items-center gap-6 lg:gap-[49px] relative lg:absolute lg:left-[177px] lg:top-[58px] px-4 lg:px-0 py-8 lg:py-0">
          {/* Title section */}
          <div className="flex flex-col justify-center items-center gap-[18px] self-stretch">
            <div className="flex flex-col justify-center items-center gap-4 self-stretch">
              {/* Badge */}
              <div className="flex w-full max-w-[252px] py-[5px] justify-center items-center gap-[6px] rounded-[35px] lg:rounded-[45px] border border-[#F78C01]">
                <div className="flex w-full max-w-[233px] py-[2px] px-2 justify-center items-center gap-[6px] flex-shrink-0 rounded-[35px] lg:rounded-[45px] bg-[#FEF4E6]">
                  <svg width="15" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" fill="#F78C01"/>
                  </svg>
                  <div className="text-[#F78C01] font-urbanist text-xs lg:text-sm font-medium leading-[18px] lg:leading-[23px] capitalize">
                    Stop Guessing. Start Ranking
                  </div>
                </div>
              </div>
              
              {/* Main heading */}
              <div className="self-stretch text-[#12579C] text-center font-urbanist text-xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
                Get a Deep Dive Into Your Website's SEO Health 
              </div>
            </div>
            
            {/* Description */}
            <div className="self-stretch text-[#4F6070] text-center font-urbanist text-sm md:text-base lg:text-base font-medium leading-[18px] md:leading-[20px] lg:leading-[23px]">
              Curious why your website isn't ranking higher on search engines? Our Free SEO Analyzer gives you a comprehensive snapshot of your site's SEO performance .
            </div>
          </div>
          
          {/* Input form section */}
          <div className="flex flex-col items-start gap-4 lg:gap-[18px] self-stretch">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[17px] self-stretch">
              {/* Input field */}
              <div className="flex w-full lg:w-[546px] py-4 lg:py-[18px] px-4 lg:px-[30px] items-center gap-[11px] rounded-[24px] lg:rounded-[32px] border border-[#E0E0E0] bg-[#FAFBFB]">
                <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#8D8D8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 12H22.5" stroke="#8D8D8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 2C15.0013 4.73835 16.4228 8.29203 16.5 12C16.4228 15.708 15.0013 19.2616 12.5 22C9.99872 19.2616 8.57725 15.708 8.5 12C8.57725 8.29203 9.99872 4.73835 12.5 2Z" stroke="#8D8D8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-[#8D8D8D] font-urbanist text-sm lg:text-base font-medium leading-[18px] lg:leading-[23px] lowercase">
                  Enter your website URL (eg.example.com)
                </div>
              </div>
              
              {/* Button */}
              <AppButton
                text="Free Audit"
                variant="blue"
                size="lg"
                // className="w-full lg:w-[207px] h-[50px] lg:h-[60px] shadow-[0px_5px_14.7px_0px_rgba(47,152,255,0.63)]"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative dots - hidden on mobile */}
        <div className="hidden lg:flex w-[177px] items-center content-center gap-[3px] flex-wrap absolute left-[965px] top-[-26px] h-[69px]">
          {Array.from({ length: 56 }, (_, i) => (
            <div key={i} className="w-2 h-2 bg-[#F4F4F4] bg-opacity-59 rounded-full" />
          ))}
        </div>
        
        {/* Decorative dots - hidden on mobile */}
        <div className="hidden lg:flex w-[177px] items-center content-center gap-[3px] flex-wrap absolute left-[-62px] top-[221px] h-[69px]">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="w-2 h-2 bg-[#F4F4F4] bg-opacity-59 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
