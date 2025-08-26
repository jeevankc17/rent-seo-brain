import React from "react";

export const IndustryLeadersSection: React.FC = () => {
  const campaignData = [
    {
      id: 1,
      name: "Google Cpc",
      price: "$1.34",
      icon: "/Google/ca/ellipse1667.svg",
    },
    {
      id: 2,
      name: "Meta Cpm",
      price: "$9.80",
      icon: "/Google/ca/ellipse1668.svg",
    },
  ];

  const statsData = [
    {
      id: 1,
      title: "Snapchat",
      value: "679,7k reach",
      icon: "/Google/ca/snapchat.png",
      position: { top: "197px", left: "0" },
      bgColor: "#ffff00",
    },
    {
      id: 2,
      title: "Trusted Clients",
      value: "124,89K+",
      icons: [
        "/Home-Page/Hero-Section/image1.jpg",
        "/Home-Page/Hero-Section/image2.jpg",
      ],
      position: { top: "200px", left: "934px" },
      bgColor: null,
    },
  ];

  return (
    <section
      className="flex flex-col w-full max-w-[1168px] items-center gap-8 lg:gap-[95px] relative flex-[0_0_auto] px-4 lg:px-0"
      role="region"
      aria-label="Industry Leaders Statistics"
    >
      <div className="relative self-stretch w-full h-auto lg:h-[314px]">
        <img
          className="hidden lg:block absolute top-[174px] left-[275px] w-[52px] h-[52px]"
          alt="History icon"
          src="/Google/ca/history.svg"
        />

        <img
          className="hidden lg:block absolute top-[174px] left-[834px] w-[52px] h-[52px] bg-secondary-200 rounded-full"
          alt="History icon"
          src="/Google/ca/statistics.svg"
        />

        <div className="flex flex-col lg:hidden gap-4 mb-8">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="inline-flex items-end gap-3 p-4 bg-grey-50 rounded-[20px] w-full"
            >
              {stat.bgColor ? (
                <div className="flex items-center justify-center gap-[8.12px] relative bg-[#ffff00] rounded-[81.25px] w-[42px] h-[42px]">
                  <img
                    className="relative w-[32px] h-[32px] aspect-[1]"
                    alt={`${stat.title} logo`}
                    src={stat.icon}
                  />
                </div>
              ) : (
                <img
                  className="relative flex-[0_0_auto] w-[42px] h-[42px]"
                  alt={`${stat.title} icon`}
                  src={stat.icon}
                />
              )}

              <div className="flex flex-col items-start gap-1 relative">
                {stat.bgColor ? (
                  <>
                    <div className="relative [font-family:'Urbanist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0] leading-[16px]">
                      {stat.title}
                    </div>
                    <div className="relative [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-lg tracking-[0] leading-[22px]">
                      {stat.value}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-lg tracking-[0] leading-[22px]">
                      {stat.value}
                    </div>
                    <div className="relative [font-family:'Urbanist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0] leading-[16px]">
                      {stat.title}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="hidden lg:inline-flex items-end gap-3 p-5 absolute bg-grey-50 rounded-[20px]"
            style={{ top: stat.position.top, left: stat.position.left }}
          >
            {stat.bgColor ? (
              <div className="flex items-center justify-center gap-[8.12px] relative bg-[#ffff00] rounded-[81.25px] w-[52px] h-[52px]">
                <img
                  className="relative w-[42px] h-[42px] aspect-[1]"
                  src={stat.icon}
                  alt={`${stat.title} logo`}
                />
              </div>
            ) : stat.icons ? (
              <div className="flex items-center gap-2">
                {stat.icons.map((iconSrc, idx) => (
                  <img
                    key={idx}
                    className="relative flex-[0_0_auto] mt-[-0.25px] mb-[-1.25px] ml-[-1.25px] h-14 w-14 rounded-full"
                    src={iconSrc}
                    alt={`${stat.title} icon ${idx + 1}`}
                  />
                ))}
              </div>
            ) : (
              <img
                className="relative flex-[0_0_auto] mt-[-0.25px] mb-[-1.25px] ml-[-1.25px]"
                src={stat.icon}
                alt={`${stat.title} icon`}
              />
            )}

            <div
              className={
                stat.bgColor
                  ? "flex flex-col w-[123px] items-start gap-1 relative"
                  : "inline-flex flex-col items-start relative flex-[0_0_auto]"
              }
            >
              {stat.bgColor ? (
                <>
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-800 text-sm lg:text-base tracking-[0] leading-[16px] lg:leading-[19.2px]">
                    {stat.title}
                  </div>
                  <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-lg lg:text-[21px] tracking-[0] leading-[22px] lg:leading-[25.2px]">
                    {stat.value}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-lg lg:text-[22px] tracking-[0] leading-[22px] lg:leading-[26.4px]">
                    {stat.value}
                  </div>
                  <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-800 text-sm lg:text-base tracking-[0] leading-[16px] lg:leading-[19.2px]">
                    {stat.title}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        <article className="flex flex-col w-full max-w-[443px] items-center gap-4 px-4 lg:px-5 py-4 relative lg:absolute lg:top-0 lg:left-[359px] bg-neutral-0 rounded-2xl lg:rounded-3xl shadow-[7px_8px_54.8px_#0f202840] mb-6 lg:mb-0">
          <header className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-lg lg:text-xl tracking-[0] leading-[22px] lg:leading-[34px] whitespace-nowrap">
                Campaign Markets
              </h3>

              <p className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-neutral-800 text-xs lg:text-sm tracking-[0] leading-[16px] lg:leading-[20.3px] whitespace-nowrap">
                Latest results from active ad campaigns
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              {campaignData.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex flex-col items-start gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-grey-75 rounded-[20px]"
                >
                  <div className="flex items-center justify-between px-3 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-neutral-0 rounded-2xl">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <img
                        className="relative w-7 h-7"
                        alt={`${campaign.name} logo`}
                        src={campaign.icon}
                      />

                      <div className="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[34px] whitespace-nowrap">
                          {campaign.name}
                        </div>

                        <div className="relative w-4 h-4">
                          <img
                            className="absolute w-[9px] h-[5px] top-1.5 left-1"
                            alt="Dropdown arrow"
                            src="/Google/ca/arrow-swap.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[34px] whitespace-nowrap">
                      {campaign.price}
                    </div>
                  </div>
                </div>
              ))}

              <img
                className="hidden lg:block absolute w-[42px] h-[42px] top-[58px] left-[180px] bg-primary-100 rounded-full"
                alt="Campaign optimization icon"
                src="/Google/ca/arrow-swap.svg"
              />
            </div>
          </header>

          <button className="flex h-10 lg:h-12 items-center justify-center px-3 py-2 lg:py-[18px] relative self-stretch w-full bg-neutral-900 rounded-[50px] lg:rounded-[100px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-opacity">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[34px] whitespace-nowrap">
              OPTIMIZE NOW
            </span>
          </button>
        </article>

        <div className="hidden lg:inline-flex flex-col items-start gap-2 p-6 absolute top-[35px] left-[837px] bg-neutral-0 rounded-3xl border-[1.5px] border-solid border-grey-100 shadow-[20px_20px_42.1px_#1c3f3a26]">
          <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-neutral-700 text-base text-center tracking-[0] leading-[19.8px] whitespace-nowrap">
            Average Client ROI
          </div>

          <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-2xl tracking-[0] leading-[normal]">
              $234.98K NI
            </div>

            <img
              className="relative w-6 h-6 bg-green-800 rounded-full"
              alt="Growth indicator"
              src="/Google/ca/down-arrow.svg"
            />
          </div>
        </div>

        <div className="hidden lg:inline-flex flex-col items-start gap-2 px-6 py-5 absolute top-8 left-[93px] bg-neutral-0 rounded-3xl">
          <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Total Ad Spend Managed
            </div>

            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <div className="w-fit mt-[-1.00px] font-semibold text-neutral-900 text-2xl leading-[normal] relative [font-family:'Urbanist',Helvetica] tracking-[0]">
                $964,700+
              </div>

              <div className="inline-flex items-end gap-2 px-2 py-1.5 relative flex-[0_0_auto] bg-[#21aa5b] rounded-[100px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-0 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  +8.5% ER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
