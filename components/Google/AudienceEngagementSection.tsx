import React from "react";

export const AudienceEngagementSection: React.FC = () => {
    const features: string[] = [
        "Appear on top of search results",
        "Pay only when someone clicks",
        "Target specific audiences with precision",
        "Boost brand visibility across Google's entire network",
    ];

    const avatars: { url: string; size: string; border: boolean }[] = [
        {
            url: "/Google/ca/avatar@2x.png",
            size: "w-[33.23px] h-[33.23px]",
            border: false,
        },
        {
            url: "/Google/ca/avatar-1@2x.png",
            size: "w-[36.43px] h-[36.43px]",
            border: true,
        },
        {
            url: "/Google/ca/avatar-2@2x.png",
            size: "w-[36.43px] h-[36.43px]",
            border: true,
        },
        {
            url: "/Google/ca/avatar-3@2x.png",
            size: "w-[33.23px] h-[33.23px]",
            border: true,
        },
        {
            url: "/Google/ca/avatar-4@2x.png",
      size: "w-[33.23px] h-[33.23px]",
      border: true,
    },
    {
      url: "/Google/ca/avatar-5@2x.png",
      size: "w-[33.23px] h-[33.23px]",
      border: true,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1126px] h-auto lg:h-[525px] items-start gap-4 lg:gap-0.5 relative mx-auto py-8 lg:py-0">
      <div className="flex flex-col w-full lg:w-[432px] items-start gap-6 lg:gap-[37px] relative mb-0 lg:mb-[-0.23px]">
        <div className="flex flex-col items-start gap-4 lg:gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3 lg:gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-4 lg:gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3 lg:gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-full max-w-[219px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                      className="ml-[-3.50px] relative w-[15px] h-[15px]"
                      alt="Stars"
                      src="/Google/ca/stars.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] mr-[-3.50px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs sm:text-sm tracking-[0] leading-[20px] sm:leading-[23px] whitespace-nowrap">
                      Google Ads, Explained Simply
                    </div>
                  </div>

                  <h1 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-2xl md:text-3xl lg:text-[50px] tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]">
                    Advertise Smarter with Google Ads
                  </h1>
                </div>

                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm md:text-base tracking-[0] leading-[20px] md:leading-[23px]">
                  Google Ads is a powerful online advertising platform by Google
                  that puts your business in front of ready-to-buy customers.
                </p>
              </div>

              <ul className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                  >
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt="Check mark"
                      src="/Google/ca/mingcute-check-2-line-3.svg"
                    />

                    <p className="relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-xs sm:text-sm tracking-[0] leading-[18px] sm:leading-[23px]">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="inline-flex items-start relative flex-[0_0_auto]"
            role="group"
            aria-label="User avatars"
          >
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`relative ${avatar.size} ${index > 0 ? "ml-[-10.68px]" : ""} ${index === 1 || index === 2 ? "mt-[-1.60px] mb-[-1.60px]" : ""} rounded-[10383.65px] ${avatar.border ? "border-[1.6px] border-solid border-neutral-0" : ""} bg-[url(${avatar.url})] bg-cover bg-[50%_50%]`}
              />
            ))}
          </div>
        </div>

        <button className="flex w-full max-w-[277px] h-[45px] lg:h-[50px] items-center justify-center lg:justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:bg-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
            Upgrade Your Ad Strategy
          </span>

          <div className="inline-flex items-center gap-2.5 p-2 lg:p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[24px] lg:rounded-[34px] border border-solid border-primary-75">
            <img
              className="relative w-4 h-4 lg:w-5 lg:h-5"
              alt="Arrow right"
              src="/Google/ca/arrow-right.svg"
            />
          </div>
        </button>
      </div>

      <div
        className="relative w-full lg:w-[692px] h-auto lg:h-[515px] mt-8 lg:mt-0"
        role="img"
        aria-label="Google Ads dashboard visualization"
      >
        <div className="relative w-full max-w-[673px] h-auto lg:h-[516px] lg:-top-2 lg:left-[31px] mx-auto lg:mx-0">
          <img
            className="absolute w-full max-w-[576px] h-auto lg:h-[479px] top-0 left-1/2 transform -translate-x-1/2 lg:left-[97px] lg:transform-none"
            alt="Dashboard frame"
            src="/Google/ca/frame-2121457614.svg"
          />

          <div className="flex w-full max-w-[221px] items-center gap-[8px] lg:gap-[11.94px] px-[8px] lg:px-[12.61px] py-[12px] lg:py-[16.66px] absolute top-[100px] lg:top-[197px] left-2 lg:left-0 bg-white rounded-[8px] lg:rounded-[9.95px] border-[0.88px] border-solid border-primary-400 shadow-[0px_3.51px_11.05px_#2e97ffa1]">
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt="Location targeting icon"
              src="/Google/ca/component-2-variant3.svg"
            />

            <div className="flex flex-col w-full max-w-[149.31px] items-start gap-[6px] lg:gap-[7.89px] relative">
              <p className="relative w-full max-w-[149.09px] mt-[-0.66px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-[10px] lg:text-[12.3px] tracking-[-0.06px] leading-[11px] lg:leading-[13.5px]">
                Reach Users Locally Or Globally
              </p>

              <p className="relative w-full max-w-[149.09px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-70 text-[9px] lg:text-[10.5px] tracking-[-0.05px] leading-[10px] lg:leading-[11.6px]">
                Get A Free Strategy Call Now !
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-[228px] items-center justify-center gap-[6px] lg:gap-[7.89px] px-[12px] lg:px-[15.78px] py-[8px] lg:py-[11.4px] absolute top-[250px] lg:top-[443px] right-2 lg:right-auto lg:left-[413px] bg-white rounded-[8px] lg:rounded-[10.52px] border-[0.88px] border-solid border-neutral-800 shadow-[0px_5px_0px_#ff9800]">
            <img
              className="relative w-[56.12px] h-[49.98px]"
              alt="Users statistics chart"
              src="/Google/ca/frame-2121457616.svg"
            />

            <div className="flex flex-col w-full max-w-[131.54px] items-start gap-[4px] lg:gap-[6.14px] relative">
              <div className="self-stretch mt-[-0.88px] font-semibold text-neutral-800 text-[12px] lg:text-[15.8px] tracking-[-0.08px] leading-[14px] lg:leading-[17.4px] relative [font-family:'Urbanist',Helvetica]">
                Total Users
              </div>

              <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[10px] lg:text-[12.3px] tracking-[-0.06px] leading-[11px] lg:leading-[13.5px]">
                100k+ Satisfied Clinets
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[179px] items-start gap-[5px] lg:gap-[6.51px] px-[8px] lg:px-[9.11px] py-[5px] lg:py-[6.51px] absolute top-[200px] lg:top-[390px] left-4 lg:left-[70px] bg-white rounded-[8px] lg:rounded-[9.11px] border-[0.65px] border-solid border-[#2e97ffa1] shadow-[0px_2.6px_6.25px_#00000040]">
            <div className="relative self-stretch w-full h-[60px] lg:h-[98.29px] bg-[url(/Google/ca/charts@2x.png)] bg-[100%_100%]">
              <img
                className="absolute w-[7px] h-[7px] top-[33px] left-[129px]"
                alt="Status indicator"
                src="/Google/ca/ui-status@2x.png"
              />

              <div className="absolute w-5 h-[13px] top-4 left-[124px]">
                <div className="relative w-[39px] h-[33px] top-[-9px] -left-2.5 bg-[url(/Google/ca/combined-shape.svg)] bg-[100%_100%]">
                  <div className="w-[15px] top-2.5 left-[11px] text-[7.8px] tracking-[0.33px] leading-[13.0px] absolute [font-family:'Roboto',Helvetica] font-medium text-[#414d55] text-center whitespace-nowrap">
                    62
                  </div>
                </div>
              </div>

              <div className="flex w-[50px] lg:w-[66px] items-center justify-center gap-[4px] lg:gap-[6.51px] px-[4px] lg:px-[6.51px] py-[1px] lg:py-[1.62px] absolute top-[2px] lg:top-[3px] left-0 bg-[#00b45c] rounded-[15px] lg:rounded-[19.53px]">
                <div className="relative w-fit mt-[-0.65px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-0 text-[3px] lg:text-[4px] text-center tracking-[0] leading-[10px] lg:leading-[13.0px] whitespace-nowrap">
                  GROW YOUR TRAFFIC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
