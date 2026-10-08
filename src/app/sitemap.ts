import { MetadataRoute } from "next";
import { ALL_BOOKS, PRINTABLES, JOURNALS } from "@/lib/consolidated-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestkidbooks.online";
  const now = new Date().toISOString();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/printables`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journals`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plans`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/parent-tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic printable pages
  const printableRoutes: MetadataRoute.Sitemap = PRINTABLES.map((p) => ({
    url: `${baseUrl}/printables/${p.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic journal pages
  const journalRoutes: MetadataRoute.Sitemap = JOURNALS.map((j) => ({
    url: `${baseUrl}/journals/${j.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic book companion pages
  const bookRoutes: MetadataRoute.Sitemap = ALL_BOOKS.map((b) => ({
    url: `${baseUrl}/books/${b.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...printableRoutes, ...journalRoutes, ...bookRoutes];
}
