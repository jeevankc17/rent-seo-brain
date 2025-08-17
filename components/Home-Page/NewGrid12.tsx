import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 5,
    quote:
      "Our Google Ads conversion rate jumped from 2.8% to 7.4% after launching a page designed by Rent SEO Brain. The ROI was immediate and substantial.",
    author: {
      name: "Ramesh D.",
      title: "Co-founder",
      company: "SaaS Growlytics",
      avatar: "/Home-Page/Hero-Section/RD.jpg",
    },
  },
  {
    id: "2",
    rating: 5,
    quote:
      "The team understood our audience perfectly. Our lead quality improved dramatically and we're now closing enterprise deals consistently.",
    author: {
      name: "Michelle K.",
      title: "Marketing Director",
      company: "TechFlow",
      avatar: "/Home-Page/Hero-Section/MK.jpg",
    },
  },
  {
    id: "3",
    rating: 5,
    quote:
      "We saw our revenue double in the first month. The attention to detail and strategic thinking was exceptional with clean and intuitive UI designs amazing.",
    author: {
      name: "David Chen",
      title: "Founder",
      company: "EcoStore",
      avatar: "/Home-Page/Hero-Section/DC.jpg",
    },
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="inline-flex justify-start items-center gap-[2.67px]">
      {[...Array(rating)].map((_, index) => (
        <div key={index} className="w-6 h-6 relative">
          <Star className="w-5 h-5 absolute left-[2px] top-[3px] fill-yellow-400 text-yellow-400" />
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="w-80 px-4 py-5 bg-white rounded-3xl shadow-[0px_4px_19.299999237060547px_0px_rgba(47,152,255,0.16)] outline outline-1 outline-offset-[-1px] outline-indigo-50 inline-flex flex-col justify-start items-start gap-3.5 hover:shadow-lg transition-shadow duration-300">
      <StarRating rating={testimonial.rating} />

      <blockquote className="self-stretch text-gray-500 text-sm font-normal font-['Urbanist'] leading-relaxed">
        "{testimonial.quote}"
      </blockquote>

      <div className="inline-flex justify-start items-center gap-3.5">
        <div className="w-14 h-14 rounded-full overflow-hidden relative">
          <Image
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-52 inline-flex flex-col justify-start items-start gap-0.5">
          <div className="self-stretch text-slate-900 text-base font-medium font-['Urbanist'] leading-relaxed">
            {testimonial.author.name}
          </div>
          <div className="self-stretch text-slate-500 text-sm font-normal font-['Urbanist'] leading-relaxed">
            {testimonial.author.title}, {testimonial.author.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="w-full max-w-[1128px] mx-auto px-4 py-16 inline-flex flex-col justify-start items-center gap-12">
      {/* Header Section */}
      <header className="w-full max-w-[633px] h-40 flex flex-col justify-start items-center gap-4">
        <div className="w-48 px-2.5 py-[5px] bg-indigo-50 rounded-[45px] outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex justify-center items-center gap-1.5">
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3 h-3 left-[1.25px] top-[1.25px] absolute bg-blue-500 rounded-sm" />
          </div>
          <div className="text-blue-500 text-sm font-medium font-['Urbanist'] leading-snug">
            Client Success Stories
          </div>
        </div>

        <div className="w-full max-w-[629px] h-28 flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[641px] text-center text-sky-700 text-5xl font-bold font-['Urbanist'] leading-[57px]">
            Trusted by Industry Leaders
          </h2>
          <p className="w-full max-w-[565px] text-center text-slate-500 text-base font-normal font-['Urbanist'] leading-snug">
            Don't just take our word for it. See what our clients have to say
            about the results we've delivered.
          </p>
        </div>
      </header>

      {/* Testimonials Grid */}
      <div className="self-stretch flex justify-center items-center gap-11 flex-wrap lg:flex-nowrap">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
