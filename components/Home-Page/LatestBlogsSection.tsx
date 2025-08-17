"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What information do you need to get started?",
    answer: "We need access to your website, Google Analytics, Google Search Console, and any current marketing tools you're using. We'll also want to understand your business goals, target audience, and current challenges during our initial strategy call."
  },
  {
    id: 2,
    question: "Do you work with businesses in my industry?",
    answer: "Yes, we work with businesses across various industries. Our team has experience in e-commerce, SaaS, healthcare, real estate, professional services, and many other sectors."
  },
  {
    id: 3,
    question: "Can you work with my existing marketing team?",
    answer: "Absolutely! We love collaborating with existing marketing teams. We can work as an extension of your team, providing specialized expertise while maintaining clear communication and coordination."
  },
  {
    id: 4,
    question: "What if I'm not satisfied with the results?",
    answer: "We're committed to your success. We provide regular reporting and maintain open communication. If you're not satisfied, we'll work together to adjust our strategy and approach to better meet your goals."
  }
];

const categoryTabs = [
  { id: "getting-started", label: "Getting Started", active: true },
  { id: "seo-services", label: "SEO Services", active: false },
  { id: "landing-page", label: "Landing Page Services", active: false },
  { id: "google-ads", label: "Google Ads Services", active: false }
];

export const LatestBlogsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("getting-started");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center gap-[50px] self-stretch relative bg-[#eeeeee">
      <div className="flex w-[680px] flex-col justify-center items-center gap-12 relative">
        <div className="flex flex-col items-center gap-4 self-stretch relative">
          <div className="flex w-[264px] px-2.5 py-[5px] justify-center items-center gap-1.5 rounded-[45px] border border-solid border-[#1D8FFF] bg-[#E8F4FF] relative">
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 16 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[15px] flex-shrink-0 relative"
            >
              <path d="M5.5 11.25L8 9.34375L10.5 11.25L9.5625 8.15625L12.0625 6.375H9L8 3.125L7 6.375H3.9375L6.4375 8.15625L5.5 11.25ZM8 13.75C7.13542 13.75 6.32292 13.5859 5.5625 13.2578C4.80208 12.9297 4.14062 12.4844 3.57812 11.9219C3.01562 11.3594 2.57031 10.6979 2.24219 9.9375C1.91406 9.17708 1.75 8.36458 1.75 7.5C1.75 6.63542 1.91406 5.82292 2.24219 5.0625C2.57031 4.30208 3.01562 3.64062 3.57812 3.07812C4.14062 2.51562 4.80208 2.07031 5.5625 1.74219C6.32292 1.41406 7.13542 1.25 8 1.25C8.86458 1.25 9.67708 1.41406 10.4375 1.74219C11.1979 2.07031 11.8594 2.51562 12.4219 3.07812C12.9844 3.64062 13.4297 4.30208 13.7578 5.0625C14.0859 5.82292 14.25 6.63542 14.25 7.5C14.25 8.36458 14.0859 9.17708 13.7578 9.9375C13.4297 10.6979 12.9844 11.3594 12.4219 11.9219C11.8594 12.4844 11.1979 12.9297 10.4375 13.2578C9.67708 13.5859 8.86458 13.75 8 13.75Z" 
              fill="#1D8FFF"
            />
            </svg>
            <div 
              className="text-[#1D8FFF] font-urbanist text-sm font-medium leading-[23px] relative"
              style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Got Questions? We've Got Answers.
            </div>
          </div>
          <div 
            className="self-stretch text-[#12579C] text-center font-urbanist text-[50px] font-bold leading-[57px] relative"
            style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            We've Got You Covered
          </div>
          <div 
            className="self-stretch text-[#6A7986] text-center font-urbanist text-base font-normal leading-[23px] relative"
            style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            We know you might have a few doubts — here are the most common questions our clients ask before getting started with Google Ads. Clear, honest, and to the point.
          </div>
        </div>
        <div className="flex justify-center items-start gap-[17px] relative">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex px-2.5 py-[5px] justify-center items-center gap-1.5 rounded-[45px] relative ${
                activeTab === tab.id
                  ? "bg-[#1D8FFF]"
                  : "border border-solid border-[#C9C9C9] bg-[#FAFAFA]"
              }`}
            >
              <div 
                className={`text-center font-urbanist text-sm font-medium leading-[23px] relative ${
                  activeTab === tab.id ? "text-white" : "text-[#7B7B7B]"
                }`}
                style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                {tab.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch relative">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`flex flex-col items-start self-stretch rounded-2xl relative ${
              expandedFaq === faq.id
                ? "px-8 py-[26px] pb-10 gap-4 bg-[#E8F4FF]"
                : "h-[86px] px-8 py-[26px] gap-4 border border-solid border-[#FAFBFB] bg-white"
            }`}
            style={{
              boxShadow: expandedFaq !== faq.id ? "0 1px 4px 0 rgba(25, 33, 61, 0.06)" : "none"
            }}
          >
            <div className="flex justify-between items-center flex-1 relative">
              <div 
                className="max-w-[650px] flex-1 text-[#071F36] font-urbanist text-xl font-semibold leading-[27px] relative"
                style={{ 
                  fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 700
                }}
              >
                {faq.question}
              </div>
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`flex p-[7px] items-center gap-2.5 rounded-full relative ${
                  expandedFaq === faq.id
                    ? "bg-[#1D8FFF]"
                    : "bg-[#FAFBFB]"
                }`}
                style={{
                  boxShadow: expandedFaq === faq.id 
                    ? "0 -1px 1px 0 rgba(0, 0, 0, 0.12) inset, 0 1px 1.5px 0 rgba(255, 255, 255, 0.25) inset, 0 2px 6px 0 rgba(74, 58, 255, 0.10)"
                    : "0 0.5px 1px 0 rgba(25, 33, 61, 0.07)"
                }}
              >
                {expandedFaq === faq.id ? (
                  <svg 
                    width="21" 
                    height="21" 
                    viewBox="0 0 21 21" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20.418px] h-[20.418px] relative"
                  >
                    <path 
                      d="M4.33594 8.13867L10.291 14.0938L16.2461 8.13867" 
                      stroke="white" 
                      strokeWidth="1.70146" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg 
                    width="21" 
                    height="21" 
                    viewBox="0 0 21 21" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20.418px] h-[20.418px] relative"
                  >
                    <path 
                      d="M8.21875 16.582L14.1739 10.6269L8.21875 4.67182" 
                      stroke="#7B7B7B" 
                      strokeWidth="1.70146" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {expandedFaq === faq.id && (
              <div 
                className="max-w-[721px] self-stretch text-[#405364] font-urbanist text-base font-medium leading-[26.56px] relative"
                style={{ 
                  fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 400
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
