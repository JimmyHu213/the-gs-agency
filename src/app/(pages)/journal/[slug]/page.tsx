import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink, Container, Disclaimer, Divider, JsonLd, PrimaryLink } from "@/components/ui";
import { articleDisclaimer, articles, getArticle } from "@/content/journal";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const article = getArticle((await params).slug);
	if (!article) return {};
	return {
		title: article.title,
		description: article.dek,
		alternates: { canonical: `/journal/${article.slug}` },
		openGraph: { type: "article", publishedTime: article.datePublished, modifiedTime: article.dateModified },
	};
}

export default async function ArticlePage({ params }: Props) {
	const article = getArticle((await params).slug);
	if (!article) notFound();

	const articleLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: article.title,
		description: article.dek,
		datePublished: article.datePublished,
		dateModified: article.dateModified,
		author: { "@type": "Person", name: article.author },
		publisher: { "@type": "Organization", name: site.legalName },
		inLanguage: "en-AU",
		mainEntityOfPage: `${site.url}/journal/${article.slug}`,
	};

	return (
		<article>
			<header className="pt-16 pb-10 sm:pt-24">
				<Container className="max-w-[860px]">
					<ArrowLink href="/journal">Journal</ArrowLink>
					<h1 className="mt-8 mb-0 font-display text-[clamp(36px,5vw,60px)] leading-[1.1] font-medium">{article.title}</h1>
					<p className="mt-5 mb-0 font-display text-[clamp(20px,2.2vw,24px)] text-muted italic">{article.dek}</p>
					<p className="mt-6 mb-0 text-[14px] text-faint">
						By {article.author} · Updated <time dateTime={article.dateModified}>{formatDate(article.dateModified)}</time>
					</p>
					<Divider className="mt-10" />
				</Container>
			</header>
			<Container className="max-w-[860px] pb-24">
				<div className="flex max-w-[68ch] flex-col gap-6 text-[18px] leading-[1.75] text-muted">
					{article.paragraphs.map((p) => (
						<p key={p.slice(0, 32)} className="m-0">
							{p}
						</p>
					))}
					<p className="m-0 text-fg">{article.closing}</p>
					<div>
						<PrimaryLink href="/enquiry">Start a confidential conversation</PrimaryLink>
					</div>
					<Disclaimer text={articleDisclaimer} />
				</div>
			</Container>
			<JsonLd data={articleLd} />
		</article>
	);
}
