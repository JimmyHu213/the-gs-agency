import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { findPlaceholders } from "./src/content/placeholders";

const nextConfig: NextConfig = {
	// Markdown twins of journal articles (spec §10).
	async rewrites() {
		return [{ source: "/journal/:slug.md", destination: "/md/journal/:slug" }];
	},
};

export default function config(phase: string): NextConfig {
	// Spec §6: shipping placeholder content (fake credits, missing contact
	// details) is a build failure unless explicitly allowed.
	if (phase === PHASE_PRODUCTION_BUILD && !process.env.ALLOW_PLACEHOLDER_CONTENT) {
		const pending = findPlaceholders();
		if (pending.length > 0) {
			throw new Error(
				`Placeholder content still present: ${pending.join(", ")}. ` +
					"Supply the real content, or set ALLOW_PLACEHOLDER_CONTENT=1 for a non-launch deploy.",
			);
		}
	}
	return nextConfig;
}

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
