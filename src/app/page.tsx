import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { SiteHeader } from "@/components/SiteHeader";
import { Container, Divider, Kicker } from "@/components/ui";
import { safeguards, site } from "@/content/site";

export const metadata: Metadata = {
	title: { absolute: `${site.name} — Story & screen rights in Australia` },
	alternates: { canonical: "/" },
};

const doors = [
	{
		href: "/your-story",
		kicker: "For storytellers",
		title: "I lived it",
		body: "You fought a bank, an employer, an insurer or an institution, and you want your story told without losing control of it.",
		cta: "Start here, confidentially",
	},
	{
		href: "/for-producers",
		kicker: "For industry",
		title: "I option and produce",
		body: "You want true stories with a clean rights position, cooperative subjects and documentary proof.",
		cta: "What we bring producers",
	},
];

const paths = [
	{
		kicker: "Bad deal one",
		title: "One cheque for everything",
		body: "Hand it all to a production company up front, and lose both control and any share of the upside.",
	},
	{
		kicker: "Bad deal two",
		title: "Going it alone",
		body: "Try to navigate the industry by yourself, and usually get nowhere.",
	},
	{
		kicker: "The third way",
		title: "Keep it, and share in it",
		body: "Keep ownership, get professional help to develop, package and sell it, and share in what it earns over time.",
		featured: true,
	},
];

export default function Home() {
	return (
		<>
			<div className="relative overflow-hidden">
				<HeroBackdrop />
				<div className="relative">
					<SiteHeader />
					<main id="main">
						<section className="px-6 pt-16 pb-10 text-center sm:pt-20">
							<Kicker className="mb-6">{site.tagline}</Kicker>
							<h1 className="mx-auto max-w-[15ch] font-display text-[clamp(44px,7vw,92px)] leading-[1.05] font-medium tracking-[-0.01em]">
								Your story, your rights.
							</h1>
							<p className="mx-auto mt-7 max-w-[54ch] text-[19px] text-muted">{site.description}</p>
						</section>

						<Container>
							<Divider className="pt-6" />
						</Container>

						<section aria-label="Choose your path">
							<Container className="grid gap-6 pt-10 pb-24 md:grid-cols-2">
								{doors.map((door) => (
									<Link
										key={door.href}
										href={door.href}
										className="flex flex-col gap-[18px] border border-line border-t-2 border-t-rule bg-card px-10 py-12 text-fg no-underline hover:border-fg"
									>
										<span className="text-[12px] uppercase tracking-[0.28em] text-label">{door.kicker}</span>
										<span className="font-display text-[clamp(36px,4vw,52px)] leading-[1.1]">{door.title}</span>
										<span className="max-w-[40ch] text-muted">{door.body}</span>
										<span className="mt-auto pt-3 font-semibold underline decoration-accent underline-offset-[6px]">
											{door.cta} →
										</span>
									</Link>
								))}
							</Container>
						</section>
					</main>
				</div>
			</div>

			<section className="border-t border-line">
				<Container className="py-24">
					<Kicker className="mb-5 text-center">The third way</Kicker>
					<h2 className="mx-auto mb-16 max-w-[22ch] text-center font-display text-[clamp(32px,4vw,52px)] leading-[1.15] font-medium">
						Most people are offered one of two bad deals. There is a third.
					</h2>
					<div className="grid gap-6 md:grid-cols-3">
						{paths.map((path) => (
							<div
								key={path.title}
								className={`border p-8 ${path.featured ? "border-rule bg-card" : "border-line"}`}
							>
								<p
									className={`m-0 mb-3 text-[13px] uppercase tracking-[0.2em] ${path.featured ? "font-semibold text-accent" : "text-faint"}`}
								>
									{path.kicker}
								</p>
								<h3 className="m-0 mb-3 font-display text-[26px] leading-[1.25] font-medium">{path.title}</h3>
								<p className="m-0 text-muted">{path.body}</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section className="border-t border-line">
				<Container className="py-24">
					<h2 className="mb-14 text-center font-display text-[clamp(30px,3.4vw,44px)] leading-[1.2] font-medium">
						How we protect you
					</h2>
					<ol className="m-0 grid list-none gap-x-8 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
						{safeguards.map((item, i) => (
							<li key={item.title} className="flex flex-col gap-2.5 border-t border-rule pt-5">
								<span className="font-display text-[40px] leading-none text-accent" aria-hidden="true">
									{String(i + 1).padStart(2, "0")}
								</span>
								<h3 className="m-0 text-[18px] font-semibold">{item.title}</h3>
								<p className="m-0 text-muted">{item.body}</p>
							</li>
						))}
					</ol>
				</Container>
			</section>

			<section>
				<Container className="pb-24">
					{/* The one panel that stays ink-and-gold in both themes. */}
					<div className="flex flex-wrap items-center justify-between gap-8 border border-panel-line bg-panel px-8 py-14 text-paper sm:px-12">
						<div className="min-w-0 flex-[1_1_420px]">
							<p className="m-0 mb-3 text-[13px] uppercase tracking-[0.28em] text-gold">Free guide</p>
							<h2 className="m-0 mb-3 font-display text-[clamp(28px,3vw,40px)] leading-[1.2] font-medium">
								Your Story, Your Rights
							</h2>
							<p className="m-0 max-w-[52ch] text-[#d4cfc2]">
								An Australian’s guide to telling, and protecting, a true story. Eight short sections in plain English.
								Not legal advice, and not a sales pitch.
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/how-deals-work"
								className="inline-flex min-h-12 items-center bg-gold px-6 font-semibold text-ink no-underline hover:opacity-90"
							>
								Read the guide
							</Link>
							<a
								href={site.guidePdf}
								download
								className="inline-flex min-h-12 items-center border border-paper/40 px-6 font-medium text-paper no-underline hover:border-paper"
							>
								Download PDF
							</a>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
