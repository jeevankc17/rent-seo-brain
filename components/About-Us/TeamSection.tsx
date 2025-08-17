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
      socialIcon: "https://c.animaapp.com/zvzHaAwZ/img/frame-2121458250.svg",
    },
    {
      id: 2,
      name: "Ganesh Kumar BC",
      position: "Head of Operations",
      image: "/About/Ganesh.png",
      socialIcon: "https://c.animaapp.com/zvzHaAwZ/img/frame-2121458250-1.svg",
    },
    {
      id: 3,
      name: "Sabi Karki",
      position: "Head of Content Marketing",
      image: "https://c.animaapp.com/zvzHaAwZ/img/photo-2@2x.png",
      socialIcon: "https://c.animaapp.com/zvzHaAwZ/img/frame-2121458250-2.svg",
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
    <section className="flex flex-col w-[1128px] items-center gap-[50px] relative flex-[0_0_auto]">
      <header className="flex flex-col w-[565px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex w-[155px] items-center justify-center gap-1.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-50 rounded-[45px] border border-solid border-primary-300">
          <img
            className="relative w-[15px] h-[15px]"
            alt="Stars"
            src="https://c.animaapp.com/zvzHaAwZ/img/stars-2.svg"
          />

          <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-primary-300 text-sm tracking-[0] leading-[23px] whitespace-nowrap">
            Our Pillars of RSB
          </div>
        </div>

        <div className="flex flex-col h-44 items-center gap-4 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-primary-500 text-[50px] text-center tracking-[0] leading-[57px]">
            The People Behind the Results
          </h2>

          <p className="relative w-[565px] [font-family:'Urbanist',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[23px]">
            Meet the experts who bring your digital marketing strategies to life
            with ultimate&nbsp;&nbsp;services : Google Ads , Landing page
            Design&nbsp;&nbsp;&amp; SEO
          </p>
        </div>
      </header>

      <div className="flex items-center justify-center gap-[107px] relative self-stretch w-full flex-[0_0_auto]">
        {visibleMembers.map((member) => (
          <article key={member.id} className="relative w-[304px] h-[435px]">
            <div className="flex flex-col w-[304px] items-center gap-[13px] relative">
              <div className="relative self-stretch w-full h-[332px]">
                <div className="relative w-[304px] h-[461px] top-[-129px]">
                  <div className="relative w-full h-full">
                    {isLocal(member.image) ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} photo`}
                        fill
                        className="object-cover rounded-none"
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
              </div>

              <div className="flex flex-col w-[187px] items-center justify-center gap-2 relative flex-[0_0_auto]">
                <h3 className="relative w-[187px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-primary-500 text-lg text-center tracking-[0] leading-[normal]">
                  {member.name}
                </h3>

                <p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-sm text-center tracking-[0] leading-[normal]">
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
