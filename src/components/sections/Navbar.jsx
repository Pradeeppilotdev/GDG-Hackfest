import { useState, useEffect } from 'react';
import { GDGLogo } from '../icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load Devfolio SDK script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        transition-all duration-300
      `}
    >
      <div className="bg-white/10 backdrop-blur-md border-2 border-black rounded-2xl px-4 py-2 md:px-6 md:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GDGLogo size={32} />
            <span className="font-heading font-bold text-sm md:text-lg">GDG KSRCE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 md:gap-3 font-mono text-sm font-bold">
            <button 
              onClick={() => scrollToSection('about')} 
              className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-blue hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tracks')} 
              className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-red hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Tracks
            </button>
            <button 
              onClick={() => scrollToSection('timeline')} 
              className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-yellow hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('organizers')} 
              className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-green hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-white border-2 border-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-blue hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Contact
            </button>
          </div>

          {/* Apply with Devfolio Button */}
          <div 
            className="apply-button hidden lg:block" 
            data-hackathon-slug="hack-with-gdg-s3" 
            data-button-theme="dark-inverted"
            style={{ height: '44px', width: '200px', minWidth: '180px' }}
          ></div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-full h-0.5 bg-black transition-transform"></span>
            <span className="w-full h-0.5 bg-black transition-transform"></span>
            <span className="w-full h-0.5 bg-black transition-transform"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full mt-4 left-0 right-0 bg-white/10 backdrop-blur-md border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-3 font-mono font-bold">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left bg-white border-2 border-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-blue hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tracks')} 
              className="text-left bg-white border-2 border-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-red hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Tracks
            </button>
            <button 
              onClick={() => scrollToSection('timeline')} 
              className="text-left bg-white border-2 border-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-yellow hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('organizers')} 
              className="text-left bg-white border-2 border-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-green hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left bg-white border-2 border-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-blue hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Contact
            </button>
            <div 
              className="apply-button w-full mt-2" 
              data-hackathon-slug="hack-with-gdg-s3" 
              data-button-theme="dark-inverted"
              style={{ height: '44px', width: '100%' }}
            ></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
