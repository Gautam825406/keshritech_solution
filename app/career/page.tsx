import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

const openings = [
  {
    title: "Video Editor Intern",
    type: "Remote / Hybrid",
    location: "Hazaribagh, Jharkhand",
    summary: "Assist in reels, shorts, and promotional edits with strong storytelling and clean transitions.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full Time",
    location: "Hazaribagh, Jharkhand",
    summary: "Plan and run SEO, social media, and ad campaigns focused on measurable growth.",
  },
  {
    title: "Web Development Intern",
    type: "Remote",
    location: "India",
    summary: "Build responsive frontend interfaces and assist with modern web project delivery.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Career Opportunities",
  description: "Explore career opportunities at Keshri Tech Solution for creative, marketing, and technology roles.",
  path: "/career",
  keywords: ["Career at Keshri Tech Solution", "Jobs in Hazaribagh", "Digital agency careers India"],
});

export default function CareerPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
  ]);

  return (
    <section className="section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container-px space-y-8">
        <div>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Career", href: "/career" }]} />
          <h1 className="section-title">Career at KeshriTechSolution</h1>
          <p className="section-subtitle">
            Join our team to work on tech, creative, and growth projects for clients across India.
          </p>
        </div>

        <Card>
          <h2 className="text-xl font-semibold">Current Openings</h2>
          <div className="mt-4 space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-brand-600">
                  {job.type} • {job.location}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{job.summary}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Send your resume and portfolio to <span className="font-medium text-slate-900 dark:text-white">keshritechsolutions@gmail.com</span> with your role in the subject line.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="text-sm font-medium text-brand-600 hover:underline">
              Prefer to discuss first? Contact us here.
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}