import React from 'react';

const BannerSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* GDG Website Banner with Neo-Brutalist Frame */}
        <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
          <img
            src="/assets/photoframes/Copy of GDG-Campus-Digital-WebsiteBanner-2650x500-Red.png"
            alt="GDG On Campus Hackfest 2025"
            className="w-full h-auto rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-shadow"
          />

          {/* Optional decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-brand-yellow border-2 border-black rounded-full"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-blue border-2 border-black rounded-full"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-brand-green border-2 border-black rounded-full"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-brand-red border-2 border-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
