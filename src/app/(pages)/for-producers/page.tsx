import type { Metadata } from "next";
import { PendingText } from "@/components/Pending";
import { ArrowLink, Container, Kicker, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
	title: "For producers",
	description:
		"Australian true stories with a clean rights position, cooperative subjects and documentary proof — represented by The Geoff Shannon Agency.",
	alternates: { canonical: "/for-producers" },
};

// Drawn from the guide: what a producer actually pays for, and what lifts a story's value.
const offer = [
	{
		title: "A clean rights position",
		body: "Cooperation, release and exclusivity, bundled and agreed in writing — what people loosely call “life rights”. No tangles or competing claims.",
	},
	{
		title: "Cooperative subjects",
		body: "The real person behind the story, willing to give time, memories and access to the people around them. An authentic, cooperative subject makes a project far easier to finance, insure and market.",
	},
	{
		title: "Documentary proof",
		body: "Documents, records and footage that let you trust the story and dramatise it.",
	},
	{
		title: "Stories with a hook",
		body: "Genuine David-and-Goliath fights against banks, employers, insurers, government departments and institutions.",
	},
];

export default function ForProducersPage() {
	return (
		<>
			<PageHeader
				kicker="For industry"
				title="True stories, ready to option."
				lede="We represent Australians who have lived extraordinary true stories, and bring them to producers, broadcasters, streamers and financiers with the rights in order."
			/>

			<section>
				<Container className="grid gap-x-12 gap-y-10 pb-24 md:grid-cols-2">
					{offer.map((item) => (
						<div key={item.title} className="border-t border-rule pt-6">
							<h2 className="m-0 mb-3 font-display text-[clamp(24px,2.6vw,30px)] leading-[1.25] font-medium">{item.title}</h2>
							<p className="m-0 max-w-[56ch] text-muted">{item.body}</p>
						</div>
					))}
				</Container>
			</section>

			<section className="border-t border-line">
				<Container className="grid gap-12 py-24 lg:grid-cols-[1fr_1fr]">
					<div>
						<Kicker className="mb-5">How deals are structured</Kicker>
						<p className="m-0 max-w-[52ch] text-[18px] text-muted">
							Our storytellers keep ownership and share in what their story earns over time. Deals typically start as an
							option, with the purchase price, back end and derivative rights agreed separately — the same structure set
							out in our public guide.
						</p>
						<div className="mt-6">
							<ArrowLink href="/how-deals-work">Read the guide our storytellers read</ArrowLink>
						</div>
					</div>
					<div>
						<Kicker className="mb-5">Talk to Geoff directly</Kicker>
						<dl className="m-0 flex flex-col gap-4 text-[18px]">
							<div>
								<dt className="text-[14px] text-faint">Email</dt>
								<dd className="m-0">
									<PendingText value={site.contact.email} />
								</dd>
							</div>
							<div>
								<dt className="text-[14px] text-faint">Phone</dt>
								<dd className="m-0">
									<PendingText value={site.contact.phone} />
								</dd>
							</div>
						</dl>
						<div className="mt-6">
							<ArrowLink href="/slate">See what’s in development</ArrowLink>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
