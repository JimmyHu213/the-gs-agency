import type { Metadata } from "next";
import { Container, Disclaimer, JsonLd, PrimaryLink, SecondaryLink } from "@/components/ui";
import { guide, type Block } from "@/content/guide";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
	title: "How deals work — Your Story, Your Rights",
	description: guide.subtitle + ". Life rights, options, what your story is worth, and how to protect it.",
	alternates: { canonical: "/how-deals-work" },
};

function BlockView({ block }: { block: Block }) {
	if (block.type === "list") {
		return (
			<ul className="m-0 flex list-disc flex-col gap-3 pl-5 marker:text-rule">
				{block.items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		);
	}
	if (block.type === "quote") {
		return (
			<blockquote className="m-0 border-l-2 border-rule py-1 pl-6 font-display text-[clamp(24px,2.6vw,32px)] leading-[1.3] text-fg italic">
				“{block.text}”
			</blockquote>
		);
	}
	return <p className="m-0">{block.text}</p>;
}

const articleLd = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: guide.title,
	alternativeHeadline: guide.subtitle,
	dateModified: guide.dateModified,
	author: { "@type": "Organization", name: site.name },
	publisher: { "@type": "Organization", name: site.legalName },
	inLanguage: "en-AU",
	mainEntityOfPage: `${site.url}/how-deals-work`,
};

export default function HowDealsWorkPage() {
	return (
		<article>
			<header className="pt-16 pb-12 sm:pt-24">
				<Container>
					<p className="m-0 mb-6 text-[13px] uppercase tracking-[0.3em] text-label">Free guide</p>
					<h1 className="m-0 max-w-[18ch] font-display text-[clamp(40px,6vw,76px)] leading-[1.06] font-medium">
						{guide.title}
					</h1>
					<p className="mt-5 mb-0 max-w-[50ch] font-display text-[clamp(20px,2.2vw,26px)] text-muted italic">
						{guide.subtitle}
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
						<SecondaryLink href={site.guidePdf} download>
							Download the PDF
						</SecondaryLink>
						<p className="m-0 text-[14px] text-faint">
							Updated <time dateTime={guide.dateModified}>{formatDate(guide.dateModified)}</time>
						</p>
					</div>
				</Container>
			</header>

			<Container className="grid gap-12 border-t border-line pt-12 pb-24 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
				<nav aria-label="Guide sections" className="lg:sticky lg:top-8 lg:self-start">
					<p className="m-0 mb-4 text-[13px] uppercase tracking-[0.2em] text-label">Contents</p>
					<ol className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px]">
						{guide.sections.map((section) => (
							<li key={section.id}>
								<a href={`#${section.id}`} className="text-fg no-underline hover:underline">
									<span className="text-faint">{section.number}.</span> {section.title}
								</a>
							</li>
						))}
					</ol>
				</nav>

				<div className="flex max-w-[68ch] flex-col gap-14 text-[18px] leading-[1.7] text-muted">
					<p className="m-0 text-[20px] text-fg">{guide.intro}</p>
					{guide.sections.map((section) => (
						<section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`} className="scroll-mt-8">
							<h2
								id={`${section.id}-h`}
								className="m-0 mb-5 font-display text-[clamp(26px,3vw,36px)] leading-[1.2] font-medium text-fg"
							>
								<a href={`#${section.id}`} className="text-fg no-underline">
									<span className="text-accent">{section.number}.</span> {section.title}
								</a>
							</h2>
							<div className="flex flex-col gap-5">
								{section.blocks.map((block, i) => (
									<BlockView key={i} block={block} />
								))}
							</div>
						</section>
					))}
					<div className="flex flex-wrap gap-3">
						<PrimaryLink href="/enquiry">Talk to us, confidentially</PrimaryLink>
					</div>
					<Disclaimer />
				</div>
			</Container>
			<JsonLd data={articleLd} />
		</article>
	);
}
