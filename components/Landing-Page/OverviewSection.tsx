import React from "react";

export const OverviewSection : React.FC = () => {
  const features = [
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/refresh-cw-1.svg",
      text: "Built To Convert, Not Just Look Good",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/mail.svg",
      text: "Tailored To Campaigns (google Ads, Social, Email)",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/target.svg",
      text: "Fast-loading, Mobile-optimized, And Strategic",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/send.svg",
      text: "Clear Messaging, Smart Ctas, And Lead Capture",
    },
  ];

  const benefits = [
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/check-circle.svg",
      text: "Design System",
    },
    {
      icon: "https://c.animaapp.com/YaTVIQjZ/img/check-circle-1.svg",
      text: "Unlimited Revisions",
    },
  ];

  const decorativeFrames = [
    {
      src: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458014.svg",
      className: "absolute w-40 h-[60px] -top-0.5 left-[389px]",
      alt: "Frame",
    },
    {
      src: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458015.svg",
      className: "absolute w-[200px] h-[51px] top-1 -left-px",
      alt: "Frame",
    },
    {
      src: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458016.svg",
      className: "absolute w-[188px] h-[75px] top-[382px] left-[11px]",
      alt: "Frame",
    },
    {
      src: "https://c.animaapp.com/YaTVIQjZ/img/frame-2121458013.svg",
      className: "absolute w-[168px] h-[62px] top-[374px] left-[383px]",
      alt: "Frame",
    },
  ];

  return (
    <section className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col w-[539px] items-start gap-[47px] relative">
        <header className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[233px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px]">
            <img
              className="relative w-[15px] h-[15px]"
              alt="Stars"
              src="https://c.animaapp.com/YaTVIQjZ/img/stars.svg"
            />

            <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
              What Is Landing Page Design?
            </p>
          </div>

          <div className="flex flex-col h-44 items-start gap-4 relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] tracking-[0] leading-[57px]">
              Convert More With Better Design
            </h1>

            <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base tracking-[0] leading-[23px]">
              A landing page is more than just a pretty screen — it&apos;s a
              conversion machine. We design goal-driven landing pages
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
            <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-[19px] relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="inline-flex items-center justify-center gap-2.5 p-3 relative flex-[0_0_auto] bg-secondary-50 rounded-[344px]">
                    <img
                      className="relative w-[17px] h-[17px]"
                      alt=""
                      src={feature.icon}
                    />
                  </div>

                  <p className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-800 text-lg tracking-[0] leading-[23px] whitespace-nowrap">
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>

            <button className="flex w-[214px] h-[50px] items-center justify-end gap-2.5 px-[3px] py-0 relative bg-primary-300 rounded-[45px] shadow-[0px_4px_14.7px_#2e97ffa1] hover:shadow-[0px_6px_20px_#2e97ffa1] transition-shadow duration-200 cursor-pointer">
              <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
                Talk To A Designer
              </span>

              <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-primary-50 rounded-[34px] border border-solid border-primary-75">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="https://c.animaapp.com/YaTVIQjZ/img/arrow-right-1.svg"
                />
              </div>
            </button>

            <ul className="inline-flex items-center gap-[26px] relative flex-[0_0_auto]">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]"
                >
                  <img
                    className="relative w-[19px] h-[19px]"
                    alt=""
                    src={benefit.icon}
                  />

                  <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-400 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="relative w-[549.5px] h-[443px]"
        role="img"
        aria-label="Landing page design visualization"
      >
        {decorativeFrames.map((frame, index) => (
          <img key={index} className={frame.className} alt="" src={frame.src} />
        ))}

        <div className="absolute w-[298px] h-[298px] top-[65px] left-[148px]">
          <div className="relative w-[454px] h-[317px] -top-2.5 left-[-59px]">
            <img
              className="absolute w-[317px] h-[317px] top-0 left-[49px]"
              alt=""
              src="https://c.animaapp.com/YaTVIQjZ/img/ellipse-1675.svg"
            />

            <div className="absolute w-[225px] h-[71px] top-[210px] left-[229px]">
              <div className="absolute w-48 h-11 top-0 left-0 bg-[#f2f2f2] rounded-[315.79px]">
                <div className="relative h-11 top-2.5 left-[15px] bg-[#d8fd5f] rounded-[315.79px] rotate-[-0.57deg]">
                  <img
                    className="absolute w-[17px] h-[17px] top-[13px] left-[19px] rotate-[0.57deg]"
                    alt=""
                    src="https://c.animaapp.com/YaTVIQjZ/img/smartphone.svg"
                  />

                  <div className="absolute top-3 left-[46px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-[13.9px] tracking-[0] leading-[16.6px] whitespace-nowrap">
                    Optimized and fast
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[33px] h-[33px] top-[38px] left-48"
                alt=""
                src="https://c.animaapp.com/YaTVIQjZ/img/send-1.svg"
              />
            </div>

            <div className="inline-flex items-center justify-center gap-[7.08px] px-[18.03px] py-[15.59px] absolute top-[71px] left-px bg-primary-50 rounded-[221.46px] rotate-[2.00deg] shadow-[0px_4px_14.5px_#00000040]">
              <img
                className="relative w-[18.5px] h-[18.5px] mt-[-0.31px] mb-[-0.31px] ml-[-0.31px] rotate-[-2.00deg]"
                alt=""
                src="https://c.animaapp.com/YaTVIQjZ/img/trending-up.svg"
              />

              <div className="relative w-fit mt-[-0.20px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-[13.9px] tracking-[0] leading-[16.6px] whitespace-nowrap">
                Conversion - First Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};