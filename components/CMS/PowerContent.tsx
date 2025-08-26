import React from 'react';

const PowerContent = () => {
  return (
    <section className="min-h-screen bg-neutral-900 overflow-hidden relative w-full py-8 md:py-12 lg:py-16">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-4">
        <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
          {/* Title Section */}
          <header className="w-full max-w-sm md:max-w-lg lg:max-w-[550px] flex flex-col items-center gap-4 md:gap-6">
            <div className="flex items-center justify-center gap-1.5 px-2.5 py-[5px] bg-[#12579C] rounded-[45px] shadow-[0px_3px_1.1px_rgba(29,143,255,0.3)]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 11.25L7.5 9.34375L10 11.25L9.0625 8.15625L11.5625 6.375H8.5L7.5 3.125L6.5 6.375H3.4375L5.9375 8.15625L5 11.25ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75Z"
                  fill="#E8F4FF"
                />
              </svg>
              <div className="text-[#E8F4FF] text-xs md:text-sm font-medium font-['Urbanist'] leading-[23px]">
                Our Content Marketing Services
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
              <h1 className="text-[#E8F4FF] text-center text-xl md:text-3xl lg:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[40px] lg:leading-[57px]">
                Everything You Need to Power Your Content.
              </h1>
              <p className="text-[#EBEDEF] text-center text-sm md:text-base font-normal font-['Urbanist'] leading-relaxed md:leading-[23px]">
                From strategy to execution, we handle every aspect of your content marketing to drive measurable results for your business.
              </p>
            </div>
          </header>

          {/* Services Cards */}
          <main className="flex flex-col items-center gap-8 md:gap-10 lg:gap-11 w-full max-w-[1125px]">
            {/* First Row - Cards 1 and 2 */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
              {/* Card 1 - SEO Blog Writing */}
              <article className="flex w-full lg:w-[431px] gap-2.5 px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-[18px] bg-[rgba(123,123,123,0.18)] rounded-[18px] border border-[#7B7B7B] flex-col items-start">
                <div className="flex flex-col items-start gap-[15px] w-full">
                  <div className="flex flex-col items-start gap-2.5 p-3.5 w-full rounded-[14px] bg-[#2F2F2F] shadow-[0_4px_49.3px_0_rgba(67,162,255,0.15)]">
                    <div className="flex flex-col items-start gap-[17px] w-full">
                      <div className="w-full h-auto bg-[#363636] rounded-[6px] p-4 md:p-5 lg:p-[20px_28px]">
                        <svg className="w-full h-auto max-w-[330px]" viewBox="0 0 330 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="330" height="59" rx="6" fill="#363636"/>
                          <path d="M28 20H159.75H291.5" stroke="#7B7B7B" strokeWidth="8" strokeLinecap="round"/>
                          <path d="M28 39H174" stroke="#FABC6C" strokeWidth="8" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-9 w-full rounded-[7px] bg-[#373737] p-2">
                        <div className="flex flex-col justify-center items-center gap-1 w-full sm:w-[79px] p-2 rounded-[8px]">
                          <div className="text-[#1D8FFF] text-center font-['Urbanist'] text-base font-medium">864</div>
                          <div className="text-white text-center font-['Urbanist'] text-sm font-normal">Words</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-full sm:w-[79px] p-2 rounded-[8px]">
                          <div className="text-[#1D8FFF] text-center font-['Urbanist'] text-base font-medium">5m</div>
                          <div className="text-white text-center font-['Urbanist'] text-sm font-normal">Read Time</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-full sm:w-[79px] p-2 rounded-[8px]">
                          <div className="text-[#1D8FFF] text-center font-['Urbanist'] text-base font-medium">84/100</div>
                          <div className="text-white text-center font-['Urbanist'] text-sm font-normal">SEO Score</div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2.5 p-3.5 w-full rounded-[7px] bg-[#1D8FFF]">
                        <div className="text-white text-center font-['Urbanist'] text-sm font-medium">Start Writing</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3.5 w-full">
                    <div className="text-[#BF0] font-['Urbanist'] text-base font-semibold">01</div>
                    <div className="text-white font-['Urbanist'] text-xl font-semibold">SEO Blog Writing</div>
                    <div className="text-[#B2BAC1] font-['Urbanist'] text-base font-normal">
                      Keyword-optimized articles that rank and convert readers into customers.
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 2 - Content Strategy */}
              <article className="flex w-full  lg:w-[672px] gap-2.5 px-4 md:px-6 lg:px-[29px] py-4 md:py-5 lg:py-6 bg-white rounded-[18px] flex-col items-start">
                <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-9 w-full">
                  <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[21px] w-full">
                    <div className="flex flex-col items-start gap-2.5 p-2 md:p-3 lg:p-[5px_9px_5px_126px] w-full rounded-[349px] border border-[rgba(0,0,0,0.06)] bg-[rgba(196,196,196,0.15)]">
                      <div className="flex items-center justify-between w-full">
                        <div className="text-[#1D8FFF] text-center font-['Urbanist'] text-lg md:text-xl font-medium">Goals</div>
                        <div className="flex justify-center items-center gap-2.5 px-4 py-2.5 rounded-[349px] bg-[#1D8FFF]">
                          <div className="text-white text-center font-['Urbanist'] text-lg md:text-xl font-medium">Calendar</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-[17px]">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
                        <div key={day} className="flex flex-col items-center gap-1.5 w-16 md:w-20 lg:w-[105px] p-2 md:p-3 lg:p-[7px_13px] rounded-[9px] bg-[#E8F4FF]">
                          <div className="text-[#132A40] text-center font-['Urbanist'] text-sm md:text-base font-normal">{day}</div>
                          <div className="text-black text-center font-['Urbanist'] text-sm font-semibold">{15 + index}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 p-1.5 rounded-[24px] border border-[#1D8FFF] bg-[rgba(29,143,255,0.11)]">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1577_9134)">
                          <path d="M13.75 6.92467V7.49967C13.7492 8.84744 13.3128 10.1588 12.5058 11.2383C11.6989 12.3178 10.5646 13.1075 9.27210 13.4896C7.97964 13.8717 6.59829 13.8259 5.33404 13.3588C4.06980 12.8917 2.99041 12.0285 2.25685 10.8978C1.52329 9.76719 1.17487 8.42971 1.26355 7.08487C1.35223 5.74002 1.87325 4.45988 2.74892 3.43534C3.62460 2.41081 4.80799 1.69679 6.12262 1.39976C7.43725 1.10274 8.81267 1.23863 10.0438 1.78717M13.75 2.49967L7.5 8.75592L5.625 6.88092" stroke="#43A2FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1577_9134">
                            <rect width="15" height="15" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="text-[#1464B3] text-center font-['Urbanist'] text-xs font-normal">3 task completed this week</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3.5 w-full">
                    <div className="text-[#BF0] font-['Urbanist'] text-base font-semibold">02</div>
                    <div className="text-[#071F36] font-['Urbanist'] text-xl font-semibold">Content Strategy</div>
                    <div className="text-[#7B7B7B] font-['Urbanist'] text-base font-normal">
                      Data-driven content plans aligned with your business goals and audience needs.
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Second Row - Cards 3, 4, and 5 */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[22px] w-full justify-center">
              {/* Card 3 - Email Marketing */}
              <article className="flex h-auto md:h-[383px] w-full md:w-[359px] justify-center gap-8 md:gap-[70px] px-4 md:px-[15px] py-6 md:py-[26px] bg-[rgba(123,123,123,0.18)] rounded-[18px] border border-[#7B7B7B] flex-col items-start">
                <div className="flex flex-col items-center gap-[17px] w-full">
                  <div className="flex items-start justify-between p-2 md:p-[7px_12px] w-full rounded-[5px] border-l-[3px] border-[#BF0]">
                    <div className="flex flex-col justify-end items-start gap-1.5">
                      <div className="text-white font-['Urbanist'] text-sm font-medium">Subscribers</div>
                      <div className="text-[#D2D2D2] font-['Urbanist'] text-xs font-normal">Growing Daily</div>
                    </div>
                    <div className="flex flex-col justify-end items-start gap-1.5">
                      <div className="text-white font-['Urbanist'] text-sm font-medium">12,456</div>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3359 14.875V13.4583C11.3359 12.7069 11.0374 11.9862 10.5061 11.4549C9.97472 10.9235 9.25405 10.625 8.50260 10.625H3.54427C2.79282 10.625 2.07215 10.9235 1.54080 11.4549C1.00945 11.9862 0.710938 12.7069 0.710938 13.4583V14.875M12.0443 7.79167L13.4609 9.20833L16.2943 6.375M8.85677 4.95833C8.85677 6.52314 7.58824 7.79167 6.02344 7.79167C4.45863 7.79167 3.19010 6.52314 3.19010 4.95833C3.19010 3.39353 4.45863 2.125 6.02344 2.125C7.58824 2.125 8.85677 3.39353 8.85677 4.95833Z" stroke="#D8FD5F" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <svg className="w-full max-w-[37px] h-[26px]" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.5V13V16.5" stroke="#12579C" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M10.5 4V22" stroke="#1464B3" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M18.5 8V13V18" stroke="#1D8FFF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M26.5 4V22" stroke="#7CBEFF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M34.5 8.5V17.5" stroke="#A2D1FF" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  <div className="flex justify-center items-center gap-2.5 p-2.5 w-full rounded-[7px] bg-[#1D8FFF]">
                    <div className="text-white text-center font-['Urbanist'] text-sm font-medium">Launch Campaign</div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3.5 w-full">
                  <div className="text-[#BF0] font-['Urbanist'] text-base font-semibold">03</div>
                  <div className="text-white font-['Urbanist'] text-xl font-semibold">Email Marketing</div>
                  <div className="text-[#B2BAC1] font-['Urbanist'] text-base font-normal">
                    Engaging email sequences that nurture leads and drive repeat business.
                  </div>
                </div>
              </article>

              {/* Card 4 - Video Content */}
              <article className="flex h-auto md:h-[383px] w-full md:w-[359px] justify-center gap-8 md:gap-[70px] px-4 md:px-[15px] py-6 md:py-[26px] bg-[rgba(123,123,123,0.18)] rounded-[18px] border border-[#7B7B7B] flex-col items-start">
                <img className="w-full h-32 md:h-[152px] rounded-[13px] object-cover" src="https://api.builder.io/api/v1/image/assets/TEMP/bc2622683cfea266a2f728265e00fc9786998ea1?width=658" alt="Video Content Preview" />
                <div className="flex flex-col items-start gap-3.5 w-full">
                  <div className="text-[#BF0] font-['Urbanist'] text-base font-semibold">04</div>
                  <div className="text-white font-['Urbanist'] text-xl font-semibold">Video Content</div>
                  <div className="text-[#B2BAC1] font-['Urbanist'] text-base font-normal">
                    Compelling video scripts and concepts that capture attention and drive action.
                  </div>
                </div>
              </article>

              {/* Card 5 - Content Analytics */}
              <article className="flex h-auto md:h-[383px] w-full md:w-[359px] justify-center gap-8 md:gap-[70px] px-4 md:px-[15px] py-6 md:py-[26px] bg-[rgba(123,123,123,0.18)] rounded-[18px] border border-[#7B7B7B] flex-col items-start">
                <div className="flex flex-col items-start gap-[27px] w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#E8F4FF] font-['Urbanist'] text-sm font-medium">Weekly Performance</div>
                    <div className="flex justify-center items-center gap-2 p-2 rounded-[27px] bg-white">
                      <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 4.63574L10.0909 11.5448L6.45455 7.90847L1 13.363" stroke="#00B45C" strokeWidth="1.45455" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6406 4.63574H17.0043V8.99938" stroke="#00B45C" strokeWidth="1.45455" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="h-24 w-full">
                    <div className="flex items-end gap-2 w-full h-20">
                      {[69, 45, 35, 17, 51, 84, 38].map((height, index) => (
                        <div key={index} className="w-8 rounded-t-[5px] bg-[#D8FD5F]" style={{ height: `${height/2}px` }}></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-white font-['Urbanist'] text-xs font-normal mt-2">
                      <span>Mon</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3.5 w-full">
                  <div className="text-[#BF0] font-['Urbanist'] text-base font-semibold">05</div>
                  <div className="text-white font-['Urbanist'] text-xl font-semibold">Content Analytics</div>
                  <div className="text-[#B2BAC1] font-['Urbanist'] text-base font-normal">
                    Performance tracking and insights to optimize your content strategy.
                  </div>
                </div>
              </article>
            </div>
          </main>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[13px] w-full">
            <button className="flex w-full max-w-sm sm:max-w-none sm:w-auto lg:w-64 h-12 md:h-[50px] items-center justify-center lg:justify-end gap-2 md:gap-2.5 px-3 lg:px-[3px] py-0 bg-[#1D8FFF] rounded-[25px] md:rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.7px_rgba(47,152,255,0.63)] hover:bg-blue-600 transition-colors">
              <div className="text-white text-center font-['Urbanist'] text-sm md:text-base font-medium">Launch My Content Plan</div>
              <div className="inline-flex items-center gap-2.5 p-2 md:p-3 bg-[#E8F4FF] rounded-[20px] md:rounded-[25px] lg:rounded-[34px] border border-[#A2D1FF]">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66406 10H16.3307" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" stroke="#1D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            <button className="flex w-full max-w-xs sm:max-w-none sm:w-auto lg:w-[249px] h-12 md:h-[50px] items-center justify-center gap-2 md:gap-[7px] px-4 md:px-5 lg:px-[19px] py-2.5 bg-[#FAFAFA] rounded-[25px] md:rounded-[30px] lg:rounded-[33px] border border-[#D2D2D2] hover:bg-gray-100 transition-colors">
              <p className="text-[#091E42] font-['Urbanist'] text-sm md:text-base font-medium">Talk to a Content Expert</p>
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66406 10H16.3307" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 4.16699L16.3333 10.0003L10.5 15.8337" stroke="#091E42" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerContent;