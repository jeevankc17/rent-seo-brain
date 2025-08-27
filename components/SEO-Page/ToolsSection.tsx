import React from "react";

export const ToolsSection: React.FC = () => {
  const toolsData = [
    {
      id: 1,
      src: "/SEO/ca/image-46@2x.png",
      alt: "Tool 1",
      width: "w-[22.47px]",
    },
    {
      id: 2,
      src: "/SEO/ca/image-46-4@2x.png",
      alt: "Tool 2",
      width: "w-[89.95px]",
    },
    {
      id: 3,
      src: "/SEO/ca/image-46-6@2x.png",
      alt: "Tool 3",
      width: "w-[89.95px]",
    },
    {
      id: 4,
      src: "/SEO/ca/image-46-3@2x.png",
      alt: "Tool 4",
      width: "w-[89.95px]",
    },
    {
      id: 5,
      src: "/SEO/ca/image-46-4@2x.png",
      alt: "Tool 5",
      width: "w-[89.95px]",
    },
    {
      id: 6,
      src: "/SEO/ca/image-46-5@2x.png",
      alt: "Tool 6",
      width: "w-[89.95px]",
    },
    {
      id: 7,
      src: "/SEO/ca/image-46-6@2x.png",
      alt: "Tool 7",
      width: "w-[89.95px]",
    },
    {
      id: 8,
      src: "/SEO/ca/image-46-8@2x.png",
      alt: "Tool 8",
      width: "w-[89.95px]",
    },
    {
      id: 9,
      src: "/SEO/ca/image-46-8@2x.png",
      alt: "Tool 9",
      width: "w-[89.95px]",
    },
    {
      id: 10,
      src: "/SEO/ca/image-46-9@2x.png",
      alt: "Tool 10",
      width: "w-[67.48px]",
    },
  ];

  return (
    <section className="relative w-full bg-[#a2d1ff66] overflow-hidden py-8 lg:py-16">
      <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto px-4 lg:gap-4 lg:px-0">
        <div className="w-full max-w-[238px] justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-300 flex items-center">
          <div className="flex w-full max-w-[222px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px]">
            <img
              className="relative w-3 h-3 lg:w-[15px] lg:h-[15px]"
              alt="Stars"
              src="/SEO/ca/stars-2.svg"
            />

            <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-xs tracking-[0] leading-[20px] whitespace-nowrap lg:text-sm lg:leading-[23px]">
              We Don&apos;t Guess, We Use Data.
            </p>
          </div>
        </div>

        <header className="flex flex-col h-auto items-center gap-3 relative self-stretch w-full lg:h-44 lg:gap-4">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl text-center tracking-[0] leading-[24px] md:text-3xl md:leading-[36px] lg:text-[50px] lg:leading-[57px]">
            Tools Behind Our Performance
          </h2>

          <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-sm text-center tracking-[0] leading-[20px] lg:text-base lg:leading-[23px]">
            We use industry-leading tools to plan smarter, optimize faster, and
            deliver real results.
          </p>
        </header>
      </div>

      <div className="w-full flex justify-center mt-8 lg:mt-16">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 w-full max-w-7xl px-4 lg:gap-x-14 lg:gap-y-8">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-center w-16 h-16 bg-primary-75 rounded-full lg:w-[105px] lg:h-[105px]"
            >
              <img
                className="w-8 h-8 object-contain lg:w-12 lg:h-12"
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
