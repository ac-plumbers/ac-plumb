# Astro SEO Audit Report - AC Plumbers Ltd.

**Repository:** ac-plumbers/ac-plumb
**Branch audited:** main
**Audit date:** 21 April 2026
**Prepared on:** 22 April 2026

## Executive Summary

This audit reviewed the Astro SEO setup across nine core categories: head metadata, structured data, content schema, OG assets, indexing, agent discovery, performance, redirects, and build-time validation.

The site currently appears to be intentionally in a pre-launch lockdown state (global crawl blocking and default noindex behavior). That is valid temporarily, but those controls are launch blockers and must be removed or adjusted before go-live.

## Score

| Category                                     |     Score |
| -------------------------------------------- | --------: |
| 1. `<Seo>` component and head                |      5/10 |
| 2. Structured data / JSON-LD graph           |      6/10 |
| 3. Content collections and schema            |      4/10 |
| 4. Open Graph images                         |      3/10 |
| 5. Sitemaps and indexing                     |      1/10 |
| 6. Agent discovery                           |      3/10 |
| 7. Performance                               |      6/10 |
| 8. Redirects and error handling              |      6/10 |
| 9. Build-time validation and content quality |      2/10 |
| **Total**                                    | **36/90** |

## Findings by Category

### 1) `<Seo>` component and head metadata (5/10)

- **Launch blocker:** default `noindex = true` in `BaseHead.astro` means pages are noindexed unless overridden.
- **Launch blocker:** `public/robots.txt` currently has:
  - `User-agent: *`
  - `Disallow: /`
- Canonical URLs are always emitted, including when `noindex` is true (canonical should be omitted on noindex pages).
- Indexable pages do not emit robust robots directives such as:
  - `max-snippet:-1`
  - `max-image-preview:large`
  - `max-video-preview:-1`
- Twitter tags duplicate Open Graph content (optional cleanup).
- OG metadata uses `1200x630`; preferred discoverability target is 16:9 (`1200x675`).

### 2) Structured data / JSON-LD graph (6/10)

- Good baseline: linked `@graph` structure with `LocalBusiness`, geo coordinates, and `sameAs` references.
- `dateModified` appears hardcoded and outdated.
- Graph references `#website` and `#breadcrumb` IDs that are not fully defined, creating dangling references.
- `LocalBusiness` can be made more specific (`Plumber`) to improve semantic precision.
- `openingHoursSpecification` object format would be stronger than single text string for machine parsing.

### 3) Content collections and schema validation (4/10)

- Collection schemas exist but do not enforce metadata quality constraints (e.g., title/description lengths).
- No `seoSchema` integration from `@jdevalk/astro-seo-graph`.
- No explicit `publishDate` in relevant collections for richer article-like signals and accurate freshness handling.
- Slug strategy is implicit; explicit slug support could improve URL governance on content refactors.

### 4) Open Graph images (3/10)

- Site appears to rely on a single default OG image for many pages.
- Config points to `/og/ac-plumbers-ltd-signature-1200x630.jpg`, but that file is not present in `public/og/`.
- No build-time per-page OG generator route (e.g., `src/pages/og/[...slug].jpg.ts`) detected.
- Current declared dimensions are not the preferred 16:9 social standard.

### 5) Sitemaps and indexing (1/10)

- `@astrojs/sitemap` is not integrated.
- `robots.txt` blocks crawling and does not expose a sitemap index.
- RSS feed (`@astrojs/rss`) was not detected.
- No git-based `lastmod` strategy identified.
- No IndexNow integration detected (production-gated submission).

### 6) Agent discovery (3/10)

- `public/llms.txt` exists, but format appears policy-oriented, not discovery-oriented per llmstxt conventions.
- No schema corpus endpoints (e.g., `/schema/*.json`) detected.
- No `schemamap.xml` and no `Schemamap:` robots directive.
- No markdown alternate endpoints (`*.md`) for AI crawlers.

### 7) Performance (6/10)

- Good baseline: static output and Astro architecture.
- Cache headers target `/assets/*` and `/images/*`; Astro build assets are typically under `/_astro/*` and should receive immutable long-term caching.
- `No-Vary-Search` header not configured to collapse UTM query variants.
- `ClientRouter` is present; strategy tuning can still be optimized.

### 8) Redirects and error handling (6/10)

- Strong canonical host redirects are in place (HTTPS + apex host normalization).
- Legacy URL redirects exist for known old routes.
- 404 catch-all configured with status `404` in Netlify config.
- Fuzzy redirect fallback on 404 page is not detected.
- External background image on 404 page can be replaced with local static asset for reliability/performance control.

### 9) Build-time validation and content quality (2/10)

- No `seoGraph()` integration detected for core validators (`validateH1`, `validateUniqueMetadata`, etc.).
- No external broken-link CI workflow (e.g., lychee) detected.
- Metadata guardrails are currently mostly manual.

## Priority Action Plan

### P0 - Launch blockers (must complete before launch)

1. Replace crawl lock in `public/robots.txt` with production-safe directives and sitemap reference.
2. Change default `noindex` behavior in shared head flow so indexability is opt-out, not opt-in.
3. Integrate sitemap generation and publish sitemap index URL.
4. Resolve missing OG image path mismatch (`businessConfig` vs actual files).

### P1 - High impact improvements

1. Suppress canonical tag when a page is `noindex`.
2. Add robust robots directives for indexable pages.
3. Fix structured-data dangling graph references and improve entity specificity.
4. Correct Astro asset caching to `/_astro/*` immutable policy.
5. Add `No-Vary-Search` for UTM cache normalization.

### P2 - Quality and resilience

1. Add build-time SEO validations with `@jdevalk/astro-seo-graph`.
2. Add metadata length validation in content schemas.
3. Add RSS feed and advertise via head links.
4. Improve `llms.txt` to discovery format and add schema endpoints/schemamap.
5. Add CI external link checks.

## Suggested Rollout Sequence

1. **Indexing foundation:** robots + noindex defaults + sitemap.
2. **SERP quality:** canonical/noindex behavior + metadata directives + OG fixes.
3. **Semantic graph hardening:** schema cleanup and entity improvements.
4. **Automation:** build validators + link-check CI + content schema constraints.
5. **Agent/discovery layer:** llms/schema endpoints/markdown alternates.

## Non-file Operational Tasks

- Register and verify property in Google Search Console.
- Register and verify property in Bing Webmaster Tools.
- Submit sitemap index in both tools.
- If adopting IndexNow, generate key and gate submission to production deploys only.
- Validate representative pages using Rich Results Test and ClassySchema.

## Notes

This report reflects a point-in-time audit on 21 April 2026. The current crawl/noindex behavior appears intentional for a coming-soon phase; however, those settings should be removed or adjusted before launch to avoid full deindexing.
