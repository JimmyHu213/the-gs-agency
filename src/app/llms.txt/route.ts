import { guide } from "@/content/guide";
import { articles } from "@/content/journal";
import { site } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
	const body = [
		`# ${site.name}`,
		"",
		`> ${site.description} Australian jurisdiction: in Australia there is no general right of publicity.`,
		"",
		"## Guide",
		"",
		`- [${guide.title}](${site.url}/how-deals-work.md): ${guide.subtitle}`,
		"",
		"## Journal",
		"",
		...articles.map((a) => `- [${a.title}](${site.url}/journal/${a.slug}.md): ${a.dek}`),
		"",
	].join("\n");
	return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
