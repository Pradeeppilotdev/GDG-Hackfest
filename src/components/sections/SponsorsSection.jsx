import React from 'react';
import { Button } from '../ui';

const SponsorsSection = () => {
  // Gold Tier Sponsors
  const goldSponsors = [
    // Currently no gold sponsors. Devfolio has been moved to Media Partners.
  ];

  // Silver Tier Sponsors
  const silverSponsors = [
    { name: "ETHIndia", logo: "/Untitled.png", alt: "ETHINDIA LOGO", url: "https://ethindia.co" },
    { name: "domains.xyz", logo: "/assets/xyz-logo-color.png", alt: "DOMAINS.XYZ LOGO", url: "https://gen.xyz" },
    { name: "CodeCrafters", logo: "/assets/CodeCrafters.io full logo (Dark text).png", alt: "CODECRAFTERS LOGO", url: "https://codecrafters.io" }
  ];

  // Media Partners (with do-follow backlinks)
  const mediaPartners = [
    { name: "Eventopia", logo: "/assets/Eventopia-Logo-10.png", alt: "EVENTOPIA LOGO", url: "https://eventopia.in" },
    { name: "Devfolio", logo: "/_Light.png", alt: "DEVFOLIO LOGO", url: "https://devfolio.co" }
  ];

  // Other Sponsors (Bronze/Community)
  const otherSponsors = [
    "GOOGLE CLOUD", "GITHUB", "JETBRAINS", "REPLIT",
    "VERCEL", "MONGODB", "POSTMAN", "FIGMA"
  ];

  return (
    <section id="sponsors" className="py-16 md:py-20 bg-white border-y-2 border-black overflow-hidden">
      <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-10 md:mb-12 px-4">
        SPONSORS
      </h2>

      {/* Gold Tier (render only if we have any) */}
      {goldSponsors.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-yellow">
              GOLD SPONSORS
            </h3>
            <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
          </div>
        <div className="overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          <div className="flex flex-nowrap md:flex-wrap justify-center md:justify-center items-center gap-6 md:gap-8 md:snap-none">
            {goldSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-4 border-brand-yellow rounded-2xl px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(249,171,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(249,171,0,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block min-w-[220px] snap-start"
              >
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.alt || sponsor.name}
                    className="w-40 h-20 md:w-48 md:h-24 object-contain"
                    onError={(e) => {
                      console.error(`Failed to load logo: ${sponsor.logo}`);
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
      )}

      {/* Silver Tier */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 md:mb-8">
          <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-400 text-center">
            SILVER SPONSORS
          </h3>
          <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
        </div>
        <div className="overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-6 md:gap-8 md:snap-none">
            {silverSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-100 to-gray-50 border-4 border-gray-400 rounded-2xl px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(156,163,175,1)] hover:shadow-[8px_8px_0px_0px_rgba(156,163,175,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block min-w-[80vw] md:min-w-[220px] snap-center md:snap-start"
              >
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.alt || sponsor.name}
                    className="w-32 h-16 md:w-40 md:h-20 object-contain"
                    onError={(e) => {
                      console.error(`Failed to load logo: ${sponsor.logo}`);
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Media Partners */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 md:mb-8">
          <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-blue text-center">
            MEDIA PARTNERS
          </h3>
          <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
        </div>
        <div className="overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          <div className="flex flex-nowrap md:flex-wrap justify-center md:justify-center items-center gap-6 md:gap-8 md:snap-none">
            {mediaPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-brand-blue rounded-2xl px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(66,133,244,1)] hover:shadow-[8px_8px_0px_0px_rgba(66,133,244,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block min-w-[80vw] md:min-w-[220px] snap-center md:snap-start"
              >
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.alt || partner.name}
                    className="w-32 h-16 md:w-40 md:h-20 object-contain"
                    onError={() => {
                      console.error(`Failed to load logo: ${partner.logo}`);
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Other Sponsors Marquee */}
      <div className="relative">
        <h3 className="font-heading font-bold text-xl md:text-2xl text-center mb-6 md:mb-8 px-4">
          COMMUNITY PARTNERS
        </h3>
        <div className="flex animate-marquee whitespace-nowrap">
          {otherSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="mx-4 md:mx-6 bg-gray-100 border-2 border-black rounded-lg px-4 md:px-8 py-4 md:py-6 font-mono font-bold text-sm md:text-base lg:text-lg grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              {sponsor}
            </div>
          ))}
          {otherSponsors.map((sponsor, index) => (
            <div
              key={`dup-${index}`}
              className="mx-4 md:mx-6 bg-gray-100 border-2 border-black rounded-lg px-4 md:px-8 py-4 md:py-6 font-mono font-bold text-sm md:text-base lg:text-lg grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              {sponsor}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 md:mt-12 px-4">
        <p className="font-mono text-base md:text-lg mb-4 md:mb-6">Want to sponsor this event?</p>
        <Button
          variant="outline"
          className="text-sm md:text-base"
          onClick={() => window.location.href = 'mailto:chandrapradeepr@gmail.com?subject=Sponsorship Enquiry for GDG Hackfest'}
        >
          Become a Sponsor
        </Button>
      </div>
    </section>
  );
};

export default SponsorsSection;
