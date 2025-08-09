import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  tags: {
    label: string;
    color: 'blue' | 'amber' | 'emerald';
  }[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to Core Web Vitals Optimization in 2025',
    description: 'Master the latest Google Core Web Vitals requirements and boost your site\'s performance with our comprehensive optimization strategies that actually work.',
    imageUrl: 'https://placehold.co/332x136',
    readTime: '12 min read',
    author: {
      name: 'Alex Thompson',
      title: 'Senior SEO Strategist',
      avatar: 'https://placehold.co/40x40'
    },
    tags: [
      { label: 'Technical SEO', color: 'blue' },
      { label: 'Technical SEO', color: 'amber' }
    ]
  },
  {
    id: '2',
    title: 'Local SEO Checklist: 15 Steps to Dominate Local Search',
    description: 'Complete actionable checklist to improve your local search rankings and attract more customers in your area with proven strategies.',
    imageUrl: 'https://placehold.co/332x136',
    readTime: '12 min read',
    author: {
      name: 'Alex Thompson',
      title: 'Senior SEO Strategist',
      avatar: 'https://placehold.co/40x40'
    },
    tags: [
      { label: 'Trending', color: 'blue' },
      { label: 'Local SEO', color: 'emerald' }
    ]
  },
  {
    id: '3',
    title: 'Complete Guide to Core Web Vitals Optimization in 2025',
    description: 'Master the latest Google Core Web Vitals requirements and boost your site\'s performance with our comprehensive optimization strategies that actually work.',
    imageUrl: 'https://placehold.co/332x136',
    readTime: '12 min read',
    author: {
      name: 'Alex Thompson',
      title: 'Senior SEO Strategist',
      avatar: 'https://placehold.co/40x40'
    },
    tags: [
      { label: 'Technical SEO', color: 'blue' },
      { label: 'Technical SEO', color: 'amber' }
    ]
  }
];

const getTagStyles = (color: 'blue' | 'amber' | 'emerald') => {
  const styles = {
    blue: 'bg-indigo-50 outline-blue-500 text-blue-500',
    amber: 'bg-orange-50 outline-amber-500 text-amber-500',
    emerald: 'bg-emerald-600/20 outline-emerald-600 text-emerald-600'
  };
  return styles[color];
};

export default function SEOBlogSection() {
  return (
    <div className="w-full max-w-[1128px] mx-auto inline-flex flex-col justify-start items-center gap-12 py-16">
      {/* Header Section */}
      <div className="w-full max-w-[519px] h-44 flex flex-col justify-start items-center gap-4">
        <div className="w-28 py-[5px] rounded-[45px] outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex justify-center items-center gap-1.5">
          <div className="w-24 px-2 py-0.5 bg-blue-500 rounded-[45px] flex justify-start items-center gap-1.5">
            <div className="w-3.5 h-3.5 relative">
              <div className="w-3 h-3 left-[1.25px] top-[1.25px] absolute bg-white rounded-sm" />
            </div>
            <div className="justify-start text-white text-sm font-medium font-['Urbanist'] capitalize leading-snug">
              Our Blogs
            </div>
          </div>
        </div>
        
        <div className="self-stretch h-28 flex flex-col justify-start items-center gap-4">
          <h1 className="self-stretch text-center justify-start text-sky-700 text-5xl font-bold font-['Urbanist'] leading-[57px]">
            Latest SEO Insights
          </h1>
          <p className="self-stretch text-center justify-start text-slate-500 text-base font-medium font-['Urbanist'] leading-snug">
            Stop chasing updates and start building systems. Our founder shares why strategy matters more than reacting to every tweak in the algorithm.
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="self-stretch inline-flex justify-center items-center gap-6 flex-wrap lg:flex-nowrap">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="w-96 h-[460px] px-3.5 py-5 bg-white rounded-xl shadow-[0px_4px_25.600000381469727px_0px_rgba(47,152,255,0.37)] inline-flex flex-col justify-start items-start gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="self-stretch h-32 relative rounded-md overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="self-stretch h-64 flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch h-52 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="inline-flex justify-start items-start gap-2">
                    {post.tags.map((tag, index) => (
                      <div 
                        key={index}
                        className={`px-2.5 py-1 rounded-[432px] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-2.5 ${getTagStyles(tag.color)}`}
                      >
                        <div className="w-16 h-3.5 text-center justify-start text-[10px] font-normal font-['Urbanist'] leading-none">
                          {tag.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="self-stretch justify-start text-sky-700 text-lg font-semibold font-['Urbanist'] leading-normal hover:text-sky-800 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="self-stretch justify-start text-neutral-400 text-sm font-normal font-['Urbanist'] leading-snug">
                    {post.description}
                  </p>
                </div>
                
                <div className="inline-flex justify-start items-center gap-1.5">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <div className="justify-start text-neutral-400 text-xs font-normal font-['Urbanist'] leading-snug">
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex justify-start items-center gap-3.5">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-28 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch justify-start text-slate-900 text-sm font-medium font-['Urbanist'] leading-none">
                      {post.author.name}
                    </div>
                    <div className="self-stretch justify-start text-neutral-500 text-xs font-normal font-['Urbanist'] leading-none">
                      {post.author.title}
                    </div>
                  </div>
                </div>
                
                <button 
                  className="w-10 h-10 p-2.5 bg-neutral-50 rounded-[87px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2.5 hover:bg-blue-50 hover:outline-blue-300 transition-colors"
                  aria-label="Share post"
                >
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="inline-flex justify-start items-center gap-4 flex-wrap">
        <button className="w-64 h-12 px-[3px] bg-blue-500 rounded-[45px] shadow-[0px_4px_14.699999809265137px_0px_rgba(47,152,255,0.63)] flex justify-end items-center gap-2.5 hover:bg-blue-600 transition-colors">
          <span className="text-center justify-start text-white text-base font-medium font-['Urbanist'] capitalize leading-snug">
            get custom sEO Strategy
          </span>
          <div className="p-3 bg-indigo-50 rounded-[34px] outline outline-1 outline-offset-[-1px] outline-blue-300 flex justify-start items-center gap-2.5">
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </div>
        </button>
        
        <button className="w-56 h-12 px-5 py-2.5 bg-neutral-50 rounded-[33px] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center gap-1.5 hover:bg-neutral-100 transition-colors">
          <span className="justify-start text-sky-950 text-base font-medium font-['Urbanist'] capitalize leading-none">
            Browse all blogs
          </span>
          <ArrowRight className="w-5 h-5 text-sky-950" />
        </button>
      </div>
    </div>
  );
}