import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time and nothing revalidates, so the
// prerendered output is served straight from Workers static assets. Without
// an incremental cache, SSG routes such as /journal/[slug] 404 on Workers.
// Switch to the R2 cache if ISR or revalidation is ever introduced.
// See https://opennext.js.org/cloudflare/caching for more details.
export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
	enableCacheInterception: true,
});
