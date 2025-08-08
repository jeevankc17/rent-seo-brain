import React from "react";

export default function NewGrid3() {
  return (
    <section className="w-full flex justify-center py-16 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="w-[1128px] flex flex-col justify-start items-center gap-12">
        {/* Header Section */}
        <div className="w-[552px] flex flex-col justify-center items-center gap-6">
          <div className="px-4 py-2 rounded-full border border-amber-500 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-amber-600 text-sm font-medium">Our Core Services</span>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-sky-700 text-5xl font-bold font-['Urbanist'] leading-[57px] mb-4">
              Landing Pages, SEO & Ads, Built to Convert
            </h1>
            <p className="text-slate-600 text-base font-normal font-['Urbanist'] leading-snug max-w-[520px]">
              We create performance-driven digital experiences — from high-converting 
              landing pages to powerful SEO and strategic Google Ads.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-2 gap-6">
          {/* Landing Page Design Card */}
          <div className="bg-white rounded-2xl border border-neutral-300 p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-blue-500 rounded-full w-fit">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sky-700 text-xl font-semibold font-['Urbanist']">
                    Landing Page Design
                  </h3>
                  <span className="px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-medium">
                    High Converting Pages
                  </span>
                </div>
                <p className="text-slate-600 text-sm font-medium font-['Urbanist']">
                  Custom-built pages optimized for conversions and user experience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Modern Conversion-focused Interfaces
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Fast-loading, performance-optimized
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Mobile-first & responsive layout
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Clean UX backed by data
                </span>
              </div>
            </div>
          </div>

          {/* Google Ads Card - Tall Card */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-300 p-6 flex flex-col gap-8 row-span-2">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-blue-500 rounded-full w-fit">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              
              <div>
                <h3 className="text-sky-700 text-xl font-semibold font-['Urbanist'] mb-2">
                  Google Ads
                </h3>
                <p className="text-slate-600 text-sm font-medium font-['Urbanist']">
                  Instant visibility with ROI-focused paid campaigns.
                </p>
              </div>
            </div>

            {/* Campaign Performance Chart */}
            <div className="bg-white rounded-lg p-6 h-72">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
                <span className="text-black text-sm font-medium font-['Urbanist']">
                  Campaign Performance
                </span>
              </div>
              
              {/* Chart Area */}
              <div className="relative h-32 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-blue-500/60 rounded-sm"></div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-full px-4">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
                    <div key={day} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-2 bg-blue-500 rounded-t-sm" 
                        style={{ height: `${20 + (index * 8)}%` }}
                      ></div>
                      <span className="text-gray-400 text-xs font-medium">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Instantly increase website traffic
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Outrank competitors with smart bidding
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Get measurable results and ROI
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Reach local and global audiences
                </span>
              </div>
            </div>
          </div>

          {/* SEO Card */}
          <div className="bg-white rounded-2xl border border-neutral-300 p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-blue-500 rounded-full w-fit">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sky-700 text-xl font-semibold font-['Urbanist']">
                    SEO
                  </h3>
                  <span className="px-3 py-1 bg-orange-100 rounded-full text-orange-700 text-xs font-medium">
                    Most Popular
                  </span>
                </div>
                <p className="text-slate-600 text-sm font-medium font-['Urbanist']">
                  Get found on Google with strategies that actually work.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  On-page SEO optimization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Technical SEO fixes & audits
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  Local SEO for maps and local search
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-500 text-base font-medium font-['Urbanist']">
                  High-authority link building
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-3">
            <span className="font-medium font-['Urbanist']">Run a SEO & Ads Audit</span>
            <div className="p-2 bg-indigo-50 rounded-full">
              <div className="w-4 h-4 border-r-2 border-b-2 border-blue-500 transform rotate-[-45deg]"></div>
            </div>
          </button>
          
          <button className="px-6 py-3 bg-neutral-50 text-sky-950 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors flex items-center gap-3">
            <span className="font-medium font-['Urbanist']">Book An Appointment</span>
            <div className="w-4 h-4 border-r-2 border-b-2 border-sky-950 transform rotate-[-45deg]"></div>
          </button>
        </div>
      </div>
    </section>
  );
}