import type { MetadataRoute } from "next";
import { publishedTutorials } from "@/src/data/tutorials";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ecammfornoobs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/tutorials",
    "/about",
    "/contact",
    "/privacy",
    "/gdpr",
    "/terms",
    "/refund-policy",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const tutorialPages: MetadataRoute.Sitemap = publishedTutorials.map(
    (tutorial) => ({
      url: `${SITE_URL}/tutorials/${tutorial.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [...staticPages, ...tutorialPages];
}
