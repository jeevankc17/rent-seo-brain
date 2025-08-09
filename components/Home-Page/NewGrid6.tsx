import React from "react";

export default function NewGrid6() {
  return (
    <section className="w-full flex justify-center py-16 bg-gradient-to-br from-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-full h-32 bg-gradient-to-r from-pink-500/10 to-purple-500/10 transform skew-y-1"></div>

      <div className="w-[1128px] flex flex-col justify-start items-center gap-12 relative z-10">
        {/* Header Section */}
        <div className="w-[552px] flex flex-col justify-center items-center gap-6">
          <div className="px-4 py-2 rounded-full border border-amber-500 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
              <span className="text-amber-600 text-sm font-medium font-['Urbanist']">
                Our Success Portfolio
              </span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-sky-700 text-5xl font-bold font-['Urbanist'] leading-[57px] mb-4">
              Real Results for Real Businesses
            </h1>
            <p className="text-slate-500 text-base font-normal font-['Urbanist'] leading-snug max-w-[520px]">
              Don't just take our word for it. See how we've helped businesses
              like yours achieve remarkable growth through strategic content
              marketing.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex justify-between items-start gap-12">
          {/* Testimonial Card */}
          <div className="w-[450px] bg-white rounded-xl shadow-lg border-t-4 border-blue-500 p-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {/* 5 Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 text-base font-medium font-['Urbanist'] leading-relaxed">
                  "The SEO transformation turned our struggling online store
                  into a profitable business. Our organic sales now exceed our
                  paid advertising results."
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    SJ
                  </span>
                </div>
                <div>
                  <div className="text-blue-500 text-base font-semibold font-['Urbanist']">
                    Sarah Johnson
                  </div>
                  <div className="text-neutral-500 text-sm font-normal font-['Urbanist']">
                    Marketing Director at TechFlow Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="flex-1 relative h-[500px]">
            {/* Decorative curved lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 500"
            >
              <path
                d="M50 100 Q200 50 350 100 T550 150"
                stroke="#60a5fa"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M100 300 Q250 250 400 300 T600 350"
                stroke="#60a5fa"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <circle cx="150" cy="120" r="4" fill="#60a5fa" />
              <circle cx="350" cy="180" r="3" fill="#60a5fa" />
              <circle cx="480" cy="320" r="5" fill="#60a5fa" />
            </svg>

            {/* 214% Traffic Growth */}
            <div className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-6 w-80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 17l6-6 4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m21 9-4-4v8h-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sky-700 text-xl font-bold font-['Urbanist']">
                    214%
                  </div>
                  <div className="text-slate-700 text-base font-medium font-['Urbanist']">
                    Traffic Growth
                  </div>
                  <div className="text-neutral-500 text-sm font-medium font-['Urbanist']">
                    Organic traffic increase
                  </div>
                </div>
              </div>
            </div>

            {/* 4X More Pageviews */}
            <div className="absolute top-48 left-0 bg-white rounded-xl shadow-lg p-6 w-80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sky-700 text-xl font-bold font-['Urbanist']">
                    4X
                  </div>
                  <div className="text-slate-700 text-base font-medium font-['Urbanist']">
                    More Pageviews
                  </div>
                  <div className="text-neutral-500 text-sm font-medium font-['Urbanist']">
                    Average session engagement
                  </div>
                </div>
              </div>
            </div>

            {/* 3X Lead Generation */}
            <div className="absolute bottom-0 right-16 bg-white rounded-xl shadow-lg p-6 w-80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="8.5"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="m22 2-5 10-5-4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sky-700 text-xl font-bold font-['Urbanist']">
                    3X
                  </div>
                  <div className="text-slate-700 text-base font-medium font-['Urbanist']">
                    Lead Generation
                  </div>
                  <div className="text-neutral-500 text-sm font-medium font-['Urbanist']">
                    Qualified leads per month
                  </div>
                </div>
              </div>
            </div>

            {/* Large decorative circles */}
            <div className="absolute top-16 left-8 w-64 h-40 rounded-full border border-blue-400 opacity-60"></div>
            <div className="absolute bottom-20 left-16 w-72 h-44 rounded-full border border-blue-400 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
