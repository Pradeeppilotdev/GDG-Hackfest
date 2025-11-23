import React, { useState, useEffect, useRef } from 'react';
import { teamMembers } from '../../data/team';
import { ThreeLoops, AngledSlashes, Asterisk } from '../icons';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll carousel effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    const cardWidth = 280; // Approximate card width including gap

    const autoScroll = () => {
      scrollAmount += scrollSpeed;

      // Reset scroll when we've scrolled through half the content (duplicate set)
      if (scrollAmount >= cardWidth * teamMembers.length) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  // Duplicate the team members array for infinite scroll effect
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-pastel-blue via-pastel-green to-pastel-yellow overflow-hidden"
    >
      {/* Background Doodles */}
      <div className="absolute top-16 left-20 animate-float opacity-30 rotate-12">
        <AngledSlashes size={120} color="#4285f4" />
      </div>
      <div className="absolute bottom-20 right-16 animate-float delay-700 opacity-30 -rotate-12">
        <ThreeLoops size={140} />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float delay-1000 opacity-20">
        <Asterisk size={80} color="#ea4335" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-float delay-500 opacity-20">
        <Asterisk size={60} color="#34a853" />
      </div>

      <div className={`max-w-7xl mx-auto relative z-10 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Header with Neo-Brutalist Style */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              THE TEAM
            </h2>
            <div className="mt-3 flex gap-2 justify-center">
              <div className="w-12 h-2 bg-brand-blue border border-black"></div>
              <div className="w-12 h-2 bg-brand-red border border-black"></div>
              <div className="w-12 h-2 bg-brand-yellow border border-black"></div>
              <div className="w-12 h-2 bg-brand-green border border-black"></div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pastel-blue/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pastel-yellow/80 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 md:gap-8 overflow-x-hidden scroll-smooth py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-72 transform hover:scale-110 hover:-rotate-2 transition-all duration-300"
              >
                <div className="relative">
                  {/* Photo Frame Card */}
                  <div className="relative border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                    {/* Member Photo */}
                    <div className="aspect-square bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* GDG Photo Frame Overlay */}
                    <img
                      src={`/assets/photoframes/GDG-Campus-Social-PhotoFrame-${member.frameColor}.png`}
                      alt="GDG Frame"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      onError={(e) => {
                        e.target.src = '/assets/photoframes/GDG-Campus-Social-PhotoFrame-Green.png';
                      }}
                    />
                  </div>

                  {/* Sticky Note with Name & Role */}
                  <div className="absolute -bottom-3 -right-3 bg-pastel-yellow border-2 border-black rounded-lg p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3 max-w-[85%]">
                    <h3 className="font-heading font-bold text-sm md:text-base leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-gray-700">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Bottom Decoration */}
        <div className="mt-12 flex justify-center gap-3">
          <div className="bg-brand-blue border-2 border-black rounded-full w-4 h-4 animate-bounce"></div>
          <div className="bg-brand-red border-2 border-black rounded-full w-4 h-4 animate-bounce delay-100"></div>
          <div className="bg-brand-yellow border-2 border-black rounded-full w-4 h-4 animate-bounce delay-200"></div>
          <div className="bg-brand-green border-2 border-black rounded-full w-4 h-4 animate-bounce delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
