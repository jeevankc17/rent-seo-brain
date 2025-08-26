import type { NextPage } from "next";
import Image from "next/image";

export type HomePageType = {
  className?: string;
};

const HomePage: NextPage<HomePageType> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-[1440px] mx-auto bg-neutral-900 h-auto min-h-screen lg:h-[960px] overflow-hidden text-center text-xs md:text-base text-gray-200 font-urbanist ${className}`}
    >
      <Image
        className="hidden lg:block absolute top-[3519px] left-[-630px] w-[969.2px] h-[965.3px] object-contain"
        width={969.2}
        height={965.3}
        sizes="100vw"
        alt=""
        src="/ellipse-41.svg"
      />
      <Image
        className="hidden lg:block absolute top-[1980px] left-[-595px] w-[877.8px] h-[677.6px] object-contain"
        width={877.8}
        height={677.6}
        sizes="100vw"
        alt=""
        src="/ellipse-46.svg"
      />
      <Image
        className="hidden lg:block absolute top-[2312px] left-[991px] w-[841.8px] h-[963px] object-contain"
        width={841.8}
        height={963}
        sizes="100vw"
        alt=""
        src="/ellipse-46.svg"
      />
      <Image
        className="absolute top-[3328.7px] left-[970px] w-[849px] h-[965.7px] object-contain"
        width={849}
        height={965.7}
        sizes="100vw"
        alt=""
        src="/ellipse-46.svg"
      />
      <Image
        className="absolute top-[5212.9px] left-[923.7px] w-[1020.1px] h-[1287.5px] object-contain"
        width={1020.1}
        height={1287.5}
        sizes="100vw"
        alt=""
        src="/ellipse-44.svg"
      />
      <Image
        className="absolute top-[4831px] left-[-293px] w-[792.4px] h-[927.9px] object-contain"
        width={792.4}
        height={927.9}
        sizes="100vw"
        alt=""
        src="/ellipse-47.svg"
      />
      <Image
        className="absolute top-[6397px] left-[-361.4px] w-[801.5px] h-[941px] object-contain"
        width={801.5}
        height={941}
        sizes="100vw"
        alt=""
        src="/ellipse-53.svg"
      />
      <Image
        className="absolute top-[7239px] left-[940px] w-[988.7px] h-[904.2px] object-contain"
        width={988.7}
        height={904.2}
        sizes="100vw"
        alt=""
        src="/ellipse-53.svg"
      />
      <Image
        className="absolute top-[8721px] left-[1015px] w-[943.8px] h-[997.8px] object-contain"
        width={943.8}
        height={997.8}
        sizes="100vw"
        alt=""
        src="/ellipse-53.svg"
      />
      <Image
        className="absolute top-[8745px] left-[-405px] w-[785.8px] h-[889.1px] object-contain"
        width={785.8}
        height={889.1}
        sizes="100vw"
        alt=""
        src="/ellipse-50.svg"
      />
      <div className="hidden lg:flex absolute top-[514.1px] left-[-187.3px] w-[602.1px] h-[809.5px] overflow-hidden items-center justify-center">
        <Image
          className="w-full h-full object-cover absolute left-[153px] top-[0px] [transform:scale(1)]"
          width={602.1}
          height={809.5}
          sizes="100vw"
          alt=""
          src="/ellipse-53.svg"
        />
      </div>
      <Image
        className="absolute top-[4215px] left-[1049px] w-[602.1px] h-[809.5px] object-contain"
        width={602.1}
        height={809.5}
        sizes="100vw"
        alt=""
        src="/ellipse-53.svg"
      />
      <div className="absolute top-[1025px] left-[1139px] w-[602.1px] h-[809.5px] overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
          width={602.1}
          height={809.5}
          sizes="100vw"
          alt=""
          src="/ellipse-53.svg"
        />
      </div>
      <Image
        className="absolute top-[8935px] left-[797px] w-[51px] h-[51px] object-cover"
        width={51}
        height={51}
        sizes="100vw"
        alt=""
        src="/image-128@2x.png"
      />
      <div className="absolute top-[0px] left-1/2 transform -translate-x-1/2 bg-Foundation-Neutral-Scale-N1000 w-full max-w-[1440px] h-auto min-h-screen lg:h-[1041px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1419.5px] h-[1041px] overflow-hidden flex items-center justify-center">
          <Image
            className="w-full h-full object-cover absolute left-[10px] top-[0px] [transform:scale(1)]"
            width={1419.5}
            height={1041}
            sizes="100vw"
            alt=""
            src="/bg2@2x.png"
          />
        </div>
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 lg:top-[260px] lg:left-[643px] w-[80px] lg:w-[154px] h-[80px] lg:h-[142px] overflow-hidden flex items-center justify-center">
          <Image
            className="w-full h-full object-cover absolute left-[0px] top-[160px] [transform:scale(6.911)]"
            width={154}
            height={142}
            sizes="100vw"
            alt=""
            src="/frame-2121458209.svg"
          />
        </div>
        <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 w-full max-w-[320px] sm:max-w-[480px] md:max-w-[630px] lg:w-[630px] flex flex-col items-center justify-start gap-6 lg:gap-11 text-xl md:text-3xl lg:text-[50px] px-4 lg:px-0">
          <div className="self-stretch flex flex-col items-center justify-center gap-4">
            <b className="w-full max-w-[618px] relative leading-[24px] md:leading-[36px] lg:leading-[57px] inline-block text-white text-center">
              High-Converting Landing Pages That Sell
            </b>
            <div className="w-full max-w-[640px] relative text-sm md:text-base text-grey-200 leading-[18px] md:leading-[23px] font-normal inline-block text-center px-2 lg:px-0">
              Our SEO-focused design team creates landing pages that convert
              visitors into customers. Proven designs that drive results for
              your business.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-[13px] text-sm md:text-base text-Foundation-Neutral-Scale-N0">
            <div className="w-full max-w-[248px] shadow-[0px_4px_14.7px_rgba(47,_152,_255,_0.63)] rounded-[45px] bg-primary-300 h-[50px] flex flex-row items-center justify-end py-0 px-[3px] box-border gap-2.5">
              <div className="relative leading-[23px] capitalize font-normal text-white">
                Start my landing page
              </div>
              <Image
                className="w-11 rounded-[34px] h-11"
                width={44}
                height={44}
                sizes="100vw"
                alt=""
                src="/frame-1261155419.svg"
              />
            </div>
            <div className="w-full max-w-[220px] rounded-[33px] bg-white border-Foundation-Grey-Scale-G200 border-solid border-[1px] box-border h-[50px] flex flex-row items-center justify-center py-2.5 px-[19px] gap-[7px] text-left text-gray-100">
              <div className="relative leading-[100%] capitalize font-normal text-black">
                see how it works
              </div>
              <Image
                className="w-5 relative h-5 overflow-hidden shrink-0"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/arrowright.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[400px] sm:top-[500px] lg:top-[119px] left-1/2 transform -translate-x-1/2 w-full max-w-[1437px] h-auto lg:h-[922px] text-left text-black px-4 lg:px-0">
          <Image
            className="hidden lg:block absolute top-[535px] left-[calc(50%_-_184.5px)] rounded-[10.7px] w-[408px] h-[261px]"
            width={408}
            height={261}
            sizes="100vw"
            alt=""
            src="/vector-2539.svg"
          />
          <Image
            className="absolute top-[758px] left-[1065px] rounded-[46.7px] w-px h-[209px]"
            width={1}
            height={209}
            sizes="100vw"
            alt=""
            src="/vector-2538.svg"
          />
          <Image
            className="hidden lg:block absolute top-[0px] left-[1197px] rounded-[46.7px] w-60 h-[466px]"
            width={240}
            height={466}
            sizes="100vw"
            alt=""
            src="/vector-2536.svg"
          />
          <Image
            className="hidden lg:block absolute top-[406px] left-[1053px] rounded-[46.7px] w-96 h-[153px]"
            width={384}
            height={153}
            sizes="100vw"
            alt=""
            src="/vector-2537.svg"
          />
          <Image
            className="hidden lg:block absolute top-[406px] left-[0px] rounded-[46.7px] w-96 h-[516px]"
            width={384}
            height={516}
            sizes="100vw"
            alt=""
            src="/vector-2535.svg"
          />
          <Image
            className="hidden lg:block absolute top-[0px] left-[0px] rounded-[60px] w-60 h-[466px]"
            width={240}
            height={466}
            sizes="100vw"
            alt=""
            src="/vector-2534.svg"
          />
          <div className="absolute top-[78px] left-[240px] rounded-[9px] max-w-full h-[23px] overflow-hidden flex items-center justify-center">
            <Image
              className="overflow-hidden h-full object-cover absolute left-[0px] top-[2px] w-full [transform:scale(1)]"
              width={16.5}
              height={23}
              sizes="100vw"
              alt=""
              src="/vector-2541.svg"
            />
          </div>
          <div className="hidden lg:flex absolute top-[20px] left-[10px] sm:top-[147px] sm:left-[120px] lg:left-[120px] shadow-[0px_4px_18.1px_rgba(29,_143,_255,_0.2)] rounded-xl bg-white w-[200px] sm:w-[225px] flex-col items-start justify-start py-[11px] px-[13px] box-border gap-2">
            <div className="self-stretch relative leading-[23px] font-normal">
              Conversion Rate
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-2.5 text-red">
              <div className="flex p-4 justify-center items-center gap-[13px] border-b border-[rgba(123,123,123,0.22)]">
                <div className="flex items-center gap-[7px]">
                  <span className="text-[#E51A1A] text-base font-semibold leading-[23px] font-[Urbanist]">
                    12%
                  </span>
                  <div className="flex flex-col gap-[6px]">
                    <span className="text-[#071F36] text-xs font-medium leading-[23px] font-[Urbanist]">
                      Without RentSEOBrain
                    </span>
                    <div className="w-[50px] h-[7px] bg-[#ECEEF1] rounded-[3.5px]" />
                  </div>
                </div>
                {/* Toggle Off */}
                <div className="w-[35px] h-[21px] rounded-[69px] bg-[rgba(120,120,128,0.16)] p-[1px] flex items-center">
                  <div className="w-[19px] h-[19px] bg-white rounded-full shadow-[0_0_0_0.7px_rgba(0,0,0,0.04),_0_2px_5px_0_rgba(0,0,0,0.15),_0_2px_1px_0_rgba(0,0,0,0.06)]" />
                </div>
              </div>
              <div className="self-stretch border-gray-400 border-solid border-b-[1px] flex flex-row items-center justify-center p-4 gap-[26px] text-Foundation-Primary-Scale-P300">
                <div className="flex p-4 justify-center items-center gap-[26px] border-b border-[rgba(123,123,123,0.22)]">
                  <div className="flex items-center gap-[7px] ml-[60px]">
                    <span className="text-[#1D8FFF] text-base font-semibold leading-[23px] font-[Urbanist]">
                      75%
                    </span>
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[#071F36] text-xs font-medium leading-[23px] font-[Urbanist]">
                        With RentSEOBrain
                      </span>
                      <div className="w-[50px] h-[7px] bg-[#ECEEF1] rounded-[3.5px]" />
                    </div>
                  </div>
                  {/* Toggle On */}
                  <div className="w-[35px] h-[21px] rounded-[69px] bg-[#00B45C] p-[1px] flex items-center justify-end">
                    <div className="w-[19px] h-[19px] bg-white rounded-full shadow-[0_0_0_0.7px_rgba(0,0,0,0.04),_0_2px_5px_0_rgba(0,0,0,0.15),_0_2px_1px_0_rgba(0,0,0,0.06)]" />
                  </div>
                </div>

                <div className="w-[35px] relative rounded-[68.6px] bg-mediumseagreen h-[21.3px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_9.25px)] right-[1.4px] shadow-[0px_0px_0px_0.69px_rgba(0,_0,_0,_0.04),_0px_2.1px_5.5px_rgba(0,_0,_0,_0.15),_0px_2.1px_0.7px_rgba(0,_0,_0,_0.06)] rounded-[68.6px] bg-Foundation-Neutral-Scale-N0 w-[18.5px] h-[18.5px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[250px] right-[10px] sm:top-[162px] sm:right-auto sm:left-[1085px] lg:left-[1085px] shadow-[0px_4px_31.9px_rgba(29,_143,_255,_0.2)] rounded-xl bg-white w-[200px] sm:w-[247px] flex flex-col items-start justify-center py-2.5 px-3.5 box-border gap-[11px] text-xs sm:text-sm">
            <div className="self-stretch flex flex-row items-center justify-start gap-[13px]">
              <Image
                className="w-9 rounded-[654px] h-9"
                width={36}
                height={36}
                sizes="100vw"
                alt=""
                src="/frame-2121458174.svg"
              />
              <div className="w-[178px] relative leading-[23px] font-semibold inline-block shrink-0">
                SEO Optimization Built-In
              </div>
            </div>
            <div className="self-stretch rounded-lg  flex flex-col items-start justify-start py-2.5 px-[7px] gap-[7px] text-xs text-Foundation-Grey-Scale-G500">
              <div className="self-stretch flex flex-row items-center justify-start gap-2">
                <div className="w-5 relative h-5 overflow-hidden shrink-0">
                  <Image
                    className="absolute h-[83.5%] w-full top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                    width={16.7}
                    height={16.7}
                    sizes="100vw"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className="w-[147px] relative leading-[23px] font-medium inline-block shrink-0">
                  Core Web Vitals Optimized
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-2">
                <div className="w-5 relative h-5 overflow-hidden shrink-0">
                  <Image
                    className="absolute h-[83.5%] w-full top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                    width={16.7}
                    height={16.7}
                    sizes="100vw"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className="w-[147px] relative leading-[23px] font-medium inline-block shrink-0">
                  Schema Markup Included
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-2">
                <div className="w-5 relative h-5 overflow-hidden shrink-0">
                  <Image
                    className="absolute h-[83.5%] w-full top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                    width={16.7}
                    height={16.7}
                    sizes="100vw"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className="w-[147px] relative leading-[23px] font-medium inline-block shrink-0">
                  Mobile-First Design
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[480px] left-[10px] sm:top-[564px] sm:left-[241px] lg:left-[241px] shadow-[0px_4px_48.2px_rgba(247,_140,_1,_0.12)] rounded-xl bg-Foundation-Neutral-Scale-N0 flex flex-col items-start justify-start py-[18px] px-[19px] gap-3 text-black bg-white w-[200px] sm:w-auto">
            <div className="self-stretch relative leading-[23px] font-semibold">
              Target Users
            </div>
            <div className="w-[219px] flex flex-row items-start justify-center flex-wrap content-start py-[7px] px-0 box-border gap-x-0 gap-y-[17px] text-center text-xs text-Foundation-Neutral-Scale-N900">
              <div className="w-[73px] flex flex-col items-center justify-center gap-2">
                <Image
                  className="w-[31px] relative rounded-[35px] h-[31px] overflow-hidden shrink-0 object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/frame-2121458181@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Lisa M.
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Agency Owner
                  </div>
                </div>
              </div>
              <div className="w-[73px] flex flex-col items-center justify-center gap-2">
                <div className="w-[31px] relative rounded-[35px] bg-Foundation-Primary-Scale-P300 border-Foundation-Grey-Scale-G200 border-solid border-[1.1px] box-border h-[31px] overflow-hidden shrink-0" />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Name
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Company
                  </div>
                </div>
              </div>
              <div className="w-[73px] flex flex-col items-center justify-center gap-2">
                <Image
                  className="w-[31px] relative rounded-[35px] h-[31px] overflow-hidden shrink-0 object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/frame-2121458181@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Sarah K.
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Saas Founder
                  </div>
                </div>
              </div>
              <div className="w-[73px] flex flex-col items-center justify-center gap-2">
                <div className="w-[31px] relative rounded-[35px] bg-Foundation-Primary-Scale-P300 border-Foundation-Grey-Scale-G200 border-solid border-[1.1px] box-border h-[31px] overflow-hidden shrink-0" />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Name
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Company
                  </div>
                </div>
              </div>
              <div className="w-[73px] flex flex-col items-center justify-center gap-2">
                <Image
                  className="w-[31px] relative rounded-[35px] h-[31px] overflow-hidden shrink-0 object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/frame-2121458181@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Mike R.
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    eCommerce
                  </div>
                </div>
              </div>
              <div className="w-[73px] flex flex-col items-center justify-center gap-2">
                <div className="w-[31px] relative rounded-[35px] bg-Foundation-Primary-Scale-P300 border-Foundation-Grey-Scale-G200 border-solid border-[1.1px] box-border h-[31px] overflow-hidden shrink-0" />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Name
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Company
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[461px] left-[959px] rounded-[345px] bg-secondary-300  flex flex-row items-center justify-start py-[9px] px-[21px] gap-2 text-sm">
            <button className="w-5 relative h-5 overflow-hidden shrink-0 ">
              <Image
                className="absolute  h-3/4 w-full top-[12.5%] right-[4.5%] bottom-[12.5%] left-[4%] max-w-full overflow-hidden max-h-full"
                width={18.3}
                height={15}
                sizes="100vw"
                alt=""
                src="/icon2.svg"
              />
            </button>
            <div className="w-[118px] relative leading-[23px] font-normal text-black inline-block shrink-0 ">
              Your Project Team
            </div>
          </div>
          <div className="absolute top-[720px] right-[10px] sm:top-[562px] sm:right-auto sm:left-[1000px] lg:left-[1000px] shadow-[0px_4px_34.2px_rgba(29,_143,_255,_0.2)] rounded-xl bg-white w-[200px] sm:w-[260px] flex flex-col items-center justify-start py-4 px-5 box-border text-center text-xs text-Foundation-Neutral-Scale-N900">
            <div className="w-56 flex flex-row items-center justify-center flex-wrap content-center gap-x-[13px] gap-y-[21px] text-black">
              <div className="w-[66px] flex flex-col items-center justify-center gap-3">
                <Image
                  className="w-[31px] relative rounded-[50%] h-[31px] object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/ellipse-16812@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Alex
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    SEO Specialist
                  </div>
                </div>
              </div>
              <div className="w-[66px] flex flex-col items-center justify-center gap-3">
                <Image
                  className="w-[31px] relative rounded-[50%] h-[31px] object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/ellipse-1681@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Emma
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    UX Designer
                  </div>
                </div>
              </div>
              <div className="w-[66px] flex flex-col items-center justify-center gap-3">
                <Image
                  className="w-[31px] relative rounded-[50%] h-[31px] object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/ellipse-16815@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Jake
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    UI Designer
                  </div>
                </div>
              </div>
              <div className="w-[66px] flex flex-col items-center justify-center gap-3">
                <Image
                  className="w-[31px] relative rounded-[50%] h-[31px] object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/ellipse-16813@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Maya
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Copy Writer
                  </div>
                </div>
              </div>
              <div className="w-[66px] flex flex-col items-center justify-center gap-3">
                <Image
                  className="w-[31px] relative rounded-[50%] h-[31px] object-cover"
                  width={31}
                  height={31}
                  sizes="100vw"
                  alt=""
                  src="/ellipse-16814@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-1">
                  <div className="self-stretch relative leading-[10px] font-semibold">
                    Sam
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[10px] text-Foundation-Grey-Scale-G500">
                    Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[642px] left-[688px] shadow-[0px_4px_64.8px_#43a2ff,_0px_0px_0px_7px_#43a2ff] rounded-[50%] bg-white border-primary-300 border-solid border-[1px] box-border w-10 h-10" />
          <div className="absolute top-[547px] left-[563px] w-[70px] flex flex-col items-start justify-start gap-[11px] text-center text-[10px] text-Foundation-Grey-Scale-G500">
            <div className="w-[70px] flex flex-col items-center justify-center gap-2.5">
              <div className="w-12 rounded-[4875px] h-12 overflow-hidden relative flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.533)]"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/fluentemojitesttube3.svg"
                />
              </div>
              <div className="self-stretch relative leading-[10px] text-white">
                SEO Research
              </div>
            </div>
            <div className="w-[70px] flex flex-col items-center justify-center gap-2.5">
              <div className="w-12 rounded-[4875px] h-12 overflow-hidden relative flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.533)]"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/fluentemojitesttube.svg"
                />
              </div>
              <div className="self-stretch relative leading-[10px] text-white">
                UI
              </div>
            </div>
            <div className="w-[70px] flex flex-col items-center justify-center gap-2.5">
              <div className="w-12 rounded-[4875px] h-12 overflow-hidden relative flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.533)]"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/fluentemojitesttube2.svg"
                />
              </div>
              <div className="self-stretch relative leading-[10px] text-white">
                Wireframe
              </div>
            </div>
          </div>
          <div className="absolute top-[628px] left-[761px] flex flex-row items-center justify-start gap-[22px] text-center text-[10px] text-Foundation-Grey-Scale-G500">
            <div className="w-[70px] flex flex-col items-center justify-center gap-2.5">
              <div className="w-[44.7px] rounded-[4875px] h-[44.7px] overflow-hidden relative flex items-center justify-center ">
                <Image
                  className="w-full h-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.573)]"
                  width={44.7}
                  height={44.7}
                  sizes="100vw"
                  alt=""
                  src="/fluentemojitesttube4.svg"
                />
              </div>
              <div className="self-stretch relative leading-[10px] text-white">
                Prototype
              </div>
            </div>
            <div className="w-[70px] flex flex-col items-center justify-center gap-2.5">
              <div className="w-12 rounded-[4875px] h-12 overflow-hidden relative flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.533)]"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/fluentemojitesttube5.svg"
                />
              </div>
              <div className="self-stretch relative leading-[10px] text-white">
                Dev Handoff
              </div>
            </div>
          </div>
          <div className="absolute top-[849px] left-[1066px] rounded-[9px] max-w-full h-[23px] overflow-hidden flex items-center justify-center">
            <Image
              className="overflow-hidden h-full object-cover absolute left-[0px] top-[0px] w-full [transform:scale(1)]"
              width={16.5}
              height={23}
              sizes="100vw"
              alt=""
              src="/vector-2541.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
