import React from "react";

export const ToolsSection: React.FC = () => {
    const toolsData = [
        {
            id: 1,
            src: "/Google/ca/image-46@2x.png",
            alt: "Tool 1",
            width: "w-[22.47px]",
        },
        {
            id: 2,
            src: "/Google/ca/image-46-4@2x.png",
            alt: "Tool 2",
            width: "w-[89.95px]",
        },
        {
            id: 3,
            src: "/Google/ca/image-46-6@2x.png",
            alt: "Tool 3",
            width: "w-[89.95px]",
        },
        {
            id: 4,
            src: "/Google/ca/image-46-3@2x.png",
            alt: "Tool 4",
            width: "w-[89.95px]",
        },
        {
            id: 5,
            src: "/Google/ca/image-46-4@2x.png",
            alt: "Tool 5",
            width: "w-[89.95px]",
        },
        {
            id: 6,
            src: "/Google/ca/image-46-5@2x.png",
            alt: "Tool 6",
            width: "w-[89.95px]",
        },
        {
            id: 7,
            src: "/Google/ca/image-46-6@2x.png",
            alt: "Tool 7",
            width: "w-[89.95px]",
        },
        {
            id: 8,
            src: "/Google/ca/image-46-8@2x.png",
            alt: "Tool 8",
            width: "w-[89.95px]",
        },
        {
            id: 9,
            src: "/Google/ca/image-46-8@2x.png",
            alt: "Tool 9",
            width: "w-[89.95px]",
        },
        {
            id: 10,
            src: "/Google/ca/image-46-9@2x.png",
            alt: "Tool 10",
            width: "w-[67.48px]",
        },
    ];

    return (
        <section className="relative self-stretch w-full h-auto lg:h-[519px] bg-[#a2d1ff66] overflow-hidden py-8 lg:py-0">
            <div className="flex-col w-full max-w-[565px] gap-4 relative lg:absolute lg:top-[66px] lg:left-[418px] flex items-center px-4 lg:px-0 mx-auto lg:mx-0">
                <div className="w-full max-w-[238px] justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-300 flex items-center">
                    <div className="flex w-full max-w-[222px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px]">
                        <img
                            className="relative w-[15px] h-[15px]"
                            alt="Stars"
                            src="/Google/ca/stars-2.svg"
                        />

                        <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
                            We Don&apos;t Guess, We Use Data.
                        </p>
                    </div>
                </div>

                <header className="flex flex-col h-auto lg:h-44 items-center gap-4 relative self-stretch w-full">
                    <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-2xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]">
                        Tools Behind Our Performance
                    </h2>

                    <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
                        We use industry-leading tools to plan smarter, optimize faster, and
                        deliver real results.
                    </p>
                </header>
            </div>

            <div className="flex w-full max-w-[1590px] items-start gap-2.5 relative lg:absolute lg:top-[349px] lg:left-[-75px] overflow-hidden px-4 lg:px-0 mt-8 lg:mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap w-full lg:w-[1635px] items-center gap-4 lg:gap-[74px_55px] relative justify-center">
                    {toolsData.map((tool) => (
                        <div
                            key={tool.id}
                            className="flex w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] items-center justify-center gap-[7px] p-[7px] relative bg-primary-75 rounded-[481.6px] mx-auto"
                        >
                            <img
                                className={`w-[60px] lg:${tool.width} relative h-[60px] lg:h-[104.15px] lg:mt-[-6.58px] lg:mb-[-6.58px] aspect-[0.86] object-contain`}
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