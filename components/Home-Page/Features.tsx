import React from "react";
import AppButton from "@/utils/AppButton";

export default function Features() {
  return (
    <section className="w-full flex justify-center py-8 lg:py-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="w-full max-w-[1128px] flex flex-col justify-start items-center gap-8 lg:gap-12 px-4 lg:px-0">
        {/* Header Section */}
        <div className="w-full max-w-[519px] flex flex-col justify-start items-center gap-4">
          <div className="px-4 py-2 rounded-full border border-blue-500 bg-blue-500 text-white text-sm font-medium">
            Why rent SEO Brain
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-sky-700 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
              SEO That Works for You
            </h2>
            <p className="text-center text-slate-500 text-sm md:text-base lg:text-base font-medium font-['Urbanist'] leading-[18px] md:leading-[20px] lg:leading-snug">
              Flexible, data-driven SEO solutions tailored to your goals—whether you're a solo creator or scaling agency.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-[552px] flex flex-col justify-start items-start gap-6">
            {/* Card 1: On-Demand Tools */}
            <div className="w-full h-auto lg:h-96 bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-4 lg:p-6 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute -left-6 -top-2 w-44 flex flex-wrap gap-1">
                {Array(44).fill(0).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-zinc-100 rounded-full" />
                ))}
              </div>
              
              <div className="relative z-10 flex flex-col gap-6">
                {/* Tool Interface */}
                <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(47,152,255,0.08)] p-4">
                  {/* Progress Bar */}
                  <div className="flex flex-col gap-4">
                    <div className="relative h-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                      <div className="absolute top-0 w-1/2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-700 font-medium">
                      <span>Progress</span>
                      <span>50%</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mt-4">
                    <div className="flex-1 bg-indigo-50 rounded-md p-3 text-center">
                      <div className="text-sky-700 text-base font-semibold">50+</div>
                      <div className="text-sky-700 text-sm">Tools Available</div>
                    </div>
                    <div className="flex-1 bg-indigo-50 rounded-md p-3 text-center">
                      <div className="text-sky-700 text-base font-semibold">4.9</div>
                      <div className="text-sky-700 text-sm">User Rating</div>
                    </div>
                  </div>
                  
                  {/* Tool Tabs */}
                  <div className="flex gap-2 mt-4 bg-neutral-50 rounded-full p-2">
                    <div className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm flex items-center gap-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      Keyword
                    </div>
                    <div className="px-4 py-2 text-neutral-400 text-sm flex items-center gap-2">
                      <div className="w-3 h-3 border border-neutral-400 rounded"></div>
                      Audit
                    </div>
                    <div className="px-4 py-2 text-neutral-400 text-sm flex items-center gap-2">
                      <div className="w-3 h-3 border border-neutral-400 rounded-full"></div>
                      Backlink
                    </div>
                  </div>
                  
                  <div className="text-center text-neutral-400 text-xs mt-3">
                    Search Volume: 12,000 | Keyword Difficulty: 29
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="text-amber-500 text-base font-semibold">01</div>
                  <div>
                    <h3 className="text-slate-800 text-lg lg:text-xl font-semibold mb-2">On-Demand Tools</h3>
                    <p className="text-slate-600 text-sm lg:text-base">
                      Access 20+ powerful SEO tools instantly—no installation, no contracts. Everything runs in-browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Affordable & Scalable */}
            <div className="w-full h-auto lg:h-80 bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-4 lg:p-6 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute left-48 top-16 w-44 flex flex-wrap gap-1">
                {Array(72).fill(0).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-zinc-100 rounded-full" />
                ))}
              </div>
              
              <div className="relative z-10 flex flex-col gap-6">
                {/* Pricing Interface */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center px-6 py-2">
                    <span className="text-sky-700 text-sm font-medium">View Features (Free)</span>
                    <div className="px-3 py-1 bg-emerald-100 border border-emerald-600 rounded-full">
                      <span className="text-emerald-600 text-xs font-medium">4 included</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/95 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-gray-500 text-sm">Free</span>
                      <div className="w-10 h-6 bg-green-500 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
                      </div>
                      <span className="text-gray-500 text-sm">Enterprise</span>
                    </div>
                    <div className="text-center">
                      <div className="text-sky-700 text-lg font-semibold">Free</div>
                      <div className="text-sky-700 text-sm">Basic Tools Included</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white py-3 rounded text-sm font-medium">
                    Compare All Plans
                  </button>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="text-amber-500 text-base font-semibold">03</div>
                  <div>
                    <h3 className="text-slate-800 text-lg lg:text-xl font-semibold mb-2">Affordable & Scalable</h3>
                    <p className="text-slate-600 text-sm lg:text-base">
                      Start free, pay as you grow—no hidden fees, no long-term contracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[552px] flex flex-col justify-start items-start gap-6">
            {/* Card 2: Actionable Insights */}
            <div className="w-full h-auto lg:h-64 bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-4 lg:p-6 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute right-0 top-20 w-44 flex flex-wrap gap-1">
                {Array(72).fill(0).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-zinc-100 rounded-full" />
                ))}
              </div>
              
              <div className="relative z-10 flex flex-col gap-4">
                {/* Placeholder for image/chart */}
                <div className="h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-600">Chart/Image Area</span>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="text-amber-500 text-base font-semibold">02</div>
                  <div>
                    <h3 className="text-slate-800 text-lg lg:text-xl font-semibold mb-2">Actionable Insights</h3>
                    <p className="text-slate-600 text-sm lg:text-base">
                      Get clear reports with action items, priority scores, and implementation steps—ready for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Boost SEO Performance */}
            <div className="w-full h-auto lg:h-[459px] bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-4 lg:p-6 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute right-0 -top-28 w-44 flex flex-wrap gap-1 rotate-90">
                {Array(60).fill(0).map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 bg-zinc-100 rounded-full" />
                ))}
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-24">
                {/* Performance Visual */}
                <div className="w-80 h-48 relative">
                  <div className="absolute inset-0 flex flex-col gap-4">
                    {/* Chat/notification items */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-4 ml-8">
                      <div className="p-2 bg-gray-400 rounded-full">
                        <div className="w-5 h-5 bg-white rounded"></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="w-40 h-2 bg-gray-200 rounded"></div>
                        <div className="w-24 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-4 ml-4">
                      <div className="p-2 bg-gray-400 rounded-full">
                        <div className="w-5 h-5 bg-white rounded"></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="w-40 h-2 bg-gray-200 rounded"></div>
                        <div className="w-24 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-5">
                      <div className="p-3 bg-blue-500 rounded-full shadow-lg">
                        <div className="w-6 h-6 bg-white rounded"></div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="w-56 h-3 bg-gray-200 rounded"></div>
                        <div className="w-32 h-3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-yellow-400/60 via-green-400/70 to-blue-400/70 rounded-full blur-[60px]"></div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="text-amber-500 text-base font-semibold">04</div>
                  <div>
                    <h3 className="text-slate-800 text-lg lg:text-xl font-semibold mb-2">Boost SEO Performance</h3>
                    <p className="text-slate-600 text-sm lg:text-base">
                      Track progress with real-time monitoring, automated reports, and AI-powered strategy adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5">
          <AppButton
            variant="blue"
            size="lg"
            text="Get Your SEO Audit Now"
          />
          
          <AppButton
            variant="white"
            size="lg"
            text="See Real Client Results"
          />
        </div>
      </div>
    </section>
  );
}