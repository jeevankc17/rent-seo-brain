import React from "react";

export const AdOptionsSection: React.FC = () => {
    const benefits: string[] = [
        "Instantly increase website traffic",
        "Get measurable results and ROI",
        "Outrank competitors with smart bidding",
        "Reach local and global audiences",
    ];

    interface DashboardCard {
        id: number;
        title: string;
        subtitle: string;
        amount?: string;
        usdAmount?: string;
        bgColor: string;
        textColor: string;
        secondaryTextColor?: string;
        icon?: string;
        position: { top: string; left: string };
        opacity?: string;
    }

    const dashboardCards: DashboardCard[] = [
        {
            id: 1,
            title: "Results & ROI",
            subtitle: "From search to sales",
            amount: "5,780 KWD",
            usdAmount: "18,865.80 USD",
            bgColor: "#00b45c",
            textColor: "#fbfbfb",
            position: { top: "27px", left: "201px" },
        },
        {
            id: 2,
            title: "Reach. Engage. Convert.",
            subtitle: "right customers at the right time.",
            bgColor: "primary-300",
            textColor: "primary-50",
            icon: "https://c.animaapp.com/ugwxqeDI/img/crypto-icon.svg",
            position: { top: "130px", left: "134px" },
        },
        {
            id: 3,
            title: "With Rent SEO Brain",
            subtitle: "Powering business growth",
            amount: "1,345 KYD",
            usdAmount: "1,617.67 USD",
            bgColor: "primary-50",
            textColor: "primary-font",
            secondaryTextColor: "secondary-font",
            icon: "https://c.animaapp.com/ugwxqeDI/img/crypto-icon-1.svg",
            position: { top: "336px", left: "134px" },
            opacity: "opacity-50",
        },
    ];

    return (
        <section className="inline-flex items-start justify-center gap-[25px] relative flex-[0_0_auto]">
            <div className="w-[552px] items-start justify-center gap-6 flex flex-col relative">
                <div className="flex w-[251px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                        className="relative w-[15px] h-[15px]"
                        alt="Stars icon"
                        src="https://c.animaapp.com/ugwxqeDI/img/stars-2.svg"
                    />
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        How Google Ads Help Businesses
                    </p>
                </div>

                <div className="flex flex-col items-start gap-[52px] relative self-stretch w-full flex-[0_0_auto]">
                    <header className="flex flex-col h-44 items-start gap-4 relative self-stretch w-full">
                        <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] tracking-[0] leading-[57px]">
                            Reach your audience and drive real business
                        </h1>
                        <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base tracking-[0] leading-[23px]">
                            Google Ads connects you with people actively searching for your
                            products or services. Whether your goal is more leads, more sales,
                            or more visibility.
                        </p>
                    </header>

                    <ul
                        className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]"
                        role="list"
                    >
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
                            >
                                <img
                                    className="relative w-[26px] h-[26px]"
                                    alt="Checkmark icon"
                                    src="https://c.animaapp.com/ugwxqeDI/img/frame-2121457509-3.svg"
                                />
                                <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-600 text-lg tracking-[0] leading-[normal]">
                                    {benefit}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <button className="w-[258px] flex h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:shadow-[0px_6px_20px_#2e97ffa1] transition-shadow duration-300 cursor-pointer">
                        <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
                            Get Your Strategy Session
                        </span>
                        <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
                            <img
                                className="relative w-5 h-5"
                                alt="Arrow right icon"
                                src="https://c.animaapp.com/ugwxqeDI/img/arrow-right-3.svg"
                            />
                        </div>
                    </button>
                </div>
            </div>

            <div
                className="relative w-[636px] h-[552px]"
                role="img"
                aria-label="Google Ads dashboard visualization"
            >
                <div className="relative w-[629px] h-[540px] top-[-5px] -left-4">
                    <div className="absolute w-[402px] h-[434px] top-[106px] left-[186px] bg-white rounded-[23.18px] overflow-hidden shadow-[0px_2.9px_11.88px_5px_#0083ff63]">
                        {dashboardCards.map((card) => (
                            <div
                                key={card.id}
                                className={`flex w-[357px] items-center ${card.amount ? "justify-between" : "gap-[99px]"} px-[15.93px] py-[17.38px] absolute rounded-[11.59px] ${card.opacity || ""}`}
                                style={{
                                    top: card.position.top,
                                    left: card.position.left,
                                    backgroundColor: card.bgColor.startsWith("#")
                                        ? card.bgColor
                                        : `var(--color-${card.bgColor.replace(/-/g, "-")})`,
                                }}
                            >
                                <div className="inline-flex items-center gap-[14.49px] relative flex-[0_0_auto]">
                                    {card.icon && (
                                        <div
                                            className="relative w-[39px] h-[39px] rounded-[18px] bg-cover bg-[50%_50%]"
                                            style={{ backgroundImage: `url(${card.icon})` }}
                                        />
                                    )}
                                    <div
                                        className={`${card.id === 2 ? "flex flex-col w-[31.15px] items-start" : "inline-flex flex-col items-start"} gap-[2.9px] relative`}
                                    >
                                        <div
                                            className={`relative ${card.id === 2 ? "w-[274px] mr-[-242.85px]" : "w-fit"} mt-[-0.72px] [font-family:'Urbanist',Helvetica] font-medium text-[17.4px] tracking-[0] leading-[20.9px] ${card.id === 2 ? "" : "whitespace-nowrap"}`}
                                            style={{
                                                color: card.textColor.startsWith("#")
                                                    ? card.textColor
                                                    : `var(--color-${card.textColor.replace(/-/g, "-")})`,
                                            }}
                                        >
                                            {card.title}
                                        </div>
                                        <div
                                            className={`relative ${card.id === 2 ? "w-[230px] mr-[-198.85px]" : "w-fit"} [font-family:'Urbanist',Helvetica] font-medium text-[11.6px] tracking-[0] leading-[13.9px] ${card.id === 2 ? "" : "whitespace-nowrap"}`}
                                            style={{
                                                color: card.textColor.startsWith("#")
                                                    ? card.textColor
                                                    : `var(--color-${card.textColor.replace(/-/g, "-")})`,
                                            }}
                                        >
                                            {card.subtitle}
                                        </div>
                                    </div>
                                </div>

                                {card.amount && (
                                    <div className="inline-flex flex-col items-end gap-[2.9px] relative flex-[0_0_auto]">
                                        <div
                                            className="relative w-fit mt-[-0.72px] [font-family:'Urbanist',Helvetica] font-medium text-[17.4px] text-right tracking-[0] leading-[20.9px] whitespace-nowrap"
                                            style={{
                                                color: card.textColor.startsWith("#")
                                                    ? card.textColor
                                                    : `var(--color-${card.textColor.replace(/-/g, "-")})`,
                                            }}
                                        >
                                            {card.amount}
                                        </div>
                                        <div
                                            className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[11.6px] text-right tracking-[0] leading-[13.9px] whitespace-nowrap"
                                            style={{
                                                color: card.secondaryTextColor
                                                    ? `var(--color-${card.secondaryTextColor.replace(/-/g, "-")})`
                                                    : card.textColor.startsWith("#")
                                                        ? card.textColor
                                                        : `var(--color-${card.textColor.replace(/-/g, "-")})`,
                                            }}
                                        >
                                            {card.usdAmount}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex w-[343px] h-[77px] items-center justify-between px-[15.17px] py-[16.55px] absolute top-[340px] left-[286px] bg-white rounded-[11.03px] border-[0.69px] border-solid border-black shadow-[0px_2.76px_0px_#ff9800]">
                        <div className="inline-flex items-center gap-[13.79px] relative flex-[0_0_auto]">
                            <div className="bg-[url(https://c.animaapp.com/ugwxqeDI/img/crypto-icon-2.svg)] relative w-[39px] h-[39px] rounded-[18px] bg-cover bg-[50%_50%]" />
                            <div className="inline-flex flex-col items-start gap-[2.76px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-0.69px] [font-family:'Urbanist',Helvetica] font-medium text-primary-font text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                                    Click. Convert. Repeat.
                                </div>
                                <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-secondary-font text-[11px] tracking-[0] leading-[13.2px] whitespace-nowrap">
                                    Increase website Traffic
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-end gap-[2.76px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-0.69px] [font-family:'Urbanist',Helvetica] font-medium text-primary-font text-[16.6px] text-right tracking-[0] leading-[19.9px] whitespace-nowrap">
                                100k+ Users
                            </div>
                            <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-secondary-font text-[11px] text-right tracking-[0] leading-[13.2px] whitespace-nowrap">
                                Reach more.
                            </div>
                        </div>
                    </div>

                    <img
                        className="absolute w-[313px] h-[442px] top-0 left-0 aspect-[0.71]"
                        alt="Professional woman using mobile phone for business"
                        src="https://c.animaapp.com/ugwxqeDI/img/image-56@2x.png"
                    />
                </div>
            </div>
        </section>
    );
};