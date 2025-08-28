import React from "react";
import Image from "next/image";
import AppButton from "@/utils/AppButton";

export const GoogleProposition: React.FC = () => {
  const features: string[] = [
    "Appear on top of search results",
    "Pay only when someone clicks",
    "Target specific audiences with precision",
    "Boost brand visibility across Google’s entire network",
  ];

  const avatars: {
    url: string;
    width: number;
    height: number;
    border: boolean;
  }[] = [
    {
      url: "/Home-Page/Hero-Section/image1.jpg",
      width: 33,
      height: 33,
      border: false,
    },
    {
      url: "/Home-Page/Hero-Section/image2.jpg",
      width: 36,
      height: 36,
      border: true,
    },
    {
      url: "/Home-Page/Hero-Section/image3.jpg",
      width: 36,
      height: 36,
      border: true,
    },
    {
      url: "/Home-Page/Hero-Section/image4.jpg",
      width: 33,
      height: 33,
      border: true,
    },
    {
      url: "/Home-Page/Hero-Section/image5.jpg",
      width: 33,
      height: 33,
      border: true,
    },
    {
      url: "/Home-Page/Hero-Section/image6.jpg",
      width: 33,
      height: 33,
      border: true,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1126px] h-auto lg:h-auto items-start gap-6 lg:gap-0.5 relative px-4 lg:px-0">
      <div className="flex flex-col w-full lg:w-[432px] items-start gap-6 lg:gap-[37px] relative mb-[-0.23px]">
        <div className="flex flex-col items-start gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[219px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                      className="ml-[-3.50px] relative w-[15px] h-[15px]"
                      alt="Stars"
                      src="/Home-Page/ca/stars.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] mr-[-3.50px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px] whitespace-nowrap">
                    Google Ads, Explained Simply                    </div>
                  </div>

                  <h1 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-3xl md:text-4xl lg:text-[50px] tracking-[0] leading-[24px] sm:leading-[36px] md:leading-[46px] lg:leading-[57px]">
                  Advertise Smarter with Google Ads                  </h1>
                </div>

                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-neutral-400 text-sm md:text-base lg:text-base tracking-[0] leading-[18px] md:leading-[20px] lg:leading-[23px]">
                Google Ads is a powerful online advertising platform by Google that puts your business in front of ready-to-buy customers. 
                </p>
              </div>

              <ul className="flex flex-col self-stretch w-full items-start gap-2 relative flex-[0_0_auto]">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                  >
                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt="Check mark"
                      src="/Home-Page/Hero-Section/right.svg"
                    />

                    <p className="relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[23px]">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="inline-flex items-start relative flex-[0_0_auto]"
            role="group"
            aria-label="User avatars"
          >
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`relative ${index > 0 ? "ml-[-10.68px]" : ""} ${
                  index === 1 || index === 2 ? "mt-[-1.60px] mb-[-1.60px]" : ""
                } rounded-full overflow-hidden ${
                  avatar.border
                    ? "border-[1.6px] border-solid border-neutral-0"
                    : ""
                }`}
                style={{ width: avatar.width, height: avatar.height }}
              >
                <Image
                  src={avatar.url}
                  alt={`avatar-${index}`}
                  width={avatar.width}
                  height={avatar.height}
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        <AppButton
          text="Upgrade Your Ad Strategy"
          variant="blue"
          size="lg"
        />
      </div>

      <div
        className="relative w-full lg:w-[692px] h-auto lg:h-[515px] hidden lg:block"
        role="img"
        aria-label="Google Ads dashboard visualization"
      >
        <div className="relative w-[673px] h-[516px] -top-2 left-[31px]">
          <img
            className="absolute w-[576px] h-[479px] top-0 left-[97px]"
            alt="Dashboard frame"
            src="/Home-Page/ca/frame-2121457614.svg"
          />

          <div className="flex w-[221px] items-center gap-[11.94px] px-[12.61px] py-[16.66px] absolute top-[197px] left-0 bg-white rounded-[9.95px] border-[0.88px] border-solid border-primary-400 shadow-[0px_3.51px_11.05px_#2e97ffa1]">
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt="Location targeting icon"
              src="/Home-Page/ca/component-2-variant3.svg"
            />

            <div className="flex flex-col w-[149.31px] items-start gap-[7.89px] relative">
              <p className="relative w-[149.09px] mt-[-0.66px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-[12.3px] tracking-[-0.06px] leading-[13.5px]">
                Reach Users Locally Or Globally
              </p>

              <p className="relative w-[149.09px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-70 text-[10.5px] tracking-[-0.05px] leading-[11.6px]">
                Get A Free Strategy Call Now !
              </p>
            </div>
          </div>

          <div className="flex w-[228px] items-center justify-center gap-[7.89px] px-[15.78px] py-[11.4px] absolute top-[443px] left-[413px] bg-white rounded-[10.52px] border-[0.88px] border-solid border-neutral-800 shadow-[0px_5px_0px_#ff9800]">
            <img
              className="relative w-[56.12px] h-[49.98px]"
              alt="Users statistics chart"
              src="/Home-Page/ca/frame-2121457616.svg"
            />

            <div className="flex flex-col w-[131.54px] items-start gap-[6.14px] relative">
              <div className="self-stretch mt-[-0.88px] font-semibold text-neutral-800 text-[15.8px] tracking-[-0.08px] leading-[17.4px] relative [font-family:'Urbanist',Helvetica]">
                Total Users
              </div>

              <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[12.3px] tracking-[-0.06px] leading-[13.5px]">
                100k+ Satisfied Clinets
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[179px] items-start gap-[6.51px] px-[9.11px] py-[6.51px] absolute top-[390px] left-[70px] bg-white rounded-[9.11px] border-[0.65px] border-solid border-[#2e97ffa1] shadow-[0px_2.6px_6.25px_#00000040]">
            <div className="relative self-stretch w-full h-[98.29px] bg-[url('/Home-Page/ca/charts@2x.png')] bg-[100%_100%]">
              <img
                className="absolute w-[7px] h-[7px] top-[33px] left-[129px]"
                alt="Status indicator"
                src="/Home-Page/ca/ui-status@2x.png"
              />

              <div className="absolute w-5 h-[13px] top-4 left-[124px]">
                <div className="relative w-[39px] h-[33px] top-[-9px] -left-2.5 bg-[url('/Home-Page/ca/combined-shape.svg')] bg-[100%_100%]">
                  <div className="w-[15px] top-2.5 left-[11px] text-[7.8px] tracking-[0.33px] leading-[13.0px] absolute [font-family:'Roboto',Helvetica] font-medium text-[#414d55] text-center whitespace-nowrap">
                    62
                  </div>
                </div>
              </div>

              <div className="flex w-[66px] items-center justify-center gap-[6.51px] px-[6.51px] py-[1.62px] absolute top-[3px] left-0 bg-[#00b45c] rounded-[19.53px]">
                <div className="relative w-fit mt-[-0.65px] [font-family:'Urbanist',Helvetica] font-semibold text-neutral-0 text-[4px] text-center tracking-[0] leading-[13.0px] whitespace-nowrap">
                  GROW YOUR TRAFFIC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
