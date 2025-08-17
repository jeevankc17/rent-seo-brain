import React from "react";

const TestimonialsSection: React.FC = () => {
    return (
        <section className="inline-flex items-start gap-12 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[552px] items-start gap-4 relative">
                <div className="flex w-[171px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                        className="relative w-[15px] h-[15px]"
                        alt="Stars"
                        src="https://c.animaapp.com/zvzHaAwZ/img/stars-2.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        Your Growth Partner
                    </div>
                </div>

                <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                    <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] tracking-[0] leading-[57px]">
                        More Than a Marketing Agency
                    </h2>

                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-base tracking-[0] leading-[30px]">
                        <p className="mb-[30px]">
                            Founded in 2018 by a team of data scientists and creative minds,
                            our agency was born from the frustration of seeing businesses
                            struggle with generic marketing solutions that promised everything
                            but delivered little.
                        </p>
                        <p className="mb-[30px]">
                            We believe in the power of authentic storytelling combined with
                            data-driven strategies. Our mission is simple: to help brands not
                            just grow, but thrive in an increasingly digital world by focusing
                            on what truly matters—meaningful connections with their audience.
                        </p>
                        <p>
                            Every campaign we create, every strategy we develop, and every
                            design we craft is built on one core philosophy: transparency,
                            measurable results, and genuine partnership with our clients.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-[528px] h-[505px]">
                <div className="h-[505px]">
                    <div className="relative w-[542px] h-[573px] -top-1.5 -left-3.5">
                        <img
                            className="absolute w-[528px] h-[567px] top-1.5 left-3.5"
                            alt="Background pattern"
                            src="https://c.animaapp.com/zvzHaAwZ/img/background-pattern.svg"
                        />

                        <img
                            className="absolute w-[506px] h-[511px] top-0 left-3.5 aspect-[0.99]"
                            alt="Marketing agency team member"
                            src="https://c.animaapp.com/zvzHaAwZ/img/image-2.png"
                        />

                        <div className="flex w-[221px] items-center gap-[11.94px] px-[12.61px] py-[16.66px] absolute top-[27px] left-0 bg-neutral-0 rounded-[9.95px] border-[0.88px] border-solid border-primary-400 shadow-[0px_3.51px_11.05px_#2e97ffa1]">
                            <img
                                className="relative w-6 h-6 aspect-[1]"
                                alt="Location icon"
                                src="https://c.animaapp.com/zvzHaAwZ/img/component-2-variant3.svg"
                            />

                            <div className="flex flex-col w-[149.31px] items-start gap-[7.89px] relative">
                                <p className="relative w-[149.09px] mt-[-0.66px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-[12.3px] tracking-[-0.06px] leading-[13.5px]">
                                    Reach Users Locally Or Globally
                                </p>

                                <p className="relative w-[149.09px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-70 text-[10.5px] tracking-[-0.05px] leading-[11.6px]">
                                    Get A Free Strategy Call Now !
                                </p>
                            </div>
                        </div>

                        <img
                            className="absolute w-[252px] h-[66px] top-[418px] left-[137px]"
                            alt="Statistics frame"
                            src="https://c.animaapp.com/zvzHaAwZ/img/frame-2121457620.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;


