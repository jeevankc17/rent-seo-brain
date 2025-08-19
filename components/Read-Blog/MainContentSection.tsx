import React from "react";

export const MainContentSection: React.FC = () => {
  const tags = [
    {
      label: "Trending",
      bgColor: "bg-primary-500",
      textColor: "text-primary-100",
      borderColor: "border-primary-100",
    },
    {
      label: "Local SEO",
      bgColor: "bg-[#00b45c2b]",
      textColor: "text-[#00b45c]",
      borderColor: "border-[#00b45c]",
    },
  ];

  const contentSections = [
    {
      title: "Optimize Your Google Business Profile",
      content:
        "Start by claiming and optimizing your Google Business Profile—ensure your business name, address, phone number, hours, photos, and updates are accurate and complete.",
    },
    {
      title: "Use Location-Based Keywords",
      content:
        "Next, use location-based keywords throughout your website and metadata to target searches in your city or neighborhood.",
    },
    {
      title: "Maintain Consistent NAP Information",
      content:
        "It's essential to maintain consistent NAP information (Name, Address, Phone) everywhere online, including directories and social media.",
    },
  ];

  return (
    <article className="flex flex-col w-[1128px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="w-[792px] gap-6 flex flex-col items-center relative flex-[0_0_auto]">
        <div
          className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]"
          role="group"
          aria-label="Article tags"
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] ${tag.bgColor} rounded-[432px] border border-solid ${tag.borderColor}`}
            >
              <span
                className={`relative w-[63px] h-3.5 mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal ${tag.textColor} text-[10px] text-center tracking-[0] leading-[14px] whitespace-nowrap`}
              >
                {tag.label}
              </span>
            </span>
          ))}
        </div>

        <div className="flex flex-col items-start gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative w-[768px] mt-[-1.00px] font-headings-h2-bold font-[number:var(--headings-h2-bold-font-weight)] text-primary-50 text-[length:var(--headings-h2-bold-font-size)] text-center tracking-[var(--headings-h2-bold-letter-spacing)] leading-[var(--headings-h2-bold-line-height)] [font-style:var(--headings-h2-bold-font-style)]">
            Local SEO Checklist: 15 Steps to Dominate Local Search
          </h1>

          <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm text-center tracking-[0] leading-[23px]">
            To improve your local search rankings and attract more customers in
            your area, start by optimizing your Google Business Profile (GBP).
            Claim and verify your listing, ensuring your business name, address,
            and phone number (NAP) are accurate and consistent. Choose the most
            relevant business categories
          </p>

          <div className="flex items-center gap-[541px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <img
                className="relative w-[var(--size-icon-large)] h-[var(--size-icon-large)] rounded-[var(--size-radius-full)] object-cover"
                alt="Alex Thompson profile picture"
                src="https://c.animaapp.com/tbvdk4DW/img/shape@2x.png"
              />

              <div className="flex flex-col w-[114px] items-start gap-1.5 relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm tracking-[0] leading-[14px]">
                  Alex Thompson
                </div>

                <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs tracking-[0] leading-[14px]">
                  Senior SEO Strategist
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <img
                className="relative w-4 h-4"
                alt="Reading time"
                src="https://c.animaapp.com/tbvdk4DW/img/clock.svg"
              />

              <time className="w-fit mt-[-1.00px] text-grey-400 leading-[23px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] font-normal text-xs tracking-[0]">
                12 min read
              </time>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-start gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="h-[462.07px] rounded-[23.78px] relative self-stretch w-full object-cover"
          alt="Local SEO optimization illustration"
          src="https://c.animaapp.com/tbvdk4DW/img/image.svg"
        />

        <div className="relative self-stretch h-[504px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-[45px]">
          {contentSections.map((section, index) => (
            <React.Fragment key={index}>
              <h2 className="font-semibold text-primary-100">
                {section.title}
              </h2>
              <br />
              <p className="font-medium text-grey-500">
                {section.content}
                <br />
                <br />
              </p>
            </React.Fragment>
          ))}
        </div>

        <img
          className="h-[327px] rounded-[20px] relative self-stretch w-full object-cover"
          alt="Local SEO analytics dashboard"
          src="https://c.animaapp.com/tbvdk4DW/img/image-1.svg"
        />

        <p className="relative self-stretch h-[780px] [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-2xl tracking-[0] leading-[45px]">
          Content tailored for each area. Encourage your customers to leave
          reviews and always respond professionally to build trust and
          credibility. Since most local searches happen on mobile devices,
          ensure your website is mobile-friendly, fast-loading, and easy to
          navigate. Increase your visibility by listing your business on popular
          local directories like Yelp, Bing Places, and Yellow Pages. Adding
          local business schema markup (structured data) to your website helps
          search engines better understand your business details, improving your
          chances of appearing in rich local results. Regularly publish local
          content such as blogs about community events, news, or customer
          stories to boost your relevance. Build local backlinks from
          authoritative websites, local newspapers, or community groups to
          strengthen your site&apos;s authority. Embed a Google Map on your
          contact page to make it easier for customers and search engines to
          find your location, and don&apos;t forget to geo-tag your images with
          location data before uploading them to your site or Google Business
          Profile to reinforce local signals. Track your local SEO performance
          using tools like Google Analytics and Search Console to monitor
          rankings, traffic, and user behavior. Stay active on your Google
          Business Profile by posting updates and engaging with customers,
          signaling ongoing relevance. Finally, keep up with the latest local
          SEO trends and algorithm updates by following trusted SEO news sources
          and regularly auditing your strategy. By consistently applying these
          15 steps, you can boost your local search rankings, attract more
          nearby customers, and grow your business. Start implementing these
          tips today and watch your local presence thrive!
        </p>
      </main>
    </article>
  );
};
