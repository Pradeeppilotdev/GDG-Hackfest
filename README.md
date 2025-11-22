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

## Remaining Tasks

You need to create the following section components in `src/components/sections/`:

### 1. AboutSection.jsx
- Two-column grid layout
- Left: Text content with event details
- Right: Polaroid stack with images

### 2. TracksSection.jsx
- Import `tracks` from `../../../data/tracks`
- Use `StickerCard` component
- Import icons from `lucide-react`
- Map through tracks data

### 3. TimelineSection.jsx
- Import `timelineEvents` from `../../../data/timeline`
- Vertical timeline with alternating layout (desktop)
- Simple list layout (mobile)

### 4. ParticipationSection.jsx
- Import `participationRules` from `../../../data/rules`
- Grid layout with icon cards
- Blue background card container

### 5. EventSpecificsSection.jsx
- Import `eventSpecifics` from `../../../data/rules`
- 3-column grid layout
- Red background card container

### 6. SafetySection.jsx
- Import `safetyRules` from `../../../data/rules`
- 3-column grid layout
- Yellow background card container

### 7. OrganizersSection.jsx
- Import `organizers` from `../../../data/organizers`
- Grid layout with profile cards
- Rotation effects on hover

### 8. LocationSection.jsx
- Google Maps embed
- Location details
- "Open in Google Maps" button

### 9. ContactSection.jsx
- Import `contacts` from `../../../data/contacts`
- 2x2 grid layout
- Phone and email links with icons

### 10. SponsorsSection.jsx
- Infinite marquee animation
- "Become a Sponsor" CTA

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
