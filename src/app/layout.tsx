import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { themeInitScript } from "@/components/ThemeToggle";
import { JsonLd } from "@/components/ui";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: site.name, template: `%s · ${site.name}` },
	description: site.description,
	openGraph: { siteName: site.name, locale: "en_AU", type: "website" },
};

const organization = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: site.legalName,
	alternateName: site.name,
	url: site.url,
	identifier: { "@type": "PropertyValue", propertyID: "ABN", value: site.abn.replace(/\s/g, "") },
	areaServed: "AU",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		// data-theme is set before hydration by themeInitScript when the visitor has chosen a theme.
		<html lang="en-AU" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>
			<body className={`${inter.variable} ${playfair.variable}`}>
				<a
					href="#main"
					className="sr-only z-50 bg-fg px-4 py-3 text-bg focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
				>
					Skip to content
				</a>
				{children}
				<SiteFooter />
				<JsonLd data={organization} />
			</body>
		</html>
	);
}
