import type { Pending } from "./site";

/**
 * SHELL content (spec DEC-5). No publishable material exists yet, and the
 * confidential development material must never appear here. Every entry is
 * obviously a placeholder and carries `placeholder: true`; the production
 * build fails while any remain unless ALLOW_PLACEHOLDER_CONTENT is set.
 */

export type SlateEntry = {
	placeholder: true;
	title: string;
	format: string;
	stage: string;
	logline: string;
};

export const slate: SlateEntry[] = [
	{
		placeholder: true,
		title: "[Project title withheld]",
		format: "[Format]",
		stage: "In development",
		logline: "[A de-identified one-line description, if TGSA approves publishing one]",
	},
	{
		placeholder: true,
		title: "[Project title withheld]",
		format: "[Format]",
		stage: "In development",
		logline: "[A de-identified one-line description, if TGSA approves publishing one]",
	},
];

/**
 * Drawn from Geoff's own published bio, limited to his personal story.
 * Keep out: the bank's name (the dispute is ongoing), his other organisations
 * and their sites, and anything connected to the confidential project.
 */
export const about = {
	name: "Geoff Shannon",
	bio: [
		"Geoff Shannon knows what it means to take on an institution that holds all the power. In his own fight against one of Australia’s biggest banks, he represented himself for more than 20 days in the NSW Supreme Court — no lawyers, no barristers — and saw the bank’s claims struck out or amended seven times over five years.",
		"Since the global financial crisis he has stood up for people in financial distress, many of them farmers and commercial borrowers, drawing on more than 30 years in financial services, regulation and corporate governance. His work for others has seen him nominated for Australian of the Year three times.",
		"Through The Geoff Shannon Agency, he now represents Australians with David-and-Goliath stories of their own, so they can bring them to screen without signing them away.",
	],
	trackRecord: [
		{ value: "30+", label: "years in financial services and advocacy" },
		{ value: "20+", label: "days self-represented in the NSW Supreme Court" },
		{ value: "3×", label: "Australian of the Year nominations" },
		{ value: "$300M+", label: "in loans reduced or wiped for farmers and borrowers" },
	],
	portrait: { placeholder: true, label: "[Portrait of Geoff Shannon — to be supplied]" } as string | Pending,
};
