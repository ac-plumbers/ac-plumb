# Gallery Content Collection — Implementation Plan

## Context

The gallery page (`src/pages/gallery.astro`) currently has all job data hardcoded with static image imports. The goal is to move each job into its own markdown file inside a content collection — consistent with the existing `services` and `areas` pattern — so new jobs can be added by dropping in a new `.md` file without touching page code.

**Decisions:** 1 image per job card, no detail page per job.

---

## 1. Schema — add to `src/content.config.ts`

```ts
const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      category: z.enum(['boiler', 'heating', 'gas', 'plumbing', 'renewable', 'smart', 'emergency']),
      location: z.string().optional(),
      date: z.date().optional(),
      image: image(),
      alt: z.string(),
      featured: z.boolean().default(false),
    }),
});
```

Add `gallery` to the `collections` export at the bottom.

---

## 2. File structure

```
src/content/gallery/
  modern-combi-boiler-installation.md
  gas-fitting-brighton.md
  air-source-heat-pump.md
  bathroom-renovation-hove.md
  viessmann-boiler-closeup.md
  central-heating-system.md
  designer-radiator-installation.md
  emergency-leak-repair.md
  hot-water-cylinder-upgrade.md
```

### Example frontmatter

```md
---
title: Modern Combi Boiler Installation
description: High-efficiency boiler installation for a family home in Brighton.
category: boiler
location: Brighton
date: 2024-03-15
image: ../../images/lavori/1.jpeg
alt: Modern combi boiler installation by AC Plumbers Ltd. in a Brighton home
featured: true
---
```

Images are referenced relative to the markdown file using the `image()` helper so Astro optimises them at build time.

---

## 3. Gallery page changes — `src/pages/gallery.astro`

- Remove all static `import imgN from ...` lines at the top
- Remove the hardcoded `galleryItems` array
- Add `const items = await getCollection('gallery')` — sort by `date` descending, featured first
- Replace `galleryItems.map(...)` with `items.map(...)` in the JSX
- Keep the category filter JS, category list, hero, CTA section, and styles unchanged

---

## 4. Files to change

| File | Change |
|---|---|
| `src/content.config.ts` | Add `gallery` collection + export |
| `src/content/gallery/*.md` | Create 9 files (one per existing job) |
| `src/pages/gallery.astro` | Replace hardcoded data with `getCollection('gallery')` |

---

## 5. Verification

1. `npm run build` — no TypeScript or schema errors
2. `/gallery` renders all 9 cards correctly
3. Category filter still works
4. Add a 10th `.md` file — page picks it up on next build with no code changes needed
