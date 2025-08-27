import React from "react";

export const ContentServicesSection: React.FC = () => {
  // Data for calendar days
  const calendarDays = [
    { day: "Mon", date: "15" },
    { day: "Tue", date: "16" },
    { day: "Wed", date: "17" },
    { day: "Thu", date: "18" },
    { day: "Fri", date: "19" },
  ];

  // Data for content metrics
  const contentMetrics = [
    { label: "Words", value: "864" },
    { label: "Read Time", value: "5m" },
    { label: "SEO Score", value: "84/100" },
  ];

  // Data for weekly performance chart
  const chartBars = [
    { height: "h-[69px]" },
    { height: "h-[45px]" },
    { height: "h-[35px]" },
    { height: "h-[17px]" },
    { height: "h-[51px]" },
    { height: "h-[84px]" },
    { height: "h-[38px]" },
  ];

  // Data for service cards
  const services = [
    {
      id: "01",
      title: "SEO Blog Writing",
      description:
        "Keyword-optimized articles that rank and convert readers into customers.",
      color: "#bbff00",
    },
    {
      id: "02",
      title: "Content Strategy",
      description:
        "Data-driven content plans aligned with your business goals and audience needs.",
      color: "#bbff00",
    },
    {
      id: "03",
      title: "Email Marketing",
      description:
        "Engaging email sequences that nurture leads and drive repeat business.",
      color: "#bbff00",
    },
    {
      id: "04",
      title: "Video Content",
      description:
        "Compelling video scripts and concepts that capture attention and drive action.",
      color: "#bbff00",
    },
    {
      id: "05",
      title: "Content Analytics",
      description:
        "Performance tracking and insights to optimize your content strategy.",
      color: "#bbff00",
    },
  ];

  return (
    <section className="min-h-screen bg-neutral-0 overflow-hidden relative w-full">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-4">
        {/* Background blur elements */}
        <div className="hidden lg:block absolute w-[464px] h-[403px] top-[191px] right-0 bg-primary-100 opacity-60 rounded-full blur-[365px]" />
        <div className="hidden lg:block absolute w-[464px] h-[403px] top-[168px] left-0 bg-primary-100 opacity-60 rounded-full blur-[365px]" />
        <div className="hidden lg:block absolute w-[168px] h-[156px] top-[252px] left-1/2 transform -translate-x-1/2 bg-neutral-900 rounded-full blur-[141px]" />

        <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative z-10 py-8 md:py-12 lg:py-16">
          {/* Header section */}
          <header className="w-full max-w-sm md:max-w-lg lg:max-w-[550px] flex flex-col items-center gap-4 md:gap-6">
            <div className="flex items-center justify-center gap-1.5 px-2.5 py-[5px] bg-primary-100 rounded-[45px] shadow-[0px_3px_1.1px_rgba(29,143,255,0.3)]">
              <img
                className="w-3 h-3 md:w-[15px] md:h-[15px]"
                alt="Stars"
                src="/CMS/ca/stars.svg"
              />
              <div className="font-medium text-neutral-900 text-xs md:text-sm tracking-[0] leading-[23px] text-center [font-family:'Urbanist',Helvetica]">
                Our Content Marketing Services
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <h1 className="text-neutral-900 text-xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-tight md:leading-[40px] lg:leading-[57px] font-bold [font-family:'Urbanist',Helvetica]">
                Everything You Need to Power Your Content.
              </h1>
              <p className="text-neutral-400 text-sm md:text-base text-center tracking-[0] leading-relaxed md:leading-[23px] font-normal [font-family:'Urbanist',Helvetica]">
                From strategy to execution, we handle every aspect of your
                content marketing to drive measurable results for your business.
              </p>
            </div>
          </header>

          {/* Services grid */}
          <main className="flex flex-col items-center gap-8 md:gap-10 lg:gap-11 w-full max-w-[1125px]">
            {/* First row - SEO Blog Writing and Content Strategy */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 w-full">
              {/* SEO Blog Writing Card */}
              <article className="flex w-full lg:w-[431px] gap-2.5 px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-[18px] bg-white rounded-[18px] border border-grey-500 flex-col items-start">
                <div className="flex flex-col items-start gap-[15px] w-full">
                  <div className="flex gap-2.5 p-3.5 w-full bg-neutral-100 rounded-[14px] shadow-[0px_4px_49.3px_rgba(67,162,255,0.15)] flex-col items-start">
                    <div className="flex flex-col items-start gap-[17px] w-full">
                      <img
                        className="w-full h-auto"
                        alt="Content writing interface"
                        src="/CMS/ca/frame-2121458251.svg"
                      />

                      <div className="flex items-center justify-center gap-[35px] w-full bg-neutral-200 rounded-[7px] py-2">
                        {contentMetrics.map((metric, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-[5px] p-2 rounded-lg"
                          >
                            <div className="font-medium text-primary-300 text-base text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                              {metric.value}
                            </div>
                            <div className="text-neutral-900 text-sm text-center [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="flex items-center justify-center gap-2.5 px-2.5 py-3.5 w-full bg-primary-300 rounded-[7px] hover:bg-primary-200 transition-colors">
                        <div className="font-medium text-neutral-900 text-sm text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                          Start Writing
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3.5 w-full">
                    <div className="font-semibold text-[#bbff00] text-base [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                      {services[0].id}
                    </div>
                    <h2 className="font-semibold text-neutral-900 text-xl [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                      {services[0].title}
                    </h2>
                    <p className="text-neutral-400 text-base [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                      {services[0].description}
                    </p>
                  </div>
                </div>
              </article>

              {/* Content Strategy Card */}
              <article className="flex w-full lg:w-[672px] h-auto lg:h-[383px] gap-2.5 px-4 md:px-6 lg:px-[29px] py-4 md:py-5 lg:py-6 bg-white rounded-[18px] flex-col items-start">
                <div className="flex flex-col items-start gap-[39px] w-full">
                  <div className="flex flex-col items-center gap-[21px] w-full">
                    <div className="flex flex-col items-start gap-2.5 pl-[126px] pr-[9px] py-[5px] w-full bg-neutral-600 bg-opacity-15 rounded-[349px] border border-neutral-600 border-opacity-10">
                      <div className="flex items-center gap-[181px] w-full">
                        <div className="font-medium text-primary-300 text-xl text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                          Goals
                        </div>
                        <div className="flex items-center justify-center gap-2.5 p-2.5 bg-primary-300 rounded-[349px]">
                          <div className="font-medium text-neutral-0 text-xl text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                            Calendar
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-[17px]">
                      {calendarDays.map((day, index) => (
                        <div
                          key={index}
                          className="flex flex-col w-[105px] items-center gap-1.5 px-[13px] py-[7px] bg-primary-500 rounded-[9px]"
                        >
                          <div className="text-neutral-300 text-base text-center [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                            {day.day}
                          </div>
                          <div className="font-semibold text-neutral-0 text-sm text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                            {day.date}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-3 px-[11px] py-1.5 bg-primary-100 bg-opacity-10 rounded-3xl border border-primary-300">
                      <img
                        className="w-[15px] h-[15px]"
                        alt="Check circle"
                        src="/CMS/ca/check-circle.svg"
                      />
                      <p className="font-normal text-primary-200 text-xs text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                        3 task completed this week
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col w-[329px] items-start gap-3.5">
                    <div className="font-semibold text-[#bbff00] text-base [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                      {services[1].id}
                    </div>
                    <h2 className="font-semibold text-neutral-0 text-xl [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                      {services[1].title}
                    </h2>
                    <p className="text-grey-500 text-base [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                      {services[1].description}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Second row - Email Marketing, Video Content, Content Analytics */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[22px] w-full justify-center">
              {/* Email Marketing Card */}
              <article className="flex h-auto md:h-[383px] w-full md:w-[359px] justify-center gap-8 md:gap-[70px] px-4 md:px-[15px] py-6 md:py-[26px] bg-white rounded-[18px] border border-grey-500 flex-col items-start">
                <div className="flex flex-col w-full items-center gap-[17px]">
                  <div className="flex items-start gap-[195px] px-3 py-[7px] w-full rounded-[5px] border-l-[3px] border-[#bbff00]">
                    <div className="flex flex-col w-[83px] items-start justify-end gap-[7px]">
                      <div className="text-neutral-900 text-sm [font-family:'Urbanist',Helvetica] font-medium tracking-[0] leading-[normal]">
                        Subscribers
                      </div>
                      <div className="text-grey-200 text-xs [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal] whitespace-nowrap">
                        Growing Daily
                      </div>
                    </div>
                    <div className="flex flex-col w-[38px] items-start justify-end gap-[7px]">
                      <div className="text-neutral-900 text-sm [font-family:'Urbanist',Helvetica] font-medium tracking-[0] leading-[normal]">
                        12,456
                      </div>
                      <img
                        className="w-[17px] h-[17px]"
                        alt="User check"
                        src="/CMS/ca/user-check.svg"
                      />
                    </div>
                  </div>

                  <img
                    className="h-[26px] w-full"
                    alt="Email analytics chart"
                    src="/CMS/ca/frame-2121458271.svg"
                  />

                  <button className="flex items-center justify-center gap-2.5 p-2.5 w-full bg-primary-100 rounded-[7px] hover:bg-primary-200 transition-colors">
                    <div className="font-medium text-neutral-900 text-sm text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                      Launch Campaign
                    </div>
                  </button>
                </div>

                <div className="flex flex-col w-full items-start gap-6">
                  <div className="flex flex-col items-start gap-3.5 w-full">
                    <div className="font-semibold text-[#bbff00] text-base [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                      {services[2].id}
                    </div>
                    <h2 className="font-semibold text-neutral-900 text-xl [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                      {services[2].title}
                    </h2>
                    <p className="text-neutral-400 text-base [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                      {services[2].description}
                    </p>
                  </div>
                </div>
              </article>

              {/* Video Content Card */}
              <article className="flex h-auto md:h-[383px] w-full md:w-[359px] justify-center gap-8 md:gap-[70px] px-4 md:px-[15px] py-6 md:py-[26px] bg-white rounded-[18px] border border-grey-500 flex-col items-start">
                <div className="w-full h-32 md:h-[152px] rounded-[13px] bg-[url(/CMS/ca/frame-2121457924.svg)] bg-cover bg-center" />

                <div className="flex flex-col items-start gap-3.5 w-full">
                  <div className="font-semibold text-[#bbff00] text-base [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                    {services[3].id}
                  </div>
                  <h2 className="font-semibold text-neutral-900 text-xl [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                    {services[3].title}
                  </h2>
                  <p className="text-neutral-400 text-base [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                    {services[3].description}
                  </p>
                </div>
              </article>

              {/* Content Analytics Card */}
              <article className="flex h-auto md:h-[383px] w-full md:w-[359px] justify-center gap-8 md:gap-[70px] px-4 md:px-[15px] py-6 md:py-[26px] bg-white rounded-[18px] border border-grey-500 flex-col items-start">
                <div className="flex flex-col w-full items-start gap-[27px]">
                  <div className="flex items-center justify-between w-full">
                    <div className="font-medium text-neutral-900 text-sm [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                      Weekly Performance
                    </div>
                    <div className="inline-flex items-center justify-center gap-[7.27px] p-[7.27px] bg-neutral-900 rounded-[26.91px]">
                      <img
                        className="w-[17.45px] h-[17.45px]"
                        alt="Trending up"
                        src="/CMS/ca/trending-up.svg"
                      />
                    </div>
                  </div>

                  <div className="w-full h-[101px] relative">
                    <div className="flex w-full h-[84px] items-end gap-2.5 absolute top-0 left-0">
                      {chartBars.map((bar, index) => (
                        <div
                          key={index}
                          className={`${bar.height} w-[38px] bg-[#d8fd5f] rounded-[5px_5px_0px_0px]`}
                        />
                      ))}
                    </div>
                    <div className="absolute top-[86px] left-[5px] text-neutral-900 text-xs whitespace-nowrap [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                      Mon
                    </div>
                    <div className="absolute top-[86px] right-[5px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-900 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                      Sun
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3.5 w-full">
                  <div className="font-semibold text-[#bbff00] text-base [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal]">
                    {services[4].id}
                  </div>
                  <h2 className="font-semibold text-neutral-900 text-xl [font-family:'Urbanist',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                    {services[4].title}
                  </h2>
                  <p className="text-neutral-400 text-base [font-family:'Urbanist',Helvetica] font-normal tracking-[0] leading-[normal]">
                    {services[4].description}
                  </p>
                </div>
              </article>
            </div>
          </main>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[13px] w-full">
            <button className="flex w-full max-w-sm sm:max-w-none sm:w-auto lg:w-64 h-12 md:h-[50px] items-center justify-center lg:justify-end gap-2 md:gap-2.5 px-3 lg:px-[3px] py-0 bg-primary-300 rounded-[25px] md:rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.7px_rgba(46,151,255,0.6)] hover:bg-primary-200 transition-colors">
              <div className="font-medium text-neutral-0 text-sm md:text-base text-center [font-family:'Urbanist',Helvetica] tracking-[0] leading-[23px]">
                Launch My Content Plan
              </div>
              <div className="inline-flex items-center gap-2.5 p-2 md:p-3 bg-primary-500 rounded-[20px] md:rounded-[25px] lg:rounded-[34px] border border-primary-400">
                <img
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt="Arrow right"
                  src="/CMS/ca/arrow-right.svg"
                />
              </div>
            </button>

            <button className="flex w-full max-w-xs sm:max-w-none sm:w-auto lg:w-[249px] h-12 md:h-[50px] items-center justify-center gap-2 md:gap-[7px] px-4 md:px-5 lg:px-[19px] py-2.5 bg-grey-50 rounded-[25px] md:rounded-[30px] lg:rounded-[33px] border border-grey-200 hover:bg-grey-75 transition-colors">
              <p className="font-medium text-neutral-0 text-sm md:text-base [font-family:'Urbanist',Helvetica] tracking-[0] leading-4">
                Talk To A Content Expert
              </p>
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Arrow right"
                src="/CMS/ca/arrow-right-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
