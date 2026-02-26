export type PortfolioCategory = "All" | "Web" | "App" | "Video";

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  tech: string[];
  image: string;
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    impact: string;
  };
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "UrbanCart Commerce",
    category: "Web",
    description: "Conversion-first e-commerce storefront with custom checkout optimizations.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    image: "/images/project-1.svg",
    caseStudy: {
      client: "UrbanCart Retail",
      challenge: "High cart abandonment and slow mobile page speed.",
      solution: "Rebuilt storefront with performance-focused architecture and express checkout.",
      impact: "34% increase in checkout completion within 8 weeks.",
    },
  },
  {
    id: "2",
    title: "PulseFit Mobile",
    category: "App",
    description: "Fitness tracking app with personalized training and progress analytics.",
    tech: ["React Native", "Node.js", "Firebase"],
    image: "/images/project-2.svg",
    caseStudy: {
      client: "PulseFit Studio",
      challenge: "Needed a scalable mobile product for daily member engagement.",
      solution: "Delivered cross-platform app with streaks, workout plans, and push reminders.",
      impact: "Daily active users grew 2.1x over three months.",
    },
  },
  {
    id: "3",
    title: "BrandStory Reel Pack",
    category: "Video",
    description: "High-retention short-form video campaign for a personal brand launch.",
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    image: "/images/project-3.svg",
    caseStudy: {
      client: "BrandStory Media",
      challenge: "Low short-form reach and weak brand consistency.",
      solution: "Created template-based motion system with hook-first edits.",
      impact: "Reached 1.2M organic views in 30 days.",
    },
  },
  {
    id: "4",
    title: "FinEdge Dashboard",
    category: "Web",
    description: "Secure analytics dashboard for transaction and KPI reporting.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/images/project-4.svg",
    caseStudy: {
      client: "FinEdge Advisory",
      challenge: "Manual reporting delayed key management decisions.",
      solution: "Built real-time KPI dashboard with role-based access control.",
      impact: "Report preparation time reduced by 68%.",
    },
  },
  {
    id: "5",
    title: "EduPath Learning App",
    category: "App",
    description: "Interactive learning app with quizzes, notes, and course tracking.",
    tech: ["Flutter", "Supabase", "Figma"],
    image: "/images/project-5.svg",
    caseStudy: {
      client: "EduPath Academy",
      challenge: "Students struggled to complete lesson journeys.",
      solution: "Designed learning paths, reminders, and gamified progress loops.",
      impact: "Course completion improved by 43%.",
    },
  },
  {
    id: "6",
    title: "LaunchTeaser Motion",
    category: "Video",
    description: "Motion graphics teaser series for product launch week.",
    tech: ["After Effects", "Cinema 4D", "Photoshop"],
    image: "/images/project-6.svg",
    caseStudy: {
      client: "NovaTech Labs",
      challenge: "Needed premium launch visuals in under one week.",
      solution: "Produced modular motion assets for social and display channels.",
      impact: "Campaign CTR exceeded benchmark by 29%.",
    },
  },
  {
    id: "7",
    title: "Skyline Realty Site",
    category: "Web",
    description: "Modern property listing platform with lead capture automation.",
    tech: ["Next.js", "Tailwind", "HubSpot"],
    image: "/images/project-7.svg",
    caseStudy: {
      client: "Skyline Realty",
      challenge: "Low quality inbound leads and outdated listing UX.",
      solution: "Redesigned listings with smart filters and CRM-connected inquiry flows.",
      impact: "Qualified leads increased by 52%.",
    },
  },
  {
    id: "8",
    title: "QuickServe Field App",
    category: "App",
    description: "Service technician app for job dispatch and digital reporting.",
    tech: ["React Native", "TypeScript", "GraphQL"],
    image: "/images/project-8.svg",
    caseStudy: {
      client: "QuickServe Ops",
      challenge: "Paper-based workflows slowed dispatch operations.",
      solution: "Implemented real-time task updates and offline-first report capture.",
      impact: "Average service completion time improved by 31%.",
    },
  },
  {
    id: "9",
    title: "Creator Growth Edits",
    category: "Video",
    description: "YouTube long-form and Shorts post-production pipeline.",
    tech: ["Premiere Pro", "After Effects", "Audition"],
    image: "/images/project-9.svg",
    caseStudy: {
      client: "CreatorWorks",
      challenge: "Inconsistent publishing cadence and low audience retention.",
      solution: "Created repeatable edit workflow with retention-focused pacing.",
      impact: "Channel watch time increased by 47% in six weeks.",
    },
  },
];

export const portfolioFilters: PortfolioCategory[] = ["All", "Web", "App", "Video"];