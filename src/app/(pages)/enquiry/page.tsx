import type { Metadata } from "next";
import { PendingText } from "@/components/Pending";
import { ArrowLink, Container, Disclaimer, Kicker, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
	title: "Confidential enquiry",
	description: "Start a free, confidential conversation about your story. No cost and no obligation.",
	alternates: { canonical: "/enquiry" },
};

// Phase 1: contact details only. The enquiry form arrives with the Phase 2 pipeline.
export default function EnquiryPage() {
	return (
		<>
			<PageHeader
				kicker="Free · Confidential · No obligation"
				title="Start a confidential conversation"
				lede="Tell us, in a few lines, what happened. There’s no cost and no obligation."
			/>
			<Container className="grid gap-12 pb-24 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col gap-8">
					<dl className="m-0 flex flex-col gap-6 text-[20px]">
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
					<p className="m-0 text-muted">An online enquiry form is coming soon.</p>
				</div>
				<div className="flex flex-col gap-6 border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
					<Kicker>Before you write</Kicker>
					<ul className="m-0 flex list-disc flex-col gap-3 pl-5 marker:text-rule text-muted">
						<li>A short note is enough. Please don’t send documents or the full story yet.</li>
						<li>
							Be careful about telling your whole story publicly before it’s protected — once it’s freely out there, its
							exclusivity value falls.
						</li>
						<li>
							If your story is tied to a live court case, or to a suppression or non-publication order, get legal advice
							first.
						</li>
					</ul>
					<ArrowLink href="/how-deals-work#protect-your-story">Protect your story before you tell anyone</ArrowLink>
					<Disclaimer />
				</div>
			</Container>
		</>
	);
}
