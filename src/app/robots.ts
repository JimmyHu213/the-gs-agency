import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// DEC-10: allow AI retrieval crawlers (citation with a link is wanted),
// block training crawlers. /admin is closed to everyone.
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: ["GPTBot", "Google-Extended"], disallow: "/" },
			{ userAgent: ["OAI-SearchBot", "PerplexityBot", "ClaudeBot"], allow: "/", disallow: "/admin" },
			{ userAgent: "*", allow: "/", disallow: "/admin" },
		],
		sitemap: `${site.url}/sitemap.xml`,
	};
}
