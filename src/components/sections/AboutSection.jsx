import React, { useState, useEffect, useRef } from 'react';
import { aboutPhotos } from '../../data/aboutPhotos';

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Left Column - Text */}
        <div className="bg-pastel-green border-2 border-black rounded-2xl p-6 md:p-8 lg:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            WHAT IS HACKFEST?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
            A 24-hour coding marathon where innovators, designers, and problem-solvers come together to build the future.
          </p>
          <div className="space-y-3 md:space-y-4 font-mono text-sm md:text-base">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-blue rounded-full border-2 border-black flex-shrink-0"></div>
              <span className="font-bold">February 14-15, 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-red rounded-full border-2 border-black flex-shrink-0"></div>
              <span className="font-bold">K.S.R College of Engineering</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-yellow rounded-full border-2 border-black flex-shrink-0"></div>
              <span className="font-bold">Tiruchengode, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Right Column - Polaroid Stack */}
        <div className="relative h-[500px] md:h-auto min-h-[400px]">
          {aboutPhotos.map((photo, index) => {
            const positions = [
              { top: '0', left: '0', zIndex: 'z-10', additionalTransform: '' },
              { top: '3rem', right: '0', zIndex: 'z-20', additionalTransform: '' },
              { bottom: '0', left: '50%', zIndex: 'z-0', additionalTransform: 'translateX(-50%)' }
            ];

            const position = positions[index];
            const combinedTransform = position.additionalTransform
              ? `${position.additionalTransform} rotate(${photo.rotation})`
              : `rotate(${photo.rotation})`;

            return (
              <div
                key={photo.id}
                className={`absolute ${position.zIndex} w-64 sm:w-72 bg-white border-2 border-black rounded-lg p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] tape-strip`}
                style={{
                  top: position.top,
                  left: position.left,
                  right: position.right,
                  bottom: position.bottom,
                  transform: combinedTransform
                }}
              >
                <div className="h-40 sm:h-48 border border-black overflow-hidden">
                  <img
                    src={photo.photo}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-xs sm:text-sm mt-2 text-center">{photo.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
