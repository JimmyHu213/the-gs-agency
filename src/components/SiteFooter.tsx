import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
	return (
		<footer className="border-t border-line">
			<div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pt-14 pb-16">
				<div className="flex flex-wrap justify-between gap-6">
					<span className="font-display text-[22px]">{site.name}</span>
					<nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
						{site.footerNav.map((item) => (
							<Link key={item.href} href={item.href} className="text-fg">
								{item.label}
							</Link>
						))}
					</nav>
				</div>
				<p className="m-0 max-w-[80ch] text-[14px] text-faint">{site.siteDisclaimer}</p>
				<p className="m-0 text-[14px] text-faint">
					{site.legalName} · ABN {site.abn}
				</p>
			</div>
		</footer>
	);
}
