import { SiteHeader } from "@/components/SiteHeader";
import { ArrowLink, Container } from "@/components/ui";

export default function NotFound() {
	return (
		<>
			<SiteHeader />
			<main id="main">
				<Container className="py-32">
					<h1 className="m-0 font-display text-[clamp(36px,5vw,60px)] font-medium">This page isn’t here.</h1>
					<p className="mt-5 mb-10 max-w-[50ch] text-[18px] text-muted">
						It may have moved. Everything on the site is a click away from the home page.
					</p>
					<ArrowLink href="/">Go to the home page</ArrowLink>
				</Container>
			</main>
		</>
	);
}
