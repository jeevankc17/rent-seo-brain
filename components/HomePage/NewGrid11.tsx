import Image from 'next/image';
import { ArrowRight, Star, TrendingUp, Users, Mail, Heart } from 'lucide-react';

interface Industry {
  label: string;
  active?: boolean;
}

interface CaseStudyStats {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  company: string;
  tags: Array<{
    label: string;
    variant: 'default' | 'primary';
  }>;
  challenge: string;
  solution: string;
  mainStats: {
    traffic: string;
    leads: string;
    revenue: string;
  };
  detailedStats: CaseStudyStats[];
}

const industries: Industry[] = [
  { label: 'HEALTHCARE' },
  { label: 'WELLNESS & BEAUTY' },
  { label: 'TRAVEL & HOSPITALITY' },
  { label: 'REALESTATE' },
  { label: 'SAAS' }
];

const caseStudy: CaseStudy = {
  id: '1',
  company: 'GrowthLab Inc.',
  tags: [
    { label: 'Lead Based', variant: 'default' },
    { label: '6 months', variant: 'primary' }
  ],
  challenge: 'Struggling to compete with larger brands',
  solution: 'Targeted content campaigns focusing on long-tail keywords and customer success stories',
  mainStats: {
    traffic: '+380%',
    leads: '+190%',
    revenue: '$1.8M'
  },
  detailedStats: [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      value: '8k - 38k',
      label: 'Organic Traffic'
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      value: '2k - 12k',
      label: 'Email Subscribers'
    },
    {
      icon: <Heart className="w-5 h-5 text-blue-500" />,
      value: '+320%',
      label: 'Social engagement'
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      value: '+450%',
      label: 'Brand Mentions'
    }
  ]
};

const testimonial = {
  text: "The team truly understood our audience. For the first time, Google Ads actually started driving qualified leads. Our CAC dropped significantly while our signups skyrocketed. They became a true extension of our team.",
  author: "Rhea S., Co-founder, GrowthLabs",
  rating: 5
};

export default function CaseStudiesSection() {
  return (
    <div className="w-full max-w-[1440px] h-auto min-h-[1542px] relative bg-neutral-950 overflow-hidden">
      {/* Background blur effects */}
      <div className="w-[464px] h-96 absolute right-[132px] top-[261px] bg-blue-500/60 rounded-full blur-[365px]" />
      <div className="w-[464px] h-96 absolute -left-[172px] top-[238px] bg-blue-500/60 rounded-full blur-[365px]" />
      
      <div className="w-full max-w-[1128px] mx-auto px-4 pt-[93px] flex flex-col justify-start items-start gap-6">
        {/* Main Content Section */}
        <div className="self-stretch h-auto relative">
          {/* Blue accent bar */}
          <div className="w-52 h-6 absolute right-[59px] top-0 bg-blue-500 rounded-3xl" />
          
          <div className="w-full h-auto mt-[33px] relative">
            {/* Testimonial Card */}
            <div className="w-full max-w-[891px] px-9 py-6 absolute top-[-33px] left-0 bg-white rounded-3xl flex flex-col justify-center items-start gap-2.5 z-10">
              <div className="flex justify-center items-center gap-2.5">
                <div className="w-full max-w-[803px]">
                  <span className="text-black text-base font-medium font-['Urbanist'] leading-relaxed">
                    "{testimonial.text}"
                  </span>
                  <span className="text-blue-400 text-base font-semibold font-['Urbanist'] leading-relaxed">
                    {' '}— {testimonial.author}
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-[3px]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-6 h-6 relative">
                    <Star className="w-5 h-5 absolute left-[2px] top-[3px] fill-yellow-400 text-yellow-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-16">
              {/* Left Side - Real Results Section */}
              <div className="w-full lg:w-[552px] h-[518px] relative rounded-3xl overflow-hidden">
                <Image
                  src="https://placehold.co/552x518"
                  alt="Real Results"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/75 rounded-3xl" />
                <div className="absolute top-[35px] left-[37px] w-[485px] h-96 flex flex-col justify-start items-start">
                  <div className="w-56 p-2.5 bg-white rounded-[45px] flex justify-center items-center gap-2.5">
                    <div className="text-center text-black text-lg font-semibold font-['Urbanist'] leading-snug">
                      Real Results, Real Clients
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Case Studies by Industry */}
              <div className="w-full lg:w-[542px] h-[661px] relative">
                <Image
                  src="https://placehold.co/542x661"
                  alt="Case Studies"
                  fill
                  className="object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/75 rounded-3xl" />
                <div className="absolute top-[159px] left-[27px] w-[488px] flex flex-col justify-center items-start gap-56">
                  <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="w-64 p-2.5 bg-white rounded-[45px] flex justify-center items-center gap-2.5">
                      <div className="text-center text-black text-lg font-semibold font-['Urbanist'] leading-snug">
                        Case Studies by Industry
                      </div>
                    </div>
                    
                    <div className="self-stretch flex justify-start items-end gap-3.5 flex-wrap">
                      {industries.map((industry, index) => (
                        <button
                          key={index}
                          className="px-6 py-3 rounded-[45px] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-2.5 hover:bg-white/10 transition-colors"
                        >
                          <div className="text-center text-white text-base font-semibold font-['Urbanist'] leading-snug">
                            {industry.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-72 h-12 px-5 py-2.5 bg-neutral-50 rounded-[33px] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center gap-1.5 hover:bg-white transition-colors">
                    <div className="text-sky-950 text-base font-medium font-['Urbanist'] capitalize leading-none">
                      View All case studies
                    </div>
                    <ArrowRight className="w-5 h-5 text-sky-950" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Details Section */}
        <div className="self-stretch px-9 py-8 bg-white rounded-3xl flex flex-col lg:flex-row justify-start items-center gap-10">
          {/* Stats Card */}
          <div className="w-full lg:w-[539px] h-[571px] relative bg-indigo-50 rounded-xl outline outline-1 outline-offset-[-0.96px] outline-blue-300 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 flex flex-col justify-start items-center gap-6">
              <div className="w-36 flex flex-col justify-center items-center gap-5">
                <div className="self-stretch text-center text-blue-500 text-5xl font-semibold font-['Urbanist'] leading-7">
                  {caseStudy.mainStats.traffic}
                </div>
                <div className="self-stretch text-center text-neutral-500 text-xl font-normal font-['Urbanist'] leading-normal">
                  Traffic Growth
                </div>
              </div>
              
              <div className="self-stretch flex justify-center items-center gap-9">
                <div className="w-20 flex flex-col justify-center items-center gap-1.5">
                  <div className="self-stretch text-center text-slate-700 text-xl font-semibold font-['Urbanist'] leading-normal">
                    {caseStudy.mainStats.leads}
                  </div>
                  <div className="self-stretch text-center text-neutral-500 text-sm font-normal font-['Urbanist'] leading-snug">
                    Lead Increase
                  </div>
                </div>
                
                <div className="w-28 flex flex-col justify-center items-center gap-1.5">
                  <div className="self-stretch text-center text-slate-700 text-xl font-semibold font-['Urbanist'] leading-normal">
                    {caseStudy.mainStats.revenue}
                  </div>
                  <div className="w-36 text-center text-neutral-500 text-sm font-normal font-['Urbanist'] leading-snug">
                    Revenue Generated
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Details */}
          <div className="w-full lg:w-[491px] flex flex-col justify-center items-start gap-4">
            <div className="self-stretch flex flex-col justify-center items-start gap-6">
              <div className="flex justify-start items-center gap-2">
                {caseStudy.tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`px-2.5 py-1 rounded-[67px] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-2.5 ${
                      tag.variant === 'primary'
                        ? 'bg-blue-500 text-white'
                        : 'bg-neutral-50 outline-stone-300 text-neutral-500'
                    }`}
                  >
                    <div className="text-center text-sm font-medium font-['Urbanist'] leading-snug">
                      {tag.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch text-sky-700 text-lg font-semibold font-['Urbanist'] leading-snug">
                  {caseStudy.company}
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="w-72 flex flex-col justify-center items-start gap-2">
                    <div className="self-stretch text-slate-800 text-base font-medium font-['Urbanist'] leading-snug">
                      Challenge
                    </div>
                    <div className="self-stretch text-neutral-400 text-sm font-normal font-['Urbanist'] leading-snug">
                      {caseStudy.challenge}
                    </div>
                  </div>
                  
                  <div className="self-stretch flex flex-col justify-center items-start gap-2">
                    <div className="self-stretch text-slate-800 text-base font-medium font-['Urbanist'] leading-snug">
                      Solution
                    </div>
                    <div className="text-neutral-400 text-sm font-normal font-['Urbanist'] leading-snug">
                      {caseStudy.solution}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Detailed Stats Grid */}
            <div className="self-stretch px-16 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-50 grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {caseStudy.detailedStats.map((stat, index) => (
                <div key={index} className="w-32 flex flex-col justify-start items-center gap-3.5">
                  <div className="p-2.5 bg-indigo-50 rounded-[458px] outline outline-1 outline-offset-[-1px] outline-blue-300 flex justify-center items-center gap-2.5">
                    {stat.icon}
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-center gap-1">
                    <div className="self-stretch text-center text-slate-800 text-sm font-medium font-['Urbanist'] capitalize leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-center text-neutral-500 text-xs font-normal font-['Urbanist'] capitalize leading-none">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-56 h-12 px-5 py-2.5 bg-neutral-50 rounded-[33px] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center gap-1.5 hover:bg-neutral-100 transition-colors">
              <div className="text-sky-950 text-base font-medium font-['Urbanist'] capitalize leading-none">
                Read Full Case Study
              </div>
              <ArrowRight className="w-5 h-5 text-sky-950" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}