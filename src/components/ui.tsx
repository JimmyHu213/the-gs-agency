import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
	return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

/** Small uppercase label. Gold on ink, grey on paper (see --label). */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
	return <p className={`m-0 text-[13px] uppercase tracking-[0.3em] text-label ${className}`}>{children}</p>;
}

/** The logo's gold rule with a diamond at its centre. Decorative. */
export function Divider({ className = "" }: { className?: string }) {
	return (
		<div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
			<span className="h-px flex-1 bg-rule" />
			<span className="h-[9px] w-[9px] rotate-45 bg-rule" />
			<span className="h-px flex-1 bg-rule" />
		</div>
	);
}

export function PageHeader({ kicker, title, lede }: { kicker?: string; title: string; lede?: ReactNode }) {
	return (
		<header className="pt-16 pb-12 sm:pt-24">
			<Container>
				{kicker && <Kicker className="mb-6">{kicker}</Kicker>}
				<h1 className="m-0 max-w-[20ch] font-display text-[clamp(40px,6vw,76px)] leading-[1.06] font-medium tracking-[-0.01em]">
					{title}
				</h1>
				{lede && <div className="mt-7 max-w-[60ch] text-[19px] text-muted">{lede}</div>}
				<Divider className="mt-12" />
			</Container>
		</header>
	);
}

export function Disclaimer({ text = site.disclaimer }: { text?: string }) {
	return (
		<aside aria-label="Disclaimer" className="border-l border-rule pl-5 text-[15px] text-faint">
			{text}
		</aside>
	);
}

const buttonBase = "inline-flex min-h-12 items-center px-6 font-semibold no-underline";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
	return (
		<Link href={href} className={`${buttonBase} bg-fg text-bg hover:opacity-90`}>
			{children}
		</Link>
	);
}

export function SecondaryLink({ href, children, download }: { href: string; children: ReactNode; download?: boolean }) {
	const className = `${buttonBase} border border-line font-medium text-fg hover:border-fg`;
	return download ? (
		<a href={href} download className={className}>
			{children}
		</a>
	) : (
		<Link href={href} className={className}>
			{children}
		</Link>
	);
}

/** Underlined text link; gold underline on ink, ink underline on paper. */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
	return (
		<Link href={href} className="font-semibold text-fg underline decoration-accent underline-offset-[6px] hover:text-muted">
			{children} →
		</Link>
	);
}

export function JsonLd({ data }: { data: object }) {
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
