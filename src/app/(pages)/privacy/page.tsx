import type { Metadata } from "next";
import { PendingText } from "@/components/Pending";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
	title: "Privacy",
	description: "What The Geoff Shannon Agency collects, why, where it is kept, for how long, and how to ask for it to be deleted.",
	alternates: { canonical: "/privacy" },
};

const sections = [
	{
		title: "What we collect",
		body: [
			"Only what you choose to send us when you get in touch: your name, how to contact you, and a short summary of your situation. We ask you not to send documents or your full story at this stage.",
		],
	},
	{
		title: "Why we collect it",
		body: ["To reply to you, and to decide together whether we can help."],
	},
	{
		title: "Who sees it",
		body: [
			"Only the people at The Geoff Shannon Agency who need to read it in order to respond. We do not sell your information or share it for marketing.",
		],
	},
	{
		title: "How long we keep it",
		body: [
			`Enquiries are deleted after ${site.retentionMonths} months, unless you become a client and we need to keep records for your matter.`,
		],
	},
	{
		title: "Cookies and analytics",
		body: [
			"This site sets no advertising or tracking cookies. Any visitor statistics we collect are aggregate and do not identify you.",
		],
	},
	{
		title: "Access, correction and deletion",
		body: ["You can ask to see what we hold about you, have it corrected, or have it deleted at any time."],
	},
];

export default function PrivacyPage() {
	return (
		<>
			<PageHeader
				kicker="Privacy"
				title="Your information"
				lede="We handle what you tell us in line with the Australian Privacy Principles."
			/>
			<Container className="pb-24">
				<p role="note" className="m-0 mb-12 max-w-[68ch] border border-rule bg-card px-5 py-4 text-[15px] text-muted">
					Draft — this notice is awaiting review by TGSA’s lawyer and may change before launch.
				</p>
				<div className="flex max-w-[68ch] flex-col gap-10 text-[18px] text-muted">
					{sections.map((section) => (
						<section key={section.title}>
							<h2 className="m-0 mb-3 font-display text-[clamp(24px,2.6vw,30px)] font-medium text-fg">{section.title}</h2>
							{section.body.map((p) => (
								<p key={p} className="m-0">
									{p}
								</p>
							))}
						</section>
					))}
					<section>
						<h2 className="m-0 mb-3 font-display text-[clamp(24px,2.6vw,30px)] font-medium text-fg">Contact</h2>
						<p className="m-0">
							{site.legalName} · ABN {site.abn}
						</p>
						<p className="m-0">
							<PendingText value={site.contact.email} />
						</p>
						<p className="m-0">
							<PendingText value={site.contact.address} />
						</p>
					</section>
				</div>
			</Container>
		</>
	);
}
