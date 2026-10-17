import type { Metadata } from "next";
import { ArrowLink, Container, PageHeader } from "@/components/ui";
import { slate } from "@/content/shells";

export const metadata: Metadata = {
	title: "Slate",
	description: "Projects in development at The Geoff Shannon Agency.",
	alternates: { canonical: "/slate" },
};

export default function SlatePage() {
	return (
		<>
			<PageHeader
				kicker="For industry"
				title="In development"
				lede="Projects are listed here once they can be announced. Details are withheld to protect the people whose stories they are."
			/>
			<Container className="grid gap-6 pb-16 md:grid-cols-2">
				{slate.map((entry, i) => (
					<article key={i} className="flex flex-col gap-3 border border-line border-t-2 border-t-rule bg-card p-8">
						<p className="m-0 text-[13px] uppercase tracking-[0.2em] text-label">{entry.stage}</p>
						<h2 className="m-0 font-display text-[26px] leading-[1.25] font-medium">{entry.title}</h2>
						<p className="m-0 text-[15px] text-faint">{entry.format}</p>
						<p className="m-0 text-muted">{entry.logline}</p>
					</article>
				))}
			</Container>
			<Container className="pb-24">
				<ArrowLink href="/for-producers">Talk to us about the slate</ArrowLink>
			</Container>
		</>
	);
}
