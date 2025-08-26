import React from "react";

const TestimonialsSection: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-[2000px] mx-auto">
            <div className="flex flex-col w-full lg:w-[552px] items-start gap-3 sm:gap-4 relative">
                <div className="flex w-full max-w-[171px] sm:w-[140px] items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-[5px] relative bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                        className="relative w-[15px] h-[15px]"
                        alt="Stars"
                        src="/About/ca/stars-2.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        Your Growth Partner
                    </div>
                </div>

                <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-[18px] relative w-full">
                    <h2 className="w-full font-sans font-bold text-primary-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[46px] lg:leading-[57px]">
                        More Than a Marketing Agency
                    </h2>

                    <div className="w-full font-sans font-medium text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[26px] md:leading-[30px]">
                        <p className="mb-[20px] sm:mb-[30px]">
                            Founded in 2018 by a team of data scientists and creative minds,
                            our agency was born from the frustration of seeing businesses
                            struggle with generic marketing solutions that promised everything
                            but delivered little.
                        </p>
                        <p className="mb-[20px] sm:mb-[30px]">
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

            {/* Image Section: only visible on lg and above */}
            <div className="hidden lg:flex w-full max-w-[528px] relative justify-center items-center">
                <div className="w-full">
                    <div className="relative w-full h-auto min-h-[490px]">
                        <img
                            className="absolute w-full h-auto top-1.5 left-3.5"
                            alt="Background pattern"
                            src="/About/ca/background-pattern.svg"
                        />

                        <img
                            className="absolute w-full h-auto top-0 left-3.5 aspect-[0.99]"
                            alt="Marketing agency team member"
                            src="/About/ca/image-2.png"
                        />

                        <div className="flex w-[180px] sm:w-[221px] items-center gap-2 sm:gap-3 px-3 sm:px-[12.61px] py-3 sm:py-[16.66px] absolute top-4 sm:top-[27px] left-0 bg-neutral-0 rounded-lg sm:rounded-[9.95px] border border-solid border-primary-400 shadow-md sm:shadow-[0px_3.51px_11.05px_#2e97ffa1]">
                            <img
                                className="relative w-6 h-6 aspect-[1]"
                                alt="Location icon"
                                src="/About/ca/component-2-variant3.svg"
                            />

                            <div className="flex flex-col w-[149.31px] items-start gap-[7.89px] relative">
                                <p className="w-full font-sans font-medium text-neutral-800 text-xs sm:text-[12.3px] leading-tight sm:leading-[13.5px]">
                                    Reach Users Locally Or Globally
                                </p>

                                <p className="w-full font-sans font-medium text-neutral-600 text-[10px] sm:text-[10.5px] leading-tight sm:leading-[11.6px]">
                                    Get A Free Strategy Call Now !
                                </p>
                            </div>
                        </div>

                        <img
                            className="absolute w-[252px] h-[66px] top-[418px] left-[137px]"
                            alt="Statistics frame"
                            src="/About/ca/frame-2121457620.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;


