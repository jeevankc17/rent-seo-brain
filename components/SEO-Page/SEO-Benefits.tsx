"use client";
import * as React from "react";
import AppButton from "@/utils/AppButton";

function InputDesign() {
  return (
    <div className="flex flex-col justify-center py-4 px-4 lg:py-1 lg:mx-[156px]">
      <div className="flex flex-col gap-8 items-center mt-1.5 lg:flex-row lg:flex-wrap lg:gap-6 lg:items-end max-md:max-w-full">
        <div className="w-full lg:min-w-60 lg:w-[552px] max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="flex gap-1.5 justify-center items-center py-1.5 max-w-full text-xs font-medium leading-loose text-amber-500 capitalize border border-amber-500 border-solid rounded-[45px] w-auto lg:text-sm lg:w-[271px]">
              <div className="flex gap-1.5 justify-center items-center self-stretch px-2 py-0.5 my-auto bg-orange-50 border-orange-400 border-solid border-[0.2px] min-w-0 rounded-[45px] w-auto lg:min-w-60 lg:w-[257px]">
                <img
                  src="/SEO/ca/growth-search.svg"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
                />
                <div
                  className="self-stretch my-auto text-amber-500"
                  data-name="Your growth starts with a search."
                >
                  Your growth starts with a search.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-4 w-full min-h-auto lg:min-h-44 max-md:max-w-full">
              <div
                className="text-xl font-bold text-sky-700 leading-[24px] text-center sm:text-2xl md:text-3xl lg:text-5xl lg:leading-[57px] lg:text-left max-md:max-w-full max-md:text-4xl max-md:leading-[51px]"
                data-name="What SEO Is and Why Your Business Needs It"
              >
                What SEO Is and Why Your Business Needs It
              </div>
              <div
                className="mt-4 text-sm leading-5 text-slate-900 text-center lg:text-base lg:leading-6 lg:text-left max-md:max-w-full"
                data-name="Search Engine Optimization (SEO) is how your business shows up when it matters most — right when people are searching for what you offer."
              >
                Search Engine Optimization (SEO) is how your business shows up
                when it matters most — right when people are searching for what
                you offer.
              </div>
            </div>
          </div>
          <div
            className="mt-8 w-full max-w-full lg:mt-16 lg:max-w-[552px] max-md:mt-10 max-md:max-w-full"
            data-name="right part"
          >
            <div className="w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full">
                <div className="flex gap-2.5 justify-center items-center self-stretch my-auto bg-blue-500 h-[26px] min-h-[26px] rounded-[100px] w-[26px]">
                  <img
                    src="/SEO/ca/appear-top.svg"
                    className="object-contain self-stretch my-auto w-5 aspect-square"
                  />
                </div>
                <div
                  className="self-stretch my-auto text-base font-medium text-slate-900 lg:text-lg"
                  data-name="Appear at the top when it counts"
                >
                  Appear at the top when it counts
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-5 w-full max-md:max-w-full">
                <div className="flex gap-2.5 justify-center items-center self-stretch my-auto bg-blue-500 h-[26px] min-h-[26px] rounded-[100px] w-[26px]">
                  <img
                    src="/SEO/ca/appear-top.svg"
                    className="object-contain self-stretch my-auto w-5 aspect-square"
                  />
                </div>
                <div
                  className="self-stretch my-auto text-base font-medium text-slate-900 lg:text-lg"
                  data-name="Attract high-intent, ready-to-convert visitors"
                >
                  Attract high-intent, ready-to-convert visitors
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-5 w-full max-md:max-w-full">
                <div className="flex gap-2.5 justify-center items-center self-stretch my-auto bg-blue-500 h-[26px] min-h-[26px] rounded-[100px] w-[26px]">
                  <img
                    src="/SEO/ca/appear-top.svg"
                    className="object-contain self-stretch my-auto w-5 aspect-square"
                  />
                </div>
                <div
                  className="self-stretch my-auto text-base font-medium text-slate-900 lg:text-lg"
                  data-name="Build long-term authority and trust online"
                >
                  Build long-term authority and trust online
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-5 w-full max-md:max-w-full">
                <div className="flex gap-2.5 justify-center items-center self-stretch my-auto bg-blue-500 h-[26px] min-h-[26px] rounded-[100px] w-[26px]">
                  <img
                    src="/SEO/ca/appear-top.svg"
                    className="object-contain self-stretch my-auto w-5 aspect-square"
                  />
                </div>
                <div
                  className="self-stretch my-auto text-base font-medium text-slate-900 lg:text-lg"
                  data-name="Enhance website structure and user experience"
                >
                  Enhance website structure and user experience
                </div>
              </div>
            </div>
            <AppButton
              variant="blue"
              size="lg"
              className="mt-8 w-full lg:w-[243px]"
              text="See How SEO Can Help"
              icon={
                <img
                  src="/SEO/ca/arrow-right-blue.svg"
                  className="w-full h-full object-contain"
                  alt=""
                  aria-hidden="true"
                />
              }
              iconPosition="right"
            />
          </div>
        </div>
        <div
          className="px-px py-0.5 w-full lg:min-w-60 lg:w-[552px] max-md:max-w-full"
          // space={0}
        >
          <div className="flex gap-5 max-md:flex-col max-md:">
            <div className="w-full lg:w-2/5 max-md:ml-0 max-md:w-full" data-name="column">
              <div className="flex flex-col self-stretch px-5 py-6 my-auto mr-0 bg-white rounded-full lg:px-10 lg:py-8 max-md:px-5 max-md:mt-10">
                <img
                  src="/SEO/ca/benefit-1.svg"
                  className="object-contain aspect-[0.89] stroke-[1px] stroke-neutral-300 w-[40px] lg:w-[49px]"
                />
                <img
                  src="/SEO/ca/benefit-2.svg"
                  className="object-contain self-end mt-16 aspect-[3.83] stroke-[1px] stroke-stone-300 w-[75px] lg:mt-24 lg:w-[92px] max-md:mt-10"
                />
              </div>
            </div>
            <div
              className="ml-0 w-full lg:ml-5 lg:w-3/5 max-md:ml-0 max-md:w-full"
              data-name="column"
            >
              <div className="flex flex-col items-start mt-0 w-full">
                <div className="flex gap-1.5 items-start ml-2 lg:ml-3.5 max-md:ml-2.5">
                  <img
                    src="/SEO/ca/benefit-3.svg"
                    className="object-contain shrink-0 self-end mt-6 max-w-full aspect-[0.65] stroke-[1px] stroke-stone-300 w-[110px] lg:mt-9 lg:w-[136px]"
                  />
                  <div className="flex flex-col justify-center self-start px-2.5 py-2 bg-white rounded-md shadow-[0px_4px_33px_rgba(0,0,0,0.25)] lg:px-3.5 lg:py-2.5">
                    <div>
                      <div
                        className="text-xs font-medium text-neutral-900 lg:text-sm"
                        data-name="Long-term ROI"
                      >
                        Long-term ROI
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <div
                          className="self-stretch my-auto text-lg font-semibold text-neutral-900 lg:text-xl"
                          data-name="12:1 Return"
                        >
                          12:1 Return
                        </div>
                        <div className="flex gap-2 justify-center items-center self-stretch px-1.5 my-auto w-8 h-8 bg-green-600 rounded-[100px] lg:w-9 lg:h-9">
                          <img
                            src="/SEO/ca/check-green.svg"
                            className="object-contain self-stretch my-auto w-5 aspect-square lg:w-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/SEO/ca/benefit-4.svg"
                  className="object-contain mt-2 max-w-full aspect-[250] stroke-[1px] stroke-stone-300 w-[210px] lg:w-[264px] max-md:ml-1"
                />
                <img
                  src="/SEO/ca/benefit-5.svg"
                  className="object-contain mt-2 max-w-full aspect-[333.33] stroke-[1px] stroke-stone-300 w-[230px] lg:w-[291px] max-md:ml-1"
                />
                <img
                  src="/SEO/ca/benefit-6.svg"
                  className="object-contain self-stretch mt-2 w-full aspect-[333.33] stroke-[1px] stroke-stone-300 max-md:ml-1"
                />
                <div className="flex z-10 shrink-0 ml-16 bg-blue-400 rounded-full border-2 border-white border-solid shadow-sm h-[9px] w-[9px] lg:ml-24 lg:h-[11px] lg:w-[11px] max-md:ml-2.5" />
                <img
                  src="/SEO/ca/benefit-6.svg"
                  className="object-contain self-stretch w-full aspect-[333.33] stroke-[1px] stroke-stone-300 max-md:ml-1"
                />
                <img
                  src="/SEO/ca/benefit-7.svg"
                  className="object-contain mt-2 max-w-full aspect-[1.47] stroke-[1px] stroke-stone-300 w-[170px] lg:w-[217px]"
                />
                <div className="flex gap-2.5 items-end self-center p-4 mt-6 rounded-2xl border border-black border-solid bg-stone-50 shadow-[0px_4px_0px_rgba(255,152,0,1)] lg:gap-3 lg:p-5 lg:rounded-3xl">
                  <div
                    className="flex gap-2 justify-center items-center bg-lime-300 h-[45px] min-h-[45px] rounded-[81.25px] w-[45px] lg:h-[52px] lg:min-h-[52px] lg:w-[52px]"
                    data-name="History"
                  >
                    <img
                      src="/SEO/ca/history.svg"
                      className="object-contain self-stretch my-auto w-5 aspect-square lg:w-6"
                    />
                  </div>
                  <div className="leading-tight w-auto lg:w-[123px]">
                    <div
                      className="text-sm text-neutral-900 lg:text-base"
                      data-name="Brand Awareness"
                    >
                      Brand Awareness
                    </div>
                    <div
                      className="mt-1 text-lg font-semibold text-neutral-900 lg:text-xl"
                      data-name="+156%"
                    >
                      +156%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputDesign;
