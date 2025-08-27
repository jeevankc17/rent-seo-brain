import React from "react";

// Add a small interface and type the arrays
interface Value {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

const coreValues: Value[] = [
  {
    title: "Results First",
    description:
      "Every strategy we develop is designed with measurable outcomes.",
    icon: "/About/ca/bar-chart.svg",
    iconAlt: "Bar chart",
  },
  {
    title: "Real Communication",
    description:
      "No black boxes or hidden tactics. We believe in clear, honest communication",
    icon: "/About/ca/trending-up.svg",
    iconAlt: "Trending up",
  },
  {
    title: "Scalable Growth",
    description:
      "We build strategies that grow with your business. From startup to enterprise.",
    icon: "/About/ca/rss.svg",
    iconAlt: "Rss",
  },
];

const additionalValues: Value[] = [
  {
    title: "Data-Driven Decisions",
    description:
      "We let the numbers tell the story. Our strategies are built on insights",
    icon: "/About/ca/file-text.svg",
    iconAlt: "File text",
  },
  {
    title: "Continuous Innovation",
    description: "We stay ahead of digital trends and emerging technologies.",
    icon: "/About/ca/target.svg",
    iconAlt: "Target",
  },
  {
    title: "Partnership Mentality",
    description: "We're not just a vendor—we're an extension of your team.",
    icon: "/About/ca/users.svg",
    iconAlt: "Users",
  },
];

// Fix component typing: declare as React.FC
export const Principles: React.FC = () => {
  return (
    <section className="flex flex-col w-full lg:w-[1128px] items-center gap-6 lg:gap-[50px] px-4 lg:px-0 relative flex-[0_0_auto]">
      <header className="flex flex-col w-full lg:w-[565px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex w-auto lg:w-[197px] items-center justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-300">
          <div className="flex w-auto lg:w-[161px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/About/ca/stars-1.svg"
            />

            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-xs sm:text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              Our Core Values
            </span>
          </div>
        </div>

        <div className="flex flex-col h-auto lg:h-44 items-center gap-4 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center tracking-[0] leading-tight lg:leading-[57px]">
            The Principles Behind Our Performance
          </h1>

          <p className="relative w-full lg:w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-sm sm:text-base text-center tracking-[0] leading-[23px]">
            Our values are more than just words on a page — they&apos;re the
            foundation of everything we do.
          </p>
        </div>
      </header>

      <div className="relative self-stretch w-full h-auto lg:h-[602px]">
        <div className="relative lg:absolute w-full lg:w-[770px] h-auto lg:h-[600px] lg:top-0 lg:left-0">
          <div className="flex flex-col w-full lg:w-[336px] items-start gap-6 lg:gap-[42px] relative lg:absolute lg:top-0 lg:left-0">
            {coreValues.map((value, index) => (
              <article
                key={index}
                className="flex h-auto lg:h-[172px] items-start justify-center gap-3 lg:gap-[17px] px-4 lg:px-[25px] py-6 lg:py-[35px] relative self-stretch w-full bg-neutral-0 rounded-[17px] border-b [border-bottom-style:solid] border-grey-100 shadow-[0px_4px_26.4px_#2e97ff3d]"
              >
                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-lg lg:text-xl tracking-[0] leading-[normal]">
                    {value.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm lg:text-lg tracking-[0] leading-[normal]">
                    {value.description}
                  </p>
                </div>

                <div className="flex w-12 h-12 items-center justify-center gap-2.5 p-2.5 relative bg-variable-collection-assest rounded-[42px]">
                  <img
                    className="relative w-6 h-6"
                    alt={value.iconAlt}
                    src={value.icon}
                  />
                </div>
              </article>
            ))}
          </div>

          <img
            className="hidden lg:block absolute w-[77px] h-[77px] top-[258px] left-[499px]"
            alt="Ellipse"
            src="/About/ca/ellipse-66.svg"
          />

          <img
            className="hidden lg:block absolute w-[195px] h-[209px] top-[76px] left-[570px]"
            alt="Vector"
            src="/About/ca/vector-2483.svg"
          />

          <img
            className="hidden lg:block absolute w-[195px] h-[212px] top-[326px] left-[576px]"
            alt="Vector"
            src="/About/ca/vector-2497.svg"
          />

          <div className="hidden lg:block absolute w-3.5 h-3.5 top-[85px] left-[626px] bg-[#43a2ff] rounded-[7px] border-[4.2px] border-solid border-white shadow-[0px_8.4px_6.3px_5px_#1d8fff33]" />

          <img
            className="hidden lg:block absolute w-[164px] h-[209px] top-[78px] left-[336px]"
            alt="Vector"
            src="/About/ca/vector-2493.svg"
          />

          <img
            className="hidden lg:block absolute w-[164px] h-[212px] top-[326px] left-[334px]"
            alt="Vector"
            src="/About/ca/vector-2496.svg"
          />

          <img
            className="hidden lg:block absolute w-[164px] h-5 top-[284px] left-[336px]"
            alt="Vector"
            src="/About/ca/vector-2495.svg"
          />

          <img
            className="hidden lg:block absolute w-[164px] h-5 top-[284px] left-[574px]"
            alt="Vector"
            src="/About/ca/vector-2498.svg"
          />

          <div className="hidden lg:block absolute w-3 h-3 top-[79px] left-[431px] bg-[#43a2ff] rounded-md border-[4.2px] border-solid border-white rotate-180 shadow-[0px_8.4px_6.3px_5px_#1d8fff33]" />

          <div className="hidden lg:block absolute w-2 h-2 top-[538px] left-[714px] bg-[#43a2ff] rounded border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

          <div className="hidden lg:block absolute w-[7px] h-[7px] top-[281px] left-[653px] bg-[#43a2ff] rounded-[3.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

          <img
            className="hidden lg:block absolute w-px h-2.5 top-[380px] left-[452px]"
            alt="Vector"
            src="/About/ca/vector-2491.svg"
          />

          <img
            className="hidden lg:block absolute w-1 h-px top-[512px] left-[630px] object-cover"
            alt="Vector"
            src="/About/ca/vector-2492.svg"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[336px] items-start gap-6 lg:gap-[42px] relative lg:absolute lg:top-0.5 lg:left-[792px] mt-6 lg:mt-0">
          {additionalValues.map((value, index) => (
            <article
              key={index}
              className="flex h-auto lg:h-[172px] items-start justify-center gap-3 lg:gap-[42px] px-4 lg:px-[25px] py-6 lg:py-[35px] relative self-stretch w-full bg-neutral-0 rounded-[17px] border-b [border-bottom-style:solid] border-grey-100 shadow-[0px_4px_26.4px_#2e97ff3d]"
            >
              <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-lg lg:text-xl tracking-[0] leading-[normal]">
                  {value.title}
                </h3>

                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm lg:text-lg tracking-[0] leading-[normal]">
                  {value.description}
                </p>
              </div>

              <div className="flex w-12 h-12 items-center justify-center gap-2.5 p-2.5 relative bg-variable-collection-assest rounded-[42px]">
                <img
                  className="relative w-6 h-6"
                  alt={value.iconAlt}
                  src={value.icon}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:inline-flex lg:flex-row items-center gap-4 lg:gap-[23px] relative flex-[0_0_auto] w-full lg:w-auto">
        <button className="flex w-full lg:w-[271px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1]">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm lg:text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
            Start Your Growth Journey
          </span>

          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
            <img
              className="relative w-5 h-5"
              alt="Arrow right"
              src="/About/ca/arrow-right.svg"
            />
          </div>
        </button>

        <button className="all-[unset] box-border flex w-full lg:w-[219px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200">
          <span className="relative w-fit ml-[-0.50px] [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-sm lg:text-base tracking-[0] leading-4 whitespace-nowrap">
            Book An Appointment
          </span>

          <img
            className="relative w-5 h-5 mr-[-0.50px]"
            alt="Arrow right"
            src="/About/ca/arrow-right-1.svg"
          />
        </button>
      </div>
    </section>
  );
};
