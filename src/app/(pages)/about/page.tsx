import type { Metadata } from "next";
import { ArrowLink, Container, Kicker, PageHeader } from "@/components/ui";
import { about } from "@/content/shells";
import { safeguards, site } from "@/content/site";

export const metadata: Metadata = {
	title: "About",
	description: "Geoff Shannon and The Geoff Shannon Agency.",
	alternates: { canonical: "/about" },
};

export default function AboutPage() {
	return (
		<>
			<PageHeader kicker="About" title="Who you’ll be dealing with" lede={site.description} />
			<Container className="grid gap-12 pb-24 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
				<div className="flex aspect-[4/5] items-center justify-center border border-line bg-card p-6 text-center text-[15px] text-faint">
					{about.portrait}
				</div>
				<div className="flex flex-col gap-10">
					<div>
						<h2 className="m-0 mb-4 font-display text-[clamp(28px,3vw,40px)] font-medium">{about.name}</h2>
						<p className="m-0 text-muted italic">{about.bio}</p>
					</div>
					<div>
						<Kicker className="mb-3">Track record</Kicker>
						<p className="m-0 text-muted italic">{about.trackRecord}</p>
					</div>
					<div>
						<Kicker className="mb-4">How the agency works</Kicker>
						<ul className="m-0 flex list-disc flex-col gap-2 pl-5 marker:text-rule text-muted">
							{safeguards.map((item) => (
								<li key={item.title}>
									<span className="font-semibold text-fg">{item.title}.</span> {item.body}
								</li>
							))}
						</ul>
					</div>
					<p className="m-0 text-[15px] text-faint">
						{site.legalName} · ABN {site.abn}
					</p>
					<ArrowLink href="/enquiry">Get in touch</ArrowLink>
				</div>
			</Container>
		</>
	);
}
