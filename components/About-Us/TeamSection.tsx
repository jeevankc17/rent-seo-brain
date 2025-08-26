import React from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socialIcon: string;
}

export const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nabin Chettri",
      position: "Head of Digital Strategy",
      image: "/About/Nabin.png",
      socialIcon: "/About/ca/frame-2121458250.svg",
    },
    {
      id: 2,
      name: "Ganesh Kumar BC",
      position: "Head of Operations",
      image: "/About/Ganesh.png",
      socialIcon: "/About/ca/frame-2121458250-1.svg",
    },
    {
      id: 3,
      name: "Sabi Karki",
      position: "Head of Content Marketing",
      image: "/About/ca/photo-2@2x.png",
      socialIcon: "/About/ca/frame-2121458250-2.svg",
    },
  ];

  // helper to detect local images (served from /public)
  const isLocal = (src: string) => src.startsWith("/");

  // keep only members that have essential content (image, name and position)
  // and prevent rendering placeholders by limiting to actual entries
  const visibleMembers = teamMembers
    .filter(
      (m) => !!m.image && m.image.trim() !== "" && !!m.name && !!m.position
    )
    .slice(0, teamMembers.length); // no placeholders — will only render real members

  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[50px] w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-[2000px] mx-auto">
      <header className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-[565px] px-2">
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-[5px] relative bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="/About/ca/stars-2.svg"
          />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
            Our Pillars of RSB
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full mt-2 sm:mt-0">
          <h2 className="w-full font-sans font-bold text-primary-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center leading-tight sm:leading-[48px] lg:leading-[57px]">
            The People Behind the Results
          </h2>
          <p className="w-full max-w-[565px] font-sans font-normal text-neutral-200 text-sm sm:text-base text-center leading-relaxed sm:leading-[23px]">
            Meet the experts who bring your digital marketing strategies to life
            with ultimate&nbsp;&nbsp;services : Google Ads , Landing page
            Design&nbsp;&nbsp;&amp; SEO
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8 lg:gap-[107px] w-full max-w-[1200px] mx-auto px-2 sm:px-4">
        {visibleMembers.map((member) => (
          <article
            key={member.id}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[435px] flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-[13px] relative w-full">
              <div className="relative w-full h-[200px] sm:h-[260px] md:h-[332px] rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  {isLocal(member.image) ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} photo`}
                      fill
                      className="object-cover rounded-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 260px, 304px"
                    />
                  ) : (
                    <img
                      src={member.image}
                      alt={`${member.name} photo`}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 relative w-full max-w-[187px]">
                <h3 className="w-full font-sans font-semibold text-primary-500 text-base sm:text-lg text-center leading-tight">
                  {member.name}
                </h3>
                <p className="w-full font-sans font-normal text-grey-500 text-sm text-center leading-relaxed">
                  {member.position}
                </p>
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Social media links"
                  src={member.socialIcon}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
