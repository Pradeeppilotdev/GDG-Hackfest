import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../ui';

const LocationSection = () => {
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
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-off-white">
      <div className={`max-w-7xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          FIND US HERE
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4969999999996!2d77.817816!3d11.359909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f2376c873e7%3A0xd596e461eaf89447!2sK.S.Rangasamy%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K.S.R College of Engineering Location"
            ></iframe>
          </div>

          {/* Venue Announcement Template */}
          <div className="relative">
            {/* GDG Venue Announcement Template Image */}
            <img
              src="/assets/photoframes/Copy of GDG-Campus-Social-AnnouncementTemplate-Venue-Blue.png"
              alt="Venue Announcement"
              className="w-full h-auto rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            />

            {/* Sticky Note: Date (Middle Right Edge) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 bg-pastel-green border-2 border-black rounded-lg p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 max-w-[200px] z-10">
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={20} color="#7177efff" />
                <h4 className="font-heading font-bold text-sm md:text-base">Event Date</h4>
              </div>
              <p className="font-mono text-xs md:text-sm">Feb 14-15, 2025</p>
            </div>

            {/* Sticky Note: Google Maps Link (Bottom Left) */}
            <a
              href="https://www.google.com/maps?ll=11.359909,77.817816&z=19&t=m&hl=en&gl=IN&mapclient=embed&cid=15395147896605224647"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-4 -left-4 bg-pastel-yellow border-2 border-black rounded-lg p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:scale-105 transition-transform duration-200 z-10"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={20} color="#f9ab00" />
                <span className="font-heading font-bold text-sm md:text-base">View in Google Maps</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
