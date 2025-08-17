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
      className="w-[1128px] h-[143px] gap-[38px] flex items-center justify-center relative"
      role="region"
      aria-label="Key Metrics"
    >
      {metricsData.map((metric, index) => (
        <article
          key={index}
          className="flex-col w-[253px] h-[143px] gap-[21px] px-[34px] py-[22px] bg-[#e8f4ff2e] rounded-[13px] border border-solid border-primary-50 flex items-center justify-center relative"
        >
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-300 text-2xl text-center tracking-[0] leading-[26px]">
            {metric.value}
          </div>

          <div className="relative w-[125px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-lg text-center tracking-[0] leading-[26px] whitespace-pre-line">
            {metric.label}
          </div>
        </article>
      ))}
    </section>
  );
};
