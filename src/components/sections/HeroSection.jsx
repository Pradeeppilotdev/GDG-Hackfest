import { useState, useEffect } from 'react';
import { ThreeLoops, AngledSlashes, Brackets, Asterisk } from '../icons';
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
        hackers: Math.floor((100 * currentStep) / steps),
        hours: Math.floor((24 * currentStep) / steps)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Google Doodle Themed Background with Swirls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Doodle Swirls - SVG paths for organic curves */}
        <svg className="absolute top-10 left-5 w-32 h-32 animate-float" viewBox="0 0 100 100" style={{'--rotate': '15deg'}}>
          <path
            d="M 20 50 Q 30 20, 50 30 Q 70 40, 60 60 Q 50 80, 30 70 Q 10 60, 20 50"
            stroke="#4285f4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 30 50 Q 40 30, 60 40 Q 80 50, 70 70 Q 60 90, 40 80 Q 20 70, 30 50"
            stroke="#4285f4"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        
        <svg className="absolute top-32 right-8 w-28 h-28 animate-float delay-500" viewBox="0 0 100 100" style={{'--rotate': '-20deg'}}>
          <path
            d="M 50 20 Q 80 30, 70 50 Q 60 70, 40 60 Q 20 50, 30 30 Q 40 10, 50 20"
            stroke="#ea4335"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 30 Q 70 40, 65 55 Q 60 70, 45 65 Q 30 60, 35 45 Q 40 30, 50 30"
            stroke="#ea4335"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        
        <svg className="absolute bottom-32 left-12 w-36 h-36 animate-float delay-1000" viewBox="0 0 100 100" style={{'--rotate': '25deg'}}>
          <path
            d="M 50 10 Q 80 20, 90 50 Q 80 80, 50 90 Q 20 80, 10 50 Q 20 20, 50 10"
            stroke="#f9ab00"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 20 Q 70 30, 75 50 Q 70 70, 50 75 Q 30 70, 25 50 Q 30 30, 50 20"
            stroke="#f9ab00"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        
        <svg className="absolute bottom-20 right-16 w-24 h-24 animate-float delay-1500" viewBox="0 0 100 100" style={{'--rotate': '-30deg'}}>
          <path
            d="M 30 50 Q 50 20, 70 50 Q 50 80, 30 50"
            stroke="#34a853"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 40 50 Q 55 35, 60 50 Q 55 65, 40 50"
            stroke="#34a853"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        
        <svg className="absolute top-1/2 left-8 w-40 h-40 animate-float" viewBox="0 0 100 100" style={{'--rotate': '10deg'}}>
          <path
            d="M 20 50 Q 30 20, 50 25 Q 70 30, 80 50 Q 70 70, 50 75 Q 30 70, 20 50"
            stroke="#4285f4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 25 50 Q 35 35, 50 40 Q 65 45, 75 50 Q 65 55, 50 60 Q 35 55, 25 50"
            stroke="#4285f4"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        
        <svg className="absolute top-1/3 right-12 w-44 h-44 animate-float delay-500" viewBox="0 0 100 100" style={{'--rotate': '-15deg'}}>
          <path
            d="M 50 10 Q 90 20, 95 50 Q 90 80, 50 90 Q 10 80, 5 50 Q 10 20, 50 10"
            stroke="#ea4335"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 20 Q 80 25, 85 50 Q 80 75, 50 80 Q 20 75, 15 50 Q 20 25, 50 20"
            stroke="#ea4335"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        
        <svg className="absolute bottom-1/3 left-20 w-32 h-32 animate-float delay-1000" viewBox="0 0 100 100" style={{'--rotate': '20deg'}}>
          <path
            d="M 30 30 Q 50 10, 70 30 Q 50 50, 30 30"
            stroke="#f9ab00"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 50 Q 70 30, 90 50 Q 70 70, 50 50"
            stroke="#f9ab00"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 30 70 Q 50 50, 70 70 Q 50 90, 30 70"
            stroke="#f9ab00"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        
        <svg className="absolute top-20 right-1/4 w-28 h-28 animate-float delay-1500" viewBox="0 0 100 100" style={{'--rotate': '-25deg'}}>
          <path
            d="M 50 20 Q 80 40, 70 70 Q 40 80, 20 60 Q 30 30, 50 20"
            stroke="#34a853"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 30 Q 70 45, 65 65 Q 45 70, 30 55 Q 35 40, 50 30"
            stroke="#34a853"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        
        {/* Additional smaller swirls for depth */}
        <svg className="absolute top-1/4 left-1/3 w-20 h-20 animate-float delay-300" viewBox="0 0 100 100" style={{'--rotate': '12deg'}}>
          <path
            d="M 50 30 Q 70 40, 60 60 Q 40 50, 50 30"
            stroke="#4285f4"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        
        <svg className="absolute bottom-1/4 right-1/3 w-24 h-24 animate-float delay-700" viewBox="0 0 100 100" style={{'--rotate': '-18deg'}}>
          <path
            d="M 40 50 Q 60 30, 80 50 Q 60 70, 40 50"
            stroke="#ea4335"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Background Doodles */}
      <div className="absolute top-20 right-10 animate-float" style={{'--rotate': '-15deg'}}>
        <ThreeLoops size={150} />
      </div>
      <div className="absolute top-40 left-10 animate-float delay-500">
        <Asterisk size={40} color="#ea4335" />
      </div>
      <div className="absolute bottom-1/3 right-20 animate-float delay-1000">
        <Asterisk size={50} color="#34a853" />
      </div>
      <div className="absolute top-1/3 left-20 animate-float delay-1500">
        <AngledSlashes size={70} color="#f9ab00" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float">
        <Brackets variant="square" size={100} color="#ea4335" />
      </div>
      <div className="absolute top-1/4 right-1/3 animate-float delay-500">
        <Asterisk size={35} color="#4285f4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4">
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-black mb-6 leading-tight"
            style={{textShadow: '4px 4px 0px rgba(0, 0, 0, 1)'}}>
          Hack with GDG Season 3
        </h1>

        <div className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl mb-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
          <span className="bg-pastel-yellow border-2 border-black px-3 sm:px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
            {count.hours} HOURS
          </span>
          <span className="bg-pastel-blue border-2 border-black px-3 sm:px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
            {count.hackers}+ HACKERS
          </span>
          <span className="bg-pastel-green border-2 border-black px-3 sm:px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
            INFINITE POSSIBILITIES
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
            Register Now
          </Button>
          <Button variant="outline" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
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
