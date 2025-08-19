"use client";
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="relative w-full h-[1537px] bg-white">
      {/* Map Background */}
      <div className="absolute left-0 top-[828px] w-full h-[709px] bg-white flex justify-end items-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/01582135ed732094c3a2b9e909e1680de47654f1?width=3050" 
          alt="Map background" 
          className="absolute left-[-14px] top-[-88px] w-[1525px] h-[885px] object-cover"
          style={{ aspectRatio: '112/65' }}
        />
      </div>

      {/* Main Content */}
      <div className="absolute left-[156px] top-0 w-[1128px] h-[962px] flex flex-col items-center gap-[50px]">
        {/* Title Section */}
        <div className="flex w-[565px] flex-col items-center gap-4">
          {/* Contact Us Badge */}
          <div className="flex w-[149px] py-[5px] justify-center items-center gap-[6px] rounded-[45px] border border-[#F78C01]">
            <div className="flex w-[130px] py-[2px] px-2 justify-center items-center gap-[6px] flex-shrink-0 rounded-[45px] bg-[#FEF4E6]">
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
          <div className="flex h-44 flex-col items-center gap-4 self-stretch">
            <h1 className="self-stretch text-[#12579C] text-center font-urbanist text-[50px] font-bold leading-[57px]">
              Have be any question?
              feel free to Contact
            </h1>
            <p className="w-[565px] text-[#6A7986] text-center font-urbanist text-base font-medium leading-[23px]">
              Whether you have questions, need support, or want to get started — we're here to help.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex px-[92px] py-[60px] justify-center items-center content-center gap-[33px] self-stretch flex-wrap rounded-[29px] border border-[#E9E9E9] bg-white shadow-[0_4px_35.3px_0_rgba(67,162,255,0.07)]">
          {/* Left Column */}
          <div className="flex w-[456px] flex-col items-start gap-[33px]">
            {/* First Name Input */}
            <div className="flex py-[19px] px-5 items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
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

            {/* Phone Input */}
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
                  <path d="M15.5475 5C16.5242 5.19057 17.4219 5.66826 18.1256 6.37194C18.8292 7.07561 19.3069 7.97326 19.4975 8.95M15.5475 1C17.5768 1.22544 19.4691 2.13417 20.9137 3.57701C22.3584 5.01984 23.2695 6.91101 23.4975 8.94M22.4975 16.92V19.92C22.4986 20.1985 22.4416 20.4742 22.33 20.7293C22.2184 20.9845 22.0548 21.2136 21.8496 21.4019C21.6443 21.5901 21.4021 21.7335 21.1382 21.8227C20.8744 21.9119 20.5949 21.9451 20.3175 21.92C17.2403 21.5856 14.2845 20.5341 11.6875 18.85C9.27132 17.3147 7.22283 15.2662 5.68749 12.85C3.99747 10.2412 2.94573 7.27099 2.61749 4.18C2.5925 3.90347 2.62537 3.62476 2.71399 3.36162C2.80262 3.09849 2.94506 2.85669 3.13226 2.65162C3.31945 2.44655 3.5473 2.28271 3.80128 2.17052C4.05527 2.05833 4.32983 2.00026 4.60749 2H7.60749C8.0928 1.99522 8.56328 2.16708 8.93125 2.48353C9.29922 2.79999 9.53957 3.23945 9.60749 3.72C9.73411 4.68007 9.96894 5.62273 10.3075 6.53C10.442 6.88792 10.4712 7.27691 10.3914 7.65088C10.3116 8.02485 10.1264 8.36811 9.85749 8.64L8.58749 9.91C10.011 12.4135 12.0839 14.4864 14.5875 15.91L15.8575 14.64C16.1294 14.3711 16.4726 14.1858 16.8466 14.1061C17.2206 14.0263 17.6096 14.0555 17.9675 14.19C18.8748 14.5286 19.8174 14.7634 20.7775 14.89C21.2633 14.9585 21.7069 15.2032 22.024 15.5775C22.3412 15.9518 22.5097 16.4296 22.4975 16.92Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_1562_5675">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <input 
                type="tel" 
                placeholder="Phone" 
                className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full"
              />
            </div>

            {/* Subject Input */}
            <div className="flex py-[19px] px-5 items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
              <svg 
                className="w-6 h-6" 
                width="25" 
                height="24" 
                viewBox="0 0 25 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 19.5C4.5 18.837 4.76339 18.2011 5.23223 17.7322C5.70107 17.2634 6.33696 17 7 17H20.5" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 2H20.5V22H7C6.33696 22 5.70107 21.7366 5.23223 21.2678C4.76339 20.7989 4.5 20.163 4.5 19.5V4.5C4.5 3.83696 4.76339 3.20107 5.23223 2.73223C5.70107 2.26339 6.33696 2 7 2Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Subject" 
                className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-[456px] flex-col items-start gap-[33px]">
            {/* Last Name Input */}
            <div className="flex py-[19px] px-5 items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
              <svg 
                className="w-6 h-6" 
                width="25" 
                height="24" 
                viewBox="0 0 25 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1562_2685)">
                  <path d="M16.5 21V19C16.5 17.9391 16.0786 16.9217 15.3284 16.1716C14.5783 15.4214 13.5609 15 12.5 15H5.5C4.43913 15 3.42172 15.4214 2.67157 16.1716C1.92143 16.9217 1.5 17.9391 1.5 19V21" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 11L19.5 13L23.5 9" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_1562_2685">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <input 
                type="text" 
                placeholder="Last name" 
                className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full"
              />
            </div>

            {/* Email Input */}
            <div className="flex py-[19px] px-5 items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
              <svg 
                className="w-6 h-6" 
                width="25" 
                height="24" 
                viewBox="0 0 25 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 4H20.5C21.6 4 22.5 4.9 22.5 6V18C22.5 19.1 21.6 20 20.5 20H4.5C3.4 20 2.5 19.1 2.5 18V6C2.5 4.9 3.4 4 4.5 4Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 6L12.5 13L2.5 6" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full"
              />
            </div>

            {/* Website Input */}
            <div className="flex py-[19px] px-5 items-center gap-[10px] self-stretch rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
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
                className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full"
              />
            </div>
          </div>

          {/* Comments Textarea */}
          <div className="flex w-[943px] h-[195px] py-[19px] px-5 items-start gap-[10px] rounded-[5px] border border-[#D2D2D2] bg-[#FAFAFA] shadow-[0_1px_44.2px_0_rgba(0,129,255,0.20)]">
            <svg 
              className="w-6 h-6 flex-shrink-0" 
              width="25" 
              height="24" 
              viewBox="0 0 25 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5 2.99981C17.7626 2.73717 18.0744 2.52883 18.4176 2.38669C18.7608 2.24455 19.1286 2.17139 19.5 2.17139C19.8714 2.17139 20.2392 2.24455 20.5824 2.38669C20.9256 2.52883 21.2374 2.73717 21.5 2.99981C21.7626 3.26246 21.971 3.57426 22.1131 3.91742C22.2553 4.26058 22.3284 4.62838 22.3284 4.99981C22.3284 5.37125 22.2553 5.73905 22.1131 6.08221C21.971 6.42537 21.7626 6.73717 21.5 6.99981L8 20.4998L2.5 21.9998L4 16.4998L17.5 2.99981Z" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <textarea 
              placeholder="any comments.." 
              className="text-[#5B6B7A] font-urbanist text-sm font-normal leading-[23px] capitalize bg-transparent border-none outline-none w-full h-full resize-none"
            />
          </div>

          {/* Submit Button */}
          <button className="flex w-48 h-[50px] px-[3px] justify-end items-center gap-[10px] rounded-[45px] bg-[#1D8FFF] shadow-[0_4px_14.7px_0_rgba(47,152,255,0.63)] hover:bg-[#1570D1] transition-colors">
            <span className="text-white text-center font-urbanist text-base font-medium leading-[23px] capitalize">
              Send Message
            </span>
            <div className="flex p-3 items-center gap-[10px] rounded-[34px] border border-[#A2D1FF] bg-[#E8F4FF]">
              <svg 
                className="w-5 h-5" 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.16406 10H15.8307" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
