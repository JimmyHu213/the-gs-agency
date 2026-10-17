import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

function Wordmark() {
	return (
		<Link href="/" className="flex items-center gap-3.5 text-fg no-underline" aria-label={`${site.name} — home`}>
			<span className="font-display text-[30px] leading-none font-bold">GS</span>
			<span className="h-7 w-px bg-rule" aria-hidden="true" />
			<span className="text-[12px] uppercase tracking-[0.22em]">{site.name}</span>
		</Link>
	);
}

const enquiryClass =
	"inline-flex min-h-11 items-center border border-accent px-5 font-medium text-accent no-underline hover:bg-accent hover:text-bg";

export function SiteHeader() {
	return (
		<header className="relative z-10 mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-6 py-7">
			<Wordmark />

			{/* Wide screens: inline navigation. */}
			<div className="hidden items-center gap-7 lg:flex">
				<nav aria-label="Main" className="flex items-center gap-7 text-[15px]">
					{site.nav.map((item) => (
						<Link key={item.href} href={item.href} className="text-fg no-underline hover:text-muted">
							{item.label}
						</Link>
					))}
					<Link href="/enquiry" className={enquiryClass}>
						Confidential enquiry
					</Link>
				</nav>
				<ThemeToggle />
			</div>

			{/* Narrow screens: the same links behind a disclosure, no JavaScript needed. */}
			<div className="flex items-center gap-3 lg:hidden">
				<ThemeToggle />
				<details className="group">
					<summary className="flex h-11 cursor-pointer list-none items-center border border-line px-4 text-[15px] [&::-webkit-details-marker]:hidden">
						<span className="group-open:hidden">Menu</span>
						<span className="hidden group-open:inline">Close</span>
					</summary>
					<nav
						aria-label="Main"
						className="absolute inset-x-0 top-full flex flex-col gap-1 border-y border-line bg-bg px-6 py-5 text-[17px]"
					>
						{site.nav.map((item) => (
							<Link key={item.href} href={item.href} className="py-2 text-fg no-underline">
								{item.label}
							</Link>
						))}
						<Link href="/enquiry" className={`${enquiryClass} mt-3 self-start`}>
							Confidential enquiry
						</Link>
					</nav>
				</details>
			</div>
		</header>
	);
}
