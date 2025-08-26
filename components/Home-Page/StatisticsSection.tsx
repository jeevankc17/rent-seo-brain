import React from "react";

export const StatisticsSection: React.FC = () => {
    // Data for industry cards
    const industryCards = [
        {
            id: 1,
            title: "Home & Local Services",
            description: "Get more calls and service requests",
            icon: "/Home-Page/ca/rss.svg",
            bgColor: "bg-secondary-400",
            cardBg: "bg-secondary-200",
            textColor: "text-neutral-10",
            position: "top-20 left-48",
        },
        {
            id: 2,
            title: "Education",
            description: "Boost enrollment through targeted campaigns",
            icon: "/img/edit-2.png",
            bgColor: "bg-[#673ab7]",
            cardBg: "bg-neutral-0",
            textColor: "text-neutral-900",
            position: "top-[34px] left-[-103px]",
        },
        {
      id: 3,
      title: "Heathcare",
      description: "Attract patients searching for nearby services",
      icon: "/Home-Page/ca/activity.svg",
      bgColor: "bg-[#1d9b5e]",
      cardBg: "bg-neutral-0",
      textColor: "text-neutral-900",
      position: "top-0 left-[196px]",
      border: "border border-solid border-neutral-900",
      shadow: "shadow-[0px_4px_0px_#2a90e5]",
    },
    {
      id: 4,
      title: "Real Estate",
      description: "Generate property buyer and seller inquiries",
      icon: "/Home-Page/ca/home.svg",
      bgColor: "bg-[#1d9b5e]",
      cardBg: "bg-neutral-0",
      textColor: "text-neutral-900",
      position: "top-[198px] left-0",
      shadow: "shadow-[0px_2px_0px_#1d9b5e]",
      padding: "gap-[6.78px] px-[13.56px] py-[6.78px]",
      rounded: "rounded-[18.99px]",
    },
    {
      id: 5,
      title: "Consulting",
      description: "Reach decision-makers ready to take action",
      icon: "/Home-Page/ca/activity-1.svg",
      bgColor: "bg-[#c04350]",
      cardBg: "bg-neutral-0",
      textColor: "text-neutral-900",
      position: "top-[219px] left-[270px]",
      shadow: "shadow-[0px_5.42px_16.82px_#0083ff59]",
      padding: "gap-[6.78px] px-[13.56px] py-[6.78px]",
      rounded: "rounded-[18.99px]",
    },
  ];

  // Data for statistics cards
  const statisticsData = [
    {
      id: 1,
      number: "25+",
      label: "Industries Served",
    },
    {
      id: 2,
      number: "3+",
      label: "Years of experience",
    },
    {
      id: 3,
      number: "10+",
      label: "Industries Experts",
    },
    {
      id: 4,
      number: "50+",
      label: "Specialized Content types",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1128px] items-center justify-center gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0">
      <header className="flex flex-col w-full max-w-[565px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="w-full max-w-[212px] px-0 py-[5px] border border-solid border-primary-300 flex items-center justify-center gap-1.5 relative flex-[0_0_auto] rounded-[35px] lg:rounded-[45px]">
          <div className="flex w-full max-w-[197px] items-center gap-1.5 px-2 py-0.5 relative bg-primary-300 rounded-[35px] lg:rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/Home-Page/ca/stars-3.svg"
            />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
              We&apos;ve Got The Strategy.
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto lg:h-44 items-center gap-4 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-3xl md:text-4xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
            We Serve Businesses Across Industries
          </h1>

          <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-sm md:text-base lg:text-base text-center tracking-[0] leading-[18px] md:leading-[20px] lg:leading-[23px]">
            From local startups to global brands — our Google Ads strategies
            work across all sectors.
          </p>
        </div>
      </header>

      <main className="flex flex-col items-start gap-12 lg:gap-[78px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <article className="inline-flex items-center justify-center gap-2.5 px-6 lg:px-[29px] py-6 lg:py-8 bg-neutral-0 rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-[0px_4px_8.6px_8px_#0083ff17] relative flex-[0_0_auto] w-full lg:w-auto">
            <div className="flex flex-col w-full lg:w-[494px] items-center justify-center gap-8 lg:gap-[45px] relative">
              <div className="relative w-full lg:w-[494px] h-auto lg:h-[331px] bg-neutral-0 rounded-[15px] lg:rounded-[20px] shadow-[0px_4px_21.2px_#0083ff29] hidden lg:block">
                <div className="h-[331px] bg-neutral-0 rounded-[10px] overflow-hidden">
                  <div className="relative w-[524px] h-[298px] top-1.5 left-1.5">
                    <div className="absolute w-96 h-[244px] top-[33px] left-[47px] bg-neutral-0 rounded-[13px] overflow-hidden shadow-[0px_4px_8.9px_12px_#0083ff29]">
                      {industryCards.map((card) => (
                        <div
                          key={card.id}
                          className={`inline-flex items-center ${card.padding || "gap-[9.08px] px-[18.15px] py-[9.08px]"} absolute ${card.position} ${card.cardBg} ${card.rounded || "rounded-[25.41px]"} ${card.shadow || "shadow-[0px_7.26px_22.51px_#0083ff59]"} ${card.border || ""}`}
                        >
                          <div
                            className={`${card.bgColor} flex flex-col w-[45.38px] h-[45.38px] items-center justify-center gap-[22.69px] p-[22.69px] relative rounded-[1234.25px]`}
                          >
                            <img
                              className={`relative w-[32.12px] h-[32.12px] ${card.id === 2 ? "mt-[-8751.95px] ml-[-50696.21px]" : "mt-[-16.06px] mb-[-16.06px] ml-[-16.06px] mr-[-16.06px]"}`}
                              alt={card.title}
                              src={card.icon}
                            />
                          </div>

                          <div className="flex flex-col w-[174.25px] items-start relative">
                            <h3
                              className={`${card.textColor} relative self-stretch mt-[-1.82px] [font-family:'Urbanist',Helvetica] font-semibold text-[16.6px] tracking-[0] leading-[27.2px]`}
                            >
                              {card.title}
                            </h3>

                            <p className="relative w-[183.32px] mr-[-9.08px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-[14.5px] tracking-[0] leading-[18.2px]">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-xl lg:text-[28px] tracking-[0] leading-[20px] lg:leading-[23px]">
                    Lead Based
                  </h2>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-100 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[25px]">
                    We specialize in generating high-quality leads for
                    service-based industries.
                  </p>
                </div>

                <button className="w-full lg:w-[275px] flex h-[45px] lg:h-[50px] items-center justify-center gap-2.5 px-6 lg:px-8 py-0 relative bg-primary-300 rounded-[35px] lg:rounded-[45px] shadow-[0px_5px_14.7px_#2f98ffa1] hover:opacity-90 transition-opacity">
                  <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
                    Start Getting Qualified Lead
                  </span>
                </button>
              </div>
            </div>
          </article>

          <article className="inline-flex items-center justify-center gap-2.5 px-6 lg:px-[29px] py-6 lg:py-8 bg-neutral-0 rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-[0px_4px_8.6px_8px_#0083ff17] relative flex-[0_0_auto] w-full lg:w-auto">
            <div className="flex flex-col w-full lg:w-[494px] items-center justify-center gap-8 lg:gap-[45px] relative">
              <img
                className="relative w-full lg:w-[550.2px] h-auto lg:h-[387.2px] lg:mt-[-24.10px] lg:ml-[-28.10px] lg:mr-[-28.10px] hidden lg:block"
                alt="Sales dashboard visualization"
                src="/Home-Page/ca/card-2.svg"
              />

              <div className="flex flex-col items-start gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-xl lg:text-[28px] tracking-[0] leading-[20px] lg:leading-[23px]">
                    Sales Based
                  </h2>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-100 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[25px]">
                    For product-driven businesses, we focus on driving sales
                    through conversion-optimized campaigns.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 relative flex-[0_0_auto] w-full">
                  <button className="w-full sm:w-[200px] lg:w-[217px] flex h-[45px] lg:h-[50px] items-center justify-center gap-2.5 px-6 lg:px-8 py-0 relative bg-primary-300 rounded-[35px] lg:rounded-[45px] shadow-[0px_5px_14.7px_#2f98ffa1] hover:opacity-90 transition-opacity">
                    <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
                      Boost My Sales Now
                    </span>
                  </button>

                  <button className="all-[unset] box-border flex w-full sm:w-[200px] lg:w-[220px] h-[45px] lg:h-[50px] items-center justify-center gap-[7px] px-4 lg:px-[19px] py-2.5 relative bg-grey-50 rounded-[25px] lg:rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 transition-colors">
                    <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-sm lg:text-base tracking-[0] leading-4 whitespace-nowrap">
                      Know More
                    </span>

                    <img
                      className="relative w-4 h-4 lg:w-5 lg:h-5"
                      alt="Arrow right"
                      src="/Home-Page/ca/arrow-right-2.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
          {statisticsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col w-full sm:w-[200px] lg:w-[253px] items-center justify-center gap-4 lg:gap-[21px] px-6 lg:px-[34px] py-4 lg:py-[22px] relative bg-[#e8f4ff2e] rounded-[10px] lg:rounded-[13px] border border-solid border-primary-50"
            >
              <div className="font-semibold text-primary-300 text-xl lg:text-2xl text-center leading-[22px] lg:leading-[26px] relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                {stat.number}
              </div>

              <div className="relative w-full max-w-[125px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-base lg:text-lg text-center tracking-[0] leading-[20px] lg:leading-[26px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};


