import React from "react";

export default function NewGrid4() {
  return (
    <section className="w-full flex justify-center py-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="w-[1128px] h-36 inline-flex justify-center items-center gap-9">
        <div className="w-64 h-36 px-8 py-5 bg-indigo-50/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-50 inline-flex flex-col justify-center items-center gap-5">
          <div className="self-stretch text-center justify-start text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-relaxed">
            5+
          </div>
          <div className="w-20 text-center justify-start text-neutral-500 text-lg font-medium font-['Urbanist'] leading-relaxed">
            Core Services
          </div>
        </div>
        <div className="w-64 px-8 py-5 bg-indigo-50/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-50 inline-flex flex-col justify-center items-center gap-5">
          <div className="self-stretch text-center justify-start text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-relaxed">
            3+
          </div>
          <div className="w-32 text-center justify-start text-neutral-500 text-lg font-medium font-['Urbanist'] leading-relaxed">
            Years of experience
          </div>
        </div>
        <div className="w-64 px-8 py-5 bg-indigo-50/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-50 inline-flex flex-col justify-center items-center gap-5">
          <div className="self-stretch text-center justify-start text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-relaxed">
            98%
          </div>
          <div className="w-32 text-center justify-start text-neutral-500 text-lg font-medium font-['Urbanist'] leading-relaxed">
            Clinet <br />
            Rentetion
          </div>
        </div>
        <div className="w-64 px-8 py-5 bg-indigo-50/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-50 inline-flex flex-col justify-center items-center gap-5">
          <div className="self-stretch text-center justify-start text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-relaxed">
            167%
          </div>
          <div className="w-32 text-center justify-start text-neutral-500 text-lg font-medium font-['Urbanist'] leading-relaxed">
            Avg Traffic Growth
          </div>
        </div>
      </div>
    </section>
  );
}
