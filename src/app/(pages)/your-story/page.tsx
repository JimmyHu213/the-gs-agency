import type { Metadata } from "next";
import { ArrowLink, Container, Disclaimer, Kicker, PageHeader, PrimaryLink, SecondaryLink } from "@/components/ui";
import { safeguards } from "@/content/site";

export const metadata: Metadata = {
	title: "Your story",
	description:
		"Two bad paths and a third way: how to keep ownership of your true story, get professional help, and share in what it earns.",
	alternates: { canonical: "/your-story" },
};

const steps = [
	{
		title: "You send a short note",
		body: "A few lines about what happened. Please don’t send documents or the full story yet.",
	},
	{
		title: "A confidential conversation",
		body: "Free, with no cost and no obligation. You decide what, and how much, to share.",
	},
	{
		title: "If we’re a fit, a clear agreement",
		body: "In writing, with time to take it to your own lawyer and a cooling-off period. We only succeed when you do.",
	},
];

export default function YourStoryPage() {
	return (
		<>
			<PageHeader
				kicker="For storytellers"
				title="You lived it. You should own it."
				lede="Most people with an extraordinary true story are offered one of two bad deals. There is a third way."
			/>

			<section>
				<Container className="grid gap-6 pb-20 md:grid-cols-3">
					<div className="border border-line p-8">
						<Kicker className="mb-3">Bad deal one</Kicker>
						<h2 className="m-0 mb-3 font-display text-[26px] leading-[1.25] font-medium">One cheque for everything</h2>
						<p className="m-0 text-muted">
							Hand everything to a production company for a single up-front cheque, and lose both control and any share
							of the upside.
						</p>
					</div>
					<div className="border border-line p-8">
						<Kicker className="mb-3">Bad deal two</Kicker>
						<h2 className="m-0 mb-3 font-display text-[26px] leading-[1.25] font-medium">Going it alone</h2>
						<p className="m-0 text-muted">Try to navigate the industry alone, and usually get nowhere.</p>
					</div>
					<div className="border border-rule bg-card p-8">
						<Kicker className="mb-3 font-semibold">The third way</Kicker>
						<h2 className="m-0 mb-3 font-display text-[26px] leading-[1.25] font-medium">Keep it, and share in it</h2>
						<p className="m-0 text-muted">
							Keep ownership of your story, get professional help to develop, package and sell it, and share in what it
							earns over time.
						</p>
					</div>
				</Container>
			</section>

			<section className="border-y border-line bg-card">
				<Container className="py-20">
					<blockquote className="m-0 max-w-[30ch] font-display text-[clamp(30px,4vw,48px)] leading-[1.2] italic">
						“You lived it. You should own it — and share in what it becomes.”
					</blockquote>
				</Container>
			</section>

			<section>
				<Container className="grid gap-12 py-24 lg:grid-cols-[1fr_2fr]">
					<h2 className="m-0 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.2] font-medium">
						An honest expectation
					</h2>
					<div className="flex max-w-[64ch] flex-col gap-5 text-[18px] text-muted">
						<p className="m-0">
							This is not a lottery win. Option fees are often modest, and the larger money, when it comes, tends to come
							later and in layers — the purchase price on a greenlight, a share of the back end, sequels, international
							versions, a book, a podcast.
						</p>
						<p className="m-0">It’s a long game measured in years, not weeks.</p>
						<div>
							<ArrowLink href="/journal/what-is-my-story-worth">What is my story really worth?</ArrowLink>
						</div>
					</div>
				</Container>
			</section>

			<section className="border-t border-line">
				<Container className="py-24">
					<h2 className="mb-14 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.2] font-medium">
						What happens when you get in touch
					</h2>
					<ol className="m-0 grid list-none gap-8 p-0 md:grid-cols-3">
						{steps.map((step, i) => (
							<li key={step.title} className="flex flex-col gap-3 border-t border-rule pt-6">
								<span className="font-display text-[22px] text-accent">{["One", "Two", "Three"][i]}</span>
								<h3 className="m-0 text-[20px] font-semibold">{step.title}</h3>
								<p className="m-0 text-muted">{step.body}</p>
							</li>
						))}
					</ol>
				</Container>
			</section>

			<section className="border-t border-line">
				<Container className="py-24">
					<h2 className="mb-12 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.2] font-medium">
						How we protect you
					</h2>
					<dl className="m-0 grid gap-x-12 gap-y-8 md:grid-cols-2">
						{safeguards.map((item) => (
							<div key={item.title} className="border-t border-line pt-5">
								<dt className="text-[18px] font-semibold">{item.title}</dt>
								<dd className="m-0 mt-1 text-muted">{item.body}</dd>
							</div>
						))}
					</dl>
					<div className="mt-14 flex flex-wrap gap-3">
						<PrimaryLink href="/enquiry">Make a confidential enquiry</PrimaryLink>
						<SecondaryLink href="/how-deals-work">Read the free guide first</SecondaryLink>
					</div>
					<div className="mt-14 max-w-[80ch]">
						<Disclaimer />
					</div>
				</Container>
			</section>
		</>
	);
}
