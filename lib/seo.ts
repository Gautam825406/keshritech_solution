import type { Metadata } from "next";

export const SITE_NAME = "Keshri Tech Solution";
export const SITE_URL = "https://keshritechsolution.com";
export const DEFAULT_OG_IMAGE = "/hero.jpg";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function buildMetadata({ title, description, path, keywords = [] }: BuildMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    areaServed: [
      {
        "@type": "City",
        name: "Hazaribagh",
      },
      {
        "@type": "State",
        name: "Jharkhand",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hazaribagh",
      addressRegion: "Jharkhand",
      addressCountry: "IN",
    },
    telephone: "+91-6203094055",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91-6203094055",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://instagram.com",
    ],
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  areaServed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    areaServed: input.areaServed,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}