import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui';

const SponsorsSection = () => {
  const [silverIndex, setSilverIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  const silverCarouselRef = useRef(null);
  const silverCardRefs = useRef([]);
  const mediaCarouselRef = useRef(null);
  const mediaCardRefs = useRef([]);
  const trackCarouselRef = useRef(null);
  const trackCardRefs = useRef([]);

  // Gold Tier Sponsors
  const goldSponsors = [
    // Currently no gold sponsors. Devfolio has been moved to Media Partners.
  ];

  // Track Sponsors
  const trackSponsors = [
    { name: "Requestly", logo: "/requestly.png", alt: "REQUESTLY LOGO", url: "https://requestly.com" },
    { name: "Duality AI", logo: "/Duality-Primary-Email.png", alt: "DUALITY AI LOGO", url: "https://duality.ai" }
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

  const scrollSilver = (direction) => {
    if (!silverCarouselRef.current || silverCardRefs.current.length === 0) return;

    let targetIndex = silverIndex;
    targetIndex = direction === 'left' ? targetIndex - 1 : targetIndex + 1;
    if (targetIndex < 0) targetIndex = silverSponsors.length - 1;
    if (targetIndex >= silverSponsors.length) targetIndex = 0;

    setSilverIndex(targetIndex);

    const container = silverCarouselRef.current;
    const targetCard = silverCardRefs.current[targetIndex];
    if (container && targetCard) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = targetCard.getBoundingClientRect();
      const scrollLeft = container.scrollLeft;
      const cardLeft = cardRect.left - containerRect.left + scrollLeft;
      const cardWidth = cardRect.width;
      const containerWidth = containerRect.width;
      const targetScroll = cardLeft - containerWidth / 2 + cardWidth / 2;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const scrollTrack = (direction) => {
    if (!trackCarouselRef.current || trackCardRefs.current.length === 0) return;

    let targetIndex = trackIndex;
    targetIndex = direction === 'left' ? targetIndex - 1 : targetIndex + 1;
    if (targetIndex < 0) targetIndex = trackSponsors.length - 1;
    if (targetIndex >= trackSponsors.length) targetIndex = 0;

    setTrackIndex(targetIndex);

    const container = trackCarouselRef.current;
    const targetCard = trackCardRefs.current[targetIndex];
    if (container && targetCard) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = targetCard.getBoundingClientRect();
      const scrollLeft = container.scrollLeft;
      const cardLeft = cardRect.left - containerRect.left + scrollLeft;
      const cardWidth = cardRect.width;
      const containerWidth = containerRect.width;
      const targetScroll = cardLeft - containerWidth / 2 + cardWidth / 2;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const scrollMedia = (direction) => {
    if (!mediaCarouselRef.current || mediaCardRefs.current.length === 0) return;

    let targetIndex = mediaIndex;
    targetIndex = direction === 'left' ? targetIndex - 1 : targetIndex + 1;
    if (targetIndex < 0) targetIndex = mediaPartners.length - 1;
    if (targetIndex >= mediaPartners.length) targetIndex = 0;

    setMediaIndex(targetIndex);

    const container = mediaCarouselRef.current;
    const targetCard = mediaCardRefs.current[targetIndex];
    if (container && targetCard) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = targetCard.getBoundingClientRect();
      const scrollLeft = container.scrollLeft;
      const cardLeft = cardRect.left - containerRect.left + scrollLeft;
      const cardWidth = cardRect.width;
      const containerWidth = containerRect.width;
      const targetScroll = cardLeft - containerWidth / 2 + cardWidth / 2;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

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

      {/* Track Sponsors */}
      {/* Desktop / Tablet: grid view */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-purple">
              TRACK SPONSORS
            </h3>
            <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {trackSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-50 to-purple-100 border-4 border-purple-400 rounded-2xl px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(192,132,250,1)] hover:shadow-[8px_8px_0px_0px_rgba(192,132,250,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block min-w-[220px]"
              >
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.alt || sponsor.name}
                    className="w-40 h-20 md:w-48 md:h-24 object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: horizontal carousel with arrows (Team-style scroll) */}
      <div className="block md:hidden max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
          <h3 className="font-heading font-bold text-2xl text-purple-600 text-center">
            TRACK SPONSORS
          </h3>
          <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollTrack('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-3 border-black rounded-full p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Previous track sponsor"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollTrack('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-3 border-black rounded-full p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Next track sponsor"
          >
            <ChevronRight size={18} />
          </button>

          {/* Scrolling row like TeamSection */}
          <div
            ref={trackCarouselRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4">
              {trackSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  ref={(el) => (trackCardRefs.current[index] = el)}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[80vw] max-w-sm bg-gradient-to-br from-purple-50 to-purple-100 border-4 border-purple-400 rounded-2xl px-6 py-6 shadow-[6px_6px_0px_0px_rgba(192,132,250,1)] hover:shadow-[8px_8px_0px_0px_rgba(192,132,250,1)] transition-all duration-300 cursor-pointer snap-center"
                >
                  <div className="flex flex-col items-center gap-4 w-full">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.alt || sponsor.name}
                      className="w-40 h-20 object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Silver Tier */}
        {/* Desktop / Tablet: grid view */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-400">
                SILVER SPONSORS
              </h3>
              <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {silverSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-gray-100 to-gray-50 border-4 border-gray-400 rounded-2xl px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(156,163,175,1)] hover:shadow-[8px_8px_0px_0px_rgba(156,163,175,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block min-w-[220px]"
                >
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.alt || sponsor.name}
                      className="w-40 h-20 md:w-48 md:h-24 object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: horizontal carousel with arrows (Team-style scroll) */}
        <div className="block md:hidden max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
            <h3 className="font-heading font-bold text-2xl text-gray-400 text-center">
              SILVER SPONSORS
            </h3>
            <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollSilver('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-3 border-black rounded-full p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="Previous silver sponsor"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollSilver('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-3 border-black rounded-full p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="Next silver sponsor"
            >
              <ChevronRight size={18} />
            </button>

            {/* Scrolling row like TeamSection */}
            <div
              ref={silverCarouselRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4">
                {silverSponsors.map((sponsor, index) => (
                  <a
                    key={index}
                    ref={(el) => (silverCardRefs.current[index] = el)}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-[80vw] max-w-sm bg-gradient-to-br from-gray-100 to-gray-50 border-4 border-gray-400 rounded-2xl px-6 py-6 shadow-[6px_6px_0px_0px_rgba(156,163,175,1)] hover:shadow-[8px_8px_0px_0px_rgba(156,163,175,1)] transition-all duration-300 cursor-pointer snap-center"
                  >
                    <div className="flex flex-col items-center gap-4 w-full">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.alt || sponsor.name}
                        className="w-40 h-20 object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Media Partners */}
      {/* Desktop / Tablet: grid view */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-blue">
              MEDIA PARTNERS
            </h3>
            <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {mediaPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-brand-blue rounded-2xl px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(66,133,244,1)] hover:shadow-[8px_8px_0px_0px_rgba(66,133,244,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block min-w-[220px]"
              >
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.alt || partner.name}
                    className="w-40 h-20 md:w-48 md:h-24 object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: horizontal carousel with arrows (Team-style scroll) */}
      <div className="block md:hidden max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 bg-black rounded-full border-2 border-black"></div>
          <h3 className="font-heading font-bold text-2xl text-brand-blue text-center">
            MEDIA PARTNERS
          </h3>
          <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollMedia('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-3 border-black rounded-full p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Previous media partner"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollMedia('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-3 border-black rounded-full p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Next media partner"
          >
            <ChevronRight size={18} />
          </button>

          {/* Scrolling row like TeamSection */}
          <div
            ref={mediaCarouselRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4">
              {mediaPartners.map((partner, index) => (
                <a
                  key={index}
                  ref={(el) => (mediaCardRefs.current[index] = el)}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[80vw] max-w-sm bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-brand-blue rounded-2xl px-6 py-6 shadow-[6px_6px_0px_0px_rgba(66,133,244,1)] hover:shadow-[8px_8px_0px_0px_rgba(66,133,244,1)] transition-all duration-300 cursor-pointer snap-center"
                >
                  <div className="flex flex-col items-center gap-4 w-full">
                    <img
                      src={partner.logo}
                      alt={partner.alt || partner.name}
                      className="w-40 h-20 object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
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
