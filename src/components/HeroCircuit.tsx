import type { CSSProperties } from "react";

/**
 * The GS monogram as a circuit, behind the home hero (styles in globals.css).
 * Each letter is one trace entering from the top of the page; pulses of light
 * flow along it from top to bottom. The G ends on a terminal pad; the S runs on
 * downward and fades out. Coordinates are grid cells. Purely decorative.
 */
const G = "M9 0 V3 H3 V11 H9 V7 H6";
const S = "M18 0 V3 H12 V7 H18 V11 H12 V14";

// Two pulses per trace, half a cycle apart; negative delays start them mid-flow.
const pulses: { d: string; delay: string }[] = [
	{ d: G, delay: "0s" },
	{ d: G, delay: "-3.5s" },
	{ d: S, delay: "-1.75s" },
	{ d: S, delay: "-5.25s" },
];

export function HeroCircuit() {
	return (
		<svg className="hero-circuit" viewBox="0 0 21 14" aria-hidden="true">
			<path className="trace" d={G} />
			<path className="trace" d={S} />
			<circle className="pad" cx="6" cy="7" r="0.14" />
			{pulses.map((p, i) => {
				const style: CSSProperties = { animationDelay: p.delay };
				return (
					<g key={i}>
						<path className="pulse halo" pathLength={1} d={p.d} style={style} />
						<path className="pulse core" pathLength={1} d={p.d} style={style} />
					</g>
				);
			})}
		</svg>
	);
}
