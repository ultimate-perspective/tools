import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://designinstantly.com/free-tools"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pinterest-title-description-generator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/etsy-listing-title-description-generator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    }
  ]
}
