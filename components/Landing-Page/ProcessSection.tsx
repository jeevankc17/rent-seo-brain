import React from "react";

export const ProcessSection : React.FC = () =>  {
  const processCards = [
    {
      id: 1,
      icon: "/lp/ca/activity-2.svg",
      title: "Hero Section",
      subtitle: "First Impression & Value Prop",
      improvement: "+127% avg. improvement",
      improvementColor: "primary-300",
      improvementBg: "#e8f4ff21",
      improvementBorder: "primary-300",
      chart: "/lp/ca/frame-2121458145.svg",
    },
    {
      id: 2,
      icon: "/lp/ca/target-1.svg",
      title: "Features Section",
      subtitle: "Benefits & Solutions",
      improvement: "Benefits & Solutions",
      improvementColor: "#00b45c",
      improvementBg: "#00b45c14",
      improvementBorder: "#00b45c",
      chart: "/lp/ca/frame-2121458145-1.svg",
    },
    {
      id: 3,
      icon: "/lp/ca/user-check.svg",
      title: "Social Proof",
      subtitle: "Testimonials & Reviews",
      improvement: "+156% avg. improvement",
      improvementColor: "#bca1e8",
      improvementBg: "#a386d359",
      improvementBorder: "#a386d3",
      chart: "/lp/ca/frame-2121458145-2.svg",
    },
    {
      id: 4,
      icon: "/lp/ca/trending-up-6.svg",
      title: "Call-to-Action",
      subtitle: "Conversion & Sign-up",
      improvement: "+203% avg. improvement",
      improvementColor: "#f78c01",
      improvementBg: "#ff980042",
      improvementBorder: "#f78c01",
      isSpecial: true,
    },
  ];

  return (
    <section className="relative w-full h-[1130px] ml-[-0px] mr-[-0px] bg-[#0c0c0f] overflow-hidden">
      <div className="relative w-[1440px] h-[912px] top-[109px] left-[0px]">
        <div className="absolute w-[464px] h-[403px] top-[168px] left-[976px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]" />
        <div className="absolute w-[464px] h-[403px] top-[145px] left-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]" />
        <div className="absolute w-[11px] h-[11px] top-[199px] left-[721px] bg-[#43a2ff] rounded-[5.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />
        <div className="absolute w-[11px] h-[11px] top-[343px] left-[308px] bg-[#43a2ff] rounded-[5.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

        <div className="flex flex-col w-[1128px] items-center gap-[50px] absolute top-0 left-[156px]">
          <header className="flex flex-col w-[550px] items-center justify-center gap-6 relative flex-[0_0_auto]">
            <div className="w-[190px] flex items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-500 rounded-[45px] shadow-[0px_3px_1.1px_#ffffff]">
              <img
                className="relative w-[15px] h-[15px]"
                alt="Stars icon"
                src="/lp/ca/stars-2.svg"
              />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                Landing Page Anatomy
              </span>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch h-[116px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-50 text-[50px] text-center tracking-[0] leading-[57px]">
                High-Converting Landing Page Blueprint
              </h1>
              <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-30 text-base text-center tracking-[0] leading-[23px]">
                Explore the essential sections of a high-converting landing
                page. Click on any section to reveal optimization strategies and
                best practices.
              </p>
            </div>
          </header>

          <div className="relative self-stretch w-full h-[527px]">
            <div className="inline-flex items-center gap-6 absolute top-[232px] left-0">
              {processCards.map((card) => (
                <article
                  key={card.id}
                  className="flex w-[264px] items-center gap-2.5 px-3.5 py-[35px] relative bg-black rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col w-[229px] items-start gap-[34px] relative">
                    <div className="flex flex-col w-[179px] items-start gap-2.5 relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#d8fd5f] rounded-[8735px]">
                          <img
                            className="relative w-6 h-6"
                            alt={`${card.title} icon`}
                            src={card.icon}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-lg tracking-[0] leading-6">
                            {card.title}
                          </h3>
                          <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-90 text-sm tracking-[0] leading-[23px]">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex items-center ${card.id === 3 ? "justify-center" : card.id === 4 ? "justify-center" : "justify-center"} gap-[7px] px-2 py-[5px] relative ${card.id === 1 ? "self-stretch w-full" : card.id === 2 ? "w-[147px]" : "self-stretch w-full"} flex-[0_0_auto] rounded-[4356px] border border-solid`}
                        style={{
                          backgroundColor: card.improvementBg,
                          borderColor: card.improvementBorder,
                          color: card.improvementColor,
                        }}
                      >
                        <img
                          className="relative w-4 h-4"
                          alt="Trending up icon"
                          src={`/lp/ca/trending-up-${card.id === 1 ? "3" : card.id === 2 ? "4" : card.id === 3 ? "5" : "7"}.svg`}
                        />
                        <span
                          className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-xs tracking-[0] leading-[23px] whitespace-nowrap"
                          style={{ color: card.improvementColor }}
                        >
                          {card.improvement}
                        </span>
                      </div>
                    </div>

                    {card.isSpecial ? (
                      <div className="flex flex-col items-center justify-center gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-[175px] h-[9px] bg-primary-300 relative rounded-sm" />
                        <div className="w-[134px] h-[23px] bg-primary-50 relative rounded-sm" />
                      </div>
                    ) : (
                      <img
                        className={`relative self-stretch w-full flex-[0_0_auto] ${card.id === 1 ? "ml-[-2.00px]" : card.id === 3 ? "mb-[-2.00px] ml-[-2.00px]" : ""}`}
                        alt={`${card.title} chart`}
                        src={card.chart}
                      />
                    )}
                  </div>

                  <div className="absolute w-[221px] h-[177px] top-[88px] left-[21px]">
                    <div className="relative h-[177px]">
                      <div className="absolute w-[204px] h-[177px] top-0 left-[17px] bg-[#1d8fff] rounded-[102px/88.65px] blur-[160.85px]" />
                      <div className="absolute w-[204px] h-[177px] top-0 left-0 bg-[#bbff003b] rounded-[102px/88.65px] blur-[160.85px]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <img
              className="absolute w-[870px] h-[203px] top-0 left-[143px]"
              alt="Process flow diagram"
              src="/lp/ca/frame-2121458157.svg"
            />
          </div>

          <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
            <button className="w-[278px] flex h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] cursor-pointer">
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
                Get A High-converting Page
              </span>
              <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
                <img
                  className="relative w-5 h-5"
                  alt="Arrow right icon"
                  src="/lp/ca/arrow-right-3.svg"
                />
              </div>
            </button>

            <button className="all-[unset] box-border flex w-[264px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 cursor-pointer">
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
                How We Boost Conversions
              </span>
              <img
                className="relative w-5 h-5"
                alt="Arrow right icon"
                src="/lp/ca/arrow-right-4.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};