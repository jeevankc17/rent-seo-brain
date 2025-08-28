import React from "react";
import AppButton from "@/utils/AppButton";

export const ProcessSection : React.FC = () =>  {
  const processCards = [
    {
      id: 1,
      icon: "/LP/ca/activity-2.svg",
      title: "Hero Section",
      subtitle: "First Impression & Value Prop",
      improvement: "+127% avg. improvement",
      improvementColor: "primary-300",
      improvementBg: "#e8f4ff21",
      improvementBorder: "primary-300",
      chart: "/LP/ca/frame-2121458145.svg",
    },
    {
      id: 2,
      icon: "/LP/ca/target-1.svg",
      title: "Features Section",
      subtitle: "Benefits & Solutions",
      improvement: "Benefits & Solutions",
      improvementColor: "#00b45c",
      improvementBg: "#00b45c14",
      improvementBorder: "#00b45c",
      chart: "/LP/ca/frame-2121458145-1.svg",
    },
    {
      id: 3,
      icon: "/LP/ca/user-check.svg",
      title: "Social Proof",
      subtitle: "Testimonials & Reviews",
      improvement: "+156% avg. improvement",
      improvementColor: "#bca1e8",
      improvementBg: "#a386d359",
      improvementBorder: "#a386d3",
      chart: "/LP/ca/frame-2121458145-2.svg",
    },
    {
      id: 4,
      icon: "/LP/ca/trending-up-6.svg",
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
    <section className="relative w-full h-auto min-h-[600px] lg:h-[1130px] ml-[-0px] mr-[-0px] bg-[#0c0c0f] overflow-hidden">
      <div className="relative w-full max-w-[1440px] h-auto lg:h-[912px] top-0 lg:top-[109px] left-[0px] mx-auto px-4 lg:px-0 py-8 lg:py-0">
        <div className="hidden lg:block absolute w-[464px] h-[403px] top-[168px] left-[976px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]" />
        <div className="hidden lg:block absolute w-[464px] h-[403px] top-[145px] left-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]" />
        <div className="hidden lg:block absolute w-[11px] h-[11px] top-[199px] left-[721px] bg-[#43a2ff] rounded-[5.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />
        <div className="hidden lg:block absolute w-[11px] h-[11px] top-[343px] left-[308px] bg-[#43a2ff] rounded-[5.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

        <div className="flex flex-col w-full max-w-[1128px] items-center gap-8 lg:gap-[50px] relative lg:absolute lg:top-0 lg:left-[156px] mx-auto">
          <header className="flex flex-col w-full max-w-[550px] items-center justify-center gap-4 lg:gap-6 relative flex-[0_0_auto]">
            <div className="w-full max-w-[190px] flex items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-500 rounded-[45px] shadow-[0px_3px_1.1px_#ffffff]">
              <img
                className="relative w-[15px] h-[15px]"
                alt="Stars icon"
                src="/LP/ca/stars-2.svg"
              />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
                Landing Page Anatomy
              </span>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch h-auto lg:h-[116px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-50 text-xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-[24px] md:leading-[36px] lg:leading-[57px]">
                High-Converting Landing Page Blueprint
              </h1>
              <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-30 text-sm md:text-base text-center tracking-[0] leading-[20px] md:leading-[23px]">
                Explore the essential sections of a high-converting landing
                page. Click on any section to reveal optimization strategies and
                best practices.
              </p>
            </div>
          </header>

          <div className="relative self-stretch w-full h-auto lg:h-[527px]">
            <div className="flex flex-col lg:inline-flex lg:flex-row items-center gap-4 lg:gap-6 relative lg:absolute lg:top-[232px] lg:left-0">
              {processCards.map((card) => (
                <article
                  key={card.id}
                  className="flex w-full max-w-[264px] items-center gap-2.5 px-3 lg:px-3.5 py-6 lg:py-[35px] relative bg-black rounded-lg overflow-hidden mb-4 lg:mb-0"
                >
                  <div className="flex flex-col w-full max-w-[229px] items-start gap-6 lg:gap-[34px] relative">
                    <div className="flex flex-col w-full max-w-[179px] items-start gap-2.5 relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#d8fd5f] rounded-[8735px]">
                          <img
                            className="relative w-6 h-6"
                            alt={`${card.title} icon`}
                            src={card.icon}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base lg:text-lg tracking-[0] leading-5 lg:leading-6">
                            {card.title}
                          </h3>
                          <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-90 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[23px]">
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
                          src={`/LP/ca/trending-up-${card.id === 1 ? "3" : card.id === 2 ? "4" : card.id === 3 ? "5" : "7"}.svg`}
                        />
                        <span
                          className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-[10px] lg:text-xs tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap"
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
              className="absolute w-[300px] lg:w-[870px] h-[70px] lg:h-[203px] top-0 left-[50%] lg:left-[143px] transform -translate-x-1/2 lg:translate-x-0"
              alt="Process flow diagram"
              src="/LP/ca/frame-2121458157.svg"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 relative flex-[0_0_auto]">
            <AppButton
              text="Get A High-converting Page"
              variant="blue"
              size="lg"
            />

            <AppButton
              text="How We Boost Conversions"
              variant="white"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};