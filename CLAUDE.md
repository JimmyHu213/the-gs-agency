# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated issues, mention them — don't fix them.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan with verification at each step.

## 5. Project Context

Website for **The Geoff Shannon Agency** (TGSA): helps Australians with true stories bring them
to screen while keeping ownership. Two audiences on one site: storytellers and industry
(producers, broadcasters, financiers). The approved design spec is the source of truth:
`docs/superpowers/specs/2026-09-10-tgsa-platform-design.md` — read it before building a page.

- **Tech stack:** Next.js 16 App Router + React 19, Tailwind 4, TypeScript, deployed to
  Cloudflare Workers via `@opennextjs/cloudflare`.
- **Planned (per spec, not built yet):** D1 + Drizzle for enquiries, Cloudflare Email Sending,
  Turnstile, Zod schemas shared client/server, `/admin/*` behind Cloudflare Access.
- **Commands:**
  - `npm run dev` — local dev on localhost:3000
  - `npm run lint` — ESLint over `src/`
  - `npm run preview` — build and run in the Workers runtime locally
  - `npm run deploy` — build with OpenNext and deploy (never plain `wrangler deploy`)
  - `npm run cf-typegen` — regenerate `cloudflare-env.d.ts` after changing bindings
- **Deploys:** every push to `main` deploys via `.github/workflows/deploy.yml`. Work on `dev`
  or feature branches and PR into `main`.

**Hard rules**
- **Confidentiality:** no pitch/treatment material — working title, the individual's name, the
  mine site, or the company — may appear anywhere in the repo. Slate and about pages are shells.
- **No invented credits:** shell content uses obvious placeholders flagged `placeholder: true`.
- **Gold on paper is decorative only.** `--gold`/`--gold-deep` fail AA on `--paper`; gold type is
  allowed only on ink. Target WCAG 2.2 AA.
- Secrets go through `wrangler secret` / `.dev.vars` (gitignored) — never committed.

## 6. Coding Standards

- Follow existing patterns in the codebase.
- No premature abstractions — three similar lines beat one speculative helper.
- Prefer readability over cleverness.
- Error handling at system boundaries only (user input, external APIs).

## 7. Git Workflow

- Conventional Commits required: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `ci:`, `build:`, `perf:`, `style:`
- Keep PRs small and focused — one concern per PR.
- Write meaningful commit messages explaining why, not what.
- Never force-push to shared branches.

## 8. PR Expectations

- Fill out the PR template completely.
- Ensure all CI checks pass before requesting review.
- Respond to CodeRabbit/Copilot findings — dismiss with a reason or fix.

## 9. File Organization

- `src/app/` — routes (App Router). Import from `src` via the `@/*` alias.
- `src/content/` — typed copy modules (`site.ts`, `home.ts`, `guide.ts`, …) and
  `journal/*.mdx`. Copy lives here, not inside components.
- `public/` — static assets; `public/_headers` sets response headers on Workers.
- `docs/` — specs, plans and one-time setup notes (e.g. Cloudflare Access).
- Co-locate related files.
- Avoid deep nesting.
