import React from "react";

// Add TypeScript interfaces and update component signature
interface AdType {
  id: string;
  icon: string;
  title: string;
  badge?: string;
  description: string;
  bgColor?: string;
  borderColor?: string;
  titleColor?: string;
  iconBg?: string;
  textColor?: string;
  emoji?: string;
  hasChart?: boolean;
  hasStats?: boolean;
  hasBarChart?: boolean;
  hasProducts?: boolean;
  hasAppImage?: boolean;
  height?: string;
}

interface BarChart {
  height: string;
  color: string;
}

export const AdOverviewSection: React.FC = () => {
  const adTypes: AdType[] = [
    {
      id: "search",
      icon: "/Google/ca/search.svg",
      title: "Search Ads",
      badge: "MostPopular",
      description:
        "Text-based ads that appear on top of Google's search results when users are actively searching for your product or service.",
      bgColor: "bg-neutral-0",
      borderColor: "border-grey-200",
      titleColor: "text-primary-500",
      iconBg: "bg-primary-300",
      hasChart: true,
      height: "h-[300px]",
    },
    {
      id: "youtube",
      icon: "/Google/ca/youtube.svg",
      title: "Youtube Ads",
      description:
        "Video ads that play before, during, or after YouTube videos — perfect for storytelling and brand awareness.",
      bgColor: "bg-grey-50",
      borderColor: "border-grey-200",
      titleColor: "text-primary-500",
      iconBg: "bg-primary-300",
      hasStats: true,
      height: "h-[339px]",
    },
    {
      id: "display",
      icon: "/Google/ca/monitor.svg",
      title: "Display Ads",
      description:
        "Visually engaging banner ads shown across millions of websites, blogs, and apps in Google's Display Network.",
      bgColor: "bg-grey-50",
      borderColor: "border-grey-200",
      titleColor: "text-primary-500",
      iconBg: "bg-primary-300",
      hasBarChart: true,
      height: "h-[650px]",
    },
    {
      id: "shopping",
      icon: "/Google/ca/shopping-cart.svg",
      title: "Shopping Ads",
      emoji: "🛍",
      description:
        "Product-based ads that showcase your offerings with images, price, and reviews right on Google Search.",
      bgColor: "bg-primary-300",
      titleColor: "text-grey-50",
      textColor: "text-neutral-10",
      iconBg: "bg-neutral-0",
      hasProducts: true,
      height: "h-[283px]",
    },
    {
      id: "app",
      icon: "/Google/ca/smartphone.svg",
      title: "App Campaigns",
      badge: "Promote Mobile Apps",
      description:
        "Drive installs and engagement by promoting your app across Google Search.",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-75",
      titleColor: "text-primary-500",
      iconBg: "bg-primary-300",
      hasAppImage: true,
      height: "h-[356px]",
    },
  ];

  const productImages: string[] = [
    "/Google/ca/shape@2x.png",
    "/Google/ca/shape-1@2x.png",
    "/Google/ca/shape-2@2x.png",
  ];

  const barChartData: BarChart[] = [
    { height: "h-16", color: "bg-grey-100" },
    { height: "h-[136px]", color: "bg-[#2e97ffa1]" },
    { height: "h-[212px]", color: "bg-[#6e6e6e38]" },
  ];

  return (
    <section className="flex flex-col w-[1132px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="w-[565px] items-center gap-4 flex-[0_0_auto] flex flex-col relative">
        <div className="flex w-[185px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="/Google/ca/stars-2.svg"
          />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
            Smart ads, real results.
          </div>
        </div>

        <div className="flex flex-col h-44 items-center gap-4 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
            Choose the Right Google Ads for Your Business
          </h1>
          <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
            Reach your audience where they spend time. Google Ads offers
            multiple formats tailored to different goals — from awareness to
            direct conversions.
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center gap-[85px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex w-[1132px] items-center justify-center gap-[26px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-[360px] items-start gap-3 relative">
            <article
              className={`flex flex-col ${adTypes[0].height} items-start gap-2.5 px-[21px] py-[23px] relative self-stretch w-full ${adTypes[0].bgColor} rounded-[18px] border border-solid ${adTypes[0].borderColor}`}
            >
              <div className="flex flex-col w-[318px] h-[258px] items-start relative mt-[-2.00px] mb-[-2.00px]">
                <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ${adTypes[0].iconBg} rounded-[50px]`}
                  >
                    <img
                      className="relative w-6 h-6"
                      alt={adTypes[0].title}
                      src={adTypes[0].icon}
                    />
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <h3
                        className={`relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold ${adTypes[0].titleColor} text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
                      >
                        {adTypes[0].title}
                      </h3>
                      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[3px] relative flex-[0_0_auto] bg-secondary-50 rounded-[50px] border-[0.3px] border-solid border-secondary-300">
                        <div className="relative w-fit mt-[-0.30px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                          {adTypes[0].badge}
                        </div>
                      </div>
                    </div>
                    <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                      {adTypes[0].description}
                    </p>
                  </div>
                </div>

                <div className="relative w-[318px] h-[116px]">
                  <img
                    className="absolute w-[321px] h-[52px] top-[35px] -left-px mix-blend-multiply"
                    alt="Search results chart"
                    src="/Google/ca/path-2.svg"
                  />
                  <div className="absolute w-[39px] h-[27px] top-0 left-[241px]">
                    <div className="relative w-16 h-[55px] -top-3 -left-3.5 bg-[url(/Google/ca/combined-shape-1.svg)] bg-[100%_100%]">
                      <div className="w-[30px] top-3.5 left-5 text-[10.3px] tracking-[0.43px] leading-[17.2px] absolute [font-family:'Roboto',Helvetica] font-medium text-[#414d55] text-center whitespace-nowrap">
                        62
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article
              className={`flex flex-col ${adTypes[1].height} items-start gap-2.5 px-[21px] py-[23px] relative self-stretch w-full ${adTypes[1].bgColor} rounded-[18px] border border-solid ${adTypes[1].borderColor}`}
            >
              <div className="h-[293px] gap-14 flex flex-col w-[318px] items-start relative">
                <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ${adTypes[1].iconBg} rounded-[50px]`}
                  >
                    <img
                      className="relative w-6 h-6"
                      alt={adTypes[1].title}
                      src={adTypes[1].icon}
                    />
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <h3
                        className={`relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold ${adTypes[1].titleColor} text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
                      >
                        {adTypes[1].title}
                      </h3>
                    </div>
                    <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                      {adTypes[1].description}
                    </p>
                  </div>
                </div>

                <div className="flex w-[318px] items-center justify-center gap-[7px] relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[317px] items-start gap-2 px-6 py-5 relative bg-white rounded-3xl border border-solid border-black shadow-[0px_4px_0px_#0083ff73]">
                    <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                      <div className="w-fit mt-[-1.00px] font-medium text-[#0a151957] text-base tracking-[0] leading-[normal] whitespace-nowrap relative [font-family:'Urbanist',Helvetica]">
                        Total views
                      </div>
                      <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                        <div className="w-fit font-semibold text-[#0a15195c] text-2xl leading-[normal] relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          9,64700+
                        </div>
                        <div className="flex w-[68px] items-center justify-center gap-2 px-2 py-1.5 relative bg-[#00b55b] rounded-[100px]">
                          <div className="w-fit font-normal text-white text-xs leading-[normal] whitespace-nowrap relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                            +8.50%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <article
            className={`flex flex-col w-[360px] ${adTypes[2].height} items-start gap-2.5 px-[21px] py-[23px] relative ${adTypes[2].bgColor} rounded-[18px] border border-solid ${adTypes[2].borderColor}`}
          >
            <div className="h-[603px] gap-[68px] flex flex-col w-[318px] items-start relative">
              <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                <div
                  className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ${adTypes[2].iconBg} rounded-[50px]`}
                >
                  <img
                    className="relative w-6 h-6"
                    alt={adTypes[2].title}
                    src={adTypes[2].icon}
                  />
                </div>

                <div className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <h3
                      className={`relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold ${adTypes[2].titleColor} text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
                    >
                      {adTypes[2].title}
                    </h3>
                  </div>
                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                    {adTypes[2].description}
                  </p>
                </div>
              </div>

              <div className="flex w-[318px] h-[394px] items-end justify-center gap-2 relative">
                {barChartData.map((bar: BarChart, index: number) => (
                  <div
                    key={index}
                    className={`${bar.height} ${bar.color} border border-solid border-grey-75 relative w-[100px] rounded-[1px]`}
                  />
                ))}
              </div>
            </div>
          </article>

          <div className="flex flex-col w-[360px] items-start gap-3 relative">
            <article
              className={`flex flex-col ${adTypes[3].height} items-start gap-2.5 px-[21px] py-[23px] relative self-stretch w-full ${adTypes[3].bgColor} rounded-[18px]`}
            >
              <div className="h-[235px] gap-[34px] flex flex-col w-[318px] items-start relative">
                <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ${adTypes[3].iconBg} rounded-[50px]`}
                  >
                    <img
                      className="relative w-6 h-6"
                      alt={adTypes[3].title}
                      src={adTypes[3].icon}
                    />
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                    <div className="gap-1.5 inline-flex items-center relative flex-[0_0_auto]">
                      <h3
                        className={`relative w-fit [font-family:'Urbanist',Helvetica] font-semibold ${adTypes[3].titleColor} text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
                      >
                        {adTypes[3].title}
                      </h3>
                      <div className="inline-flex h-[34px] items-center justify-center gap-2.5 p-[7px] relative flex-[0_0_auto] bg-[#e2feaa] rounded-[55px]">
                        <div className="w-5 h-5 font-semibold text-grey-50 text-xl text-center leading-[19px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                          {adTypes[3].emoji}
                        </div>
                      </div>
                    </div>
                    <p
                      className={`relative self-stretch [font-family:'Urbanist',Helvetica] font-medium ${adTypes[3].textColor} text-sm tracking-[0] leading-[normal]`}
                    >
                      {adTypes[3].description}
                    </p>
                  </div>
                </div>

                <div className="flex w-[215px] items-center gap-[var(--size-space-200)] relative flex-[0_0_auto] mb-[-0.51px]">
                  <div className="inline-flex items-center relative flex-[0_0_auto] gap-[var(--size-space-negative-200)]">
                    {productImages.map((image: string, index: number) => (
                      <div
                        key={index}
                        className={`relative w-[50.25px] h-[50.26px] ${index > 0 ? "-ml-2" : ""} rounded-[11938.2px] shadow-drop-shadow-200 bg-[url(${image})] bg-cover bg-[50%_50%]`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article
              className={`flex flex-col ${adTypes[4].height} items-start gap-[22px] px-[21px] py-[23px] relative self-stretch w-full ${adTypes[4].bgColor} rounded-[18px] border border-solid ${adTypes[4].borderColor}`}
            >
              <div className="gap-[55px] flex-[0_0_auto] flex flex-col w-[318px] items-start relative">
                <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ${adTypes[4].iconBg} rounded-[50px]`}
                  >
                    <img
                      className="relative w-6 h-6"
                      alt={adTypes[4].title}
                      src={adTypes[4].icon}
                    />
                  </div>

                  <div className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                    <div className="gap-[7px] inline-flex items-center relative flex-[0_0_auto]">
                      <h3
                        className={`relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold ${adTypes[4].titleColor} text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
                      >
                        {adTypes[4].title}
                      </h3>
                      <div className="flex w-[123px] items-center justify-center gap-2.5 px-2 py-[5px] relative bg-secondary-50 rounded-[55px]">
                        <div className="relative w-fit mt-[-0.50px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                          {adTypes[4].badge}
                        </div>
                      </div>
                    </div>
                    <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm tracking-[0] leading-[normal]">
                      {adTypes[4].description}
                    </p>
                  </div>
                </div>

                <div className="relative w-[318px] h-[131px] bg-[url(https://c.animaapp.com/ugwxqeDI/img/image-38@2x.png)] bg-[100%_100%]" />
              </div>
            </article>
          </div>
        </div>
      </main>

      <footer className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
        <button className="w-[294px] flex h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] cursor-pointer">
          <p className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
            Start With The Right Strategy
          </p>
          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
            <img
              className="relative w-5 h-5"
              alt="Arrow right"
              src="/Google/ca/arrow-right-1.svg"
            />
          </div>
        </button>

        <button className="all-[unset] box-border flex w-[212px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 cursor-pointer">
          <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
            Explore Our Process
          </div>
          <img
            className="relative w-5 h-5"
            alt="Arrow right"
            src="/Google/ca/arrow-right-2.svg"
          />
        </button>
      </footer>
    </section>
  );
};