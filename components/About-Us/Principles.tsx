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
    icon: "https://c.animaapp.com/zvzHaAwZ/img/bar-chart.svg",
    iconAlt: "Bar chart",
  },
  {
    title: "Real Communication",
    description:
      "No black boxes or hidden tactics. We believe in clear, honest communication",
    icon: "https://c.animaapp.com/zvzHaAwZ/img/trending-up.svg",
    iconAlt: "Trending up",
  },
  {
    title: "Scalable Growth",
    description:
      "We build strategies that grow with your business. From startup to enterprise.",
    icon: "https://c.animaapp.com/zvzHaAwZ/img/rss.svg",
    iconAlt: "Rss",
  },
];

const additionalValues: Value[] = [
  {
    title: "Data-Driven Decisions",
    description:
      "We let the numbers tell the story. Our strategies are built on insights",
    icon: "https://c.animaapp.com/zvzHaAwZ/img/file-text.svg",
    iconAlt: "File text",
  },
  {
    title: "Continuous Innovation",
    description: "We stay ahead of digital trends and emerging technologies.",
    icon: "https://c.animaapp.com/zvzHaAwZ/img/target.svg",
    iconAlt: "Target",
  },
  {
    title: "Partnership Mentality",
    description: "We're not just a vendor—we're an extension of your team.",
    icon: "https://c.animaapp.com/zvzHaAwZ/img/users.svg",
    iconAlt: "Users",
  },
];

// Fix component typing: declare as React.FC
export const Principles: React.FC = () => {
  return (
    <section className="flex flex-col w-[1128px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="flex flex-col w-[565px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex w-[197px] items-center justify-center gap-1.5 px-0 py-[5px] relative flex-[0_0_auto] rounded-[45px] border border-solid border-secondary-300">
          <div className="flex w-[161px] items-center justify-center gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="https://c.animaapp.com/zvzHaAwZ/img/stars-1.svg"
            />

            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              Our Core Values
            </span>
          </div>
        </div>

        <div className="flex flex-col h-44 items-center gap-4 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
            The Principles Behind Our Performance
          </h1>

          <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
            Our values are more than just words on a page — they&apos;re the
            foundation of everything we do.
          </p>
        </div>
      </header>

      <div className="relative self-stretch w-full h-[602px]">
        <div className="absolute w-[770px] h-[600px] top-0 left-0">
          <div className="flex flex-col w-[336px] items-start gap-[42px] absolute top-0 left-0">
            {coreValues.map((value, index) => (
              <article
                key={index}
                className="flex h-[172px] items-start justify-center gap-[17px] px-[25px] py-[35px] relative self-stretch w-full bg-neutral-0 rounded-[17px] border-b [border-bottom-style:solid] border-grey-100 shadow-[0px_4px_26.4px_#2e97ff3d]"
              >
                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-xl tracking-[0] leading-[normal]">
                    {value.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-lg tracking-[0] leading-[normal]">
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
            className="absolute w-[77px] h-[77px] top-[258px] left-[499px]"
            alt="Ellipse"
            src="https://c.animaapp.com/zvzHaAwZ/img/ellipse-66.svg"
          />

          <img
            className="absolute w-[195px] h-[209px] top-[76px] left-[570px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2483.svg"
          />

          <img
            className="absolute w-[195px] h-[212px] top-[326px] left-[576px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2497.svg"
          />

          <div className="absolute w-3.5 h-3.5 top-[85px] left-[626px] bg-[#43a2ff] rounded-[7px] border-[4.2px] border-solid border-white shadow-[0px_8.4px_6.3px_5px_#1d8fff33]" />

          <img
            className="absolute w-[164px] h-[209px] top-[78px] left-[336px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2493.svg"
          />

          <img
            className="absolute w-[164px] h-[212px] top-[326px] left-[334px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2496.svg"
          />

          <img
            className="absolute w-[164px] h-5 top-[284px] left-[336px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2495.svg"
          />

          <img
            className="absolute w-[164px] h-5 top-[284px] left-[574px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2498.svg"
          />

          <div className="absolute w-3 h-3 top-[79px] left-[431px] bg-[#43a2ff] rounded-md border-[4.2px] border-solid border-white rotate-180 shadow-[0px_8.4px_6.3px_5px_#1d8fff33]" />

          <div className="absolute w-2 h-2 top-[538px] left-[714px] bg-[#43a2ff] rounded border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

          <div className="absolute w-[7px] h-[7px] top-[281px] left-[653px] bg-[#43a2ff] rounded-[3.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

          <img
            className="absolute w-px h-2.5 top-[380px] left-[452px]"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2491.svg"
          />

          <img
            className="absolute w-1 h-px top-[512px] left-[630px] object-cover"
            alt="Vector"
            src="https://c.animaapp.com/zvzHaAwZ/img/vector-2492.svg"
          />
        </div>

        <div className="flex flex-col w-[336px] items-start gap-[42px] absolute top-0.5 left-[792px]">
          {additionalValues.map((value, index) => (
              <article
                key={index}
                className="flex h-[172px] items-start justify-center gap-[42px] px-[25px] py-[35px] relative self-stretch w-full bg-neutral-0 rounded-[17px] border-b [border-bottom-style:solid] border-grey-100 shadow-[0px_4px_26.4px_#2e97ff3d]"
              >
              <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-xl tracking-[0] leading-[normal]">
                  {value.title}
                </h3>

                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-lg tracking-[0] leading-[normal]">
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

      <div className="inline-flex items-center gap-[23px] relative flex-[0_0_auto]">
        <button className="flex w-[271px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1]">
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
            Start Your Growth Journey
          </span>

          <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
            <img
              className="relative w-5 h-5"
              alt="Arrow right"
              src="https://c.animaapp.com/zvzHaAwZ/img/arrow-right.svg"
            />
          </div>
        </button>

        <button className="all-[unset] box-border flex w-[219px] h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200">
          <span className="relative w-fit ml-[-0.50px] [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
            Book An Appointment
          </span>

          <img
            className="relative w-5 h-5 mr-[-0.50px]"
            alt="Arrow right"
            src="https://c.animaapp.com/zvzHaAwZ/img/arrow-right-1.svg"
          />
        </button>
      </div>
    </section>
  );
};
