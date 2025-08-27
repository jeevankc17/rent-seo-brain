import React from "react";

export default function HaveQuestions() {
  return (
    <div className="w-full max-w-[1131px] inline-flex flex-col justify-start items-start gap-8 lg:gap-12 px-4 lg:px-0">
      <div className="self-stretch h-auto lg:h-[463px] relative bg-neutral-950 rounded-2xl lg:rounded-3xl overflow-hidden py-8 lg:py-0">
        <div className="w-80 h-72 left-[-169px] top-[-46px] absolute bg-blue-500/60 rounded-full blur-[265.71px] hidden lg:block" />
        <div className="w-80 h-72 left-[840px] top-[209px] absolute bg-blue-500/60 rounded-full blur-[265.71px] hidden lg:block" />
        <div className="w-14 h-12 left-[535.50px] top-[232px] absolute bg-white rounded-full blur-3xl hidden lg:block" />
        <div className="w-full lg:w-[798px] left-0 lg:left-[166.50px] top-0 lg:top-[74px] relative lg:absolute inline-flex flex-col justify-center items-center gap-6 px-4 lg:px-0">
          <div className="self-stretch flex flex-col justify-start items-center gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="w-full lg:w-[798px] text-center justify-start text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Urbanist'] leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[60px]">
                Still have Questions?
              </div>
              <div className="w-full lg:w-[598px] text-center justify-start text-white/70 text-sm md:text-base lg:text-lg font-medium font-['Urbanist'] leading-[18px] md:leading-[20px] lg:leading-relaxed">
                Our SEO experts are here to help. Schedule a free 30-minute
                consultation to discuss your specific needs and goals.
              </div>
            </div>
            <div className="w-full lg:w-52 px-2 py-1.5 rounded-md flex flex-col justify-start items-center gap-1.5">
              <div
                data-property-1="Frame 21"
                className="inline-flex justify-start items-start"
              >
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
                  src="/Home-Page/Hero-Section/image1.jpg"
                />
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full outline-[1.60px] outline-color-border-onColor"
                  src="/Home-Page/Hero-Section/image2.jpg"
                />
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full outline-[1.60px] outline-color-border-onColor"
                  src="/Home-Page/Hero-Section/image3.jpg"
                />
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-[1.60px] border-color-border-onColor"
                  src="/Home-Page/Hero-Section/image4.jpg"
                />
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-[1.60px] border-color-border-onColor"
                  src="/Home-Page/Hero-Section/image5.jpg"
                />
                <img
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-[1.60px] border-color-border-onColor"
                  src="/Home-Page/Hero-Section/image6.jpg"
                />
              </div>
              <div className="w-full lg:w-52 h-5 text-center justify-start text-zinc-200 text-xs lg:text-sm font-medium font-['Urbanist'] leading-tight">
                Trusted By Over 100+k Clients
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-3">
              <div className="flex justify-start items-center gap-4">
                <div
                  data-property-1="Frame 1261155418"
                  className="w-full lg:w-60 h-12 px-[3px] bg-blue-500 rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.699999809265137px_0px_rgba(47,152,255,0.63)] flex justify-center lg:justify-end items-center gap-2.5"
                >
                  <div className="text-center justify-start text-white text-sm lg:text-base font-medium font-['Urbanist'] capitalize leading-snug">
                    Schedule A consultaion
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-[34px]  outline-1 outline-offset-[-1px] outline-blue-300-lex justify-start items-center gap-2.5">
                    <div className="w-5 h-5 relative overflow-hidden">
                      <img
                        src={"/CMS/ca/arrow-right-2.svg"}
                        className="w-5 h-5 text-primary-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-property-1="default"
                className="w-full lg:w-56 h-12 px-5 py-2.5 bg-neutral-50 rounded-[28px] lg:rounded-[33px] outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center gap-1.5"
              >
                <div className="justify-start text-sky-950 text-sm lg:text-base font-medium font-['Urbanist'] capitalize leading-none">
                  Email our Team
                </div>
                <div className="w-5 h-5 relative overflow-hidden">
                  <img src={"/CMS/ca/arrow-right-2.svg"} className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
