import type { Metadata } from "next";
import { PortfolioClient } from "./PortfolioClient";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: "Explore previous work and case examples by Keshri Tech Solution.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PortfolioClient />
    </>
  );
}