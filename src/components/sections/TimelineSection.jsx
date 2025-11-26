import { useState, useEffect, useRef } from 'react';
import { timelineEvents } from '../../data/timeline';

const TimelineSection = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timelineEvents.forEach((_, index) => {
            setTimeout(() => {
              setVisibleEvents(prev => [...prev, index]);
            }, index * 200);
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
    <section id="timeline" ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-off-white relative overflow-hidden">
      {/* Doodle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-16 h-16 bg-brand-blue rotate-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-float"></div>
        <div className="absolute bottom-20 left-8 w-12 h-12 bg-brand-red -rotate-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-float delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-brand-yellow rotate-45 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-float delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-14 h-14 bg-brand-green -rotate-45 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-float delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          TIMELINE
        </h2>

        {/* Desktop Timeline - Compact Central Line Design */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black transform -translate-x-1/2 z-0"></div>
          
          <div className="relative space-y-6">
            {timelineEvents.map((item, index) => {
              const isVisible = visibleEvents.includes(index);
              const isLeft = index % 2 === 0;
              
              // Compact rotations for doodle effect - only for box
              const rotations = ['rotate-[-1.5deg]', 'rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[1.5deg]', 'rotate-[-0.5deg]', 'rotate-[0.5deg]'];
              const rotation = rotations[index % rotations.length];
              
              // Map bg color class to stroke color
              const colorMap = {
                'bg-brand-blue': '#4285f4',
                'bg-brand-red': '#ea4335',
                'bg-brand-yellow': '#f9ab00',
                'bg-brand-green': '#34a853'
              };
              const strokeColor = colorMap[item.color] || '#000000';
              
              return (
                <div
                  key={index}
                  className={`
                    relative flex items-center
                    ${isVisible ? 'fade-in-up' : 'opacity-0'}
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Left side container - takes exactly 50% */}
                  <div className={`w-1/2 flex items-center ${isLeft ? 'flex-row pr-3' : 'flex-row-reverse pl-3'}`}>
                    {isLeft && (
                      <>
                        {/* Event Box */}
                        <div className={`
                          w-56 md:w-64 lg:w-72 flex-shrink-0 z-30
                          ${rotation}
                          hover:rotate-0
                          transition-all duration-300
                        `}>
                          <div className={`
                            ${item.color} 
                            border-2 border-black 
                            p-3 md:p-4 lg:p-5 
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                            hover:-translate-y-1
                            transition-all duration-300
                          `}>
                            <div className="bg-white border-2 border-black px-2 md:px-3 py-1 md:py-2 mb-2 md:mb-3 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                              <div className="font-mono font-black text-xs md:text-sm lg:text-base">{item.time}</div>
                            </div>
                            <div className="font-heading font-bold text-sm md:text-base lg:text-lg text-white">
                              {item.event}
                            </div>
                          </div>
                        </div>
                        
                        {/* Wavy Line - fills remaining space */}
                        <svg
                          className="flex-grow h-10"
                          viewBox="0 0 100 40"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 0 20 C 10 20, 15 5, 25 5 C 35 5, 35 35, 45 35 C 55 35, 55 5, 65 5 C 75 5, 75 35, 85 35 C 95 35, 95 20, 100 20"
                            stroke={strokeColor}
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                  
                  {/* Center Square Marker */}
                  <div className={`
                    w-5 h-5 ${item.color} border-2 border-black z-50 flex-shrink-0
                    shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                    -mx-[10px]
                  `}></div>
                  
                  {/* Right side container - takes exactly 50% */}
                  <div className={`w-1/2 flex items-center ${!isLeft ? 'flex-row-reverse pr-3' : 'flex-row pl-3'}`}>
                    {!isLeft && (
                      <>
                        {/* Event Box */}
                        <div className={`
                          w-56 md:w-64 lg:w-72 flex-shrink-0 z-30
                          ${rotation}
                          hover:rotate-0
                          transition-all duration-300
                        `}>
                          <div className={`
                            ${item.color} 
                            border-2 border-black 
                            p-3 md:p-4 lg:p-5 
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                            hover:-translate-y-1
                            transition-all duration-300
                          `}>
                            <div className="bg-white border-2 border-black px-2 md:px-3 py-1 md:py-2 mb-2 md:mb-3 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                              <div className="font-mono font-black text-xs md:text-sm lg:text-base">{item.time}</div>
                            </div>
                            <div className="font-heading font-bold text-sm md:text-base lg:text-lg text-white">
                              {item.event}
                            </div>
                          </div>
                        </div>
                        
                        {/* Wavy Line - fills remaining space */}
                        <svg
                          className="flex-grow h-10"
                          viewBox="0 0 100 40"
                          preserveAspectRatio="none"
                          style={{ transform: 'scaleX(-1)' }}
                        >
                          <path
                            d="M 0 20 C 10 20, 15 5, 25 5 C 35 5, 35 35, 45 35 C 55 35, 55 5, 65 5 C 75 5, 75 35, 85 35 C 95 35, 95 20, 100 20"
                            stroke={strokeColor}
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Staggered Non-linear */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="space-y-4">
            {timelineEvents.map((item, index) => {
              const isVisible = visibleEvents.includes(index);
              const rotations = ['rotate-[-2deg]', 'rotate-[2deg]', 'rotate-[-1deg]', 'rotate-[1deg]', 'rotate-[-1.5deg]'];
              const rotation = rotations[index % rotations.length];
              const leftOffset = index % 2 === 0 ? 'ml-0' : 'ml-8';
              
              return (
                <div
                  key={index}
                  className={`
                    ${isVisible ? 'fade-in-up' : 'opacity-0'}
                    ${rotation}
                    ${leftOffset}
                    hover:rotate-0
                    transition-all duration-300
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`
                    ${item.color} 
                    border-2 border-black 
                    p-4 
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                    hover:-translate-y-1
                    transition-all duration-300
                  `}>
                    {/* Time Block */}
                    <div className="bg-white border-2 border-black px-3 py-2 mb-2 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div className="font-mono font-black text-sm">{item.time}</div>
                    </div>
                    
                    {/* Event Text */}
                    <div className="font-heading font-bold text-base text-white">
                      {item.event}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
