export type ServiceDetail = {
  slug:
    | "tech-support-hazaribagh"
    | "video-editing-services-india"
    | "cinematic-shoot-wedding-videography-jharkhand"
    | "digital-marketing-seo-services-jharkhand";
  title: string;
  short: string;
  description: string;
  areaServed: string;
  features: string[];
  process: string[];
  timeline: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "tech-support-hazaribagh",
    title: "Tech Support in Hazaribagh",
    short: "On-call and remote technical support for homes, shops, startups, and offices.",
    description:
      "Reliable tech support services in Hazaribagh for software setup, troubleshooting, system health, and ongoing IT assistance.",
    areaServed: "Hazaribagh, Jharkhand",
    features: [
      "Laptop and desktop troubleshooting",
      "Software installation and configuration",
      "Speed optimization and malware cleanup",
      "On-site and remote support options",
    ],
    process: [
      "Issue diagnosis and requirement check",
      "System scan and root-cause identification",
      "Fix implementation and validation",
      "Preventive suggestions and follow-up support",
    ],
    timeline: "Same day to 48 hours for most support cases",
    deliverables: [
      "Resolved technical issues",
      "System health and performance report",
      "Basic training and support guidance",
    ],
    faqs: [
      {
        question: "Do you provide home and office tech support in Hazaribagh?",
        answer: "Yes, we provide both on-site and remote tech support for homes, shops, and offices in Hazaribagh.",
      },
      {
        question: "Can you fix slow laptops and PCs?",
        answer: "Yes, we optimize system performance, remove malware, and tune startup and storage settings for better speed.",
      },
      {
        question: "Do you support software and printer setup?",
        answer: "Yes, we install and configure common business software, drivers, and printer/network devices.",
      },
      {
        question: "Is remote support available?",
        answer: "Yes, remote support is available for many software and configuration issues when physical access is not required.",
      },
    ],
  },
  {
    slug: "video-editing-services-india",
    title: "Video Editing Services in India",
    short: "Professional edits for YouTube, reels, ads, and brand storytelling videos.",
    description:
      "Creative and conversion-focused video editing services for creators and businesses across India.",
    areaServed: "India",
    features: [
      "Story-driven cuts for audience retention",
      "Color correction and cinematic grading",
      "Captions, transitions, and motion graphics",
      "Multi-platform export formats",
    ],
    process: [
      "Creative brief and sample references",
      "Rough cut delivery and feedback",
      "Final polish with branding and motion",
      "Master and social-format exports",
    ],
    timeline: "2-7 days per video based on complexity",
    deliverables: [
      "Final edited video files",
      "Short-form and long-form variants",
      "Export settings optimized for each platform",
    ],
    faqs: [
      {
        question: "Which video types do you edit?",
        answer: "We edit reels, shorts, YouTube videos, ads, interviews, and brand films.",
      },
      {
        question: "Can you edit in Hindi and English?",
        answer: "Yes, we support multilingual editing workflows including Hindi and English content.",
      },
      {
        question: "Do you provide monthly editing plans?",
        answer: "Yes, retainers are available for creators and brands that need frequent content output.",
      },
      {
        question: "Do you include subtitle and caption styling?",
        answer: "Yes, we create branded subtitle styles and motion captions suitable for social media engagement.",
      },
    ],
  },
  {
    slug: "cinematic-shoot-wedding-videography-jharkhand",
    title: "Cinematic Shoot & Wedding Videography in Jharkhand",
    short: "Cinematic wedding films, event shoots, and brand visuals with premium storytelling.",
    description:
      "High-quality cinematic shoot services in Jharkhand for weddings, events, and commercial projects.",
    areaServed: "Jharkhand, India",
    features: [
      "Cinematic camera movement and framing",
      "Professional audio capture and cleanup",
      "Story-based highlight and teaser edits",
      "Wedding and event coverage packages",
    ],
    process: [
      "Pre-shoot planning and shot list",
      "Multi-angle shoot execution",
      "Post-production and cinematic grading",
      "Final delivery with social-ready versions",
    ],
    timeline: "Delivery timeline typically 5-15 days after shoot",
    deliverables: [
      "Cinematic highlight film",
      "Full-length edited coverage",
      "Social media teaser clips",
    ],
    faqs: [
      {
        question: "Do you provide wedding videography in Jharkhand?",
        answer: "Yes, we provide cinematic wedding videography across Hazaribagh and other Jharkhand locations.",
      },
      {
        question: "Can you cover pre-wedding and event shoots?",
        answer: "Yes, we cover pre-wedding, engagement, and other event shoot requirements.",
      },
      {
        question: "Do you provide drone footage?",
        answer: "Drone and advanced equipment support can be arranged based on venue permissions and package scope.",
      },
      {
        question: "When will we receive final videos?",
        answer: "Most projects are delivered within 5 to 15 days, depending on duration and editing complexity.",
      },
    ],
  },
  {
    slug: "digital-marketing-seo-services-jharkhand",
    title: "Digital Marketing & SEO Services in Jharkhand",
    short: "SEO, local SEO, content strategy, and paid campaign support for business growth.",
    description:
      "Results-focused digital marketing and SEO services from Jharkhand with execution for clients across India.",
    areaServed: "Jharkhand and India",
    features: [
      "On-page SEO and technical SEO",
      "Local SEO for Google Business visibility",
      "Social media and content strategy",
      "Performance tracking and monthly reporting",
    ],
    process: [
      "Business and competitor audit",
      "Keyword and content planning",
      "Campaign execution and optimization",
      "Reporting and growth iteration",
    ],
    timeline: "SEO setup in 1-2 weeks, ongoing monthly optimization",
    deliverables: [
      "Keyword-targeted landing pages",
      "SEO and local SEO implementation",
      "Monthly performance dashboard",
    ],
    faqs: [
      {
        question: "Do you offer local SEO for Hazaribagh and Jharkhand businesses?",
        answer: "Yes, we optimize local business presence for Hazaribagh and surrounding Jharkhand markets.",
      },
      {
        question: "Can you help rank service keywords on Google?",
        answer: "Yes, we optimize technical SEO, content, and on-page structure to improve rankings over time.",
      },
      {
        question: "Do you run social media ads and Google ads?",
        answer: "Yes, paid campaign support is available with tracking and conversion-focused optimization.",
      },
      {
        question: "How soon can we expect SEO results?",
        answer: "Most websites start seeing movement in 4 to 12 weeks, depending on competition and site history.",
      },
    ],
  },
];
