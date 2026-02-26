import Link from "next/link";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Card } from "@/components/ui/Card";
import { faqs } from "@/data/faqs";
import { stats } from "@/data/stats";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tech Support, Video Editing, Cinematic Shoot & Digital Marketing",
  description:
    "Keshri Tech Solution provides tech support in Hazaribagh, video editing services in India, cinematic shoots in Jharkhand, and digital marketing solutions across India.",
  path: "/",
  keywords: [
    "Tech Support in Hazaribagh",
    "Video Editing Services India",
    "Cinematic Shoot Jharkhand",
    "Digital Marketing Jharkhand",
    "Keshri Tech Solution",
  ],
});

export default function HomePage() {
  const homeFaqSchema = faqJsonLd(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <Hero />

      <section className="pb-8">
        <div className="container-px grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSlider />
      <FaqSection />
      <CtaBanner />

      <section className="pb-16">
        <div className="container-px">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Need a custom solution? <Link href="/contact" className="text-brand-600">Talk to us today.</Link>
          </p>
        </div>
      </section>
    </>
  );
}