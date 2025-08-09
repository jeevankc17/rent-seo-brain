import React from "react";

export default function NewGrid5() {
  return (
    <section className="w-full flex justify-center py-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
      </div>
      
      <div className="w-[907px] flex flex-col justify-start items-center gap-16 relative z-10">
        {/* Header Section */}
        <div className="w-[601px] flex flex-col justify-center items-center gap-6">
          <div className="px-4 py-2 bg-sky-700 rounded-full flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-100 rounded-full"></div>
            <span className="text-indigo-100 text-sm font-medium font-['Urbanist']">
              Our Proven Process
            </span>
          </div>
          
          <div className="text-center">
            <h1 className="text-indigo-100 text-5xl font-bold font-['Urbanist'] leading-[57px] mb-4">
              How We Turn Ideas Into ROI-Driven Content
            </h1>
            <p className="text-gray-300 text-base font-normal font-['Urbanist'] leading-snug max-w-[580px]">
              From discovery to reporting, our systematic approach ensures your
              content marketing delivers measurable results.
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative w-full h-[1400px]">
          {/* Connecting Lines and Dots */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 907 1400">
            {/* Zigzag connecting line */}
            <path
              d="M 450 100 L 450 200 L 150 300 L 150 400 L 450 500 L 450 600 L 150 700 L 150 800 L 450 900 L 450 1000"
              stroke="rgba(59, 130, 246, 0.6)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
            />
            
            {/* Connection dots */}
            <circle cx="450" cy="150" r="6" fill="#60a5fa" stroke="white" strokeWidth="3" />
            <circle cx="150" cy="350" r="6" fill="#60a5fa" stroke="white" strokeWidth="3" />
            <circle cx="450" cy="550" r="6" fill="#60a5fa" stroke="white" strokeWidth="3" />
            <circle cx="150" cy="750" r="6" fill="#60a5fa" stroke="white" strokeWidth="3" />
            <circle cx="450" cy="950" r="6" fill="#60a5fa" stroke="white" strokeWidth="3" />
          </svg>

          {/* Step 1 - Website Audit */}
          <div className="absolute right-0 top-0 w-80 bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
            <div className="text-slate-600 text-7xl font-bold font-['Urbanist'] mb-6">01</div>
            <div className="flex flex-col gap-6">
              <div className="px-6 py-2 bg-lime-400 rounded-full w-fit">
                <span className="text-slate-900 text-sm font-medium font-['Urbanist']">WEEK 1</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium font-['Urbanist'] mb-3">
                  Website Audit
                </h3>
                <p className="text-neutral-300 text-sm font-medium font-['Urbanist'] leading-relaxed">
                  We conduct a comprehensive audit of your website's technical
                  health, structure, and content to identify critical issues
                  that may be hindering your search visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Keyword Research */}
          <div className="absolute left-0 top-[280px] w-80 bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
            <div className="text-slate-600 text-7xl font-bold font-['Urbanist'] mb-6">02</div>
            <div className="flex flex-col gap-6">
              <div className="px-6 py-2 bg-lime-400 rounded-full w-fit">
                <span className="text-slate-900 text-sm font-medium font-['Urbanist']">WEEK 1-2</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium font-['Urbanist'] mb-3">
                  Keyword Research
                </h3>
                <p className="text-neutral-300 text-sm font-medium font-['Urbanist'] leading-relaxed">
                  Our process begins with a deep dive into your website to
                  evaluate its performance, uncover on-page and technical SEO
                  errors, and highlight areas for immediate improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - On-Site Optimization */}
          <div className="absolute right-0 top-[480px] w-80 bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
            <div className="text-slate-600 text-7xl font-bold font-['Urbanist'] mb-6">03</div>
            <div className="flex flex-col gap-6">
              <div className="px-6 py-2 bg-lime-400 rounded-full w-fit">
                <span className="text-slate-900 text-sm font-medium font-['Urbanist']">WEEK 2-4</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium font-['Urbanist'] mb-3">
                  On-Site Optimization
                </h3>
                <p className="text-neutral-300 text-sm font-medium font-['Urbanist'] leading-relaxed">
                  We analyze every aspect of your website — from site speed and
                  mobile responsiveness to meta data and content quality
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Link Building */}
          <div className="absolute left-0 top-[680px] w-80 bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
            <div className="text-slate-600 text-7xl font-bold font-['Urbanist'] mb-6">04</div>
            <div className="flex flex-col gap-6">
              <div className="px-6 py-2 bg-lime-400 rounded-full w-fit">
                <span className="text-slate-900 text-sm font-medium font-['Urbanist']">WEEK 3-8</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium font-['Urbanist'] mb-3">
                  Link Building
                </h3>
                <p className="text-neutral-300 text-sm font-medium font-['Urbanist'] leading-relaxed">
                  We perform a detailed site audit to detect structural flaws,
                  content gaps, and technical issues that negatively impact your
                  search engine rankings and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 - Analytics & Reporting */}
          <div className="absolute right-0 top-[880px] w-80 bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
            <div className="text-slate-600 text-7xl font-bold font-['Urbanist'] mb-6">05</div>
            <div className="flex flex-col gap-6">
              <div className="px-6 py-2 bg-lime-400 rounded-full w-fit">
                <span className="text-slate-900 text-sm font-medium font-['Urbanist']">ONGOING</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium font-['Urbanist'] mb-3">
                  Analytics & Reporting
                </h3>
                <p className="text-neutral-300 text-sm font-medium font-['Urbanist'] leading-relaxed">
                  Our team reviews your website's architecture, content
                  relevance, and back-end setup to identify barriers to organic
                  growth and create a clear plan of action.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-[100px] left-[200px] w-80 h-32 rounded-3xl border-2 border-blue-500/40 opacity-60"></div>
          <div className="absolute top-[500px] left-[200px] w-80 h-28 rounded-3xl border-2 border-blue-500/40 opacity-60"></div>
          <div className="absolute top-[780px] right-[200px] w-80 h-32 rounded-3xl border-2 border-blue-500/40 opacity-60"></div>
        </div>
      </div>
    </section>
  );
}