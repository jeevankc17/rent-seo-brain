export const TechnologyStackSection: React.FC = () => {
  const techStackData = [
    {
      id: 1,
      name: "Tool 1",
      image: "/LP/Figma.png",
      position: { top: "291px", left: "564px" },
      size: { width: "45px", height: "47px" },
      aspectRatio: "0.96",
    },
    {
      id: 2,
      name: "Tool 2",
      image: "/LP/w.png",
      position: { top: "162px", left: "155px" },
      size: { width: "45px", height: "45px" },
      aspectRatio: "0.99",
    },
    {
      id: 3,
      name: "Tool 3",
      image: "/LP/circ.png",
      position: { top: "0", left: "390px" },
      size: { width: "45px", height: "58px" },
      aspectRatio: "0.73",
    },
    {
      id: 4,
      name: "Tool 4",
      image: "/LP/f.png",
      position: { top: "125px", left: "635px" },
      size: { width: "45px", height: "41px" },
      aspectRatio: "1.09",
    },
  ];

  return (
    <section
      className="relative w-full max-w-[1128px] mx-auto h-[735px] "
      aria-labelledby="tech-stack-heading"
    >
      <div className="w-[762px] gap-[50px] absolute top-0 left-[183px] flex flex-col items-center">
        <header className="flex flex-col w-[565px] items-center gap-4 relative flex-[0_0_auto]">
          <div className="flex w-[142px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
            <img
              className="relative w-[15px] h-[15px]"
              alt=""
              src="https://c.animaapp.com/UUifjI9s/img/stars-1.svg"
              role="presentation"
            />
            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              Our Tech Stack
            </span>
          </div>

          <div className="flex flex-col h-44 items-center gap-4 relative self-stretch w-full">
            <h2
              id="tech-stack-heading"
              className="relative w-[641px] mt-[-1.00px] ml-[-38.00px] mr-[-38.00px] [font-family:'Urbanist',Helvetica] font-bold text-blue-500 text-[50px] text-center tracking-[0] leading-[57px]"
            >
              Tools That Power
              <br />
              Our Pages
            </h2>

            <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
              We use industry-leading tools to design, develop, and optimize
              your landing pages
            </p>
          </div>
        </header>
      </div>

      <div className="absolute w-[762px] h-[458px] top-[277px] left-[183px] overflow-hidden">
        <div className="h-[790px]">
          <div className="relative w-[762px] h-[790px]">
            <div className="absolute w-[762px] h-[762px] top-7 left-0 rounded-[381px] border border-solid border-primary-100 shadow-[0px_4px_9.6px_rgba(19,42,64,0.3)]" />
            <div className="absolute w-[610px] h-[610px] top-[104px] left-[77px] rounded-[305px] border-[0.8px] border-solid border-primary-100 shadow-[0px_4.13px_9.91px_rgba(19,42,64,0.3)]" />
            <div className="absolute w-[469px] h-[469px] top-[193px] left-[147px] rounded-[234.5px] border-[0.62px] border-solid border-primary-100 shadow-[0px_3.17px_7.62px_rgba(19,42,64,0.3)]" />

            {techStackData.map((tool) => (
              <img
                key={tool.id}
                className={`absolute`}
                style={{
                  height: tool.size.height,
                  width: tool.size.width,
                  top: tool.position.top,
                  left: tool.position.left,
                  aspectRatio: tool.aspectRatio,
                  ...(tool.id === 4 && { objectFit: "cover" }),
                }}
                alt={tool.name}
                src={tool.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
