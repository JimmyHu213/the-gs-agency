import { about, slate } from "./shells";
import { isPending, site } from "./site";

/** Every piece of content still waiting on TGSA, by name. */
export function findPlaceholders(): string[] {
	const found: string[] = [];
	for (const [key, value] of Object.entries(site.contact)) {
		if (isPending(value)) found.push(`site.contact.${key}`);
	}
	slate.forEach((entry, i) => entry.placeholder && found.push(`slate[${i}]`));
	if (isPending(about.portrait)) found.push("about.portrait");
	return found;
}
