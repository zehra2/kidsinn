import { MetadataRoute } from "next";
import { ALL_BOOKS, PRINTABLES, JOURNALS } from "@/lib/consolidated-data";
import { STORIES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestkidbooks.online";

  // NOTE: no fake lastModified. The old sitemap stamped every URL with
  // the build date, which teaches Google to ignore lastmod entirely.
  // Real dates are only listed where the content genuinely has one
  // (story publish dates, the Advent hub launch date).

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/printables`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journals`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/books`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/stories`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plans`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/parent-tools`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/courses`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic printable pages
  const printableRoutes: MetadataRoute.Sitemap = PRINTABLES.map((p) => ({
    url: `${baseUrl}/printables/${p.id}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic journal pages
  const journalRoutes: MetadataRoute.Sitemap = JOURNALS.map((j) => ({
    url: `${baseUrl}/journals/${j.id}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic book companion pages
  const bookRoutes: MetadataRoute.Sitemap = ALL_BOOKS.map((b) => ({
    url: `${baseUrl}/books/${b.id}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Story articles (real publish dates)
  const storyRoutes: MetadataRoute.Sitemap = STORIES.map((s) => ({
    url: `${baseUrl}/stories/${s.slug}`,
    lastModified: s.datePublished,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Christmas Book Advent hub
  const adventRoute: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/stories/christmas-book-advent`,
      lastModified: "2026-11-15",
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [
    ...staticRoutes,
    ...printableRoutes,
    ...journalRoutes,
    ...bookRoutes,
    ...storyRoutes,
    ...adventRoute,
  ];
}
