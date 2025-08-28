"use client";
import AppButton from "@utils/AppButton";
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
  isExpanded: boolean;
}

export const FAQSection: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "How long does SEO take to work?",
      answer:
        "SEO is not a quick fix — it’s a long-term strategy that builds momentum over time. Most businesses begin seeing measurable improvements in traffic, keyword rankings, and lead quality within 3 to 6 months..",
      isExpanded: true,
    },
    {
      id: 2,
      question: "Can I stop SEO after a few months?",
      isExpanded: false,
    },
    {
      id: 3,
      question: "Do you provide content as part of SEO?",
      isExpanded: false,
    },
    {
      id: 4,
      question: "How do you measure the success of SEO?",
      isExpanded: false,
    },
  ]);

  const toggleFAQ = (id: number) => {
    setFaqItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, isExpanded: !item.isExpanded }
          : { ...item, isExpanded: false }
      )
    );
  };

  return (
    <section className="flex flex-col w-full max-w-[1128px] items-center gap-8 relative flex-[0_0_auto] px-4 lg:gap-[50px] lg:px-0">
      <header className="flex flex-col w-full max-w-[636px] items-center justify-center gap-3 relative flex-[0_0_auto] lg:gap-4">
        <div className="flex w-full max-w-[264px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-3 h-3 lg:w-[15px] lg:h-[15px]"
            alt="Stars"
            src="/SEO/ca/stars-2.svg"
          />

          <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs tracking-[0] leading-[20px] whitespace-nowrap lg:text-sm lg:leading-[23px]">
            Got Questions? We&apos;ve Got Answers.
          </p>
        </div>

        <h2 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl text-center tracking-[0] leading-[24px] md:text-3xl md:leading-[36px] lg:text-[50px] lg:leading-[57px]">
          We&apos;ve Got You Covered
        </h2>

        <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm text-center tracking-[0] leading-[20px] lg:text-base lg:leading-[23px]">
          We know you might have a few doubts — here are the most common
          questions our clients ask before getting started with Google Ads.
          Clear, honest, and to the point.
        </p>
      </header>

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto] lg:gap-[65px]">
        <div
          className="flex-col flex-[0_0_auto] flex items-start gap-4 relative self-stretch w-full"
          role="list"
        >
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-col ${
                item.isExpanded ? "pt-4 pb-6 lg:pt-[26px] lg:pb-10" : "py-4 lg:py-[26px]"
              } px-4 lg:px-8 flex-[0_0_auto] ${
                item.isExpanded
                  ? "z-[3] bg-primary-50"
                  : `z-[${
                      3 - index
                    }] bg-neutral-0 border border-solid border-neutral-10 shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)]`
              } rounded-2xl flex items-start gap-3 lg:gap-4 relative self-stretch w-full`}
              role="listitem"
            >
              <div
                className="justify-between self-stretch w-full flex-[0_0_auto] flex items-center relative"
              >
                <button
                  className="relative flex-1 [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-base tracking-[0] leading-[22px] text-left lg:text-xl lg:leading-[27.0px]"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={item.isExpanded}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  {item.question}
                </button>

                <button
                  className={`inline-flex gap-2.5 p-[7px] flex-[0_0_auto] ${
                    item.isExpanded
                      ? "bg-primary-300 shadow-[0px_2px_6px_#4a3aff1a,inset_0px_1px_1.5px_#ffffff40,inset_0px_-1px_1px_#0000001f]"
                      : "bg-neutral-10 shadow-[0px_0.5px_1px_0px_rgba(25,33,61,0.07)]"
                  } rounded-[100px] items-center relative`}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={item.isExpanded}
                  aria-label={`${item.isExpanded ? "Collapse" : "Expand"} ${
                    item.question
                  }`}
                >
                  <img
                    className="relative w-4 h-4 lg:w-[20.42px] lg:h-[20.42px]"
                    alt={item.isExpanded ? "Collapse" : "Expand"}
                    src={
                      item.isExpanded
                        ? "/SEO/ca/line-rounded-chevron-down.svg"
                        : "/SEO/ca/line-rounded-chevron-right-2.svg"
                    }
                  />
                </button>
              </div>

              {item.isExpanded && item.answer && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <p className="relative [font-family:'Urbanist',Helvetica] font-medium text-neutral-500 text-sm tracking-[0] leading-[22px] lg:text-base lg:leading-[26.6px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto] lg:inline-flex lg:flex-row lg:gap-[21px]">
         
          <AppButton variant="blue" size="lg" text="Talk To A Google Ads Specialist" className="w-full max-w-[380px] lg:w-[360px]" />
            

          <AppButton variant="white" size="lg" text="Know More About Us" className="w-full max-w-[260px]" />
        </div>
      </div>
    </section>
  );
};
