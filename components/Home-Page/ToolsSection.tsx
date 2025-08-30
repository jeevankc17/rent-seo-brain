import React from "react";

export const ToolsSection: React.FC = () => {
  const toolsData = [
    {
      id: 1,
      src: "/Home-Page/ca/image-46@2x.png",
      alt: "Tool 1",
      width: "w-[22.47px]",
    },
    {
      id: 2,
      src: "/Home-Page/ca/image-46-4@2x.png",
      alt: "Tool 2",
      width: "w-[89.95px]",
    },
    {
      id: 3,
      src: "/Home-Page/ca/image-46-6@2x.png",
      alt: "Tool 3",
      width: "w-[89.95px]",
    },
    {
      id: 4,
      src: "/Home-Page/ca/image-46-3@2x.png",
      alt: "Tool 4",
      width: "w-[89.95px]",
    },
    {
      id: 5,
      src: "/Home-Page/ca/image-46-4@2x.png",
      alt: "Tool 5",
      width: "w-[89.95px]",
    },
    {
      id: 6,
      src: "/Home-Page/ca/image-46-5@2x.png",
      alt: "Tool 6",
      width: "w-[89.95px]",
    },
    {
      id: 7,
      src: "/Home-Page/ca/image-46-6@2x.png",
      alt: "Tool 7",
      width: "w-[89.95px]",
    },
    {
      id: 8,
      src: "/Home-Page/ca/image-46-8@2x.png",
      alt: "Tool 8",
      width: "w-[89.95px]",
    },
    {
      id: 9,
      src: "/Home-Page/ca/image-46-8@2x.png",
      alt: "Tool 9",
      width: "w-[89.95px]",
    },
    {
      id: 10,
      src: "/Home-Page/ca/image-46-9@2x.png",
      alt: "Tool 10",
      width: "w-[67.48px]",
    },
  ];

  return (
    <section className="relative w-full bg-[#a2d1ff66]">
      <div className="w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-[238px] justify-center gap-1.5 px-0 py-[5px] rounded-[35px] lg:rounded-[45px] border border-solid border-secondary-300 flex items-center">
            <div className="flex w-full max-w-[222px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[35px] lg:rounded-[45px]">
              <img
                className="relative w-[15px] h-[15px]"
                alt="Stars"
                src="/Home-Page/ca/stars-2.svg"
              />

              <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
                We Don&apos;t Guess, We Use Data.
              </p>
            </div>
          </div>

          <header className="flex flex-col items-center gap-4 w-full">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-3xl md:text-4xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
              Professional SEO Tools We Use{" "}
            </h2>

            <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-sm md:text-base lg:text-base text-center tracking-[0] leading-[18px] md:leading-[20px] lg:leading-[23px]">
              We use industry-leading tools to plan smarter, optimize faster, and
              deliver real results.
            </p>
          </header>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-[74px_55px] w-full mt-8 lg:mt-12">
            {toolsData.map((tool) => (
              <div
                key={tool.id}
                className="flex w-16 h-16 lg:w-[105px] lg:h-[105px] items-center justify-center gap-[7px] p-1 lg:p-[7px] relative bg-primary-75 rounded-full"
              >
                <img
                  className="relative w-12 h-12 lg:w-16 lg:h-16 object-contain"
                  alt={tool.alt}
                  src={tool.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
