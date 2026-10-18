import type { MetadataRoute } from "next";
import { guide } from "@/content/guide";
import { articles } from "@/content/journal";
import { site } from "@/content/site";

const staticRoutes = ["/", "/your-story", "/journal", "/for-producers", "/slate", "/about", "/enquiry", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...staticRoutes.map((path) => ({ url: `${site.url}${path}` })),
		{ url: `${site.url}/how-deals-work`, lastModified: guide.dateModified },
		...articles.map((a) => ({ url: `${site.url}/journal/${a.slug}`, lastModified: a.dateModified })),
	];
}
