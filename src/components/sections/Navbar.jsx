import { useState } from 'react';
import { GDGLogo } from '../icons';
import { Button } from '../ui';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50
        w-[calc(100vw-16px)] max-w-[calc(100vw-16px)] md:w-auto md:max-w-none
        transition-all duration-300
      `}
      style={{ maxWidth: 'calc(100vw - 16px)' }}
    >
      <div className="bg-white/[0.05] backdrop-blur-sm border-2 border-black rounded-2xl px-2 py-1.5 sm:px-3 sm:py-2 md:px-6 md:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full box-border">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-6 relative w-full min-w-0 box-border">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 z-10 min-w-0 flex-shrink-0">
            <GDGLogo size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" />
            <div className="flex flex-col leading-tight flex-shrink-0">
              <span className="font-heading font-bold text-[10px] sm:text-xs md:text-base">GDG</span>
              <span className="font-heading font-bold text-[10px] sm:text-xs md:text-base">KSRCE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 md:gap-3 font-mono text-sm font-bold flex-shrink-0">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-7 h-7 sm:w-8 sm:h-8 flex flex-col justify-center gap-1 sm:gap-1.5 relative z-[100] flex-shrink-0 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ zIndex: 100, minWidth: '28px' }}
          >
            <span 
              className={`w-full h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full mt-2 left-0 right-0 w-full bg-white/80 backdrop-blur-md border-2 border-black rounded-2xl p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden z-[99] ${
          mobileMenuOpen 
            ? 'opacity-100 max-h-[600px] translate-y-0' 
            : 'opacity-0 max-h-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ zIndex: 99 }}
      >
        <div className="flex flex-col gap-2.5 font-mono font-bold">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left bg-white border-2 border-black px-3 py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-blue hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tracks')} 
              className="text-left bg-white border-2 border-black px-3 py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-red hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm"
            >
              Tracks
            </button>
            <button 
              onClick={() => scrollToSection('timeline')} 
              className="text-left bg-white border-2 border-black px-3 py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-yellow hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('organizers')} 
              className="text-left bg-white border-2 border-black px-3 py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-green hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left bg-white border-2 border-black px-3 py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-brand-blue hover:text-white transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm"
            >
              Contact
            </button>
            {/* Register Button - Mobile menu only */}
            <Button 
              variant="primary" 
              href="https://hack-with-gdg-s3.devfolio.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center bg-brand-blue text-white border-2 border-black px-3 py-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-blue-600 transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none text-sm font-mono font-bold w-full"
            >
              Register
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
