# AC Plumbers Copilot Supplement

Last updated: 2026-02-12

Primary instructions live in `.github/copilot-instructions.md`.
This file keeps only extra implementation notes to avoid duplication.

## Component References

- Foundation primitives: `src/components/fundations/`
- Elements: `Text`, `Link`, `Button`, `Kicker`
- Containers: `Wrapper`
- Head/SEO: `BaseHead`, `Seo`, `Schema`
- Service schema components: `SchemaServices`, `SingleSchemaService`

## Service Content Frontmatter

Match `src/content/config.ts` when creating/updating service markdown:

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

## Practical Notes

- Skip-link target should remain `#main-content`.
- Avoid hardcoded contact data; use `BUSINESS_CONFIG`.
- Two footers exist (`Footer.astro`, `Footer-1.astro`) so choose intentionally.

## Changelog

- 2026-02-12: Converted this file into a compact supplement to avoid overlap with root instructions.
