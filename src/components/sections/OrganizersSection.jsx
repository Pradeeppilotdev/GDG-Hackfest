import React, { useState, useEffect, useRef } from 'react';
import { organizers } from '../../data/organizers';
import { ThreeLoops, AngledSlashes, Brackets, Asterisk } from '../icons';

const OrganizersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section id="organizers" ref={sectionRef} className="relative py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <Asterisk size={60} color="#4285f4" />
      </div>
      <div className="absolute top-1/3 right-16 animate-float delay-500 opacity-20">
        <ThreeLoops size={100} />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float delay-1000 opacity-20">
        <Brackets variant="curly" size={80} color="#ea4335" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float delay-1500 opacity-20">
        <AngledSlashes size={70} color="#34a853" />
      </div>
      <div className="absolute top-20 right-1/3 animate-float opacity-20">
        <Asterisk size={45} color="#f9ab00" />
      </div>

      <div className={`max-w-7xl mx-auto relative z-10 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          MEET THE ORGANIZERS
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{ transform: `rotate(${organizer.rotation}deg)` }}
            >
              <div className="relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <div className="relative aspect-square">
                  {/* Bottom Layer: User's Photo */}
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />

                  {/* Top Layer: Transparent PNG Frame Overlay */}
                  <img
                    src={`/assets/photoframes/GDG-Campus-Social-PhotoFrame-${organizer.frameColor}.png`}
                    alt="GDG Frame"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    onError={(e) => {
                      // Fallback to Green if specific color doesn't exist
                      e.target.src = '/assets/photoframes/GDG-Campus-Social-PhotoFrame-Green.png';
                    }}
                  />
                </div>

                {/* Sticky Note for Name & Designation */}
                <div className="absolute -bottom-4 -right-4 bg-pastel-yellow border-2 border-black rounded-lg p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-3 max-w-[80%]">
                  <h3 className="font-heading font-bold text-sm md:text-base lg:text-lg leading-tight mb-1">{organizer.name}</h3>
                  <p className="font-mono text-xs md:text-sm text-gray-700">{organizer.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
