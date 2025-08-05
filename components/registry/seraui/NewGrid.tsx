import React from "react";

export default function NewGrid() {
  return (
    <section className="w-full flex justify-center py-8">
      {/* OUTER LAYOUT BORDER */}
      <div className="w-[1128px] inline-flex flex-col justify-start items-center gap-12 border border-gray-300 p-6 rounded-lg">

        {/* TOP CARD */}
        <div className="w-[519px] h-56 flex flex-col justify-start items-center gap-4 border border-gray-200 p-4 rounded-lg">
          {/* pill label */}
          <div className="w-44 py-[5px] rounded-[45px] outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex justify-center items-center gap-1.5">
            <div className="w-40 px-2 py-0.5 bg-blue-500 rounded-[45px] flex justify-start items-center gap-1.5">
              <div className="w-3.5 h-3.5 relative">
                <div className="w-3 h-3 absolute left-[1.25px] top-[1.25px] bg-white rounded-full" />
              </div>
              <span className="text-white text-sm font-medium font-['Urbanist'] capitalize leading-snug">
                Why rent SEO Brain
              </span>
            </div>
          </div>
          {/* headline & subcopy */}
          <div className="self-stretch h-44 flex flex-col justify-start items-center gap-4">
            <h2 className="w-full text-center text-sky-700 text-5xl font-bold font-['Urbanist'] leading-[57px]">
              SEO That Works for You
            </h2>
            <p className="w-full text-center text-slate-500 text-base font-medium font-['Urbanist'] leading-snug">
              Flexible, data-driven SEO solutions tailored to your goals—whether
              you're a solo creator or scaling agency.
            </p>
          </div>
        </div>

        {/* FEATURES ROW */}
        <div className="inline-flex justify-start items-start gap-6">

          {/* Card 1 */}
          <div className="w-[552px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-96 relative">
              <div className="w-[552px] h-96 left-0 top-0 absolute bg-white rounded-xl shadow-[0px_4px_57.3px_rgba(247,181,13,0.17)] overflow-hidden">
                <div className="w-44 left-[-27px] top-[-6px] absolute inline-flex flex-wrap content-center gap-[3px]">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-zinc-100 rounded-full" />
                  ))}
                </div>
                <div className="w-[515px] left-[18px] top-[27px] absolute inline-flex flex-col justify-start items-center gap-3">
                  <div className="self-stretch px-3 py-4 bg-white rounded-2xl shadow-[0px_4px_29.4px_rgba(47,152,255,0.08)] flex flex-col justify-start items-center gap-5">
                    <div className="self-stretch flex flex-col justify-start items-end gap-4">
                      <div className="self-stretch flex flex-col justify-start items-center gap-3.5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                          <div className="self-stretch h-0 relative">
                            <div className="w-[487px] h-0 absolute outline-[11px] outline-gray-200 outline-offset-[-5.5px]" />
                            <div className="w-52 h-0 absolute outline-[11px] outline-amber-500 outline-offset-[-5.5px]" />
                          </div>
                          <div className="self-stretch inline-flex justify-between items-center">
                            <div className="text-slate-700 text-xs font-medium font-['Urbanist']">
                              Progress
                            </div>
                            <div className="text-slate-700 text-xs font-medium font-['Urbanist']">
                              50%
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch inline-flex justify-center items-center gap-4">
                          <div className="w-60 px-4 py-1.5 bg-indigo-50 rounded-md inline-flex flex-col items-center gap-2">
                            <div className="text-sky-700 text-base font-semibold font-['Urbanist']">
                              50+
                            </div>
                            <div className="text-sky-700 text-sm font-medium font-['Urbanist']">
                              Tools Available
                            </div>
                          </div>
                          <div className="w-60 px-4 py-1.5 bg-indigo-50 rounded-md inline-flex flex-col items-center gap-2">
                            <div className="text-sky-700 text-base font-semibold font-['Urbanist']">
                              49
                            </div>
                            <div className="text-sky-700 text-sm font-medium font-['Urbanist']">
                              User Rating
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-neutral-400 text-xs font-normal font-['Urbanist'] text-center">
                        Search Volume : 12,000 | Keyword Difficulty : 29
                      </div>
                    </div>
                  </div>
                  <div className="w-[502px] flex flex-col items-start gap-3.5">
                    <div className="text-amber-500 text-base font-semibold font-['Urbanist']">
                      01
                    </div>
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="text-slate-800 text-xl font-semibold font-['Urbanist']">
                        On-Demand Tools
                      </div>
                      <div className="text-slate-600 text-base font-medium font-['Urbanist']">
                        Access 20+ powerful SEO tools instantly—no installation, no contracts.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="self-stretch h-80 relative">
              {/* …nested markup for Card 2… */}
              hello 
            </div>
          </div>

          {/* Card 3 */}
          <div className="self-stretch h-[459px] relative">
            {/* …nested markup for Card 3… */}
            hello
          </div>
        </div>

        {/* CTA BAR */}
        <div className="inline-flex justify-center items-center gap-5">
          <button className="w-64 h-12 px-[3px] bg-blue-500 rounded-[45px] shadow-[0px_4px_14.7px_rgba(47,152,255,0.63)] flex justify-end items-center gap-2.5">
            <span className="text-white text-base font-medium font-['Urbanist'] capitalize">
              Get Your SEO Audit Now
            </span>
            <div className="p-3 bg-indigo-50 rounded-[34px] outline outline-1 outline-offset-[-1px] outline-blue-300 flex items-center justify-center gap-2.5">
              {/* icon */}
            </div>
          </button>
          <button className="w-56 h-12 px-5 py-2.5 bg-neutral-50 rounded-[33px] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex items-center justify-center gap-1.5">
            <span className="text-sky-950 text-base font-medium font-['Urbanist'] capitalize leading-none">
              See Real Client Results
            </span>
            {/* icon */}
            
          </button>
        </div>
      </div>
    </section>
  );
}