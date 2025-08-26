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
    <div className="inline-flex items-center gap-0.5 sm:gap-[2.67px]">
      {Array.from({ length: rating }, (_, index) => (
        <img
          key={index}
          className="w-4 h-4 sm:w-[20px] sm:h-[20px] md:w-[24.06px] md:h-[24.06px]"
          alt="Star filled"
          src={starImages[index] || starImages[0]}
          loading="lazy"
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
      className={`flex flex-col w-full max-w-[348px] items-start gap-3 sm:gap-[15px] p-4 sm:px-[17px] sm:py-[22px] bg-white rounded-xl sm:rounded-[23px] border border-solid border-primary-50 shadow-sm sm:shadow-[0px_4px_19.3px_#2e97ff29] ${className}`}
    >
      <StarRating rating={testimonial.rating} />

      <blockquote className="w-full font-sans font-normal text-neutral-600 text-sm sm:text-base leading-relaxed sm:leading-[26px] italic">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-3 sm:gap-3.5 w-full">
        <img
          className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full object-cover"
          alt={`${testimonial.author.name} profile`}
          src={testimonial.author.avatar}
          loading="lazy"
        />

        <div className="flex flex-col">
          <h4 className="font-sans font-medium text-neutral-900 text-sm sm:text-base leading-tight">
            {testimonial.author.name}
          </h4>
          <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-tight">
            {testimonial.author.title}
          </p>
        </div>
      </div>
    </article>
  );
};

export const StarRatingSection: React.FC = () => {
    return (
        <section className="flex flex-col w-full items-center gap-8 sm:gap-10 lg:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-0 max-w-[2000px] mx-auto">
            <header className="flex flex-col w-full max-w-[633px] items-center gap-3 sm:gap-4 text-center">
                <div className="flex w-full max-w-[185px] items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-[5px] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
                    <img
                        className="relative w-[15px] h-[15px]"
                        alt="Stars"
                        src="/About/ca/stars-3.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                        Client Success Stories
                    </div>
                </div>

                <div className="flex flex-col w-full items-center gap-3 sm:gap-4">
                    <h2 className="w-full font-sans font-bold text-primary-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center leading-tight sm:leading-[48px] lg:leading-[57px]">
                        Trusted by Industry Leaders
                    </h2>

                    <p className="w-full max-w-[565px] font-sans font-normal text-neutral-200 text-sm sm:text-base text-center leading-relaxed sm:leading-[23px]">
                        Don't just take our word for it. See what our clients have to say
                        about the results we've delivered.
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8 md:gap-6 lg:gap-[43px] w-full max-w-[1200px] mx-auto">
                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        className={
                            index === 0 ? "md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1" : 
                            index === 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1" : 
                            "md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1"
                        }
                    />
                ))}
            </div>
        </section>
    );
};
