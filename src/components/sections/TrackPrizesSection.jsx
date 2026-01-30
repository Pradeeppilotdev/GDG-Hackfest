import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { StickerCard } from '../ui';
import { trackPrizes } from '../../data/rules';

const TrackPrizesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1].forEach((index) => {
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

  return (
    <section id="track-prizes" ref={sectionRef} className="py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-10">
          TRACK PRIZES
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {trackPrizes.map((prize, index) => (
            <div
              key={index}
              className={`
                transition-all duration-700 ease-out
                ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StickerCard bgColor="bg-pastel-purple" rotation={index % 2 === 0 ? '-2' : '2'} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl md:text-2xl mb-1">{prize.title}</h3>
                      <p className="text-xs md:text-sm font-semibold text-gray-600">{prize.sponsor}</p>
                    </div>
                    <Award size={32} className="md:w-10 md:h-10 flex-shrink-0 ml-2" />
                  </div>

                  <div className="mb-2 md:mb-3">
                    <p className="text-xl md:text-2xl font-heading font-bold text-green-600">{prize.prize}</p>
                  </div>

                  <p className="text-sm md:text-base mb-3 md:mb-4 flex-grow font-semibold">{prize.description}</p>

                  {prize.details?.overview && (
                    <p className="text-xs md:text-sm mb-3 text-gray-700">{prize.details.overview}</p>
                  )}

                  {prize.details?.examples && (
                    <div className="mb-3">
                      <p className="font-bold text-xs mb-1">Examples:</p>
                      <ul className="text-xs space-y-0.5 text-gray-700">
                        {prize.details.examples.map((example, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="flex-shrink-0">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {prize.details?.docsLink && (
                    <a
                      href={prize.details.docsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono font-bold text-xs md:text-sm hover:underline group text-blue-600"
                    >
                      Read Documentation
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </StickerCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackPrizesSection;
