import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { ContactForm } from "./ContactForm";

const contactFaqs = [
  {
    question: "Do you provide services outside Hazaribagh?",
    answer: "Yes, we serve clients across Jharkhand and all India through remote and on-ground workflows.",
  },
  {
    question: "How quickly will I get a response?",
    answer: "Most inquiries are responded to within a few working hours, and urgent support requests are prioritized.",
  },
  {
    question: "Can I request only one service?",
    answer: "Yes, you can choose any single service such as tech support, video editing, cinematic shoot, or digital marketing.",
  },
  {
    question: "Do you provide custom pricing packages?",
    answer: "Yes, pricing is customized based on scope, timeline, and the expected deliverables.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact Keshri Tech Solution",
  description:
    "Contact Keshri Tech Solution in Hazaribagh, Jharkhand for tech support, video editing, cinematic shoot, and digital marketing services across India.",
  path: "/contact",
  keywords: [
    "Contact Tech Support Hazaribagh",
    "Video Editing contact India",
    "Cinematic Shoot contact Jharkhand",
    "Digital Marketing Agency Jharkhand",
  ],
});

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  const breadcrumbSchema = breadcrumbJsonLd(breadcrumbItems);
  const faqSchema = faqJsonLd(contactFaqs);

  return (
    <section className="section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-px space-y-8">
        <div>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Tell us about your project and get a tailored quote.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">keshritechsolutions@gmail.com</p>
            </Card>
            <Card>
              <h3 className="font-semibold">Phone / WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">+91 62030 94055</p>
            </Card>
            <Card>
              <h3 className="font-semibold">Location</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Hazaribagh, Jharkhand (Serving All India)</p>
            </Card>
            <Card className="h-56">
              <h3 className="font-semibold">Google Map Placeholder</h3>
              <div className="mt-3 h-40 rounded-xl border border-dashed border-slate-300 bg-slate-100/70 dark:border-slate-700 dark:bg-slate-800/60" />
            </Card>
          </div>
        </div>

        <Card>
          <h2 className="text-xl font-semibold">Contact FAQ</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Common questions before starting your project.</p>
          <div className="mt-5">
            <Accordion items={contactFaqs} />
          </div>
        </Card>
      </div>
    </section>
  );
}
