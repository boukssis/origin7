import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/industries", "/approach", "/about", "/academy", "/insights", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...insights.map((i) => ({ url: `${site.url}/insights/${i.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
