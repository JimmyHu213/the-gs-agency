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

export const about = {
	placeholder: true as const,
	name: "Geoff Shannon",
	bio: "[Geoff’s bio — to be supplied by TGSA]",
	trackRecord: "[Track record — to be supplied by TGSA]",
	portrait: "[Portrait of Geoff Shannon — to be supplied]",
};
