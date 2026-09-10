# The Geoff Shannon Agency — Platform Design

**Date:** 2026-09-10
**Status:** Approved design, ready for implementation planning
**Repo:** `the-gs-agency` (Next.js 16 + Tailwind 4 on Cloudflare Workers via OpenNext)

---

## 1. Context

The Geoff Shannon Agency Pty Ltd (ABN 90 699 241 677, `geoffshannonagency.com`) represents
Australians who have lived extraordinary true stories — typically David-and-Goliath fights
against banks, employers, insurers, government departments or institutions — and helps them
bring those stories to screen without signing away ownership.

The agency's proposition, in its own words: most people are offered one of two bad deals.
Hand everything to a production company for a single up-front cheque and lose both control
and upside, or try to navigate the industry alone and get nowhere. TGSA is the third way —
keep ownership, get professional help to develop, package and sell, and share in what it
earns over time.

Operating safeguards the site must communicate: a clear written agreement, active
encouragement to get independent legal advice, a cooling-off period, and success-based
remuneration ("we only succeed when you do").

### Existing assets

| Asset | Location | Use |
|---|---|---|
| *Your Story, Your Rights* guide (8 sections) | `TGSA_Free_Guide_Your_Story_Your_Rights.pdf` | Republished in full as `/how-deals-work` |
| Journal articles ×2 | `TGSA_Journal_First_Two_Articles.pdf` | Seed `/journal` |
| Resolved logo lockups | `logos/GS_stacked_*.svg` | Source of brand tokens; wordmark to be reset |
| Logo exploration v3 | `GS_Screen_Agency_Logos_v3/` | Not used — superseded |
| *The Big Australian* pitch + treatment | `GS_Screen_Agency_The_Big_Australian_*.pdf` | **CONFIDENTIAL — must not be published** |

### Confidentiality constraint

The pitch and treatment documents are stamped "CONFIDENTIAL DEVELOPMENT MATERIAL" and name a
living individual, a specific mine site, and unproven allegations against a large company.
No part of that material — including the working title, the individual's name, the location,
or the company — appears anywhere in this build. The slate ships as an editable shell.

---

## 2. Goals and non-goals

**Goals**

1. Give a person with a true story a trustworthy place to understand their position and make
   safe contact.
2. Give a producer, broadcaster or financier enough to take a meeting.
3. Publish the guide and journal as indexable, citable HTML rather than buried PDFs.
4. Capture enquiries reliably, store them lawfully, and never lose one.

**Non-goals for v1**

- No authenticated client portal for represented storytellers.
- No document or file upload.
- No public slate content until something is announceable.
- No e-commerce, no payments, no newsletter gating.

---

## 3. Audiences

| | Storyteller | Industry |
|---|---|---|
| Who | Someone who lived the story; often mid- or post-litigation, frequently distressed, low industry literacy | Producers, broadcasters, streamers, financiers |
| Needs | Plain English, honesty about money, proof they won't be exploited, a low-stakes way to make contact | Rights position, subject cooperation, evidence quality, who they'd be dealing with |
| Emotional state | Wary, often burnt by an institution already | Time-poor, sceptical, sees many pitches |
| Primary CTA | Confidential enquiry | Direct contact with Geoff |

The two audiences are served by one site, not two. A producer reading the storyteller pages
sees the thing that makes TGSA valuable to them: clean rights and cooperative subjects.

---

## 4. Locked decisions

| # | Decision | Rationale |
|---|---|---|
| DEC-1 | One site, split at the hero — not two sub-sites behind a splash | Shared content does double duty; a splash costs a click and dilutes SEO on one domain |
| DEC-2 | Public brand is **The Geoff Shannon Agency** | Matches the guide, journal and domain; a personal name earns trust from someone handing over their life story |
| DEC-3 | Inherit the visual language of `GS_stacked_*`, reset the wordmark | The lockup reads "GS SCREEN AGENCY" and cannot be used as-is under DEC-2. "GS" is retained as monogram and favicon |
| DEC-4 | Enquiries persist to D1 **and** send email | Email alone loses enquiries; D1 gives a reviewable queue |
| DEC-5 | Slate, about and track record ship as editable shells | No publishable material exists yet; confidential material is excluded by constraint |
| DEC-6 | Admin behind **Cloudflare Access** | No hand-rolled auth in front of sensitive personal data; edge-enforced before the Worker runs |
| DEC-7 | Two surfaces — ink and paper | Long-form reading on cream, industry pages on ink; uses both existing lockups |
| DEC-8 | Playfair Display + Inter | Closest Didone match to the outlined lockup, paired with a neutral UI face |
| DEC-9 | Cloudflare Web Analytics, not Google | No cookies, no consent banner, no third party receiving a list of people researching their legal position |
| DEC-10 | Allow AI retrieval crawlers, block training crawlers | Citation with a link is wanted; donating the guide to a training set is not |

---

## 5. Information architecture

| Route | Surface | Audience | Purpose |
|---|---|---|---|
| `/` | Ink | Both | Split hero: "I lived it" / "I option and produce", plus the third-way proposition |
| `/your-story` | Paper | Storyteller | Two bad paths vs the third way; what happens when you make contact; the four safeguards |
| `/how-deals-work` | Paper | Storyteller | The full guide, 8 anchored sections, sticky TOC, PDF download |
| `/journal` | Paper | Both | Article index, newest first |
| `/journal/[slug]` | Paper | Both | Article, with `dateModified` and author attribution |
| `/for-producers` | Ink | Industry | Clean rights position, cooperative subjects, documentary proof, direct contact |
| `/slate` | Ink | Industry | Editable shell — "in development" cards |
| `/about` | Ink | Both | Geoff and the agency — editable shell for bio and track record |
| `/enquiry` | Paper | Storyteller | The confidential form |
| `/privacy` | Paper | — | APP-aligned notice: what is collected, why, where, how long, how to delete |
| `/admin/enquiries` | Ink | Internal | Behind Cloudflare Access |

### Page content notes

**`/` split hero.** Two routes offered within the first viewport, of equal visual weight, each
with one sentence of qualification so people self-select correctly. Below the fold: the third
way stated plainly, the four safeguards, and a link to the guide.

**`/your-story`.** Built around the guide's section 3 — two bad paths and a third way. Includes
the pull quote *"You lived it. You should own it — and share in what it becomes."* Sets
expectations honestly, including that this is a long game measured in years, not weeks.

**`/how-deals-work`.** The guide verbatim, restructured for the web: sticky table of contents,
one `<h2>` per numbered section, anchor links so a single section can be shared. PDF remains
downloadable. Carries the disclaimer.

**`/enquiry`.** Deliberately minimal: name, email, phone (optional), preferred contact method,
and a short free-text summary with a low character cap. Explicit instruction not to send
documents or the full story yet — which is the guide's own advice from section 7, and keeps
TGSA from becoming custodian of court documents on day one.

### Legal disclaimer

Reproduced verbatim from source documents on `/how-deals-work`, every journal article, and
`/enquiry`:

> This guide is general information only and is not legal advice. Every situation is different
> — please speak with a qualified Australian entertainment or intellectual-property lawyer
> before signing anything.

---

## 6. Content system

Content lives in the repo, separate from components, so copy changes need no React knowledge.

```
src/content/
  site.ts        # nav, footer, ABN, contact details, disclaimer strings
  home.ts        # hero, split-door copy, safeguards
  your-story.ts
  guide.ts       # the 8 guide sections, structured
  producers.ts
  slate.ts       # SHELL — placeholder entries, clearly marked
  about.ts       # SHELL — bio and track record placeholders
  journal/*.mdx  # one file per article
```

Every content module is typed. A missing required field is a build failure, not a blank
section shipped to production.

Shell content (`slate.ts`, `about.ts`) uses obviously-placeholder copy — never plausible
invented credits, credits or claims. Each shell entry carries a `placeholder: true` flag; the
build fails if a placeholder is still present when `NODE_ENV=production` and an explicit
`ALLOW_PLACEHOLDER_CONTENT` flag is unset. This prevents accidentally shipping fake credits.

---

## 7. Visual design system

### Tokens

Extracted from `logos/GS_stacked_*.svg`:

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0E0E10` | Primary dark ground |
| `--ink-raised` | `#111111` | Cards and raised surfaces on ink |
| `--paper` | `#FBF8EF` | Light ground; cream type on ink |
| `--gold` | `#C8A951` | Accent on ink (including type) |
| `--gold-deep` | `#B08D2E` | Accent on paper (decorative only) |

### Typography

- **Display:** Playfair Display — wordmark, page titles, pull quotes.
- **Body and UI:** Inter.
- Replaces the scaffold's Geist/Geist Mono in `src/app/layout.tsx`.
- Long-form measure capped at ~68ch; body ≥ 18px on reading pages.

### Accessibility rules

Gold fails WCAG AA for body text on paper (`--gold` ≈ 2.3:1, `--gold-deep` ≈ 3.0:1). Therefore:

1. Gold as **type** is permitted only on ink (≈ 7.7:1).
2. On paper, gold is **decorative only** — rules, the diamond divider, icon strokes. Never a
   paragraph, never a link, never the only indicator of state.
3. Link affordance never relies on colour alone; underline or weight change required.
4. All interactive elements reach 4.5:1 against their own ground, verified in CI.

Targets: WCAG 2.2 AA, full keyboard operability, visible focus rings on both surfaces,
`prefers-reduced-motion` respected.

### Surface rule

Ink for `/`, `/for-producers`, `/slate`, `/about`, `/admin/*`. Paper for `/your-story`,
`/how-deals-work`, `/journal/*`, `/enquiry`, `/privacy`. The header and footer invert with
the surface; the logo has both lockups already.

---

## 8. Technical architecture

### Stack

Next.js 16 App Router, statically rendered where possible, on Cloudflare Workers via
`@opennextjs/cloudflare`. Tailwind 4. TypeScript.

### Bindings (`wrangler.jsonc`)

| Binding | Type | Purpose |
|---|---|---|
| `DB` | D1 | Enquiries |
| `EMAIL` | Email Sending | Enquiry notifications |
| Turnstile keys | Vars + secret | Form spam protection |

Drizzle ORM with drizzle-kit migrations. Secrets via `wrangler secret`, never committed.

### Data model

```sql
enquiries (
  id                TEXT PRIMARY KEY,      -- UUID
  created_at        INTEGER NOT NULL,      -- epoch ms
  name              TEXT NOT NULL,
  email             TEXT NOT NULL,
  phone             TEXT,
  preferred_contact TEXT NOT NULL,         -- 'email' | 'phone'
  summary           TEXT NOT NULL,         -- short, capped
  source_page       TEXT,
  status            TEXT NOT NULL DEFAULT 'new',  -- 'new'|'contacted'|'closed'|'active_matter'
  notified_at       INTEGER,               -- null = email not yet sent
  user_agent_hash   TEXT                   -- hashed, for abuse triage only
)
```

No documents, no story detail, no uploads, no raw IP, no raw user agent.

### Submission flow

1. Client validates with a Zod schema; the **same schema** runs server-side, so validation
   cannot drift.
2. Turnstile token verified server-side. Honeypot field checked.
3. **Write to D1 first.** D1 is the source of truth; email is a notification.
4. Send the notification email. On success, set `notified_at`.
5. Return success and render a confirmation that states what happens next and by when.

### Failure modes

A lost enquiry here is a person who reached out about the worst thing that ever happened to
them and heard nothing back. The design fails toward human contact:

| Failure | Behaviour |
|---|---|
| Email send fails | Enquiry is already persisted. `notified_at` stays null. A cron Worker retries; the admin list flags un-notified rows prominently. The user still sees success, because their enquiry *was* received |
| D1 write fails | Do **not** show a generic error. Attempt email as a fallback, and render Geoff's direct email and phone so the person always has a route through |
| Both fail | Full-page fallback with direct contact details and an apology; the form state is preserved so nothing they typed is lost |
| Turnstile fails | Inline, recoverable, with a plain-English explanation — never a dead end |

Rate limiting at the Cloudflare edge on `/enquiry` submissions.

### Admin

`/admin/*` protected by a Cloudflare Access application (identity provider enforced at the
edge, before the request reaches the Worker). List view sorted newest first, un-notified rows
flagged, detail view, status transitions, and delete. One-time dashboard setup documented in
`docs/`.

---

## 9. Privacy, retention and legal

- **Retention:** enquiries older than **24 months** are purged by a scheduled Worker, unless
  `status = 'active_matter'`. The period is a config constant, stated on `/privacy`, and
  enforced by code rather than intention.
- **Privacy notice:** written against the Australian Privacy Principles — what is collected,
  why, where it is stored, retention period, and how to request access or deletion.
- TGSA may fall within the Privacy Act small-business exemption, but handles sensitive
  information from vulnerable people. Voluntary compliance is both correct and a trust asset.
- **This spec drafts privacy wording; it is not legal advice.** The notice and any consent
  language must be reviewed by TGSA's lawyer before launch.
- No cookies beyond what is strictly necessary; no consent banner required as a consequence of
  DEC-9.

---

## 10. SEO and GEO

### SEO

Per-route metadata, `sitemap.ts`, `robots.ts`, Open Graph images, `Organization` and `Article`
JSON-LD. Primary target: the guide ranking for life-rights queries in Australia, where it
currently exists only as an unindexed PDF.

### GEO (generative engine optimization)

The audience increasingly asks a chatbot before a search engine. Being the source an answer is
built from is worth more than a blue link. The existing content is already well shaped for
this — both journal articles are titled as questions and answer in the opening sentence.

1. **Question-shaped `<h2>`s** matching real phrasing across the guide and journal.
2. **Answer-first paragraphs** — a self-contained, quotable, true-on-its-own claim in the
   first one or two sentences under each heading, elaboration after.
3. **`FAQPage` and `Article` JSON-LD**; `Organization` carries the ABN as `identifier` and
   Geoff as a credentialed `author` with `sameAs` links.
4. **`llms.txt`** at the root, plus markdown twins of the guide and articles
   (e.g. `/how-deals-work.md`).
5. **Specificity over adjectives** — "option periods typically run 12–18 months" is citable;
   "great outcomes" is not.
6. **Visible `dateModified`** on every article.

### Geographic targeting

`lang="en-AU"`, Australian spelling throughout, `Organization.areaServed: AU` with the
registered entity address, and jurisdiction stated explicitly in the copy ("in Australia there
is no general right of publicity"). The jurisdictional signal doubles as a GEO signal: it makes
TGSA the right source for an Australian question rather than a US one.

### Crawler policy (DEC-10)

`robots.txt` allows retrieval crawlers — `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot` — and
disallows training crawlers — `GPTBot`, `Google-Extended`. `/admin` disallowed for all.

### Honest limitation

GEO is a young discipline with poor measurement. The practices specified here are the durable
ones — good structured-content practice that also feeds retrieval. No attribution in any
assistant is promised; the build simply does nothing to prevent it.

---

## 11. Testing

**Unit / integration** — Vitest with `@cloudflare/vitest-pool-workers`:

- Zod schema accepts valid submissions and rejects each invalid shape.
- D1 write persists every field correctly.
- Retention purge deletes rows past 24 months and preserves `active_matter` rows.
- Notification retry sets `notified_at` and is idempotent.

**End to end** — Playwright, two journeys:

1. Submit an enquiry successfully; assert the row exists and the confirmation states what
   happens next.
2. **Submit with the D1 write forced to fail; assert the fallback contact details render.**
   This is the test that matters most — it protects the promise the site makes.

**Accessibility** — automated axe pass on both surfaces in CI, plus a manual keyboard pass on
the enquiry flow.

---

## 12. Delivery phases

The spec is deliberately larger than one sitting. It decomposes into three phases that each
ship something usable, in this order:

**Phase 1 — Site and content.** Design tokens, typography, layout shell, both surfaces, and
every static page: home, your-story, how-deals-work, journal, for-producers, slate shell,
about shell, privacy. Enquiry page renders with contact details but no form. Deployable and
genuinely useful on its own — the guide is public and indexable at the end of this phase.

**Phase 2 — Enquiry pipeline.** D1 schema and migrations, Drizzle, Zod validation, Turnstile,
the write-then-notify flow, every failure path, the confirmation state, and the tests that
cover them.

**Phase 3 — Admin and lifecycle.** Cloudflare Access configuration, the admin list and detail
views, status transitions, the notification retry cron, and the retention purge cron.

Each phase gets its own implementation plan.

## 13. Out of scope (candidate future work)

Authenticated storyteller portal with project stage tracking; document upload to R2;
newsletter; public slate with real projects; case studies; multi-author journal; CMS.

---

## 14. Required from TGSA before launch

1. Geoff's bio and track record (`about.ts` ships as a shell until supplied).
2. Contact email and phone for the fallback path and footer.
3. Registered entity address for `Organization` structured data.
4. Lawyer review of the privacy notice and any consent wording.
5. Decision on whether any slate entry may be published in de-identified form.
6. Confirmation of the domain to deploy against (`geoffshannonagency.com`).
