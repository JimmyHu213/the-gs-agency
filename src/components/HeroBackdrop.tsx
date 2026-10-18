/**
 * The home hero's background: a faint grid fading toward the edges, with the
 * GS monogram drawn in gold along its lines (styles in globals.css). The SVG
 * is 21 × 14 grid cells, centred on the grid so its integer coordinates fall
 * on grid lines. Purely decorative.
 */
const G = "M9 5 V3 H3 V11 H9 V7 H6";
const S = "M18 5 V3 H12 V7 H18 V11 H12 V9";

export function HeroBackdrop() {
	return (
		<div className="hero-grid" aria-hidden="true">
			<svg className="hero-trace" viewBox="0 0 21 14">
				<path className="glow g" pathLength={1} d={G} />
				<path className="line g" pathLength={1} d={G} />
				<path className="glow s" pathLength={1} d={S} />
				<path className="line s" pathLength={1} d={S} />
			</svg>
		</div>
	);
}
