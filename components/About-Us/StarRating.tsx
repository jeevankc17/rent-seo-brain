import React from "react";

const testimonialData = [
  {
    id: 1,
    rating: 5,
    quote:
      "rent Seo Brain Services Transformed Our Digital Presence Completely. Our Organic Traffic Increased By 300% In Just 6 Months, And Our Conversion Rates Have Never Been Better.",
    author: {
      name: "Sarah Johnson",
      title: "Marketing Director, techflow Inc.",
      avatar: "/About/ca/ellipse-1670.svg",
    },
  },
  {
    id: 2,
    rating: 5,
    quote:
      "the Roi On Our Ppc Campaigns Has Been Exceptional. Their Strategic Approach And Attention To Detail Set Them Apart From Other Agencies We've Worked With.",
    author: {
      name: "Michael Chen",
      title: "Ceo, growthlab",
      avatar: "/About/ca/ellipse-1670-1.svg",
    },
  },
  {
    id: 3,
    rating: 5,
    quote:
      "from Content Strategy To Technical Seo, They Handle Everything Seamlessly. Our Brand Visibility Has Skyrocketed, And We're Now Leaders In Our Industry Online.",
    author: {
      name: "Emily Rodriguez",
      title: "Founder, sustainable Solutions",
      avatar: "/About/ca/ellipse-1670-2.svg",
    },
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const starImages = [
    "/About/ca/star-filled.svg",
    "/About/ca/star-filled-1.svg",
    "/About/ca/star-filled-2.svg",
    "/About/ca/star-filled-3.svg",
    "/About/ca/star-filled-4.svg",
  ];

  return (
    <div className="inline-flex items-center gap-[2.67px] relative flex-[0_0_auto]">
      {Array.from({ length: rating }, (_, index) => (
        <img
          key={index}
          className="relative w-[24.06px] h-[24.06px]"
          alt="Star filled"
          src={starImages[index] || starImages[0]}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  className = "",
}: { testimonial: (typeof testimonialData)[0]; className?: string }) => {
  return (
    <article
      className={`flex flex-col w-[348px] items-start gap-[15px] px-[17px] py-[22px] relative bg-neutral-0 rounded-[23px] border border-solid border-primary-50 shadow-[0px_4px_19.3px_#2e97ff29] ${className}`}
    >
      <StarRating rating={testimonial.rating} />

      <blockquote className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-300 text-sm tracking-[0] leading-[26px]">
        "{testimonial.quote}"
      </blockquote>

      <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
        <img
          className="relative w-[60px] h-[60px] object-cover"
          alt={`${testimonial.author.name} profile`}
          src={testimonial.author.avatar}
        />

        <div className="flex flex-col w-[202px] items-start gap-0.5 relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-base tracking-[0] leading-[26px]">
            {testimonial.author.name}
          </div>

          <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm tracking-[0] leading-[26px]">
            {testimonial.author.title}
          </div>
        </div>
      </div>
    </article>
  );
};

export const PrinciplesSection: React.FC = () => {
    return (
        <section className="flex flex-col w-[1128px] items-center gap-[50px] relative flex-[0_0_auto]">
            <header className="flex flex-col w-[633px] h-[168px] items-center gap-4 relative">
                <div className="flex w-[185px] items-center justi   fy-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                        className="relative w-[15px] h-[15px]"
                        alt="Stars"
                        src="/About/ca/stars-3.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        Client Success Stories
                    </div>
                </div>

                <div className="flex flex-col w-[629px] h-[119px] items-center gap-4 relative">
                    <h2 className="relative w-[641px] mt-[-1.00px] ml-[-6.00px] mr-[-6.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
                        Trusted by Industry Leaders
                    </h2>

                    <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
                        Don't just take our word for it. See what our clients have to say
                        about the results we've delivered.
                    </p>
                </div>
            </header>

            <div className="flex items-center justify-center gap-[43px] relative self-stretch w-full flex-[0_0_auto]">
                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        className={
                            index === 0 ? "ml-[-1.00px]" : index === 2 ? "mr-[-1.00px]" : ""
                        }
                    />
                ))}
            </div>
        </section>
    );
};
