import React from 'react';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import BannerSection from './components/sections/BannerSection';
import AboutSection from './components/sections/AboutSection';
import TracksSection from './components/sections/TracksSection';
import TimelineSection from './components/sections/TimelineSection';
import ParticipationSection from './components/sections/ParticipationSection';
import EventSpecificsSection from './components/sections/EventSpecificsSection';
import SafetySection from './components/sections/SafetySection';
import OrganizersSection from './components/sections/OrganizersSection';
import TeamSection from './components/sections/TeamSection';
import LocationSection from './components/sections/LocationSection';
import ContactSection from './components/sections/ContactSection';
import SponsorsSection from './components/sections/SponsorsSection';
import Footer from './components/sections/Footer';

import './styles/index.css';

function App() {
  return (
    <div className="bg-off-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BannerSection />
      <AboutSection />
      <TracksSection />
      <TimelineSection />
      <ParticipationSection />
      <EventSpecificsSection />
      <SafetySection />
      <OrganizersSection />
      <TeamSection />
      <LocationSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default App;
