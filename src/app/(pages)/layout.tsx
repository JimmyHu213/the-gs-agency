import { SiteHeader } from "@/components/SiteHeader";

// Every page except home, whose header sits inside the hero backdrop.
export default function PagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
			<main id="main">{children}</main>
		</>
	);
}
