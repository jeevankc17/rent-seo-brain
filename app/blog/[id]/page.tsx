import React from "react";
// Use the correct named export from your articles file
import { articlesData } from "../../../lib/articles";
import { BlogSuggestionsSection } from "../../../components/Read-Blog/BlogSuggestionsSection";

interface ArticleTag {
  label: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface ArticleSection {
  title: string;
  content: string;
}

interface Article {
  id: string;
  title: string;
  description?: string;
  tags?: ArticleTag[];
  image?: string;
  imageAlt?: string;
  sections?: ArticleSection[];
  content?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  extraContent?: string;
}

interface MainContentSectionProps {
  id: string;
}

function MainContentSection({ id }: MainContentSectionProps) {
  const article = articlesData.find((a) => String(a.id) === id);

  if (!article) {
    return (
      <article className="flex flex-col w-full max-w-4xl items-center gap-6 lg:gap-[50px] px-4 lg:px-0 relative flex-[0_0_auto]">
        <header className="w-full max-w-3xl gap-4 lg:gap-6 flex flex-col items-center relative flex-[0_0_auto]">
          <h1 className="text-primary-50 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">Article not found</h1>
        </header>
      </article>
    );
  }

  return (
    <main className="flex flex-col items-center gap-16 lg:gap-[132px] pt-16 lg:pt-[132px] pb-16 lg:pb-[132px]">
      <article className="flex flex-col w-full max-w-4xl items-center gap-6 lg:gap-[50px] px-4 lg:px-0 relative flex-[0_0_auto]">
        <header className="w-full max-w-3xl gap-4 lg:gap-6 flex flex-col items-center relative flex-[0_0_auto]">
          <div
            className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]"
            role="group"
            aria-label="Article tags"
          >
            {(article.tags || []).map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] ${
                  tag.bgColor || "bg-primary-500"
                } rounded-[432px] border border-solid ${
                  tag.borderColor || "border-primary-100"
                }`}
              >
                <span
                  className={`relative w-[63px] h-3.5 mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal ${
                    tag.textColor || "text-primary-100"
                  } text-[10px] text-center tracking-[0] leading-[14px] whitespace-nowrap`}
                >
                  {tag.label}
                </span>
              </span>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative w-full mt-[-1.00px] font-headings-h2-bold font-[number:var(--headings-h2-bold-font-weight)] text-primary-50 text-lg sm:text-xl md:text-2xl lg:text-[length:var(--headings-h2-bold-font-size)] text-center tracking-[var(--headings-h2-bold-letter-spacing)] leading-[var(--headings-h2-bold-line-height)] [font-style:var(--headings-h2-bold-font-style)]">
              {article.title}
            </h1>

            <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-xs sm:text-sm text-center tracking-[0] leading-[20px] sm:leading-[23px]">
              {article.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-[541px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[var(--size-icon-large)] h-[var(--size-icon-large)] rounded-[var(--size-radius-full)] object-cover"
                  alt="Alex Thompson profile picture"
                  src="https://c.animaapp.com/tbvdk4DW/img/shape@2x.png"
                />

                <div className="flex flex-col w-[114px] items-start gap-1.5 relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-xs sm:text-sm tracking-[0] leading-[14px]">
                    Alex Thompson
                  </div>

                  <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[10px] sm:text-xs tracking-[0] leading-[12px] sm:leading-[14px]">
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

                <time className="w-fit mt-[-1.00px] text-grey-400 leading-[20px] sm:leading-[23px] whitespace-nowrap relative [font-family:'Urbanist',Helvetica] font-normal text-[10px] sm:text-xs tracking-[0]">
                  12 min read
                </time>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-start gap-6 lg:gap-[49px] relative self-stretch w-full flex-[0_0_auto]">
          {article.image && (
            <img
              className="h-48 sm:h-64 md:h-80 lg:h-[462.07px] rounded-lg lg:rounded-[23.78px] relative self-stretch w-full object-cover"
              alt={article.imageAlt || "Article image"}
              src={article.image}
            />
          )}

          <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-transparent text-sm sm:text-base md:text-lg lg:text-2xl tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[45px]">
            {article.sections
              ? article.sections.map((section, index) => (
                  <React.Fragment key={index}>
                    <h2 className="font-semibold text-primary-100 text-base sm:text-lg md:text-xl lg:text-2xl">
                      {section.title}
                    </h2>
                    <br />
                    <p className="font-medium text-grey-500 text-sm sm:text-base md:text-lg lg:text-xl">
                      {section.content}
                      <br />
                      <br />
                    </p>
                  </React.Fragment>
                ))
              : article.content && (
                  <p className="font-medium text-grey-500 text-sm sm:text-base md:text-lg lg:text-xl">{article.content}</p>
                )}
          </div>

          {article.secondaryImage && (
            <img
              className="h-40 sm:h-48 md:h-64 lg:h-[327px] rounded-lg lg:rounded-[20px] relative self-stretch w-full object-cover"
              alt={article.secondaryImageAlt || "Secondary article image"}
              src={article.secondaryImage}
            />
          )}

          {article.extraContent && (
            <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-500 text-sm sm:text-base md:text-lg lg:text-2xl tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[45px]">
              {article.extraContent}
            </p>
          )}
        </main>
      </article>
      <section className="relative w-full h-auto lg:h-[560px] px-4 lg:px-[155px]">
        <BlogSuggestionsSection />
      </section>
    </main>
  );
}

// Updated to handle async params in Next.js 15
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <MainContentSection id={id} />;
}