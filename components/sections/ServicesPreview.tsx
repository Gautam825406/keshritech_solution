import Link from "next/link";
import { Headphones, Film, Clapperboard, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/Card";

const preview = [
  {
    title: "Tech Support in Hazaribagh",
    description: "On-site and remote support for software setup, troubleshooting, and optimization.",
    icon: Headphones,
    href: "/services/tech-support-hazaribagh",
  },
  {
    title: "Video Editing Services in India",
    description: "High-retention edits for social media, YouTube, and branded campaigns.",
    icon: Film,
    href: "/services/video-editing-services-india",
  },
  {
    title: "Cinematic Shoot in Jharkhand",
    description: "Cinematic wedding and event videography with premium storytelling.",
    icon: Clapperboard,
    href: "/services/cinematic-shoot-wedding-videography-jharkhand",
  },
  {
    title: "Digital Marketing & SEO",
    description: "Local SEO, content strategy, and growth marketing services in Jharkhand.",
    icon: Megaphone,
    href: "/services/digital-marketing-seo-services-jharkhand",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-space">
      <div className="container-px">
        <h2 className="section-title">Services built for modern business growth</h2>
        <p className="section-subtitle">Everything you need to launch, scale, and stand out online.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preview.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="group">
                <Icon className="h-6 w-6 text-brand-600" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-block text-sm font-medium text-brand-600">Learn more →</Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}