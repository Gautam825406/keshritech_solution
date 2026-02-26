import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://keshritechsolution.com",
    sitemap: "https://keshritechsolution.com/sitemap.xml",
  };
}