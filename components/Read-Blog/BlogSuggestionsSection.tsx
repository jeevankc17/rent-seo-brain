import React from "react";

interface BlogPost {
  id: number;
  image: string;
  tags: Array<{
    text: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
  }>;
  title: string;
  description: string;
  readTime: string;
  clockIcon: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

export const BlogSuggestionsSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "https://c.animaapp.com/tbvdk4DW/img/frame-2121458395.svg",
      tags: [
        {
          text: "Technical SEO",
          bgColor: "bg-primary-500",
          textColor: "text-primary-100",
          borderColor: "border-primary-100",
        },
        {
          text: "Technical SEO",
          bgColor: "bg-secondary-500",
          textColor: "text-secondary-100",
          borderColor: "border-secondary-100",
        },
      ],
      title: "Complete Guide to Core Web Vitals Optimization in 2025",
      description:
        "Master the latest Google Core Web Vitals requirements and boost your site's performance with our comprehensive optimization strategies that actually work.",
      readTime: "12 min read",
      clockIcon: "https://c.animaapp.com/tbvdk4DW/img/clock-1.svg",
      author: {
        name: "Alex Thompson",
        title: "Senior SEO Strategist",
        avatar: "https://c.animaapp.com/tbvdk4DW/img/shape-3@2x.png",
      },
    },
    {
      id: 2,
      image: "https://c.animaapp.com/tbvdk4DW/img/frame-2121458395-1.svg",
      tags: [
        {
          text: "Trending",
          bgColor: "bg-primary-500",
          textColor: "text-primary-100",
          borderColor: "border-primary-100",
        },
        {
          text: "Local SEO",
          bgColor: "bg-[#00b45c2b]",
          textColor: "text-[#00b45c]",
          borderColor: "border-[#00b45c]",
        },
      ],
      title: "Local SEO Checklist: 15 Steps to Dominate Local Search",
      description:
        "Complete actionable checklist to improve your local search rankings and attract more customers in your area with proven strategies.",
      readTime: "12 min read",
      clockIcon: "https://c.animaapp.com/tbvdk4DW/img/clock-2.svg",
      author: {
        name: "Alex Thompson",
        title: "Senior SEO Strategist",
        avatar: "https://c.animaapp.com/tbvdk4DW/img/shape-3@2x.png",
      },
    },
    {
      id: 3,
      image: "https://c.animaapp.com/tbvdk4DW/img/frame-2121458395-2.svg",
      tags: [
        {
          text: "Technical SEO",
          bgColor: "bg-primary-500",
          textColor: "text-primary-100",
          borderColor: "border-primary-100",
        },
        {
          text: "Technical SEO",
          bgColor: "bg-secondary-500",
          textColor: "text-secondary-100",
          borderColor: "border-secondary-100",
        },
      ],
      title: "Complete Guide to Core Web Vitals Optimization in 2025",
      description:
        "Master the latest Google Core Web Vitals requirements and boost your site's performance with our comprehensive optimization strategies that actually work.",
      readTime: "12 min read",
      clockIcon: "https://c.animaapp.com/tbvdk4DW/img/clock-3.svg",
      author: {
        name: "Alex Thompson",
        title: "Senior SEO Strategist",
        avatar: "https://c.animaapp.com/tbvdk4DW/img/shape-3@2x.png",
      },
    },
  ];

  return (
    <section className="flex flex-col w-[1129px] items-start gap-[50px] relative flex-[0_0_auto]">
      <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-[180px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-2xl tracking-[0] leading-[25px]">
          Suggested Blogs
        </h2>

        <button
          className="flex w-[158px] h-[50px] items-center justify-center gap-2.5 px-8 py-0 relative bg-primary-100 rounded-[45px] shadow-[0px_5px_14.7px_#2f98ffa1] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2"
          aria-label="Browse all blog posts"
        >
          <span className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-neutral-900 text-base text-center tracking-[0] leading-[23px] whitespace-nowrap">
            Browse All
          </span>
        </button>
      </header>

      <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col w-[360px] h-[460px] items-start gap-[18px] px-3.5 py-[21px] relative bg-white rounded-[11px] shadow-[0px_4px_25.6px_#2e97ff5e] hover:shadow-lg transition-shadow"
          >
            <div
              className="relative self-stretch w-full h-[136px] rounded-[7px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${post.image})` }}
              role="img"
              aria-label={`Featured image for ${post.title}`}
            />

            <div className="flex flex-col h-[264px] items-start gap-[15px] relative self-stretch w-full">
              <div className="flex flex-col h-[209px] items-start gap-2 relative self-stretch w-full">
                <div className="flex flex-col items-start gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] ${tag.bgColor} rounded-[432px] border border-solid ${tag.borderColor}`}
                      >
                        <span
                          className={`relative w-[63px] h-3.5 mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal ${tag.textColor} text-[10px] text-center tracking-[0] leading-[14px] whitespace-nowrap`}
                        >
                          {tag.text}
                        </span>
                      </span>
                    ))}
                  </div>

                  <h3 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-primary-50 text-lg tracking-[0] leading-[25px]">
                    {post.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm tracking-[0] leading-[23px]">
                    {post.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mb-[-4.00px]">
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={post.clockIcon}
                    aria-hidden="true"
                  />

                  <span className="w-fit mt-[-1.00px] text-grey-400 leading-[23px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] font-normal text-xs tracking-[0]">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <footer className="flex items-center gap-[122px] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <div
                    className="relative w-[var(--size-icon-large)] h-[var(--size-icon-large)] rounded-[var(--size-radius-full)] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${post.author.avatar})` }}
                    role="img"
                    aria-label={`${post.author.name}'s profile picture`}
                  />

                  <div className="flex flex-col w-[114px] items-start gap-1.5 relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm tracking-[0] leading-[14px]">
                      {post.author.name}
                    </div>

                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs tracking-[0] leading-[14px]">
                      {post.author.title}
                    </div>
                  </div>
                </div>

                <button
                  className="flex w-[41px] h-[41px] items-center justify-center gap-2.5 p-2.5 relative bg-grey-50 rounded-[87px] border border-solid border-grey-75 hover:bg-grey-75 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2"
                  aria-label={`Read article: ${post.title}`}
                >
                  <img
                    className="relative w-6 h-6 mt-[-1.50px] mb-[-1.50px] ml-[-1.50px] mr-[-1.50px]"
                    alt=""
                    src="https://c.animaapp.com/tbvdk4DW/img/arrow-up-right-2.svg"
                    aria-hidden="true"
                  />
                </button>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
