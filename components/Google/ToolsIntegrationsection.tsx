import React from "react";

const testimonialData = [
  {
    id: 1,
    rating: 5,
    testimonial:
      "rent Seo Brain Services Transformed Our Digital Presence Completely. Our Organic Traffic Increased By 300% In Just 6 Months, And Our Conversion Rates Have Never Been Better.",
    name: "Sarah Johnson",
    title: "Marketing Director, techflow Inc.",
    avatar: "/Google/ca/ellipse-1670.svg",
  },
  {
    id: 2,
    rating: 5,
    testimonial:
      "the Roi On Our Ppc Campaigns Has Been Exceptional. Their Strategic Approach And Attention To Detail Set Them Apart From Other Agencies We've Worked With.",
    name: "Michael Chen",
    title: "Ceo, growthlab",
    avatar: "/Google/ca/ellipse-1670-1.svg",
  },
  {
    id: 3,
    rating: 5,
    testimonial:
      "from Content Strategy To Technical Seo, They Handle Everything Seamlessly. Our Brand Visibility Has Skyrocketed, And We're Now Leaders In Our Industry Online.",
    name: "Emily Rodriguez",
    title: "Founder, sustainable Solutions",
    avatar: "/Google/ca/ellipse-1670-2.svg",
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
          className="relative w-[24.06px] h-[24.06px]"
          alt="Star filled"
          src="/Google/ca/star-filled-15.svg"
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
    <article className="flex flex-col w-full max-w-[348px] items-start gap-[15px] px-4 lg:px-[17px] py-4 lg:py-[22px] relative bg-neutral-0 rounded-[23px] border border-solid border-primary-50 shadow-[0px_4px_19.3px_#2e97ff29]">
      <StarRating rating={rating} />

      <blockquote className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-300 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[26px]">
        "{testimonial}"
      </blockquote>

      <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
        <img
          className="relative w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] object-cover rounded-full"
          alt={`${name} profile picture`}
          src={avatar}
        />

        <div className="flex flex-col w-full max-w-[202px] items-start gap-0.5 relative">
          <cite className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[26px] not-italic">
            {name}
          </cite>

          <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-xs lg:text-sm tracking-[0] leading-[18px] lg:leading-[26px]">
            {title}
          </div>
        </div>
      </div>
    </article>
  );
};

export const ToolsIntegrationSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full max-w-[1128px] items-center gap-8 lg:gap-[50px] relative flex-[0_0_auto] px-4 lg:px-0">
      <header className="flex flex-col w-full max-w-[633px] h-auto lg:h-[168px] items-center gap-4 relative">
        <div className="flex w-full max-w-[185px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="/Google/ca/stars.svg"
          />

          <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-xs lg:text-sm tracking-[0] leading-[20px] lg:leading-[23px] whitespace-nowrap">
            Client Success Stories
          </span>
        </div>

        <div className="flex flex-col w-full max-w-[629px] h-auto lg:h-[119px] items-center gap-4 relative">
          <h2 className="relative w-full max-w-[641px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-xl sm:text-2xl md:text-3xl lg:text-[50px] text-center tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[57px]">
            Trusted by Industry Leaders
          </h2>

          <p className="relative w-full max-w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-sm lg:text-base text-center tracking-[0] leading-[20px] lg:leading-[23px]">
            Don't just take our word for it. See what our clients have to say
            about the results we've delivered.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 lg:gap-[43px] relative self-stretch w-full flex-[0_0_auto]">
        {testimonialData.map((item, index) => (
          <div
            key={item.id}
            className="mx-auto"
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
