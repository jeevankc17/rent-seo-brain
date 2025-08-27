import React from "react";

export const ProcessSection: React.FC = () => {
    const statsData = [
        {
            icon: "/Google/ca/openmoji-timer.svg",
            percentage: "70%",
            description: "Faster Creative Turnaround",
            shadowColor: "shadow-[0px_1px_27.4px_#2e97ff5e]",
        },
        {
            icon: "/Google/ca/streamline-stickies-color-graph-bar.svg",
            percentage: "85%",
            description: "Less Manual Optimization",
            shadowColor: "shadow-[0px_1px_27.4px_#ffffff36]",
        },
        {
            icon: "/Google/ca/streamline-stickies-color-graph-pie-duo.svg",
            percentage: "38%",
            description: "Higher Click-Through Rates",
            shadowColor: "shadow-[0px_1px_27.4px_#bbff004c]",
        },
        {
            icon: "/Google/ca/streamline-stickies-color-pile-of-money-duo.svg",
            percentage: "3x",
            description: "Better Return on Ad Spend",
            shadowColor: "shadow-[0px_1px_27.4px_#00b45c4c]",
        },
        {
            icon: "/Google/ca/fluent-emoji-flat-puzzle-piece.svg",
            percentage: "8+",
            description: "Platforms We Support",
            shadowColor: "shadow-[0px_1px_27.4px_#ff980038]",
        },
        {
            icon: "/Google/ca/openmoji-direct-hit.svg",
            percentage: "70%",
            description: "Lower Customer Acquisition",
            shadowColor: "shadow-[0px_1px_27.4px_#2e97ff5e]",
        },
    ];

    return (
        <section
            className="relative w-full bg-neutral-900 overflow-hidden"
            role="region"
            aria-labelledby="process-section-heading"
        >
            <div className="relative w-full mx-auto px-4 md:px-8 lg:px-0">
                <div
                    className="hidden lg:block top-44 left-[1316px] absolute w-[464px] h-[403px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]"
                    aria-hidden="true"
                />

                <div
                    className="hidden lg:block top-[153px] left-0 absolute w-[464px] h-[403px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]"
                    aria-hidden="true"
                />

                <div className="flex flex-col items-center gap-8 lg:gap-[50px] w-full py-8 lg:py-12">
                    <header className="flex flex-col items-center justify-center gap-4 w-full max-w-[552px]">
                        <div className="w-full max-w-[203px] px-2.5 py-[5px] bg-primary-500 flex items-center justify-center gap-1.5 relative flex-[0_0_auto] rounded-[45px]">
                            <img
                                className="relative w-[15px] h-[15px]"
                                alt=""
                                src="/Google/ca/stars-1.svg"
                                aria-hidden="true"
                            />

                            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
                                Implementation Process
                            </span>
                        </div>

                        <div className="flex flex-col h-[119px] items-center gap-4 relative self-stretch w-full">
                            <h2
                                id="process-section-heading"
                                className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-50 text-xl sm:text-2xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]"
                            >
                                By the Numbers
                            </h2>

                            <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-30 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
                                Here&apos;s how RENT SEO BRAIN delivers real results through
                                data-driven Google Ads strategies.
                            </p>
                        </div>
                    </header>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1120px] px-4 lg:px-0"
                        role="list"
                    >
                        {statsData.map((stat, index) => (
                            <article
                                key={index}
                                className={`flex flex-col w-full max-w-[264px] items-center gap-3.5 px-2 lg:px-[9px] py-4 lg:py-[25px] relative rounded-xl border border-solid border-neutral-800 ${stat.shadowColor} mx-auto`}
                                role="listitem"
                            >
                                <img
                                    className="relative w-[45px] h-[45px] lg:w-[55.52px] lg:h-[55.52px] aspect-[1]"
                                    alt=""
                                    src={stat.icon}
                                    aria-hidden="true"
                                />

                                <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-neutral-0 text-xl lg:text-[28px] text-center tracking-[0] leading-[24px] lg:leading-[34px]">
                                        {stat.percentage}
                                    </div>

                                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-0 text-base lg:text-lg text-center tracking-[0] leading-[20px] lg:leading-[34px]">
                                        {stat.description}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
