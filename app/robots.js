import { absoluteUrl, canIndex } from "@/lib/site";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: canIndex ? "/" : undefined,
      disallow: canIndex ? "/api/" : "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
