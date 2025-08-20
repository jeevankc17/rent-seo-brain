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
    <section className="relative w-full bg-[#a2d1ff66] overflow-hidden py-16">
      <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
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
            Tools Behind Our Performance
          </h2>

          <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
            We use industry-leading tools to plan smarter, optimize faster, and
            deliver real results.
          </p>
        </header>
      </div>

      <div className="w-full flex justify-center mt-16">
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 w-full max-w-7xl px-4">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-center w-[105px] h-[105px] bg-primary-75 rounded-full"
            >
              <img
                className={`${tool.width} h-[104.15px] aspect-[0.86] object-contain`}
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
