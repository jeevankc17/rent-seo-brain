"use client";
import React, { useState } from "react";

interface Tag {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

interface Article {
  id: number;
  image: string;
  tags: Tag[];
  title: string;
  description: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const filterCategories = [
  { id: "all", label: "ALL", active: true },
  { id: "trending", label: "Trending", active: false },
  { id: "technical", label: "Technical SEO", active: false },
  { id: "local", label: "Local SEO", active: false },
];

const articlesData: Article[] = [
  {
    id: 1,
    image: "https://c.animaapp.com/VIaP56iJ/img/frame-2121458395.svg",
    tags: [
      {
        label: "Technical SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Technical SEO",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Complete Guide to Core Web Vitals Optimization in 2025",
    description:
      "Master the latest Google Core Web Vitals requirements and boost your site's performance with our comprehensive optimization strategies that actually work.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "https://c.animaapp.com/VIaP56iJ/img/shape-5@2x.png",
    },
  },
  {
    id: 2,
    image: "https://c.animaapp.com/VIaP56iJ/img/frame-2121458395-1.svg",
    tags: [
      {
        label: "Trending",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Local SEO",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-75",
        borderColor: "border-secondary-75",
      },
    ],
    title: "Local SEO Checklist: 15 Steps to Dominate Local Search",
    description:
      "Complete actionable checklist to improve your local search rankings and attract more customers in your area with proven strategies.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "https://c.animaapp.com/VIaP56iJ/img/shape-5@2x.png",
    },
  },
  {
    id: 3,
    image: "https://c.animaapp.com/VIaP56iJ/img/frame-2121458395-2.svg",
    tags: [
      {
        label: "Technical SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Technical SEO",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Complete Guide to Core Web Vitals Optimization in 2025",
    description:
      "Master the latest Google Core Web Vitals requirements and boost your site's performance with our comprehensive optimization strategies that actually work.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "https://c.animaapp.com/VIaP56iJ/img/shape-5@2x.png",
    },
  },
  {
    id: 4,
    image: "https://c.animaapp.com/VIaP56iJ/img/frame-2121458395-3.svg",
    tags: [
      {
        label: "Technical SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Technical SEO",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Complete Guide to Core Web Vitals Optimization in 2025",
    description:
      "Master the latest Google Core Web Vitals requirements and boost your site's performance with our comprehensive optimization strategies that actually work.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "https://c.animaapp.com/VIaP56iJ/img/shape-5@2x.png",
    },
  },
  {
    id: 5,
    image: "https://c.animaapp.com/VIaP56iJ/img/frame-2121458395-4.svg",
    tags: [
      {
        label: "Trending",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Local SEO",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-75",
        borderColor: "border-secondary-75",
      },
    ],
    title: "Local SEO Checklist: 15 Steps to Dominate Local Search",
    description:
      "Complete actionable checklist to improve your local search rankings and attract more customers in your area with proven strategies.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "https://c.animaapp.com/VIaP56iJ/img/shape-5@2x.png",
    },
  },
  {
    id: 6,
    image: "https://c.animaapp.com/VIaP56iJ/img/frame-2121458395-5.svg",
    tags: [
      {
        label: "Technical SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Technical SEO",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Complete Guide to Core Web Vitals Optimization in 2025",
    description:
      "Master the latest Google Core Web Vitals requirements and boost your site's performance with our comprehensive optimization strategies that actually work.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "https://c.animaapp.com/VIaP56iJ/img/shape-5@2x.png",
    },
  },
];

const paginationData = [
  { page: 1, active: true },
  { page: 2, active: false },
  { page: 3, active: false },
  { page: 67, active: false },
  { page: 68, active: false },
];

export const ArticleCardsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const ArticleCard = ({ article }: { article: Article }) => (
    <article className="flex flex-col w-[360px] h-[460px] items-start gap-[18px] px-3.5 py-[21px] relative bg-white rounded-[11px] shadow-[0px_4px_25.6px_rgba(46,151,255,0.37)]">
      <div
        className="relative self-stretch w-full h-[136px] rounded-[7px] bg-cover bg-[50%_50%]"
        style={{ backgroundImage: `url(${article.image})` }}
        role="img"
        aria-label="Article featured image"
      />

      <div className="flex flex-col h-[264px] items-start gap-[15px] relative self-stretch w-full">
        <div className="flex flex-col h-[209px] items-start gap-2 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
              {article.tags.map((tag, index) => (
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

            <h3 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-primary-75 text-lg tracking-[0] leading-[25px]">
              {article.title}
            </h3>

            <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm tracking-[0] leading-[23px]">
              {article.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mb-[-4.00px]">
            <img
              className="relative w-4 h-4"
              alt="Clock icon"
              src="https://c.animaapp.com/VIaP56iJ/img/clock-2.svg"
            />

            <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-xs tracking-[0] leading-[23px] whitespace-nowrap">
              {article.readTime}
            </span>
          </div>
        </div>

        <footer className="flex items-center gap-[122px] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
          <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            <div
              className="relative w-[var(--size-icon-large)] h-[var(--size-icon-large)] rounded-[var(--size-radius-full)] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${article.author.avatar})` }}
              role="img"
              aria-label={`${article.author.name} avatar`}
            />

            <div className="flex flex-col w-[114px] items-start gap-1.5 relative">
              <span className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm tracking-[0] leading-[14px]">
                {article.author.name}
              </span>

              <span className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs tracking-[0] leading-[14px]">
                {article.author.role}
              </span>
            </div>
          </div>

          <button
            className="flex w-[41px] h-[41px] items-center justify-center gap-2.5 p-2.5 relative bg-grey-50 rounded-[87px] border border-solid border-grey-75 hover:bg-grey-75 transition-colors"
            aria-label="Read article"
          >
            <img
              className="relative w-6 h-6 mt-[-1.50px] mb-[-1.50px] ml-[-1.50px] mr-[-1.50px]"
              alt="Arrow up right"
              src="https://c.animaapp.com/VIaP56iJ/img/arrow-up-right-5.svg"
            />
          </button>
        </footer>
      </div>
    </article>
  );

  return (
    <section className="flex-col w-[1132px] items-end justify-end gap-[50px] flex relative flex-[0_0_auto]">
      <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <nav
          className="inline-flex items-start justify-center gap-2 relative flex-[0_0_auto]"
          role="tablist"
        >
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterClick(category.id)}
              className={`flex items-center justify-center gap-1.5 px-2.5 py-[5px] relative rounded-[45px] transition-colors ${
                activeFilter === category.id
                  ? "bg-primary-100"
                  : "bg-white border border-solid border-primary-100"
              }`}
              role="tab"
              aria-selected={activeFilter === category.id}
            >
              <span
                className={`relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-sm text-center tracking-[0] leading-[23px] ${
                  activeFilter === category.id
                    ? "text-neutral-900"
                    : "text-primary-100"
                }`}
              >
                {category.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex w-[218px] h-[33px] items-center gap-[5px] pl-[19px] pr-[21px] py-0 relative bg-white rounded-[324px] border border-solid border-grey-200">
          <img
            className="relative w-[13px] h-[13px]"
            alt="Search icon"
            src="https://c.animaapp.com/VIaP56iJ/img/search.svg"
          />

          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search ......."
            className="relative w-full [font-family:'Urbanist',Helvetica] font-medium text-grey-400 text-xs text-center tracking-[0] leading-[23px] bg-transparent border-none outline-none"
            aria-label="Search articles"
          />
        </div>
      </header>

      <main className="flex flex-col gap-6 self-stretch w-full">
        <div className="items-center justify-center gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
          {articlesData.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="items-center justify-center gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
          {articlesData.slice(3, 6).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      {/* Replace pagination nav with custom styled pagination */}
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            data-state="Current"
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              background: "#1D8FFF",
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#F5F5F5",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              1
            </div>
          </div>
          <div
            data-state="Default"
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#6A7986",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              2
            </div>
          </div>
          <div
            data-state="Default"
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#6A7986",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              3
            </div>
          </div>
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#071F36",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "700",
                lineHeight: "22.40px",
                wordWrap: "break-word",
              }}
            >
              ...
            </div>
          </div>
          <div
            data-state="Default"
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#6A7986",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              67
            </div>
          </div>
          <div
            data-state="Default"
            style={{
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#6A7986",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              68
            </div>
          </div>
        </div>
        <div
          data-state="Default"
          style={{
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#6A7986",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: "16px",
              wordWrap: "break-word",
            }}
          >
            Next
          </div>
          <div
            data-size="16"
            style={{
              width: 16,
              height: 16,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 9.33,
                height: 9.33,
                left: 3.34,
                top: 3.33,
                position: "absolute",
                outline: "1.60px #6A7986 solid",
                outlineOffset: "-0.80px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
