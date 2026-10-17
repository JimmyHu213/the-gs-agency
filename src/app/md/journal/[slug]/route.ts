import { articles, getArticle } from "@/content/journal";
import { articleMarkdown, markdownResponse } from "@/lib/markdown";

// Served at /journal/<slug>.md via the rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
	return articles.map((a) => ({ slug: a.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const article = getArticle((await params).slug);
	if (!article) return new Response("Not found", { status: 404 });
	return markdownResponse(articleMarkdown(article));
}
