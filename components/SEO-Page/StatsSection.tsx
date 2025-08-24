"use client";
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
  isExpanded: boolean;
}

export const StatsSection: React.FC = () => {
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
    <section className="flex flex-col w-[1128px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="flex flex-col w-[636px] items-center justify-center gap-4 relative flex-[0_0_auto]">
        <div className="flex w-[264px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="/SEO/ca/stars-2.svg"
          />

          <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
            Got Questions? We&apos;ve Got Answers.
          </p>
        </div>

        <h2 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
          We&apos;ve Got You Covered
        </h2>

        <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
          We know you might have a few doubts — here are the most common
          questions our clients ask before getting started with Google Ads.
          Clear, honest, and to the point.
        </p>
      </header>

      <div className="flex flex-col items-center gap-[65px] relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="flex-col flex-[0_0_auto] flex items-start gap-4 relative self-stretch w-full"
          role="list"
        >
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-col ${
                item.isExpanded ? "pt-[26px] pb-10" : "py-[26px]"
              } px-8 flex-[0_0_auto] ${
                item.isExpanded
                  ? "z-[3] bg-primary-50"
                  : `z-[${
                      3 - index
                    }] bg-neutral-0 border border-solid border-neutral-10 shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)]`
              } rounded-2xl flex items-start gap-4 relative self-stretch w-full`}
              role="listitem"
            >
              <div
                className={`${
                  item.isExpanded ? "gap-[444px]" : "justify-between"
                } self-stretch w-full flex-[0_0_auto] flex items-center relative`}
              >
                <button
                  className="relative flex-1 [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-xl tracking-[0] leading-[27.0px] text-left"
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
                    className="relative w-[20.42px] h-[20.42px]"
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
                  <p className="relative [font-family:'Urbanist',Helvetica] font-medium text-neutral-500 text-base tracking-[0] leading-[26.6px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="inline-flex items-center justify-center gap-[21px] relative flex-[0_0_auto]">
          <button className="flex w-[300px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1]">
            <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
              Talk To A Google Ads Specialist
            </span>

            <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
              <img
                className="relative w-5 h-5"
                alt="Arrow right"
                src="/SEO/ca/arrow-right-2.svg"
              />
            </div>
          </button>

          <button className="all-[unset] box-border w-[220px] flex h-[50px] items-center justify-center gap-[7px] px-[19px] py-2.5 relative bg-grey-50 rounded-[33px] border border-solid border-grey-200">
            <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-[#091e42] text-base tracking-[0] leading-4 whitespace-nowrap">
              Know More About Us
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
