import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

type Params = {
  slug: string;
};

function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      path: "/services",
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [service.title, service.areaServed, "Keshri Tech Solution", "Hazaribagh", "Jharkhand", "India"],
  });
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const breadcrumbSchema = breadcrumbJsonLd(breadcrumbItems);
  const faqSchema = faqJsonLd(service.faqs);
  const serviceSchema = serviceJsonLd({
    name: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    areaServed: service.areaServed,
  });

  return (
    <section className="section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="container-px space-y-8">
        <div>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
          />
          <h1 className="section-title">{service.title}</h1>
          <p className="section-subtitle">{service.description}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-brand-600">Area Served: {service.areaServed}</p>
        </div>

        <Card className="space-y-5">
          <div>
            <h2 className="text-xl font-semibold">What You Get</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {service.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Process</h2>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {service.process.map((step) => <li key={step}>{step}</li>)}
            </ol>
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
            <Link href="/contact"><Button>Get a Quote</Button></Link>
            <Link href="/services"><Button variant="secondary">See All Services</Button></Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Service FAQ</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Answers related to this service.</p>
          <div className="mt-5">
            <Accordion items={service.faqs} />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Related Services</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-xl border border-slate-200 p-4 text-sm hover:border-brand-500 dark:border-slate-700"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{item.short}</p>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}