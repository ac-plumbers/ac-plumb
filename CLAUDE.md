# AC Plumbers – Claude Instructions

## Stack

- Astro 5 + Vue 3 islands + TypeScript + Tailwind CSS v4
- Netlify deployment
- Canonical site: `https://acplumb.co.uk`

## Path Aliases

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@styles/*` → `src/styles/*`
- `@layouts/*` → `src/layouts/*`

> Note: repository intentionally uses `fundations` (not `foundations`) in paths.

---

## Image Pipeline

See [IMAGES.md](./IMAGES.md) for full documentation.

- **Source of truth:** `src/images/services/` — always add/edit images here
- **Never edit** `public/images/services/` directly — it is auto-generated at build time
- `public/images/services/` — original files served to the browser (galleries, listings, about page)
- `public/images/services/optimized/` — WebP 400w variants used **only** by `ServiceHeroSection.astro` for hero backgrounds
- The prebuild script (`scripts/copy-images.js`) handles the copy and WebP generation automatically

---

## Coding Conventions

- Reuse existing components before creating new ones.
- Foundation primitives live in `src/components/fundations/` — prefer `Text`, `Link`, `Button`, `Kicker`, `Wrapper`.
- Use color/spacing tokens from `src/styles/global.css`; avoid hardcoded values.
- Never hardcode business/contact data — use `src/utils/businessConfig.ts` (`BUSINESS_CONFIG`).
- Keep semantic HTML, valid heading order, and accessibility intact at all times.
- Avoid `any`; follow strict TypeScript conventions.
- Skip-link target must remain `#main-content`.
- Two footers exist (`Footer.astro`, `Footer-1.astro`) — choose intentionally.

### Key Components

| Type | Components |
|------|-----------|
| Foundation primitives | `Text`, `Link`, `Button`, `Kicker` |
| Containers | `Wrapper` |
| Head / SEO | `BaseHead`, `Seo`, `Schema` |
| Service schema | `SchemaServices`, `SingleSchemaService` |

---

## Response Style

- Keep answers concise and implementation-first.
- Prefer small, safe diffs over broad rewrites.
- State assumptions briefly, then proceed.
- Highlight risks only when relevant.
- Return a short summary with files changed and next step.

---

## Service Content Frontmatter

Match `src/content/config.ts` exactly when creating or updating service markdown.
The markdown body (long-form content) goes below the frontmatter `---` as standard markdown.

```yaml
# Required
title: "Service Name"

# Optional metadata
description: "Brief description"
paragraph: "Additional paragraph"
sortedOrder: 1

# Images
image: "/images/services/image.jpeg"
alt: "Image alt text"
titleImage: "Image title"
imageHero: "/images/services/hero.jpeg"
altHero: "Hero image alt text"
titleImageHero: "Hero image title"

# Taxonomy
category: "category-name"
tags: ["tag1", "tag2"]
featured: true
slug: "service-slug"           # optional, usually derived from filename

# CMS-driven content
intro: "Short intro text"
benefits:
  - "Benefit one"
specialties:
  - "Specialty one"
features:
  - title: "Feature Name"
    description: "Feature description"
faqs:
  - question: "FAQ Question"
    answer: "FAQ Answer"

# Gallery
gallery:
  - src: "/images/services/photo.jpeg"
    alt: "Photo description"
    title: "Optional title"   # optional
```

> Note: `process` and `price` are NOT in the schema — do not add them.

---

## SEO Rules

- Title tag: primary keyword at the start, under 60 characters.
- Meta description: 155–160 characters with a clear CTA including the primary keyword.
- H1–H3 hierarchy: logical, with related keywords in headings.
- URLs: short, readable, keyword-rich (e.g. `/services/gas-boiler-installation`).
- Primary keyword within the first 100 words of body copy.
- 5–10 internal links per page with keyword-rich anchor text.
- Images: compressed with descriptive, keyword-relevant `alt` text.
- Page load under ~3 seconds; mobile-first performance.

---

## Accessibility Rules (WCAG 2.2 Level AA)

### General

- All code must conform to WCAG 2.2 Level AA minimum.
- Use native HTML elements and attributes for semantics before reaching for ARIA.
- Use appropriate landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- One `<h1>` per page; do not skip heading levels.
- Color must not be the only way to convey information.
- Text contrast: minimum 4.5:1 (small text), 3:1 (large text ≥ 18.5px bold or ≥ 24px).

### Keyboard

- All interactive elements must be keyboard navigable in a logical order.
- Keyboard focus must be clearly visible at all times.
- Static (non-interactive) elements must not be in the tab order.
- Hidden elements must not be keyboard focusable.
- Provide a skip link as the first focusable element: `<a href="#main-content" class="sr-only">Skip to main content</a>`.
- Focus must not become trapped without an escape mechanism (e.g. Escape key closes dialogs).

### Screen Readers

- All interactive elements need a name, role, value, state.
- `aria-expanded` must be toggled when expanding/collapsing menus.
- Navigation menus: use `<nav>` + `<ul>` with links — do not use `role="menu"` or `role="menubar"` for site navigation.

### Images & Icons

- Informative images: meaningful `alt` text.
- Decorative images: `alt=""`.
- SVGs used as graphics: `role="img"` + `aria-label`.
- Icon fonts / emojis: wrap in `<span role="img" aria-label="...">`.

### Forms

- Labels must accurately describe each control; use `for` + `id` association.
- Required fields: indicate visually (asterisk) and programmatically (`aria-required="true"`).
- On submit with errors: set focus to first invalid field; use `aria-invalid="true"` and `aria-describedby` for inline error messages.
- Do not disable submit buttons.

### After generating code

Always note that the code was built with accessibility in mind but may still have issues — recommend testing with [Accessibility Insights](https://accessibilityinsights.io/).
