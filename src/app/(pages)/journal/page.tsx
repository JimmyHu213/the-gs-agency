import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/ui";
import { articles } from "@/content/journal";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
	title: "Journal",
	description: "Plain-English answers about true stories, life rights and screen deals in Australia.",
	alternates: { canonical: "/journal" },
};

export default function JournalPage() {
	const newestFirst = [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
	return (
		<>
			<PageHeader kicker="Journal" title="Straight answers" lede="Plain-English answers to the questions people ask us most." />
			<Container className="pb-24">
				<ul className="m-0 flex list-none flex-col p-0">
					{newestFirst.map((article) => (
						<li key={article.slug} className="border-b border-line first:border-t">
							<Link href={`/journal/${article.slug}`} className="group flex flex-col gap-3 py-10 text-fg no-underline">
								<time dateTime={article.datePublished} className="text-[14px] text-faint">
									{formatDate(article.datePublished)}
								</time>
								<h2 className="m-0 max-w-[28ch] font-display text-[clamp(26px,3vw,38px)] leading-[1.2] font-medium group-hover:underline">
									{article.title}
								</h2>
								<p className="m-0 max-w-[60ch] text-muted">{article.dek}</p>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</>
	);
}
