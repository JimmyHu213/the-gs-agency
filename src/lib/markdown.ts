import { guide } from "@/content/guide";
import { articleDisclaimer, type Article } from "@/content/journal";
import { site } from "@/content/site";

// Markdown twins of the guide and articles (spec §10, GEO): the same text,
// in a form retrieval tools read cleanly.

export function guideMarkdown() {
	const lines = [`# ${guide.title}`, "", `_${guide.subtitle}_`, "", `Updated ${guide.dateModified}`, "", guide.intro, ""];
	for (const section of guide.sections) {
		lines.push(`## ${section.number}. ${section.title}`, "");
		for (const block of section.blocks) {
			if (block.type === "list") lines.push(...block.items.map((item) => `- ${item}`), "");
			else if (block.type === "quote") lines.push(`> ${block.text}`, "");
			else lines.push(block.text, "");
		}
	}
	lines.push("---", "", site.disclaimer, "", `${site.legalName} · ABN ${site.abn} · ${site.url}`, "");
	return lines.join("\n");
}

export function articleMarkdown(article: Article) {
	return [
		`# ${article.title}`,
		"",
		`_${article.dek}_`,
		"",
		`By ${article.author} · Updated ${article.dateModified}`,
		"",
		...article.paragraphs.flatMap((p) => [p, ""]),
		article.closing,
		"",
		"---",
		"",
		articleDisclaimer,
		"",
	].join("\n");
}

export const markdownResponse = (body: string) =>
	new Response(body, { headers: { "content-type": "text/markdown; charset=utf-8" } });
