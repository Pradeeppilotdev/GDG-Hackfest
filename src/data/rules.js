export const participationRules = [
  {
    title: "Eligibility",
    icon: "Users",
    description: "Open to students of all disciplines and universities."
  },
  {
    title: "Team Formation",
    icon: "UserPlus",
    description: "Teams will be formed according to specific event guidelines."
  },
  {
    title: "Fair Play",
    icon: "ShieldCheck",
    description: "Any cheating or unethical behavior will result in disqualification."
  },
  {
    title: "Respect",
    icon: "Heart",
    description: "Zero tolerance for harassment, discrimination, or offensive behavior."
  },
  {
    title: "Intellectual Property",
    icon: "FileText",
    description: "Ideas belong to teams/individuals, with non-exclusive rights to Hack with GDG S3 for promotion."
  }
];

export const eventSpecifics = [
  {
    title: "Attendance",
    icon: "CalendarCheck",
    description: "Punctual attendance required for all registered events."
  },
  {
    title: "Materials",
    icon: "Laptop",
    description: "Bring your own laptops, chargers, and necessary equipment."
  },
  {
    title: "Deadlines",
    icon: "Clock",
    description: "Late submissions will not be considered."
  },
  {
    title: "Judging",
    icon: "Award",
    description: "Criteria will be communicated beforehand."
  },
  {
    title: "Prizes",
    icon: "Trophy",
    description: "Winners responsible for any tax regulations on prizes."
  },
  {
    title: "Disputes",
    icon: "Gavel",
    description: "Organizers' decisions are final."
  }
];

export const safetyRules = [
  {
    title: "Personal Items",
    icon: "Shield",
    description: "Participants responsible for their belongings."
  },
  {
    title: "Emergencies",
    icon: "AlertTriangle",
    description: "Immediately inform nearest organizer/volunteer."
  },
  {
    title: "Venue",
    icon: "MapPin",
    description: "Comply with all venue rules and regulations."
  }
];

export const trackPrizes = [
  {
    title: "Requestly - Creative Use Prize",
    prize: "$100",
    sponsor: "Requestly",
    image: "requestly.png",
    description: "Most Creative Use of Requestly",
    details: {
      overview: "Requestly is the open-source API Platform that lets you test and mock APIs, intercept and modify HTTP requests, and inject scripts into any website.",
      challenge: "We are looking for 'The Hacker Mindset.' Show us how you use Requestly to bend the web to your will.",
      examples: [
        "Modify Reality: Use Script Injection to add new features to existing production websites",
        "Unblock Development: Use API Mocking to simulate complex backend scenarios",
        "Smart Redirects: Use Redirect Rules to swap production assets with local versions for live-debugging"
      ],
      criteria: {
        technical: "Did you use advanced features (Regex matching, dynamic mocking, scripted rule generation)?",
        utility: "Did Requestly save you time or enable a feature that was otherwise impossible?",
        wow: "Did you use the tool in a way we didn't expect?"
      },
      requirements: [
        "Screen recording/Video: Include a recording of how you used Requestly in your Demo or a 30-second video showing your rules in action.",
        "Exported Rules: (Optional but recommended) Export your rules as a JSON file and include it in your repo."
      ]
    }
  },
  {
    title: "Duality AI - Image Segmentation Challenge",
    prize: "$200",
    sponsor: "Duality AI",
    image: "Duality-Primary-Email.png",
    description: "Process synthetic data, train AI model to segment images, validate performance on unseen images",
    details: {
      overview: "Participants will process synthetic data, train an AI model to segment the data images, validate performance on unseen images from a separate desert environment, and optimize accuracy under realistic constraints.",
      docsLink: "https://docs.google.com/document/d/1P0rt8_9SxSi9qg3TduLLlnnOtUgxnxJzdkzGPZlfuu4/edit?usp=sharing"
    }
  }
];
