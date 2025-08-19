import React from "react";

export const BenefitsSection: React.FC = () => {
  const performanceMetrics = [
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/search.svg",
      percentage: "94%",
      label: "Seo Score",
      chart: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458076.svg",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/trending-up-1.svg",
      percentage: "87%",
      label: "Cro Rating",
      chart: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458076-1.svg",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/smartphone-1.svg",
      percentage: "92%",
      label: "Mobile Score",
      chart: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458076-2.svg",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/activity.svg",
      percentage: "89%",
      label: "Page Speed",
      chart: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458076-3.svg",
    },
  ];

  const benefitsList = [
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/award.svg",
      text: "3+ Years Of Conversion-optimized Design Experience",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/trending-up-2.svg",
      text: "Data-driven Structure , Heatmaps, Cro, And Ux Testing",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/smartphone-2.svg",
      text: "Mobile-first And Seo-ready Designs",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/refresh-cw-1.svg",
      text: "Unlimited Design Revisions",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/activity-1.svg",
      text: "Fast Delivery & Responsive Support",
    },
  ];

  const features = [
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/check-circle-2.svg",
      text: "Design System",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/check-circle-3.svg",
      text: "Unlimited Revisions",
    },
  ];

  return (
    <section className="relative w-full h-full bg-neutral-900 overflow-x-hidden px-[156px]">
      <div className="relative h-auto pt-[103px]">
        <div className="absolute w-[464px] h-[403px] top-[174px] right-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px] pointer-events-none" />
        <div className="absolute w-[464px] h-[403px] top-[151px] left-0 bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px] pointer-events-none" />

        <div className="relative h-auto">
          <div className="flex flex-col w-full items-start gap-[50px]">
            <header className="flex flex-col w-[550px] items-start gap-6 relative flex-[0_0_auto]">
              <div className="w-[167px] flex items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-500 rounded-[45px] shadow-[0px_3px_1.1px_#ffffff]">
                <img
                  className="relative w-[15px] h-[15px]"
                  alt="Stars"
                  src="https://c.animaapp.com/YaTVIQjZ/img/stars-2.svg"
                />

                <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                  What Sets Us Apart
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch h-[116px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-50 text-[50px] tracking-[0] leading-[57px]">
                  Your Page, Designed With Purpose
                </h2>

                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-30 text-base tracking-[0] leading-[23px]">
                  Every element we design has a reason behind it. With
                  experience crafting high-converting pages, we combine proven
                  UX strategies, CRO insights, and real user data
                </p>
              </div>
            </header>

            <div className="flex items-end gap-[73px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[480px] items-start gap-[21px] relative">
                <img
                  className="relative self-stretch w-full h-[103px]"
                  alt="Frame"
                  src="https://c.animaapp.com/YaTVIQjZ/img/frame-2121458086.svg"
                />

                <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-2.5 px-[17px] py-1 relative flex-[0_0_auto] bg-[#ffcdcd] rounded-[4453px]">
                      <img
                        className="relative w-[19px] h-[19px]"
                        alt="Eye"
                        src="https://c.animaapp.com/YaTVIQjZ/img/eye.svg"
                      />

                      <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-[#e51919] text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        Heatmap Active
                      </div>
                    </div>

                    <div className="flex flex-wrap items-start gap-[36px_77px] relative self-stretch w-full flex-[0_0_auto]">
                      {performanceMetrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex flex-col w-[198px] items-center gap-[27px] px-[11px] py-3.5 relative rounded-[11px]"
                        >
                          <div className="inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                            <div className="flex w-[76px] items-center justify-center gap-2 relative flex-[0_0_auto]">
                              <img
                                className="relative w-[18px] h-[18px]"
                                alt={metric.label}
                                src={metric.icon}
                              />

                              <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[23px] whitespace-nowrap">
                                {metric.percentage}
                              </div>
                            </div>

                            <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[23px] whitespace-nowrap">
                              {metric.label}
                            </div>
                          </div>

                          <img
                            className="relative self-stretch w-full h-[9.5px] mb-[-4.50px] ml-[-4.50px] mr-[-1.00px]"
                            alt="Chart"
                            src={metric.chart}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col w-[284px] items-center gap-4 relative flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-[23px]">
                      Real-time Optimization Preview
                    </h3>

                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-3 h-3 bg-[#00b45c] rounded-md" />

                      <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-grey-300 text-lg text-center tracking-[0] leading-[23px] whitespace-nowrap">
                        Live Performance Monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[575px] items-start gap-9 relative">
                <article className="flex flex-col items-start justify-center gap-6 px-[33px] py-8 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[17px]">
                  <div className="flex flex-col items-start justify-center gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      {benefitsList.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[19px] relative self-stretch w-full flex-[0_0_auto]"
                        >
                          <div className="inline-flex items-center justify-center gap-2.5 p-3 relative flex-[0_0_auto] bg-secondary-50 rounded-[344px]">
                            <img
                              className="relative w-[17px] h-[17px]"
                              alt=""
                              src={benefit.icon}
                            />
                          </div>

                          <p className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-lg tracking-[0] leading-[23px] whitespace-nowrap">
                            {benefit.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-[26px] relative flex-[0_0_auto]">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]"
                        >
                          <img
                            className="relative w-[19px] h-[19px]"
                            alt=""
                            src={feature.icon}
                          />

                          <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                            {feature.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <button className="w-[262px] flex h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] border-0 cursor-pointer">
                    <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
                      Optimize My Landing Page
                    </span>

                    <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
                      <img
                        className="relative w-5 h-5"
                        alt="Arrow right"
                        src="https://c.animaapp.com/YaTVIQjZ/img/arrow-right-1.svg"
                      />
                    </div>
                  </button>

                  <button className="all-[unset] box-border flex w-[220px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 cursor-pointer">
                    <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
                      Talk To A Designer
                    </span>

                    <img
                      className="relative w-5 h-5"
                      alt="Arrow right"
                      src="https://c.animaapp.com/YaTVIQjZ/img/arrow-right-2.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <img
            className="absolute w-[272px] h-[334px] top-[110px] left-[576px]"
            alt="Vector"
            src="https://c.animaapp.com/YaTVIQjZ/img/vector-2525.svg"
          />
        </div>
      </div>
    </section>
  );
};
