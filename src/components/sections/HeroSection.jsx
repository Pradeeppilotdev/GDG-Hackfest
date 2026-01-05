import { useState, useEffect } from 'react';
import { Button } from '../ui';

const HeroSection = () => {
  const [count, setCount] = useState({ hackers: 0, hours: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount({
        hackers: Math.floor((400 * currentStep) / steps),
        hours: Math.floor((36 * currentStep) / steps)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  // Doodle text style with black stroke
  const doodleTextStyle = {
    fontFamily: "'Google Sans', 'Product Sans', 'Roboto', sans-serif",
    WebkitTextStroke: '3px black',
    paintOrder: 'stroke fill',
    textShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-20 px-4 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" aria-label="Hack with GDG Season 3 - Main Hero Section">
      
      {/* Doodle-Themed Natural Scene Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Doodle Sun - with black outline */}
        <div className="absolute top-12 right-12 md:right-20 lg:right-28">
          <svg width="120" height="120" viewBox="0 0 120 120" className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <circle cx="60" cy="60" r="35" fill="#f9ab00" stroke="#000" strokeWidth="3" />
            <line x1="60" y1="15" x2="60" y2="5" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="115" x2="60" y2="105" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="15" y1="60" x2="5" y2="60" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="115" y1="60" x2="105" y2="60" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="28" y1="28" x2="21" y2="21" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="92" y1="92" x2="99" y2="99" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="28" y1="92" x2="21" y2="99" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="92" y1="28" x2="99" y2="21" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Simple V-Shaped Birds - Clean doodle style */}
        <svg className="absolute top-16 left-[15%] w-24 h-16 animate-bird-fly" style={{ animationDuration: '20s' }}>
          <path d="M 12 12 Q 18 6, 24 12" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 30 10 Q 36 4, 42 10" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 20 16 Q 26 10, 32 16" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        
        <svg className="absolute top-24 left-[40%] w-20 h-14 animate-bird-fly-reverse" style={{ animationDuration: '25s', animationDelay: '5s' }}>
          <path d="M 10 10 Q 15 5, 20 10" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 24 8 Q 29 3, 34 8" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        
        <svg className="absolute top-20 right-[25%] w-16 h-12 animate-bird-fly" style={{ animationDuration: '18s', animationDelay: '8s' }}>
          <path d="M 8 8 Q 12 4, 16 8" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        
        {/* Doodle Clouds - with black outlines */}
        <div className="absolute top-10 left-6 animate-cloud-slow">
          <svg width="100" height="60" viewBox="0 0 100 60">
            <ellipse cx="30" cy="35" rx="20" ry="15" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="50" cy="30" rx="25" ry="18" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="70" cy="35" rx="20" ry="15" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="50" cy="40" rx="30" ry="12" fill="#fff" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
        
        <div className="absolute top-16 left-1/3 animate-cloud-medium">
          <svg width="120" height="70" viewBox="0 0 120 70">
            <ellipse cx="35" cy="40" rx="22" ry="16" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="60" cy="32" rx="28" ry="20" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="85" cy="40" rx="22" ry="16" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="60" cy="48" rx="35" ry="14" fill="#fff" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
        
        <div className="absolute top-6 right-1/3 animate-cloud-fast">
          <svg width="80" height="50" viewBox="0 0 80 50">
            <ellipse cx="25" cy="28" rx="16" ry="12" fill="#fff" stroke="#000" strokeWidth="2" />
            <ellipse cx="40" cy="22" rx="20" ry="14" fill="#fff" stroke="#000" strokeWidth="2" />
            <ellipse cx="55" cy="28" rx="16" ry="12" fill="#fff" stroke="#000" strokeWidth="2" />
            <ellipse cx="40" cy="34" rx="24" ry="10" fill="#fff" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Wavy Ocean with Multiple Wave Layers */}
        <div className="absolute bottom-12 left-0 right-0 w-full h-52 md:h-64 overflow-hidden">
          <svg 
            className="w-full h-full"
            viewBox="0 0 5000 350"
            preserveAspectRatio="none"
          >
            {/* Wave 1 - Back (darker blue) - More wavy */}
            <path 
              className="animate-wave-slow"
              fill="#2563eb"
              stroke="#000"
              strokeWidth="3"
              d="M0,100 C200,130 400,70 600,100 C800,130 1000,70 1200,100 C1400,130 1600,70 1800,100 C2000,130 2200,70 2400,100 C2600,130 2800,70 3000,100 C3200,130 3400,70 3600,100 C3800,130 4000,70 4200,100 C4400,130 4600,70 4800,100 C4900,120 5000,110 5000,100 L5000,350 L0,350 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* Wave 2 - More wavy */}
            <path 
              className="animate-wave-medium"
              fill="#3b82f6"
              stroke="#000"
              strokeWidth="3"
              d="M0,140 C250,170 500,110 750,140 C1000,170 1250,110 1500,140 C1750,170 2000,110 2250,140 C2500,170 2750,110 3000,140 C3250,170 3500,110 3750,140 C4000,170 4250,110 4500,140 C4750,160 5000,150 5000,140 L5000,350 L0,350 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* Wave 3 - More wavy */}
            <path 
              className="animate-wave-fast"
              fill="#60a5fa"
              stroke="#000"
              strokeWidth="3"
              d="M0,180 C300,210 600,150 900,180 C1200,210 1500,150 1800,180 C2100,210 2400,150 2700,180 C3000,210 3300,150 3600,180 C3900,210 4200,150 4500,180 C4800,200 5000,190 5000,180 L5000,350 L0,350 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* Wave 4 - Front (lightest) - More wavy */}
            <path 
              className="animate-wave-slow"
              style={{ animationDelay: '0.5s' }}
              fill="#93c5fd"
              stroke="#000"
              strokeWidth="3"
              d="M0,220 C350,250 700,190 1050,220 C1400,250 1750,190 2100,220 C2450,250 2800,190 3150,220 C3500,250 3850,190 4200,220 C4550,250 4900,210 5000,220 L5000,350 L0,350 Z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        
        {/* Multiple Doodle Boats */}
        {/* Boat 1 - Main boat */}
        <div className="absolute bottom-32 md:bottom-40 left-[20%] animate-boat-sail z-10">
          <svg width="80" height="100" viewBox="0 0 80 100">
            <path d="M 12 70 Q 40 85, 68 70 L 62 78 Q 40 90, 18 78 Z" fill="#ea4335" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
            <line x1="40" y1="70" x2="40" y2="25" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <path d="M 40 27 L 40 65 L 65 50 Z" fill="#fff" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 40 32 L 40 55 L 20 48 Z" fill="#fff" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 40 25 L 40 15 L 52 20 Z" fill="#f9ab00" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Boat 2 - Small boat on right */}
        <div className="absolute bottom-28 md:bottom-36 right-[15%] animate-boat-sail z-10" style={{ animationDelay: '1s', animationDuration: '5s' }}>
          <svg width="50" height="65" viewBox="0 0 50 65">
            <path d="M 8 45 Q 25 55, 42 45 L 38 50 Q 25 58, 12 50 Z" fill="#4285f4" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="25" y1="45" x2="25" y2="18" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 25 20 L 25 42 L 40 32 Z" fill="#fff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 25 18 L 25 12 L 32 15 Z" fill="#34a853" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Boat 3 - Tiny boat in distance */}
        <div className="absolute bottom-24 md:bottom-32 left-[55%] animate-boat-sail z-10" style={{ animationDelay: '2s', animationDuration: '6s' }}>
          <svg width="35" height="45" viewBox="0 0 35 45">
            <path d="M 5 32 Q 17 40, 30 32 L 27 36 Q 17 42, 8 36 Z" fill="#34a853" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
            <line x1="17" y1="32" x2="17" y2="14" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            <path d="M 17 15 L 17 30 L 28 24 Z" fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        
        {/* Boat 4 - Another small boat */}
        <div className="absolute bottom-20 md:bottom-28 right-[40%] animate-boat-sail z-10" style={{ animationDelay: '3s', animationDuration: '4.5s' }}>
          <svg width="40" height="50" viewBox="0 0 40 50">
            <path d="M 6 35 Q 20 44, 34 35 L 30 40 Q 20 47, 10 40 Z" fill="#f9ab00" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
            <line x1="20" y1="35" x2="20" y2="12" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            <path d="M 20 14 L 20 33 L 32 25 Z" fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M 20 12 L 20 7 L 26 9.5 Z" fill="#ea4335" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-4">
        {/* Doodle Title with black borders */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.15]">
            <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-5">
              <span className="text-brand-blue hover:scale-105 transition-transform duration-300" style={doodleTextStyle}>
                Hack
              </span>
              <span className="text-brand-red hover:scale-105 transition-transform duration-300" style={doodleTextStyle}>
                with
              </span>
              <span className="text-brand-green hover:scale-105 transition-transform duration-300" style={doodleTextStyle}>
                GDG
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-5 mt-1 md:mt-2">
              <span className="text-brand-yellow hover:scale-105 transition-transform duration-300" style={doodleTextStyle}>
                Season
              </span>
              <span className="text-brand-blue hover:scale-105 transition-transform duration-300" style={doodleTextStyle}>
                3
              </span>
            </div>
          </h1>
        </div>

        {/* Stats - Doodle style with black borders */}
        <div className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl mb-10 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <span className="bg-white border-2 border-black px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
            {count.hours} HOURS
          </span>
          <span className="bg-white border-2 border-black px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
            {count.hackers}+ HACKERS
          </span>
          <span className="bg-white border-2 border-black px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
            INFINITE POSSIBILITIES
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          {/* Register Button */}
          <Button 
            variant="primary" 
            href="https://hack-with-gdg-s3.devfolio.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto font-bold"
          >
            Register
          </Button>
          <Button 
            variant="outline" 
            href="https://discord.gg/bmAaQWMp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto bg-white font-bold"
          >
            Join Discord
          </Button>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-yellow border-t-2 border-black overflow-hidden py-3 md:py-4">
        <div className="flex animate-marquee whitespace-nowrap font-mono font-bold text-lg md:text-2xl">
          {['CODE', '•', 'CREATE', '•', 'INNOVATE', '•', 'COLLABORATE', '•'].map((item, i) => (
            <span key={i} className="mx-8">{item}</span>
          ))}
          {['CODE', '•', 'CREATE', '•', 'INNOVATE', '•', 'COLLABORATE', '•'].map((item, i) => (
            <span key={`dup-${i}`} className="mx-8">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
