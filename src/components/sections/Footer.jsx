import React from 'react';
import { Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import { GDGLogo } from '../icons';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <GDGLogo size={48} />
              <span className="font-heading font-bold text-lg md:text-xl">GDG On Campus</span>
            </div>
            <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-300">
              K.S.R College of Engineering's official Google Developer Group chapter.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a 
                href="https://x.com/gdgksrce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-brand-black rounded-full flex items-center justify-center border-2 border-white hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="Follow us on Twitter/X"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/gdg-ksriet24/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-brand-black rounded-full flex items-center justify-center border-2 border-white hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/gdg_ksrce/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-brand-black rounded-full flex items-center justify-center border-2 border-white hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 font-mono text-sm md:text-base">
              <li><a href="#about" className="hover:text-brand-blue transition-colors">About</a></li>
              <li><a href="#tracks" className="hover:text-brand-blue transition-colors">Tracks</a></li>
              <li><a href="#timeline" className="hover:text-brand-blue transition-colors">Schedule</a></li>
              <li><a href="#sponsors" className="hover:text-brand-blue transition-colors">Sponsors</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl mb-4 md:mb-6">Contact</h3>
            <div className="space-y-3 md:space-y-4 font-mono text-sm md:text-base text-gray-300">
              <p>gdgksrce@gmail.com</p>
              <p>K.S.R College of Engineering<br />Tiruchengode<br />Tamil Nadu 637215</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
          <div className="flex justify-center mb-3 md:mb-4">
            <GDGLogo size={60} />
          </div>
          <p className="font-heading font-bold text-base md:text-lg lg:text-xl flex items-center justify-center gap-2 flex-wrap px-4">
            BUILT WITH <Heart size={20} color="#ea4335" className="md:w-6 md:h-6" /> BY GDG ON CAMPUS KSRCE
          </p>
          <p className="font-mono text-xs md:text-sm text-gray-400 mt-2 px-4">
            © 2026 GDG On Campus KSRCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
