"use client";

import React, { useState } from "react";

const faqData = {
  "getting-started": [
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
  ],
  "seo-services": [
    {
      id: 1,
      question: "How do you approach SEO strategy?",
      answer: "Our SEO strategy begins with a comprehensive audit of your website, followed by keyword research, technical optimization, content planning, and ongoing monitoring. We focus on both on-page and off-page SEO to ensure sustainable growth."
    },
    {
      id: 2,
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. Typically, you'll start seeing some improvements in 3-6 months, with significant results appearing in 6-12 months. The timeline depends on your industry competitiveness, website age, and current SEO health."
    },
    {
      id: 3,
      question: "Do you provide monthly SEO reports?",
      answer: "Yes, we provide detailed monthly reports that include keyword rankings, organic traffic growth, backlink acquisition, and recommendations for further improvement. We also schedule monthly calls to discuss progress and strategy."
    },
    {
      id: 4,
      question: "What's included in your SEO services?",
      answer: "Our SEO services include technical SEO audit, keyword research, on-page optimization, content strategy, link building, local SEO (if applicable), and continuous performance monitoring with monthly reporting."
    }
  ],
  "landing-page": [
    {
      id: 1,
      question: "How many landing pages do you create?",
      answer: "The number of landing pages depends on your campaign needs. We typically start with 3-5 core landing pages for your main offerings, then create additional pages for specific campaigns, products, or audience segments as needed."
    },
    {
      id: 2,
      question: "Do you A/B test landing pages?",
      answer: "Yes, we implement A/B testing for all key landing pages. We test different headlines, CTAs, layouts, and content variations to optimize conversion rates continuously."
    },
    {
      id: 3,
      question: "What's your process for creating landing pages?",
      answer: "Our process includes: 1) Strategy session to define goals 2) Audience research 3) Wireframing 4) Copywriting 5) Design 6) Development 7) Quality assurance 8) A/B testing setup 9) Performance monitoring and optimization."
    },
    {
      id: 4,
      question: "Can you integrate landing pages with my CRM?",
      answer: "Absolutely. We have experience integrating with various CRMs including HubSpot, Salesforce, Marketo, and many others. We ensure proper tracking and lead capture aligned with your sales process."
    }
  ],
  "google-ads": [
    {
      id: 1,
      question: "What's your management fee for Google Ads?",
      answer: "Our management fee structure is flexible based on your ad spend. Typically, we charge a percentage of monthly ad spend or a fixed monthly fee, whichever works better for your business. We're transparent about costs with no hidden fees."
    },
    {
      id: 2,
      question: "How do you optimize Google Ads campaigns?",
      answer: "We optimize campaigns through continuous keyword refinement, ad copy testing, bid strategy adjustments, landing page optimization, and audience targeting improvements. We also monitor competitors and industry trends to stay ahead."
    },
    {
      id: 3,
      question: "Do you manage Shopping Ads?",
      answer: "Yes, we have extensive experience with Google Shopping campaigns. We can set up and optimize your product feed, create compelling product listings, and implement strategies to improve ROI for e-commerce businesses."
    },
    {
      id: 4,
      question: "How often will I receive reports?",
      answer: "We provide comprehensive monthly reports with detailed performance metrics. For clients with larger budgets or who request it, we can provide bi-weekly updates. You'll also have access to a real-time dashboard to monitor performance anytime."
    }
  ]
};

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
    <div className="flex flex-col items-center gap-8 lg:gap-[50px] self-stretch relative bg-[#eeeeee] px-4 lg:px-8 py-12 lg:py-16 w-full">
      <div className="flex w-full max-w-6xl flex-col justify-center items-center gap-8 lg:gap-12 relative">
        <div className="flex flex-col items-center gap-4 self-stretch relative">
          <div className="flex w-full max-w-[264px] px-2.5 py-[5px] justify-center items-center gap-1.5 rounded-[35px] lg:rounded-[45px] border border-solid border-[#1D8FFF] bg-[#E8F4FF] relative">
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
              className="text-[#1D8FFF] font-urbanist text-xs lg:text-sm font-medium leading-[18px] lg:leading-[23px] relative"
              style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Got Questions? We've Got Answers.
            </div>
          </div>
          <div 
            className="self-stretch text-[#12579C] text-center font-urbanist text-3xl md:text-4xl lg:text-[50px] font-bold leading-[36px] md:leading-[46px] lg:leading-[57px] relative"
            style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            We've Got You Covered
          </div>
          <div 
            className="self-stretch text-[#6A7986] text-center font-urbanist text-base lg:text-lg font-normal leading-[24px] lg:leading-[28px] max-w-3xl mx-auto relative"
            style={{ fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            We know you might have a few doubts — here are the most common questions our clients ask before getting started. Clear, honest, and to the point.
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-start gap-3 lg:gap-4 relative w-full max-w-4xl mx-auto">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedFaq(1);
              }}
              className={`flex px-4 lg:px-5 py-2.5 justify-center items-center gap-1.5 rounded-[35px] lg:rounded-[45px] relative ${
                activeTab === tab.id
                  ? "bg-[#1D8FFF] shadow-sm"
                  : "border border-solid border-[#C9C9C9] bg-[#FAFAFA] hover:bg-[#F0F0F0]"
              } transition-colors duration-200`}
            >
              <div 
                className={`text-center font-urbanist text-sm lg:text-base font-medium leading-[18px] lg:leading-[23px] relative ${
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
      
      <div className="flex flex-col items-start gap-4 self-stretch relative w-full max-w-4xl mx-auto">
        {faqData[activeTab as keyof typeof faqData].map((faq) => (
          <div
            key={faq.id}
            className={`flex flex-col items-start self-stretch rounded-xl lg:rounded-2xl relative cursor-pointer ${
              expandedFaq === faq.id
                ? "px-6 lg:px-8 py-5 lg:py-6 pb-6 lg:pb-8 gap-4 bg-[#E8F4FF]"
                : "h-auto lg:h-[86px] px-6 lg:px-8 py-5 lg:py-6 gap-4 border border-solid border-[#EAEAEA] bg-white"
            } transition-all duration-300`}
            style={{
              boxShadow: expandedFaq !== faq.id ? "0 2px 8px 0 rgba(25, 33, 61, 0.08)" : "none"
            }}
            onClick={() => toggleFaq(faq.id)}
          >
            <div className="flex justify-between items-center flex-1 relative w-full">
              <div 
                className="max-w-[650px] flex-1 text-[#071F36] font-urbanist text-lg lg:text-xl font-semibold leading-[24px] lg:leading-[28px] relative"
                style={{ 
                  fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 700
                }}
              >
                {faq.question}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card click event from firing
                  toggleFaq(faq.id);
                }}
                className={`flex p-2 items-center gap-2.5 rounded-full relative ${
                  expandedFaq === faq.id
                    ? "bg-[#1D8FFF]"
                    : "bg-[#FAFBFB]"
                } transition-colors duration-200`}
                style={{
                  boxShadow: expandedFaq === faq.id 
                    ? "0 -1px 1px 0 rgba(0, 0, 0, 0.12) inset, 0 1px 1.5px 0 rgba(255, 255, 255, 0.25) inset, 0 2px 6px 0 rgba(74, 58, 255, 0.10)"
                    : "0 0.5px 2px 0 rgba(25, 33, 61, 0.10)"
                }}
                aria-label={expandedFaq === faq.id ? "Collapse answer" : "Expand answer"}
              >
                {expandedFaq === faq.id ? (
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 21 21" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 lg:w-5 lg:h-5 relative"
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
                    width="20" 
                    height="20" 
                    viewBox="0 0 21 21" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 lg:w-5 lg:h-5 relative"
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
                className="max-w-[721px] self-stretch text-[#405364] font-urbanist text-base lg:text-lg font-normal leading-[24px] lg:leading-[28px] relative pt-2"
                style={{ 
                  fontFamily: 'Urbanist, -apple-system, Roboto, Helvetica, sans-serif'
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