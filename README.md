# GDG On Campus KSRCE - Hackwithgdg 2025

A modern, modular React application for the GDG Hackfest 2025 landing page with official Google brand guidelines and Gen Z neo-brutalist design aesthetics.

## Project Structure

```
gdghackfest/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── icons/              # SVG icon components
│   │   │   ├── GDGLogo.jsx
│   │   │   ├── ThreeLoops.jsx
│   │   │   ├── Doodles.jsx
│   │   │   └── index.js
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── StickerCard.jsx
│   │   │   └── index.js
│   │   └── sections/           # Page sections
│   │       ├── Navbar.jsx
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx        # TO CREATE
│   │       ├── TracksSection.jsx       # TO CREATE
│   │       ├── TimelineSection.jsx     # TO CREATE
│   │       ├── ParticipationSection.jsx # TO CREATE
│   │       ├── EventSpecificsSection.jsx # TO CREATE
│   │       ├── SafetySection.jsx       # TO CREATE
│   │       ├── OrganizersSection.jsx   # TO CREATE
│   │       ├── LocationSection.jsx     # TO CREATE
│   │       ├── ContactSection.jsx      # TO CREATE
│   │       ├── SponsorsSection.jsx     # TO CREATE
│   │       └── Footer.jsx              # TO CREATE
│   ├── data/                   # Data files
│   │   ├── tracks.js
│   │   ├── timeline.js
│   │   ├── organizers.js
│   │   ├── contacts.js
│   │   └── rules.js
│   ├── styles/
│   │   └── index.css          # Global styles & Tailwind imports
│   ├── App.jsx                # Main App component
│   └── main.jsx               # Entry point
├── index.html                 # Old single-file version (can be removed)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## Features

✅ All section components have been implemented:
- **HeroSection**: Animated hero with waves, stats, and CTA buttons
- **BannerSection**: Event banner display
- **AboutSection**: Two-column layout with event details and photo gallery
- **TracksSection**: Interactive track cards with smooth animations
- **TimelineSection**: Event timeline with dates and times
- **ParticipationSection**: Participation rules and guidelines
- **EventSpecificsSection**: Event-specific information
- **SafetySection**: Safety rules and guidelines
- **OrganizersSection**: Organizer profiles
- **TeamSection**: Team member carousel with navigation
- **LocationSection**: Google Maps integration with venue details
- **ContactSection**: Contact information and links
- **SponsorsSection**: Sponsor tiers (Gold, Silver, Community Partners) with clickable logos
- **Footer**: Social media links and quick navigation

### 11. Footer.jsx
- 3-column layout
- Brand info, Quick Links, Contact
- Social media icons
- Bottom bar with GDG logo

## Component Template

Here's a template for creating section components:

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { IconName } from 'lucide-react'; // Import needed icons

const SectionName = () => {
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
    <section
      id="section-id"
      ref={sectionRef}
      className={`py-16 md:py-20 px-4 md:px-8 lg:px-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      {/* Your section content */}
    </section>
  );
};

export default SectionName;
```

## Using Lucide React Icons

Install lucide-react (already in package.json):

```bash
npm install lucide-react
```

Import icons:

```jsx
import { Brain, Cloud, Smartphone, Lightbulb, Phone, Mail, MapPin } from 'lucide-react';

// Usage
<Brain size={40} className="text-brand-blue" />
```

## Customization

### Update Organizers
Edit `src/data/organizers.js` with actual team member details.

### Update Contacts
Edit `src/data/contacts.js` with actual contact information.

### Update Colors
Modify `tailwind.config.js` if you need to adjust the brand colors.

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Outfit & Space Mono

## Brand Guidelines

This project follows the official GDG brand guidelines:
- **Colors**: Blue (#4285f4), Red (#ea4335), Yellow (#f9ab00), Green (#34a853)
- **Typography**: Outfit (headings), Space Mono (body/code)
- **Design**: Neo-brutalist with hard shadows, thick borders, sticker aesthetic

## License

© 2025 GDG On Campus KSRCE. All rights reserved.
