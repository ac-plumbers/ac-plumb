# AC Plumbers Copilot Instructions

## Overview

AC Plumbers is a plumbing service website built with Astro, Vue 3, TypeScript, and Tailwind CSS v4. The codebase prioritizes semantic HTML, accessibility, and a consistent foundation component system.

## Stack and Conventions

- **Astro + Vue 3**: Vue components use `<script setup lang="ts">` with the script block first.
- **TypeScript**: Prefer typed props, no `any`.
- **Content collections**: Services live in `src/content/services/*.md` and are accessed via `getCollection("services")`.
- **Icons**: Use Lucide via `@lucide/astro`.

## Project Structure

- **Layouts**: `src/layouts/BaseLayout.astro` is the main wrapper.
- **Foundations**: Reusable primitives in `src/components/fundations/`.
  - **Elements**: `Text`, `Link`, `Button`, `Kicker` in `src/components/fundations/elements/`.
  - **Containers**: `Wrapper` in `src/components/fundations/containers/`.
  - **Head/SEO**: `BaseHead`, `Seo`, `Schema` in `src/components/fundations/head/`.
  - **Schema services**: `SchemaServices`, `SingleSchemaService` in `src/components/fundations/schema-services/`.
- **Global**: Site-wide components in `src/components/global/`.
- **Pages**: Astro pages in `src/pages/`.

## Import Aliases

- `@/` -> `src/`
- `@components/` -> `src/components/`
- `@utils/` -> `src/utils/`
- `@lib/` -> `src/lib/`

Prefer aliases over relative imports when available.

## Vue Islands

Use Astro client directives for Vue islands:
- `client:load` for interactive header/sticky buttons.
- `client:only="vue"` for Vue-only forms or widgets.

## Styling System

- **Tailwind tokens only**: Use classes derived from `src/styles/global.css` tokens.
- **Color usage**: Prefer direct classes like `text-primary-600`, `bg-accent-500`, `border-neutral-200`.
- **CSS variables**: Use arbitrary values like `border-[--color-border-50]` only when a token class does not exist.
- **Typography**: Headings use Lato, body uses Inconsolata (wired in global styles).

## Content Schema (Services)

Match `src/content/config.ts`:

```yaml
title: "Service Name"
description: "Brief description"
price: 0
sortedOrder: 1
image: "/path/to/image.jpg"
alt: "Image description"
category: "category-name"
tags: ["tag1", "tag2"]
featured: true
slug: "service-slug"
intro: "Short intro text"
benefits:
  - "Benefit one"
specialties:
  - "Specialty one"
features:
  - title: "Feature Name"
    description: "Feature description"
process:
  - title: "Step Name"
    description: "Step description"
faqs:
  - question: "FAQ Question"
    answer: "FAQ Answer"
```

## Business Configuration

Use `src/utils/businessConfig.ts` for all business data:
- `BUSINESS_CONFIG` (name, phone, email, address, geo, website).
- Helpers: `formatPhoneForDisplay`, `formatPhoneForTel`, `getFullAddress`, `fullYear`.
- Canonical domain is `https://acplumb.co.uk` (use this in schema, links, and metadata).

## Utilities and Types

- `cn()` utility in `src/lib/utils.ts` for class merging.
- Service types in `src/lib/types.ts` (`ServiceFrontmatter`, etc.).

## Accessibility and SEO

- Follow `.github/instructions/a11y.instructions.md`.
- Keep heading order correct and use semantic landmarks.
- Skip link pattern uses `href="#main-content"` (see `src/components/global/Header.astro`).
- Use `src/components/fundations/head/Schema.astro` and `Seo.astro` for metadata.
- Use `SchemaServices` / `SingleSchemaService` for service schema on listings/detail pages.

## Common Mistakes to Avoid

- Typo `aria-labbelledby` exists in `src/components/home/Services.astro`; always use `aria-labelledby`.
- Avoid hardcoded contact details; use `BUSINESS_CONFIG` helpers.
- There are two footer components (`Footer.astro`, `Footer-1.astro`); be explicit about which one a layout should use.

## Development Commands

```bash
npm run dev
npm run build
npm run preview
npm run astro
```
