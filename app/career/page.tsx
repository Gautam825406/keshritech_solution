import type { Metadata } from "next";
import { CareerClient } from "./CareerClient";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at Keshri Tech Solution including internships and IT roles with training, internship, and placement support.",
  path: "/career",
  keywords: ["Career at Keshri Tech Solution", "Jobs in Hazaribagh", "Digital agency careers India"],
});

export default function CareerPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CareerClient />
    </>
  );
}