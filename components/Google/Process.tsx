import React from "react";

export const ProcessSection: React.FC = () => {
    const statsData = [
        {
            icon: "https://c.animaapp.com/1pza1gM1/img/openmoji-timer.svg",
            percentage: "70%",
            description: "Faster Creative Turnaround",
            shadowColor: "shadow-[0px_1px_27.4px_#2e97ff5e]",
        },
        {
            icon: "https://c.animaapp.com/1pza1gM1/img/streamline-stickies-color-graph-bar.svg",
            percentage: "85%",
            description: "Less Manual Optimization",
            shadowColor: "shadow-[0px_1px_27.4px_#ffffff36]",
        },
        {
            icon: "https://c.animaapp.com/1pza1gM1/img/streamline-stickies-color-graph-pie-duo.svg",
            percentage: "38%",
            description: "Higher Click-Through Rates",
            shadowColor: "shadow-[0px_1px_27.4px_#bbff004c]",
        },
        {
            icon: "https://c.animaapp.com/1pza1gM1/img/streamline-stickies-color-pile-of-money-duo.svg",
            percentage: "3x",
            description: "Better Return on Ad Spend",
            shadowColor: "shadow-[0px_1px_27.4px_#00b45c4c]",
        },
        {
            icon: "https://c.animaapp.com/1pza1gM1/img/fluent-emoji-flat-puzzle-piece.svg",
            percentage: "8+",
            description: "Platforms We Support",
            shadowColor: "shadow-[0px_1px_27.4px_#ff980038]",
        },
        {
            icon: "https://c.animaapp.com/1pza1gM1/img/openmoji-direct-hit.svg",
            percentage: "70%",
            description: "Lower Customer Acquisition",
            shadowColor: "shadow-[0px_1px_27.4px_#2e97ff5e]",
        },
    ];

    return (
        <section
            className="relative w-full h-[840px] bg-neutral-900 overflow-hidden"
            role="region"
            aria-labelledby="process-section-heading"
        >
            <div className="relative w-[1780px] h-[670px] top-[85px] left-[-172px]">
                <div
                    className="top-44 left-[1316px] absolute w-[464px] h-[403px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]"
                    aria-hidden="true"
                />

                <div
                    className="top-[153px] left-0 absolute w-[464px] h-[403px] bg-[#2e97ffa1] rounded-[232px/201.63px] blur-[365.85px]"
                    aria-hidden="true"
                />

                <div className="flex flex-col w-[1120px] items-center gap-[50px] absolute top-0 left-[332px]">
                    <header className="flex flex-col w-[552px] items-center justify-center gap-4 relative flex-[0_0_auto]">
                        <div className="w-[203px] px-2.5 py-[5px] bg-primary-500 flex items-center justify-center gap-1.5 relative flex-[0_0_auto] rounded-[45px]">
                            <img
                                className="relative w-[15px] h-[15px]"
                                alt=""
                                src="https://c.animaapp.com/1pza1gM1/img/stars-1.svg"
                                aria-hidden="true"
                            />

                            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                                Implementation Process
                            </span>
                        </div>

                        <div className="flex flex-col h-[119px] items-center gap-4 relative self-stretch w-full">
                            <h2
                                id="process-section-heading"
                                className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-50 text-[50px] text-center tracking-[0] leading-[57px]"
                            >
                                By the Numbers
                            </h2>

                            <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-30 text-base text-center tracking-[0] leading-[23px]">
                                Here&apos;s how RENT SEO BRAIN delivers real results through
                                data-driven Google Ads strategies.
                            </p>
                        </div>
                    </header>

                    <div
                        className="flex flex-wrap items-start gap-[69px_164px] relative self-stretch w-full flex-[0_0_auto]"
                        role="list"
                    >
                        {statsData.map((stat, index) => (
                            <article
                                key={index}
                                className={`flex flex-col w-[264px] items-center gap-3.5 px-[9px] py-[25px] relative rounded-xl border border-solid border-neutral-800 ${stat.shadowColor}`}
                                role="listitem"
                            >
                                <img
                                    className="relative w-[55.52px] h-[55.52px] aspect-[1]"
                                    alt=""
                                    src={stat.icon}
                                    aria-hidden="true"
                                />

                                <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-neutral-0 text-[28px] text-center tracking-[0] leading-[34px]">
                                        {stat.percentage}
                                    </div>

                                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-0 text-lg text-center tracking-[0] leading-[34px]">
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

