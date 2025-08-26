export const GoogleTechnologyStackSection: React.FC = () => {
    const techStackData = [
      {
        id: 1,
        name: "Tool 1",
        image: "/Google/ca/instagram.png",
        position: { top: "291px", left: "564px" },
        size: { width: "45px", height: "47px" },
        aspectRatio: "0.96",
      },
      {
        id: 2,
        name: "Tool 2",
        image: "/Google/ca/facebook.png",
        position: { top: "162px", left: "155px" },
        size: { width: "45px", height: "45px" },
        aspectRatio: "0.99",
      },
      {
        id: 3,
        name: "Tool 3",
        image: "/Google/ca/tiktok.png",
        position: { top: "0", left: "390px" },
        size: { width: "45px", height: "58px" },
        aspectRatio: "0.73",
      },
      {
        id: 4,
        name: "Tool 4",
        image: "/Google/ca/snapchat.png",
        position: { top: "125px", left: "635px" },
        size: { width: "45px", height: "41px" },
        aspectRatio: "1.09",
      },
      {
        id: 5,
        name: "Tool 4",
        image: "/Google/ca/linkedin.png",
        position: { top: "45px", left: "535px" },
        size: { width: "45px", height: "41px" },
        aspectRatio: "1.09",
      },
    ];
  
    return (
      <section
        className="relative w-full max-w-[1128px] mx-auto h-auto lg:h-[735px] px-4 lg:px-0"
        aria-labelledby="tech-stack-heading"
      >
        <div className="w-full max-w-[762px] gap-8 lg:gap-[50px] relative lg:absolute lg:top-0 lg:left-[183px] flex flex-col items-center mx-auto">
          <header className="flex flex-col w-full max-w-[565px] items-center gap-4 relative flex-[0_0_auto]">
            <div className="flex w-auto items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
              <img
                className="relative w-[15px] h-[15px]"
                alt=""
                src="/LP/ca/stars-1.svg"
                role="presentation"
              />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                Our Tech Stack
              </span>
            </div>
  
            <div className="flex flex-col h-auto lg:h-44 items-center gap-4 relative self-stretch w-full">
              <h2
                id="tech-stack-heading"
                className="relative w-full max-w-[641px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-blue-500 text-3xl lg:text-[50px] text-center tracking-[0] leading-[40px] lg:leading-[57px]"
              >
                Tools That Power
                <br />
                Our Pages
              </h2>
  
              <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
                We use industry-leading tools to design, develop, and optimize
                your landing pages
              </p>
            </div>
          </header>
        </div>
  
        <div className="relative lg:absolute w-full max-w-[762px] h-auto lg:h-[458px] lg:top-[277px] lg:left-[183px] overflow-hidden mt-8 lg:mt-0 mx-auto">
          <div className="h-auto lg:h-[790px]">
            <div className="relative w-full max-w-[762px] h-auto lg:h-[790px] mx-auto">
              <div className="hidden lg:block absolute w-[762px] h-[762px] top-7 left-0 rounded-[381px] border border-solid border-primary-100 shadow-[0px_4px_9.6px_rgba(19,42,64,0.3)]" />
              <div className="hidden lg:block absolute w-[610px] h-[610px] top-[104px] left-[77px] rounded-[305px] border-[0.8px] border-solid border-primary-100 shadow-[0px_4.13px_9.91px_rgba(19,42,64,0.3)]" />
              <div className="hidden lg:block absolute w-[469px] h-[469px] top-[193px] left-[147px] rounded-[234.5px] border-[0.62px] border-solid border-primary-100 shadow-[0px_3.17px_7.62px_rgba(19,42,64,0.3)]" />
  
              <div className="grid grid-cols-2 lg:hidden gap-6 p-8">
                {techStackData.map((tool) => (
                  <div key={tool.id} className="flex justify-center">
                    <img
                      className="w-12 h-12 object-contain"
                      alt={tool.name}
                      src={tool.image}
                    />
                  </div>
                ))}
              </div>
              
              <div className="hidden lg:block">
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
        </div>
      </section>
    );
  };
  