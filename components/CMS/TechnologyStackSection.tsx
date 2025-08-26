export const TechnologyStackSection: React.FC = () => {
  const techStackData = [
    {
      id: 1,
      name: "Tool 1",
      image: "/cms/ca/image-137@2x.png",
    },
    {
      id: 2,
      name: "Tool 2",
      image: "/cms/ca/image-138@2x.png",
    },
    {
      id: 3,
      name: "Tool 3",
      image: "/cms/ca/image-139@2x.png",
    },
    {
      id: 4,
      name: "Tool 4",
      image: "/cms/ca/image-140@2x.png",
    },
    {
      id: 5,
      name: "Tool 5",
      image: "/cms/ca/image-141@2x.png",
    },
  ];

  return (
    <section
      className="relative w-full max-w-[1128px] mx-auto px-4 md:px-6 lg:px-0 py-8 md:py-12 lg:py-16"
      aria-labelledby="tech-stack-heading"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[50px] mb-8 md:mb-12 lg:mb-16">
        <header className="flex flex-col w-full max-w-md md:max-w-lg lg:max-w-[565px] items-center gap-4 relative">
          {/* Tag */}
          <div className="flex w-auto items-center justify-center gap-1.5 px-2.5 py-[5px] relative bg-primary-50 rounded-[45px] border border-solid border-primary-300">
            <img
              className="relative w-3 h-3 md:w-[15px] md:h-[15px]"
              alt=""
              src="/cms/ca/stars-1.svg"
              role="presentation"
            />
            <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs md:text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              Our Tech Stack
            </span>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col items-center gap-4 relative w-full">
            <h2
              id="tech-stack-heading"
              className="relative w-full [font-family:'Urbanist',Helvetica] font-bold text-neutral-900 text-xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-tight md:leading-[40px] lg:leading-[57px]"
            >
              Tools That Power
              <br />
              Our Pages
            </h2>

            <p className="relative w-full max-w-sm md:max-w-md lg:max-w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm md:text-base text-center tracking-[0] leading-relaxed md:leading-[23px]">
              We leverage the best tools in the industry to create, optimize,
              and distribute content that drives results.
            </p>
          </div>
        </header>
      </div>

      {/* Tech Stack Visualization */}
      <div className="relative w-full flex justify-center">
        {/* Mobile: Simple Grid Layout */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 lg:hidden w-full max-w-xs">
          {techStackData.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-center p-3 md:p-4 bg-white rounded-xl border border-primary-100 shadow-sm"
            >
              <img
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                alt={tool.name}
                src={tool.image}
              />
            </div>
          ))}
        </div>

        {/* Desktop: Circular Layout */}
        <div className="hidden lg:block relative w-[762px] h-[458px] overflow-hidden">
          <div className="h-[790px]">
            <div className="relative w-[762px] h-[790px]">
              {/* Circular Borders */}
              <div className="absolute w-[762px] h-[762px] top-7 left-0 rounded-[381px] border border-solid border-primary-100 shadow-[0px_4px_9.6px_rgba(19,42,64,0.3)]" />
              <div className="absolute w-[610px] h-[610px] top-[104px] left-[77px] rounded-[305px] border-[0.8px] border-solid border-primary-100 shadow-[0px_4.13px_9.91px_rgba(19,42,64,0.3)]" />
              <div className="absolute w-[469px] h-[469px] top-[193px] left-[147px] rounded-[234.5px] border-[0.62px] border-solid border-primary-100 shadow-[0px_3.17px_7.62px_rgba(19,42,64,0.3)]" />

              {/* Tool Icons with Original Positions */}
              <img
                className="absolute w-[45px] h-[47px]"
                style={{ top: "291px", left: "564px" }}
                alt="Tool 1"
                src="/cms/ca/image-137@2x.png"
              />
              <img
                className="absolute w-[45px] h-[45px]"
                style={{ top: "162px", left: "155px" }}
                alt="Tool 2"
                src="/cms/ca/image-138@2x.png"
              />
              <img
                className="absolute w-[45px] h-[58px]"
                style={{ top: "0", left: "390px" }}
                alt="Tool 3"
                src="/cms/ca/image-139@2x.png"
              />
              <img
                className="absolute w-[45px] h-[41px] object-cover"
                style={{ top: "125px", left: "635px" }}
                alt="Tool 4"
                src="/cms/ca/image-140@2x.png"
              />
              <img
                className="absolute w-[45px] h-[30px]"
                style={{ top: "299px", left: "147px" }}
                alt="Tool 5"
                src="/cms/ca/image-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
