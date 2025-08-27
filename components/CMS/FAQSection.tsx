"use client";
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
      question: "How often do you create content?",
      answer:
        "We can deliver content weekly, b We work around your goals and schedule. Whether you prefer content delivered weekly, bi-weekly, or monthly, we adapt to your ideal publishing rhythm — ensuring consistent, quality output that matches your growth strategy.i-weekly, or monthly — based on your goals and plan.",
      isExpanded: true,
    },
    {
      id: 2,
      question: "Do you provide both writing and visuals?",
      isExpanded: false,
    },
    {
      id: 3,
      question: "Can you write for my industry?",
      isExpanded: false,
    },
    {
      id: 4,
      question: "Is the content SEO-optimized?",
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
    <section className="flex flex-col w-full max-w-[1128px] mx-auto px-4 md:px-6 lg:px-0 items-center gap-8 md:gap-12 lg:gap-[50px] relative">
      <header className="flex flex-col w-full max-w-sm md:max-w-lg lg:max-w-[636px] items-center justify-center gap-4 relative">
        <div className="flex w-auto items-center justify-center gap-1.5 px-2.5 py-[5px] relative bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-3 h-3 md:w-[15px] md:h-[15px]"
            alt="Stars"
            src="/CMS/ca/stars-2.svg"
          />

          <p className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs md:text-sm tracking-[0] leading-[23px] whitespace-nowrap">
            Got Questions? We&apos;ve Got Answers.
          </p>
        </div>

        <h2 className="relative w-full [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-tight md:leading-[40px] lg:leading-[57px]">
          We&apos;ve Got You Covered
        </h2>

        <p className="relative w-full [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm md:text-base text-center tracking-[0] leading-relaxed md:leading-[23px]">
          We know you might have a few doubts — here are the most common
          questions our clients ask before getting started with Google Ads.
          Clear, honest, and to the point.
        </p>
      </header>

      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[65px] relative w-full">
        <div
          className="flex-col flex items-start gap-3 md:gap-4 relative w-full"
          role="list"
        >
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-col ${
                item.isExpanded ? "pt-4 md:pt-6 lg:pt-[26px] pb-6 md:pb-8 lg:pb-10" : "py-4 md:py-6 lg:py-[26px]"
              } px-4 md:px-6 lg:px-8 flex-[0_0_auto] ${
                item.isExpanded
                  ? "z-[3] bg-primary-50"
                  : `z-[${
                      3 - index
                    }] bg-neutral-0 border border-solid border-neutral-10 shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)]`
              } rounded-xl md:rounded-2xl flex items-start gap-3 md:gap-4 relative w-full`}
              role="listitem"
            >
              <div
                className="justify-between w-full flex items-center relative"
              >
                <button
                  className="relative flex-1 [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[24px] lg:leading-[27.0px] text-left pr-4"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={item.isExpanded}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  {item.question}
                </button>

                <button
                  className={`inline-flex gap-2.5 p-1.5 md:p-2 lg:p-[7px] flex-shrink-0 ${
                    item.isExpanded
                      ? "bg-primary-300 shadow-[0px_2px_6px_#4a3aff1a,inset_0px_1px_1.5px_#ffffff40,inset_0px_-1px_1px_#0000001f]"
                      : "bg-neutral-10 shadow-[0px_0.5px_1px_0px_rgba(25,33,61,0.07)]"
                  } rounded-full items-center relative`}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={item.isExpanded}
                  aria-label={`${item.isExpanded ? "Collapse" : "Expand"} ${
                    item.question
                  }`}
                >
                  <img
                    className="relative w-4 h-4 md:w-5 md:h-5 lg:w-[20.42px] lg:h-[20.42px]"
                    alt={item.isExpanded ? "Collapse" : "Expand"}
                    src={
                      item.isExpanded
                        ? "/CMS/ca/line-rounded-chevron-down.svg"
                        : "/CMS/ca/line-rounded-chevron-right-2.svg"
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
                  <p className="relative [font-family:'Urbanist',Helvetica] font-medium text-neutral-500 text-sm md:text-base tracking-[0] leading-relaxed md:leading-[22px] lg:leading-[26.6px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-[21px] relative w-full">
          <button className="flex w-full max-w-sm sm:max-w-none sm:w-auto lg:w-[300px] h-12 md:h-[50px] items-center justify-center lg:justify-end gap-2 md:gap-2.5 px-3 md:px-4 lg:px-[3px] py-0 relative bg-primary-300 rounded-[25px] md:rounded-[35px] lg:rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:bg-primary-400 transition-colors">
            <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm md:text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
              Start Creating Today
            </span>

            <div className="inline-flex items-center gap-2.5 p-2 md:p-3 relative flex-shrink-0 bg-primary-50 rounded-[20px] md:rounded-[25px] lg:rounded-[34px] border border-solid border-primary-75">
              <img
                className="relative w-4 h-4 md:w-5 md:h-5"
                alt="Arrow right"
                src="/CMS/ca/arrow-right-2.svg"
              />
            </div>
          </button>

          <button className="all-[unset] box-border w-full max-w-xs sm:max-w-none sm:w-auto lg:w-[220px] flex h-12 md:h-[50px] items-center justify-center gap-2 md:gap-[7px] px-4 md:px-5 lg:px-[19px] py-2 md:py-2.5 relative bg-grey-50 rounded-[25px] md:rounded-[30px] lg:rounded-[33px] border border-solid border-grey-200 hover:bg-grey-75 transition-colors">
            <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-sm md:text-base tracking-[0] leading-4 whitespace-nowrap">
              Chat With Us
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
