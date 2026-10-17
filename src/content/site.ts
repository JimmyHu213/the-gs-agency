export type NavItem = { href: string; label: string };

/** A value TGSA still has to supply. The production build refuses to ship one. */
export type Pending = { placeholder: true; label: string };

export const isPending = (value: unknown): value is Pending =>
	typeof value === "object" && value !== null && (value as Pending).placeholder === true;

export const site = {
	name: "The Geoff Shannon Agency",
	legalName: "The Geoff Shannon Agency Pty Ltd",
	abn: "90 699 241 677",
	url: "https://geoffshannonagency.com",
	tagline: "Story & screen rights · Australia",
	description:
		"We represent Australians who have lived extraordinary true stories, and help bring them to screen without signing away ownership.",
	nav: [
		{ href: "/your-story", label: "Your story" },
		{ href: "/how-deals-work", label: "How deals work" },
		{ href: "/journal", label: "Journal" },
		{ href: "/for-producers", label: "For producers" },
		{ href: "/about", label: "About" },
	] satisfies NavItem[],
	footerNav: [
		{ href: "/your-story", label: "Your story" },
		{ href: "/how-deals-work", label: "How deals work" },
		{ href: "/journal", label: "Journal" },
		{ href: "/for-producers", label: "For producers" },
		{ href: "/slate", label: "Slate" },
		{ href: "/about", label: "About" },
		{ href: "/privacy", label: "Privacy" },
	] satisfies NavItem[],
	contact: {
		email: { placeholder: true, label: "[Contact email — to be supplied by TGSA]" } as string | Pending,
		phone: { placeholder: true, label: "[Contact phone — to be supplied by TGSA]" } as string | Pending,
		address: { placeholder: true, label: "[Registered address — to be supplied by TGSA]" } as string | Pending,
	},
	/** Reproduced verbatim from the source documents. */
	disclaimer:
		"This guide is general information only and is not legal advice. Every situation is different — please speak with a qualified Australian entertainment or intellectual-property lawyer before signing anything.",
	siteDisclaimer:
		"This site is general information only and is not legal advice. Every situation is different — please speak with a qualified Australian entertainment or intellectual-property lawyer before signing anything.",
	guidePdf: "/downloads/TGSA_Free_Guide_Your_Story_Your_Rights.pdf",
	/** Spec §9: enquiries are purged after this many months unless they become an active matter. */
	retentionMonths: 24,
};

/** The four operating safeguards, as stated in the guide's section 8. */
export const safeguards = [
	{
		title: "A clear written agreement",
		body: "Our arrangement with you is set down in a clear written agreement.",
	},
	{
		title: "Your own lawyer, encouraged",
		body: "We actively encourage independent legal advice before you sign anything.",
	},
	{
		title: "A cooling-off period",
		body: "Time to reconsider after you sign.",
	},
	{
		title: "Paid only on success",
		body: "Our remuneration is success-based. We only succeed when you do.",
	},
] as const;
