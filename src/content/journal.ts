/**
 * Journal articles, reproduced verbatim from TGSA_Journal_First_Two_Articles.
 * Kept as typed modules rather than MDX: two plain-prose articles do not need
 * a markdown pipeline, and a missing field fails the type check.
 */

export type Article = {
	slug: string;
	title: string;
	dek: string;
	author: string;
	datePublished: string;
	dateModified: string;
	paragraphs: string[];
	closing: string;
};

export const articleDisclaimer =
	"These articles are general information only, not legal or financial advice. For your own situation, speak with a qualified Australian entertainment or IP lawyer.";

export const articles: Article[] = [
	{
		slug: "what-are-life-rights",
		title: "What are “life rights,” and do you actually need them?",
		dek: "The phrase gets thrown around a lot. Here’s what it really means in Australia — and when it matters.",
		author: "Geoff Shannon",
		datePublished: "2026-09-05",
		dateModified: "2026-09-05",
		paragraphs: [
			"If you’ve ever looked into having your story made into a film or series, you’ll have heard that a producer needs to “buy your life rights.” It sounds like there’s a document somewhere with your name on it that you own and can sell. There isn’t — not exactly.",
			"As a general rule, no one owns the facts of their own life. You can’t stop another person from telling true things that happened, and Australia has no American-style “right of publicity.” So when a producer talks about buying your life rights, what they’re really after is three practical things: your cooperation, your release, and your exclusivity.",
			"Cooperation is your time, your memory, your documents, and your introductions to the people who were there. Release is your written promise not to sue for defamation, breach of confidence or invasion of privacy. Exclusivity is your agreement not to hand the same story to a competitor. Rolled together, that bundle is what “life rights” actually means in practice.",
			"Why do producers want it so badly if they don’t strictly need it? Because it removes risk. A film backed by the real person is easier to finance, cheaper to insure, and far more authentic on screen. An unauthorised version is legally riskier and rings hollow with audiences. That’s your leverage — and it’s exactly why you shouldn’t give it away for the first cheque you’re offered.",
			"Do you always need a life-rights deal to have a story told? No. But if someone wants to make your story, that interest is worth something, and the fair, safe way to proceed is with a proper agreement — one that lets you keep control, protects you from being misrepresented, and lets you share in what the story earns. Get independent legal advice before you sign anything, and never let anyone rush you.",
		],
		closing:
			"If you’re not sure where you stand, that’s exactly the kind of thing we can talk through — confidentially, and at no cost.",
	},
	{
		slug: "what-is-my-story-worth",
		title: "What is my story really worth?",
		dek: "An honest answer, from people who won’t promise you a fortune.",
		author: "Geoff Shannon",
		datePublished: "2026-09-05",
		dateModified: "2026-09-05",
		paragraphs: [
			"It’s the first question almost everyone asks, and it deserves a straight answer: probably not as much as you’ve heard — at least not up front. The idea that a dramatic life story sells for a million dollars overnight is, for the vast majority of people, a myth. Being told otherwise is usually a sign to be careful.",
			"Here’s how these deals actually pay. Early on, a producer typically takes an option — a modest fee to hold your story exclusively while they try to get the project financed. The real money, if it comes, arrives later: a purchase price when the project is greenlit (often tied to the production budget, within an agreed minimum and maximum), and then, over time, a share of the back end, plus separate payments for sequels, international remakes, a book or a podcast. It builds in layers, over years.",
			"So what actually lifts the value of a story? A few things. Timeliness — a story that’s in the news right now commands more attention. Proof — documents, records and footage that let a producer trust and dramatise it. Uniqueness — a genuine David-and-Goliath hook that hasn’t been done to death. A clean rights position — no tangles or competing claims. And your cooperation — a subject who’ll show up and help is worth far more than one who won’t.",
			"Why do we lead with the unglamorous truth? Because the people who promise you a fortune on day one are usually the ones you should walk away from. Realistic expectations protect you. A story is a long game, and the goal isn’t one big cheque — it’s keeping ownership, telling it well, and sharing fairly in everything it becomes.",
		],
		closing: "If you’d like an honest read on your particular story, get in touch for a free, confidential conversation.",
	},
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
