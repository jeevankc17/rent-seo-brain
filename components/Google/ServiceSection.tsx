import React from "react";

export const ServicesSection: React.FC = () => {
    // Data for service features
    const serviceFeatures = [
        {
            title: "Certified Google Ads Experts",
            description:
                "Our team is made up of certified professionals who live and breathe Google Ads. We stay ahead of the curve .",
        },
        {
            title: "Proven ROI-Focused Strategies",
            description:
                "We don't just create ads — we build revenue-generating systems. Every campaign is optimized for conversions.",
        },
        {
            title: "Transparent Reporting",
            description:
                "We believe in clear communication. Our in-depth reports give you a complete view of your campaign performance.",
        },
        {
            title: "Industry-Specific Campaign Experience",
            description:
                "From e-commerce to local services, healthcare to real estate — we've run successful Google Ads campaigns.",
        },
    ];

    // Data for user avatars
    const userAvatars = [
        "https://c.animaapp.com/1pza1gM1/img/shape@2x.png",
        "https://c.animaapp.com/1pza1gM1/img/shape-1@2x.png",
        "https://c.animaapp.com/1pza1gM1/img/shape-2@2x.png",
    ];

    return (
        <section className="flex flex-col w-[1128px] items-center justify-center gap-[50px] relative flex-[0_0_auto]">
            <header className="flex flex-col w-[565px] items-center gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[164px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                        className="relative w-[15px] h-[15px]"
                        alt="Stars"
                        src="https://c.animaapp.com/1pza1gM1/img/stars.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        What Set Us Apart
                    </div>
                </div>

                <div className="flex flex-col h-44 items-center gap-4 relative self-stretch w-full">
                    <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
                        Why RENT SEO BRAIN for Google Ads?
                    </h1>

                    <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
                        Smart strategy meets expert execution — here&apos;s what makes us
                        your ideal partner.
                    </p>
                </div>
            </header>

            <div className="flex flex-col items-center gap-14 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-14 px-[41px] py-12 relative self-stretch w-full flex-[0_0_auto] bg-neutral-0 rounded-[25px] shadow-[2px_4px_21.3px_#0083ffba]">
                    <div className="inline-flex items-center justify-center gap-[52px] relative flex-[0_0_auto]">
                        <div className="flex flex-col w-[480px] items-start gap-[57px] relative">
                            {serviceFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-start gap-2 self-stretch w-full relative flex-[0_0_auto]"
                                >
                                    <div className="flex items-center gap-2.5 pl-5 pr-2.5 py-[11px] relative self-stretch w-full flex-[0_0_auto] mt-[-2.50px] ml-[-2.50px] mr-[-2.50px] border-l-[5px] [border-left-style:solid] border-primary-300">
                                        <h3 className="relative w-fit mt-[-2.50px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-2xl tracking-[0] leading-[23px]">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-grey-400 text-base tracking-[0] leading-[23px]">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-[528px] h-[567px] mr-[-18.00px] bg-[url(https://c.animaapp.com/1pza1gM1/img/background-pattern.svg)] bg-[100%_100%]">
                        <div className="flex w-[350px] items-center gap-[13.11px] px-[21.85px] py-2.5 absolute top-[26px] left-0 bg-grey-50 rounded-[21.85px] shadow-[0px_3.06px_6.89px_#0083ff36]">
                            <img
                                className="relative w-[56.81px] h-[56.81px]"
                                alt="History"
                                src="https://c.animaapp.com/1pza1gM1/img/history.svg"
                            />

                            <div className="flex w-[134.38px] gap-[4.37px] flex-col items-start relative">
                                <div className="relative w-[264px] mt-[-1.09px] mr-[-129.62px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-500 text-sm tracking-[0] leading-[16.8px]">
                                    We Build Revenue-generating Systems.
                                </div>

                                <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-xl tracking-[0] leading-[24.0px]">
                                    6790.67 EUR
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[374px] items-center gap-[17.13px] px-[18px] py-[22px] absolute top-[416px] left-[34px] bg-grey-50 rounded-[28.55px] shadow-[0px_4px_9px_#0083ff36]">
                            <div className="inline-flex items-center gap-[var(--size-space-200)] relative flex-[0_0_auto]">
                                <div className="inline-flex items-center relative flex-[0_0_auto] gap-[var(--size-space-negative-200)]">
                                    {userAvatars.map((avatar, index) => (
                                        <div
                                            key={index}
                                            className={`relative w-[45.17px] h-[45.17px] rounded-[9915.81px] shadow-drop-shadow-200 bg-cover bg-[50%_50%] ${index > 0 ? "-ml-2" : ""}`}
                                            style={{ backgroundImage: `url(${avatar})` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex w-[207px] mr-[-5.65px] flex-col items-start relative">
                                <p className="relative self-stretch mt-[-1.43px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-lg tracking-[0] leading-[21.6px]">
                                    <span className="font-semibold text-neutral-900">12,456+ </span>

                                    <span className="font-medium text-primary-300 text-sm leading-[16.8px]">
                                        Trusted Users
                                    </span>
                                </p>

                                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-500 text-sm tracking-[0] leading-[16.8px]">
                                    Every Client Gets Personalized Attention.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[314px] items-start justify-center gap-2.5 px-3 py-5 absolute top-[187px] left-[194px] bg-neutral-0 rounded-[13px] border border-solid border-neutral-900 shadow-[0px_4px_0px_#ff9800]">
                            <div className="flex w-[285px] items-center justify-center gap-[3px] px-5 py-0 relative flex-[0_0_auto] bg-neutral-0 rounded-[20px]">
                                <div className="flex w-[235px] items-end gap-3 relative ml-[-10.50px]">
                                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-700 text-sm tracking-[0] leading-[16.8px]">
                                            Your success is always our top priority.
                                        </p>
                                    </div>
                                </div>

                                <div className="inline-flex h-7 items-center justify-center gap-3 p-1.5 relative flex-[0_0_auto] mr-[-10.50px] bg-primary-75 rounded-[655px]">
                                    <div className="inline-flex flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px] flex-col items-start relative">
                                        <div className="font-normal text-neutral-700 text-base leading-[19.2px] relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                                            😍
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                                <button className="flex w-[161px] items-center justify-center gap-3 px-2.5 py-[7px] relative bg-primary-300 rounded-[20px] border-0 cursor-pointer">
                                    <div className="inline-flex items-end gap-3 relative flex-[0_0_auto]">
                                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-50 text-xs tracking-[0] leading-[14.4px]">
                                                Let&apos;s Get Connected
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                <button className="flex w-[87px] items-center justify-center gap-3 px-2.5 py-[7px] relative bg-secondary-50 rounded-[20px] border border-solid border-secondary-300 cursor-pointer">
                                    <div className="inline-flex items-end gap-3 relative flex-[0_0_auto]">
                                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-xs tracking-[0] leading-[14.4px]">
                                                Free Audit
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inline-flex items-center justify-center gap-[22px] relative flex-[0_0_auto]">
                    <button className="flex w-[248px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] border-0 cursor-pointer">
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
                            Let&apos;s Maximize Your Roi
                        </div>

                        <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
                            <img
                                className="relative w-5 h-5"
                                alt="Arrow right"
                                src="https://c.animaapp.com/1pza1gM1/img/arrow-right.svg"
                            />
                        </div>
                    </button>

                    <button className="all-[unset] box-border flex w-[172px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200 cursor-pointer">
                        <div className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-base tracking-[0] leading-4 whitespace-nowrap">
                            Learn More
                        </div>

                        <img
                            className="relative w-5 h-5"
                            alt="Arrow right"
                            src="https://c.animaapp.com/1pza1gM1/img/arrow-right-1.svg"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};



