import type { Metadata } from "next";
import { PendingText } from "@/components/Pending";
import { ArrowLink, Container, JsonLd, Kicker, PageHeader } from "@/components/ui";
import { about } from "@/content/shells";
import { safeguards, site } from "@/content/site";

export const metadata: Metadata = {
	title: "About Geoff Shannon",
	description:
		"Geoff Shannon took on one of Australia’s biggest banks himself. He now represents Australians with David-and-Goliath stories of their own.",
	alternates: { canonical: "/about" },
};

const personLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: about.name,
	worksFor: { "@type": "Organization", name: site.legalName },
	description: about.bio[0],
};

export default function AboutPage() {
	return (
		<>
			<PageHeader kicker="About" title="Who you’ll be dealing with" lede={site.description} />
			<Container className="grid gap-12 pb-20 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
				<div className="flex aspect-[4/5] items-center justify-center border border-line bg-card p-6 text-center text-[15px]">
					<PendingText value={about.portrait} />
				</div>
				<div className="flex flex-col gap-6">
					<h2 className="m-0 font-display text-[clamp(28px,3vw,40px)] font-medium">{about.name}</h2>
					{about.bio.map((p) => (
						<p key={p.slice(0, 32)} className="m-0 max-w-[62ch] text-[18px] text-muted">
							{p}
						</p>
					))}
				</div>
			</Container>

			<section aria-labelledby="track-record" className="border-y border-line">
				<Container className="py-16">
					<Kicker className="mb-8">
						<span id="track-record">Track record</span>
					</Kicker>
					<dl className="m-0 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
						{about.trackRecord.map((item) => (
							<div key={item.label} className="flex flex-col-reverse justify-end gap-2 border-t border-rule pt-5">
								<dt className="text-muted">{item.label}</dt>
								<dd className="m-0 font-display text-[clamp(36px,4vw,52px)] leading-none text-accent">{item.value}</dd>
							</div>
						))}
					</dl>
				</Container>
			</section>

			<Container className="grid gap-12 py-20 md:grid-cols-2">
				<div>
					<Kicker className="mb-4">How the agency works</Kicker>
					<ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-muted marker:text-rule">
						{safeguards.map((item) => (
							<li key={item.title}>
								<span className="font-semibold text-fg">{item.title}.</span> {item.body}
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-start gap-6">
					<p className="m-0 text-[15px] text-faint">
						{site.legalName} · ABN {site.abn}
					</p>
					<ArrowLink href="/enquiry">Start a confidential conversation</ArrowLink>
				</div>
			</Container>
			<JsonLd data={personLd} />
		</>
	);
}
