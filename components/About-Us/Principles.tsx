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
    <section className="flex flex-col w-full items-center gap-8 sm:gap-10 md:gap-[50px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0 max-w-[2000px]">
      <header className="flex flex-col w-full md:w-[565px] items-center gap-3 sm:gap-4">
        <div className="flex w-full max-w-[197px] items-center justify-center gap-1.5 px-0 py-1 sm:py-[5px] relative rounded-[45px] border border-solid border-secondary-300">
          <div className="flex w-full max-w-[161px] items-center justify-center gap-1 sm:gap-1.5 px-2 py-0.5 relative bg-secondary-50 rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="/About/ca/stars-1.svg"
              loading="lazy"
            />
            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-secondary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              Our Core Values
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4 relative w-full mt-2 sm:mt-0">
          <h1 className="relative self-stretch font-sans font-bold text-primary-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center leading-tight sm:leading-[46px] lg:leading-[57px]">
            The Principles Behind Our Performance
          </h1>
          <p className="relative w-full max-w-[565px] font-sans font-medium text-neutral-200 text-sm sm:text-base text-center leading-relaxed sm:leading-[23px]">
            Our values are more than just words on a page — they&apos;re the
            foundation of everything we do.
          </p>
        </div>
      </header>

      {/* Desktop layout - hidden on mobile */}
      <div className="hidden md:block relative w-full min-h-[400px] h-auto md:h-[602px] mt-6 sm:mt-8 lg:mt-0">
        <div className="absolute w-full max-w-[1200px] h-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...coreValues, ...additionalValues].map((value, index) => (
              <article
                key={index}
                className="flex flex-col p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100 h-full"
              >
                <div className="flex flex-col items-start gap-3 relative flex-1">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                      <img
                        className="w-6 h-6 text-blue-600"
                        alt={value.iconAlt}
                        src={value.icon}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Decorative elements - hidden on mobile and small screens */}
          <div className="hidden lg:block">
            <img
              className="absolute w-[77px] h-[77px] top-[258px] left-[499px]"
              alt=""
              src="/About/ca/ellipse-66.svg"
              loading="lazy"
            />

            <img
              className="absolute w-[195px] h-[209px] top-[76px] left-[570px]"
              alt=""
              src="/About/ca/vector-2483.svg"
              loading="lazy"
            />

            <img
              className="absolute w-[195px] h-[212px] top-[326px] left-[576px]"
              alt=""
              src="/About/ca/vector-2497.svg"
              loading="lazy"
            />

            <div className="absolute w-3.5 h-3.5 top-[85px] left-[626px] bg-[#43a2ff] rounded-[7px] border-[4.2px] border-solid border-white shadow-[0px_8.4px_6.3px_5px_#1d8fff33]" />

            <img
              className="absolute w-[164px] h-[209px] top-[78px] left-[336px]"
              alt=""
              src="/About/ca/vector-2493.svg"
              loading="lazy"
            />

            <img
              className="absolute w-[164px] h-[212px] top-[326px] left-[334px]"
              alt=""
              src="/About/ca/vector-2496.svg"
              loading="lazy"
            />

            <img
              className="absolute w-[164px] h-5 top-[284px] left-[336px]"
              alt=""
              src="/About/ca/vector-2495.svg"
              loading="lazy"
            />

            <img
              className="absolute w-[164px] h-5 top-[284px] left-[574px]"
              alt=""
              src="/About/ca/vector-2498.svg"
              loading="lazy"
            />

            <div className="absolute w-3 h-3 top-[79px] left-[431px] bg-[#43a2ff] rounded-md border-[4.2px] border-solid border-white rotate-180 shadow-[0px_8.4px_6.3px_5px_#1d8fff33]" />

            <div className="absolute w-2 h-2 top-[538px] left-[714px] bg-[#43a2ff] rounded border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

            <div className="absolute w-[7px] h-[7px] top-[281px] left-[653px] bg-[#43a2ff] rounded-[3.5px] border-[2.2px] border-solid border-white shadow-[0px_4.4px_3.3px_2.62px_#1d8fff33]" />

            <img
              className="absolute w-px h-2.5 top-[380px] left-[452px]"
              alt=""
              src="/About/ca/vector-2491.svg"
              loading="lazy"
            />

            <img
              className="absolute w-1 h-px top-[512px] left-[630px] object-cover"
              alt=""
              src="/About/ca/vector-2492.svg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden grid grid-cols-1 gap-4 sm:gap-6 w-full mt-6 sm:mt-8 px-4 sm:px-6">
        {[...coreValues, ...additionalValues].map((value, index) => (
          <article
            key={index}
            className="flex flex-col p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50">
                <img
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                  alt={value.iconAlt}
                  src={value.icon}
                  loading="lazy"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {value.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 pl-0 sm:pl-14">
              {value.description}
            </p>
          </article>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-8 sm:mt-10 px-4 sm:px-0">
        <button className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[220px] h-12 sm:h-[50px] px-6 py-3 bg-primary-300 hover:bg-primary-400 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300">
          <span className="text-sm sm:text-base font-medium">
            Start Your Growth Journey
          </span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <button className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] h-12 sm:h-[50px] px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-full border border-gray-200 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100">
          <span className="text-sm sm:text-base font-medium">
            Book An Appointment
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
