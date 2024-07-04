import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/bestill", "/omoss", "/galleri"],
      disallow: [],
    },
    sitemap: `https://www.okbenzo.no/sitemap.xml`,
  };
}
