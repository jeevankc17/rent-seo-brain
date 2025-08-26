"use client";
import React from "react";

const CMSResult = () => {
  return (
    <div className="flex w-full max-w-[1128px] mx-auto flex-col items-center gap-8 md:gap-12 lg:gap-[50px] px-4">
      {/* Header Section */}
      <div className="flex w-full max-w-[552px] flex-col justify-center items-center gap-4">
        {/* Badge */}
        <div className="flex w-full max-w-[174px] px-0 py-[5px] justify-center items-center gap-[6px] rounded-[35px] md:rounded-[45px] border border-[#F78C01]">
          <div className="flex w-full max-w-[159px] px-2 py-[2px] justify-center items-center gap-[6px] flex-shrink-0 rounded-[35px] md:rounded-[45px] border-[0.2px] border-[#F8A02C] bg-[#FEF4E6]">
            <svg
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
            <span className="text-[#F78C01] font-urbanist text-xs md:text-sm lg:text-[14px] font-normal text-center">
              Our Success Stories
            </span>
          </div>
        </div>

        {/* Main Heading and Description */}
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h2 className="w-full text-[#12579C] text-center font-urbanist text-base md:text-xl lg:text-[50px] font-bold">
            Real Results for Real Businesses
          </h2>
          <p className="w-full text-[#6A7986] text-center font-urbanist text-xs md:text-base lg:text-[16px] font-normal">
            Don't just take our word for it. See how we've helped businesses
            like yours achieve remarkable growth through strategic content
            marketing.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1128px] items-center gap-6 md:gap-8 lg:gap-[11px]">
        {/* Testimonial Card */}
        <div className="flex w-full max-w-[452px] min-h-[300px] lg:h-[336px] p-6 md:p-8 lg:px-9 lg:py-[30px] flex-col items-start gap-6 md:gap-8 lg:gap-9 flex-shrink-0 rounded-[11px] border-t-[5px] border-t-[#1D8FFF] bg-white shadow-[0_4px_18px_0_rgba(29,143,255,0.20)]">
          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-9 w-full">
            <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-[23px] w-full">
              {/* 5 Stars */}
              <div className="flex items-center gap-[2.673px]">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="20"
                    height="20"
                    className="md:w-[25px] md:h-[25px]"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.84257 22.0563L7.47172 15.0134L2.00781 10.2763L9.22618 9.64971L12.0333 3.00781L14.8405 9.64971L22.0588 10.2763L16.5949 15.0134L18.2241 22.0563L12.0333 18.3218L5.84257 22.0563Z"
                      fill="#FFCC00"
                    />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="w-full text-[#34475A] font-urbanist text-xs md:text-base lg:text-[16px] font-medium">
                " Rent SEO Brain transformed our content strategy completely.
                Within 6 months, our organic traffic increased by 214% and we're
                generating 3x more qualified leads. Their team doesn't just
                write content "
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-[15px]">
              <div className="flex w-[40px] h-[40px] justify-center items-center rounded-full overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6cfa502ca739a7bf4090859a42c239ef572c2ef7?width=80"
                  alt="Sarah Johnson"
                  className="w-[40px] h-[40px] object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-[#1D8FFF] font-urbanist text-xs md:text-base lg:text-[16px] font-semibold capitalize">
                  Sarah Johnson
                </div>
                <div className="text-[#7B7B7B] font-urbanist text-xs md:text-sm lg:text-[14px] font-normal capitalize">
                  Marketing Director at TechFlow Solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full max-w-[665px]">
          {/* Metric Card 1 - Traffic Growth */}
          <div className="flex w-full max-w-[329px] mx-auto lg:ml-auto lg:mr-0 p-4 md:p-6 lg:px-[37px] lg:py-[14px] items-center gap-4 md:gap-6 lg:gap-[18px] rounded-[13px] bg-white shadow-[0_4px_27.7px_0_rgba(247,181,13,0.12)]">
            <div className="flex w-[40px] h-[40px] md:w-[48px] md:h-[48px] p-2 md:p-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[43px] bg-[rgba(216,253,95,1)] shadow-[0_4px_19.5px_0_rgba(247,181,13,0.33)]">
              <svg
                width="20"
                height="20"
                className="md:w-[24px] md:h-[24px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 6L13.5 15.5L8.5 10.5L1 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 6H23V12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-2 flex-1">
              <div className="text-[#12579C] font-urbanist text-sm md:text-lg lg:text-[18px] font-semibold capitalize">
                214%
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[16px] font-medium capitalize">
                  Traffic Growth
                </div>
                <div className="text-[#7B7B7B] font-urbanist text-xs md:text-sm lg:text-[14px] font-medium capitalize">
                  Organic traffic increase
                </div>
              </div>
            </div>
          </div>

          {/* Metric Card 2 - Pageviews */}
          <div className="flex w-full max-w-[329px] mx-auto lg:ml-0 lg:mr-auto p-4 md:p-6 lg:px-[37px] lg:py-[14px] items-center gap-4 md:gap-6 lg:gap-[18px] rounded-[13px] bg-white shadow-[0_4px_27.7px_0_rgba(247,181,13,0.12)]">
            <div className="flex w-[40px] h-[40px] md:w-[48px] md:h-[48px] p-2 md:p-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[43px] bg-[rgba(216,253,95,1)] shadow-[0_4px_19.5px_0_rgba(247,181,13,0.33)]">
              <svg
                width="20"
                height="20"
                className="md:w-[24px] md:h-[24px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-2 flex-1">
              <div className="text-[#12579C] font-urbanist text-sm md:text-lg lg:text-[18px] font-semibold capitalize">
                4X
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[16px] font-medium capitalize">
                  More Pageviews
                </div>
                <div className="text-[#7B7B7B] font-urbanist text-xs md:text-sm lg:text-[14px] font-medium capitalize">
                  Average session engagement
                </div>
              </div>
            </div>
          </div>

          {/* Metric Card 3 - Lead Generation */}
          <div className="flex w-full max-w-[329px] mx-auto lg:ml-auto lg:mr-0 p-4 md:p-6 lg:px-[37px] lg:py-[14px] items-center gap-4 md:gap-6 lg:gap-[18px] rounded-[13px] bg-white shadow-[0_4px_27.7px_0_rgba(247,181,13,0.12)]">
            <div className="flex w-[40px] h-[40px] md:w-[48px] md:h-[48px] p-2 md:p-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[43px] bg-[rgba(216,253,95,1)] shadow-[0_4px_19.5px_0_rgba(247,181,13,0.33)]">
              <svg
                width="20"
                height="20"
                className="md:w-[24px] md:h-[24px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 11L19 13L23 9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-2 flex-1">
              <div className="text-[#12579C] font-urbanist text-sm md:text-lg lg:text-[18px] font-semibold capitalize">
                3X
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <div className="text-[#22384C] font-urbanist text-xs md:text-base lg:text-[16px] font-medium capitalize">
                  Lead Generation
                </div>
                <div className="text-[#7B7B7B] font-urbanist text-xs md:text-sm lg:text-[14px] font-medium capitalize">
                  Qualified leads per month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="flex flex-col sm:flex-row w-full max-w-[1128px] h-auto lg:h-[143px] justify-center items-center gap-4 sm:gap-6 lg:gap-[38px]">
        {/* Stat 1 - Happy Clients */}
        <div className="flex w-full sm:w-auto sm:min-w-[200px] lg:w-[253px] px-4 sm:px-6 lg:px-[34px] py-4 lg:py-[22px] flex-col justify-center items-center gap-3 lg:gap-[21px] flex-shrink-0 rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)]">
          <div className="w-full text-[#1D8FFF] text-center font-urbanist text-lg lg:text-[24px] font-semibold leading-tight lg:leading-[26px]">
            100+
          </div>
          <div className="text-[#7B7B7B] text-center font-urbanist text-sm lg:text-[18px] font-medium leading-tight lg:leading-[26px]">
            Happy Clients
          </div>
        </div>

        {/* Stat 2 - Satisfaction Rate */}
        <div className="flex w-full sm:w-auto sm:min-w-[200px] lg:w-[253px] px-4 sm:px-6 lg:px-[34px] py-4 lg:py-[22px] flex-col justify-center items-center gap-3 lg:gap-[21px] flex-shrink-0 rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)]">
          <div className="w-full text-[#1D8FFF] text-center font-urbanist text-lg lg:text-[24px] font-semibold leading-tight lg:leading-[26px]">
            98%
          </div>
          <div className="text-[#7B7B7B] text-center font-urbanist text-sm lg:text-[18px] font-medium leading-tight lg:leading-[26px]">
            Satisfaction Rate
          </div>
        </div>

        {/* Stat 3 - Avg Traffic Growth */}
        <div className="flex w-full sm:w-auto sm:min-w-[200px] lg:w-[253px] px-4 sm:px-6 lg:px-[34px] py-4 lg:py-[22px] flex-col justify-center items-center gap-3 lg:gap-[21px] flex-shrink-0 rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)]">
          <div className="w-full text-[#1D8FFF] text-center font-urbanist text-lg lg:text-[24px] font-semibold leading-tight lg:leading-[26px]">
            214%
          </div>
          <div className="text-[#7B7B7B] text-center font-urbanist text-sm lg:text-[18px] font-medium leading-tight lg:leading-[26px]">
            Avg Traffic Growth
          </div>
        </div>

        {/* Stat 4 - Client Rating */}
        <div className="flex w-full sm:w-auto sm:min-w-[200px] lg:w-[253px] px-4 sm:px-6 lg:px-[34px] py-4 lg:py-[22px] flex-col justify-center items-center gap-3 lg:gap-[21px] flex-shrink-0 rounded-[13px] border border-[#E8F4FF] bg-[rgba(232,244,255,0.18)]">
          <div className="w-full text-[#1D8FFF] text-center font-urbanist text-lg lg:text-[24px] font-semibold leading-tight lg:leading-[26px]">
            4.9★
          </div>
          <div className="text-[#7B7B7B] text-center font-urbanist text-sm lg:text-[18px] font-medium leading-tight lg:leading-[26px]">
            Client Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSResult;
