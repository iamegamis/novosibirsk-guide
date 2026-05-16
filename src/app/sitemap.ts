import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["", "/en", "/uz", "/tj", "/ky", "/kz"];
  const base = SITE_CONFIG.url;

  return langs.map((lang) => ({
    url: `${base}${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: lang === "" ? 1.0 : 0.8,
  }));
}
