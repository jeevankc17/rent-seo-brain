import React from 'react'
import Image from 'next/image'

const ReadBlog: React.FC = () => {
  return (
    <div>
      <div className="w-[1128px] inline-flex flex-col justify-start items-center gap-12">
        <div className="w-[792px] flex flex-col justify-start items-center gap-6">
          <div className="inline-flex justify-start items-start gap-2">
            <div className="px-2.5 py-1 bg-indigo-50 rounded-[432px] outline outline-1 outline-offset-[-1px] outline-blue-500 flex justify-center items-center gap-2.5">
              <div className="w-16 h-3.5 text-center justify-start text-blue-500 text-[10px] font-normal font-['Urbanist'] leading-none">Trending</div>
            </div>
            <div className="px-2.5 py-1 bg-emerald-600/20 rounded-[432px] outline outline-1 outline-offset-[-1px] outline-emerald-600 flex justify-center items-center gap-2.5">
              <div className="w-16 h-3.5 text-center justify-start text-emerald-600 text-[10px] font-normal font-['Urbanist'] leading-none">Local SEO</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <h1 className="w-[768px] text-center justify-start text-sky-700 text-5xl font-bold font-['Urbanist'] leading-[57px]">Local SEO Checklist: 15 Steps to Dominate Local Search</h1>
            <p className="self-stretch text-center justify-start text-neutral-400 text-sm font-normal font-['Urbanist'] leading-snug">To improve your local search rankings and attract more customers in your area, start by optimizing your Google Business Profile (GBP). Claim and verify your listing, ensuring your business name, address, and phone number (NAP) are accurate and consistent. Choose the most relevant business categories</p>
            <div className="self-stretch inline-flex justify-start items-center gap-[541px]">
              <div className="flex justify-start items-center gap-3.5">
                <div data-shape="Circle" data-size="Large" data-type="Image" className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image 
                    className="w-10 h-10 left-0 top-0 absolute" 
                    src="https://placehold.co/40x40" 
                    alt="Alex Thompson profile picture"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="w-28 inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch justify-start text-slate-900 text-sm font-medium font-['Urbanist'] leading-none">Alex Thompson</div>
                  <div className="self-stretch justify-start text-neutral-500 text-xs font-normal font-['Urbanist'] leading-none">Senior SEO Strategist</div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-1.5">
                <div className="w-4 h-4 relative overflow-hidden">
                  <div className="w-3.5 h-3.5 left-[1.34px] top-[1.33px] absolute outline outline-[1.62px] outline-offset-[-0.81px] outline-neutral-400"></div>
                  <div className="w-[2.67px] h-1.5 left-[8px] top-[4px] absolute outline outline-[1.62px] outline-offset-[-0.81px] outline-neutral-400"></div>
                </div>
                <div className="justify-start text-neutral-400 text-xs font-normal font-['Urbanist'] leading-snug">12 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
          <Image 
            className="self-stretch h-[462.07px] relative rounded-3xl" 
            src="https://placehold.co/1128x462" 
            alt="Local SEO checklist main image"
            width={1128}
            height={462}
          />
          <div className="self-stretch h-[504px] justify-start">
            <span className="text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-10">Optimize Your Google Business Profile<br/></span>
            <span className="text-neutral-500 text-2xl font-medium font-['Urbanist'] leading-10">Start by claiming and optimizing your Google Business Profile—ensure your business name, address, phone number, hours, photos, and updates are accurate and complete.<br/><br/></span>
            <span className="text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-10">Use Location-Based Keywords<br/></span>
            <span className="text-neutral-500 text-2xl font-medium font-['Urbanist'] leading-10">Next, use location-based keywords throughout your website and metadata to target searches in your city or neighborhood.<br/><br/></span>
            <span className="text-blue-500 text-2xl font-semibold font-['Urbanist'] leading-10">Maintain Consistent NAP Information<br/></span>
            <span className="text-neutral-500 text-2xl font-medium font-['Urbanist'] leading-10">It&apos;s essential to maintain consistent NAP information (Name, Address, Phone) everywhere online, including directories and social media.<br/><br/></span>
          </div>
          <Image 
            className="self-stretch h-80 relative rounded-[20px]" 
            src="https://placehold.co/1128x327" 
            alt="Local SEO strategies illustration"
            width={1128}
            height={327}
          />
          <div className="self-stretch h-[780px] justify-start text-neutral-500 text-2xl font-medium font-['Urbanist'] leading-10">
            Content tailored for each area. Encourage your customers to leave reviews and always respond professionally to build trust and credibility. Since most local searches happen on mobile devices, ensure your website is mobile-friendly, fast-loading, and easy to navigate. Increase your visibility by listing your business on popular local directories like Yelp, Bing Places, and Yellow Pages. Adding local business schema markup (structured data) to your website helps search engines better understand your business details, improving your chances of appearing in rich local results. Regularly publish local content such as blogs about community events, news, or customer stories to boost your relevance. Build local backlinks from authoritative websites, local newspapers, or community groups to strengthen your site&apos;s authority. Embed a Google Map on your contact page to make it easier for customers and search engines to find your location, and don&apos;t forget to geo-tag your images with location data before uploading them to your site or Google Business Profile to reinforce local signals. Track your local SEO performance using tools like Google Analytics and Search Console to monitor rankings, traffic, and user behavior. Stay active on your Google Business Profile by posting updates and engaging with customers, signaling ongoing relevance. Finally, keep up with the latest local SEO trends and algorithm updates by following trusted SEO news sources and regularly auditing your strategy. By consistently applying these 15 steps, you can boost your local search rankings, attract more nearby customers, and grow your business. Start implementing these tips today and watch your local presence thrive!<br/><br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadBlog
