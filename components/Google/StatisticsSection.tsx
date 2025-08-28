import React from "react";
import AppButton from "@/utils/AppButton";

export const StatisticsSection: React.FC = () => {
    // Data for industry cards
    const industryCards = [
        {
            id: 1,
            title: "Home & Local Services",
            description: "Get more calls and service requests",
            icon: "/Google/ca/rss.svg",
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
      icon: "/Google/ca/activity.svg",
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
      icon: "/Google/ca/home.svg",
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
      icon: "/Google/ca/activity-1.svg",
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
    <section className="hidden lg:flex flex-col w-full max-w-[1128px] items-center justify-center gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0">
      <header className="flex flex-col w-full max-w-[565px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="w-full max-w-[212px] px-0 py-[5px] border border-solid border-primary-300 flex items-center justify-center gap-1.5 relative flex-[0_0_auto] rounded-[45px]">
          <div className="flex w-full max-w-[197px] items-center gap-1.5 px-2 py-0.5 relative bg-primary-300 rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/Google/ca/stars-3.svg"
            />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
              We&apos;ve Got The Strategy.
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto lg:h-44 items-center gap-4 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-2xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]">
            We Serve Businesses Across Industries
          </h1>

          <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
            From local startups to global brands — our Google Ads strategies
            work across all sectors.
          </p>
        </div>
      </header>

      <main className="flex flex-col items-start gap-8 lg:gap-[78px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <article className="inline-flex items-center justify-center gap-2.5 px-[29px] py-8 bg-neutral-0 rounded-[14px] overflow-hidden shadow-[0px_4px_8.6px_8px_#0083ff17] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[494px] items-center justify-center gap-[45px] relative">
              <div className="relative w-full max-w-[494px] h-auto lg:h-[331px] bg-neutral-0 rounded-[20px] shadow-[0px_4px_21.2px_#0083ff29] hidden lg:block">
                <div className="h-auto lg:h-[331px] bg-neutral-0 rounded-[10px] overflow-hidden">
                  <div className="relative w-full max-w-[524px] h-auto lg:h-[298px] lg:top-1.5 lg:left-1.5">
                    <div className="relative lg:absolute w-full lg:w-96 h-auto lg:h-[244px] lg:top-[33px] lg:left-[47px] bg-neutral-0 rounded-[13px] overflow-hidden shadow-[0px_4px_8.9px_12px_#0083ff29]">
                      {industryCards.map((card) => (
                        <div
                          key={card.id}
                          className={`inline-flex items-center ${card.padding || "gap-[9.08px] px-[18.15px] py-[9.08px]"} relative lg:absolute ${card.position} ${card.cardBg} ${card.rounded || "rounded-[25.41px]"} ${card.shadow || "shadow-[0px_7.26px_22.51px_#0083ff59]"} ${card.border || ""} mb-2 lg:mb-0`}
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
                              className={`${card.textColor} relative self-stretch mt-[-1.82px] [font-family:'Urbanist',Helvetica] font-semibold text-sm lg:text-[16.6px] tracking-[0] leading-[20px] lg:leading-[27.2px]`}
                            >
                              {card.title}
                            </h3>

                            <p className="relative w-full max-w-[183.32px] lg:mr-[-9.08px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-xs lg:text-[14.5px] tracking-[0] leading-[16px] lg:leading-[18.2px]">
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
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-xl lg:text-[28px] tracking-[0] leading-[24px] lg:leading-[23px]">
                    Lead Based
                  </h2>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-100 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[25px]">
                    We specialize in generating high-quality leads for
                    service-based industries.
                  </p>
                </div>

                <button className="w-full lg:w-[275px] flex h-[50px] items-center justify-center gap-2.5 px-8 py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_5px_14.7px_#2f98ffa1] hover:opacity-90 transition-opacity">
                  <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
                    Start Getting Qualified Lead
                  </span>
                </button>
              </div>
            </div>
          </article>

          <article className="inline-flex items-center justify-center gap-2.5 px-[29px] py-8 bg-neutral-0 rounded-[14px] overflow-hidden shadow-[0px_4px_8.6px_8px_#0083ff17] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[494px] items-center justify-center gap-[45px] relative">
              <img
                className="relative w-full max-w-[550.2px] h-auto lg:h-[387.2px] lg:mt-[-24.10px] lg:ml-[-28.10px] lg:mr-[-28.10px] hidden lg:block"
                alt="Sales dashboard visualization"
                src="/Google/ca/card-2.svg"
              />

              <div className="flex flex-col items-start gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-xl lg:text-[28px] tracking-[0] leading-[24px] lg:leading-[23px]">
                    Sales Based
                  </h2>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-100 text-base lg:text-lg tracking-[0] leading-[20px] lg:leading-[25px]">
                    For product-driven businesses, we focus on driving sales
                    through conversion-optimized campaigns.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 relative flex-[0_0_auto] w-full">
                  <AppButton
                    text="Boost My Sales Now"
                    variant="blue"
                    size="lg"
                  />

                  <AppButton
                    text="Know More"
                    variant="white"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 lg:gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
          {statisticsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col w-full max-w-[253px] items-center justify-center gap-[21px] px-4 lg:px-[34px] py-4 lg:py-[22px] relative bg-[#e8f4ff2e] rounded-[13px] border border-solid border-primary-50 mx-auto"
            >
              <div className="font-semibold text-primary-300 text-xl lg:text-2xl text-center leading-[24px] lg:leading-[26px] relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
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