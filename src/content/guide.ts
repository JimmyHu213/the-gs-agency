/**
 * "Your Story, Your Rights" — the free guide, reproduced verbatim from
 * TGSA_Free_Guide_Your_Story_Your_Rights. Headings are question-shaped where
 * the source allows (spec §10, GEO), and each section opens with its answer.
 */

export type Block = { type: "p"; text: string } | { type: "list"; items: string[] } | { type: "quote"; text: string };

export type GuideSection = {
	id: string;
	number: number;
	title: string;
	blocks: Block[];
};

export const guide = {
	title: "Your Story, Your Rights",
	subtitle: "An Australian’s guide to telling — and protecting — a true story",
	intro:
		"If you have lived through an extraordinary true story — a fight with a bank, an employer, a government department or an institution that held all the power and left you to pick up the pieces — this short guide is for you. It explains, in plain English, how true stories become films, series, books and podcasts in Australia; what your story is really worth; and, most importantly, how to protect yourself so you are not taken advantage of. It is not legal advice, and it is not a sales pitch. It is the information we wish every person had before they signed anything.",
	dateModified: "2026-09-05",
	sections: [
		{
			id: "your-story-has-value",
			number: 1,
			title: "Your story has value — but it’s easy to give away",
			blocks: [
				{
					type: "p",
					text: "Audiences and producers are hungrier than ever for authentic true stories. One compelling real-life account can become several separate things — a feature film, a limited series, a documentary, a book, a podcast — and each is its own opportunity. But value is easy to lose by accident: people sign the first document put in front of them, or tell their whole story publicly before they have protected any of it. A little knowledge changes everything.",
				},
			],
		},
		{
			id: "what-life-rights-means",
			number: 2,
			title: "What “life rights” really means",
			blocks: [
				{
					type: "p",
					text: "You’ll hear the phrase “selling your life rights.” It’s a little misleading. In Australia there is no single piece of property called your “life rights” that you own and sell like a car. As a rule, no one can stop someone telling true facts — and, unlike the United States, Australia has no general “right of publicity.” So what does a producer actually pay for? Three things:",
				},
				{
					type: "list",
					items: [
						"Your cooperation — your time, memories, documents and access to the people around you.",
						"Your release — your agreement not to sue over things like defamation, breach of confidence or invasion of privacy.",
						"Your exclusivity — your promise not to give the same story to someone else.",
					],
				},
				{
					type: "p",
					text: "Bundled together, that is what people loosely call “life rights,” and it has real value. An authentic, cooperative subject who won’t sue makes a project far easier to finance, insure and market.",
				},
			],
		},
		{
			id: "two-bad-paths-and-a-third-way",
			number: 3,
			title: "Two bad paths — and a third way",
			blocks: [
				{
					type: "p",
					text: "Most people are offered one of two deals. First: hand everything to a production company for a single up-front cheque, and lose both control and any share of the upside. Second: try to navigate the industry alone, and usually get nowhere. There is a third way — keep ownership of your story, get professional help to develop, package and sell it, and share in what it earns over time.",
				},
				{ type: "quote", text: "You lived it. You should own it — and share in what it becomes." },
			],
		},
		{
			id: "option-vs-sale",
			number: 4,
			title: "Option vs sale — how deals really work",
			blocks: [
				{
					type: "p",
					text: "Rarely does anyone buy a story outright at the start. Usually a producer takes an option — they pay to hold the exclusive rights for a set period (often 12 to 18 months) while they try to finance the project. If they succeed, they exercise the option and pay the agreed purchase price. If they don’t, the rights return to you and you can try again elsewhere. Optioning keeps you in the game and earning, instead of selling everything cheaply on day one.",
				},
			],
		},
		{
			id: "what-is-your-story-worth",
			number: 5,
			title: "What is your story worth?",
			blocks: [
				{
					type: "p",
					text: "Here’s the honest part most people won’t tell you: this is not a lottery win. Many assume a life story sells for hundreds of thousands, or millions. In reality option fees are often modest, and purchase prices are commonly tied to the production budget within an agreed floor and ceiling. The larger money, when it comes, tends to come later and in layers — the purchase price on a greenlight, a share of the back end, sequels, international versions, a book, a podcast. It’s a long game measured in years, not weeks.",
				},
				{
					type: "p",
					text: "What lifts the value: timeliness, hard proof (documents, records, footage), a genuinely unique David-and-Goliath hook, a clean rights position, and your willingness to cooperate.",
				},
			],
		},
		{
			id: "parts-of-a-deal",
			number: 6,
			title: "The parts of a deal to understand",
			blocks: [
				{
					type: "list",
					items: [
						"Option fee — paid to hold the rights; should be meaningful and renewable.",
						"Purchase price — paid on greenlight, often a percentage of budget with a floor and ceiling; push the floor up.",
						"Backend — a share of profits; beware “net profit,” which can vanish in the accounting — fixed bonuses can be safer.",
						"Credits & consulting — an on-screen credit and a paid consulting role keep you close to the project.",
						"Derivative rights — sequels, remakes, international formats, a book, a podcast — each should be paid for separately, not swept up in one cheap grant.",
					],
				},
			],
		},
		{
			id: "protect-your-story",
			number: 7,
			title: "Protect your story before you tell anyone",
			blocks: [
				{
					type: "list",
					items: [
						"Don’t sign the first offer, and never sign anything without independent legal advice.",
						"Be careful about telling your whole story publicly before it’s protected — once it’s freely out there, its exclusivity value falls.",
						"Keep your documents, records and proof organised and safe.",
						"Watch for suppression or non-publication orders and live court cases — telling a story tied to ongoing proceedings can breach a court order. Get advice first.",
						"Red flags: anyone who wants you to sign on the spot; vague promises of a huge payday; a contract with no end date or a permanent grab of every right; or pressure not to get your own lawyer.",
					],
				},
			],
		},
		{
			id: "how-we-can-help",
			number: 8,
			title: "How we can help",
			blocks: [
				{
					type: "p",
					text: "The Geoff Shannon Agency represents Australians with exactly these stories. We sign a clear agreement, encourage you to get independent legal advice, give you a cooling-off period, and only succeed when you do. If you’d like a free, confidential conversation about your story, get in touch — there’s no cost and no obligation.",
				},
			],
		},
	] satisfies GuideSection[],
};
