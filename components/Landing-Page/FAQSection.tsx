"use client";
import React, { useState } from "react";
import AppButton from "@/utils/AppButton";

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
      question: "How long does it take to design a landing page?",
      answer:
        "On average, it takes 4 to 7 working days to design a complete landing page. The timeline may vary depending on the complexity of the page, your brand requirements, and the number of feedback/revision rounds. We always aim for quality with speed — ensuring your page is delivered on time and optimized for results.",
      isExpanded: true,
    },
    {
      id: 2,
      question: "Do you provide content and copywriting?",
      isExpanded: false,
    },
    {
      id: 3,
      question: "Can you also develop or publish the landing page?",
      isExpanded: false,
    },
    {
      id: 4,
      question: "How many revisions do I get?",
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
    <section className="flex flex-col w-full max-w-[1128px] items-center gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0 mx-auto">
      <header className="flex flex-col w-full max-w-[636px] items-center justify-center gap-4 relative flex-[0_0_auto]">
        <div className="flex w-auto items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="/LP/ca/stars-2.svg"
          />

          <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px] text-center">
            Got Questions? We&apos;ve Got Answers.
          </p>
        </div>

        <h2 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-3xl lg:text-[50px] text-center tracking-[0] leading-[40px] lg:leading-[57px]">
          We&apos;ve Got You Covered
        </h2>

        <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
          We know you might have a few doubts — here are the most common
          questions our clients ask before getting started with Google Ads.
          Clear, honest, and to the point.
        </p>
      </header>

      <div className="flex flex-col items-center gap-8 lg:gap-[65px] relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="flex-col flex-[0_0_auto] flex items-start gap-4 relative self-stretch w-full"
          role="list"
        >
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-col ${
                item.isExpanded ? "pt-4 lg:pt-[26px] pb-6 lg:pb-10" : "py-4 lg:py-[26px]"
              } px-4 lg:px-8 flex-[0_0_auto] ${
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
                  item.isExpanded ? "gap-4 lg:gap-[444px]" : "justify-between"
                } self-stretch w-full flex-[0_0_auto] flex items-center relative`}
              >
                <button
                  className="relative flex-1 [font-family:'Urbanist',Helvetica] font-semibold text-neutral-900 text-base lg:text-xl tracking-[0] leading-[22px] lg:leading-[27.0px] text-left"
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
                        ? "/LP/ca/line-rounded-chevron-down.svg"
                        : "/LP/ca/line-rounded-chevron-right-2.svg"
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
                  <p className="relative [font-family:'Urbanist',Helvetica] font-medium text-neutral-500 text-sm lg:text-base tracking-[0] leading-[22px] lg:leading-[26.6px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-[21px] relative flex-[0_0_auto]">
          <AppButton
            text="Book a Design Strategy Call"
            variant="blue"
            size="lg"
          />

          <AppButton
            text="Why Landing Pages Matter"
            variant="white"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};
