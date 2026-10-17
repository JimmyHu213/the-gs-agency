"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "tgsa-theme";
const CHANGE_EVENT = "tgsa-theme-change";
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

// The effective theme: the visitor's explicit choice if they made one,
// otherwise whatever their device prefers.
function getTheme(): Theme {
	const chosen = document.documentElement.dataset.theme;
	if (chosen === "light" || chosen === "dark") return chosen;
	return darkQuery().matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
	const query = darkQuery();
	query.addEventListener("change", onChange);
	window.addEventListener(CHANGE_EVENT, onChange);
	return () => {
		query.removeEventListener("change", onChange);
		window.removeEventListener(CHANGE_EVENT, onChange);
	};
}

function setTheme(theme: Theme) {
	document.documentElement.dataset.theme = theme;
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// Storage can be blocked (private mode); the choice still applies for this page view.
	}
	window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Runs before first paint so a stored choice never flashes the wrong theme. */
export const themeInitScript = `try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export function ThemeToggle() {
	// Null on the server: the theme is only knowable in the browser.
	const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);
	const next: Theme = theme === "dark" ? "light" : "dark";
	const label = theme ? `Switch to ${next} mode` : "Switch colour theme";

	return (
		<button
			type="button"
			onClick={() => setTheme(next)}
			aria-label={label}
			title={label}
			className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-fg hover:border-fg"
		>
			{theme === "dark" ? (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
					<circle cx="12" cy="12" r="4.5" />
					<path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
				</svg>
			) : (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
				</svg>
			)}
		</button>
	);
}
