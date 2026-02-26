import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Keshri Tech Solution",
  description:
    "Learn about Keshri Tech Solution, based in Hazaribagh, Jharkhand and serving clients across India with technology and creative services.",
  path: "/about",
});

const timeline = [
  "2019 - Started freelancing in web development",
  "2021 - Expanded into mobile app projects",
  "2023 - Built dedicated video editing vertical",
  "2025 - Scaled KeshriTechSolution as a full digital studio",
];

export default function AboutPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <section className="section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container-px space-y-8">
        <div>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
          <h1 className="section-title">About KeshriTechSolution</h1>
          <p className="section-subtitle">
            We are a modern digital partner helping businesses launch premium websites, apps, and content experiences.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Deliver world-class digital solutions with speed, clarity, and measurable growth outcomes.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Become a trusted global studio known for premium craft and reliable execution.
            </p>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-semibold">Why Choose Us</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>Outcome-driven strategy and execution</li>
            <li>Premium UI/UX quality with clean engineering standards</li>
            <li>Transparent communication and timeline discipline</li>
            <li>End-to-end delivery from design to deployment</li>
          </ul>
        </Card>

        <Card>
          <div className="grid gap-6 md:grid-cols-[220px_1fr]">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/hero.jpg"
                alt="Gautam Keshri, founder of Keshri Tech Solution in Hazaribagh"
                width={220}
                height={220}
                className="h-[220px] w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Gautam Keshri</h2>
              <p className="text-sm text-brand-600">Founder & Full-Stack Developer</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Full-stack developer focused on crafting scalable web products, efficient mobile experiences, and high-performance digital systems for business growth.
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Skills:</span> Next.js, React, TypeScript, Node.js, React Native, Tailwind CSS, Motion Design
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {timeline.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="mt-4 flex gap-3 text-sm text-brand-600">
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}