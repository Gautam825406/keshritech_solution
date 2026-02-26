import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { services } from "@/data/services";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

const pageFaqs = [
  {
    question: "Do you serve only Hazaribagh clients?",
    answer: "No. While we are based in Hazaribagh, Jharkhand, we provide digital services for clients across India.",
  },
  {
    question: "Can I choose multiple services in one package?",
    answer: "Yes, we provide bundled plans combining tech support, video editing, cinematic production, and marketing.",
  },
  {
    question: "How do I get a quote for a service?",
    answer: "You can contact us with your requirement, and we will share a tailored quote and delivery timeline.",
  },
  {
    question: "Do you offer monthly retainer plans?",
    answer: "Yes, monthly plans are available for ongoing support, content editing, and digital marketing management.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Services in Hazaribagh & All India",
  description:
    "Explore tech support, video editing, cinematic shoot, and digital marketing services from Keshri Tech Solution in Hazaribagh, Jharkhand serving all India.",
  path: "/services",
  keywords: [
    "Tech Support Hazaribagh",
    "Video Editing Services India",
    "Cinematic Shoot Jharkhand",
    "Digital Marketing services Jharkhand",
  ],
});

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  const breadcrumbSchema = breadcrumbJsonLd(breadcrumbItems);
  const faqSchema = faqJsonLd(pageFaqs);

  return (
    <section className="section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-px space-y-8">
        <div>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Tech support in Hazaribagh and high-impact digital services delivered across India.</p>
        </div>

        {services.map((service) => (
          <Card key={service.slug} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-brand-600">Area Served: {service.areaServed}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase text-brand-600">Features</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase text-brand-600">Process Steps</h3>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {service.process.map((step) => <li key={step}>{step}</li>)}
                </ol>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase text-brand-600">Timeline</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.timeline}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase text-brand-600">Deliverables</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={`/services/${service.slug}`}><Button>View Details</Button></Link>
              <Link href="/contact"><Button variant="secondary">Start {service.title}</Button></Link>
            </div>
          </Card>
        ))}

        <Card>
          <h2 className="text-xl font-semibold">Services FAQ</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Quick answers for clients in Jharkhand and all India.</p>
          <div className="mt-5">
            <Accordion items={pageFaqs} />
          </div>
        </Card>
      </div>
    </section>
  );
}