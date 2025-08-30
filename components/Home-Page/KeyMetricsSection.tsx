import React from "react";

export const KeyMetricsSection: React.FC = () => {
  const metricsData = [
    {
      value: "5+",
      label: "Core Services",
    },
    {
      value: "3+",
      label: "Years of experience",
    },
    {
      value: "98%",
      label: "Client\nRetention",
    },
    {
      value: "167%",
      label: "Avg Traffic Growth",
    },
  ];

  return (
    <section
      className="w-full h-auto lg:h-[143px] gap-6 lg:gap-[38px] flex flex-col sm:flex-row items-center justify-center relative"
      role="region"
      aria-label="Key Metrics"
    >
      {metricsData.map((metric, index) => (
        <article
          key={index}
          className="flex-col w-full sm:w-[200px] lg:w-[253px] h-auto lg:h-[143px] gap-4 lg:gap-[21px] px-6 lg:px-[34px] py-4 lg:py-[22px] bg-[#e8f4ff2e] rounded-[10px] lg:rounded-[13px] border border-solid border-primary-50 flex items-center justify-center relative"
        >
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-300 text-xl lg:text-2xl text-center tracking-[0] leading-[22px] lg:leading-[26px]">
            {metric.value}
          </div>

          <div className="relative w-full max-w-[125px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-base lg:text-lg text-center tracking-[0] leading-[20px] lg:leading-[26px] whitespace-pre-line">
            {metric.label}
          </div>
        </article>
      ))}
    </section>
  );
};
