import React from "react";

export const ToolsSection: React.FC = () => {
  const toolsData = [
    {
      id: 1,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46@2x.png",
      alt: "Tool 1",
      width: "w-[22.47px]",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-4@2x.png",
      alt: "Tool 2",
      width: "w-[89.95px]",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-6@2x.png",
      alt: "Tool 3",
      width: "w-[89.95px]",
    },
    {
      id: 4,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-3@2x.png",
      alt: "Tool 4",
      width: "w-[89.95px]",
    },
    {
      id: 5,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-4@2x.png",
      alt: "Tool 5",
      width: "w-[89.95px]",
    },
    {
      id: 6,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-5@2x.png",
      alt: "Tool 6",
      width: "w-[89.95px]",
    },
    {
      id: 7,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-6@2x.png",
      alt: "Tool 7",
      width: "w-[89.95px]",
    },
    {
      id: 8,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-8@2x.png",
      alt: "Tool 8",
      width: "w-[89.95px]",
    },
    {
      id: 9,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-8@2x.png",
      alt: "Tool 9",
      width: "w-[89.95px]",
    },
    {
      id: 10,
      src: "https://c.animaapp.com/1pza1gM1/img/image-46-9@2x.png",
      alt: "Tool 10",
      width: "w-[67.48px]",
    },
  ];

  return (
    <section className="relative self-stretch w-full h-[519px] bg-[#a2d1ff66] overflow-hidden">
      <div className="flex-col w-[565px] gap-4 absolute top-[66px] left-[418px] flex items-center">
        <div className="w-[238px] justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-300 flex items-center">
          <div className="flex w-[222px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="https://c.animaapp.com/1pza1gM1/img/stars-2.svg"
            />

            <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              We Don&apos;t Guess, We Use Data.
            </p>
          </div>
        </div>

        <header className="flex flex-col h-44 items-center gap-4 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
            Professional SEO Tools We Use{" "}
          </h2>

          <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
            We use industry-leading tools to plan smarter, optimize faster, and
            deliver real results.
          </p>
        </header>
      </div>

      <div className="flex w-[1590px] items-start gap-2.5 absolute top-[349px] left-[-75px] overflow-hidden">
        <div className="flex flex-wrap w-[1635px] items-center gap-[74px_55px] relative">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="flex w-[105px] h-[105px] items-center justify-center gap-[7px] p-[7px] relative bg-primary-75 rounded-[481.6px]"
            >
              <img
                className={`${tool.width} relative h-[104.15px] mt-[-6.58px] mb-[-6.58px] aspect-[0.86]`}
                alt={tool.alt}
                src={tool.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
