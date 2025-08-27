import React from "react";

const testimonialData = [
  {
    id: 1,
    rating: 5,
    testimonial:
      "rent Seo Brain Services Transformed Our Digital Presence Completely. Our Organic Traffic Increased By 300% In Just 6 Months, And Our Conversion Rates Have Never Been Better.",
    name: "Sarah Johnson",
    title: "Marketing Director, techflow Inc.",
    avatar: "/SEO/ca/ellipse-1670.svg",
  },
  {
    id: 2,
    rating: 5,
    testimonial:
      "the Roi On Our Ppc Campaigns Has Been Exceptional. Their Strategic Approach And Attention To Detail Set Them Apart From Other Agencies We've Worked With.",
    name: "Michael Chen",
    title: "Ceo, growthlab",
    avatar: "/SEO/ca/ellipse-1670-1.svg",
  },
  {
    id: 3,
    rating: 5,
    testimonial:
      "from Content Strategy To Technical Seo, They Handle Everything Seamlessly. Our Brand Visibility Has Skyrocketed, And We're Now Leaders In Our Industry Online.",
    name: "Emily Rodriguez",
    title: "Founder, sustainable Solutions",
    avatar: "/SEO/ca/ellipse-1670-2.svg",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div
      className="inline-flex items-center gap-[2.67px] relative flex-[0_0_auto]"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }, (_, index) => (
        <img
          key={index}
          className="relative w-[20px] h-[20px] lg:w-[24.06px] lg:h-[24.06px]"
          alt="Star filled"
          src="/SEO/ca/star-filled-15.svg"
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  name,
  title,
  avatar,
  rating,
}: {
  testimonial: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}) => {
  return (
    <article className="flex flex-col w-full items-start gap-4 px-4 py-5 relative bg-neutral-0 rounded-[20px] border border-solid border-primary-50 shadow-[0px_4px_19.3px_#2e97ff29] lg:w-[348px] lg:gap-[15px] lg:px-[17px] lg:py-[22px] lg:rounded-[23px]">
      <StarRating rating={rating} />

      <blockquote className="relative self-stretch font-urbanist font-normal text-neutral-300 text-sm tracking-[0] leading-[22px] lg:leading-[26px]">
        "{testimonial}"
      </blockquote>

      <div className="inline-flex items-center gap-3 relative flex-[0_0_auto] lg:gap-3.5">
        <img
          className="relative w-[50px] h-[50px] object-cover rounded-full lg:w-[60px] lg:h-[60px]"
          alt={`${name} profile picture`}
          src={avatar}
        />

        <div className="flex flex-col w-full items-start gap-0.5 relative lg:w-[202px]">
          <cite className="relative self-stretch mt-[-1.00px] font-urbanist font-medium text-neutral-900 text-sm tracking-[0] leading-[22px] not-italic lg:text-base lg:leading-[26px]">
            {name}
          </cite>

          <div className="relative self-stretch font-urbanist font-normal text-neutral-200 text-xs tracking-[0] leading-[20px] lg:text-sm lg:leading-[26px]">
            {title}
          </div>
        </div>
      </div>
    </article>
  );
};

export const IndustryLeaders: React.FC = () => {
  return (
    <section className="flex flex-col w-full max-w-[1128px] items-center gap-8 relative flex-[0_0_auto] px-4 lg:gap-[50px] lg:px-0">
      <header className="flex flex-col w-full max-w-[633px] h-auto items-center gap-4 relative lg:h-[168px]">
        <div className="flex w-auto items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300 lg:w-[185px]">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="/SEO/ca/stars.svg"
          />

          <span className="relative w-fit mt-[-1.00px] font-urbanist font-medium text-primary-300 text-xs tracking-[0] leading-[20px] whitespace-nowrap lg:text-sm lg:leading-[23px]">
            Client Success Stories
          </span>
        </div>

        <div className="flex flex-col w-full max-w-[629px] h-auto items-center gap-4 relative lg:h-[119px]">
          <h2 className="relative w-full font-urbanist font-bold text-primary-500 text-xl text-center tracking-[0] leading-[24px] sm:text-2xl md:text-3xl lg:text-[50px] lg:leading-[57px]">
            Trusted by Industry Leaders
          </h2>

          <p className="relative w-full max-w-[565px] font-urbanist font-normal text-neutral-200 text-sm text-center tracking-[0] leading-[20px] lg:text-base lg:leading-[23px]">
            Don't just take our word for it. See what our clients have to say
            about the results we've delivered.
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto] lg:flex-row lg:gap-[43px]">
        {testimonialData.map((item, index) => (
          <div
            key={item.id}
            className="w-full lg:w-auto"
          >
            <TestimonialCard
              testimonial={item.testimonial}
              name={item.name}
              title={item.title}
              avatar={item.avatar}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
