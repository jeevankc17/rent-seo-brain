// Article and Tag types
export interface Tag {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

export interface Article {
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

  // ✅ Add optional fields for detailed pages
  imageAlt?: string;
  sections?: { title: string; content: string }[];
  content?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  extraContent?: string;
}

// Centralized articles data
export const articlesData: Article[] = [
  {
    id: 1,
    image: "/read-blog/ca/frame-2121458395.svg",
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
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "Core Web Vitals optimization illustration",
    sections: [
      {
        title: "Understanding Core Web Vitals Metrics",
        content: "Core Web Vitals consist of three key metrics: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). These metrics measure loading performance, interactivity, and visual stability respectively.",
      },
      {
        title: "Optimizing Largest Contentful Paint (LCP)",
        content: "To improve LCP, focus on optimizing your server response times, removing render-blocking resources, and optimizing images. Aim for an LCP of 2.5 seconds or less for optimal user experience.",
      },
      {
        title: "Reducing First Input Delay (FID)",
        content: "Minimize FID by reducing JavaScript execution time, breaking up long tasks, and using web workers for heavy computations. Target an FID of less than 100 milliseconds.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "Core Web Vitals analytics dashboard",
    extraContent: "Monitoring and maintaining good Core Web Vitals scores is an ongoing process. Use tools like Google PageSpeed Insights, Chrome DevTools, and Real User Monitoring (RUM) to continuously track your performance. Remember that Core Web Vitals are not just about SEO rankings—they directly impact user experience, conversion rates, and business success. Implement these optimization strategies systematically, test thoroughly, and monitor results to ensure your website delivers the fast, responsive experience users expect in 2025.",
  },
  {
    id: 2,
    image: "/read-blog/ca/frame-2121458395-1.svg",
    tags: [
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
    ],
    title: "Local SEO Checklist: 15 Steps to Dominate Local Search",
    description:
      "To improve your local search rankings and attract more customers in your area, start by optimizing your Google Business Profile (GBP). Claim and verify your listing, ensuring your business name, address, and phone number (NAP) are accurate and consistent.",
    readTime: "12 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "Local SEO optimization illustration",
    sections: [
      {
        title: "Optimize Your Google Business Profile",
        content: "Start by claiming and optimizing your Google Business Profile—ensure your business name, address, phone number, hours, photos, and updates are accurate and complete.",
      },
      {
        title: "Use Location-Based Keywords",
        content: "Next, use location-based keywords throughout your website and metadata to target searches in your city or neighborhood.",
      },
      {
        title: "Maintain Consistent NAP Information",
        content: "It's essential to maintain consistent NAP information (Name, Address, Phone) everywhere online, including directories and social media.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "Local SEO analytics dashboard",
    extraContent: "Content tailored for each area. Encourage your customers to leave reviews and always respond professionally to build trust and credibility. Since most local searches happen on mobile devices, ensure your website is mobile-friendly, fast-loading, and easy to navigate. Increase your visibility by listing your business on popular local directories like Yelp, Bing Places, and Yellow Pages. Adding local business schema markup (structured data) to your website helps search engines better understand your business details, improving your chances of appearing in rich local results. Regularly publish local content such as blogs about community events, news, or customer stories to boost your relevance. Build local backlinks from authoritative websites, local newspapers, or community groups to strengthen your site's authority. Embed a Google Map on your contact page to make it easier for customers and search engines to find your location, and don't forget to geo-tag your images with location data before uploading them to your site or Google Business Profile to reinforce local signals. Track your local SEO performance using tools like Google Analytics and Search Console to monitor rankings, traffic, and user behavior. Stay active on your Google Business Profile by posting updates and engaging with customers, signaling ongoing relevance. Finally, keep up with the latest local SEO trends and algorithm updates by following trusted SEO news sources and regularly auditing your strategy. By consistently applying these 15 steps, you can boost your local search rankings, attract more nearby customers, and grow your business. Start implementing these tips today and watch your local presence thrive!",
  },
  {
    id: 3,
    image: "/read-blog/ca/frame-2121458395-2.svg",
    tags: [
      {
        label: "Technical SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Advanced",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Schema Markup Implementation Guide for Better SERP Results",
    description:
      "Learn how to implement structured data and schema markup to enhance your search engine results pages (SERP) appearance and improve click-through rates with rich snippets.",
    readTime: "15 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "Schema markup implementation illustration",
    sections: [
      {
        title: "Understanding Schema Markup Types",
        content: "Schema.org provides hundreds of markup types including Organization, LocalBusiness, Product, Article, and Review schemas. Choose the most relevant types for your content to maximize SERP enhancement opportunities.",
      },
      {
        title: "JSON-LD vs Microdata Implementation",
        content: "JSON-LD is Google's preferred format for structured data. It's easier to implement, maintain, and doesn't clutter your HTML. Learn the syntax and best practices for clean implementation.",
      },
      {
        title: "Testing and Validation",
        content: "Use Google's Rich Results Test and Schema Markup Validator to ensure your implementation is correct. Regular testing prevents errors that could hurt your search performance.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "Schema markup testing tools dashboard",
    extraContent: "Advanced schema implementation can significantly boost your search visibility through rich snippets, knowledge panels, and enhanced search results. Focus on implementing the most impactful schema types for your business first, then expand gradually. Monitor your rich snippet performance through Google Search Console and adjust your markup based on what generates the best click-through rates. Remember that schema markup is not just about SEO—it's about providing search engines with clear, structured information that helps them understand and present your content better to users.",
  },
  {
    id: 4,
    image: "/read-blog/ca/frame-2121458395-3.svg",
    tags: [
      {
        label: "Content SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Strategy",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Content Optimization: From Keyword Research to User Intent",
    description:
      "Master the art of creating SEO-optimized content that ranks well and satisfies user intent. Learn advanced keyword research, content structuring, and optimization techniques.",
    readTime: "18 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "Content optimization strategy illustration",
    sections: [
      {
        title: "Advanced Keyword Research Techniques",
        content: "Move beyond basic keyword tools by analyzing SERP features, competitor content gaps, and semantic keyword relationships. Use tools like Ahrefs, SEMrush, and Answer The Public for comprehensive research.",
      },
      {
        title: "Understanding Search Intent Types",
        content: "Classify keywords by intent: informational, navigational, transactional, and commercial investigation. Align your content format and structure with the specific intent behind each target keyword.",
      },
      {
        title: "Content Structure and Optimization",
        content: "Create comprehensive content that covers topics thoroughly. Use proper heading hierarchy, internal linking, and ensure your content answers related questions users might have.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "Content performance analytics dashboard",
    extraContent: "Effective content optimization is about creating valuable resources that genuinely help your audience while strategically targeting search opportunities. Focus on creating content clusters around main topics, use natural language processing insights to improve semantic relevance, and regularly update your content to maintain freshness. Monitor user engagement metrics like time on page, bounce rate, and social shares to gauge content quality beyond just rankings. Remember that the best SEO content is content that users find genuinely useful and engaging.",
  },
  {
    id: 5,
    image: "/read-blog/ca/frame-2121458395-4.svg",
    tags: [
      {
        label: "Trending",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "E-commerce",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-75",
        borderColor: "border-secondary-75",
      },
    ],
    title: "E-commerce SEO: Product Page Optimization Strategies",
    description:
      "Boost your e-commerce sales with proven product page optimization techniques. Learn how to optimize product descriptions, images, and technical elements for better search rankings.",
    readTime: "14 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "E-commerce product page optimization illustration",
    sections: [
      {
        title: "Product Description Optimization",
        content: "Write unique, detailed product descriptions that include target keywords naturally. Focus on benefits, specifications, and answers to common customer questions. Avoid manufacturer descriptions that create duplicate content.",
      },
      {
        title: "Image SEO for Products",
        content: "Optimize product images with descriptive file names, alt text, and proper sizing. Use multiple high-quality images and consider implementing image schema markup for rich results.",
      },
      {
        title: "Technical E-commerce SEO",
        content: "Implement product schema markup, optimize URL structures, manage inventory-based content, and ensure proper pagination for product categories. Handle out-of-stock products appropriately.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "E-commerce SEO performance metrics",
    extraContent: "E-commerce SEO requires a balance between optimization for search engines and conversion optimization for users. Focus on creating product pages that load fast, provide comprehensive information, and guide users toward purchase decisions. Implement customer review systems, optimize for mobile shopping experiences, and ensure your site architecture supports easy navigation and internal linking. Monitor both SEO metrics and conversion rates to ensure your optimization efforts contribute to actual business growth, not just improved rankings.",
  },
  {
    id: 6,
    image: "/read-blog/ca/frame-2121458395-5.svg",
    tags: [
      {
        label: "Link Building",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Authority",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "White Hat Link Building Strategies That Actually Work",
    description:
      "Build high-quality backlinks ethically with proven strategies that improve domain authority and search rankings. Learn sustainable link building techniques for long-term SEO success.",
    readTime: "16 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "Link building strategies illustration",
    sections: [
      {
        title: "Content-Driven Link Attraction",
        content: "Create link-worthy content like original research, comprehensive guides, and industry reports. High-quality content naturally attracts backlinks from other websites and establishes your authority.",
      },
      {
        title: "Relationship-Based Link Building",
        content: "Build genuine relationships with industry influencers, bloggers, and website owners. Engage with their content, provide value, and naturally opportunities for collaboration and linking will emerge.",
      },
      {
        title: "Technical Link Building Tactics",
        content: "Use techniques like broken link building, resource page outreach, and unlinked brand mention recovery. These methods provide value to other sites while earning quality backlinks.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "Link building campaign results dashboard",
    extraContent: "Sustainable link building is about creating genuine value for other websites and their audiences. Focus on earning links through quality content, helpful resources, and authentic relationships rather than manipulative tactics. Monitor your backlink profile regularly using tools like Ahrefs or Moz, and disavow any low-quality or spammy links that could harm your rankings. Remember that a few high-quality, relevant links are worth more than many low-quality ones. Build your link building strategy around providing value and solving problems for your target audience and industry peers.",
  },
  {
    id: 7,
    image: "/read-blog/ca/frame-2121458395-2.svg",
    tags: [
      {
        label: "Technical SEO",
        bgColor: "bg-primary-500",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
      },
      {
        label: "Advanced",
        bgColor: "bg-secondary-500",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
      },
    ],
    title: "Schema Markup Implementation Guide for Better SERP Results",
    description:
      "Learn how to implement structured data and schema markup to enhance your search engine results pages (SERP) appearance and improve click-through rates with rich snippets.",
    readTime: "15 min read",
    author: {
      name: "Alex Thompson",
      role: "Senior SEO Strategist",
      avatar: "/read-blog/ca/shape-5@2x.png",
    },
    imageAlt: "Schema markup implementation illustration",
    sections: [
      {
        title: "Understanding Schema Markup Types",
        content: "Schema.org provides hundreds of markup types including Organization, LocalBusiness, Product, Article, and Review schemas. Choose the most relevant types for your content to maximize SERP enhancement opportunities.",
      },
      {
        title: "JSON-LD vs Microdata Implementation",
        content: "JSON-LD is Google's preferred format for structured data. It's easier to implement, maintain, and doesn't clutter your HTML. Learn the syntax and best practices for clean implementation.",
      },
      {
        title: "Testing and Validation",
        content: "Use Google's Rich Results Test and Schema Markup Validator to ensure your implementation is correct. Regular testing prevents errors that could hurt your search performance.",
      },
    ],
    secondaryImage: "/read-blog/ca/image-1.svg",
    secondaryImageAlt: "Schema markup testing tools dashboard",
    extraContent: "Advanced schema implementation can significantly boost your search visibility through rich snippets, knowledge panels, and enhanced search results. Focus on implementing the most impactful schema types for your business first, then expand gradually. Monitor your rich snippet performance through Google Search Console and adjust your markup based on what generates the best click-through rates. Remember that schema markup is not just about SEO—it's about providing search engines with clear, structured information that helps them understand and present your content better to users.",
  },
];

// Get all articles
export async function getAllArticles(): Promise<Article[]> {
  return articlesData;
}

// Get article by id
export async function getArticleById(
  id: string | number
): Promise<Article | null> {
  const numId = typeof id === "string" ? Number(id) : id;
  if (isNaN(numId)) return null;
  const article = articlesData.find((a) => a.id === numId);
  return article ?? null;
}