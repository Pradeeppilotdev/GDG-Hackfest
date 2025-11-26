import React, { useState, useEffect } from 'react';
import { GDGLogo } from '../icons';
import { Button } from '../ui';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className="bg-white/90 backdrop-blur-md border-2 border-black rounded-full px-6 py-3 md:px-8 md:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GDGLogo size={32} />
            <span className="font-heading font-bold text-sm md:text-lg">GDG KSRCE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-sm">
            <button onClick={() => scrollToSection('about')} className="hover:text-brand-blue transition-colors">About</button>
            <button onClick={() => scrollToSection('tracks')} className="hover:text-brand-blue transition-colors">Tracks</button>
            <button onClick={() => scrollToSection('timeline')} className="hover:text-brand-blue transition-colors">Timeline</button>
            <button onClick={() => scrollToSection('organizers')} className="hover:text-brand-blue transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-brand-blue transition-colors">Contact</button>
          </div>

          {/* CTA Button */}
          <Button variant="primary" className="hidden lg:block text-sm px-4 py-2">
            Register Now
          </Button>

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
        <div className="lg:hidden absolute top-full mt-4 left-0 right-0 bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4 font-mono">
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-brand-blue transition-colors">About</button>
            <button onClick={() => scrollToSection('tracks')} className="text-left hover:text-brand-blue transition-colors">Tracks</button>
            <button onClick={() => scrollToSection('timeline')} className="text-left hover:text-brand-blue transition-colors">Timeline</button>
            <button onClick={() => scrollToSection('organizers')} className="text-left hover:text-brand-blue transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-brand-blue transition-colors">Contact</button>
            <Button variant="primary" className="w-full mt-2">Register Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
