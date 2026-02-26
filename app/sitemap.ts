import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://keshritechsolution.com";
  const staticRoutes = ["", "/services", "/portfolio", "/about", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const routes = [...staticRoutes, ...serviceRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/services/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.8,
  }));
}