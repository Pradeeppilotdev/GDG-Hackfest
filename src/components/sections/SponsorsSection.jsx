import React from 'react';
import { Button } from '../ui';

const SponsorsSection = () => {
  const sponsors = [
    "GOOGLE CLOUD", "GITHUB", "JETBRAINS", "REPLIT",
    "VERCEL", "MONGODB", "POSTMAN", "FIGMA",
    "GOOGLE CLOUD", "GITHUB", "JETBRAINS", "REPLIT",
    "VERCEL", "MONGODB", "POSTMAN", "FIGMA"
  ];

  return (
    <section id="sponsors" className="py-16 md:py-20 bg-white border-y-2 border-black overflow-hidden">
      <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-10 md:mb-12 px-4">
        SPONSORS
      </h2>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
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
