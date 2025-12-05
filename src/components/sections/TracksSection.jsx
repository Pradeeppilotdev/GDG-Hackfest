import React, { useState, useEffect, useRef } from 'react';
import { Brain, Cloud, Smartphone, Lightbulb, ArrowRight } from 'lucide-react';
import { StickerCard } from '../ui';
import { tracks } from '../../data/tracks';

const TracksSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Smooth staggered animation with shorter delays
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    Brain,
    Cloud,
    Smartphone,
    Lightbulb
  };

  return (
    <section id="tracks" ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          TRACKS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = iconMap[track.icon];
            return (
              <div
                key={index}
                className={`
                  transition-all duration-700 ease-out
                  ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <StickerCard bgColor={track.bgColor} rotation={track.rotation} className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <h3 className="font-heading font-bold text-2xl md:text-3xl">{track.title}</h3>
                      <IconComponent size={40} className="md:w-12 md:h-12 flex-shrink-0" />
                    </div>
                    <p className="text-base md:text-lg mb-4 md:mb-6 flex-grow">{track.description}</p>
                    <a href="#" className="font-mono font-bold text-sm md:text-base hover:underline inline-flex items-center gap-2 group">
                      Explore Track
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </StickerCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
