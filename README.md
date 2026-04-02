# AC Plumbers Ltd. — Website

Production website for [AC Plumbers Ltd.](https://acplumb.co.uk), a Gas Safe registered plumbing and heating company based in Brighton, UK.

**Live site:** [acplumb.co.uk](https://acplumb.co.uk)

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro 6](https://astro.build/) — static output |
| UI / Interactivity | [Vue 3](https://vuejs.org/) islands via `@astrojs/vue` |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via Vite plugin |
| Language | TypeScript (strict) |
| Deployment | [Netlify](https://netlify.com) |
| Node | 22 (required by Astro 6) |

---

## Project Structure

```text
src/
├── components/
│   ├── fundations/        # Design system primitives (Text, Link, Button, Kicker, Wrapper)
│   ├── global/            # Header, Footer, navigation
│   └── ui/                # Page-level UI components
├── content/
│   ├── services/          # Service pages (Astro content collection)
│   ├── areas/             # Service area pages (Astro content collection)
│   ├── legal/             # Privacy, T&Cs, Cookie policy
│   └── config.ts          # Content collection schemas
├── data/                  # Static data files
├── images/                # Source images (copied to public/ at build time)
├── layouts/               # Page layouts
├── pages/                 # File-based routing (.astro files)
│   ├── services/
│   ├── areas-we-serve/
│   ├── index.astro
│   ├── about-us.astro
│   ├── contact-us.astro
│   └── ...
├── styles/
│   └── global.css         # Color tokens, spacing, Tailwind base
└── utils/
    ├── businessConfig.ts  # Single source of truth for all business/contact data
    └── ...
scripts/
└── copy-images.js         # Prebuild: copies and optimises images to public/
netlify.toml               # Build config, redirects, security headers
```

### Path Aliases

| Alias | Resolves to |
| --- | --- |
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@assets/*` | `src/assets/*` |
| `@styles/*` | `src/styles/*` |
| `@layouts/*` | `src/layouts/*` |

> Note: the directory is intentionally spelled `fundations` (not `foundations`).

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev
```

> Netlify's `--legacy-peer-deps` flag is required due to `@lucide/astro` declaring a peer dependency on Astro 4/5 while the project runs Astro 6. This is configured automatically in `netlify.toml` and you can also set it locally via `.npmrc` if needed.

---

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run reviews:fetch` | Fetch latest Checkatrade reviews |
| `npm run deploy:preview` | Deploy preview to Netlify |
| `npm run deploy:prod` | Deploy to production on Netlify |

---

## Deployment

The site deploys to Netlify. Build settings are fully defined in [`netlify.toml`](netlify.toml).

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist/` |
| Node version | 22 |

**First-time setup:**

```bash
# Install Netlify CLI (once)
npm install -g netlify-cli

# Authenticate
netlify login

# Link repo to Netlify site
netlify init

# Deploy preview
npm run deploy:preview

# Deploy to production
npm run deploy:prod
```

**Netlify config includes:**

- 301 redirects from old WordPress URLs to new routes
- Canonical domain enforcement (apex HTTPS, no `www`)
- Security headers (HSTS, CSP frame options, no-sniff, permissions policy)
- Aggressive cache headers for static assets (`/assets/*`, `/images/*`)

---

## Content

Services and areas are managed as **Astro content collections** with frontmatter-driven CMS fields. See [`src/content/config.ts`](src/content/config.ts) for the full schema.

### Services

| Slug | Page |
| --- | --- |
| `gas-boiler-installation` | `/services/gas-boiler-installation/` |
| `boiler-servicing-and-repair` | `/services/boiler-servicing-and-repair/` |
| `central-heating-installation` | `/services/central-heating-installation/` |
| `gas-safety-checks-cp12` | `/services/gas-safety-checks-cp12/` |
| `renewable-air-source-heat-pump` | `/services/renewable-air-source-heat-pump/` |
| `all-aspects-of-plumbing-heating-and-gas` | `/services/all-aspects-of-plumbing-heating-and-gas/` |

### Service Frontmatter (key fields)

```yaml
title: "Service Name"
description: "Meta description (155–160 chars)"
intro: "Short intro text"
benefits:
  - "Benefit one"
features:
  - title: "Feature Name"
    description: "Feature description"
faqs:
  - question: "FAQ Question"
    answer: "FAQ Answer"
gallery:
  - src: "/images/services/photo.jpeg"
    alt: "Descriptive alt text"
```

> `process` and `price` are **not** in the schema — do not add them.

---

## Design System

### Brand Colors (OKLCH)

| Name | Hex | Usage |
| --- | --- | --- |
| Teal | `#176776` | Primary — headers, buttons |
| Sky Blue | `#21B6DF` | Secondary — highlights, links |
| Orange | `#F4991D` | Accent — CTAs |
| Light Gray | `#E4E8E9` | Backgrounds, neutrals |

Tokens are defined in [`src/styles/global.css`](src/styles/global.css) as CSS custom properties with full shade scales (50–950). Always use tokens — never hardcode color values.

### Foundation Primitives

| Component | Purpose |
| --- | --- |
| `Text` | Body copy with consistent typographic scale |
| `Link` | Accessible anchor with consistent styling |
| `Button` | CTA element with variant support |
| `Kicker` | Small label/eyebrow text above headings |
| `Wrapper` | Page-width container with responsive padding |

Always reach for these primitives before creating new components.

---

## Business Data

All business/contact information lives in a single file:

```text
src/utils/businessConfig.ts  →  BUSINESS_CONFIG
```

**Never hardcode** phone numbers, email addresses, company name, VAT number, or address anywhere else in the codebase. Import from `BUSINESS_CONFIG` instead.

---

## Coding Conventions

- Follow strict TypeScript — no `any`
- Maintain semantic HTML and valid heading order (one `<h1>` per page)
- All pages must conform to **WCAG 2.2 Level AA**
- Skip-link target must remain `#main-content`
- Two footers exist (`Footer.astro`, `Footer-1.astro`) — choose intentionally based on page context
- SEO: title tag under 60 chars, meta description 155–160 chars, primary keyword in first 100 words

---

## Business

**AC Plumbers Ltd.**
Gas Safe registered plumbing and heating engineers serving Brighton & Hove and surrounding areas.

| Detail | Value |
| --- | --- |
| Phone | 07535 653 850 |
| Landline | 01273 680 731 |
| Email | info@acplumb.co.uk |
| Address | 21j Campbell Road, Brighton, BN1 4QD |
| Company No. | 10187057 |
| VAT No. | 300995607 |
