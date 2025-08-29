"use client";
import AppButton from "@utils/AppButton";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="relative w-full h-auto lg:h-[1537px] bg-white pb-20 lg:pb-0">
      {/* Map Background */}
      <div className="absolute inset-x-0 top-[1000px] lg:top-[828px] w-full h-auto lg:h-[709px] bg-white flex justify-center items-center z-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/01582135ed732094c3a2b9e909e1680de47654f1?width=3050" 
          alt="Map background" 
          className="w-full lg:w-[1525px] h-auto lg:h-[885px] object-cover z-0"
          style={{ aspectRatio: '112/65' }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1128px] mx-auto px-4 md:px-8 lg:px-0 w-full">
        <div className="relative w-full h-auto lg:h-[962px] flex flex-col items-center gap-8 lg:gap-[50px] py-8 lg:py-0 z-10 mb-20 lg:mb-0">
          {/* Title Section */}
          <div className="flex w-full max-w-[565px] flex-col items-center gap-4">
            {/* Contact Us Badge */}
            <div className="flex w-auto py-[5px] justify-center items-center gap-[6px] rounded-[45px] border border-[#F78C01]">
              <div className="flex w-auto py-[2px] px-2 justify-center items-center gap-[6px] flex-shrink-0 rounded-[45px] bg-[#FEF4E6]">
                <svg 
                  className="w-[15px] h-[15px] flex-shrink-0" 
                  width="15" 
                  height="15" 
                  viewBox="0 0 15 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z" 
                    fill="#F78C01"
                  />
                </svg>
                <span className="text-[#F78C01] font-urbanist text-sm font-medium leading-[23px] capitalize">
                  Contact Us
                </span>
              </div>
            </div>

            {/* Main Heading and Description */}
            <div className="flex h-auto flex-col items-center gap-4 self-stretch">
              <h1 className="self-stretch text-[#12579C] text-center font-urbanist text-xl md:text-3xl lg:text-[50px] font-bold leading-tight md:leading-[46px] lg:leading-[57px]">
                Have be any question?
                feel free to Contact
              </h1>
              <p className="w-full max-w-[565px] text-[#6A7986] text-center font-urbanist text-sm md:text-base font-medium leading-[20px] lg:leading-[23px]">
                Whether you have questions, need support, or want to get started — we're here to help.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full px-4 md:px-8 lg:px-[92px] py-8 lg:py-[60px] rounded-[29px] border border-[#E9E9E9] bg-white shadow-[0_4px_35.3px_0_rgba(67,162,255,0.07)]">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[33px]">
              {/* First Name */}
              <div className="flex py-[19px] px-5 items-center gap-[10px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
                <svg 
                  className="w-6 h-6" 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1562_7939)">
                    <path d="M16.5 21V19C16.5 17.9391 16.0786 16.9217 15.3284 16.1716C14.5783 15.4214 13.5609 15 12.5 15H5.5C4.43913 15 3.42172 15.4214 2.67157 16.1716C1.92143 16.9217 1.5 17.9391 1.5 19V21" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 11L19.5 13L23.5 9" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1562_7939">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full"
                />
              </div>

              {/* Last Name */}
              <div className="flex py-[19px] px-5 items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
                <svg 
                  className="w-6 h-6" 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1562_5675)">
                    <path d="M16.5 21V19C16.5 17.9391 16.0786 16.9217 15.3284 16.1716C14.5783 15.4214 13.5609 15 12.5 15H5.5C4.43913 15 3.42172 15.4214 2.67157 16.1716C1.92143 16.9217 1.5 17.9391 1.5 19V21" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1562_7939">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full text-[#6A7986] font-urbanist text-sm md:text-base font-medium leading-normal bg-transparent border-none outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex py-[19px] px-5 items-center gap-[10px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
                <svg 
                  className="w-6 h-6" 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.5 16.92V19.92C22.5009 20.1982 22.4156 20.4703 22.2556 20.6999C22.0955 20.9295 21.868 21.1058 21.604 20.205C21.269 21.004 20.728 21.6917 20.0443 22.1843C19.3606 22.6769 18.5634 22.9546 17.745 22.985C15.1247 23.105 12.5309 22.5114 10.25 21.265C7.233 19.584 4.778 16.943 3.5 13.75C2.222 10.557 2.125 6.967 3.5 3.73503C3.715 3.14703 4.5 2.73503 5 3.23503L7.5 5.73503C8.065 6.30003 8.271 7.13603 7.9 7.83503C7.572 8.45403 7.3 9.10203 7.09 9.77003C6.923 10.315 7.03 10.903 7.5 11.265L9.5 13.265C10.837 12.399 12.15 11.5 13.5 10.735C14.098 10.4 14.715 10.428 15.22 10.735L17.5 12.235C18.074 12.566 18.64 12.5 19.11 12.235C19.777 11.86 20.425 11.445 21.045 11.075C21.744 10.659 22.58 10.866 23.145 11.43L24.5 12.735C25.145 13.38 24.71 14.32 24.71 14.32C24.71 14.32 23.5 15.23 22.5 16.92Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full text-[#6A7986] font-urbanist text-sm md:text-base font-medium leading-normal bg-transparent border-none outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex py-[19px] px-5 items-center gap-[10px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
                <svg 
                  className="w-6 h-6" 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 4H20.5C21.6046 4 22.5 4.89543 22.5 6V18C22.5 19.1046 21.6046 20 20.5 20H4.5C3.39543 20 2.5 19.1046 2.5 18V6C2.5 4.89543 3.39543 4 4.5 4Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.5 6L12.5 13L2.5 6" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full text-[#6A7986] font-urbanist text-sm md:text-base font-medium leading-normal bg-transparent border-none outline-none"
                />
              </div>

              {/* Subject */}
              <div className="flex py-[19px] px-5 items-center gap-[10px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
                <svg 
                  className="w-6 h-6" 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.5 11.5C21.5 13.76 20.5 15.75 19 17.25M11.5 21C15.9183 21 19.5 17.4183 19.5 13C19.5 8.58172 15.9183 5 11.5 5C7.08172 5 3.5 8.58172 3.5 13C3.5 17.5228 7.08172 21 11.5 21Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 11L19.5 13L23.5 9" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full text-[#6A7986] font-urbanist text-sm md:text-base font-medium leading-normal bg-transparent border-none outline-none"
                />
              </div>

              {/* Website */}
              <div className="flex py-[19px] px-5 items-center gap-[10px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
                <svg 
                  className="w-6 h-6" 
                  width="25" 
                  height="24" 
                  viewBox="0 0 25 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 12H22.5" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 2C15.0013 4.73835 16.4228 8.29203 16.5 12C16.4228 15.708 15.0013 19.2616 12.5 22C9.99872 19.2616 8.57725 15.708 8.5 12C8.57725 8.29203 9.99872 4.73835 12.5 2Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="url" 
                  placeholder="Website" 
                  className="w-full text-[#6A7986] font-urbanist text-sm md:text-base font-medium leading-normal bg-transparent border-none outline-none"
                />
              </div>

              {/* Comments */}
              <div className="col-span-1 lg:col-span-2 flex flex-col w-full h-32 lg:h-[195px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)] p-5">
                <div className="flex items-center gap-[10px] mb-2">
                  <svg 
                    className="w-6 h-6" 
                    width="25" 
                    height="24" 
                    viewBox="0 0 25 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5 2.99981C17.7626 2.73717 18.0744 2.52883 18.4176 2.38669C18.7608 2.24455 19.1286 2.17139 19.5 2.17139C19.8714 2.17139 20.2392 2.24455 20.5824 2.38669C20.9256 2.52883 21.2374 2.73717 21.5 2.99981C21.7626 3.26246 21.971 3.57426 22.1131 3.91742C22.2553 4.26058 22.3284 4.62838 22.3284 4.99981C22.3284 5.37125 22.2553 5.73905 22.1131 6.08221C21.971 6.42537 21.7626 6.73717 21.5 6.99981L8 20.4998L2.5 21.9998L4 16.4998L17.5 2.99981Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#6A7986] font-urbanist text-sm font-medium">Comments</span>
                </div>
                <textarea 
                  placeholder="Type your message here..." 
                  className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] bg-transparent border-none outline-none w-full h-full resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1 lg:col-span-2 flex justify-center mt-4">
                <AppButton variant="blue" size="md" text="Send Message" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
